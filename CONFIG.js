// UI Settings
const UI_SETTINGS = {
    // Titles and Text
    dashboardTitle: "English Mastery",
    welcomeMessage: "Welcome to Your Dashboard",
    addWordTitle: "Add word",
    reviewPageTitle: "Review",
    wordCountTitle: "Total Words Added",
    easyWordCountTitle: "Easy Words",
    mediumWordCountTitle: "Medium Words",
    hardWordCountTitle: "Hard Words",
    reviewWordCountTitle: "Words for Review Today",
    logout: "Logout",
    motivationalMessageTitle: "رسالة اليوم",
    userName: "Welcome back,",
    gamesTitle: "Games",
    addNewWord: "Add New Word",
    reviewWord: "Review Words",
    setting: "Settings",
    errorMessage: "An error occurred",
    noWordsMessage: "No words added yet.",
    noWordsToReviewMessage: "No words to review today.",
  
    // Game Names
    flashcards: "Game Flashcards",
    spelling: "Game Spelling",
    wordMatch: "Game Word Match",
    mixMatch: "Game Mix & Match",
    completeTheSentence: "Game Complete the Sentence",
  };
  
  // Message Settings
  const MESSAGE_SETTINGS = {
    MOTIVATIONAL_MESSAGES: [
      "استمر في العمل الرائع! الانتظام هو مفتاح النجاح.",
      "كل كلمة تتعلمها تقربك خطوة نحو الطلاقة!",
      "تحدى نفسك اليوم، واشكر نفسك غدًا.",
      "التعلم رحلة، استمتع بالعملية!",
      "خطوات صغيرة كل يوم تؤدي إلى نتائج كبيرة.",
      "ثق بنفسك، أنت قادر على ذلك!",
      "لا تخف من ارتكاب الأخطاء - فهي جزء من التعلم.",
    ],
    COMPLETED_REVIEW_MESSAGE:
      "🎉 ممتاز! لقد أكملت جميع مراجعاتك لهذا اليوم! حان الوقت لتعلم كلمات جديدة أو الاسترخاء!",
    START_REVIEW_MESSAGE: "هل أنت مستعد لمراجعة {wordCount} كلمة لهذا اليوم؟ ",
    IN_PROGRESS_REVIEW_MESSAGE:
      "أنت تقوم بعمل رائع! تم إنجاز {completedCount} من {totalCount} مراجعة. ",
    NO_WORDS_TO_REVIEW_MESSAGE:
      "ليس لديك أي كلمات مجدولة للمراجعة اليوم. أضف المزيد من الكلمات أو تدرب في الألعاب!",
    NO_WORDS_MESSAGE: "مرحباً بك! ابدأ بإضافة بعض الكلمات باستخدام صفحة 'إضافة كلمة'.",
    ERROR_MESSAGE:"حدث خطا"
  };
  
  // Review Settings
  const REVIEW_SETTINGS = {
    baseScore: 10,
    easyGameScore: 1,
    mediumGameScore: 2,
    hardGameScore: 3,
    reviewIntervals: [1, 3, 7, 14],
    maxScore: 100,
    minScore: 0,
  };
  
  // Games Settings
  const GAMES_SETTINGS = {
    gameDifficulty: { easy: 1, medium: 2, hard: 3 },
    games: [
      {
        name: "Game Flashcards",
        key: "flashcards",
        difficulty: 1,
        maxQuestions: 10,
      },
      {
        name: "Game Spelling",
        key: "spelling",
        difficulty: 2,
        maxQuestions: 5,
      },
      {
        name: "Game Word Match",
        key: "wordMatch",
        difficulty: 1,
        maxQuestions: 10,
      },
      {
        name: "Game Mix & Match",
        key: "mixMatch",
        difficulty: 3,
        maxQuestions: 5,
      },
      {
        name: "Game Complete the Sentence",
        key: "completeTheSentence",
        difficulty: 2,
        maxQuestions: 5,
      },
    ],
    defaultGameSettings: {
      maxQuestions: 10,
      timeLimit: 60, // seconds
    },
   // daily progress distribution for each game
   dailyProgressDistribution: {
      flashcards: 10, // فلاش كاردز
      spelling: 15, // تهجئة
      wordMatch: 10, // مطابقة الكلمات
      mixMatch: 10, // مزج ومطابقة
      completeTheSentence: 15, // أكمل الجملة
      review: 40, // مراجعة
    },
      // new setting for games
      GAME_COMPLETION_TARGET: 10, // number of the word
      GAME_PROGRESS_PERCENTAGE:{ // the progress per game from 100%
           flashcards: 10,
          spelling: 15,
          wordMatch: 10,
          mixMatch: 10,
          completeTheSentence: 15,
          review: 40,
      },
      gameCompletionKeys: { // key for localstorage
            flashcards: 'gameCompletion_flashcards',
          spelling: 'gameCompletion_spelling',
          wordMatch: 'gameCompletion_wordMatch',
          mixMatch: 'gameCompletion_mixMatch',
          completeTheSentence: 'gameCompletion_completeTheSentence',
      }
  };
  
  // General Settings
  const GENERAL_SETTINGS = {
    appVersion: "1.0.0",
    developerName: "Your Name",
    debugMode: true,
    language: "ar",
  };
  
  export default {
    ...UI_SETTINGS,
    ...MESSAGE_SETTINGS,
    ...REVIEW_SETTINGS,
    ...GAMES_SETTINGS,
    ...GENERAL_SETTINGS,
  };