/* SERENIA Speech Engine v1
   Browser-native text-to-speech with FR/EN/DE voice selection.
   No secret keys. Uses the voices exposed by the user's browser/OS.
*/
window.SERENIA_SPEECH = (() => {
  const synth = window.speechSynthesis || null;
  let voices = [];
  let current = null;
  let speaking = false;

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

  function cancel(){
    if(!synth) return;
    synth.cancel();
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

    const utterance = new SpeechSynthesisUtterance(spoken);
    const voice = bestVoice(lang);
    if(voice) utterance.voice = voice;
    utterance.lang = voice?.lang || localeFor(lang);
    utterance.rate = typeof opts.rate === "number" ? opts.rate : 0.94;
    utterance.pitch = typeof opts.pitch === "number" ? opts.pitch : 1.02;
    utterance.volume = typeof opts.volume === "number" ? opts.volume : 1;

    utterance.onstart = () => {
      speaking = true;
      if(opts.onstart) opts.onstart(voice);
    };
    utterance.onend = () => {
      speaking = false;
      current = null;
      if(opts.onend) opts.onend();
    };
    utterance.onerror = (e) => {
      speaking = false;
      current = null;
      if(opts.onerror) opts.onerror(e);
    };

    current = utterance;
    synth.speak(utterance);
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
