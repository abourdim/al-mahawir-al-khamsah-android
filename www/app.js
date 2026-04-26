/* المحاور الخمسة للقرآن الكريم — THE FIVE AXES OF THE QURAN — app.js v1.0 */
/* Based on "Al-Mahawir al-Khamsah lil-Quran al-Karim" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'المحاور الخمسة للقرآن الكريم',
    splashSub: 'رحلة في محاور القرآن للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة ص ٣٨: ٢٩',
    tabHome: 'الرئيسية', tabTraits: 'المحاور', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'محاور القرآن الكريم',
    traitsDesc: '١٥ موضوعاً من كتاب الشيخ محمد الغزالي — كل موضوع بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن محاور القرآن — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي القرآنية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة المحاور',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية قرآنية',
    dailyLabel: '✨ محور اليوم',
    searchPlaceholder: 'ابحث في المحاور...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ موضوعاً من كتاب المحاور الخمسة للقرآن',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'The Five Axes of the Quran',
    splashSub: 'A journey through the Quran\'s themes for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Sad 38:29',
    tabHome: 'Home', tabTraits: 'Axes', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Axes of the Holy Quran',
    traitsDesc: '15 themes from Sheikh al-Ghazali\'s book — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Quranic themes — 4 choices per question',
    progressTitle: 'My Quranic Journey',
    progressDesc: 'Your progress and achievements in the Quranic journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Quranic Duas',
    dailyLabel: "✨ Today's Axis",
    searchPlaceholder: 'Search axes...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 Quranic themes from The Five Axes of the Quran',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Les Cinq Axes du Coran',
    splashSub: 'Un voyage a travers les themes du Coran pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Sad 38:29',
    tabHome: 'Accueil', tabTraits: 'Axes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Les Axes du Saint Coran',
    traitsDesc: '15 themes du livre du Sheikh al-Ghazali — chacun avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur les themes coraniques — 4 choix par question',
    progressTitle: 'Mon Parcours Coranique',
    progressDesc: 'Vos progres et realisations dans le parcours coranique',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas Coraniques',
    dailyLabel: '✨ Axe du Jour',
    searchPlaceholder: 'Rechercher les axes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 themes coraniques du livre Les Cinq Axes du Coran',
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 QURANIC AXES DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'☝️',
    ar:{title:'الله الواحد',desc:'يبيّن الغزالي: المحور الأول: الإسلام مبني على التوحيد. يجمع القرآن في حديثه عن الله بين أمرين: فقر العالم إلى الله واستمداد وجوده منه، وأن هذا الخالق الرازق واحد لا شريك له.',verse:'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ',verseRef:'الإخلاص ١-٢',hadith:'القرآن لا يحتوي مناقشات نظرية — بل يعرّف الناس بربهم عبر التحفيز الفكري وتعميق التأمل',action:'تأمل اليوم في اسم من أسماء الله واشعر بأثره في حياتك',young:'الله واحد! لا شريك له. كل شيء في الكون يحتاج إليه كل لحظة ☝️'},
    en:{title:'God the One',desc:'Al-Ghazali explains: Axis 1: Islam is built on Tawhid. The Quran combines two things when speaking of God: the world\'s poverty and dependence upon God, and that this Creator-Sustainer is ONE with no partner.',verse:'Say: He is God, the One. God, the Eternal Refuge.',verseRef:'Al-Ikhlas 1-2',hadith:'The Quran contains no abstract theoretical discussions — it acquaints people with their Lord through intellectual stimulation and deepening reflection',action:'Reflect today on one of God\'s Names and feel its effect in your life',young:'God is One! No partner. Everything in the universe needs Him every moment ☝️'},
    fr:{title:'Dieu l\'Unique',desc:'Al-Ghazali explique: Axe 1 : L\'Islam est bâti sur le Tawhid. Le Coran combine deux choses en parlant de Dieu : la pauvreté du monde envers Dieu, et que ce Créateur-Sustenteur est UN sans associé.',verse:'Dis : Il est Dieu, l\'Unique. Dieu, le Refuge Éternel.',verseRef:'Al-Ikhlas 1-2',hadith:'Le Coran ne contient pas de discussions théoriques abstraites — il fait connaître aux gens leur Seigneur par la stimulation intellectuelle',action:'Méditez sur un des Noms de Dieu et ressentez son effet dans votre vie',young:'Dieu est Un ! Pas d\'associé. Tout dans l\'univers a besoin de Lui à chaque instant ☝️'}
  },
  {
    id:2, emoji:'🚫',
    ar:{title:'نقد الشرك والإلحاد',desc:'يتتبع الغزالي تاريخ معرفة البشرية بالألوهية. الوثنيات انهارت تحت الهجمات الشيوعية فتحول أتباعها من الشرك إلى الإلحاد لا إلى التوحيد. يعبّر عن احتقاره الشديد للإلحاد ويعتبره مرضاً لا فلسفة.',verse:'أَفَرَأَيْتُم مَّا تَدْعُونَ مِن دُونِ اللَّهِ',verseRef:'الأحقاف ٤',hadith:'الغزالي: الإلحاد مرض لا فلسفة — والتوحيد هو الفطرة السليمة',action:'عزّز إيمانك بالتوحيد: اقرأ عن أدلة وجود الله وتأمل فيها',young:'التوحيد هو الطبيعي! الله خلقنا لنؤمن به وحده 🚫'},
    en:{title:'Critiquing Polytheism and Atheism',desc:'Al-Ghazali traces humanity\'s knowledge of divinity. Polytheistic traditions crumbled under Communist attacks, causing followers to shift from polytheism to atheism rather than monotheism. He views atheism as a disease, not a philosophy.',verse:'Have you seen what you invoke besides God?',verseRef:'Al-Ahqaf 4',hadith:'Al-Ghazali: Atheism is a disease not a philosophy — and Tawhid is the sound natural state',action:'Strengthen your faith in Tawhid: read about evidence for God\'s existence and reflect',young:'Monotheism is natural! God created us to believe in Him alone 🚫'},
    fr:{title:'Critiquer le Polythéisme et l\'Athéisme',desc:'Al-Ghazali retrace l\'histoire de la connaissance humaine de la divinité. Les traditions polythéistes se sont effondrées sous les attaques communistes, poussant leurs adeptes vers l\'athéisme plutôt que le monothéisme. Il voit l\'athéisme comme une maladie.',verse:'Avez-vous vu ce que vous invoquez en dehors de Dieu ?',verseRef:'Al-Ahqaf 4',hadith:'Al-Ghazali : L\'athéisme est une maladie pas une philosophie — et le Tawhid est l\'état naturel sain',action:'Renforcez votre foi : lisez sur les preuves de l\'existence de Dieu et méditez',young:'Le monothéisme est naturel ! Dieu nous a créés pour croire en Lui seul 🚫'}
  },
  {
    id:3, emoji:'🌌',
    ar:{title:'الكون الدال على خالقه',desc:'يبيّن الغزالي: المحور الثاني: الكون بنظامه المحكم دليل على خالق حكيم. الروحانية في الإسلام مبنية على تأمل الخلق. القرآن يربط بين الذكر والدعاء من جهة والتأمل في آيات الكون من جهة أخرى.',verse:'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ',verseRef:'آل عمران ١٩٠',hadith:'الإسلام يبتعد عن الخرافة ويبني على المشاهدة العقلية للعالم الطبيعي',action:'تأمل في مخلوق واحد اليوم — كيف يدل على حكمة الخالق؟',young:'انظر حولك! كل شيء في الكون يشهد بعظمة الله — الشمس والقمر والنجوم 🌌'},
    en:{title:'The Universe Indicating Its Creator',desc:'Al-Ghazali explains: Axis 2: The cosmos with its precise order is evidence of a Wise Creator. Islamic spirituality is grounded in contemplating creation. The Quran links dhikr and dua with observing the signs of creation.',verse:'Indeed, in the creation of the heavens and earth and the alternation of night and day are signs.',verseRef:'Aal-Imran 190',hadith:'Islam distances itself from superstition and builds on rational observation of the natural world',action:'Contemplate one creation today — how does it indicate the Creator\'s wisdom?',young:'Look around you! Everything in the universe testifies to God\'s greatness — sun, moon, and stars 🌌'},
    fr:{title:'L\'Univers Indiquant Son Créateur',desc:'Al-Ghazali explique: Axe 2 : Le cosmos avec son ordre précis est la preuve d\'un Créateur Sage. La spiritualité islamique est fondée sur la contemplation de la création. Le Coran lie le dhikr et le dua à l\'observation des signes de la création.',verse:'Dans la création des cieux et de la terre et dans l\'alternance de la nuit et du jour, il y a des signes.',verseRef:'Aal-Imran 190',hadith:'L\'Islam s\'éloigne de la superstition et se construit sur l\'observation rationnelle du monde naturel',action:'Contemplez une création aujourd\'hui — comment indique-t-elle la sagesse du Créateur ?',young:'Regarde autour de toi ! Tout dans l\'univers témoigne de la grandeur de Dieu 🌌'}
  },
  {
    id:4, emoji:'📖',
    ar:{title:'القصص القرآني',desc:'يبيّن الغزالي: المحور الثالث: القصص في القرآن أداة للتربية تعلّم السنن الإلهية والقوانين الاجتماعية والحقائق النفسية. بعضها مفصّل كقصة يوسف، وبعضها متكرر عبر السور كصراع موسى مع بني إسرائيل.',verse:'لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِّأُولِي الْأَلْبَابِ',verseRef:'يوسف ١١١',hadith:'كل تقديم للقصة فيه حكمة خاصة ودرس مختلف — وليس تكراراً عبثياً',action:'اقرأ قصة قرآنية اليوم واستخرج منها ثلاثة دروس عملية',young:'القصص القرآنية ليست للتسلية! كل قصة فيها درس مهم لحياتك 📖'},
    en:{title:'Quranic Narratives',desc:'Al-Ghazali explains: Axis 3: Quranic stories are tools for education, teaching divine patterns, social laws, and psychological truths. Some are told in full detail like Yusuf, others are recurring across surahs like Moses and the Children of Israel.',verse:'There was certainly in their stories a lesson for those of understanding.',verseRef:'Yusuf 111',hadith:'Each presentation of a story carries special wisdom and a different lesson — not pointless repetition',action:'Read a Quranic story today and extract three practical lessons from it',young:'Quranic stories are not entertainment! Every story has an important lesson for your life 📖'},
    fr:{title:'Les Récits Coraniques',desc:'Al-Ghazali explique: Axe 3 : Les récits coraniques sont des outils d\'éducation, enseignant les lois divines, sociales et psychologiques. Certains sont détaillés comme Youssouf, d\'autres sont récurrents comme Moïse et les Enfants d\'Israël.',verse:'Il y avait certes dans leurs récits une leçon pour les doués d\'intelligence.',verseRef:'Youssouf 111',hadith:'Chaque présentation d\'une histoire porte une sagesse spéciale et une leçon différente',action:'Lisez un récit coranique aujourd\'hui et extrayez-en trois leçons pratiques',young:'Les récits coraniques ne sont pas pour le divertissement ! Chaque histoire a une leçon importante 📖'}
  },
  {
    id:5, emoji:'🕌',
    ar:{title:'قصة موسى: النموذج المتكرر',desc:'قصة موسى وبني إسرائيل هي أكثر القصص تكراراً في القرآن. يرى الغزالي أن كل تكرار يكشف بُعداً مختلفاً: تحدي الطغيان، عناد البشر، صبر الأنبياء، وعاقبة المكذبين.',verse:'نَتْلُو عَلَيْكَ مِن نَّبَإِ مُوسَىٰ وَفِرْعَوْنَ بِالْحَقِّ',verseRef:'القصص ٣',hadith:'تكرار قصة موسى ليس عبثاً — كل موضع يكشف زاوية جديدة',action:'اقرأ قصة موسى في سورتين مختلفتين وقارن بين الزوايا',young:'قصة موسى تتكرر في القرآن كثيراً — لأنها مليئة بالدروس المختلفة! 🕌'},
    en:{title:'Moses: The Recurring Model',desc:'Al-Ghazali explains: The story of Moses and the Children of Israel is the most repeated in the Quran. Al-Ghazali sees each repetition revealing a different dimension: challenging tyranny, human stubbornness, prophetic patience, and the fate of deniers.',verse:'We recite to you from the news of Moses and Pharaoh in truth.',verseRef:'Al-Qasas 3',hadith:'The repetition of Moses\' story is not pointless — each place reveals a new angle',action:'Read Moses\' story in two different surahs and compare the angles',young:'Moses\' story is repeated often in the Quran — because it\'s full of different lessons! 🕌'},
    fr:{title:'Moïse : Le Modèle Récurrent',desc:'Al-Ghazali explique: L\'histoire de Moïse et des Enfants d\'Israël est la plus répétée dans le Coran. Al-Ghazali voit chaque répétition révélant une dimension différente : défi de la tyrannie, entêtement humain, patience prophétique, et sort des négateurs.',verse:'Nous te récitons des nouvelles de Moïse et de Pharaon en vérité.',verseRef:'Al-Qasas 3',hadith:'La répétition de l\'histoire de Moïse n\'est pas vaine — chaque endroit révèle un nouvel angle',action:'Lisez l\'histoire de Moïse dans deux sourates différentes et comparez les angles',young:'L\'histoire de Moïse se répète souvent dans le Coran — car elle est pleine de leçons différentes ! 🕌'}
  },
  {
    id:6, emoji:'⏳',
    ar:{title:'البعث والجزاء',desc:'يبيّن الغزالي: المحور الرابع: الإيمان بالآخرة ركن من أركان الإيمان. الدنيا دار عمل والآخرة دار جزاء. يقدم الغزالي تحليلاً تفصيلياً لسورة الواقعة كنص مفتاحي لفهم البعث.',verse:'إِذَا وَقَعَتِ الْوَاقِعَةُ ۝ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ',verseRef:'الواقعة ١-٢',hadith:'سورة الواقعة تقسم الناس ثلاث فئات: السابقون وأصحاب اليمين وأصحاب الشمال',action:'اقرأ سورة الواقعة وتأمل: في أي فئة تريد أن تكون؟',young:'يوم القيامة سيقسم الناس لثلاث مجموعات — اعمل خيراً لتكون مع السابقين! ⏳'},
    en:{title:'Resurrection and Recompense',desc:'Al-Ghazali explains: Axis 4: Belief in the afterlife is a pillar of faith. This world is for work, the next for reward. Al-Ghazali provides a detailed analysis of Surah Al-Waqi\'ah as a key text for understanding resurrection.',verse:'When the Occurrence occurs. There is no denying its occurrence.',verseRef:'Al-Waqi\'ah 1-2',hadith:'Surah Al-Waqi\'ah divides people into three groups: the Forerunners, People of the Right, and People of the Left',action:'Read Surah Al-Waqi\'ah and reflect: which group do you want to be in?',young:'On Judgment Day people will be divided into three groups — do good to be with the Forerunners! ⏳'},
    fr:{title:'La Résurrection et la Rétribution',desc:'Al-Ghazali explique: Axe 4 : La croyance en l\'au-delà est un pilier de la foi. Ce monde est pour le travail, le suivant pour la récompense. Al-Ghazali fournit une analyse détaillée de la Sourate Al-Waqi\'ah comme texte clé.',verse:'Quand l\'Événement surviendra. Nul ne niera son avènement.',verseRef:'Al-Waqi\'ah 1-2',hadith:'La Sourate Al-Waqi\'ah divise les gens en trois groupes : les Devanciers, les Gens de la Droite, et les Gens de la Gauche',action:'Lisez la Sourate Al-Waqi\'ah et réfléchissez : dans quel groupe voulez-vous être ?',young:'Le Jour du Jugement les gens seront divisés en trois groupes — fais le bien pour être avec les Devanciers ! ⏳'}
  },
  {
    id:7, emoji:'🌍',
    ar:{title:'أدلة البعث',desc:'يستعرض الغزالي الأدلة القرآنية على حقيقة البعث ويرد على منكريه. التأمل في الآخرة ليس للتخويف فقط بل لتحفيز السلوك الأخلاقي في الحاضر.',verse:'أَيَحْسَبُ الْإِنسَانُ أَلَّن نَّجْمَعَ عِظَامَهُ ۝ بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ',verseRef:'القيامة ٣-٤',hadith:'الله الذي خلقك من عدم قادر على أن يعيدك — فهل تنكر البعث؟',action:'تأمل في معنى الحساب: كيف يغيّر سلوكك اليوم؟',young:'الله خلقك من لا شيء — فهل يعجز عن إعادتك يوم القيامة؟ طبعاً لا! 🌍'},
    en:{title:'Evidence of Resurrection',desc:'Al-Ghazali presents Quranic evidence for the reality of resurrection and refutes deniers. Contemplating the afterlife is not just for fear but to motivate ethical behavior in the present.',verse:'Does man think that We cannot assemble his bones? Yes, We are able to proportion his fingertips.',verseRef:'Al-Qiyamah 3-4',hadith:'God who created you from nothing is able to bring you back — do you deny resurrection?',action:'Reflect on the meaning of accountability: how does it change your behavior today?',young:'God created you from nothing — can He not bring you back on Judgment Day? Of course He can! 🌍'},
    fr:{title:'Preuves de la Résurrection',desc:'Al-Ghazali présente les preuves coraniques de la réalité de la résurrection et réfute les négateurs. La contemplation de l\'au-delà n\'est pas juste pour la peur mais pour motiver le comportement éthique.',verse:'L\'homme pense-t-il que Nous ne pouvons rassembler ses os ? Oui, Nous sommes capables de proportionner ses phalanges.',verseRef:'Al-Qiyamah 3-4',hadith:'Dieu qui t\'a créé du néant peut te ramener — nies-tu la résurrection ?',action:'Méditez sur le sens de la reddition des comptes : comment cela change-t-il votre comportement ?',young:'Dieu t\'a créé du néant — ne peut-Il pas te ramener au Jour du Jugement ? Bien sûr que si ! 🌍'}
  },
  {
    id:8, emoji:'📏',
    ar:{title:'التربية والتشريع',desc:'المحور الخامس: القرآن يقدم إطاراً متكاملاً للتربية الأخلاقية والتوجيه القانوني. يدور حول ما يحبه الله وما يكرهه في صفات البشر وأفعالهم.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',verseRef:'النحل ٩٠',hadith:'التربية أمانة على الآباء والأمهات والمعلمين — والقرآن منهجها',action:'طبّق حكماً قرآنياً واحداً في حياتك اليوم عن وعي وفهم',young:'القرآن يعلمنا كيف نعيش حياة طيبة — بالعدل والإحسان مع الجميع 📏'},
    en:{title:'Education and Legislation',desc:'Axis 5: The Quran provides a complete framework for moral education and legal guidance, revolving around what God loves and dislikes in human attributes and actions.',verse:'Indeed, God commands justice and excellence.',verseRef:'An-Nahl 90',hadith:'Education is a trust upon fathers, mothers, and teachers — and the Quran is its curriculum',action:'Apply one Quranic ruling in your life today with awareness and understanding',young:'The Quran teaches us how to live a good life — with justice and kindness to everyone 📏'},
    fr:{title:'Éducation et Législation',desc:'Axe 5 : Le Coran fournit un cadre complet pour l\'éducation morale et l\'orientation juridique, tournant autour de ce que Dieu aime et n\'aime pas dans les attributs et actions humaines.',verse:'Dieu ordonne la justice et la bienfaisance.',verseRef:'An-Nahl 90',hadith:'L\'éducation est un dépôt sur les pères, mères et enseignants — et le Coran est son programme',action:'Appliquez un jugement coranique dans votre vie aujourd\'hui avec conscience et compréhension',young:'Le Coran nous apprend à vivre une bonne vie — avec justice et bonté envers tous 📏'}
  },
  {
    id:9, emoji:'🌱',
    ar:{title:'التربية على الفطرة',desc:'التربية الإسلامية تقوم على الالتزام بالفطرة التي فطر الله الناس عليها. تشمل القيم الأخلاقية والعلمية والتعليمية والروحية التي دعا إليها القرآن والسنة.',verse:'فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',verseRef:'الروم ٣٠',hadith:'الإسلام دين الفطرة — يبني على الطبيعة السليمة لا يصادمها',action:'ربِّ أطفالك على الفطرة السليمة: الصدق والأمانة والرحمة والعلم',young:'الإسلام يوافق طبيعتك! كل ما يأمرك به جميل ومفيد لك 🌱'},
    en:{title:'Education on Natural Disposition',desc:'Islamic education is based on adhering to the natural disposition (fitrah) upon which God created humans. It includes moral, scientific, educational, and spiritual values called for by the Quran and Sunnah.',verse:'So direct your face toward the religion, inclining to truth — the nature of God upon which He created mankind.',verseRef:'Ar-Rum 30',hadith:'Islam is the religion of natural disposition — it builds on sound nature, not against it',action:'Raise your children on sound nature: truthfulness, trustworthiness, mercy, and knowledge',young:'Islam agrees with your nature! Everything it commands is beautiful and beneficial for you 🌱'},
    fr:{title:'Éducation sur la Disposition Naturelle',desc:'L\'éducation islamique repose sur l\'adhésion à la disposition naturelle (fitrah) selon laquelle Dieu a créé les humains. Elle comprend les valeurs morales, scientifiques, éducatives et spirituelles.',verse:'Dirige ton visage vers la religion en pur monothéisme — la nature de Dieu selon laquelle Il a créé les hommes.',verseRef:'Ar-Rum 30',hadith:'L\'Islam est la religion de la disposition naturelle — il construit sur la nature saine',action:'Élevez vos enfants sur la nature saine : véracité, fiabilité, miséricorde et savoir',young:'L\'Islam s\'accorde avec ta nature ! Tout ce qu\'il ordonne est beau et bénéfique pour toi 🌱'}
  },
  {
    id:10, emoji:'🔗',
    ar:{title:'ترابط المحاور الخمسة',desc:'المحاور ليست منفصلة بل متداخلة. التوحيد يقود للتأمل في الكون، والتأمل يؤكد التوحيد. القصص تجسّد الإيمان بالبعث، والتشريع يبني على كل المحاور السابقة.',verse:'كِتَابٌ أُحْكِمَتْ آيَاتُهُ ثُمَّ فُصِّلَتْ مِن لَّدُنْ حَكِيمٍ خَبِيرٍ',verseRef:'هود ١',hadith:'الغزالي: المحاور الخمسة كالأصابع — منفصلة لكنها تعمل معاً كيد واحدة',action:'ابحث عن سورة تجمع بين أكثر من محور — وتأمل كيف تترابط',young:'المحاور الخمسة مثل أصابع اليد — تعمل معاً! كل واحد يكمّل الآخر 🔗'},
    en:{title:'Interconnection of the Five Axes',desc:'The axes are not separate but intertwined. Tawhid leads to contemplating the universe, contemplation confirms Tawhid. Stories embody belief in resurrection, legislation builds on all previous axes.',verse:'A Book whose verses are perfected and then presented in detail, from One who is Wise and Acquainted.',verseRef:'Hud 1',hadith:'Al-Ghazali: The five axes are like fingers — separate but working together as one hand',action:'Find a surah that combines more than one axis — and reflect on how they connect',young:'The five axes are like fingers — they work together! Each one completes the other 🔗'},
    fr:{title:'Interconnexion des Cinq Axes',desc:'Les axes ne sont pas séparés mais entrelacés. Le Tawhid mène à contempler l\'univers, la contemplation confirme le Tawhid. Les récits incarnent la croyance en la résurrection, la législation se construit sur tous les axes précédents.',verse:'Un Livre dont les versets sont parfaits puis présentés en détail, de la part d\'un Sage, Informé.',verseRef:'Hud 1',hadith:'Al-Ghazali : Les cinq axes sont comme les doigts — séparés mais travaillant ensemble comme une main',action:'Trouvez une sourate combinant plus d\'un axe — et méditez sur leur connexion',young:'Les cinq axes sont comme les doigts — ils travaillent ensemble ! Chacun complète l\'autre 🔗'}
  },
  {
    id:11, emoji:'📜',
    ar:{title:'قصة يوسف: النموذج المفصل',desc:'يرى الغزالي سورة يوسف نموذجاً للقصة القرآنية المفصلة. تُروى في سورة واحدة من البداية للنهاية. فيها دروس في الصبر والعفة والعدل والمغفرة وتدبير الله.',verse:'نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ',verseRef:'يوسف ٣',hadith:'قصة يوسف أحسن القصص — لأنها تجمع كل أبعاد التربية الإنسانية',action:'اقرأ سورة يوسف كاملة واستخرج منها خمسة دروس',young:'سورة يوسف أجمل قصة! فيها صبر وذكاء ومغفرة — اقرأها وتعلم منها 📜'},
    en:{title:'Yusuf: The Detailed Model',desc:'Al-Ghazali sees Surah Yusuf as a model of the detailed Quranic narrative. Told in one surah from beginning to end. It contains lessons in patience, chastity, justice, forgiveness, and God\'s planning.',verse:'We relate to you the best of stories.',verseRef:'Yusuf 3',hadith:'The story of Yusuf is the best of stories — because it combines all dimensions of human education',action:'Read Surah Yusuf in full and extract five lessons from it',young:'Surah Yusuf is the most beautiful story! It has patience, intelligence, and forgiveness — read it and learn! 📜'},
    fr:{title:'Youssouf : Le Modèle Détaillé',desc:'Al-Ghazali voit la Sourate Youssouf comme un modèle de récit coranique détaillé. Racontée dans une seule sourate du début à la fin. Elle contient des leçons de patience, chasteté, justice, pardon, et planification divine.',verse:'Nous te racontons le plus beau des récits.',verseRef:'Youssouf 3',hadith:'L\'histoire de Youssouf est le plus beau récit — car elle combine toutes les dimensions de l\'éducation humaine',action:'Lisez la Sourate Youssouf en entier et extrayez-en cinq leçons',young:'La Sourate Youssouf est la plus belle histoire ! Patience, intelligence et pardon — lis-la et apprends ! 📜'}
  },
  {
    id:12, emoji:'🔭',
    ar:{title:'التأمل في الكون عبادة',desc:'يؤكد الغزالي أن التأمل في الكون ليس ترفاً فكرياً بل عبادة. القرآن يدعو مراراً للنظر والتفكر والتعقل. الروحانية الإسلامية ليست انسحاباً من العالم بل تفاعلاً واعياً معه.',verse:'قُلِ انظُرُوا مَاذَا فِي السَّمَاوَاتِ وَالْأَرْضِ',verseRef:'يونس ١٠١',hadith:'التأمل في الكون عبادة — والقرآن يطلبها منا في عشرات الآيات',action:'اخرج اليوم وتأمل في السماء والأرض — واشعر بعظمة الخالق',young:'التأمل في الطبيعة عبادة! انظر للسماء والبحر والجبال واشكر الله 🔭'},
    en:{title:'Contemplating the Universe is Worship',desc:'Al-Ghazali affirms that contemplating the universe is not intellectual luxury but worship. The Quran repeatedly calls for observation, reflection, and reasoning. Islamic spirituality is not withdrawal from the world but conscious engagement with it.',verse:'Say: Look at what is in the heavens and the earth.',verseRef:'Yunus 101',hadith:'Contemplating the universe is worship — and the Quran asks it of us in dozens of verses',action:'Go outside today and contemplate the sky and earth — feel the Creator\'s greatness',young:'Contemplating nature is worship! Look at the sky, sea, and mountains and thank God 🔭'},
    fr:{title:'Contempler l\'Univers est une Adoration',desc:'Al-Ghazali affirme que contempler l\'univers n\'est pas un luxe intellectuel mais une adoration. Le Coran appelle répétitivement à l\'observation, la réflexion et le raisonnement.',verse:'Dis : Regardez ce qu\'il y a dans les cieux et la terre.',verseRef:'Younous 101',hadith:'Contempler l\'univers est une adoration — et le Coran nous le demande dans des dizaines de versets',action:'Sortez aujourd\'hui et contemplez le ciel et la terre — ressentez la grandeur du Créateur',young:'Contempler la nature est une adoration ! Regarde le ciel, la mer et les montagnes et remercie Dieu 🔭'}
  },
  {
    id:13, emoji:'⚖️',
    ar:{title:'حكمة التشريع',desc:'التشريع الإسلامي في القرآن ليس قيوداً عشوائية بل نظام حكيم لحماية الفرد والمجتمع. يشمل العبادات والمعاملات والأخلاق والعقوبات — كلها تخدم مقاصد عليا: حفظ الدين والنفس والعقل والنسل والمال.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'التشريع رحمة لا عقوبة — يحمي الإنسان ويبني المجتمع',action:'ابحث عن حكمة في حكم قرآني يبدو لك صعباً — ستجد أنه يحميك',young:'أحكام الإسلام تحميك وتحمي المجتمع! كلها لمصلحتك ⚖️'},
    en:{title:'Wisdom of Legislation',desc:'Quranic legislation is not arbitrary restrictions but a wise system protecting individual and society. It includes worship, transactions, ethics, and penalties — all serving higher objectives: preserving religion, life, intellect, lineage, and property.',verse:'And We have not sent you except as a mercy to the worlds.',verseRef:'Al-Anbiya 107',hadith:'Legislation is mercy not punishment — it protects humans and builds society',action:'Search for wisdom in a Quranic ruling that seems difficult — you\'ll find it protects you',young:'Islamic rulings protect you and protect society! They\'re all for your benefit ⚖️'},
    fr:{title:'Sagesse de la Législation',desc:'La législation coranique n\'est pas des restrictions arbitraires mais un système sage protégeant l\'individu et la société. Elle comprend l\'adoration, les transactions, l\'éthique et les peines — servant des objectifs supérieurs.',verse:'Et Nous ne t\'avons envoyé qu\'en miséricorde pour les mondes.',verseRef:'Al-Anbiya 107',hadith:'La législation est miséricorde pas punition — elle protège les humains et construit la société',action:'Cherchez la sagesse dans un jugement coranique qui semble difficile — vous verrez qu\'il vous protège',young:'Les règles de l\'Islam te protègent et protègent la société ! Elles sont toutes pour ton bien ⚖️'}
  },
  {
    id:14, emoji:'🌐',
    ar:{title:'بقاء الأمة بالقرآن',desc:'الأطروحة المركزية للغزالي: بقاء الأمة الإسلامية مرتبط بارتباطها الوثيق بالقرآن. فهم المحاور الخمسة هو المفتاح لهذا الارتباط. القرآن مشروع حضاري شامل لا كتاب طقوس.',verse:'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',verseRef:'الإسراء ٩',hadith:'الغزالي: بقاء الأمة مرتبط بالقرآن — والمحاور الخمسة مفتاح الفهم',action:'اجعل القرآن مرجعك الأول في كل قرار تتخذه',young:'القرآن هو سر نجاح الأمة! كلما اقتربنا منه ارتقينا 🌐'},
    en:{title:'The Ummah Survives Through the Quran',desc:'Al-Ghazali\'s central thesis: the Muslim Ummah\'s survival depends on its firm connection to the Quran. Understanding the five axes is the key to this connection. The Quran is a comprehensive civilizational project, not a book of rituals.',verse:'Indeed, this Quran guides to that which is most suitable.',verseRef:'Al-Isra 9',hadith:'Al-Ghazali: The Ummah\'s survival is tied to the Quran — the five axes are the key to understanding',action:'Make the Quran your primary reference in every decision you make',young:'The Quran is the secret of the Ummah\'s success! The closer we get to it, the higher we rise 🌐'},
    fr:{title:'La Oumma Survit Par le Coran',desc:'La thèse centrale d\'Al-Ghazali : la survie de la Oumma musulmane dépend de son lien ferme avec le Coran. Comprendre les cinq axes est la clé de ce lien. Le Coran est un projet civilisationnel complet.',verse:'Certes, ce Coran guide vers ce qui est le plus droit.',verseRef:'Al-Isra 9',hadith:'Al-Ghazali : La survie de la Oumma est liée au Coran — les cinq axes sont la clé de la compréhension',action:'Faites du Coran votre référence principale dans chaque décision',young:'Le Coran est le secret du succès de la Oumma ! Plus on s\'en rapproche, plus on s\'élève 🌐'}
  },
  {
    id:15, emoji:'🧭',
    ar:{title:'القرآن ثلاثية الغزالي',desc:'هذا الكتاب جزء من ثلاثية الغزالي القرآنية: "كيف نتعامل مع القرآن" (المنهج)، "المحاور الخمسة" (الموضوعات الكبرى)، و"نحو تفسير موضوعي" (التطبيق على السور). الثلاثة معاً يشكلون رؤية متكاملة.',verse:'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ',verseRef:'القمر ١٧',hadith:'ثلاثة كتب تشكل مشروع الغزالي القرآني — وهذا الكتاب يكشف البنية الكبرى',action:'اقرأ الكتب الثلاثة معاً — ستكتشف رؤية الغزالي الشاملة للقرآن',young:'هذا الكتاب واحد من ثلاثة كتب عن القرآن كتبها الشيخ الغزالي! 🧭'},
    en:{title:'Al-Ghazali\'s Quranic Trilogy',desc:'This book is part of Al-Ghazali\'s Quranic trilogy: "How We Deal with the Quran" (methodology), "The Five Axes" (major themes), and "Towards a Thematic Commentary" (application to surahs). Together they form a complete vision.',verse:'And We have certainly made the Quran easy for remembrance, so is there any who will remember?',verseRef:'Al-Qamar 17',hadith:'Three books form Al-Ghazali\'s Quranic project — this book reveals the grand structure',action:'Read all three books together — you\'ll discover Al-Ghazali\'s comprehensive vision for the Quran',young:'This book is one of three books about the Quran that Sheikh Al-Ghazali wrote! 🧭'},
    fr:{title:'La Trilogie Coranique d\'Al-Ghazali',desc:'Ce livre fait partie de la trilogie coranique d\'Al-Ghazali : « Comment traiter le Coran » (méthodologie), « Les Cinq Axes » (thèmes majeurs), et « Vers un Commentaire Thématique » (application aux sourates). Ensemble ils forment une vision complète.',verse:'Et Nous avons certes facilité le Coran pour le rappel, y a-t-il quelqu\'un pour se rappeler ?',verseRef:'Al-Qamar 17',hadith:'Trois livres forment le projet coranique d\'Al-Ghazali — ce livre révèle la grande structure',action:'Lisez les trois livres ensemble — vous découvrirez la vision complète d\'Al-Ghazali pour le Coran',young:'Ce livre est l\'un des trois livres sur le Coran écrits par Sheikh Al-Ghazali ! 🧭'}
  }
];

const QUIZ = [
  {
    ar:{q:'ما المحور الأول والأعظم في القرآن الكريم؟',opts:['قصص الأنبياء','التوحيد','الأحكام','الآخرة'],correct:1,hint:'هذا المحور يدور حول إفراد الله بالعبادة',quran:'الإخلاص ١'},
    en:{q:'What is the first and greatest axis of the Holy Quran?',opts:['Prophetic stories','Tawhid','Legislation','Afterlife'],correct:1,hint:'This axis revolves around worshipping Allah alone',quran:'Al-Ikhlas 1'},
    fr:{q:'Quel est le premier et le plus grand axe du Saint Coran ?',opts:['Histoires prophetiques','Tawhid','Legislation','Au-dela'],correct:1,hint:'Cet axe tourne autour de l\'adoration d\'Allah seul',quran:'Al-Ikhlas 1'}
  },
  {
    ar:{q:'أكمل الآية: "لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِ..."',opts:['المؤمنين','أولي الألباب','الصابرين','المتقين'],correct:1,hint:'هذه الآية في سورة يوسف',quran:'يوسف ١١١'},
    en:{q:'Complete the verse: "There was certainly in their stories a lesson for those of..."',opts:['The believers','Understanding','The patient','The pious'],correct:1,hint:'This verse is in Surah Yusuf',quran:'Yusuf 111'},
    fr:{q:'Completez le verset : « Il y avait dans leurs histoires une lecon pour les doues d\'... »',opts:['Les croyants','Intelligence','Les patients','Les pieux'],correct:1,hint:'Ce verset est dans la Sourate Yusuf',quran:'Yusuf 111'}
  },
  {
    ar:{q:'كم سنة دعا نوح عليه السلام قومه؟',opts:['٥٠٠ سنة','٨٠٠ سنة','٩٥٠ سنة','١٠٠٠ سنة'],correct:2,hint:'ألف سنة إلا خمسين عاماً',quran:'العنكبوت ١٤'},
    en:{q:'How many years did Noah call his people?',opts:['500 years','800 years','950 years','1000 years'],correct:2,hint:'A thousand years minus fifty',quran:'Al-Ankabut 14'},
    fr:{q:'Combien d\'annees Noe a-t-il appele son peuple ?',opts:['500 ans','800 ans','950 ans','1000 ans'],correct:2,hint:'Mille ans moins cinquante',quran:'Al-Ankabut 14'}
  },
  {
    ar:{q:'من هو النبي الأكثر ذكراً في القرآن الكريم؟',opts:['إبراهيم','محمد ﷺ','موسى','عيسى'],correct:2,hint:'واجه فرعون بشجاعة',quran:'القصص ٥'},
    en:{q:'Who is the most mentioned prophet in the Holy Quran?',opts:['Ibrahim','Muhammad (PBUH)','Moses','Jesus'],correct:2,hint:'He faced Pharaoh with courage',quran:'Al-Qasas 5'},
    fr:{q:'Qui est le prophete le plus mentionne dans le Saint Coran ?',opts:['Ibrahim','Muhammad (PSL)','Moise','Jesus'],correct:2,hint:'Il a affronte Pharaon avec courage',quran:'Al-Qasas 5'}
  },
  {
    ar:{q:'ما هي سورة "أحسن القصص"؟',opts:['سورة الكهف','سورة مريم','سورة يوسف','سورة الأنبياء'],correct:2,hint:'تروي قصة نبي ظلمه إخوته',quran:'يوسف ٣'},
    en:{q:'Which surah contains "the best of stories"?',opts:['Surah Al-Kahf','Surah Maryam','Surah Yusuf','Surah Al-Anbiya'],correct:2,hint:'It tells the story of a prophet wronged by his brothers',quran:'Yusuf 3'},
    fr:{q:'Quelle sourate contient « le meilleur des recits » ?',opts:['Sourate Al-Kahf','Sourate Maryam','Sourate Yusuf','Sourate Al-Anbiya'],correct:2,hint:'Elle raconte l\'histoire d\'un prophete lese par ses freres',quran:'Yusuf 3'}
  },
  {
    ar:{q:'من النبي الذي بنى الكعبة مع ابنه؟',opts:['نوح','موسى','إبراهيم','محمد ﷺ'],correct:2,hint:'يُلقّب بأبي الأنبياء',quran:'النحل ١٢٠'},
    en:{q:'Which prophet built the Kaaba with his son?',opts:['Noah','Moses','Ibrahim','Muhammad (PBUH)'],correct:2,hint:'He is called the father of prophets',quran:'An-Nahl 120'},
    fr:{q:'Quel prophete a construit la Kaaba avec son fils ?',opts:['Noe','Moise','Ibrahim','Muhammad (PSL)'],correct:2,hint:'Il est appele le pere des prophetes',quran:'An-Nahl 120'}
  },
  {
    ar:{q:'أكمل الآية: "وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً ..."',opts:['عظيمة','كريمة','وسطاً','صالحة'],correct:2,hint:'تصف الإسلام بالاعتدال',quran:'البقرة ١٤٣'},
    en:{q:'Complete the verse: "And thus We have made you a ... nation"',opts:['Great','Noble','Middle','Righteous'],correct:2,hint:'It describes Islam with moderation',quran:'Al-Baqarah 143'},
    fr:{q:'Completez le verset : « Et ainsi Nous avons fait de vous une communaute du ... »',opts:['Grande','Noble','Juste milieu','Vertueuse'],correct:2,hint:'Il decrit l\'Islam par la moderation',quran:'Al-Baqarah 143'}
  },
  {
    ar:{q:'ما الحديث الذي قال فيه النبي ﷺ عن رسالته؟',opts:['بُعثت لأتمم مكارم الأخلاق','بُعثت بالسيف','بُعثت للعرب','بُعثت بالمال'],correct:0,hint:'يتعلق بالأخلاق الحسنة',quran:'الأنبياء ١٠٧'},
    en:{q:'What did the Prophet (PBUH) say about his mission?',opts:['I was sent to perfect noble character','I was sent with the sword','I was sent to the Arabs','I was sent with wealth'],correct:0,hint:'It relates to good character',quran:'Al-Anbiya 107'},
    fr:{q:'Qu\'a dit le Prophete (PSL) sur sa mission ?',opts:['J\'ai ete envoye pour parfaire les nobles caracteres','J\'ai ete envoye avec l\'epee','J\'ai ete envoye aux Arabes','J\'ai ete envoye avec la richesse'],correct:0,hint:'Cela concerne le bon caractere',quran:'Al-Anbiya 107'}
  },
  {
    ar:{q:'في أي سورة وردت آية "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ..."؟',opts:['البقرة','آل عمران','الأنعام','الرعد'],correct:1,hint:'هذه السورة تُنسب لعائلة نبوية',quran:'آل عمران ١٩٠'},
    en:{q:'In which surah is the verse "Indeed, in the creation of the heavens and earth..."?',opts:['Al-Baqarah','Al Imran','Al-Anam','Ar-Rad'],correct:1,hint:'This surah is named after a prophetic family',quran:'Al Imran 190'},
    fr:{q:'Dans quelle sourate se trouve le verset « En verite, dans la creation des cieux et de la terre... » ?',opts:['Al-Baqarah','Al Imran','Al-Anam','Ar-Rad'],correct:1,hint:'Cette sourate porte le nom d\'une famille prophetique',quran:'Al Imran 190'}
  },
  {
    ar:{q:'ماذا قال القرآن عن عيسى ابن مريم؟',opts:['إله','ابن الله','عبد أنعم الله عليه','ملاك'],correct:2,hint:'وردت في سورة الزخرف',quran:'الزخرف ٥٩'},
    en:{q:'What did the Quran say about Jesus son of Mary?',opts:['A deity','Son of God','A servant whom Allah blessed','An angel'],correct:2,hint:'Mentioned in Surah Az-Zukhruf',quran:'Az-Zukhruf 59'},
    fr:{q:'Que dit le Coran sur Jesus fils de Marie ?',opts:['Une divinite','Fils de Dieu','Un serviteur qu\'Allah a comble','Un ange'],correct:2,hint:'Mentionne dans la Sourate Az-Zukhruf',quran:'Az-Zukhruf 59'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء فهم القرآن',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ يَا ذَا الْجَلالِ وَالإِكْرَامِ',tr:'رواه ابن حبان'},
    en:{label:'Dua for Understanding the Quran',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ يَا ذَا الْجَلالِ وَالإِكْرَامِ',tr:'O Allah, open for us Your wisdom and spread upon us Your mercy, O Possessor of Majesty and Honor — Ibn Hibban'},
    fr:{label:'Dua pour Comprendre le Coran',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ يَا ذَا الْجَلالِ وَالإِكْرَامِ',tr:'O Allah, ouvre-nous Ta sagesse et repands sur nous Ta misericorde, O Possesseur de Majeste et d\'Honneur — Ibn Hibban'} },
  { ar:{label:'دعاء قبل التلاوة',text:'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',tr:'النحل ٩٨'},
    en:{label:'Dua Before Recitation',text:'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',tr:'I seek refuge with Allah from the accursed Satan. In the name of Allah, the Most Gracious, the Most Merciful — An-Nahl 98'},
    fr:{label:'Dua Avant la Recitation',text:'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',tr:'Je cherche refuge aupres d\'Allah contre Satan le maudit. Au nom d\'Allah, le Tout Misericordieux, le Tres Misericordieux — An-Nahl 98'} },
  { ar:{label:'دعاء حفظ القرآن',text:'اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً',tr:'دعاء مأثور'},
    en:{label:'Dua for Memorizing Quran',text:'اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً',tr:'O Allah, have mercy on me through the Quran and make it for me a guide, a light, a guidance, and a mercy'},
    fr:{label:'Dua pour Memoriser le Coran',text:'اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً',tr:'O Allah, aie pitie de moi par le Coran et fais-en pour moi un guide, une lumiere, une direction et une misericorde'} },
  { ar:{label:'دعاء العلم النافع',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Beneficial Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir Utile',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء التدبر',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'رواه أحمد'},
    en:{label:'Dua for Reflection',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'O Allah, make the Quran the spring of my heart, the light of my chest, the remover of my sadness, and the departure of my worry — Ahmad'},
    fr:{label:'Dua pour la Reflexion',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'O Allah, fais du Coran le printemps de mon coeur, la lumiere de ma poitrine, le dissipateur de ma tristesse et le depart de mon souci — Ahmad'} },
  { ar:{label:'دعاء الهداية',text:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'الفاتحة ٦'},
    en:{label:'Dua for Guidance',text:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'Guide us to the straight path — Al-Fatiha 6'},
    fr:{label:'Dua pour la Guidance',text:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'Guide-nous vers le droit chemin — Al-Fatiha 6'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'mahawir-xp';
const BADGES_KEY = 'mahawir-badges';
const READ_KEY = 'mahawir-read';
const STREAK_KEY = 'mahawir-streak';
const MODE_KEY = 'mahawir-mode';
const QUIZ_BEST_KEY = 'mahawir-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabTraits'); if(_e) _e.textContent=t.tabTraits; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=(document.getElementById('traitsTitle') || document.getElementById('cardsTitle')); if(_e) _e.textContent=t.traitsTitle; }
  { const _e=(document.getElementById('traitsDesc') || document.getElementById('cardsDesc')); if(_e) _e.textContent=t.traitsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = (document.getElementById('traitsContainer') || document.getElementById('cardsContainer'));
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'محور مقروء':lang==='fr'?'Axes lus':'Axes Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«المحاور الخمسة للقرآن الكريم» كتاب يكشف البنية الموضوعية للقرآن. يبيّن الشيخ الغزالي أن القرآن يدور حول خمسة محاور أساسية: التوحيد، الكون والخلق، قصص الأنبياء، الآخرة، والأحكام التشريعية. يساعد القارئ على فهم القرآن فهماً شاملاً ومترابطاً.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "المحاور الخمسة للقرآن الكريم" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأحمد'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal and fighting rigidity.',
      bookTitle: 'About the Book',
      bookDesc: '"The Five Axes of the Holy Quran" reveals the thematic structure of the Quran. Sheikh al-Ghazali shows that the Quran revolves around five fundamental axes: Tawhid (Divine Unity), the Universe and Creation, Prophetic Stories, the Afterlife, and Legislation. It helps readers understand the Quran comprehensively.',
      sourcesTitle: 'Sources',
      sources: ['"The Five Axes of the Holy Quran" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Ahmad'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Les Cinq Axes du Saint Coran" revele la structure thematique du Coran. Le Sheikh al-Ghazali montre que le Coran tourne autour de cinq axes fondamentaux : le Tawhid, l\'Univers et la Creation, les Histoires Prophetiques, l\'Au-dela, et la Legislation. Il aide les lecteurs a comprendre le Coran de maniere globale.',
      sourcesTitle: 'Sources',
      sources: ['"Les Cinq Axes du Saint Coran" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Ahmad'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "المحاور الخمسة للقرآن الكريم" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ محوراً، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/al-mahawir-al-khamsah'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"The Five Axes of the Holy Quran" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 axes, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/al-mahawir-al-khamsah'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"Les Cinq Axes du Saint Coran" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 axes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/al-mahawir-al-khamsah'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اكتشف محوراً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء عند قراءة القرآن','⭐ أكمل ١٥ محوراً لتصبح خبيراً'],
    en: ['📖 Discover a new axis every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua when reading Quran','⭐ Complete all 15 axes to become an Expert'],
    fr: ['📖 Decouvrez un nouvel axe chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas en lisant le Coran','⭐ Completez les 15 axes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
