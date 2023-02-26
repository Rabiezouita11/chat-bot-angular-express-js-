// // Ces mots/phrases peuvent être saisis par l'utilisateur
// const trigger = [
  
//   ["problèmes agricoles en Tunisie", "problèmes de l'agriculture", "agriculture en Tunisie"],
// ["manque d'eau pour l'irrigation", "problèmes d'irrigation", "irrigation en Tunisie"],
// ["manque de main-d'œuvre", "problèmes de main-d'œuvre"],
// ["changements climatiques", "problèmes climatiques"],
// ["pesticides", "problèmes de pesticides"],
// ["prix bas des produits agricoles", "problèmes de prix"],
// ["subventions agricoles", "problèmes de subventions"],
// ["méthodes agricoles traditionnelles", "problèmes de méthodes agricoles"],
// ["investissements dans l'agriculture", "problèmes d'investissement"]
// ];

// // Ces réponses de bot sont associées aux déclencheurs ci-dessus
// const reply = [
  
//   ["Les problèmes agricoles en Tunisie sont nombreux. Quel problème voulez-vous aborder spécifiquement ?"],
// ["Le manque d'eau est en effet un problème majeur en Tunisie. Une solution possible est l'adoption de techniques d'irrigation plus efficaces, comme l'irrigation goutte à goutte."],
// ["Le manque de main-d'œuvre est un problème qui peut être résolu en augmentant les salaires des travailleurs agricoles ou en offrant des avantages sociaux comme l'assurance maladie."],
// ["Les changements climatiques ont un impact négatif sur l'agriculture en Tunisie. Les agriculteurs peuvent s'adapter en utilisant des semences résistantes à la sécheresse et en cultivant des cultures plus adaptées au climat actuel."],
// ];

// // Ces alternatives peuvent être utilisées pour répondre à des entrées qui ne correspondent pas aux triggers ci-dessus
// const alternative = ["Je ne suis pas sûr de comprendre. Pouvez-vous reformuler votre question ?"  ];



// // Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

// const coronavirus = ["Please stay home"];
  

// module.exports = { trigger, reply, alternative, coronavirus };




// These are words/phrases the user could type in

const trigger = [
  ["problèmes agricoles en Tunisie", "problèmes de l'agriculture", "agriculture en Tunisie"],
  ["manque d'eau pour l'irrigation"],
  ["manque de main-d'œuvre"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["thanks", "thank you"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"]
];

// These are bot responses, paired in order with the above 'trigger' phrases

const reply = [
  ["Les problèmes agricoles en Tunisie sont nombreux. Quel problème voulez-vous aborder spécifiquement?"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
   "Fantastic","how are you?"
  ],
    
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["You're welcome"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Yes?"]
];

// This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases

const alternative = [
  "Les problèmes agricoles en Tunisie sont nombreux. Quel problème voulez-vous aborder spécifiquement?",
  "Le manque d'eau est en effet un problème majeur en Tunisie. Une solution possible est l'adoption de techniques d'irrigation plus efficaces, comme l'irrigation goutte à goutte.",
  "Le manque de main-d'œuvre est un problème qui peut être résolu en augmentant les salaires des travailleurs agricoles ou en offrant des avantages sociaux comme l'assurance maladie"
];


// Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

const coronavirus = ["Please stay home"];

module.exports = {trigger, reply, alternative, coronavirus};

