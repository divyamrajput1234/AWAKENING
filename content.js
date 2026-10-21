// =====================================================
//  EDIT THIS FILE ONLY. Everything on the page comes from here.
//  Replace every [BRACKETED] part with your own words.
//  Keep the quotes "" and commas , exactly as they are.
// =====================================================

const CONTENT = {
  // Browser tab title
  pageTitle: "A letter for you",

  // Names and date shown on the page
  herName: "[Her name]",
  myName: "[Your name]",
  date: "[Month Day, Year]",

  // Animated scene: a boy bows his head respectfully to a girl.
  // Set enabled to false to remove it. Names appear under each figure.
  scene: {
    enabled: true,
    boyName: "[Your name]",
    girlName: "[Her name]",
    // Optional line under the scene. Set to "" to hide it.
    // Example: "I bow my head out of respect for you."
    caption: "[Optional line under the scene]"
  },

  // The very first line she reads. Be direct, no buildup.
  opening: "I'm sorry for [what you did]. I want to say that clearly before anything else.",

  // Main sections. Add, remove or reorder blocks freely.
  // Each block has a heading and one or more paragraphs.
  sections: [
    {
      heading: "What I did wrong",
      paragraphs: [
        "[Describe the mistake plainly. No excuses, no 'but', no blaming anyone else.]",
        "[Optional: one more sentence taking responsibility.]"
      ]
    },
    {
      heading: "How it affected you",
      paragraphs: [
        "[Show that you understand how she felt, in your own words. Not just how guilty you feel.]"
      ]
    }
  ],

  // Concrete things you will do differently. Keep to 1-3 real, doable promises.
  commitmentsHeading: "What I'll do differently",
  commitments: [
    "[Promise 1, e.g. I'll tell you when I'm upset instead of going quiet.]",
    "[Promise 2]",
    "[Promise 3 (optional, delete this line if not needed)]"
  ],

  // Optional short memory or appreciation. Set to "" to hide this section.
  memoryHeading: "One thing I don't want to lose",
  memory: "[A short, real memory or something you truly value about her. Keep it brief.]",

  // Closing. Leave the next step up to her. No pressure.
  closing: "Take all the time you need. I'm here whenever you're ready to talk.",

  // Sign-off
  signoff: "Yours,",

  // Optional photo: put an image in the project folder and write its file name
  // here, e.g. "photo.jpg". Leave as "" for no photo.
  photo: "",

  // Colors (any CSS color). Try her favorite color for the accent.
  theme: {
    background: "#faf6f1",
    text: "#3b3430",
    accent: "#b07d62",
    soft: "#efe5da"
  }
};
