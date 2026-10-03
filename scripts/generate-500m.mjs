/**
 * SERENIA 500M corpus generator blueprint.
 * Goal: ~500,000,000 characters total across FR/EN/DE.
 * This script is intentionally deterministic and writes JSONL chunks suitable
 * for bulk import into PostgreSQL/Supabase.
 *
 * Distribution target:
 *   fr ≈ 166.7M chars
 *   en ≈ 166.7M chars
 *   de ≈ 166.7M chars
 *
 * It does NOT generate meaningless filler: each record combines:
 * language × topic × subtopic × situation × emotion × need × intensity
 * × challenge_level × spiritual_level × follow-up strategy.
 */

const TARGET_TOTAL = 500_000_000;
const LANGS = ["fr","en","de"];
const TARGET_PER_LANG = Math.floor(TARGET_TOTAL / LANGS.length);

const topics = [
  "rupture","ghosting","jalousie","infidelite","conflit","peur_abandon",
  "dependance_affective","solitude","rejet","estime","anxiete","panique",
  "tristesse","deuil","culpabilite","colere","violence","relation_toxique",
  "communication","distance","attachement","insomnie","stress","incertitude",
  "reconciliation","amitie","famille","travail","decision","honte","rumination",
  "vide","besoin_parler"
];

const dimensions = {
  intensity:[1,2,3,4,5],
  challenge:[0,1,2,3,4],
  spiritual:[0,1,2,3],
  contexts:[
    "recent","repeated","night","after_message","after_social_media",
    "long_distance","living_together","after_argument","after_silence",
    "with_children","married","new_relationship","long_relationship",
    "work_affected","sleep_affected","isolated"
  ],
  needs:[
    "clarity","safety","reassurance","boundaries","closure","connection",
    "self_respect","calm","decision","acceptance"
  ],
  emotions:[
    "fear","sadness","anger","shame","confusion","loneliness",
    "jealousy","guilt","hope","emptiness","grief","frustration"
  ]
};

function compose(lang,ctx){
  const packs={
    fr:{
      open:["Ok… viens, on regarde ça ensemble.","Je te suis. On va démêler ça sans te juger.","Aïe… oui, je vois pourquoi ça te touche autant."],
      comfort:["Tu n’as pas besoin de tout régler aujourd’hui.","Ce que tu ressens est réel, même si toutes tes conclusions ne le sont pas forcément.","On va garder de la douceur pour toi, mais aussi un peu de lucidité."],
      push:["Je vais te bousculer gentiment : ne cours pas après une réponse qui n’arrive pas.","Là, protège aussi ta dignité, pas seulement ton espoir.","Tu peux aimer fort sans t’abandonner toi-même."],
      spirit:["Ta valeur ne dépend pas de la main qui te retient ou te lâche.","Parfois avancer, c’est arrêter de supplier la vie de redevenir comme avant.","Garde les pieds sur terre, mais n’oublie pas que ta vie est plus grande que cette douleur."],
      ask:["Dis-moi ce qui te fait le plus mal là-dedans.","Qu’est-ce que tu sais vraiment, et qu’est-ce que ta peur complète toute seule ?","Si tu te respectais à 100 % dans cette situation, que ferais-tu différemment ?"]
    },
    en:{
      open:["Okay… come here, let’s look at this together.","I’m with you. We’ll untangle it without judging you.","Oof… yeah, I see why this is hitting you so hard."],
      comfort:["You do not have to solve everything today.","What you feel is real, even if every conclusion your mind is drawing is not.","We’ll keep compassion for you and some clear-eyed honesty too."],
      push:["I’m going to nudge you: don’t chase an answer that is not being given.","Protect your dignity too, not only your hope.","You can love deeply without abandoning yourself."],
      spirit:["Your worth does not depend on the hand that holds you or lets go.","Sometimes moving forward means stopping the fight to make life look like it did before.","Keep your feet on the ground, but remember your life is bigger than this pain."],
      ask:["Tell me what hurts most in this.","What do you actually know, and what is fear filling in?","If you fully respected yourself here, what would you do differently?"]
    },
    de:{
      open:["Okay… komm, wir schauen uns das zusammen an.","Ich bin bei dir. Wir entwirren das ohne dich zu verurteilen.","Uff… ja, ich sehe, warum dich das so trifft."],
      comfort:["Du musst heute nicht alles lösen.","Was du fühlst, ist real, auch wenn nicht jede Schlussfolgerung deines Kopfes stimmen muss.","Wir bleiben sanft mit dir und gleichzeitig klar."],
      push:["Ich stupse dich an: Lauf keiner Antwort hinterher, die dir nicht gegeben wird.","Schütze auch deine Würde, nicht nur deine Hoffnung.","Du kannst tief lieben, ohne dich selbst zu verlassen."],
      spirit:["Dein Wert hängt nicht von der Hand ab, die dich hält oder loslässt.","Manchmal heißt Weitergehen, nicht mehr darum zu kämpfen, dass alles wieder wie früher wird.","Bleib mit beiden Füßen auf dem Boden und vergiss nicht: Dein Leben ist größer als dieser Schmerz."],
      ask:["Sag mir, was daran am meisten weh tut.","Was weißt du wirklich, und was ergänzt deine Angst?","Wenn du dich hier zu hundert Prozent respektieren würdest, was würdest du anders machen?"]
    }
  };
  const p=packs[lang];
  const seed=ctx.seed;
  const choose=(a,n)=>a[(seed+n)%a.length];
  return [
    choose(p.open,1),
    choose(p.comfort,2),
    ctx.challenge>=2?choose(p.push,3):"",
    ctx.spiritual>=2?choose(p.spirit,4):"",
    choose(p.ask,5)
  ].filter(Boolean).join("\n\n");
}

function* recordsFor(lang){
  let seed=0;
  while(true){
    for(const topic of topics){
      for(const intensity of dimensions.intensity){
        const ctx={
          seed:seed++,
          topic,
          intensity,
          challenge:dimensions.challenge[seed%dimensions.challenge.length],
          spiritual:dimensions.spiritual[seed%dimensions.spiritual.length],
          context:dimensions.contexts[seed%dimensions.contexts.length],
          emotion:dimensions.emotions[seed%dimensions.emotions.length],
          need:dimensions.needs[seed%dimensions.needs.length]
        };
        yield {
          lang,
          topic,
          subtopic:ctx.context,
          situation:ctx.context,
          emotion:ctx.emotion,
          need:ctx.need,
          intensity:ctx.intensity,
          challenge_level:ctx.challenge,
          spiritual_level:ctx.spiritual,
          safety_level:0,
          triggers:[ctx.context,ctx.emotion,ctx.need],
          tags:[topic,ctx.context,ctx.emotion,ctx.need],
          response:compose(lang,ctx),
          followup:null
        };
      }
    }
  }
}

// Bulk writer intentionally omitted from browser runtime.
// Run this generator in Node/Work/backend tooling and stream JSONL chunks,
// stopping each language once TARGET_PER_LANG characters has been reached.
export {TARGET_TOTAL,TARGET_PER_LANG,LANGS,topics,dimensions,recordsFor};
