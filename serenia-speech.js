/* SERENIA Speech Engine v1
   Browser-native text-to-speech with FR/EN/DE voice selection.
   No secret keys. Uses the voices exposed by the user's browser/OS.
*/
window.SERENIA_SPEECH = (() => {
  const synth = window.speechSynthesis || null;
  let voices = [];
  let current = null;
  let speaking = false;
  let generation = 0;

  function refreshVoices(){
    if(!synth) return [];
    voices = synth.getVoices() || [];
    return voices;
  }

  if(synth){
    refreshVoices();
    if(typeof synth.addEventListener === "function"){
      synth.addEventListener("voiceschanged", refreshVoices);
    }else{
      synth.onvoiceschanged = refreshVoices;
    }
  }

  function localeFor(lang){
    if(lang === "de") return "de-DE";
    if(lang === "en") return "en-US";
    return "fr-FR";
  }

  function scoreVoice(v, lang){
    const target = localeFor(lang).toLowerCase();
    const prefix = target.slice(0,2);
    const vl = (v.lang || "").toLowerCase();
    const name = (v.name || "").toLowerCase();
    let score = 0;

    if(vl === target) score += 100;
    else if(vl.startsWith(prefix)) score += 75;

    // Prefer common higher-quality system/browser voices when present.
    if(/natural|neural|premium|enhanced/.test(name)) score += 25;
    if(/google|microsoft|apple|siri/.test(name)) score += 12;

    // Soft preference for pleasant, commonly available voices without
    // making gender a requirement.
    if(lang === "fr" && /denise|hortense|audrey|am[eé]lie|thomas|henri/.test(name)) score += 8;
    if(lang === "en" && /aria|jenny|samantha|ava|daniel|guy|ryan/.test(name)) score += 8;
    if(lang === "de" && /katja|conrad|anna|vicki|hed[aä]|stefan/.test(name)) score += 8;

    if(v.default) score += 3;
    return score;
  }

  function bestVoice(lang){
    refreshVoices();
    if(!voices.length) return null;
    return voices
      .map(v => ({v,score:scoreVoice(v,lang)}))
      .sort((a,b) => b.score-a.score)[0]?.v || null;
  }

  function cleanText(text){
    return String(text || "")
      .replace(/https?:\/\/\S+/g, "")
      .replace(/[🌿🫶💔🌫️🌙🫧⚡🪞🔁📞🔒🎤🔊🔇✦]/gu, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  function splitForSpeech(text,max=230){
    const sentences = text.match(/[^.!?…]+[.!?…]?/g) || [text];
    const chunks=[];
    let currentChunk="";
    for(const raw of sentences){
      const s=raw.trim();
      if(!s) continue;
      if((currentChunk+" "+s).trim().length <= max){
        currentChunk=(currentChunk+" "+s).trim();
      }else{
        if(currentChunk) chunks.push(currentChunk);
        if(s.length <= max){
          currentChunk=s;
        }else{
          const words=s.split(/\s+/);
          currentChunk="";
          for(const w of words){
            if((currentChunk+" "+w).trim().length > max){
              if(currentChunk) chunks.push(currentChunk);
              currentChunk=w;
            }else currentChunk=(currentChunk+" "+w).trim();
          }
        }
      }
    }
    if(currentChunk) chunks.push(currentChunk);
    return chunks;
  }

  function cancel(){
    generation++;
    if(synth) synth.cancel();
    current = null;
    speaking = false;
  }

  function speak(text, lang="fr", opts={}){
    if(!synth || typeof SpeechSynthesisUtterance === "undefined"){
      if(opts.onunsupported) opts.onunsupported();
      return false;
    }

    const spoken = cleanText(text);
    if(!spoken) return false;

    cancel();
    const myGeneration=++generation;
    const chunks=splitForSpeech(spoken);
    const voice=bestVoice(lang);
    let index=0;
    let started=false;

    const next=()=>{
      if(myGeneration!==generation) return;
      if(index>=chunks.length){
        speaking=false;
        current=null;
        if(opts.onend) opts.onend();
        return;
      }

      const utterance=new SpeechSynthesisUtterance(chunks[index++]);
      if(voice) utterance.voice=voice;
      utterance.lang=voice?.lang || localeFor(lang);
      utterance.rate=typeof opts.rate==="number" ? opts.rate : 0.94;
      utterance.pitch=typeof opts.pitch==="number" ? opts.pitch : 1.02;
      utterance.volume=typeof opts.volume==="number" ? opts.volume : 1;

      utterance.onstart=()=>{
        if(myGeneration!==generation) return;
        speaking=true;
        if(!started){
          started=true;
          if(opts.onstart) opts.onstart(voice);
        }
      };
      utterance.onend=()=>next();
      utterance.onerror=(e)=>{
        if(myGeneration!==generation) return;
        speaking=false;
        current=null;
        if(opts.onerror) opts.onerror(e);
      };

      current=utterance;
      synth.speak(utterance);
    };

    next();
    return true;
  }

  function isSupported(){
    return Boolean(synth && typeof SpeechSynthesisUtterance !== "undefined");
  }

  function isSpeaking(){
    return Boolean(speaking || (synth && synth.speaking));
  }

  function availableVoices(lang){
    refreshVoices();
    const prefix=(lang || "").slice(0,2).toLowerCase();
    return voices.filter(v => (v.lang || "").toLowerCase().startsWith(prefix));
  }

  return {
    isSupported,
    isSpeaking,
    speak,
    cancel,
    refreshVoices,
    bestVoice,
    availableVoices,
    localeFor
  };
})();
