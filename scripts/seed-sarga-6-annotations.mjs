import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const files = [
  path.join(ROOT, "content", "sarga-6.json"),
  path.join(ROOT, "public", "content", "sarga-6.json"),
];

const annotations = {
  "sarga-6-1": {
    meaning: "जिसे मनुष्यता और सत्त्व कहते हैं,",
    english: "That which we call humanity and noble strength,",
  },
  "sarga-6-2": {
    meaning: "क्या वह केवल लड़ने में ही है?",
    english: "does it exist only in fighting?",
  },
  "sarga-6-3": {
    meaning: "क्या पौरुष केवल तलवार उठाकर,",
    english: "Is heroic courage only in lifting the sword,",
  },
  "sarga-6-4": {
    meaning: "मारने और मरने में ही है?",
    english: "in killing and being killed?",
  },
  "sarga-6-5": {
    meaning: "तो उस गुण को क्या कहें,",
    english: "Then what shall we call that quality,",
  },
  "sarga-6-6": {
    meaning: "जिससे मनुष्य मृत्यु से नहीं डरता?",
    english: "by which a person does not fear death?",
  },
  "sarga-6-7": {
    meaning: "पर फिर भी वह किसी को मारता नहीं।",
    english: "And yet he does not kill anyone.",
  },
  "sarga-6-8": {
    meaning: "वह स्वयं विश्व-हित के लिए मरता है।",
    english: "He himself dies for the good of the world.",
  },
  "sarga-6-9": {
    meaning: "कौन मनुष्य वंदनीय है? वह जो विजय के लिए,",
    english: "Which person is worthy of reverence? The one who, for victory,",
  },
  "sarga-6-10": {
    meaning: "दूसरों के प्राण हरता है?",
    english: "takes others' lives?",
  },
  "sarga-6-11": {
    meaning: "या वह जो सबकी जान बचाने के लिए,",
    english: "Or the one who, to save everyone's life,",
  },
  "sarga-6-12": {
    meaning: "अपना जीवन दे देता है?",
    english: "gives his own life?",
  },
  "sarga-6-13": {
    meaning: "आज तक विजय का कमल,",
    english: "Until today, the lotus of victory,",
  },
  "sarga-6-14": {
    meaning: "हमेशा तलवारों से ही विजेता चुनता आया है।",
    english: "has always chosen the victor through swords.",
  },
  "sarga-6-15": {
    meaning: "पर हर बार मनुष्य के प्राणों से,",
    english: "But every time, from human lives,",
  },
  "sarga-6-16": {
    meaning: "एक आह निकलती ही रही है।",
    english: "a sigh has continued to rise.",
  },
  "sarga-6-17": {
    meaning: "मनुष्य के व्याकुल अंतर की आह,",
    english: "The sigh of humanity's restless heart,",
  },
  "sarga-6-18": {
    meaning: "इस चिंता से भरी हुई है कि,",
    english: "is filled with this worry:",
  },
  "sarga-6-19": {
    meaning: "मानवता इस तरह,",
    english: "How long will humanity,",
  },
  "sarga-6-20": {
    meaning: "मनुष्य से ही डरती हुई कब तक रहेगी?",
    english: "remain afraid of humans themselves?",
  },
  "sarga-6-21": {
    meaning: "रक्त में पशुवत वेग की लहर,",
    english: "How long will the wave of animal force in the blood,",
  },
  "sarga-6-22": {
    meaning: "कब तक ऐसा कोलाहल मचाएगी?",
    english: "keep creating such uproar?",
  },
  "sarga-6-23": {
    meaning: "मनुष्यता पशुता के आगे,",
    english: "How long will humanity, before animality,",
  },
  "sarga-6-24": {
    meaning: "कब तक यूँ झुकती जाएगी?",
    english: "keep bending down like this?",
  },
  "sarga-6-25": {
    meaning: "क्या यह विष अपना उभार नहीं छोड़ेगा?",
    english: "Will this poison never cease swelling up?",
  },
  "sarga-6-26": {
    meaning: "क्या ये अंगारे कभी बुझ नहीं पाएँगे?",
    english: "Will these embers never be extinguished?",
  },
  "sarga-6-27": {
    meaning: "क्या हम हाय, इसी तरह सदा,",
    english: "Alas, will we forever remain,",
  },
  "sarga-6-28": {
    meaning: "पशु के पशु ही बने रह जाएँगे?",
    english: "beasts and only beasts in this way?",
  },
  "sarga-6-29": {
    meaning: "किसका शृंगार और किसकी सेवा?",
    english: "Whose adornment, and whose service matters?",
  },
  "sarga-6-30": {
    meaning: "जब मनुष्य का ही कल्याण नहीं है।",
    english: "When humanity itself is not safe or blessed.",
  },
  "sarga-6-31": {
    meaning: "किस विकास की कथा कही जाए,",
    english: "What story of progress can be told,",
  },
  "sarga-6-32": {
    meaning: "जब लोगों के प्राण ही सुरक्षित नहीं हैं?",
    english: "when people's lives themselves are not protected?",
  },
  "sarga-6-33": {
    meaning: "इस आश्चर्य का समाधान क्या है?",
    english: "What is the answer to this astonishment?",
  },
  "sarga-6-34": {
    meaning: "बार-बार यह क्या हो जाता है?",
    english: "What is this that keeps happening again and again?",
  },
  "sarga-6-35": {
    meaning: "जो आगे बढ़ने वाला और मार्गदर्शक होता है,",
    english: "The one who is foremost and leading,",
  },
  "sarga-6-36": {
    meaning: "वही सबसे पहले धीरज खो देता है।",
    english: "is often the first to lose patience.",
  },
  "sarga-6-37": {
    meaning: "फिर उसकी क्रोधभरी पुकार,",
    english: "Then his anger-filled cry,",
  },
  "sarga-6-38": {
    meaning: "सबको बेचैन बना देती है।",
    english: "makes everyone restless.",
  },
  "sarga-6-39": {
    meaning: "वह दुर्बल मनुष्यता को नीचे कर,",
    english: "It pushes weakened humanity down,",
  },
  "sarga-6-40": {
    meaning: "और पशुत्व को ऊपर उठा देती है।",
    english: "and lifts animality upward.",
  },
  "sarga-6-41": {
    meaning: "हाँ, मनुष्य के मन का अमृत-कुंड,",
    english: "Yes, the nectar-pool in the human heart,",
  },
  "sarga-6-42": {
    meaning: "अब भी छोटा और कुछ खाली है।",
    english: "is still small and somewhat empty.",
  },
  "sarga-6-43": {
    meaning: "अधिक जीवन अब तक साँपों के,",
    english: "Too much of life so far has passed,",
  },
  "sarga-6-44": {
    meaning: "पालन-पोषण में बीत गया है।",
    english: "in nurturing serpents.",
  },
  "sarga-6-45": {
    meaning: "ये साँप नहीं चाहते कि मनुष्य,",
    english: "These serpents do not want humans,",
  },
  "sarga-6-46": {
    meaning: "अपने भीतर का अमृत-कुंड खोले।",
    english: "to open the nectar-pool within.",
  },
  "sarga-6-47": {
    meaning: "जब सबके मुख में विष भरा हो,",
    english: "When everyone's mouth is filled with poison,",
  },
  "sarga-6-48": {
    meaning: "तब वह मधुर वाणी बोले।",
    english: "then let someone speak sweetly.",
  },
  "sarga-6-49": {
    meaning: "इस अमृत की थोड़ी-सी मात्रा भी,",
    english: "Even a little of this nectar,",
  },
  "sarga-6-50": {
    meaning: "मनुष्य का मन शीतल कर सकती है।",
    english: "can cool the human heart.",
  },
  "sarga-6-51": {
    meaning: "यदि बाहर की पीड़ा नहीं,",
    english: "If not the pain outside,",
  },
  "sarga-6-52": {
    meaning: "तो कम-से-कम भीतर की पीड़ा तो हर सकती है।",
    english: "it can at least remove the pain within.",
  },
  "sarga-6-53": {
    meaning: "लेकिन धैर्य किसमें है कि,",
    english: "But who has the patience,",
  },
  "sarga-6-54": {
    meaning: "अपने सच्चे स्वरूप का ध्यान करे?",
    english: "to meditate on their true self?",
  },
  "sarga-6-55": {
    meaning: "जब हवा में विष उड़ रहा हो,",
    english: "When poison flies in the air,",
  },
  "sarga-6-56": {
    meaning: "तब अमृत-बिंदु का पान करे।",
    english: "who will drink a drop of nectar?",
  },
  "sarga-6-57": {
    meaning: "यदि पांडव पाँच गाँव लेकर,",
    english: "If the Pandavas could have lived happily,",
  },
  "sarga-6-58": {
    meaning: "सुख से रह सकते थे,",
    english: "with only five villages,",
  },
  "sarga-6-59": {
    meaning: "तो विश्व-शांति के लिए वे,",
    english: "then for world peace,",
  },
  "sarga-6-60": {
    meaning: "कुछ और दुख क्यों नहीं सह सकते थे?",
    english: "could they not have endured a little more suffering?",
  },
  "sarga-6-61": {
    meaning: "दुर्योधन के टेढ़े वचन सुनकर,",
    english: "Hearing Duryodhana's crooked words,",
  },
  "sarga-6-62": {
    meaning: "केशव ने ऐसा क्यों नहीं कहा?",
    english: "why did Keshava not say this?",
  },
  "sarga-6-63": {
    meaning: "हम तो शांति के लिए आए थे,",
    english: "We had come for peace,",
  },
  "sarga-6-64": {
    meaning: "पर तुम जो चाहते हो, वही सही।",
    english: "but let it be as you desire.",
  },
  "sarga-6-65": {
    meaning: "तुम अग्नि को भड़काना चाहते हो,",
    english: "You wish to inflame the fire,",
  },
  "sarga-6-66": {
    meaning: "धरती का एक भाग जलाने के लिए।",
    english: "to burn a part of the earth.",
  },
  "sarga-6-67": {
    meaning: "मनुष्यता के नए फूलों को,",
    english: "You wish to pluck the fresh flowers of humanity,",
  },
  "sarga-6-68": {
    meaning: "चुन-चुनकर राख बनाने के लिए।",
    english: "one by one, and turn them to ash.",
  },
  "sarga-6-69": {
    meaning: "पर शांति-सुंदरी के सुहाग पर,",
    english: "But upon the sacred fortune of beautiful peace,",
  },
  "sarga-6-70": {
    meaning: "मैं आग नहीं लगाने दूँगा।",
    english: "I will not let fire be placed.",
  },
  "sarga-6-71": {
    meaning: "जब तक मैं जीवित हूँ, तुम्हें,",
    english: "As long as I live, I will not let you,",
  },
  "sarga-6-72": {
    meaning: "बंधुओं से युद्ध करने नहीं दूँगा।",
    english: "wage war against your own kinsmen.",
  },
  "sarga-6-73": {
    meaning: "लो, सुखी रहो; सारे पांडव,",
    english: "Very well, live happily; all the Pandavas,",
  },
  "sarga-6-74": {
    meaning: "एक बार फिर वन चले जाएँगे।",
    english: "will go to the forest once again.",
  },
  "sarga-6-75": {
    meaning: "इस बार अपना अधिकार माँगने,",
    english: "This time, to ask for their own right,",
  },
  "sarga-6-76": {
    meaning: "वे वापस नहीं आएँगे।",
    english: "they will not return.",
  },
  "sarga-6-77": {
    meaning: "धरती की शांति बचाने के लिए,",
    english: "To save the peace of the earth,",
  },
  "sarga-6-78": {
    meaning: "वे आजीवन कष्ट सहेंगे।",
    english: "they will bear suffering for life.",
  },
  "sarga-6-79": {
    meaning: "नया प्रकाश फैलाने के लिए,",
    english: "To spread a new light,",
  },
  "sarga-6-80": {
    meaning: "वे तपस्या में निरंतर लगे रहेंगे।",
    english: "they will remain absorbed in austerity.",
  },
  "sarga-6-81": {
    meaning: "सौ लाख मनुष्यों के सामने,",
    english: "Before millions of human beings,",
  },
  "sarga-6-82": {
    meaning: "दस-पाँच लोगों का सुख क्या है?",
    english: "what is the happiness of a handful of people?",
  },
  "sarga-6-83": {
    meaning: "यदि संसार की शांति बचती हो,",
    english: "If the world's peace can be saved,",
  },
  "sarga-6-84": {
    meaning: "तो वन में रहने में दुख क्या है?",
    english: "what sorrow is there in living in the forest?",
  },
  "sarga-6-85": {
    meaning: "यह सच है कि पांडु-पुत्र वन में,",
    english: "It is true that the sons of Pandu in the forest,",
  },
  "sarga-6-86": {
    meaning: "सम्राट नहीं कहलाएँगे।",
    english: "will not be called emperors.",
  },
  "sarga-6-87": {
    meaning: "पर काल के इतिहास-ग्रंथ में,",
    english: "But in the book of time's history,",
  },
  "sarga-6-88": {
    meaning: "वे उससे भी श्रेष्ठ स्थान पाएँगे।",
    english: "they will receive an even higher place.",
  },
  "sarga-6-89": {
    meaning: "आने वाला युग कृतज्ञ होकर,",
    english: "The coming age, filled with gratitude,",
  },
  "sarga-6-90": {
    meaning: "उनके सामने अपना मस्तक झुकाएगा।",
    english: "will bow its head before them.",
  },
  "sarga-6-91": {
    meaning: "नए धर्म के विधानकर्ता की प्रशंसा,",
    english: "The praise of these makers of a new moral law,",
  },
  "sarga-6-92": {
    meaning: "संसार युगों तक गाएगा।",
    english: "the world will sing for ages.",
  },
  "sarga-6-93": {
    meaning: "जगत सीखेगा कि हम युद्ध को रोक सकते हैं,",
    english: "The world will learn that we can restrain war,",
  },
  "sarga-6-94": {
    meaning: "त्यागी बनकर।",
    english: "by becoming renunciants.",
  },
  "sarga-6-95": {
    meaning: "मनुष्य मानव-समाज की दृष्टि को,",
    english: "A person can turn the eye of human society,",
  },
  "sarga-6-96": {
    meaning: "वैरागी होकर मोड़ सकता है।",
    english: "by becoming detached.",
  },
  "sarga-6-97": {
    meaning: "पर नहीं, क्या ऐसा कहने से,",
    english: "But no; by saying this,",
  },
  "sarga-6-98": {
    meaning: "विश्व का अहित नहीं होता?",
    english: "does harm not come to the world?",
  },
  "sarga-6-99": {
    meaning: "क्या अन्याय का प्रतिकार हो सकता है,",
    english: "Can injustice be resisted,",
  },
  "sarga-6-100": {
    meaning: "उसे चुपचाप सहने से?",
    english: "by silently enduring it?",
  },
  "sarga-6-101": {
    meaning: "क्या धर्म वही है जिसकी ज्योति,",
    english: "Is dharma only that flame,",
  },
  "sarga-6-102": {
    meaning: "दो-एक मनों में जलती है?",
    english: "which burns in only one or two hearts?",
  },
  "sarga-6-103": {
    meaning: "या वह भावना भी धर्म है,",
    english: "Or is that feeling also dharma,",
  },
  "sarga-6-104": {
    meaning: "जो सबके भीतर छिपकर मचलती है?",
    english: "which hidden within all, stirs restlessly?",
  },
  "sarga-6-105": {
    meaning: "जो सबकी पीड़ा के साथ,",
    english: "The one who can join, with everyone's pain,",
  },
  "sarga-6-106": {
    meaning: "अपने मन की व्यथा जोड़ सके।",
    english: "the grief of his own heart.",
  },
  "sarga-6-107": {
    meaning: "और जहाँ तक समय मुड़ सके,",
    english: "And as far as time can be turned,",
  },
  "sarga-6-108": {
    meaning: "उसे निश्चित दिशा में मोड़ सके।",
    english: "can turn it toward a chosen direction.",
  },
  "sarga-6-109": {
    meaning: "वही युगपुरुष पूरे समाज का,",
    english: "That person of the age becomes, for all society,",
  },
  "sarga-6-110": {
    meaning: "योग्य धर्मगुरु होता है।",
    english: "the rightful teacher of dharma.",
  },
  "sarga-6-111": {
    meaning: "जो सबके मन का अंधकार,",
    english: "The one who washes the darkness of every mind,",
  },
  "sarga-6-112": {
    meaning: "अपने प्रकाश से धो देता है।",
    english: "with his own light.",
  },
  "sarga-6-113": {
    meaning: "द्वापर की कथा बहुत दारुण है,",
    english: "The tale of Dvapara is very tragic,",
  },
  "sarga-6-114": {
    meaning: "लेकिन कलियुग ने क्या दिया?",
    english: "but what did Kali Yuga give?",
  },
  "sarga-6-115": {
    meaning: "मनुष्य-वध की प्रक्रिया बढ़ी,",
    english: "The process of killing humans increased,",
  },
  "sarga-6-116": {
    meaning: "और उसे कुछ अधिक आसान कर दिया।",
    english: "and was made even easier.",
  },
  "sarga-6-117": {
    meaning: "पर हाँ, जो युद्ध कभी स्वर्ग का मार्ग लगता था,",
    english: "But yes, the war once seen as a path to heaven,",
  },
  "sarga-6-118": {
    meaning: "वह आज निंदनीय-सा लगता है।",
    english: "now seems condemnable.",
  },
  "sarga-6-119": {
    meaning: "बस, इसी संवेदना के विकास का,",
    english: "Only this growth of moral sensitivity,",
  },
  "sarga-6-120": {
    meaning: "भाव मनुष्य में जागता है।",
    english: "is the feeling awakening in humanity.",
  },
  "sarga-6-121": {
    meaning: "विकास की गति कितनी धीमी है?",
    english: "How slow is the pace of progress?",
  },
  "sarga-6-122": {
    meaning: "वह कितना अदृश्य होकर चलता है?",
    english: "How invisibly it moves forward.",
  },
  "sarga-6-123": {
    meaning: "इस विशाल वृक्ष में एक पत्ता भी,",
    english: "On this vast tree, even one leaf,",
  },
  "sarga-6-124": {
    meaning: "सदियों के बाद निकलता है।",
    english: "emerges only after centuries.",
  },
  "sarga-6-125": {
    meaning: "हजारों वर्ष पहले जहाँ थे,",
    english: "Where we stood thousands of years ago,",
  },
  "sarga-6-126": {
    meaning: "लगता है हम आज भी वहीं खड़े हैं।",
    english: "it seems we still stand there today.",
  },
  "sarga-6-127": {
    meaning: "यह गर्व व्यर्थ है कि उन गुफावासियों से,",
    english: "It is vain pride to think that compared with cave-dwellers,",
  },
  "sarga-6-128": {
    meaning: "हम बहुत बड़े हो गए हैं।",
    english: "we have become much greater.",
  },
  "sarga-6-129": {
    meaning: "चाहे अनगढ़ पत्थर से लड़ो,",
    english: "Whether one fights with a rough stone,",
  },
  "sarga-6-130": {
    meaning: "या नाखूनों और दाँतों से किटकिटाकर लड़ो,",
    english: "or with gnashing nails and teeth,",
  },
  "sarga-6-131": {
    meaning: "या भालू जैसे रोमों से भरे,",
    english: "or with bear-like, hair-covered,",
  },
  "sarga-6-132": {
    meaning: "कठोर हाथों से लड़ो।",
    english: "hardened hands.",
  },
  "sarga-6-133": {
    meaning: "या विमान पर चढ़कर कोमल मुट्ठियों से,",
    english: "Or climbing into aircraft, with soft fists,",
  },
  "sarga-6-134": {
    meaning: "गोलों की वर्षा करो।",
    english: "rain down shells.",
  },
  "sarga-6-135": {
    meaning: "जो भी लक्ष्य में आ जाए,",
    english: "Whoever comes within the target,",
  },
  "sarga-6-136": {
    meaning: "निर्दय होकर सबके प्राण ले लो।",
    english: "cruelly take everyone's life.",
  },
  "sarga-6-137": {
    meaning: "ये सब तो केवल साधनों के भेद हैं,",
    english: "These are only differences of means,",
  },
  "sarga-6-138": {
    meaning: "भावों में नया तत्व क्या आया है?",
    english: "what new element has entered the feelings?",
  },
  "sarga-6-139": {
    meaning: "क्या प्रेम की आँख अधिक खुली है?",
    english: "Have the eyes of love opened wider?",
  },
  "sarga-6-140": {
    meaning: "क्या भीतर दया कुछ बढ़ी है?",
    english: "Has compassion within grown at all?",
  },
  "sarga-6-141": {
    meaning: "पूँछ झड़ गई, रोम भी झड़ गए,",
    english: "The tail has fallen away, the hair too has fallen,",
  },
  "sarga-6-142": {
    meaning: "पर पशुता का झरना अभी बाकी है।",
    english: "but the shedding of animality still remains.",
  },
  "sarga-6-143": {
    meaning: "बाहर से शरीर तो सँवर चुका है,",
    english: "Outwardly, the body has been refined,",
  },
  "sarga-6-144": {
    meaning: "मन का सँवरना अभी बाकी है।",
    english: "but the mind still remains to be refined.",
  },
  "sarga-6-145": {
    meaning: "देवत्व कम है, पशुता बहुत अधिक है,",
    english: "Divinity is little; animality is immense,",
  },
  "sarga-6-146": {
    meaning: "अंधकार बहुत है, प्रकाश सीमित है।",
    english: "darkness is abundant, light is limited.",
  },
  "sarga-6-147": {
    meaning: "द्वापर के मन पर भी फैली हुई,",
    english: "Spread over the mind of Dvapara too,",
  },
  "sarga-6-148": {
    meaning: "आज जैसी यही द्विधा थी।",
    english: "was this same duality that exists today.",
  },
  "sarga-6-149": {
    meaning: "बस इसी तरह, तब भी मनुष्य ऊपर,",
    english: "In the same way, even then, humans longed,",
  },
  "sarga-6-150": {
    meaning: "उठने के लिए व्याकुल होता था।",
    english: "to rise upward.",
  },
  "sarga-6-151": {
    meaning: "पर हर कदम पर वासना के जाल में,",
    english: "But at every step, in the net of desire,",
  },
  "sarga-6-152": {
    meaning: "बार-बार उलझकर रह जाता था।",
    english: "he kept getting entangled.",
  },
  "sarga-6-153": {
    meaning: "और जिस प्रकार हम आज बेल-बूटों के बीच,",
    english: "And just as today, among ornate decorations,",
  },
  "sarga-6-154": {
    meaning: "युद्ध को सजाकर,",
    english: "we embellish war,",
  },
  "sarga-6-155": {
    meaning: "रण को सुंदर रूप दे देते हैं,",
    english: "and give battle a beautiful form,",
  },
  "sarga-6-156": {
    meaning: "क्रांतिकारी उमंगों से भरकर।",
    english: "filling it with revolutionary excitement.",
  },
  "sarga-6-157": {
    meaning: "हम कहते हैं कि अन्याय के विरुद्ध,",
    english: "We say that against injustice,",
  },
  "sarga-6-158": {
    meaning: "जो युद्ध जगत में होता है,",
    english: "the war that takes place in the world,",
  },
  "sarga-6-159": {
    meaning: "वह विष का भंडार नहीं, अमृत का,",
    english: "is not a store of poison, but of nectar,",
  },
  "sarga-6-160": {
    meaning: "बहुत सुंदर स्रोत है।",
    english: "a very lovely spring.",
  },
  "sarga-6-161": {
    meaning: "बस इसी तरह कहता होगा,",
    english: "In the same way, perhaps said,",
  },
  "sarga-6-162": {
    meaning: "द्विधा से संचालित द्वापर का मनुष्य,",
    english: "the person of Dvapara ruled by duality,",
  },
  "sarga-6-163": {
    meaning: "क्रूरताएँ भले ही हों, लेकिन,",
    english: "there may be cruelties, yet,",
  },
  "sarga-6-164": {
    meaning: "युद्ध महान मुक्ति का द्वार है।",
    english: "war is the gateway to great liberation.",
  },
  "sarga-6-165": {
    meaning: "सचमुच, उन्नति के मार्ग पर,",
    english: "Indeed, on the path of progress,",
  },
  "sarga-6-166": {
    meaning: "चलता हुआ चतुर और जाग्रत मनुष्य,",
    english: "the clever, awakened human being,",
  },
  "sarga-6-167": {
    meaning: "जिसे आज क्रांति कहता है,",
    english: "calls it revolution today,",
  },
  "sarga-6-168": {
    meaning: "उसे पहले धर्मयुद्ध कहता था।",
    english: "what he earlier called a righteous war.",
  },
  "sarga-6-169": {
    meaning: "इस प्रकार धर्मयुद्ध छिड़ गया,",
    english: "Thus the righteous war began,",
  },
  "sarga-6-170": {
    meaning: "स्वर्ग तक जाने की सीढ़ियाँ लग गईं।",
    english: "and steps seemed set toward heaven.",
  },
  "sarga-6-171": {
    meaning: "सद्गति चाहने वाले वीर मनुष्य तलवार से,",
    english: "Brave men seeking salvation, to the sword,",
  },
  "sarga-6-172": {
    meaning: "लिपटकर प्राण गँवाने लगे।",
    english: "clung and began to lose their lives.",
  },
  "sarga-6-173": {
    meaning: "घने अंधकार का जाल छा गया,",
    english: "A dense web of darkness spread,",
  },
  "sarga-6-174": {
    meaning: "मनुष्य के ज्ञान-नेत्र बंद हो गए।",
    english: "and humanity's eyes of wisdom closed.",
  },
  "sarga-6-175": {
    meaning: "द्विधा की वाणी पुकार उठी,",
    english: "The voice of duality cried out,",
  },
  "sarga-6-176": {
    meaning: "जय धर्मक्षेत्र! जय कुरुक्षेत्र!",
    english: "Victory to Dharmakshetra! Victory to Kurukshetra!",
  },
  "sarga-6-177": {
    meaning: "हाँ, धर्मक्षेत्र इसलिए कि बंधन पर,",
    english: "Yes, a field of dharma because over bondage,",
  },
  "sarga-6-178": {
    meaning: "अबंधन की जीत हुई।",
    english: "freedom won.",
  },
  "sarga-6-179": {
    meaning: "कर्तव्य-ज्ञान पीछे छूट गया,",
    english: "The knowledge of duty was left behind,",
  },
  "sarga-6-180": {
    meaning: "और आगे मानव-प्रेम आ गया।",
    english: "and human love came to the front.",
  },
  "sarga-6-181": {
    meaning: "अत्यधिक प्रेम में केशव ने,",
    english: "In an excess of love, Keshava,",
  },
  "sarga-6-182": {
    meaning: "अपनी प्रतिज्ञा भूलकर चक्र उठा लिया।",
    english: "forgot his vow and aimed the discus.",
  },
  "sarga-6-183": {
    meaning: "भीष्म ने शत्रु को भी बड़े प्रेम से,",
    english: "Bhishma, with deep love even for his enemy,",
  },
  "sarga-6-184": {
    meaning: "अपना जीवन दान कर दिया।",
    english: "offered his own life.",
  },
  "sarga-6-185": {
    meaning: "जैसे पर्वत का ऊँचा गौरव-आधार,",
    english: "As the lofty support of a mountain's pride,",
  },
  "sarga-6-186": {
    meaning: "उसका विशाल शिखर गिर जाए,",
    english: "its vast peak, might fall,",
  },
  "sarga-6-187": {
    meaning: "या जैसे आकाश को सूना कर,",
    english: "or as, emptying the sky,",
  },
  "sarga-6-188": {
    meaning: "चमकता सूर्य टूटकर गिर पड़े,",
    english: "the shining sun might break and fall,",
  },
  "sarga-6-189": {
    meaning: "कौरव-दल का तेज हरकर,",
    english: "robbing the Kaurava army of its radiance,",
  },
  "sarga-6-190": {
    meaning: "वैसे ही प्रकाश-स्वरूप भीष्म गिरे।",
    english: "so fell Bhishma, clothed in light.",
  },
  "sarga-6-191": {
    meaning: "कुरुकुल का चमकता ताज गिर पड़ा,",
    english: "The shining crown of the Kuru house fell,",
  },
  "sarga-6-192": {
    meaning: "जैसे थककर बूढ़ा बाज गिरता है।",
    english: "as an old hawk falls when exhausted.",
  },
  "sarga-6-193": {
    meaning: "भूमि पर पड़े पितामह को देखकर,",
    english: "Seeing the grandsire lying on the earth,",
  },
  "sarga-6-194": {
    meaning: "युद्धभूमि में महान शोक छा गया।",
    english: "a great grief spread across the battlefield.",
  },
  "sarga-6-195": {
    meaning: "केवल कुरुपति ही धैर्य नहीं खो रहा था,",
    english: "It was not only the Kuru king who lost composure,",
  },
  "sarga-6-196": {
    meaning: "अर्जुन का मन भी रो रहा था।",
    english: "Arjuna's heart too was weeping.",
  },
  "sarga-6-197": {
    meaning: "रोने-धोने के बाद नया तेज चमका,",
    english: "After the weeping, a new brilliance flashed,",
  },
  "sarga-6-198": {
    meaning: "दूसरा सूर्य सिर पर चमक उठा।",
    english: "a second sun shone overhead.",
  },
  "sarga-6-199": {
    meaning: "कौरवों का दुर्जेय तेज उठ खड़ा हुआ,",
    english: "The unconquerable radiance of the Kauravas rose,",
  },
  "sarga-6-200": {
    meaning: "युद्ध करने के लिए राधेय उठा।",
    english: "Radheya rose to wage war.",
  },
  "sarga-6-201": {
    meaning: "सबके रक्षक गुरु आर्य बने,",
    english: "The revered teacher became protector of all,",
  },
  "sarga-6-202": {
    meaning: "आचार्य सेना-नायक हो गए।",
    english: "the acharya became commander of the army.",
  },
  "sarga-6-203": {
    meaning: "पर राधेय, जिनके कारण,",
    english: "But Radheya, because of whom,",
  },
  "sarga-6-204": {
    meaning: "अब तक मौन धारण किए हुए था,",
    english: "he had remained silent until then,",
  },
  "sarga-6-205": {
    meaning: "उनका शुभ आशीर्वाद पाने के लिए,",
    english: "to receive his auspicious blessing,",
  },
  "sarga-6-206": {
    meaning: "और अपना सच्चा धर्म निभाने के लिए,",
    english: "and to fulfill his true duty,",
  },
  "sarga-6-207": {
    meaning: "वह बाणों की शय्या की ओर चला,",
    english: "walked toward the bed of arrows,",
  },
  "sarga-6-208": {
    meaning: "हर कदम पर विनय से भरा हुआ चला।",
    english: "each step filled with humility.",
  },
  "sarga-6-209": {
    meaning: "भीष्मदेव के दोनों चरण छूकर,",
    english: "Touching both feet of Bhishma,",
  },
  "sarga-6-210": {
    meaning: "राधेय ने सरल वाणी में कहा,",
    english: "Radheya spoke in a simple voice,",
  },
  "sarga-6-211": {
    meaning: "हे तात! आपका प्रोत्साहन,",
    english: "O father-like elder, your encouragement,",
  },
  "sarga-6-212": {
    meaning: "जो कलंकित जन पा नहीं सका,",
    english: "which this disgraced man could not receive,",
  },
  "sarga-6-213": {
    meaning: "वही आज आपके सामने आया है,",
    english: "that same person has come before you today,",
  },
  "sarga-6-214": {
    meaning: "और आँसुओं का उपहार लाया है।",
    english: "bringing the gift of tears.",
  },
  "sarga-6-215": {
    meaning: "यदि आज्ञा हो तो अब धनुष उठाऊँ,",
    english: "If you permit, I shall now take up the bow,",
  },
  "sarga-6-216": {
    meaning: "रण में जाकर कुछ काम करूँ।",
    english: "and go do something in battle.",
  },
  "sarga-6-217": {
    meaning: "देखूँ, कौन-सा प्रलय उतर आया है,",
    english: "Let me see what destruction has descended,",
  },
  "sarga-6-218": {
    meaning: "जिससे धरती डगमगा रही है।",
    english: "that the earth itself is trembling.",
  },
  "sarga-6-219": {
    meaning: "मैं कुरुपति को विजय दिलाऊँ,",
    english: "May I bring victory to the Kuru king,",
  },
  "sarga-6-220": {
    meaning: "या स्वयं वीरगति पाऊँ।",
    english: "or attain a hero's death myself.",
  },
  "sarga-6-221": {
    meaning: "अपने सेवक के दोष क्षमा कीजिए,",
    english: "Forgive the faults of your servant,",
  },
  "sarga-6-222": {
    meaning: "मेरे सिर पर वर देने वाला हाथ रखिए।",
    english: "place your blessing hand upon my head.",
  },
  "sarga-6-223": {
    meaning: "यह अंतिम मिलन की घड़ी है,",
    english: "This is the hour of our final meeting,",
  },
  "sarga-6-224": {
    meaning: "मेरा मन बहुत अकेला लग रहा है।",
    english: "my heart feels very alone.",
  },
  "sarga-6-225": {
    meaning: "मैं मद और मोह छोड़ने आया हूँ,",
    english: "I have come to abandon pride and attachment,",
  },
  "sarga-6-226": {
    meaning: "आपके चरणों की धूल माँगने आया हूँ।",
    english: "I have come to ask for the dust of your feet.",
  },
  "sarga-6-227": {
    meaning: "भीष्म ने अपने भीगे नयन खोले,",
    english: "Bhishma opened his tearful eyes,",
  },
  "sarga-6-228": {
    meaning: "और कर्ण की भीगी आँखें देखीं।",
    english: "and saw Karna's moist eyes.",
  },
  "sarga-6-229": {
    meaning: "उसे खींचकर पास लाए,",
    english: "He drew him close,",
  },
  "sarga-6-230": {
    meaning: "और उसे अपनी छाती से लगा लिया।",
    english: "and pressed him to his chest.",
  },
  "sarga-6-231": {
    meaning: "वे बोले, अब कौन-सा विशेष तत्व बचा है?",
    english: "He said, what special essence remains now?",
  },
  "sarga-6-232": {
    meaning: "बेटा, अब तो आँसू ही शेष बचे हैं।",
    english: "Son, only tears remain.",
  },
  "sarga-6-233": {
    meaning: "मैं हर क्षण रोकता ही रहा,",
    english: "I kept trying to stop it at every moment,",
  },
  "sarga-6-234": {
    meaning: "पर हाय, यह हठी दुर्योधन,",
    english: "but alas, this stubborn Duryodhana,",
  },
  "sarga-6-235": {
    meaning: "विवेक का अंकुश सह न सका,",
    english: "could not bear the restraint of wisdom,",
  },
  "sarga-6-236": {
    meaning: "मेरे कहने में रह न सका।",
    english: "could not remain under my counsel.",
  },
  "sarga-6-237": {
    meaning: "क्रोध से अंधा, भ्रमित और मद में डूबा,",
    english: "Blinded by anger, confused, and lost in pride,",
  },
  "sarga-6-238": {
    meaning: "वह घोर संग्राम ले ही आया।",
    english: "he has brought about this terrible war.",
  },
  "sarga-6-239": {
    meaning: "अब कहो, आज क्या हो रहा है?",
    english: "Now tell me, what is happening today?",
  },
  "sarga-6-240": {
    meaning: "किसका समाज आज रो रहा है?",
    english: "Whose society is weeping today?",
  },
  "sarga-6-241": {
    meaning: "किसका गौरव और किसका शृंगार,",
    english: "Whose glory, whose adornment,",
  },
  "sarga-6-242": {
    meaning: "युद्ध-पंक्तियों के आर-पार जल रहा है?",
    english: "is burning across the battle lines?",
  },
  "sarga-6-243": {
    meaning: "किसका वन और बाग उजड़ रहा है?",
    english: "Whose forests and gardens are being ruined?",
  },
  "sarga-6-244": {
    meaning: "यह कौन मार रहा है और मर रहा है?",
    english: "Who is killing, and who is dying here?",
  },
  "sarga-6-245": {
    meaning: "द्वेष की दावानल फूटती है,",
    english: "The wildfire of hatred bursts forth,",
  },
  "sarga-6-246": {
    meaning: "और पूरा समाज नरक बन जाता है।",
    english: "and the whole society turns into hell.",
  },
  "sarga-6-247": {
    meaning: "सबका वैभव, सबका सौभाग्य,",
    english: "Everyone's prosperity, everyone's sacred fortune,",
  },
  "sarga-6-248": {
    meaning: "यह कुटिल आग निगल जाती है।",
    english: "this crooked fire swallows it all.",
  },
  "sarga-6-249": {
    meaning: "जब भाई ही विरोधी हो जाते हैं,",
    english: "When brothers themselves become enemies,",
  },
  "sarga-6-250": {
    meaning: "तो पूरे कुल के लोग रोते हैं।",
    english: "the entire family has to weep.",
  },
  "sarga-6-251": {
    meaning: "इसलिए, पुत्र! अब भी रुककर,",
    english: "Therefore, son, even now pause,",
  },
  "sarga-6-252": {
    meaning: "मन में सोचो कि यह महासमर,",
    english: "and think in your heart: this great war,",
  },
  "sarga-6-253": {
    meaning: "तुम्हें किस ओर ले जाएगा?",
    english: "where will it take you?",
  },
  "sarga-6-254": {
    meaning: "कौन-सा दुर्लभ फल दे पाएगा?",
    english: "What rare fruit will it be able to give?",
  },
  "sarga-6-255": {
    meaning: "मानवता ही मिट जाएगी,",
    english: "If humanity itself is erased,",
  },
  "sarga-6-256": {
    meaning: "फिर विजय की सिद्धि क्या लाएगी?",
    english: "what will the achievement of victory bring?",
  },
  "sarga-6-257": {
    meaning: "हे मेरे मान रखने वाले प्रतिद्वंद्वी!",
    english: "O my honorable rival!",
  },
  "sarga-6-258": {
    meaning: "निष्कपट, पवित्र, गुणवान और ज्ञानी!",
    english: "Sincere, pure, virtuous, and wise!",
  },
  "sarga-6-259": {
    meaning: "मेरे मुख से कठोर वचन सुनकर,",
    english: "Hearing harsh words from my mouth,",
  },
  "sarga-6-260": {
    meaning: "तुम व्यर्थ ही अपना मन मैला करते थे।",
    english: "you needlessly darkened your heart.",
  },
  "sarga-6-261": {
    meaning: "मैं केवल निंदा करने वाला नहीं था,",
    english: "I was not merely one who criticized you,",
  },
  "sarga-6-262": {
    meaning: "मन-ही-मन तुम्हारी बहुत प्रशंसा करता था।",
    english: "in my heart I admired you deeply.",
  },
  "sarga-6-263": {
    meaning: "वह भी इसलिए कि दुर्योधन,",
    english: "And that too because Duryodhana,",
  },
  "sarga-6-264": {
    meaning: "सदा तुमसे आश्वासन पाकर,",
    english: "always receiving assurance from you,",
  },
  "sarga-6-265": {
    meaning: "मुझे न मानकर चलता था,",
    english: "went on without listening to me,",
  },
  "sarga-6-266": {
    meaning: "और हर कदम पर रूठकर मचलता था।",
    english: "and at every step sulked and insisted.",
  },
  "sarga-6-267": {
    meaning: "नहीं तो, पुत्र! तुमसे बढ़कर,",
    english: "Otherwise, son, above you,",
  },
  "sarga-6-268": {
    meaning: "मैं किसे श्रेष्ठ वीर मानता?",
    english: "whom would I consider the finest hero?",
  },
  "sarga-6-269": {
    meaning: "अर्जुन के समान रथी और धनुर्धारी,",
    english: "A chariot-warrior and archer like Arjuna,",
  },
  "sarga-6-270": {
    meaning: "केशव के समान महान रणवीर,",
    english: "a mighty fighter like Keshava,",
  },
  "sarga-6-271": {
    meaning: "धर्म को जानने वाले, धीर और पवित्र चरित्र के,",
    english: "knower of dharma, patient, and pure in character,",
  },
  "sarga-6-272": {
    meaning: "दीनों और दलितों के उचित मित्र,",
    english: "rightful friend of the poor and the oppressed,",
  },
  "sarga-6-273": {
    meaning: "जैसे अर्जुन को कृष्ण मिले,",
    english: "as Arjuna received Krishna,",
  },
  "sarga-6-274": {
    meaning: "वैसे ही तुम कौरवों को मिले।",
    english: "so the Kauravas received you.",
  },
  "sarga-6-275": {
    meaning: "पर हाय, क्या वीरता का सहारा,",
    english: "But alas, will the support of heroism,",
  },
  "sarga-6-276": {
    meaning: "केवल धनुष ही रह जाएगा?",
    english: "remain only the bow?",
  },
  "sarga-6-277": {
    meaning: "या शांति के लिए शीतल और पवित्र श्रम,",
    english: "Or for peace, calm and pure effort,",
  },
  "sarga-6-278": {
    meaning: "महान वीर भी कभी करेंगे?",
    english: "will great heroes also someday make?",
  },
  "sarga-6-279": {
    meaning: "क्या वे कभी ज्वाला बुझाएँगे?",
    english: "Will they ever extinguish the flame?",
  },
  "sarga-6-280": {
    meaning: "या लड़कर ही मर जाएँगे?",
    english: "Or will they die only by fighting?",
  },
  "sarga-6-281": {
    meaning: "यदि सुयोधन पर तुम्हारा वश चल सके,",
    english: "If you can influence Suyodhana,",
  },
  "sarga-6-282": {
    meaning: "बेटा! संसार में नया यश पा लो।",
    english: "son, win a new glory in the world.",
  },
  "sarga-6-283": {
    meaning: "लड़ने से बड़ा यह काम करो,",
    english: "Do this work greater than fighting,",
  },
  "sarga-6-284": {
    meaning: "आज ही संग्राम बंद करा दो।",
    english: "stop the war today itself.",
  },
  "sarga-6-285": {
    meaning: "यदि तुम इसे रोक पाओगे,",
    english: "If you are able to stop it,",
  },
  "sarga-6-286": {
    meaning: "तो जगत के रक्षक कहलाओगे।",
    english: "you will be called savior of the world.",
  },
  "sarga-6-287": {
    meaning: "जाओ, वीर दुर्योधन से कहो,",
    english: "Go, tell brave Duryodhana,",
  },
  "sarga-6-288": {
    meaning: "मन से द्वेष का विष दूर कर दे।",
    english: "to remove the poison of hatred from his heart.",
  },
  "sarga-6-289": {
    meaning: "वह पांडवों से जाकर मिल जाए,",
    english: "Let him go and reconcile with the Pandavas,",
  },
  "sarga-6-290": {
    meaning: "और मुझे शांति पाकर मरने दे।",
    english: "and let me die in peace.",
  },
  "sarga-6-291": {
    meaning: "मेरा अंतिम बलिदान यही रहे,",
    english: "Let this be my final sacrifice,",
  },
  "sarga-6-292": {
    meaning: "कि सारी संतान सुख से रहे।",
    english: "that all the children may live happily.",
  },
  "sarga-6-293": {
    meaning: "हे पुरुष-सिंह! कर्ण ने कहा,",
    english: "O lion among men, Karna said,",
  },
  "sarga-6-294": {
    meaning: "अब और कौन-सा मार्ग शेष है?",
    english: "what other path now remains?",
  },
  "sarga-6-295": {
    meaning: "संकट में पड़ा जीवन मानो,",
    english: "Life in danger is like,",
  },
  "sarga-6-296": {
    meaning: "समुद्र के बीच फँसा महान जहाज है।",
    english: "a great ship caught in the middle of the sea.",
  },
  "sarga-6-297": {
    meaning: "इस पार शांति है, उस पार विजय,",
    english: "On this side is peace, on that side victory,",
  },
  "sarga-6-298": {
    meaning: "अब नया निश्चय भला क्या हो?",
    english: "what new decision can now be made?",
  },
  "sarga-6-299": {
    meaning: "विजय मिले बिना विश्राम नहीं,",
    english: "There can be no rest without victory,",
  },
  "sarga-6-300": {
    meaning: "इस समय संधि का नाम भी नहीं।",
    english: "at this moment, even the word treaty has no place.",
  },
  "sarga-6-301": {
    meaning: "मुझे आशीर्वाद दीजिए कि युद्ध जीतकर,",
    english: "Bless me so that, winning the war,",
  },
  "sarga-6-302": {
    meaning: "मैं फिर ये पवित्र चरण देख सकूँ।",
    english: "I may see these noble feet again.",
  },
  "sarga-6-303": {
    meaning: "मैं इस जहाज को समुद्र से पार करा सकूँ,",
    english: "May I carry this ship across the sea,",
  },
  "sarga-6-304": {
    meaning: "और सबको सुरक्षित पार उतार सकूँ।",
    english: "and bring everyone safely to the other shore.",
  },
  "sarga-6-305": {
    meaning: "कल तक शांति का मार्ग आसान था,",
    english: "Until yesterday, the path of peace was easy,",
  },
  "sarga-6-306": {
    meaning: "पर आज वह बहुत कठिन हो गया है।",
    english: "but today it has become extremely difficult.",
  },
  "sarga-6-307": {
    meaning: "अब उसे देखकर ललचाने से क्या लाभ?",
    english: "What use is longing for it now?",
  },
  "sarga-6-308": {
    meaning: "अब पीछे पाँव हटाने से क्या लाभ?",
    english: "What use is pulling the foot back now?",
  },
  "sarga-6-309": {
    meaning: "हम विजय को लक्ष्य बनाकर चलेंगे,",
    english: "We shall move with victory as our goal,",
  },
  "sarga-6-310": {
    meaning: "और शत्रु-दल का गर्व कुचल देंगे।",
    english: "and crush the pride of the enemy army.",
  },
  "sarga-6-311": {
    meaning: "हे महाभाग! कुछ दिन और जीवित रहकर,",
    english: "O blessed one, live a few more days,",
  },
  "sarga-6-312": {
    meaning: "इस महासमर को और देखिए।",
    english: "and witness this great war further.",
  },
  "sarga-6-313": {
    meaning: "मुझे भी प्रलय मचाना है,",
    english: "I too must unleash destruction,",
  },
  "sarga-6-314": {
    meaning: "और कुछ नया युद्ध-कौशल दिखाना है।",
    english: "and show some new play of battle.",
  },
  "sarga-6-315": {
    meaning: "इस समय मुझसे मुख मत मोड़िए,",
    english: "Do not turn your face away from me now,",
  },
  "sarga-6-316": {
    meaning: "मेरी हिम्मत मत तोड़िए।",
    english: "do not break my courage.",
  },
  "sarga-6-317": {
    meaning: "मुझे अपने व्रत का पालन करने दीजिए,",
    english: "Let me fulfill my own vow,",
  },
  "sarga-6-318": {
    meaning: "और अपने महान प्रतिद्वंद्वी से युद्ध करने दीजिए।",
    english: "and fight my great opponent.",
  },
  "sarga-6-319": {
    meaning: "मुझे अर्जुन का शीश उड़ाना है,",
    english: "I must strike off Arjuna's head,",
  },
  "sarga-6-320": {
    meaning: "और कुरुपति का हृदय ठंडा करना है।",
    english: "and bring relief to the Kuru king's heart.",
  },
  "sarga-6-321": {
    meaning: "मुझे अमर करने के लिए, हे पिता,",
    english: "To make me immortal, O father,",
  },
  "sarga-6-322": {
    meaning: "युद्ध मुझे बुला रहा है।",
    english: "the battlefield is calling me.",
  },
  "sarga-6-323": {
    meaning: "गांगेय निराशा से भरकर,",
    english: "Ganga's son, filled with despair,",
  },
  "sarga-6-324": {
    meaning: "बोले, तब हे श्रेष्ठ नरवीर!",
    english: "said, then, O finest hero among men,",
  },
  "sarga-6-325": {
    meaning: "जो तुम्हें अच्छा लगे, वही काम करो,",
    english: "do what seems right to you,",
  },
  "sarga-6-326": {
    meaning: "जाओ, रण में लड़कर नाम कमाओ।",
    english: "go, fight in battle and win renown.",
  },
  "sarga-6-327": {
    meaning: "भगवान शीघ्र ही विष शांत करें,",
    english: "May God quickly calm the poison,",
  },
  "sarga-6-328": {
    meaning: "और अपनी इच्छाएँ पूरी करें।",
    english: "and fulfill His own will.",
  },
  "sarga-6-329": {
    meaning: "भीष्म के चरणों को प्रणाम करके,",
    english: "After bowing at Bhishma's feet,",
  },
  "sarga-6-330": {
    meaning: "ऊपर सूर्य को नमन करके,",
    english: "and saluting the sun above,",
  },
  "sarga-6-331": {
    meaning: "वज्र-धनुषधारी देवता जैसा,",
    english: "like a god bearing a thunderbolt bow,",
  },
  "sarga-6-332": {
    meaning: "निर्भय मार्ग पर चलता सिंह जैसा,",
    english: "like a fearless lion moving on its path,",
  },
  "sarga-6-333": {
    meaning: "राधेय युद्ध की ओर चला,",
    english: "Radheya moved toward the war,",
  },
  "sarga-6-334": {
    meaning: "और घोर गर्जना करता चला।",
    english: "roaring terribly as he went.",
  },
  "sarga-6-335": {
    meaning: "नया प्रसन्न प्रकाश पाकर,",
    english: "Receiving a new cheerful radiance,",
  },
  "sarga-6-336": {
    meaning: "कौरव-सेना का शोक दूर हो गया।",
    english: "the grief of the Kaurava army disappeared.",
  },
  "sarga-6-337": {
    meaning: "आशा की नई तरंग उठी,",
    english: "A fresh wave of hope arose,",
  },
  "sarga-6-338": {
    meaning: "हर व्यक्ति में नया उत्साह जागा।",
    english: "new enthusiasm rose in every person.",
  },
  "sarga-6-339": {
    meaning: "मानो बाणों की शय्या छोड़कर,",
    english: "As if, leaving the bed of arrows,",
  },
  "sarga-6-340": {
    meaning: "स्वयं गंगानंदन लौट आए हों।",
    english: "Ganga's son himself had returned.",
  },
  "sarga-6-341": {
    meaning: "पूरी सेना हुंकार उठी,",
    english: "The entire army roared,",
  },
  "sarga-6-342": {
    meaning: "और 'जय-जय राधेय!' पुकार उठी।",
    english: "and cried, 'Victory to Radheya!'",
  },
  "sarga-6-343": {
    meaning: "उल्लास मुक्त होकर फैल उठा,",
    english: "Joy broke free and spread,",
  },
  "sarga-6-344": {
    meaning: "रण-सागर घोष से गूँज उठा।",
    english: "the ocean of war thundered with sound.",
  },
  "sarga-6-345": {
    meaning: "भीषण युद्ध-नगाड़े बज उठे,",
    english: "The dreadful war-drums sounded,",
  },
  "sarga-6-346": {
    meaning: "और गहरा संग्राम शुरू हो गया।",
    english: "and the deep battle began.",
  },
  "sarga-6-347": {
    meaning: "समुद्र जैसा गरजता और घोर क्षुब्ध,",
    english: "Roaring like the sea, fiercely agitated,",
  },
  "sarga-6-348": {
    meaning: "भयानक दंडधर जैसा कठोर,",
    english: "hard like a fearsome wielder of punishment,",
  },
  "sarga-6-349": {
    meaning: "क्रोधित कर्ण शत्रु-दल पर टूट पड़ा,",
    english: "an angry Karna fell upon the enemy army,",
  },
  "sarga-6-350": {
    meaning: "और धनुष पर चढ़कर महान मृत्यु छूट पड़ी।",
    english: "and great death sprang loose from his bow.",
  },
  "sarga-6-351": {
    meaning: "पहले ही प्रहार में ऐसी आग चली,",
    english: "Such fire burst forth in the very first attack,",
  },
  "sarga-6-352": {
    meaning: "कि पांडवों की सेना भागने लगी।",
    english: "that the Pandava army began to flee.",
  },
  "sarga-6-353": {
    meaning: "भयानक आँधी का झोंका चला,",
    english: "A terrible storm-gust blew,",
  },
  "sarga-6-354": {
    meaning: "जो डालों को तोड़-मरोड़ गया।",
    english: "breaking and twisting the branches.",
  },
  "sarga-6-355": {
    meaning: "पेड़ों की जड़ें टूटने लगीं,",
    english: "The roots of trees began to break,",
  },
  "sarga-6-356": {
    meaning: "सबकी हिम्मत छूटने लगी।",
    english: "everyone's courage began to fail.",
  },
  "sarga-6-357": {
    meaning: "ऐसा प्रचंड तूफान उठा,",
    english: "Such a fierce storm arose,",
  },
  "sarga-6-358": {
    meaning: "कि पर्वत का भी प्राण हिल उठा।",
    english: "that even a mountain's life seemed shaken.",
  },
  "sarga-6-359": {
    meaning: "जैसे बाढ़ का अजेय प्रहार पाकर,",
    english: "As when, struck by an unconquerable flood,",
  },
  "sarga-6-360": {
    meaning: "नदी का किनारा काँप उठता है।",
    english: "a riverbank begins to tremble.",
  },
  "sarga-6-361": {
    meaning: "या जैसे चक्रवात में बिखरकर,",
    english: "Or as, scattered in a cyclone,",
  },
  "sarga-6-362": {
    meaning: "टूटे पत्ते उड़ने लगते हैं।",
    english: "torn leaves begin to fly.",
  },
  "sarga-6-363": {
    meaning: "वैसे ही शत्रु-दल थर-थर काँप उठा,",
    english: "So the enemy army rose trembling violently,",
  },
  "sarga-6-364": {
    meaning: "और बड़ी भीषण हलचल मच गई।",
    english: "and a terrible commotion broke out.",
  },
  "sarga-6-365": {
    meaning: "सभी रथी व्याकुल होकर कराह रहे थे,",
    english: "All the chariot-warriors were distressed and wailing,",
  },
  "sarga-6-366": {
    meaning: "वे कोलाहल को रोक नहीं पा रहे थे।",
    english: "unable to restrain the uproar.",
  },
  "sarga-6-367": {
    meaning: "सेना को इस तरह बेहाल देखकर,",
    english: "Seeing the army so helpless,",
  },
  "sarga-6-368": {
    meaning: "और सामने उपस्थित मृत्यु-जैसे संकट को देखकर,",
    english: "and seeing death-like danger standing before them,",
  },
  "sarga-6-369": {
    meaning: "मधुसूदन अधीर होकर गरजे,",
    english: "Madhusudana roared impatiently,",
  },
  "sarga-6-370": {
    meaning: "और पार्थ से गंभीर वचन बोले।",
    english: "and spoke grave words to Partha.",
  },
  "sarga-6-371": {
    meaning: "शीघ्र ही सेना को भय से मुक्त करो,",
    english: "Quickly grant the army freedom from fear,",
  },
  "sarga-6-372": {
    meaning: "अर्जुन! अर्जुन! सावधान हो जाओ।",
    english: "Arjuna! Arjuna! Be alert.",
  },
  "sarga-6-373": {
    meaning: "तुम नहीं जानते कि यह क्या है?",
    english: "Do you not know what this is?",
  },
  "sarga-6-374": {
    meaning: "क्या कर्ण शत्रु पर दया करता है?",
    english: "Does Karna show mercy to an enemy?",
  },
  "sarga-6-375": {
    meaning: "इसका बल दाहक और प्रचंड है,",
    english: "His strength is scorching and fierce,",
  },
  "sarga-6-376": {
    meaning: "यह मनुष्य नहीं, काल की अग्नि है।",
    english: "he is not a man, he is the fire of doom.",
  },
  "sarga-6-377": {
    meaning: "बड़वानल, यम या काल-पवन भी,",
    english: "The submarine fire, Yama, or the wind of death,",
  },
  "sarga-6-378": {
    meaning: "जब कभी भयंकर क्रोध करते हैं,",
    english: "even when they rage terribly,",
  },
  "sarga-6-379": {
    meaning: "सब कुछ पूरी तरह नहीं ले जाते,",
    english: "do not take away everything,",
  },
  "sarga-6-380": {
    meaning: "कुछ न कुछ अवशेष छोड़ देते हैं।",
    english: "they leave at least some remnant.",
  },
  "sarga-6-381": {
    meaning: "पर जब इसे क्रोध आता है,",
    english: "But when he becomes angry,",
  },
  "sarga-6-382": {
    meaning: "कुछ भी शेष नहीं रह पाता।",
    english: "nothing at all remains.",
  },
  "sarga-6-383": {
    meaning: "उसके बाणों का अटूट प्रहार,",
    english: "His arrows strike without obstruction,",
  },
  "sarga-6-384": {
    meaning: "अद्वितीय तेज और अपार पौरुष है।",
    english: "with unmatched brilliance and boundless valor.",
  },
  "sarga-6-385": {
    meaning: "उसकी निर्भय गर्जना पर गर्जना,",
    english: "His fearless roar after roar,",
  },
  "sarga-6-386": {
    meaning: "मानो स्वयं प्रलय सामने आ गया हो।",
    english: "is as if destruction itself has arrived.",
  },
  "sarga-6-387": {
    meaning: "क्या तुम इसे रोक भी पाओगे?",
    english: "Will you even be able to stop him?",
  },
  "sarga-6-388": {
    meaning: "या चुपचाप खड़े रह जाओगे?",
    english: "Or will you stand silent?",
  },
  "sarga-6-389": {
    meaning: "यह अत्यंत उन्मत्त मानव-हाथी,",
    english: "This wildly intoxicated human elephant,",
  },
  "sarga-6-390": {
    meaning: "कितना निडर होकर घूम रहा है।",
    english: "how fearlessly he is moving about.",
  },
  "sarga-6-391": {
    meaning: "जिस ओर यह अपना हाथ बढ़ाता है,",
    english: "Wherever he stretches his hand,",
  },
  "sarga-6-392": {
    meaning: "रास्ता अपने-आप बन जाता है।",
    english: "the path forms by itself.",
  },
  "sarga-6-393": {
    meaning: "यदि तुम धनुष नहीं तानोगे,",
    english: "If you do not draw your bow,",
  },
  "sarga-6-394": {
    meaning: "तो यह किसका अंकुश मानेगा?",
    english: "whose goad will he obey?",
  },
  "sarga-6-395": {
    meaning: "अर्जुन! विलंब करना पाप होगा,",
    english: "Arjuna, delay will be a sin,",
  },
  "sarga-6-396": {
    meaning: "ढिलाई प्राणघातक होगी।",
    english: "slackness will be fatal.",
  },
  "sarga-6-397": {
    meaning: "उठो, जागो वीर! मूर्खता छोड़ो,",
    english: "Rise, awaken, hero! Abandon foolishness,",
  },
  "sarga-6-398": {
    meaning: "अपना कठोर धनुष-बाण धारण करो।",
    english: "take up your stern bow and arrows.",
  },
  "sarga-6-399": {
    meaning: "यदि तुम जोश में नहीं आओगे,",
    english: "If you do not rise in fervor,",
  },
  "sarga-6-400": {
    meaning: "तो आज ही युद्ध समाप्त हो जाएगा।",
    english: "the war will end today itself.",
  },
  "sarga-6-401": {
    meaning: "केशव का सिंह दहाड़ उठा,",
    english: "Keshava's lion roared,",
  },
  "sarga-6-402": {
    meaning: "मानो पहाड़ चीखकर उठ खड़ा हुआ हो।",
    english: "as if a mountain had risen with a scream.",
  },
  "sarga-6-403": {
    meaning: "फिर बाणों की झड़ी लग गई,",
    english: "Then a shower of arrows began again,",
  },
  "sarga-6-404": {
    meaning: "और भागती सेना फिर खड़ी हो गई।",
    english: "and the fleeing army stood its ground.",
  },
  "sarga-6-405": {
    meaning: "कुंती-पुत्र और कर्ण लड़ने लगे,",
    english: "Kunti's son and Karna began to battle,",
  },
  "sarga-6-406": {
    meaning: "जैसे दो महान पक्षी आपस में लड़ते हों।",
    english: "like two mighty birds fighting each other.",
  },
  "sarga-6-407": {
    meaning: "एक ही डंठल की दो कलियाँ, एक ही गर्भ के दो पुत्र,",
    english: "Two buds from one stem, two sons from one womb,",
  },
  "sarga-6-408": {
    meaning: "एक ही वंश के दो आभूषण, चमकते, वीर, पर्वत जैसे।",
    english: "two ornaments of one lineage, radiant, heroic, mountain-like.",
  },
  "sarga-6-409": {
    meaning: "जन्मजात भाइयों के शरीरों में तेज बाण,",
    english: "Sharp arrows began piercing the bodies of natural brothers,",
  },
  "sarga-6-410": {
    meaning: "एक-दूसरे को बेधने लगे; दोनों देह आग-सी हो गईं।",
    english: "and both bodies became flame-red; both lives burned like fire.",
  },
  "sarga-6-411": {
    meaning: "उन्माद आँधी बनकर उठा,",
    english: "Madness rose like a storm,",
  },
  "sarga-6-412": {
    meaning: "दोनों ओर जय-जयकार होने लगी।",
    english: "and victory cries rose on both sides.",
  },
  "sarga-6-413": {
    meaning: "दोनों पक्षों के वीरों पर,",
    english: "Upon the heroes of both armies,",
  },
  "sarga-6-414": {
    meaning: "मानो भैरवी शक्ति सवार हो गई।",
    english: "it seemed a fierce Bhairavi spirit had mounted.",
  },
  "sarga-6-415": {
    meaning: "शीघ्र ही कट-कटकर गिरने लगे,",
    english: "Quickly, cut apart, they began to fall,",
  },
  "sarga-6-416": {
    meaning: "धड़ों से सिर अलग होकर।",
    english: "heads separated from trunks.",
  },
  "sarga-6-417": {
    meaning: "मनुष्य के रक्त की धारा बह चली,",
    english: "A stream of human blood began to flow,",
  },
  "sarga-6-418": {
    meaning: "जो पशुओं के पैरों को धोती हुई बह रही थी।",
    english: "washing the feet of animals as it ran.",
  },
  "sarga-6-419": {
    meaning: "लेकिन वहाँ ऐसा कौन था जिसका हृदय,",
    english: "But who was there whose heart,",
  },
  "sarga-6-420": {
    meaning: "यह सब देखकर तनिक भी काँपता था?",
    english: "trembled even a little on seeing all this?",
  },
  "sarga-6-421": {
    meaning: "वहाँ ऐसा कौन था जो मनुष्यों की लाशों पर,",
    english: "Who was there who, over human corpses,",
  },
  "sarga-6-422": {
    meaning: "पाँव रखकर नहीं चलता था?",
    english: "did not walk by placing his feet?",
  },
  "sarga-6-423": {
    meaning: "कोमल करुणा की पतली-सी झलक,",
    english: "The faint glimpse of tender compassion,",
  },
  "sarga-6-424": {
    meaning: "किसे दिखाई पड़ती थी?",
    english: "who could see it there?",
  },
  "sarga-6-425": {
    meaning: "कटकर मरने वालों की,",
    english: "The cries of those being cut down and killed,",
  },
  "sarga-6-426": {
    meaning: "चीख किसे सुनाई पड़ती थी?",
    english: "who could hear them?",
  },
  "sarga-6-427": {
    meaning: "केवल आग के घूमते चक्र थे,",
    english: "There was only the whirling wheel of fire,",
  },
  "sarga-6-428": {
    meaning: "केवल वज्र जैसे अस्त्रों का प्रहार था।",
    english: "only the strike of thunderbolt-like weapons.",
  },
  "sarga-6-429": {
    meaning: "केवल विनाशकारी नृत्य था,",
    english: "Only a dance of destruction,",
  },
  "sarga-6-430": {
    meaning: "केवल गर्जना और केवल पुकार थी।",
    english: "only roaring, only cries.",
  },
  "sarga-6-431": {
    meaning: "कथा है कि द्रोण की छाया में,",
    english: "It is said that under Drona's shadow,",
  },
  "sarga-6-432": {
    meaning: "इस तरह पाँच दिनों तक युद्ध चला।",
    english: "the war went on like this for five days.",
  },
  "sarga-6-433": {
    meaning: "क्या कहें, धर्म पर कौन टिका रहा,",
    english: "What can be said, who remained on the side of dharma,",
  },
  "sarga-6-434": {
    meaning: "या कौन उसके विरुद्ध चला?",
    english: "and who moved against it?",
  },
  "sarga-6-435": {
    meaning: "जैसे पांडवों ने भीष्म पर,",
    english: "Just as the Pandavas, against Bhishma,",
  },
  "sarga-6-436": {
    meaning: "छल-छद्म से प्रहार किया था,",
    english: "had attacked through stratagem and deception,",
  },
  "sarga-6-437": {
    meaning: "कुछ उसी तरह की निष्ठुरता से,",
    english: "with somewhat the same cruelty,",
  },
  "sarga-6-438": {
    meaning: "वीर अर्जुन-पुत्र मारा गया।",
    english: "the brave son of Arjuna was killed.",
  },
  "sarga-6-439": {
    meaning: "फिर भी भावुक कुरुवृद्ध भीष्म,",
    english: "Even so, the tender-hearted Kuru elder Bhishma,",
  },
  "sarga-6-440": {
    meaning: "दोनों पक्षों के लिए शरण समान थे।",
    english: "was a refuge for both sides.",
  },
  "sarga-6-441": {
    meaning: "कहते हैं कि विकल होकर,",
    english: "It is said that, becoming distressed,",
  },
  "sarga-6-442": {
    meaning: "उन्होंने स्वयं मृत्यु का वरण किया।",
    english: "he himself chose death.",
  },
  "sarga-6-443": {
    meaning: "पर अर्जुन-पुत्र की कथा,",
    english: "But the tale of Arjuna's son,",
  },
  "sarga-6-444": {
    meaning: "आज भी हृदय हिला देती है।",
    english: "still shakes the heart even now.",
  },
  "sarga-6-445": {
    meaning: "सभ्यता उसका नाम लेकर,",
    english: "Civilization, taking his name,",
  },
  "sarga-6-446": {
    meaning: "आज भी रोती और पछताती है।",
    english: "still weeps and repents.",
  },
  "sarga-6-447": {
    meaning: "पर हाय, युद्ध मृत्यु-स्वरूप है,",
    english: "But alas, war is death itself,",
  },
  "sarga-6-448": {
    meaning: "मृत्यु की तरह ही भयानक और कठोर है।",
    english: "as terrible and hard as death.",
  },
  "sarga-6-449": {
    meaning: "वह बड़े-बूढ़े या युवा को नहीं देखता,",
    english: "It does not look at elder or youth,",
  },
  "sarga-6-450": {
    meaning: "बालक या किशोर को भी नहीं देखता।",
    english: "nor at child or adolescent.",
  },
  "sarga-6-451": {
    meaning: "पुत्र-वध की कथा सुनकर पार्थ का,",
    english: "Hearing the tale of his son's killing, Partha's,",
  },
  "sarga-6-452": {
    meaning: "शोक से व्याकुल हृदय दहक उठा।",
    english: "grief-stricken heart blazed up.",
  },
  "sarga-6-453": {
    meaning: "तब उसने क्रुद्ध होकर,",
    english: "Then, in anger, he made,",
  },
  "sarga-6-454": {
    meaning: "एक महान रोमांचकारी निश्चय किया।",
    english: "a great, hair-raising resolve.",
  },
  "sarga-6-455": {
    meaning: "यदि कल सूर्यास्त से पहले जयद्रथ को,",
    english: "If before sunset tomorrow, Jayadratha,",
  },
  "sarga-6-456": {
    meaning: "मैं मार नहीं पाऊँ,",
    english: "I am unable to kill,",
  },
  "sarga-6-457": {
    meaning: "तो धर्म की सौगंध है मुझे, आग में,",
    english: "then by dharma I swear, into fire,",
  },
  "sarga-6-458": {
    meaning: "मैं स्वयं कूदकर जल जाऊँगा।",
    english: "I myself will leap and burn.",
  },
  "sarga-6-459": {
    meaning: "कहते हैं कि तब अर्जुन के हित में,",
    english: "It is said that then, for Arjuna's sake,",
  },
  "sarga-6-460": {
    meaning: "प्रकृति का क्रम उलट-पुलट हो गया।",
    english: "the order of nature was reversed.",
  },
  "sarga-6-461": {
    meaning: "माया से अचानक शाम हो गई,",
    english: "By illusion, evening suddenly arrived,",
  },
  "sarga-6-462": {
    meaning: "और सूर्य असमय अस्त हो गया।",
    english: "and the sun seemed to set before time.",
  },
  "sarga-6-463": {
    meaning: "किसी तरह इस प्रकार वीर,",
    english: "Somehow, in this way, the hero,",
  },
  "sarga-6-464": {
    meaning: "अर्जुन का वह प्रण पूरा हुआ।",
    english: "Arjuna's vow was fulfilled.",
  },
  "sarga-6-465": {
    meaning: "जयद्रथ का सिर कट गया, और उसका मस्तक,",
    english: "Jayadratha's head was severed, and his head,",
  },
  "sarga-6-466": {
    meaning: "निर्दोष पिता को चूर कर गया।",
    english: "crushed his innocent father.",
  },
  "sarga-6-467": {
    meaning: "हाँ, यह भी हुआ कि जब सात्यकि से,",
    english: "Yes, this too happened: when with Satyaki,",
  },
  "sarga-6-468": {
    meaning: "भूरिश्रवा निपट रहा था,",
    english: "Bhurishrava was engaged in combat,",
  },
  "sarga-6-469": {
    meaning: "पार्थ ने बिना पुकारे ही,",
    english: "Partha, uncalled,",
  },
  "sarga-6-470": {
    meaning: "बाण से उसकी दाहिनी भुजा काट ली।",
    english: "cut off his right arm with an arrow.",
  },
  "sarga-6-471": {
    meaning: "और जब भूरिश्रवा उपवास करके,",
    english: "And when Bhurishrava, fasting,",
  },
  "sarga-6-472": {
    meaning: "मुनि-व्रत लेकर बैठ गया,",
    english: "sat down observing a sage-like vow,",
  },
  "sarga-6-473": {
    meaning: "सात्यकि ने उसका मस्तक काट लिया,",
    english: "Satyaki cut off his head,",
  },
  "sarga-6-474": {
    meaning: "जब वह स्थिर होकर योग में लीन था।",
    english: "while he was motionless, absorbed in yoga.",
  },
  "sarga-6-475": {
    meaning: "किसी भी समय धर्म को,",
    english: "At any time, it is futile,",
  },
  "sarga-6-476": {
    meaning: "युद्ध के साथ बाँधना व्यर्थ है।",
    english: "to bind dharma together with war.",
  },
  "sarga-6-477": {
    meaning: "निर्मल धर्म करुणा से निकलता है,",
    english: "Pure dharma arises from compassion,",
  },
  "sarga-6-478": {
    meaning: "हिंसा का रण तो मलिन पुत्र है।",
    english: "the battlefield of violence is its stained offspring.",
  },
  "sarga-6-479": {
    meaning: "जीवन के परम ध्येय-सुख को,",
    english: "The supreme goal and joy of life,",
  },
  "sarga-6-480": {
    meaning: "पूरा समाज अपनाता है।",
    english: "the whole society accepts it.",
  },
  "sarga-6-481": {
    meaning: "देखना केवल यह है कि वहाँ,",
    english: "What remains to be seen is only this:",
  },
  "sarga-6-482": {
    meaning: "कौन किस प्रकार पहुँचता है।",
    english: "who reaches there, and by what path.",
  },
  "sarga-6-483": {
    meaning: "धर्म केवल पहुँच जाने में नहीं है,",
    english: "Dharma is not merely in reaching the goal,",
  },
  "sarga-6-484": {
    meaning: "धर्म तो जीवन भर चलते रहने में है।",
    english: "dharma lies in walking rightly through life.",
  },
  "sarga-6-485": {
    meaning: "मार्ग पर कोमल प्रकाश फैलाकर,",
    english: "Spreading gentle light upon the path,",
  },
  "sarga-6-486": {
    meaning: "दीपक की तरह जलने में है।",
    english: "it lies in burning like a lamp.",
  },
  "sarga-6-487": {
    meaning: "यदि केवल विजय को देखें, तो विजय,",
    english: "If we speak only of victory, then victory,",
  },
  "sarga-6-488": {
    meaning: "अत्याचारी को भी मिल जाती है।",
    english: "can come even to a tyrant.",
  },
  "sarga-6-489": {
    meaning: "सचमुच पुत्र, पत्नी, धन और लोग,",
    english: "Indeed, sons, spouse, wealth, and followers,",
  },
  "sarga-6-490": {
    meaning: "पापी को भी मिल जाते हैं।",
    english: "can be obtained even by a sinner.",
  },
  "sarga-6-491": {
    meaning: "इसलिए धर्म लक्ष्य में नहीं,",
    english: "Therefore, dharma is not in the goal,",
  },
  "sarga-6-492": {
    meaning: "सदा साधन में छिपा रहता है।",
    english: "it always lies hidden in the means.",
  },
  "sarga-6-493": {
    meaning: "वह किसी भी हिंसक कर्म में नहीं है,",
    english: "It is not in any violent deed,",
  },
  "sarga-6-494": {
    meaning: "न हिंसा, संघर्ष या युद्ध में है।",
    english: "nor in violence, conflict, or war.",
  },
  "sarga-6-495": {
    meaning: "फिर भी जो लोग चाहते हैं कि धर्म,",
    english: "Still, those who want dharma,",
  },
  "sarga-6-496": {
    meaning: "मनुष्य-संहारों के रूप में समझा जाए,",
    english: "to be understood through human slaughter,",
  },
  "sarga-6-497": {
    meaning: "वे फूलों के साथ,",
    english: "they wish to weave, along with flowers,",
  },
  "sarga-6-498": {
    meaning: "तप्त अंगारों को गूँथना चाहते हैं।",
    english: "burning embers.",
  },
  "sarga-6-499": {
    meaning: "जिसे कभी धर्म से प्रेम हो,",
    english: "One who truly loves dharma,",
  },
  "sarga-6-500": {
    meaning: "क्या वह घृणित कर्म करेगा?",
    english: "would he commit vile deeds?",
  },
  "sarga-6-501": {
    meaning: "क्या वह बर्बर, भयानक और दाँतों वाला बनकर,",
    english: "Would he become barbarous, terrifying, and fanged,",
  },
  "sarga-6-502": {
    meaning: "मारेगा और मरेगा?",
    english: "to kill and be killed?",
  },
  "sarga-6-503": {
    meaning: "पर हाय, मनुष्य के भाग्य अभी,",
    english: "But alas, humanity's fate even now,",
  },
  "sarga-6-504": {
    meaning: "बहुत खोटे ही बने हुए हैं।",
    english: "remains deeply flawed.",
  },
  "sarga-6-505": {
    meaning: "हम बाहर से बहुत बढ़ गए हैं,",
    english: "Outwardly, we have advanced greatly,",
  },
  "sarga-6-506": {
    meaning: "लेकिन भीतर से अब भी छोटे हैं।",
    english: "but inwardly, we remain small.",
  },
  "sarga-6-507": {
    meaning: "युद्ध धर्मगुण का विशेषण,",
    english: "How can war ever become,",
  },
  "sarga-6-508": {
    meaning: "भला किस तरह हो सकता है?",
    english: "an attribute of dharma?",
  },
  "sarga-6-509": {
    meaning: "मनुष्य अंगारों से,",
    english: "How can a person, with burning embers,",
  },
  "sarga-6-510": {
    meaning: "अपनी जलन कैसे धो सकता है?",
    english: "wash away his own burning pain?",
  },
  "sarga-6-511": {
    meaning: "जो नागिन के पेट से निकला है,",
    english: "That which has come from a serpent's womb,",
  },
  "sarga-6-512": {
    meaning: "वह अमृत नहीं दे पाएगा।",
    english: "cannot give nectar.",
  },
  "sarga-6-513": {
    meaning: "युद्ध कभी निष्कपट होकर धर्म का,",
    english: "War can never sincerely,",
  },
  "sarga-6-514": {
    meaning: "साथ नहीं निभा पाएगा।",
    english: "remain faithful to dharma.",
  },
  "sarga-6-515": {
    meaning: "यह दाँतों वाला भयानक,",
    english: "This fanged, fearsome,",
  },
  "sarga-6-516": {
    meaning: "विषधर साँप किसका नियंत्रण मानेगा?",
    english: "venomous serpent will accept whose restraint?",
  },
  "sarga-6-517": {
    meaning: "हर पल अत्याचार को धर्म में भिगोकर,",
    english: "By soaking excess in the name of dharma every moment,",
  },
  "sarga-6-518": {
    meaning: "क्या मनुष्य कभी युद्ध जीत पाया है?",
    english: "has humanity ever truly won a war?",
  },
  "sarga-6-519": {
    meaning: "जो विष हमें जबरन उभारकर,",
    english: "The poison that forcibly rouses us,",
  },
  "sarga-6-520": {
    meaning: "युद्धभूमि में ले आता है,",
    english: "and drags us to the battlefield,",
  },
  "sarga-6-521": {
    meaning: "वही हमें सत्पथ से विचलित कर,",
    english: "that very thing turns us away from the right path,",
  },
  "sarga-6-522": {
    meaning: "अधर्म की ओर ले जाता है।",
    english: "and leads us toward adharma.",
  },
  "sarga-6-523": {
    meaning: "जब हम साधना को भूलकर सिद्धि पर,",
    english: "When, forgetting discipline, our gaze,",
  },
  "sarga-6-524": {
    meaning: "अपनी आँखें जमा देते हैं,",
    english: "fixes only on achievement,",
  },
  "sarga-6-525": {
    meaning: "तब विजय को छोड़कर कोई और भावना,",
    english: "then apart from victory, no other feeling,",
  },
  "sarga-6-526": {
    meaning: "हृदय में जागती ही नहीं।",
    english: "awakens in the heart.",
  },
  "sarga-6-527": {
    meaning: "तब जो भी बाधा बनकर आता है,",
    english: "Then whatever appears as an obstacle,",
  },
  "sarga-6-528": {
    meaning: "चाहे वह धर्म, शील या सदाचार हो,",
    english: "whether dharma, virtue, or good conduct,",
  },
  "sarga-6-529": {
    meaning: "हम सबको एक जैसा समझकर,",
    english: "we treat them all alike,",
  },
  "sarga-6-530": {
    meaning: "उनके सिर पर पाँव मारते हैं।",
    english: "and trample upon their heads.",
  },
  "sarga-6-531": {
    meaning: "उन्हें कुचलने में हमें उतनी भी पीड़ा,",
    english: "We do not feel even as much pain in crushing them,",
  },
  "sarga-6-532": {
    meaning: "नहीं होती,",
    english: "as one might feel,",
  },
  "sarga-6-533": {
    meaning: "जितनी रोज कंकड़ों के ऊपर,",
    english: "while walking every day,",
  },
  "sarga-6-534": {
    meaning: "चलने में होती है।",
    english: "over small pebbles.",
  },
  "sarga-6-535": {
    meaning: "सच है, ऊपर देखने वाला मनुष्य कैसे,",
    english: "Truly, how can one looking only upward,",
  },
  "sarga-6-536": {
    meaning: "नीचे की मिट्टी को जान पाए?",
    english: "notice the soil below?",
  },
  "sarga-6-537": {
    meaning: "जब बड़ा लक्ष्य अपनी ओर खींच रहा हो,",
    english: "When a great goal is pulling him,",
  },
  "sarga-6-538": {
    meaning: "तो छोटी बातों पर कौन ध्यान दे?",
    english: "who pays attention to smaller things?",
  },
  "sarga-6-539": {
    meaning: "ऊपर देखते हुए अंधा-सा चलने वाला,",
    english: "One who walks blindly while looking upward,",
  },
  "sarga-6-540": {
    meaning: "जानता ही नहीं कि वह क्या कर रहा है।",
    english: "does not know what he is doing.",
  },
  "sarga-6-541": {
    meaning: "नीच मार्ग में कौन पड़ा है?",
    english: "Who lies on the low path?",
  },
  "sarga-6-542": {
    meaning: "जिसके सिर पर वह पाँव रखता है।",
    english: "On whose head does he place his foot?",
  },
  "sarga-6-543": {
    meaning: "वह शत्रु को काटता है, लेकिन,",
    english: "He cuts down the enemy, but,",
  },
  "sarga-6-544": {
    meaning: "साथ ही धर्म भी कट जाता है।",
    english: "along with it, dharma too is cut down.",
  },
  "sarga-6-545": {
    meaning: "वह विरोधी का हृदय फाड़ता है,",
    english: "He tears open the opponent's heart,",
  },
  "sarga-6-546": {
    meaning: "और मानवता का हृदय भी फट जाता है।",
    english: "and humanity's heart is torn as well.",
  },
  "sarga-6-547": {
    meaning: "जो वासना की आग से निकला है,",
    english: "That which has emerged from the fire of desire,",
  },
  "sarga-6-548": {
    meaning: "वह संघर्ष को कोमल कैसे बना सकता है?",
    english: "how can it make conflict gentle?",
  },
  "sarga-6-549": {
    meaning: "वह हमें करुणा का मार्ग,",
    english: "Why would it let us see,",
  },
  "sarga-6-550": {
    meaning: "सरल और शीतल क्यों देखने देगा?",
    english: "the easy, cool path of compassion?",
  },
  "sarga-6-551": {
    meaning: "जब सिद्धि का लोभ आँखों पर,",
    english: "When the greed for success over the eyes,",
  },
  "sarga-6-552": {
    meaning: "धुँधली परत बनकर छा जाता है,",
    english: "spreads like a blinding film,",
  },
  "sarga-6-553": {
    meaning: "तब वह मनुष्य से बड़े-बड़े,",
    english: "then it makes a person commit,",
  },
  "sarga-6-554": {
    meaning: "अकल्पनीय बुरे कर्म करवाता है।",
    english: "great and unthinkable wrongs.",
  },
  "sarga-6-555": {
    meaning: "फिर क्या आश्चर्य कि कौरव-पांडव,",
    english: "Then what wonder that the Kauravas and Pandavas,",
  },
  "sarga-6-556": {
    meaning: "भी धर्म के साथ नहीं रहे?",
    english: "too did not remain with dharma?",
  },
  "sarga-6-557": {
    meaning: "युद्ध का जो रंग है, उससे,",
    english: "From the color of war,",
  },
  "sarga-6-558": {
    meaning: "उनके हाथ भी अलग नहीं रहे।",
    english: "their hands too did not remain untouched.",
  },
  "sarga-6-559": {
    meaning: "विजय का तिलक लगाने के लिए,",
    english: "To apply the mark of victory,",
  },
  "sarga-6-560": {
    meaning: "दोनों ने सिर पर कालिख छुई।",
    english: "both touched soot to their foreheads.",
  },
  "sarga-6-561": {
    meaning: "विजय-बिंदु तक पहुँचने को दौड़ते हुए,",
    english: "Running toward the point of victory,",
  },
  "sarga-6-562": {
    meaning: "दोनों सत्पथ से डिग गए।",
    english: "both strayed from the good path.",
  },
  "sarga-6-563": {
    meaning: "इस विजय-संघर्ष के बीच युद्ध के,",
    english: "Amid this struggle for victory,",
  },
  "sarga-6-564": {
    meaning: "कई जलाने वाले दिन बीत गए।",
    english: "many scorching days of war passed.",
  },
  "sarga-6-565": {
    meaning: "पर विजय किसे मिल सकती थी,",
    english: "But who could gain victory,",
  },
  "sarga-6-566": {
    meaning: "जब तक द्रोण और कर्ण जीवित थे?",
    english: "as long as Drona and Karna lived?",
  },
  "sarga-6-567": {
    meaning: "ऐसा कौन सत्य-पथ पर डटकर खड़ा था,",
    english: "Who stood firm on the path of truth,",
  },
  "sarga-6-568": {
    meaning: "जो उनसे उचित युद्ध करता?",
    english: "to fight them in a worthy way?",
  },
  "sarga-6-569": {
    meaning: "जो धर्म से उन्हें मारकर संसार में,",
    english: "Who, killing them through dharma,",
  },
  "sarga-6-570": {
    meaning: "अपना नाम अमर कर देता?",
    english: "would make his name immortal in the world?",
  },
  "sarga-6-571": {
    meaning: "उन्हें युद्ध में देखकर ऐसा कौन था,",
    english: "Who was there who, seeing them in battle,",
  },
  "sarga-6-572": {
    meaning: "जिसका हृदय काँप न उठता था?",
    english: "did not feel his heart tremble?",
  },
  "sarga-6-573": {
    meaning: "कौन भय से मन-ही-मन,",
    english: "Who, in fear, in his heart,",
  },
  "sarga-6-574": {
    meaning: "अपने इष्टदेव का नाम नहीं जपता था?",
    english: "did not chant the name of his chosen deity?",
  },
  "sarga-6-575": {
    meaning: "जैसे मदमस्त हाथी,",
    english: "Just as intoxicated elephants,",
  },
  "sarga-6-576": {
    meaning: "कमलों के वन को रौंद डालते हैं,",
    english: "tear apart a forest of lotuses,",
  },
  "sarga-6-577": {
    meaning: "वैसे ही पांडव-दल में,",
    english: "so in the Pandava army,",
  },
  "sarga-6-578": {
    meaning: "दोनों श्रेष्ठ वीर विनाश मचा रहे थे।",
    english: "the two finest warriors were spreading destruction.",
  },
  "sarga-6-579": {
    meaning: "युद्ध की भूख से पीड़ित,",
    english: "Tormented by hunger for battle,",
  },
  "sarga-6-580": {
    meaning: "और सारे जीवन से ठगा हुआ,",
    english: "deceived by all of life,",
  },
  "sarga-6-581": {
    meaning: "राधेय पांडवों के ऊपर,",
    english: "Radheya, against the Pandavas,",
  },
  "sarga-6-582": {
    meaning: "भयानक रोष से जल रहा था।",
    english: "burned with terrible resentment.",
  },
  "sarga-6-583": {
    meaning: "वह शत्रु-दल पर इस तरह टूट पड़ा,",
    english: "He fell upon the enemy army in such a way,",
  },
  "sarga-6-584": {
    meaning: "जैसे अजेय दावानल हो।",
    english: "as if he were an unconquerable forest fire.",
  },
  "sarga-6-585": {
    meaning: "या मानो स्वर्ग से स्वयं,",
    english: "Or as if from heaven itself,",
  },
  "sarga-6-586": {
    meaning: "कार्तिकेय मनुष्यों पर टूट पड़े हों।",
    english: "Kartikeya had descended upon humans.",
  },
  "sarga-6-587": {
    meaning: "या जैसे उनचास मरुत मिलकर,",
    english: "Or as if the forty-nine storm-gods together,",
  },
  "sarga-6-588": {
    meaning: "कर्ण के प्राणों में छा गए हों।",
    english: "had filled Karna's life-force.",
  },
  "sarga-6-589": {
    meaning: "या क्रुद्ध सूर्य आकाश छोड़कर,",
    english: "Or the angry sun had left the sky,",
  },
  "sarga-6-590": {
    meaning: "नीचे धरती पर उतर आया हो।",
    english: "and come down upon the earth.",
  },
  "sarga-6-591": {
    meaning: "या युद्ध में गरज रहा हो,",
    english: "Or roaring in the battlefield,",
  },
  "sarga-6-592": {
    meaning: "धनुष लिए हिमालय जैसा अचल।",
    english: "stood immovable like the Himalaya, bow in hand.",
  },
  "sarga-6-593": {
    meaning: "या महाकाल बनकर,",
    english: "Or becoming Mahakala,",
  },
  "sarga-6-594": {
    meaning: "गरुड़ ऊपर से धरती पर टूट पड़ा हो।",
    english: "Garuda had swooped down upon the earth.",
  },
  "sarga-6-595": {
    meaning: "पंखदार बाणों पर बाण उड़ने लगे,",
    english: "Winged arrows flew one after another,",
  },
  "sarga-6-596": {
    meaning: "शत्रु-दल खंड-खंड हो गया।",
    english: "and the enemy army was shattered into pieces.",
  },
  "sarga-6-597": {
    meaning: "कर्ण के पौरुष की प्रचंड ज्वाला,",
    english: "The fierce flame of Karna's valor,",
  },
  "sarga-6-598": {
    meaning: "कालाग्नि जैसी जल उठी।",
    english: "blazed like the fire of doom.",
  },
  "sarga-6-599": {
    meaning: "बड़े-बड़े हाथी जैसे वीरों की भी,",
    english: "Even the chests of elephant-like mighty warriors,",
  },
  "sarga-6-600": {
    meaning: "छाती प्रहार से काँप उठी।",
    english: "shook under his blows.",
  },
  "sarga-6-601": {
    meaning: "सामने प्रलय को देखकर,",
    english: "Seeing destruction before them,",
  },
  "sarga-6-602": {
    meaning: "गजराजों के भी पाँव उखड़ गए।",
    english: "even royal elephants lost their footing.",
  },
  "sarga-6-603": {
    meaning: "जब कर्ण हर जीवन पर,",
    english: "When Karna became, over every life,",
  },
  "sarga-6-604": {
    meaning: "भयानक और मदोन्मत्त मृत्यु बन गया,",
    english: "a terrible, maddened death,",
  },
  "sarga-6-605": {
    meaning: "पांडव-सेना का विनाश देखकर,",
    english: "seeing the ruin of the Pandava army,",
  },
  "sarga-6-606": {
    meaning: "केशव का मुख पीला पड़ गया।",
    english: "Keshava's face turned pale.",
  },
  "sarga-6-607": {
    meaning: "वे सोचने लगे, क्या आज ही,",
    english: "He began to think: will today itself,",
  },
  "sarga-6-608": {
    meaning: "सबके संकटग्रस्त प्राण छूट जाएँगे?",
    english: "all these endangered lives be lost?",
  },
  "sarga-6-609": {
    meaning: "क्या सचमुच कोई उपाय नहीं है,",
    english: "Is there truly no remedy,",
  },
  "sarga-6-610": {
    meaning: "इस क्रुद्ध प्रलय को रोकने का?",
    english: "for this enraged destruction?",
  },
  "sarga-6-611": {
    meaning: "पार्थ कहाँ है? पार्थ कहाँ है?",
    english: "Where is Partha? Where is Partha?",
  },
  "sarga-6-612": {
    meaning: "राधेय हर क्षण गरज रहा था।",
    english: "Radheya roared again and again.",
  },
  "sarga-6-613": {
    meaning: "वह सामने आकर क्यों नहीं,",
    english: "Why does he not come forth,",
  },
  "sarga-6-614": {
    meaning: "अपने भयानक प्रतिद्वंद्वी से युद्ध करता?",
    english: "and fight his fearsome rival?",
  },
  "sarga-6-615": {
    meaning: "क्या मेरी युद्ध-कला इन्हीं तुच्छों से,",
    english: "Will my battle-skill be spent only,",
  },
  "sarga-6-616": {
    meaning: "निपटकर रह जाएगी?",
    english: "on these insignificant fighters?",
  },
  "sarga-6-617": {
    meaning: "या किसी वीर पर भी अपना,",
    english: "Or will it also display,",
  },
  "sarga-6-618": {
    meaning: "चमत्कार दिखलाएगी?",
    english: "its miracle upon a true hero?",
  },
  "sarga-6-619": {
    meaning: "पार्थ जहाँ भी छिपा हो, सुन ले,",
    english: "Wherever Partha is hidden, let him hear,",
  },
  "sarga-6-620": {
    meaning: "अब मैं अपने हाथ रोक लेता हूँ।",
    english: "now I draw back my hands.",
  },
  "sarga-6-621": {
    meaning: "सबके सामने द्वंद्व-युद्ध के लिए,",
    english: "Before everyone, to a duel,",
  },
  "sarga-6-622": {
    meaning: "मैं उसे चुनौती देता हूँ।",
    english: "I challenge him.",
  },
  "sarga-6-623": {
    meaning: "यदि हिम्मत हो तो वह आगे बढ़े,",
    english: "If he has courage, let him step forward,",
  },
  "sarga-6-624": {
    meaning: "व्यूह से निकलकर सामने आए।",
    english: "come out of the formation and face me.",
  },
  "sarga-6-625": {
    meaning: "मुझे जन्म का लाभ दे,",
    english: "Let him give meaning to my birth,",
  },
  "sarga-6-626": {
    meaning: "और साहस हो तो स्वयं भी पाए।",
    english: "and if he has courage, gain his own.",
  },
  "sarga-6-627": {
    meaning: "पर आज पार्थ के चतुर सारथी,",
    english: "But today Partha's clever charioteer,",
  },
  "sarga-6-628": {
    meaning: "रथ अलग-अलग नचाते फिरते थे।",
    english: "kept moving the chariot elsewhere.",
  },
  "sarga-6-629": {
    meaning: "कर्ण के साथ द्वंद्व-युद्ध से,",
    english: "From a duel with Karna,",
  },
  "sarga-6-630": {
    meaning: "अपने शिष्य को बचाए फिरते थे।",
    english: "he kept saving his disciple.",
  },
  "sarga-6-631": {
    meaning: "चिंता थी कि भयानक एकघ्नी अस्त्र,",
    english: "The worry was that the dreadful single-slayer weapon,",
  },
  "sarga-6-632": {
    meaning: "यदि द्वंद्व-युद्ध में छूटेगा,",
    english: "if released in single combat,",
  },
  "sarga-6-633": {
    meaning: "तो पार्थ का निधन होगा और भाग्य,",
    english: "would kill Partha, and the fortune,",
  },
  "sarga-6-634": {
    meaning: "पांडवों का टूट जाएगा।",
    english: "of the Pandavas would be shattered.",
  },
  "sarga-6-635": {
    meaning: "इसलिए नटनागर ने युक्ति का,",
    english: "Therefore the master of play devised,",
  },
  "sarga-6-636": {
    meaning: "एक नया उपाय साधा।",
    english: "a new strategy.",
  },
  "sarga-6-637": {
    meaning: "एकघ्नी के आहुति-पात्र के लिए,",
    english: "For the offering demanded by that single-slayer weapon,",
  },
  "sarga-6-638": {
    meaning: "हरि ने घटोत्कच को बुलाया।",
    english: "Hari summoned Ghatotkacha.",
  },
  "sarga-6-639": {
    meaning: "वे बोले, बेटा! क्या देख रहे हो?",
    english: "He said, son, what are you watching?",
  },
  "sarga-6-640": {
    meaning: "विजय हाथ से जाने को है।",
    english: "Victory is about to slip from our hands.",
  },
  "sarga-6-641": {
    meaning: "अब सबका भाग्य केवल तुम्हारे,",
    english: "Now everyone's fate rests only,",
  },
  "sarga-6-642": {
    meaning: "कुछ पराक्रम दिखाने पर निर्भर है।",
    english: "on your showing some feat of valor.",
  },
  "sarga-6-643": {
    meaning: "देखो, कर्ण की बाण-वर्षा,",
    english: "Look, Karna's shower of arrows,",
  },
  "sarga-6-644": {
    meaning: "कैसी भयानक झड़ी ला रही है।",
    english: "is bringing such a dreadful downpour.",
  },
  "sarga-6-645": {
    meaning: "गायों की तरह पांडव-सेना,",
    english: "Like cattle, the Pandava army,",
  },
  "sarga-6-646": {
    meaning: "भय से व्याकुल होकर भागती जा रही है।",
    english: "is fleeing in terror.",
  },
  "sarga-6-647": {
    meaning: "तिल-भर भूमि भी कहीं नहीं,",
    english: "There is not even a sesame-sized space,",
  },
  "sarga-6-648": {
    meaning: "जहाँ लोग क्षण-भर स्थिर खड़े हों।",
    english: "where people stand steady for a moment.",
  },
  "sarga-6-649": {
    meaning: "पूरी रणभूमि पर बरस रहे हैं,",
    english: "Across the whole battlefield are raining,",
  },
  "sarga-6-650": {
    meaning: "एक ही कर्ण के तेज बाण।",
    english: "the sharp arrows of Karna alone.",
  },
  "sarga-6-651": {
    meaning: "यदि इसी तरह सब लोग,",
    english: "If in this way everyone,",
  },
  "sarga-6-652": {
    meaning: "मृत्यु के घाट उतरते जाएँगे,",
    english: "keeps going down to death,",
  },
  "sarga-6-653": {
    meaning: "तो कल सुबह कौन-सी सेना लेकर,",
    english: "then tomorrow morning with what army,",
  },
  "sarga-6-654": {
    meaning: "पांडव युद्ध में आएँगे?",
    english: "will the Pandavas come to battle?",
  },
  "sarga-6-655": {
    meaning: "यह संकट की घड़ी है,",
    english: "This is an hour of crisis,",
  },
  "sarga-6-656": {
    meaning: "कर्ण का निर्भय, घना प्रहार रोक दो।",
    english: "stop Karna's fearless, dense assault.",
  },
  "sarga-6-657": {
    meaning: "बेटा! जैसे भी बन पड़े,",
    english: "Son, by whatever means possible,",
  },
  "sarga-6-658": {
    meaning: "पांडव-सेना का संहार रोक दो।",
    english: "stop the destruction of the Pandava army.",
  },
  "sarga-6-659": {
    meaning: "जैसे ज्वालामुखी पर्वत फूट पड़ता है,",
    english: "As a volcanic mountain bursts open,",
  },
  "sarga-6-660": {
    meaning: "जैसे समुद्र में प्रलय-ज्वार उठता है,",
    english: "as a cataclysmic tide rises in the sea,",
  },
  "sarga-6-661": {
    meaning: "वैसे ही वह महाभयानक दानव,",
    english: "So that terribly fearsome demon,",
  },
  "sarga-6-662": {
    meaning: "भयानक गर्जना कर युद्ध में कूद पड़ा।",
    english: "leapt into battle with a dreadful roar.",
  },
  "sarga-6-663": {
    meaning: "सचमुच, असुर के आते ही,",
    english: "Truly, as soon as the demon arrived,",
  },
  "sarga-6-664": {
    meaning: "युद्ध का वह क्रम टूटने लगा।",
    english: "the order of battle began to break.",
  },
  "sarga-6-665": {
    meaning: "कौरवों की सेना भयभीत हो गई,",
    english: "The Kaurava army became frightened,",
  },
  "sarga-6-666": {
    meaning: "उसका धैर्य छूटने लगा।",
    english: "and its courage began to fail.",
  },
  "sarga-6-667": {
    meaning: "कथा है कि दानवों के हाथ में,",
    english: "It is said that in the hands of demons,",
  },
  "sarga-6-668": {
    meaning: "बहुत से कठोर साधन थे।",
    english: "there were many terrible means.",
  },
  "sarga-6-669": {
    meaning: "कुछ ऐसे भी थे जिन पर मनुष्य का,",
    english: "Some were such that human power,",
  },
  "sarga-6-670": {
    meaning: "बल बिल्कुल नहीं चल पाता था।",
    english: "could not prevail against them.",
  },
  "sarga-6-671": {
    meaning: "उन दुर्गम साधनों से पीड़ित होकर,",
    english: "Struck by those unreachable powers,",
  },
  "sarga-6-672": {
    meaning: "कौरव-सेना चीख उठी।",
    english: "the Kaurava army screamed.",
  },
  "sarga-6-673": {
    meaning: "बार-बार कर्ण का नाम लेकर,",
    english: "Taking Karna's name again and again,",
  },
  "sarga-6-674": {
    meaning: "वह व्याकुल होकर हाहाकार करने लगी।",
    english: "it cried out in panic.",
  },
  "sarga-6-675": {
    meaning: "लेकिन निरंतर बाण-वर्षा में लगा,",
    english: "But absorbed in ceaseless showers of arrows,",
  },
  "sarga-6-676": {
    meaning: "लगातार युद्धरत धीर कर्ण,",
    english: "the steady Karna, constantly at war,",
  },
  "sarga-6-677": {
    meaning: "अपने मन में स्वयं,",
    english: "within his own mind,",
  },
  "sarga-6-678": {
    meaning: "इस युद्ध से कुछ चकित और फीका पड़ रहा था।",
    english: "was becoming somewhat astonished and pale at this battle.",
  },
  "sarga-6-679": {
    meaning: "दानव का तन बाणों से तिल-भर भी,",
    english: "There was not even a sesame-sized spot on the demon's body,",
  },
  "sarga-6-680": {
    meaning: "अभेद्य नहीं बचा था।",
    english: "left unpierced by arrows.",
  },
  "sarga-6-681": {
    meaning: "पर वह पशु हर पल,",
    english: "Yet that fierce being, moment by moment,",
  },
  "sarga-6-682": {
    meaning: "और भी अधिक भयानक होता जा रहा था।",
    english: "was becoming even more terrifying.",
  },
  "sarga-6-683": {
    meaning: "जब किसी भी तरह,",
    english: "When by no means,",
  },
  "sarga-6-684": {
    meaning: "महादानव की गति रोकी न जा सकी,",
    english: "could the great demon's advance be stopped,",
  },
  "sarga-6-685": {
    meaning: "और सारी सेना को व्याकुल देखकर,",
    english: "and seeing the whole army distressed,",
  },
  "sarga-6-686": {
    meaning: "कुरुपति स्वयं कर्ण से बोला।",
    english: "the Kuru king himself spoke to Karna.",
  },
  "sarga-6-687": {
    meaning: "सखे, क्या देख रहे हो?",
    english: "Friend, what are you watching?",
  },
  "sarga-6-688": {
    meaning: "क्या यह दस्यु ऐसे कभी मरेगा?",
    english: "Will this marauder ever die like this?",
  },
  "sarga-6-689": {
    meaning: "यदि दो घड़ी और देर हुई,",
    english: "If there is even a little more delay,",
  },
  "sarga-6-690": {
    meaning: "तो यह सबका संहार कर देगा।",
    english: "he will destroy everyone.",
  },
  "sarga-6-691": {
    meaning: "हे वीर! विलाप करती सेना का,",
    english: "O hero, for this wailing army,",
  },
  "sarga-6-692": {
    meaning: "शीघ्र किसी तरह रक्षा करो।",
    english: "bring protection quickly, somehow.",
  },
  "sarga-6-693": {
    meaning: "अब कोई दूसरा उपाय नहीं; आँख मूँदकर,",
    english: "There is no other way now; close your eyes,",
  },
  "sarga-6-694": {
    meaning: "एकघ्नी अस्त्र का संधान करो।",
    english: "and aim the single-slayer weapon.",
  },
  "sarga-6-695": {
    meaning: "शत्रु का सिर अभी दूर है,",
    english: "The enemy's head is still far away,",
  },
  "sarga-6-696": {
    meaning: "पहले अपनों के सिर बचाओ।",
    english: "first save the heads of our own.",
  },
  "sarga-6-697": {
    meaning: "जो मृत्यु-पाश पड़ा है, पहले,",
    english: "From the noose of death that has fallen, first,",
  },
  "sarga-6-698": {
    meaning: "उससे हमें छुड़ाओ।",
    english: "free us from it.",
  },
  "sarga-6-699": {
    meaning: "यह सुनकर राधेय सहम उठा,",
    english: "Hearing this, Radheya trembled,",
  },
  "sarga-6-700": {
    meaning: "और मित्र की ओर चकित नयनों से देखा।",
    english: "and turned startled eyes toward his friend.",
  },
  "sarga-6-701": {
    meaning: "विवशता में कुरुपति का मुख झुक गया,",
    english: "In helplessness the Kuru king's face bent down,",
  },
  "sarga-6-702": {
    meaning: "वह अपराधी और कातर लग रहा था।",
    english: "guilty and pleading.",
  },
  "sarga-6-703": {
    meaning: "कर्ण मन-ही-मन बोला, पार्थ!",
    english: "Karna said within himself: Partha!",
  },
  "sarga-6-704": {
    meaning: "तू भाग्य का बड़ा बलवान निकला।",
    english: "You have turned out to be greatly favored by fate.",
  },
  "sarga-6-705": {
    meaning: "या आज एक बार फिर,",
    english: "Or once again today,",
  },
  "sarga-6-706": {
    meaning: "मेरा ही भाग्य छलिया निकला।",
    english: "my own fate has turned deceptive.",
  },
  "sarga-6-707": {
    meaning: "कर्ण जिस अजेय सहारे को लेकर,",
    english: "The invincible support with which Karna,",
  },
  "sarga-6-708": {
    meaning: "अब तक प्रसन्न रहता आया था,",
    english: "had remained confident until now,",
  },
  "sarga-6-709": {
    meaning: "जिसे उसने इंद्र को कवच-कुंडल देकर,",
    english: "which he had received by giving Indra,",
  },
  "sarga-6-710": {
    meaning: "प्राप्त किया था,",
    english: "his armor and earrings,",
  },
  "sarga-6-711": {
    meaning: "जिसकी भयानकता में विजय का,",
    english: "in whose terror the faith of victory,",
  },
  "sarga-6-712": {
    meaning: "निर्भय विश्वास पलता था,",
    english: "had grown fearless,",
  },
  "sarga-6-713": {
    meaning: "केवल अर्जुन के लिए उसे,",
    english: "that weapon, only for Arjuna,",
  },
  "sarga-6-714": {
    meaning: "राधेय सँभालता चला आ रहा था।",
    english: "Radheya had been preserving.",
  },
  "sarga-6-715": {
    meaning: "वह काल-सर्पिणी की जिह्वा,",
    english: "That tongue of the serpent of death,",
  },
  "sarga-6-716": {
    meaning: "वह अटल मृत्यु की सगी बहन,",
    english: "that own sister of certain death,",
  },
  "sarga-6-717": {
    meaning: "घातकता की वाहिनी शक्ति,",
    english: "that force carrying fatal power,",
  },
  "sarga-6-718": {
    meaning: "यम की प्रचंड अग्नि-रस वाली शक्ति,",
    english: "that fierce fire-essence of Yama,",
  },
  "sarga-6-719": {
    meaning: "लपट मारती आग-सी एकघ्नी,",
    english: "the single-slayer, flickering like flame,",
  },
  "sarga-6-720": {
    meaning: "तरकश छोड़ बाहर आ गई।",
    english: "came out from the quiver.",
  },
  "sarga-6-721": {
    meaning: "चाँदनी मद्धिम पड़ गई, युद्धभूमि में,",
    english: "Moonlight grew dim, and in the battlefield,",
  },
  "sarga-6-722": {
    meaning: "दाहक उज्ज्वलता छा गई।",
    english: "a scorching brightness spread.",
  },
  "sarga-6-723": {
    meaning: "कर्ण ने भाग्य को ठोंककर उसे,",
    english: "Karna, striking at fate,",
  },
  "sarga-6-724": {
    meaning: "अंततः दानव पर छोड़ दिया।",
    english: "finally released it upon the demon.",
  },
  "sarga-6-725": {
    meaning: "कुरुपति को व्याकुल देखकर,",
    english: "Seeing the Kuru king distressed,",
  },
  "sarga-6-726": {
    meaning: "फिर उसने अपना मुख दूसरी ओर मोड़ लिया।",
    english: "he then turned his face away.",
  },
  "sarga-6-727": {
    meaning: "उस असुर-प्राण को बेधकर,",
    english: "Piercing that demon life,",
  },
  "sarga-6-728": {
    meaning: "सबकी दृष्टि को क्षण-भर भयभीत करके,",
    english: "terrifying every eye for a moment,",
  },
  "sarga-6-729": {
    meaning: "एकघ्नी ऊपर विलीन हो गई,",
    english: "the single-slayer vanished upward,",
  },
  "sarga-6-730": {
    meaning: "आकाश को प्रकाशित करती हुई।",
    english: "illuminating the sky.",
  },
  "sarga-6-731": {
    meaning: "धमाके से धरती धँसकर उछल पड़ी,",
    english: "With the impact, the earth sank and leapt up,",
  },
  "sarga-6-732": {
    meaning: "जब पर्वताकार दैत्य गिरा।",
    english: "as the mountain-like demon fell.",
  },
  "sarga-6-733": {
    meaning: "चारों ओर 'हा! हा!' की,",
    english: "All around, cries of 'Ha! Ha!'",
  },
  "sarga-6-734": {
    meaning: "व्याकुल पुकार पांडव-दल में मच गई।",
    english: "rose in panic through the Pandava ranks.",
  },
  "sarga-6-735": {
    meaning: "नरवीर युधिष्ठिर, नकुल और भीम,",
    english: "The heroic Yudhishthira, Nakula, and Bhima,",
  },
  "sarga-6-736": {
    meaning: "कहीं कोई धीर नहीं रह सका।",
    english: "none could remain composed.",
  },
  "sarga-6-737": {
    meaning: "जो जहाँ खड़ा था, वहीं,",
    english: "Wherever each stood, there itself,",
  },
  "sarga-6-738": {
    meaning: "गंभीर करुण क्रंदन करने लगा।",
    english: "he began to lament deeply.",
  },
  "sarga-6-739": {
    meaning: "सारी सेना चीख रही थी,",
    english: "The whole army was screaming,",
  },
  "sarga-6-740": {
    meaning: "सब लोग व्याकुल होकर बिलख रहे थे।",
    english: "everyone was anxious and sobbing.",
  },
  "sarga-6-741": {
    meaning: "पर यह बहुत विचित्र बात थी कि,",
    english: "But it was a very strange thing that,",
  },
  "sarga-6-742": {
    meaning: "नटनागर अपनी हँसी रोक नहीं पा रहे थे।",
    english: "the master of play could not restrain his smile.",
  },
  "sarga-6-743": {
    meaning: "क्या सिर से कोई विपत्ति टल गई थी,",
    english: "Had some danger passed from their heads,",
  },
  "sarga-6-744": {
    meaning: "या मन-ही-मन कोई विजय मिल गई थी?",
    english: "or had some inward victory been gained?",
  },
  "sarga-6-745": {
    meaning: "क्या बात हुई? क्या देखकर,",
    english: "What had happened? Seeing what,",
  },
  "sarga-6-746": {
    meaning: "केशव इस तरह संशय से मुक्त हो गए?",
    english: "had Keshava become so free from doubt?",
  },
  "sarga-6-747": {
    meaning: "लेकिन युद्ध को जीतकर,",
    english: "But having won the battle,",
  },
  "sarga-6-748": {
    meaning: "अपनी सेना को प्रसन्न करके,",
    english: "having pleased his army,",
  },
  "sarga-6-749": {
    meaning: "घने गुंजार से घिरा हुआ,",
    english: "encircled by deep resounding praise,",
  },
  "sarga-6-750": {
    meaning: "महान जयकारों से पूजित होकर,",
    english: "worshiped by supreme cries of victory,",
  },
  "sarga-6-751": {
    meaning: "राधेय युद्ध से चला, मन में कहीं खोया हुआ।",
    english: "Radheya left the battle, lost somewhere within himself.",
  },
  "sarga-6-752": {
    meaning: "वह जय-घोष की झंकार से भी आगे कहीं सोया हुआ था।",
    english: "He was asleep somewhere beyond the ringing victory cries.",
  },
  "sarga-6-753": {
    meaning: "हारी हुई पांडव-सेना में भगवान हँस रहे थे,",
    english: "Among the defeated Pandava army, the Lord was smiling,",
  },
  "sarga-6-754": {
    meaning: "पर जीतकर भी कर्ण के प्राण हारे हुए-से थे।",
    english: "but even after victory, Karna's life felt defeated.",
  },
  "sarga-6-755": {
    meaning: "क्या सचमुच विजय के लिए केवल बल नहीं चाहिए?",
    english: "Is it true that victory does not require strength alone?",
  },
  "sarga-6-756": {
    meaning: "कुछ बुद्धि का आघात और कुछ छल-छद्म-कौशल भी चाहिए?",
    english: "Does it also require the strike of intellect and skill in deception?",
  },
  "sarga-6-757": {
    meaning: "क्या यह भाग्य का आघात है?",
    english: "Is this a blow of fate?",
  },
  "sarga-6-758": {
    meaning: "कैसी अनोखी बात है!",
    english: "What a strange thing this is!",
  },
  "sarga-6-759": {
    meaning: "किसी के आँसुओं की डोर में मोती छिपे आते हैं,",
    english: "Pearls come hidden on the thread of someone's tears,",
  },
  "sarga-6-760": {
    meaning: "और कहीं अभिशाप ही आनंद के उच्चार में हँसता है।",
    english: "and elsewhere a curse itself laughs in the cry of joy.",
  },
  "sarga-6-761": {
    meaning: "पर यही कर्ण की जीवन-कथा है,",
    english: "But this is the life-story of Karna,",
  },
  "sarga-6-762": {
    meaning: "नियति और भाग्य का संकेत व्यर्थ नहीं है।",
    english: "the sign of destiny and fate is not meaningless.",
  },
  "sarga-6-763": {
    meaning: "जो मुसीबत को झेल नहीं सकता,",
    english: "One who cannot endure hardship,",
  },
  "sarga-6-764": {
    meaning: "जो निराशा से खेल नहीं सकता,",
    english: "who cannot play with despair,",
  },
  "sarga-6-765": {
    meaning: "जो बंधन की श्रृंखला तोड़कर,",
    english: "who, breaking the chain of bondage,",
  },
  "sarga-6-766": {
    meaning: "जोर लगाकर आगे नहीं बढ़ सकता, वह पुरुष कैसा?",
    english: "cannot force his way forward, what kind of man is he?",
  },
};

for (const filePath of files) {
  const chapter = JSON.parse(readFileSync(filePath, "utf8"));

  chapter.sections = chapter.sections.map((section) => ({
    ...section,
    lines: section.lines.map((line) => ({
      ...line,
      ...(annotations[line.id] ?? {}),
    })),
  }));

  writeFileSync(filePath, `${JSON.stringify(chapter, null, 2)}\n`);
}

console.log("Seeded Hindi meanings and English translations for all sarga-6 lines.");
