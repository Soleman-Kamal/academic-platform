let coursesDB = [
  {
    id: "eng-211",
    title: "مقدمة في هندسة البرمجيات",
    faculty: "علوم الحاسوب",
    level: "المستوى الثاني",
    semester: "الفصل الأول",
    description:
      "تُركز هذه المادة على المبادئ الهندسية المتبعة لبناء أنظمة برمجية عالية الجودة، من خلال دراسة دورة حياة تطوير البرمجيات (SDLC) بدءاً من تحليل المتطلبات والتصميم وصولاً إلى الاختبار والصيانة. تهدف المادة إلى تزويد الطالب بالمهارات اللازمة لإدارة المشاريع البرمجية الضخمة وضمان كفاءتها واستدامتها ضمن فرق العمل الجماعية.",
    lectures: [
      {
        id: "eng-211-l1",
        title: "مقدمة الكورس",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL: "https://youtu.be/aZcUoPaEuoM?si=14P4z7TYBOu6Yw29",
      },
      {
        id: "eng-211-l2",
        title: "تطوير البرامج المهنية و التمهيدية",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=dTomNirU-Jw&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=2",
      },
      {
        id: "eng-211-l3",
        title: "هندسة البرمجيات",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=dTomNirU-Jw&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=2",
      },
      {
        id: "eng-211-l4",
        title: "أساسيات هندسة البرمجيات",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=qDOz-eK901Y&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=4",
      },
      {
        id: "eng-211-l5",
        title: "دراسة الحالة",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=V_dv3N-ZouI&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=6",
      },
      {
        id: "eng-211-l6",
        title: "محطة الطقس البرية",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=JahJLuobchw&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=6",
      },
      {
        id: "eng-211-l7",
        title: "عملية البرمجيات",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=tOHhLoXGZCc&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=7",
      },
      {
        id: "eng-211-l8",
        title: "التطوير التدريجي",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=gAlGdUWck9E&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=8",
      },
      {
        id: "eng-211-l9",
        title: "أنشطة عملية",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=RmYMVRCqxBA&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=9",
      },
      {
        id: "eng-211-l10",
        title: "المرحلة والاختبار",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=_GP4j-mKPYg&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=10",
      },
      {
        id: "eng-211-l11",
        title: "نماذج البرامج",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=n9pO4i_9Lko&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=11",
      },
      {
        id: "eng-211-l12",
        title: "تحسين العمليات",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=lgLVzI_MWQk&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=12",
      },
      {
        id: "eng-211-l13",
        title: "تطوير البرمجيات بستخدام Agile",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=-7LinGqHWQA&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=13",
      },
      {
        id: "eng-211-l14",
        title: "طرق agile",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=zC3JtMqelSM&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=14",
      },
      {
        id: "eng-211-l15",
        title: "تقنيات التطوير باستخدام ِagile",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=z_BemS0y1ho&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=15",
      },
      {
        id: "eng-211-l16",
        title: "قصص المستخدم ومتطلباته",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=ia7wKpyuSsw&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=16",
      },
      {
        id: "eng-211-l17",
        title: "تطوير الاختبار الاول",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "youtube.com/watch?v=d7tdiTudu_Y&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=17&pp=iAQB",
      },
      {
        id: "eng-211-l18",
        title: "تمتة الاختبار",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=Vqw4ICMp-jI&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=18",
      },
      {
        id: "eng-211-l19",
        title: "ادارة مشروع agile + scrum",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=FlyzF9UNOmg&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=19",
      },
      {
        id: "eng-211-l20",
        title: "دورة scrum sprint",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=oSpCxdxMcS8&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=20",
      },
      {
        id: "eng-211-l21",
        title: "نمذجة النظام",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=ssINghF895E&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=21",
      },
      {
        id: "eng-211-l22",
        title: "تموذج السياق",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=41wXSMUJP0M&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=22",
      },
      {
        id: "eng-211-l23",
        title: "نماذج التفاعل",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=6W8L2p139iI&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=23",
      },
      {
        id: "eng-211-l24",
        title: "النماذج الهيكلية",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=l3Xb2WlWxVM&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=24",
      },
      {
        id: "eng-211-l25",
        title: "نماذج السلوك",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        videoURL:
          "https://www.youtube.com/watch?v=9iESLItGVa4&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=25",
      },
    ],
  },
  {
    id: "eng-212",
    title: "تراكيب بيانات",
    faculty: "it",
    level: "المستوى الثاني",
    semester: "الفصل الأول",
    description: `تُركز مادة تراكيب البيانات (Data Structures) على دراسة الطرق المختلفة لتنظيم وتخزين البيانات في ذاكرة الحاسوب بكفاءة، مما يتيح الوصول إليها وتعديلها بأسرع وقت وأقل مجهود ممكن.
تتناول المادة هياكل أساسية مثل المصفوفات (Arrays)، القوائم المرتبطة (Linked Lists)، والأشجار (Trees)، وتُعد الحجر الأساس لبناء خوارزميات ذكية وبرامج قوية قادرة على التعامل مع البيانات الضخمة.`,
    lectures: [
      {
        id: "eng-212-l1",
        title: "مقدمة الكورس",
        description: "مقدمة بسيطة عن المادة والمواضيع التي سيتم شرحها.",
        videoURL: "https://youtu.be/DocSkU1Qyos?si=FsFLc4CfSH1O8Z8B",
      },
      {
        id: "eng-212-l2",
        title: "مراجة لغة جافا",
        description:
          "مراجعة سريعة من لغة Java وأنواع البيانات والدوال والكائنات.",
        videoURL: "https://youtu.be/SCEAJouTHPI?si=re0PGuFHmpZt2eqM",
      },
      {
        id: "eng-212-l3",
        title: "تمثيل البيانات في الذاكرة",
        description:
          "طرق تمثيل البيانات المترابطة في الذاكرة، وتوضيح مفهوم التمثيل الديناميكي عن طريق القائمة المرتبطة المفردة (SLL).",
        videoURL: "https://youtu.be/mzh5XO3jyDo?si=O3QMU9IKj9ULjSm7",
      },
      {
        id: "eng-212-l4",
        title: "كيفية انشاء SLL",
        description:
          "شرح كيفية إنشاء SLL برمجياً وهندسياً وإنشاء Nodes وربطهم بها.",
        videoURL: "https://www.youtube.com/watch?v=F0xCZ3K5zWU",
      },
      {
        id: "eng-212-l5",
        title: "العمليات على SLL (1)",
        description:
          "تطبيق برمجي وهندسي لعمليات على SLL مثل طباعة محتويات القائمة أو البحث عن node معينة.",
        videoURL: "https://www.youtube.com/watch?v=roQsy2ro2qA",
      },
      {
        id: "eng-212-l6",
        title: "العمليات على SLL (2)",
        description:
          "شرح عملية الإضافة برمجياً وهندسياً لأي node في بداية أو وسط أو نهاية القائمة.",
        videoURL: "https://youtu.be/NO3a_83MCRU?si=j93MbH1naQ6Y4jTw",
      },
      {
        id: "eng-212-l7",
        title: "العمليات على SLL (3)",
        description:
          "شرح تطبيقات أخرى على القائمة مثل حذف node أو قلب القائمة أو دمج قائمتين.",
        videoURL: "https://youtu.be/E4_pNeJuaXA?si=TOiHNvoyROq0AHsx",
      },
      {
        id: "eng-212-l8",
        title: "انشاء CLL & DLL",
        description:
          "شرح هياكل بيانات مرتبطة أخرى مثل القائمة المرتبطة المزودجة (DLL) و القائمة المرتبطة الدائرية (CLL).",
        videoURL: "https://youtu.be/Ok9JsGHm4HA?si=INZqAinytBU9EzMx",
      },
      {
        id: "eng-212-l9",
        title: "الاستدعاء الذاتي (Recursion) (1)",
        description: "شرح مفهوم الاستدعاء الذاتي للدوال (Recursion).",
        videoURL: "https://youtu.be/ulkviIBSGgM?si=HrddCW_HcF8uG852",
      },
      {
        id: "eng-212-l10",
        title: "الاستدعاء الذاتي (Recursion) (2)",
        description: "شرح هندسي لبعض الدوال التي تطبق مفهوم الاستدعاء الذاتي.",
        videoURL: "https://youtu.be/N7TrfqIKRwQ?si=5nVsFmkL88rmgugE",
      },
      {
        id: "eng-212-l11",
        title: "كيفية انشاء Stack",
        description:
          "شرح مفهوم ال Stack ومبدأ LIFO الذي يقوم عليه وكيفية الإضافة والحذف منه.",
        videoURL: "https://youtu.be/fG455l8iuHA?si=Tn_lFk6avguwWCHO",
      },
      {
        id: "eng-212-l12",
        title: "خوارزمية التحويل من infext الى podtfix",
        description:
          "شرح الخوارزمية المتبعة في تحويل التعبيرات الرياضية من صورة infix إلى صورة postfix.",
        videoURL: "https://youtu.be/o7t4Iuh1qJA?si=TxZFLr0z0SiAiAW_",
      },
      {
        id: "eng-212-l13",
        title: "تطبيق على ال stack (1)",
        description:
          "تطبيق عملي على Stack في تحويل التعبيرات الرياضية من infix إلى postfix.",
        videoURL: "https://youtu.be/7pz1nzzXfBQ?si=aa06Aa1Tq2Y687dE",
      },
      {
        id: "eng-212-l14",
        title: "تطبيق على ال stack (2)",
        description:
          "شرح تطبيقات مفهوم ال Stack في حساب قيمة التعبيرات الرياضية التي على شكل postfix، وفحص توازن الأقواس.",
        videoURL: "https://youtu.be/1iXSN6YRa4g",
      },
      {
        id: "eng-212-l15",
        title: "تطبيق على ال stack (3)",
        description:
          "استعمال ال Stack في تطبيق الدوال التي تنفذ استدعاء ذاتي (Recursion).",
        videoURL: "https://youtu.be/fVS-pHdCJ1s",
      },
      {
        id: "eng-212-l16",
        title: "كيفية أنشاء ال Queue",
        description:
          "شرح مفهوم الطابور (Queue) ومبدأ FIFO الذي يتبعه في تمثيل البيانات.",
        videoURL: "https://youtu.be/4C3U2V0ghcU?si=oznEAT7txtgS8elI",
      },
      {
        id: "eng-212-l17",
        title: "الشجرة الثنائية (Binary tree)",
        description:
          "شرح مفهوم الشجرة الثنائية (Binary tree) وكيفية ارتباط ال nodes معاً والمفاهيم المتعلقة بها.",
        videoURL: "https://youtu.be/kpNPObajBok?si=6AAHnkpivyWeHE6V",
      },
    ],
  },
  {
    id: "eng-213",
    title: "نظرية الأتمتة",
    faculty: "it",
    level: "المستوى الثالث",
    semester: "الفصل الأول",
    description: `تُعد نظرية الأتمتة (Automata Theory) الفرع النظري لعلوم الحاسوب الذي يدرس الآلات المجردة والعمليات الحسابية التي يمكنها تنفيذها، حيث تركز على كيفية حل المشكلات وفهم اللغات البرمجية والمنطقية من خلال نماذج رياضية.
تُصنف المادة أنواع الآلات بناءً على قدرتها التحليلية، بدءاً من "الآلات ذات الحالة المحدودة" (Finite Automata) وصولاً إلى "آلة تورينج" (Turing Machine)، مما يساعد في بناء المترجمات (Compilers) وفهم حدود ما يمكن للحاسوب حسابه.`,
    lectures: [
      {
        id: "eng-213-l1",
        title: "مقدمة الكورس",
        description:
          "شرح مفهوم كلمة الأتمتة و أهميتها و مجالاتها ، و تعريف بعض المصطلحات الشائعة في المادة .",
        videoURL: "https://youtu.be/eD92CfCDgIg?si=LSfa_4ETdiBu_FfF",
      },
      {
        id: "eng-213-l2",
        title: "حل لغز",
        description: "حل لغز و توضيح علاقته بال Finite Automata .",
        videoURL: "https://youtu.be/BjgK9yYDOhQ?si=B-Z7SxuJRnOdPWUT",
      },
      {
        id: "eng-213-l3",
        title: "توضيح ال مفهوم Finite Automata",
        description:
          "توضيح معنى Finite Automata و مكوناتها و توضيح مصطلح ال formal language .",
        videoURL: "https://youtu.be/EQWuRlhSTuo?si=jdNPxFUYG4nXkz3x",
      },
      {
        id: "eng-213-l4",
        title: "أنواع الFA",
        description:
          "تثبيت مصطلح FA ،،انواع ال FA -> DFA , NFA و الفرق بينهم ، و تحديد اللغة التي تمثلها ال F.",
        videoURL: "https://youtu.be/grMNGq7lLms?si=kcIAgihNTr58Ipee",
      },
      {
        id: "eng-213-l5",
        title: "الفرق بين NFA & DFA",
        description:
          "تكملة شرح امثلة و تحديد متى تكون الرسمة DFA و NFA و ما الفرق بينهم",
        videoURL: "https://youtu.be/dTqTf4KTT5M?si=fKUME48Lp5Kh1GkL",
      },
      {
        id: "eng-213-l6",
        title: "حل أسئلة DFA",
        description: "حل اسئلة على ال DFA ",
        videoURL: "https://youtu.be/C4KZvbT8fnE?si=oubNln1BKIpu5q5M",
      },
      {
        id: "eng-213-l7",
        title: "مناقشة أسئلة DFA (1)",
        description: "مناقشة سؤال المحاضرة السابقة .",
        videoURL: "https://youtu.be/WxAGa-0mZ9Y?si=jk14IEeA6mkkHNiU",
      },
      {
        id: "eng-213-l8",
        title: "مناقشة أسئلة DFA (2)",
        description: "استكمال مناقشة السؤال و أمثلة ..",
        videoURL: "https://youtu.be/ld_wv2VTeNU?si=gEXgakUS2R3Js7Gw",
      },
      {
        id: "eng-213-l9",
        title: "مناقشة أسئلة DFA (3)",
        description: "حل اسئلة مهمة ...",
        videoURL: "https://youtu.be/Mu4CPCzCgT8?si=sRNUlNv05h5YNj48",
      },
      {
        id: "eng-213-l10",
        title: "مناقشة أسئلة DFA (4)",
        description: "استكمال حل اسئلة و توضيح مصطلح ال dead stute .",
        videoURL: "https://youtu.be/t145ZlsZYVE?si=iJgMBQeJ7R0xwdBj",
      },
      {
        id: "eng-213-l11",
        title: "مناقشة أسئلة DFA (5)",
        description: "حل اسئلة على DFA و اسئلة في النهاية للطالب ",
        videoURL: "https://youtu.be/cXPqxSGjBFg?si=DdtpjnOsF97OIar5",
      },
      {
        id: "eng-213-l12",
        title: "مناقشة أسئلة DFA (6)",
        description: "استكمال اسئلة ..",
        videoURL: "https://youtu.be/QStxIFJbepM?si=rbWgaXrsTMq3wYrz",
      },
      {
        id: "eng-213-l13",
        title: "شرح NFA",
        description: "شرح NFA و توضيحها بالأمثلة ",
        videoURL: "https://youtu.be/CxK_T9_WCeo?si=dCHveaPbPJQIsf73",
      },
      {
        id: "eng-213-l14",
        title: "حل أسئلة NFA",
        description: "استكمال حل اسئلة على NFA.",
        videoURL: "https://youtu.be/IKJfdugRyHg?si=x06HAT0WMzJs8twf",
      },
      {
        id: "eng-213-l15",
        title: "التحويل من NFA الى DFA",
        description: "خوارزمية طريقة تحويل NFA الى DFA ، و ليش بنحتاج نحول ",
        videoURL: "https://youtu.be/dfa5JpuW8ek?si=YomhCNvweYJHqdBQ",
      },
      {
        id: "eng-213-l16",
        title: "حل أسئلة على التحويل من NFA الى DFA",
        description: "حل اسئلة على خوارزمية التحويل من NFAالى DFA ",
        videoURL: "https://youtu.be/j185djkMb7E?si=Sny9EUWE5l4ftZ-E",
      },
      {
        id: "eng-213-l17",
        title: "شرح NFA with Lamda transitions",
        description: "شرح NFA with Lamda transitions ، و حل أمثلة عليها .",
        videoURL: "https://youtu.be/5QwspuIyaMg?si=YkC8B9KCgjLUD5e5",
      },
      {
        id: "eng-213-l18",
        title: "التحويل من NFA with lamda transition الى DFA",
        description:
          "اسئلة على التحويل من NFA with Lamda transition الى DFA ، و اسئلة في نهاية المحاضرة للطالب .",
        videoURL: "https://youtu.be/8OuiIDhI4Kw?si=jmeTeeV1DFOOzPm_",
      },
    ],
  },
];