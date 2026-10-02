/* SERENIA Knowledge Base — V1
   Base éditable séparée de l'interface.
   Aucune donnée utilisateur n'est envoyée à un serveur.
*/
window.SERENIA_KB = {
  meta: {
    version: "1.0.0",
    language: "fr",
    updated: "2026-10-02"
  },

  emergency: {
    highRiskPatterns: [
      "je veux me suicider","je vais me suicider","je vais me tuer","je veux me tuer",
      "j ai un plan pour mourir","j ai un plan pour me suicider","je veux mourir maintenant",
      "je vais en finir","je veux en finir maintenant","je vais passer a l acte",
      "je ne serai plus la demain","adieu tout le monde"
    ],
    concernPatterns: [
      "je veux mourir","envie de mourir","plus envie de vivre","je ne veux plus vivre",
      "a quoi bon vivre","je veux disparaitre","j aimerais ne plus etre la",
      "je n en peux plus de vivre","la vie ne vaut plus la peine","je suis au bout"
    ],
    selfHarmPatterns: [
      "me faire du mal","me mutiler","me couper","me blesser volontairement"
    ]
  },

  global: {
    gentleOpeners: [
      "Merci de l’avoir posé ici.",
      "Je t’entends.",
      "Ce que tu décris mérite qu’on s’y arrête un instant.",
      "Tu n’as pas besoin de tout résoudre d’un coup.",
      "On peut regarder ça morceau par morceau."
    ],
    grounding: [
      "Pour les deux prochaines minutes, essaie seulement de ralentir l’expiration et de poser les pieds au sol.",
      "Avant de chercher une solution complète, choisis une seule chose que tu peux faire dans l’heure qui vient.",
      "Si ton esprit tourne en boucle, écris trois faits certains et sépare-les de ce que tu crains ou imagines.",
      "Reviens à quelque chose de concret : boire un verre d’eau, t’asseoir, respirer plus lentement, envoyer un message à quelqu’un de sûr."
    ],
    humanConnection: [
      "Si tu peux, ne reste pas seul·e avec ça : un proche fiable, un médecin, un psychologue ou un service d’écoute peut prendre le relais avec toi.",
      "Même un message très simple à quelqu’un de confiance — « Ça ne va pas fort, tu peux rester un peu avec moi ? » — peut alléger la charge.",
      "Quand la souffrance déborde, demander une présence humaine est une vraie action, pas un échec."
    ]
  },

  topics: [
    {
      id:"rupture", label:"Rupture", icon:"💔",
      keywords:["rupture","quitte","quitté","quittée","séparation","sépare","séparé","séparée","ex","fini entre nous","relation terminée","c est fini"],
      validations:[
        "Une rupture peut faire mal jusque dans le corps : manque, confusion, colère et espoir peuvent se mélanger.",
        "Quand un lien important s’arrête, le cerveau cherche souvent encore la personne, les habitudes et les réponses.",
        "Tu peux savoir rationnellement que c’est terminé et ressentir malgré tout un attachement très fort."
      ],
      perspectives:[
        "La douleur actuelle ne dit pas que tu dois agir immédiatement. Elle dit surtout que le lien comptait.",
        "Chercher une explication parfaite maintient parfois la blessure ouverte. Une partie de l’apaisement vient aussi d’accepter ce qui reste sans réponse.",
        "Le manque n’est pas une preuve que la relation devait continuer ; c’est aussi une réaction normale à la perte d’un lien."
      ],
      actions:[
        "Évite, si possible, les décisions impulsives aujourd’hui. Donne-toi 24 heures avant d’envoyer un long message.",
        "Réduis pendant quelques jours les déclencheurs inutiles : profil, anciennes conversations, photos consultées en boucle.",
        "Note ce qui te manque réellement : la personne, la sécurité, l’habitude, la projection d’avenir, ou le fait d’être choisi·e."
      ],
      followups:["Qu’est-ce qui fait le plus mal aujourd’hui : le manque, l’incompréhension ou la peur que ce soit définitif ?","La rupture est-elle récente ?","As-tu encore des contacts réguliers avec cette personne ?"]
    },
    {
      id:"ghosting", label:"Silence / ghosting", icon:"📵",
      keywords:["ne répond plus","ne repond plus","vu sans répondre","vu sans repondre","ghost","ghosting","silence radio","m ignore","m'ignore","aucune nouvelle","plus de nouvelles","bloqué","bloquée","bloque partout"],
      validations:[
        "Le silence peut être extrêmement déstabilisant parce qu’il laisse ton cerveau remplir les blancs.",
        "Ne pas recevoir de réponse crée souvent plus d’angoisse qu’une réponse claire, même difficile.",
        "Être ignoré·e touche facilement l’estime de soi, mais le silence de l’autre ne définit pas ta valeur."
      ],
      perspectives:[
        "Tu peux contrôler la clarté de ton message, pas la volonté de l’autre de répondre.",
        "Multiplier les messages soulage parfois quelques minutes, puis augmente l’attente et la tension.",
        "L’absence de réponse est déjà une information sur ce que l’autre est capable ou disposé à donner maintenant."
      ],
      actions:[
        "Si tu as déjà écrit clairement, laisse un espace réel avant de relancer.",
        "Décide d’un moment précis où tu vérifieras ton téléphone, plutôt que toutes les deux minutes.",
        "Ramène ton attention vers une action qui ne dépend pas de cette personne aujourd’hui."
      ],
      followups:["Depuis combien de temps n’as-tu plus de réponse ?","Avais-tu envoyé une question claire ou plusieurs messages successifs ?","Ce silence arrive-t-il souvent dans votre relation ?"]
    },
    {
      id:"jalousie", label:"Jalousie", icon:"🟢",
      keywords:["jaloux","jalouse","jalousie","autre homme","autre femme","like ses photos","réseaux sociaux","reseaux sociaux","parle à son ex","parle a son ex","flirt"],
      validations:[
        "La jalousie mélange souvent peur de perdre, comparaison et besoin de sécurité.",
        "Ressentir de la jalousie n’oblige pas à contrôler l’autre ; l’émotion et le comportement sont deux choses différentes.",
        "Une pointe de jalousie peut révéler un besoin de rassurance ou une limite qui n’a jamais été clairement discutée."
      ],
      perspectives:[
        "Cherche d’abord le fait concret qui t’a blessé·e, plutôt que d’accumuler des suppositions.",
        "Une relation plus sûre se construit mieux avec des limites explicites qu’avec la surveillance.",
        "Comparer ta valeur à celle d’une autre personne nourrit rarement une réponse fiable."
      ],
      actions:[
        "Formule une phrase en « je » : « Quand X arrive, je me sens Y et j’ai besoin de Z. »",
        "Évite de fouiller ou tester l’autre sous le coup de l’angoisse.",
        "Distingue ce qui relève d’un accord de couple non respecté de ce qui relève d’une peur personnelle."
      ],
      followups:["Y a-t-il un fait précis qui a déclenché cette jalousie ?","Avez-vous déjà parlé de vos limites avec les ex ou les réseaux sociaux ?","Ce qui te fait le plus peur, c’est d’être trompé·e ou remplacé·e ?"]
    },
    {
      id:"infidelite", label:"Trahison / infidélité", icon:"💔",
      keywords:["trompé","trompée","infidélité","infidelite","adultère","adultere","liaison","m a menti","trahison","double vie"],
      validations:[
        "Découvrir une trahison peut faire vaciller à la fois la confiance, l’image de la relation et ton propre jugement.",
        "Il est normal d’osciller entre colère, besoin de détails, envie de partir et envie de sauver le lien.",
        "Tu n’as pas besoin de décider aujourd’hui du futur entier de la relation."
      ],
      perspectives:[
        "Reconstruire une relation demande plus que des excuses : vérité, cohérence, limites et temps comptent.",
        "Rester ou partir sont deux décisions différentes de pardonner. Tu peux prendre le temps de les séparer.",
        "Chercher chaque détail peut parfois augmenter les images mentales sans apporter la sécurité recherchée."
      ],
      actions:[
        "Établis d’abord ce dont tu as besoin pour te sentir en sécurité dans les prochains jours.",
        "Évite les grandes décisions pendant un pic de colère si tu peux te donner un peu de temps.",
        "Si vous envisagez de continuer, une conversation structurée ou un accompagnement de couple peut aider."
      ],
      followups:["Tu viens de l’apprendre ou cela date de quelque temps ?","La personne reconnaît-elle clairement ce qui s’est passé ?","Ton besoin immédiat est plutôt comprendre, te protéger ou décider ?"]
    },
    {
      id:"conflit", label:"Conflit de couple", icon:"⚡",
      keywords:["dispute","engueulé","engueulée","crié","criée","conflit","on se dispute","colère contre lui","colere contre elle","fâché","fache","fâchée","fachee"],
      validations:[
        "Après une dispute, le système nerveux peut rester en mode défense longtemps après la fin des mots.",
        "Vouloir être compris·e tout de suite peut rendre la discussion encore plus dure si vous êtes tous les deux activés.",
        "Un conflit ne dit pas forcément que la relation est mauvaise ; la manière de réparer compte beaucoup."
      ],
      perspectives:[
        "L’objectif utile n’est pas de gagner la dispute, mais de comprendre le besoin ou la limite derrière le désaccord.",
        "Une pause annoncée est différente d’un silence punitif : elle précise qu’on reviendra parler.",
        "Les généralisations comme « toujours » et « jamais » ferment souvent la discussion."
      ],
      actions:[
        "Si la tension est haute, propose une pause avec une heure de reprise concrète.",
        "Reviens à un seul sujet et à un exemple précis.",
        "Avant de répondre, reformule ce que tu as compris de l’autre en une phrase."
      ],
      followups:["Qu’est-ce qui a déclenché la dispute ?","Est-ce un sujet récurrent entre vous ?","Vous arrivez d’habitude à réparer après un conflit ?"]
    },
    {
      id:"peur_abandon", label:"Peur de l’abandon", icon:"🫂",
      keywords:["peur qu il parte","peur qu'elle parte","peur de le perdre","peur de la perdre","abandon","m abandonne","me laisse","être quitté","etre quitte","peur qu on me quitte"],
      validations:[
        "La peur d’être abandonné·e peut rendre chaque distance beaucoup plus menaçante qu’elle ne l’est réellement.",
        "Quand cette peur s’active, ton cerveau cherche souvent des preuves très vite.",
        "Le besoin de sécurité est humain ; il devient épuisant quand il dépend entièrement des signes envoyés par l’autre."
      ],
      perspectives:[
        "Tu peux demander de la rassurance sans exiger une disponibilité constante.",
        "Une distance momentanée n’est pas automatiquement un rejet.",
        "La sécurité relationnelle se nourrit aussi de ta capacité à rester connecté·e à toi-même quand l’autre est moins disponible."
      ],
      actions:[
        "Avant de demander une rassurance, nomme précisément ce que tu crains.",
        "Cherche une preuve pour et une preuve contre ton scénario le plus inquiétant.",
        "Maintiens aujourd’hui une activité ou un contact qui t’appartient en dehors du couple."
      ],
      followups:["Qu’est-ce qui déclenche cette peur en ce moment ?","Cette peur revient-elle dans plusieurs relations ?","Qu’est-ce qui te rassure de façon saine dans un couple ?"]
    },
    {
      id:"dependance_affective", label:"Dépendance affective", icon:"🧷",
      keywords:["dépendance affective","dependance affective","je ne peux pas vivre sans","besoin de lui tout le temps","besoin d elle tout le temps","obsédé","obsédée","je pense qu à lui","je pense qu a elle","accro à lui","accro a elle"],
      validations:[
        "Quand toute ta sécurité émotionnelle repose sur une seule personne, chaque variation du lien peut devenir énorme.",
        "Être très attaché·e n’est pas une faute ; l’enjeu est de retrouver plusieurs sources d’appui.",
        "Le sentiment de « ne pas pouvoir sans l’autre » peut être puissant sans être une vérité sur tes capacités."
      ],
      perspectives:[
        "L’autonomie affective ne signifie pas aimer moins ; elle permet d’aimer sans disparaître soi-même.",
        "Le but n’est pas de couper tes émotions, mais d’élargir ton monde autour de la relation.",
        "Plus tu reconstruis des repères personnels, moins chaque message devient une mesure de ta valeur."
      ],
      actions:[
        "Réintroduis une chose quotidienne qui n’appartient qu’à toi.",
        "Quand l’envie de contacter l’autre devient urgente, attends dix minutes et observe ce que tu cherches réellement à obtenir.",
        "Reconnecte-toi à au moins une personne ou activité en dehors de la relation cette semaine."
      ],
      followups:["Qu’as-tu laissé de côté depuis cette relation ?","Que ressens-tu quand la personne n’est pas disponible ?","As-tu encore des espaces qui n’appartiennent qu’à toi ?"]
    },
    {
      id:"solitude", label:"Solitude", icon:"🌙",
      keywords:["seul","seule","solitude","personne ne me parle","personne à qui parler","personne a qui parler","isolé","isole","isolée","isolee","je n ai personne"],
      validations:[
        "La solitude peut amplifier tout le reste, surtout le soir ou quand on est fatigué·e.",
        "Se sentir seul·e n’est pas exactement la même chose qu’être physiquement seul·e ; c’est souvent le manque de lien qui pèse.",
        "Quand on se sent isolé·e longtemps, contacter quelqu’un peut paradoxalement devenir plus difficile."
      ],
      perspectives:[
        "Tu n’as pas besoin de trouver « la bonne personne » tout de suite ; un petit contact humain compte déjà.",
        "La solitude pousse parfois à conclure que personne ne s’intéresse à nous, alors que le réseau s’est surtout rétréci.",
        "Créer du lien passe souvent par des répétitions modestes plutôt que par une grande rencontre soudaine."
      ],
      actions:[
        "Choisis une personne relativement sûre et envoie un message simple, sans devoir tout raconter.",
        "Sors si possible dans un lieu où il y a une présence humaine, même sans interaction profonde.",
        "Planifie un contact concret dans les 48 heures : appel, café, activité ou rendez-vous."
      ],
      followups:["La solitude est-elle surtout présente le soir, le week-end ou presque tout le temps ?","Y a-t-il quelqu’un que tu pourrais contacter aujourd’hui ?","Est-ce un manque de présence, de compréhension ou d’intimité qui te pèse le plus ?"]
    },
    {
      id:"rejet", label:"Rejet", icon:"🚪",
      keywords:["rejeté","rejetee","rejetée","il ne veut pas de moi","elle ne veut pas de moi","pas intéressé","pas interessee","friendzone","refusé","refusee","recaler","recalé","recalée"],
      validations:[
        "Le rejet touche vite une zone très personnelle, même quand il parle surtout de compatibilité ou de timing.",
        "Être refusé·e peut faire naître la pensée « je ne vaux pas assez », mais ce n’est pas ce que prouve la situation.",
        "Tu peux être déçu·e profondément sans transformer ce refus en verdict sur toi."
      ],
      perspectives:[
        "L’attirance n’est pas une récompense attribuée aux personnes qui ont assez de valeur.",
        "Insister pour changer un non en oui augmente souvent la douleur des deux côtés.",
        "Respecter le refus protège aussi ta dignité et libère de l’espace pour des liens réciproques."
      ],
      actions:[
        "Éloigne-toi un peu des situations qui réactivent immédiatement l’espoir.",
        "Écris trois qualités qui restent vraies même après ce refus.",
        "Ne cherche pas à convaincre aujourd’hui ; cherche plutôt à retrouver ton équilibre."
      ],
      followups:["Le refus était-il explicite ou est-ce surtout une impression ?","Vous devez encore vous voir régulièrement ?","Ce rejet réveille-t-il une blessure plus ancienne ?"]
    },
    {
      id:"estime", label:"Estime de soi", icon:"🌱",
      keywords:["je suis nul","je suis nulle","je ne vaux rien","pas assez bien","moche","personne ne m aimera","je me déteste","je me deteste","aucune valeur","sans intérêt","sans interet"],
      validations:[
        "Quand tu souffres, ton jugement sur toi-même devient souvent beaucoup plus sévère que les faits.",
        "Se sentir sans valeur est une expérience douloureuse, pas une mesure objective de ta valeur.",
        "Une blessure relationnelle peut contaminer l’image de soi bien au-delà de ce qui s’est réellement passé."
      ],
      perspectives:[
        "Essaie de parler de toi comme tu parlerais à quelqu’un que tu respectes.",
        "Ta valeur ne monte ni ne baisse avec l’attention d’une personne.",
        "L’estime de soi se reconstruit aussi par des actes minuscules tenus envers soi-même."
      ],
      actions:[
        "Remplace aujourd’hui une phrase globale (« je suis nul·le ») par un fait précis (« je me sens rejeté·e par X »).",
        "Fais une chose que tu t’étais promise, même très petite.",
        "Note trois éléments de toi qui ne dépendent pas de ton apparence ou de ta vie amoureuse."
      ],
      followups:["Qu’est-ce qui t’a fait penser ça aujourd’hui ?","Cette voix très dure envers toi est-elle récente ?","Qu’est-ce que quelqu’un qui t’aime dirait de toi à ce moment précis ?"]
    },
    {
      id:"anxiete", label:"Anxiété", icon:"🌊",
      keywords:["angoisse","angoissé","angoissee","anxiété","anxiete","stress","je panique","panique","boule au ventre","coeur qui bat","peur sans raison","nerveux","nerveuse"],
      validations:[
        "Quand l’angoisse monte, tout peut sembler urgent et menaçant.",
        "Ton corps peut sonner l’alarme même quand tu n’as pas encore une explication claire.",
        "Essayer de supprimer l’angoisse immédiatement peut parfois la rendre encore plus présente."
      ],
      perspectives:[
        "Commence par aider le corps avant d’essayer de résoudre toutes les pensées.",
        "Une pensée anxieuse est une hypothèse, pas forcément une information.",
        "Tu n’as pas besoin de prendre une décision importante au sommet d’un pic d’angoisse."
      ],
      actions:[
        "Allonge doucement l’expiration pendant une minute, sans forcer l’inspiration.",
        "Nomme cinq choses que tu vois, quatre que tu peux toucher, trois que tu entends.",
        "Réduis le problème à la prochaine heure plutôt qu’aux prochaines semaines."
      ],
      followups:["L’angoisse est-elle liée à quelque chose de précis ?","Tu la ressens surtout dans le corps ou dans les pensées ?","Est-ce que cela arrive régulièrement ?"]
    },
    {
      id:"panique", label:"Crise de panique", icon:"🫁",
      keywords:["crise de panique","attaque de panique","je n arrive plus à respirer","je n arrive plus a respirer","je vais mourir d angoisse","hyperventile","hyperventilation"],
      validations:[
        "Une crise de panique peut être terrifiante et donner l’impression qu’un danger immédiat arrive.",
        "Le corps peut produire des sensations très fortes lorsque le système d’alarme s’emballe.",
        "Tu n’as pas besoin de lutter contre chaque sensation une par une."
      ],
      perspectives:[
        "Si les symptômes sont inhabituels, sévères ou pourraient être médicaux, mieux vaut demander une aide médicale plutôt que supposer que c’est uniquement de l’angoisse.",
        "Si tu reconnais un schéma déjà évalué comme panique, ralentir l’expiration et rester ancré·e peut aider à traverser le pic.",
        "Le pic finit par redescendre, même si cela paraît impossible au milieu."
      ],
      actions:[
        "Assieds-toi si possible, desserre ce qui gêne et expire lentement plus longtemps que tu n’inspires.",
        "Fixe un objet devant toi et décris-le mentalement avec précision.",
        "Si tu as une douleur thoracique nouvelle, un malaise sévère, une difficulté respiratoire importante ou un doute médical, contacte les urgences."
      ],
      followups:["Est-ce la première fois que cela t’arrive ?","Les sensations sont-elles différentes de d’habitude ?","Y a-t-il quelqu’un près de toi maintenant ?"]
    },
    {
      id:"tristesse", label:"Tristesse", icon:"🌧️",
      keywords:["triste","tristesse","je pleure","pleurer","cafard","malheureux","malheureuse","coeur lourd","cœur lourd","moral à zéro","moral a zero"],
      validations:[
        "Tu n’as pas besoin de justifier parfaitement ta tristesse pour qu’elle soit réelle.",
        "Parfois, le plus épuisant est de faire semblant d’aller bien alors que quelque chose pèse.",
        "Pleurer ou ralentir n’est pas forcément reculer ; cela peut être une façon de laisser passer la charge."
      ],
      perspectives:[
        "Aujourd’hui peut être une journée à traverser plutôt qu’une journée à réussir.",
        "Cherche ce qui pourrait rendre les prochaines heures cinq pour cent moins lourdes, pas parfaites.",
        "Quand la tristesse dure ou s’approfondit, un professionnel peut aider à comprendre ce qui l’entretient."
      ],
      actions:[
        "Fais une chose basique pour ton corps : manger quelque chose, boire, te doucher, sortir quelques minutes.",
        "Écris à une personne sûre, même seulement « journée difficile aujourd’hui ».",
        "Si cette tristesse est présente presque tous les jours depuis un moment, envisage de prendre rendez-vous avec un professionnel de santé."
      ],
      followups:["Depuis quand te sens-tu comme ça ?","Quelque chose de précis s’est-il passé ?","Arrives-tu encore à manger, dormir et faire les choses essentielles ?"]
    },
    {
      id:"deuil", label:"Deuil", icon:"🕯️",
      keywords:["mort","décédé","decede","décédée","decedee","deuil","perdu mon père","perdu ma mère","perdu ma mere","perdu mon ami","enterrement","funérailles","funerailles"],
      validations:[
        "Le deuil n’avance pas en ligne droite. Certaines journées peuvent sembler supportables puis la douleur revenir brutalement.",
        "Perdre quelqu’un peut modifier le temps, les habitudes, l’identité et les repères du quotidien.",
        "Il n’existe pas de calendrier correct pour cesser de pleurer ou recommencer à vivre."
      ],
      perspectives:[
        "Continuer à vivre ne trahit pas la personne perdue.",
        "Les souvenirs peuvent devenir moins coupants sans que le lien ou l’amour disparaisse.",
        "Tu peux avoir besoin de parler de la personne plutôt que seulement de « passer à autre chose »."
      ],
      actions:[
        "Choisis aujourd’hui un geste simple qui te relie à cette personne sans t’obliger à aller mieux.",
        "Si tu peux, parle avec quelqu’un qui accepte d’entendre le souvenir, pas seulement de te distraire.",
        "Si le deuil t’empêche durablement de fonctionner ou devient dangereux pour toi, cherche un accompagnement professionnel."
      ],
      followups:["La perte est-elle récente ?","Qu’est-ce qui te manque le plus de cette personne ?","As-tu quelqu’un avec qui parler librement de ce deuil ?"]
    },
    {
      id:"culpabilite", label:"Culpabilité", icon:"🪞",
      keywords:["culpabilité","culpabilite","je m en veux","c est ma faute","j ai tout gâché","j ai tout gache","je regrette","honte de ce que j ai fait"],
      validations:[
        "La culpabilité peut signaler qu’une valeur importante pour toi a été touchée, mais elle peut aussi devenir disproportionnée.",
        "Regretter quelque chose ne signifie pas que tu dois te punir indéfiniment.",
        "Tu peux reconnaître une erreur sans réduire toute ton identité à cette erreur."
      ],
      perspectives:[
        "Sépare ce que tu peux réparer de ce que tu ne peux plus contrôler.",
        "Une excuse utile reconnaît le tort, évite les justifications et respecte la réponse de l’autre.",
        "Le changement réel se mesure davantage aux actes futurs qu’à la quantité de souffrance que tu t’infliges."
      ],
      actions:[
        "Écris exactement ce que tu regrettes, sans « toujours », « jamais » ni jugement global sur toi.",
        "Si une réparation est possible et bienvenue, pense à une action concrète plutôt qu’à dix messages.",
        "Décide d’un comportement différent que tu peux mettre en pratique dès maintenant."
      ],
      followups:["Qu’est-ce que tu regrettes exactement ?","Y a-t-il quelque chose que tu peux encore réparer ?","La personne t’a-t-elle demandé de l’espace ?"]
    },
    {
      id:"colere", label:"Colère", icon:"🔥",
      keywords:["colère","colere","furieux","furieuse","j ai la rage","envie de casser","je le déteste","je la déteste","haine","exploser"],
      validations:[
        "La colère peut être un signal de blessure, d’injustice ou de limite franchie.",
        "Tu as le droit de ressentir la colère sans agir de façon qui te mettrait, toi ou quelqu’un d’autre, en danger.",
        "Sous une colère très forte, il y a parfois aussi de la peur, de l’humiliation ou de la tristesse."
      ],
      perspectives:[
        "La priorité quand la colère déborde est de créer de la distance avec l’action impulsive.",
        "Tu peux défendre une limite fermement sans menacer ni humilier.",
        "Une conversation importante a peu de chances d’aboutir si tu es encore au maximum de l’activation."
      ],
      actions:[
        "Éloigne-toi temporairement de la personne ou de l’objet du conflit si tu sens que tu peux perdre le contrôle.",
        "Ne conduis pas et n’envoie pas de message agressif si tu es hors de toi.",
        "Décharge l’énergie sans danger : marcher rapidement, eau fraîche sur le visage, écrire sans envoyer."
      ],
      followups:["Est-ce que tu te sens capable de rester maître de tes gestes maintenant ?","Qu’est-ce qui t’a blessé juste avant la colère ?","As-tu besoin de poser une limite ou surtout de redescendre ?"]
    },
    {
      id:"violence", label:"Violence / peur dans la relation", icon:"🛡️",
      keywords:["il me frappe","elle me frappe","me menace","violence conjugale","violences conjugales","j ai peur de lui","j ai peur d elle","m étrangle","m etrangle","me pousse","me gifle","me surveille","contrôle mon téléphone","controle mon telephone"],
      validations:[
        "Si tu as peur de ton/ta partenaire, ta sécurité passe avant l’explication de la relation.",
        "Les menaces, coups, étranglements, contraintes ou contrôles coercitifs sont sérieux.",
        "Tu n’as pas besoin d’attendre que la situation devienne pire pour chercher de l’aide."
      ],
      perspectives:[
        "Une discussion de couple n’est pas le bon outil si parler directement risque d’augmenter le danger.",
        "Préparer une sortie ou demander de l’aide peut nécessiter de la discrétion si ton téléphone ou tes déplacements sont surveillés.",
        "La responsabilité de la violence appartient à la personne qui l’exerce."
      ],
      actions:[
        "Si tu es en danger immédiat, éloigne-toi si tu peux le faire sans augmenter le risque et contacte les services d’urgence.",
        "Si possible, parle à une personne de confiance ou à un service spécialisé depuis un appareil sûr.",
        "Garde près de toi, si c’est faisable en sécurité, les éléments essentiels dont tu aurais besoin pour partir rapidement."
      ],
      followups:["Es-tu en sécurité à l’endroit où tu te trouves maintenant ?","La personne violente est-elle près de toi ?","Ton téléphone est-il surveillé ?"]
    },
    {
      id:"relation_toxique", label:"Relation qui fait souffrir", icon:"🧩",
      keywords:["relation toxique","toxique","manipule","manipulation","gaslighting","me rabaisse","me contrôle","me controle","chantage affectif","chaud froid","amour puis froid"],
      validations:[
        "Une relation peut être très attachante et pourtant te faire perdre tes repères.",
        "Quand tu passes ton temps à anticiper la réaction de l’autre, il devient difficile d’écouter tes propres limites.",
        "Des phases très intenses suivies de retrait peuvent créer un attachement particulièrement difficile à quitter."
      ],
      perspectives:[
        "Regarde les comportements répétés plutôt que les promesses après chaque crise.",
        "Une limite n’est réelle que si tu sais ce que tu feras lorsqu’elle n’est pas respectée.",
        "Tu n’as pas besoin d’un diagnostic sur l’autre pour constater qu’une dynamique te fait du mal."
      ],
      actions:[
        "Note trois comportements précis qui te blessent et leur fréquence.",
        "Parle de la situation à quelqu’un d’extérieur à la relation en donnant des exemples concrets.",
        "Si tu crains une réaction violente ou coercitive, privilégie un plan de sécurité plutôt qu’une confrontation."
      ],
      followups:["Quel comportement te fait le plus perdre tes repères ?","Te sens-tu libre de dire non dans cette relation ?","As-tu déjà eu peur de la réaction de cette personne ?"]
    },
    {
      id:"communication", label:"Communication", icon:"💬",
      keywords:["comment lui parler","comment lui dire","communiquer","discussion difficile","n arrive pas à parler","n arrive pas a parler","il ne m écoute pas","elle ne m écoute pas","elle ne m ecoute pas","il ne m ecoute pas"],
      validations:[
        "Une conversation importante devient vite difficile quand chacun essaie surtout de se défendre.",
        "Tu peux avoir quelque chose de légitime à dire et choisir un moment ou une forme qui augmente les chances d’être entendu·e.",
        "Être clair·e ne signifie pas tout dire d’un seul coup."
      ],
      perspectives:[
        "Un message efficace décrit le fait, l’effet sur toi et la demande concrète.",
        "Une demande laisse à l’autre la possibilité de répondre ; un ultimatum impose une conséquence.",
        "Si la discussion tourne toujours à l’insulte, au mépris ou à la peur, le problème dépasse la simple formulation."
      ],
      actions:[
        "Prépare une phrase courte : « Quand X arrive, je ressens Y. J’aimerais Z. »",
        "Choisis un moment où personne n’est pressé ou en pleine colère.",
        "Pose une question à la fois et laisse la réponse exister avant de préparer la suivante."
      ],
      followups:["Qu’aimerais-tu lui dire en une seule phrase ?","Qu’est-ce qui se passe habituellement quand tu essaies d’en parler ?","Cherches-tu surtout à être compris·e, à obtenir une décision ou à poser une limite ?"]
    },
    {
      id:"distance", label:"Distance émotionnelle", icon:"🌫️",
      keywords:["distant","distante","froid","froide","moins affectueux","moins affectueuse","s éloigne","s'eloigne","s éloigne de moi","plus comme avant","moins de messages"],
      validations:[
        "Quand quelqu’un devient plus distant, l’incertitude peut être plus difficile que la distance elle-même.",
        "Tu peux percevoir un changement réel sans encore savoir ce qu’il signifie.",
        "Le cerveau remplit vite le manque d’informations par le scénario qui fait le plus peur."
      ],
      perspectives:[
        "Observe les changements concrets avant d’en tirer une conclusion définitive.",
        "Une question simple et directe apporte souvent plus d’information que des tests ou des sous-entendus.",
        "La distance peut avoir plusieurs causes, mais si elle devient durable, ton besoin de clarté reste légitime."
      ],
      actions:[
        "Choisis un exemple précis du changement que tu observes.",
        "Demande calmement : « J’ai l’impression qu’il y a plus de distance entre nous. Comment tu vis les choses en ce moment ? »",
        "Évite d’accumuler plusieurs semaines de suppositions avant d’en parler."
      ],
      followups:["Depuis quand sens-tu ce changement ?","Y a-t-il eu un événement juste avant ?","La distance concerne surtout les messages, l’affection ou les projets ?"]
    },
    {
      id:"attachement", label:"Attachement / obsession", icon:"🧠",
      keywords:["obsession","obsessionnel","obsessionnelle","je pense tout le temps","impossible d arrêter d y penser","impossible d arreter d y penser","limerence","limérence","fixé sur lui","fixée sur elle"],
      validations:[
        "Penser sans arrêt à quelqu’un peut être épuisant, surtout quand la relation est incertaine.",
        "L’incertitude et les petits signes intermittents peuvent rendre l’attention encore plus accrocheuse.",
        "Plus tu essaies parfois de chasser une pensée, plus elle revient."
      ],
      perspectives:[
        "Le but n’est pas d’interdire la pensée, mais de réduire ce qui l’alimente en boucle.",
        "Une relation imaginée ou espérée peut occuper autant de place qu’une relation réelle.",
        "Revenir aux faits aide à séparer la personne réelle de tout ce que ton esprit projette autour d’elle."
      ],
      actions:[
        "Fixe une courte plage où tu peux écrire ce que tu ressens, puis reviens à une tâche concrète.",
        "Réduis les vérifications répétées des réseaux ou messages.",
        "Liste ce que tu sais vraiment de la relation et ce que tu imagines ou espères."
      ],
      followups:["La relation est-elle réciproque et claire ?","Combien de fois par jour vérifies-tu ses messages ou réseaux ?","Qu’est-ce que cette personne représente pour toi au-delà d’elle-même ?"]
    },
    {
      id:"insomnie", label:"Sommeil perturbé", icon:"🌙",
      keywords:["je ne dors plus","insomnie","n arrive pas à dormir","n arrive pas a dormir","réveille la nuit","reveille la nuit","rumine la nuit","cauchemars"],
      validations:[
        "Quand quelque chose te travaille, la nuit enlève souvent les distractions qui tenaient les pensées à distance.",
        "Le manque de sommeil rend ensuite les émotions plus difficiles à réguler, ce qui entretient la boucle.",
        "Tu n’as pas besoin de résoudre ta vie dans ton lit à deux heures du matin."
      ],
      perspectives:[
        "L’objectif immédiat peut être le repos plutôt que de « réussir à dormir » à tout prix.",
        "Sortir les pensées de ta tête sur papier peut aider à différer leur traitement jusqu’au lendemain.",
        "Si l’insomnie dure ou devient importante, un médecin peut rechercher avec toi ce qui l’entretient."
      ],
      actions:[
        "Note les pensées qui tournent et écris à côté : « j’y reviens demain à telle heure ».",
        "Évite autant que possible de vérifier les messages ou réseaux à chaque réveil.",
        "Si tu restes éveillé·e longtemps, fais une activité calme et peu stimulante avant de revenir au lit."
      ],
      followups:["Depuis combien de nuits dors-tu mal ?","Est-ce une pensée précise qui revient ?","Le problème est surtout l’endormissement ou les réveils ?"]
    },
    {
      id:"stress", label:"Stress / surcharge", icon:"🧱",
      keywords:["débordé","deborde","débordée","debordee","trop de choses","je craque","pression","surcharge","épuisé","epuise","épuisée","epuisee","burnout","burn out"],
      validations:[
        "Quand tout s’accumule, même une petite tâche peut ressembler à une montagne.",
        "Être débordé·e ne signifie pas que tu es incapable ; cela peut simplement vouloir dire que la charge dépasse tes ressources du moment.",
        "L’épuisement réduit la capacité à trier les priorités."
      ],
      perspectives:[
        "Tu n’as pas besoin de traiter toute la pile aujourd’hui.",
        "La priorité la plus utile est parfois de réduire la charge plutôt que d’optimiser encore ton efficacité.",
        "Dire non, reporter ou demander de l’aide peut faire partie de la solution."
      ],
      actions:[
        "Écris trois colonnes : urgent aujourd’hui, cette semaine, peut attendre.",
        "Choisis une seule tâche de moins de quinze minutes pour retrouver de l’élan.",
        "Retire volontairement une obligation non essentielle de la journée."
      ],
      followups:["La surcharge vient surtout du travail, de la famille ou de plusieurs choses à la fois ?","Qu’est-ce qui est réellement urgent aujourd’hui ?","Depuis combien de temps fonctionnes-tu à ce rythme ?"]
    },
    {
      id:"incertitude", label:"Incertitude amoureuse", icon:"❔",
      keywords:["je ne sais pas ce qu il veut","je ne sais pas ce qu elle veut","relation floue","situationship","pas officiel","entre deux","ambigu","ambigue","ambigüe","il hésite","elle hésite"],
      validations:[
        "Les relations floues peuvent être particulièrement prenantes parce que l’espoir et l’incertitude restent actifs en même temps.",
        "Ne pas savoir où tu en es peut te pousser à analyser chaque détail.",
        "Ton besoin de clarté est légitime même si l’autre n’a pas encore toutes ses réponses."
      ],
      perspectives:[
        "La clarté ne consiste pas à forcer quelqu’un à choisir ; elle consiste aussi à savoir ce que toi tu acceptes.",
        "Regarde la cohérence entre les mots, les actes et le temps.",
        "Une relation indéfinie pendant longtemps peut devenir une décision par défaut."
      ],
      actions:[
        "Définis ce dont tu as besoin pour continuer sereinement.",
        "Pose une question claire sur l’intention ou le niveau d’engagement, sans plaider ta cause.",
        "Décide combien de temps tu es prêt·e à rester dans cette incertitude."
      ],
      followups:["Depuis combien de temps la relation est-elle floue ?","As-tu déjà demandé clairement ce que l’autre souhaite ?","Qu’est-ce que toi tu veux vraiment de ce lien ?"]
    },
    {
      id:"reconciliation", label:"Se remettre ensemble ?", icon:"🔄",
      keywords:["se remettre ensemble","récupérer mon ex","recuperer mon ex","reconquête","reconquete","revenir avec mon ex","deuxième chance","deuxieme chance"],
      validations:[
        "Après une rupture, l’envie de revenir peut venir de l’amour, du manque, de la peur ou de plusieurs choses à la fois.",
        "Le fait de vouloir une deuxième chance ne garantit pas que les conditions ont changé.",
        "Tu peux explorer l’idée d’un retour sans te précipiter."
      ],
      perspectives:[
        "La question utile n’est pas seulement « est-ce qu’on s’aime ? », mais « qu’est-ce qui serait concrètement différent ? »",
        "Un retour sans changement des causes de la rupture recrée souvent la même dynamique.",
        "Une vraie reprise demande de la volonté des deux côtés, pas une campagne de persuasion."
      ],
      actions:[
        "Liste les trois causes principales de la rupture et ce qui a réellement changé depuis.",
        "Respecte tout refus ou demande d’espace.",
        "Si le contact est ouvert, privilégie une conversation simple plutôt qu’une avalanche de promesses."
      ],
      followups:["Qui a mis fin à la relation ?","Qu’est-ce qui a changé concrètement depuis la rupture ?","Ton ex a-t-il/elle montré une envie claire de reparler du couple ?"]
    },
    {
      id:"amitie", label:"Amitié", icon:"🤝",
      keywords:["ami","amie","amitié","amitie","meilleur ami","meilleure amie","trahi par un ami","embrouille avec mon ami","perdu un ami"],
      validations:[
        "Une blessure d’amitié peut faire aussi mal qu’une rupture amoureuse.",
        "Les amitiés importantes portent des habitudes, de la confiance et une partie de notre histoire.",
        "Être déçu·e par un ami peut faire douter de beaucoup plus que cet événement précis."
      ],
      perspectives:[
        "Toutes les amitiés ne doivent pas être sauvées à n’importe quel prix.",
        "Une réparation devient possible quand chacun peut reconnaître sa part sans minimiser la blessure.",
        "Parfois, la relation doit changer de forme plutôt que revenir exactement comme avant."
      ],
      actions:[
        "Identifie le fait précis qui a cassé la confiance.",
        "Si tu veux réparer, commence par une conversation centrée sur un événement concret.",
        "Si tu te sens constamment humilié·e ou utilisé·e, prends de la distance."
      ],
      followups:["Qu’est-ce qui s’est passé entre vous ?","Est-ce la première fois que cette limite est franchie ?","Tu souhaites réparer le lien ou surtout comprendre ce qui s’est passé ?"]
    },
    {
      id:"famille", label:"Famille", icon:"🏠",
      keywords:["famille","mère","mere","père","pere","parents","frère","frere","soeur","sœur","fils","fille","enfant","beaux parents"],
      validations:[
        "Les conflits familiaux touchent souvent des couches très anciennes de loyauté, de culpabilité et de besoin d’être reconnu·e.",
        "Tu peux aimer quelqu’un de ta famille et avoir besoin de limites avec cette personne.",
        "Le lien familial n’efface pas l’impact de comportements qui te blessent."
      ],
      perspectives:[
        "Une limite peut porter sur ce que toi tu feras, même si l’autre ne change pas.",
        "Tu n’es pas obligé·e de résoudre des années d’histoire dans une seule conversation.",
        "La proximité familiale n’implique pas une disponibilité illimitée."
      ],
      actions:[
        "Choisis une seule limite concrète à formuler.",
        "Prépare une façon de quitter la conversation si elle devient insultante ou ingérable.",
        "Cherche un allié extérieur si tu te sens aspiré·e dans des conflits répétés."
      ],
      followups:["Avec qui le conflit est-il le plus difficile ?","Quelle limite aimerais-tu pouvoir poser ?","Est-ce un problème récent ou ancien ?"]
    },
    {
      id:"travail", label:"Travail", icon:"💼",
      keywords:["travail","boulot","patron","collègue","collegue","licencié","licencie","licenciée","licenciee","chômage","chomage","emploi","burnout professionnel"],
      validations:[
        "Les difficultés professionnelles peuvent toucher l’identité, la sécurité financière et l’estime de soi en même temps.",
        "Perdre pied au travail peut donner l’impression que tout le reste va suivre.",
        "Tu peux être compétent·e et traverser une période professionnelle très dure."
      ],
      perspectives:[
        "Sépare autant que possible le problème concret du jugement global sur toi.",
        "Une situation professionnelle peut être importante sans définir toute ta valeur.",
        "Quand la charge devient durablement insoutenable, chercher de l’aide est plus utile que serrer les dents indéfiniment."
      ],
      actions:[
        "Identifie le problème prioritaire : charge, conflit, peur de perdre l’emploi, recherche ou épuisement.",
        "Note les faits et dates si un conflit professionnel doit être documenté.",
        "Si ta santé se dégrade, parle-en à un professionnel de santé."
      ],
      followups:["Qu’est-ce qui te pèse le plus dans le travail en ce moment ?","S’agit-il d’un événement précis ou d’une accumulation ?","Ta santé ou ton sommeil sont-ils impactés ?"]
    },
    {
      id:"decision", label:"Décision difficile", icon:"🧭",
      keywords:["je ne sais pas quoi faire","que dois je faire","quoi décider","choix difficile","hésite","hesite","perdu","perdue","indécis","indecis"],
      validations:[
        "Quand deux options ont chacune un coût, l’indécision peut devenir épuisante.",
        "Ne pas savoir immédiatement ne signifie pas que tu échoues à décider.",
        "Les émotions fortes peuvent rendre chaque option définitive alors qu’elle ne l’est pas toujours."
      ],
      perspectives:[
        "Cherche la décision suffisamment bonne, pas la décision sans aucun risque.",
        "Demande-toi quelle option respecte le mieux tes valeurs, pas seulement laquelle calme l’angoisse aujourd’hui.",
        "Certaines décisions deviennent plus claires quand on distingue ce qui est réversible de ce qui ne l’est pas."
      ],
      actions:[
        "Écris les deux ou trois options réelles, sans options imaginaires.",
        "Pour chacune, note : gain, coût, risque, valeur respectée.",
        "Si possible, donne-toi une échéance raisonnable pour décider."
      ],
      followups:["Entre quelles options hésites-tu ?","Qu’est-ce que tu risques de perdre dans chaque cas ?","Quelle décision prendrais-tu si tu n’avais pas peur de décevoir quelqu’un ?"]
    },
    {
      id:"honte", label:"Honte", icon:"🫥",
      keywords:["honte","j ai honte","humilié","humilie","humiliée","humiliee","ridicule","je me sens sale","je n ose plus voir personne"],
      validations:[
        "La honte donne envie de se cacher et fait croire que l’erreur ou l’événement dit quelque chose d’essentiel sur qui tu es.",
        "Ce que tu ressens peut être très intense même si d’autres verraient la situation avec plus de nuance.",
        "L’isolement nourrit souvent la honte."
      ],
      perspectives:[
        "Tu es plus large que l’événement qui te fait honte.",
        "Partager avec une personne sûre et non jugeante peut réduire le pouvoir du secret.",
        "Responsabilité et humiliation ne sont pas la même chose."
      ],
      actions:[
        "Décris l’événement avec des faits, sans insultes dirigées contre toi-même.",
        "Choisis une personne de confiance à qui en parler si c’est possible.",
        "Demande-toi quelle réparation est utile, puis ce qui relève simplement de l’auto-punition."
      ],
      followups:["Qu’est-ce qui te fait le plus honte : ce que tu as fait, ce qui t’est arrivé ou le regard des autres ?","Quelqu’un de sûr connaît-il déjà la situation ?","Y a-t-il quelque chose à réparer concrètement ?"]
    },
    {
      id:"rumination", label:"Pensées en boucle", icon:"🔁",
      keywords:["je rumine","rumination","pensées en boucle","pense en boucle","n arrive pas à arrêter de penser","n arrive pas a arreter de penser","retourne dans ma tête","retourne dans ma tete"],
      validations:[
        "Ruminer donne l’impression de travailler sur le problème alors que le cerveau repasse souvent les mêmes éléments.",
        "Plus l’enjeu émotionnel est fort, plus la pensée cherche une certitude qu’elle ne peut pas toujours obtenir.",
        "Tu peux être fatigué·e de penser sans avoir avancé, et c’est justement un signe qu’il faut changer de mode."
      ],
      perspectives:[
        "Une question sans nouvelle information ne produit pas forcément une meilleure réponse à la centième répétition.",
        "Tu peux reporter volontairement une pensée sans la nier.",
        "Passer du mental au concret aide souvent à casser la boucle."
      ],
      actions:[
        "Écris la question exacte qui tourne en boucle puis note ce qui est connu, inconnu et hors de ton contrôle.",
        "Accorde-toi dix minutes de « temps de rumination », puis change de contexte physique.",
        "Fais une activité qui mobilise tes sens ou ton corps pendant quinze minutes."
      ],
      followups:["Quelle phrase revient le plus souvent dans ta tête ?","Cherches-tu une réponse, une garantie ou une façon de refaire le passé ?","À quel moment de la journée la boucle est-elle la plus forte ?"]
    },
    {
      id:"vide", label:"Vide / perte de sens", icon:"🕳️",
      keywords:["vide","plus rien n a de sens","aucun sens","à quoi bon","a quoi bon","je ressens plus rien","je ne ressens plus rien","éteint","eteint","éteinte","eteinte"],
      validations:[
        "Se sentir vide peut être aussi pénible qu’une émotion très forte.",
        "Quand l’énergie émotionnelle est épuisée, le monde peut sembler plat ou lointain.",
        "Tu n’as pas besoin de trouver un grand sens à ta vie aujourd’hui."
      ],
      perspectives:[
        "Commence par les besoins de base et les liens humains avant de chercher une réponse philosophique totale.",
        "Le sentiment de vide peut changer, même s’il paraît permanent depuis l’intérieur.",
        "Si ce vide dure, s’aggrave ou s’accompagne d’idées de mort, il mérite une aide professionnelle rapidement."
      ],
      actions:[
        "Choisis un repère concret pour les prochaines heures : manger, marcher, appeler quelqu’un, te reposer.",
        "Évite de rester complètement isolé·e si le vide devient inquiétant.",
        "Prends rendez-vous avec un professionnel si cet état persiste ou t’empêche de fonctionner."
      ],
      followups:["Depuis quand ressens-tu ce vide ?","Est-ce plutôt une absence d’émotion ou une perte de sens ?","As-tu eu récemment des pensées de mort ou l’envie de ne plus être là ?"]
    },
    {
      id:"besoin_parler", label:"Besoin de parler", icon:"🫶",
      keywords:["j ai besoin de parler","écoute moi","ecoute moi","je veux parler","peux tu m écouter","peux tu m ecouter","reste avec moi","parle moi"],
      validations:[
        "Oui, tu peux déposer ce qui pèse ici.",
        "Tu n’as pas besoin de raconter ça parfaitement.",
        "On peut commencer exactement là où tu en es."
      ],
      perspectives:[
        "Tu peux avancer une phrase à la fois.",
        "Il n’est pas nécessaire de savoir ce que tu attends de la conversation pour commencer.",
        "Parler peut déjà aider à remettre un peu d’ordre dans ce qui déborde."
      ],
      actions:[
        "Commence par la chose qui te fait le plus mal maintenant.",
        "Si c’est trop difficile à raconter, donne-moi simplement trois mots sur ton état.",
        "Tu peux aussi dire ce qui s’est passé juste avant que ça devienne trop lourd."
      ],
      followups:["Qu’est-ce qui te pèse le plus maintenant ?","Qu’est-ce qui s’est passé aujourd’hui ?","Tu veux surtout être écouté·e ou réfléchir à ce que tu peux faire ?"]
    }
  ],

  fallback: {
    validations:[
      "Je ne suis pas certain de saisir toute la situation, mais je peux rester avec toi pour la clarifier.",
      "Il y a visiblement quelque chose d’important derrière ce que tu viens d’écrire.",
      "On peut prendre ça sans se presser."
    ],
    perspectives:[
      "Le plus utile est souvent de distinguer ce qui s’est passé, ce que tu ressens et ce dont tu as besoin maintenant.",
      "Tu n’as pas besoin de tout expliquer d’un coup.",
      "Un détail concret m’aidera à mieux comprendre ce qui te pèse."
    ],
    actions:[
      "Essaie de résumer la situation en une phrase très simple.",
      "Dis-moi ce qui s’est passé juste avant que tu te sentes comme ça.",
      "Si tu préfères, commence seulement par nommer l’émotion la plus forte."
    ],
    followups:[
      "Qu’est-ce qui te fait le plus mal dans cette situation ?",
      "Depuis quand ça dure ?",
      "Qu’aimerais-tu obtenir de cette conversation : être écouté·e, comprendre ou décider quoi faire ?"
    ]
  }
};