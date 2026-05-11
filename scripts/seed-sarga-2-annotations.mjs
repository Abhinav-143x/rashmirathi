import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const files = [
  path.join(ROOT, "content", "sarga-2.json"),
  path.join(ROOT, "public", "content", "sarga-2.json"),
];

const annotations = {
  "sarga-2-1": {
    meaning: "पहाड़ी ढलान के ऊपर एक शांत और विरल वन सुशोभित है।",
    english: "Above the hillside, a cool and sparse forest shines in quiet beauty.",
  },
  "sarga-2-2": {
    meaning: "कहीं छोटे झरने चमकते हैं और कहीं निर्मल जलधाराएँ गिरती हैं।",
    english: "Here springs glitter, and there pure streams fall in bright cascades.",
  },
  "sarga-2-3": {
    meaning: "जहाँ भूमि समतल और सुंदर है, वहाँ पत्थर दिखाई नहीं देते।",
    english: "Where the ground is level and lovely, no stones are seen.",
  },
  "sarga-2-4": {
    meaning: "हरीतिमा के बीच एक विस्तृत और पवित्र कुटिया खड़ी है।",
    english: "Amid the greenery stands a broad and sacred hermitage hut.",
  },
  "sarga-2-5": {
    meaning: "आस-पास कटे हुए पीले धान के खेत सुंदर लगते हैं।",
    english: "Around it, harvested yellow paddy fields look pleasing.",
  },
  "sarga-2-6": {
    meaning: "खरगोश, चूहे, गिलहरियाँ और कबूतर घूम-घूमकर दाने खा रहे हैं।",
    english: "Rabbits, mice, squirrels, and pigeons wander about, eating scattered grains.",
  },
  "sarga-2-7": {
    meaning: "कुछ पशु उनींदे और आलसी बैठे हैं, कुछ अपने बच्चों को चाट रहे हैं।",
    english: "Some sit drowsy and lazy, while others lick and tend their young.",
  },
  "sarga-2-8": {
    meaning: "कुछ भूसा खा रहे हैं और सभी गौधन बहुत संतुष्ट दिखाई देते हैं।",
    english: "Some eat chaff, and all the cattle appear deeply content.",
  },
  "sarga-2-9": {
    meaning: "हवन की अग्नि बुझ चुकी है, पर उसकी सुगंध से हवा अभी भी भरी है।",
    english: "The sacrificial fire has gone out, yet its fragrance still fills the air.",
  },
  "sarga-2-10": {
    meaning: "वह भीनी महक मन और प्राण में मादक आनंद भरती है।",
    english: "That gentle fragrance carries a sweet intoxication into the breath.",
  },
  "sarga-2-11": {
    meaning: "धुएँ से रँगे पेड़ों के काले पत्ते बहुत अनोखे लगते हैं।",
    english: "The dark leaves of the trees, brushed with smoke, appear strange and tender.",
  },
  "sarga-2-12": {
    meaning: "वे ऐसे लगते हैं जैसे आलसी शिशु की काजलभरी आँखें झपक रही हों।",
    english: "They seem like the sleepy, kohl-dark eyes of a child blinking slowly.",
  },
  "sarga-2-13": {
    meaning: "मृग सुखद धूप में बैठे जुगाली कर रहे हैं।",
    english: "Deer sit in the pleasant sunlight, chewing the cud.",
  },
  "sarga-2-14": {
    meaning: "वन के जीव अपने बिलों से बाहर निकलकर निश्चिंत घूम रहे हैं।",
    english: "Forest creatures come out of their holes and roam without fear.",
  },
  "sarga-2-15": {
    meaning: "आम की छोटी झुकी डालियों पर तपस्वी वस्त्र सूख रहे हैं।",
    english: "Ascetic garments dry upon the small drooping branches of mango trees.",
  },
  "sarga-2-16": {
    meaning: "नीचे इंगुद फल जैसे चिकने पत्थर बिखरे पड़े हैं।",
    english: "Below lie smooth stones scattered like ingud fruits.",
  },
  "sarga-2-17": {
    meaning: "एक ओर मृगचर्म, कुश, पलाश और कमंडल जैसे तप के साधन रखे हैं।",
    english: "On one side lie the tools of austerity: deerskin, darbha grass, palash, and water pot.",
  },
  "sarga-2-18": {
    meaning: "दूसरी ओर धनुष, तूणीर, बाण और भयानक बरछे टँगे हुए हैं।",
    english: "On the other side hang bows, quivers, arrows, and fearsome spears.",
  },
  "sarga-2-19": {
    meaning: "घास की कुटिया के द्वार पर एक चमकता हुआ परशु रखा है।",
    english: "At the grass hut’s doorway, a shining axe gleams.",
  },
  "sarga-2-20": {
    meaning: "वह लोहे के दंड पर जड़े आधे सूर्य जैसा चमक रहा है।",
    english: "It seems like half a sun fixed upon an iron shaft.",
  },
  "sarga-2-21": {
    meaning: "मृगचर्म और कुश देखकर श्रद्धा बढ़ती है, पर परशु देखकर मन डरता है।",
    english: "The deerskin and darbha inspire reverence, but the axe fills the heart with fear.",
  },
  "sarga-2-22": {
    meaning: "समझ में नहीं आता कि यह युद्ध-शिविर है या तपोभूमि।",
    english: "One cannot tell whether this is a war camp or a field of penance.",
  },
  "sarga-2-23": {
    meaning: "जिसका यह हवनकुंड है, क्या ये धनुष और कुठार भी उसी के हैं?",
    english: "Do these bows and axes belong to the same one whose sacrificial altar this is?",
  },
  "sarga-2-24": {
    meaning: "जिस मुनि की यह स्रुवा है, उसकी तलवार कैसे हो सकती है?",
    english: "How can the sage who owns this ladle also possess a sword?",
  },
  "sarga-2-25": {
    meaning: "क्या वीरता तपोवन में पुण्य कमाने आई है?",
    english: "Has valor come to the hermitage to earn spiritual merit?",
  },
  "sarga-2-26": {
    meaning: "या संन्यास-साधना शरीर की शक्ति जगाने के लिए है?",
    english: "Or is ascetic discipline meant to awaken the body’s power?",
  },
  "sarga-2-27": {
    meaning: "क्या मन ने शरीर को सिद्ध यंत्र बनाया है, या शस्त्रों में सिद्धि पाई है?",
    english: "Has the mind perfected the body as an instrument, or found perfection in weapons?",
  },
  "sarga-2-28": {
    meaning: "या कोई वीर किसी योगी से युद्ध की युक्ति सीखने आया है?",
    english: "Or has some warrior come to learn strategy from a yogi?",
  },
  "sarga-2-29": {
    meaning: "परशु और तप दोनों ही वीरों की शोभा हैं।",
    english: "The axe and austerity are both ornaments of the heroic.",
  },
  "sarga-2-30": {
    meaning: "कायर न तो तप कर सकता है और न तलवार उठा सकता है।",
    english: "The coward can neither practice austerity nor lift a sword.",
  },
  "sarga-2-31": {
    meaning: "तप मनुष्य को दिव्य बनाता है और उसके भीतर के छह विकारों से लड़ाता है।",
    english: "Austerity makes a person divine and helps him fight the six inner passions.",
  },
  "sarga-2-32": {
    meaning: "लेकिन शरीर की युद्धभूमि में तलवार ही काम आती है।",
    english: "But on the battlefield of the body, it is the sword that does the work.",
  },
  "sarga-2-33": {
    meaning: "यहाँ धनुष धारण करने वाला तपस्वी पुरुष कौन है?",
    english: "Who is this ascetic man here who also bears a bow?",
  },
  "sarga-2-34": {
    meaning: "कौन है जो यज्ञाग्नि और तलवार दोनों की एक साथ पूजा करता है?",
    english: "Who worships sacrificial fire and sword together?",
  },
  "sarga-2-35": {
    meaning: "इतिहास बताता है कि संसार में ऐसा केवल एक ही पुरुष हुआ है।",
    english: "History says that only one such man has appeared in the world.",
  },
  "sarga-2-36": {
    meaning: "युद्ध में वह टेढ़े काल की तरह क्रोधी और तप में महान सूर्य जैसा था।",
    english: "In battle he was wrathful like crooked Time; in penance he was like the mighty sun.",
  },
  "sarga-2-37": {
    meaning: "उसके मुख में वेद, पीठ पर तरकस और हाथ में कठोर निर्मल कुठार था।",
    english: "The Vedas were on his lips, a quiver on his back, and a pure hard axe in his hand.",
  },
  "sarga-2-38": {
    meaning: "शाप और बाण दोनों ही उस महान ऋषि के सहारे थे।",
    english: "Curse and arrow alike were the supports of that great sage.",
  },
  "sarga-2-39": {
    meaning: "यह उसी बलशाली महामुनि परशुराम की कुटिया है।",
    english: "This is the hut of that powerful great sage, Parashurama.",
  },
  "sarga-2-40": {
    meaning: "वे भृगुवंश के पवित्र वंशधर, व्रती, वीर और प्रतिज्ञा निभाने वाले हैं।",
    english: "He is the sacred descendant of Bhrigu, disciplined, heroic, and faithful to his vows.",
  },
  "sarga-2-41": {
    meaning: "हाँ, वही परशुराम कर्ण की जाँघों पर सिर रखे हुए हैं।",
    english: "Yes, that very Parashurama rests his head upon Karna’s thighs.",
  },
  "sarga-2-42": {
    meaning: "वे आश्रम से थोड़ा हटकर वृक्ष के नीचे सो रहे हैं।",
    english: "A little away from the hermitage, he sleeps beneath a great tree.",
  },
  "sarga-2-43": {
    meaning: "माघ की मधुर धूप पत्तों से छन-छनकर आ रही है।",
    english: "The gentle sunlight of Magh filters softly through the leaves.",
  },
  "sarga-2-44": {
    meaning: "वह धूप मुनि के थके शरीर पर पड़कर उसकी थकान मिटा रही है।",
    english: "It falls upon the sage’s tired body and soothes his fatigue.",
  },
  "sarga-2-45": {
    meaning: "कर्ण भक्ति और प्रेम में मग्न होकर मुग्ध-सा बैठा है।",
    english: "Karna sits absorbed in devotion, enchanted by reverence.",
  },
  "sarga-2-46": {
    meaning: "वह कभी गुरु की जटा पर हाथ फेरता है, कभी उनकी पीठ सहलाता है।",
    english: "At times he strokes the guru’s matted hair, at times he gently rubs his back.",
  },
  "sarga-2-47": {
    meaning: "वह ध्यान रखता है कि गुरु के शरीर पर चींटियाँ न चढ़ें और कोई तिनका-पत्ता न गिरे।",
    english: "He watches that no ants climb the guru’s body and no straw or leaf falls upon him.",
  },
  "sarga-2-48": {
    meaning: "कर्ण सावधान है कि गुरु की हल्की नींद टूट न जाए।",
    english: "Karna remains alert so that the guru’s delicate sleep is not disturbed.",
  },
  "sarga-2-49": {
    meaning: "कर्ण सोचता है कि वृद्ध शरीर, तप से दुर्बल काया और ऊपर से शस्त्र-प्रयोग।",
    english: "Karna thinks of the old body, the frame thinned by penance, and still the handling of weapons.",
  },
  "sarga-2-50": {
    meaning: "मेरे कारण गुरुदेव पर असमय श्रम का भारी भार आ पड़ा है।",
    english: "Because of me, this untimely burden of labor has fallen upon my revered teacher.",
  },
  "sarga-2-51": {
    meaning: "फिर भी वृद्ध होने पर भी उनके अंगों में अद्भुत क्षमता है।",
    english: "Yet even in age, his limbs hold astonishing strength.",
  },
  "sarga-2-52": {
    meaning: "और वे दिन-रात मुझ पर कितनी ममता दिखाते हैं।",
    english: "And day and night, how much affection he shows toward me.",
  },
  "sarga-2-53": {
    meaning: "गुरु कहते हैं कि यदि तू पुष्टिकारक भोजन नहीं खाएगा।",
    english: "The guru says: Child, if you do not eat nourishing food,",
  },
  "sarga-2-54": {
    meaning: "तो मेरे कठोर शिक्षण को कैसे सह पाएगा?",
    english: "how will you endure the severity of my training?",
  },
  "sarga-2-55": {
    meaning: "यदि तू खाने-पीने में भी मेरा अनुकरण करेगा।",
    english: "If you follow me even in food and drink,",
  },
  "sarga-2-56": {
    meaning: "तो तेरा रक्त सूख जाएगा और केवल हड्डियों का ढाँचा बचेगा।",
    english: "your blood will dry up and only a frame of bones will remain.",
  },
  "sarga-2-57": {
    meaning: "गुरु कहते हैं, सोच कि मैं तुझे कितनी कठोर साधना में चलाता हूँ।",
    english: "Think, he says, how sternly I make you train.",
  },
  "sarga-2-58": {
    meaning: "एक दिन में ही तेरे शरीर का बहुत रक्त और बल जल जाता है।",
    english: "Each day, no less than a measure of your blood and strength is burned away.",
  },
  "sarga-2-59": {
    meaning: "यदि तू संन्यासी जैसा भोजन करेगा तो उस कमी की पूर्ति कैसे होगी?",
    english: "If you live like an ascetic, how will that loss be restored?",
  },
  "sarga-2-60": {
    meaning: "इस तरह तो भयंकर भूख तुझे भीतर से खा जाएगी।",
    english: "In this way, destructive hunger will eat you from within.",
  },
  "sarga-2-61": {
    meaning: "गुरु कहते हैं कि मांसपेशियाँ पत्थर जैसी और भुजाएँ लोहे जैसी निर्भय होनी चाहिए।",
    english: "The muscles must be like stone, the fearless arms like iron.",
  },
  "sarga-2-62": {
    meaning: "नस-नस में आग की लहर दौड़े, तभी जवानी सचमुच विजय पाती है।",
    english: "Only when fire runs through every vein does youth truly win victory.",
  },
  "sarga-2-63": {
    meaning: "ब्राह्मण होने से क्या अभी से भोजन पर रोक लगा लेनी चाहिए?",
    english: "What if you are a Brahmin? Must you begin restraining food from now itself?",
  },
  "sarga-2-64": {
    meaning: "घोर तपस्या जीवन के चौथे आश्रम, यानी वृद्धावस्था में करना।",
    english: "Perform severe austerity when the fourth stage of life arrives.",
  },
  "sarga-2-65": {
    meaning: "ब्राह्मण का धर्म त्याग है, पर क्या बालक भी त्यागी बना दिए जाएँ?",
    english: "Renunciation may be a Brahmin’s duty, but must even children become renouncers?",
  },
  "sarga-2-66": {
    meaning: "क्या जन्म से ही वे केवल भिक्षा और चुने हुए दानों के जीवन से प्रेम करें?",
    english: "Must they love a life of gleaning and alms from the very moment of birth?",
  },
  "sarga-2-67": {
    meaning: "समाज की व्यवस्था विचित्र है: ज्ञान ब्राह्मण के घर में रखा गया।",
    english: "Strange is society’s design: knowledge was placed in the Brahmin’s house.",
  },
  "sarga-2-68": {
    meaning: "धन वैश्य के घर में बरसा और तलवार क्षत्रिय के हाथ में दे दी गई।",
    english: "Pearls fell in the merchant’s home, while the sword was placed in the Kshatriya’s hand.",
  },
  "sarga-2-69": {
    meaning: "तलवार स्वभाव से उद्दंड होती है, और राजा भी अक्सर उद्दंड हो जाते हैं।",
    english: "The sword is arrogant by nature, and kings too become arrogant.",
  },
  "sarga-2-70": {
    meaning: "इसीलिए वे बार-बार युद्ध के बाजे बजाते रहते हैं।",
    english: "That is why they keep the drums of war sounding again and again.",
  },
  "sarga-2-71": {
    meaning: "निरस्त्र ज्ञानी ब्राह्मण क्या करे? बिना तलवार उसका मन डरता है।",
    english: "What can the learned, weaponless Brahmin do? Without a sword, his heart is afraid.",
  },
  "sarga-2-72": {
    meaning: "राजा उसे मान देता है, इसलिए वह भी राजा का आदर करता है।",
    english: "The king grants him honor, and so he too respects the king.",
  },
  "sarga-2-73": {
    meaning: "यहाँ ब्राह्मण की बात कौन सुनता है? सब अपने मन की करते हैं।",
    english: "Who listens to the Brahmin here? Everyone follows only his own will.",
  },
  "sarga-2-74": {
    meaning: "राजाओं की युद्ध-लालसा धरती को रक्त में डुबो रही है।",
    english: "The kings’ hunger for war is drowning the earth in blood.",
  },
  "sarga-2-75": {
    meaning: "युद्ध संसार से दुख और दीनता मिटाने के लिए नहीं हो रहा।",
    english: "War is not being fought to remove sorrow and poverty from the world.",
  },
  "sarga-2-76": {
    meaning: "युद्ध शोषक और भटके मनुष्य को धर्म पर लाने के लिए भी नहीं है।",
    english: "Nor is it meant to bring the exploitative and misguided back to righteousness.",
  },
  "sarga-2-77": {
    meaning: "युद्ध केवल इसलिए है कि राजा और अधिक सुखी और सम्मानित हों।",
    english: "War is only so that kings may become more comfortable and honored.",
  },
  "sarga-2-78": {
    meaning: "उन्हें अधिक प्रजा मिले और उनका अहंकार और बढ़ जाए।",
    english: "So that they may gain more subjects and grow even more proud.",
  },
  "sarga-2-79": {
    meaning: "युद्ध केवल उनके मन के बनाए हुए अभावों से छूटने के लिए है।",
    english: "War is only to free them from imagined insufficiencies.",
  },
  "sarga-2-80": {
    meaning: "राज्य की सीमा बढ़े ताकि वे अधिक लोगों को लूट सकें।",
    english: "They expand their borders so they may plunder more people.",
  },
  "sarga-2-81": {
    meaning: "युद्ध केवल सत्ता बढ़ाने के लिए है, ताकि कोई पत्ता भी न हिले।",
    english: "War is only to increase power, so that not even a leaf may move against them.",
  },
  "sarga-2-82": {
    meaning: "कोई भी कहीं भी राजा के विरोध में कुछ न बोल सके।",
    english: "So that no one, anywhere, ever speaks against the king.",
  },
  "sarga-2-83": {
    meaning: "जैसे-जैसे विजय मिलती है, राजा का अहंकार बढ़ता जाता है।",
    english: "With every victory, the ruler’s arrogance keeps growing.",
  },
  "sarga-2-84": {
    meaning: "वह और अधिक बल से समाज के सिर पर चढ़ बैठता है।",
    english: "He climbs more heavily upon the head of society.",
  },
  "sarga-2-85": {
    meaning: "अब स्थिति यह है कि जो कुछ भी है, वह सब राजा की शक्ति पर निर्भर है।",
    english: "Now the condition is such that everything rests upon the king’s power.",
  },
  "sarga-2-86": {
    meaning: "ब्राह्मण केवल शंख और गंगाजल लिए सामने खड़ा रह गया है।",
    english: "The Brahmin stands before him only with conch and Ganga water in hand.",
  },
  "sarga-2-87": {
    meaning: "ब्राह्मण में वह तेज कहाँ है जो अविवेकी राजा को रोक सके?",
    english: "Where is the Brahmin’s fire that could restrain an unwise king?",
  },
  "sarga-2-88": {
    meaning: "राजा जैसे ही गलत रास्ते पर पाँव रखे, उसे तुरंत टोक सके।",
    english: "That could rebuke him the moment he sets foot on the wrong path?",
  },
  "sarga-2-89": {
    meaning: "यदि ब्राह्मण कह भी दे, तो उसकी बात कौन सुनता है?",
    english: "Even if the Brahmin speaks, who listens to him?",
  },
  "sarga-2-90": {
    meaning: "यहाँ तो राजा रोज ब्राह्मण का अपमान करवाता है।",
    english: "Here the king has the Brahmin insulted every day.",
  },
  "sarga-2-91": {
    meaning: "यहाँ पंडित और तपस्वी की बात नहीं चलती।",
    english: "Here neither the scholar nor the ascetic has any influence.",
  },
  "sarga-2-92": {
    meaning: "प्रजा दिन-रात विजयी और यशस्वी राजा की जय बोलती रहती है।",
    english: "The people cry day and night: victory to the triumphant, glorious king.",
  },
  "sarga-2-93": {
    meaning: "जो पूरे समाज का सिर था, वही अब अपमान पा रहा है।",
    english: "The one who was once the head of society now receives dishonor.",
  },
  "sarga-2-94": {
    meaning: "जो भी फूल खिलता है, वह बलवान भुजा पर चढ़ता जाता है।",
    english: "Every flower that blooms is offered upon the powerful arm.",
  },
  "sarga-2-95": {
    meaning: "चारों ओर लोभ की आग और भोग की विजय दिखाई देती है।",
    english: "All around burns the fire of greed; all around pleasure is triumphant.",
  },
  "sarga-2-96": {
    meaning: "पाप के भार से पृथ्वी हर पल दबती और धँसती जा रही है।",
    english: "Under the weight of sin, the earth sinks lower every moment.",
  },
  "sarga-2-97": {
    meaning: "जब तक भोगी राजा प्रजाओं के नेता कहलाते रहेंगे।",
    english: "As long as pleasure-loving kings are called leaders of the people,",
  },
  "sarga-2-98": {
    meaning: "जब तक ज्ञान, त्याग और तप को श्रेष्ठ स्थान नहीं मिलेगा।",
    english: "as long as knowledge, renunciation, and austerity do not receive the highest place,",
  },
  "sarga-2-99": {
    meaning: "जो लोग भोजन-वस्त्र से वंचित और दीनता में जीवन बिताते हैं।",
    english: "those who live without proper food or clothing, in poverty,",
  },
  "sarga-2-100": {
    meaning: "जो अपमान सहकर भी मनुष्यता की चिंता करते हैं।",
    english: "who endure insult yet remain concerned for humanity,",
  },
  "sarga-2-101": {
    meaning: "कवि, विद्वान, वैज्ञानिक, कलाकार, पंडित और ज्ञानी।",
    english: "poets, scholars, scientists, artists, pundits, and wise people,",
  },
  "sarga-2-102": {
    meaning: "जो सोने पर नहीं, कल्पना, ज्ञान और उज्ज्वल चरित्र पर गर्व करते हैं।",
    english: "who take pride not in gold, but in imagination, knowledge, and bright character,",
  },
  "sarga-2-103": {
    meaning: "जब तक संसार इन विभूतियों को पहचान नहीं लेगा।",
    english: "until the world recognizes these great treasures,",
  },
  "sarga-2-104": {
    meaning: "जब तक उन्हें राजाओं से अधिक पूज्य नहीं मानेगा।",
    english: "until it regards them as more worthy of worship than kings,",
  },
  "sarga-2-105": {
    meaning: "तब तक धरती इसी तरह आग में पड़ी व्याकुल होती रहेगी।",
    english: "until then the earth will remain restless, lying in fire like this.",
  },
  "sarga-2-106": {
    meaning: "वह चाहे कुछ भी करे, दुखों से मुक्ति नहीं पा सकेगी।",
    english: "Whatever she may do, she will not be freed from suffering.",
  },
  "sarga-2-107": {
    meaning: "समझाते-समझाते जीभ थक गई और आशा को गहरी चोट लगी।",
    english: "The tongue has grown tired from explaining; aspiration has been deeply wounded.",
  },
  "sarga-2-108": {
    meaning: "राजा तलवार की भाषा छोड़कर और कुछ समझता ही नहीं।",
    english: "The king understands nothing except the language of the sword.",
  },
  "sarga-2-109": {
    meaning: "रोक-टोक से वह नहीं सुनेगा, क्योंकि राजसमाज अविवेकी है।",
    english: "He will not listen to restraint or warning, for the royal class is thoughtless.",
  },
  "sarga-2-110": {
    meaning: "यह मदांध सत्ता कठोर और गर्दन काटने वाले कुठार की अधिकारी है।",
    english: "This intoxicated power deserves the ruthless axe that cuts necks.",
  },
  "sarga-2-111": {
    meaning: "इसीलिए परशुराम कहते हैं कि हे ज्ञानियों, तलवार धारण करो।",
    english: "Therefore Parashurama says: O wise ones, take up the sword.",
  },
  "sarga-2-112": {
    meaning: "धरती के उस आतंक को मिटाओ जिसे कोई और नहीं मिटा सका।",
    english: "Remove the terror of the earth that no one else has been able to remove.",
  },
  "sarga-2-113": {
    meaning: "कर्ण याद करता है कि गुरुवर रोज कहते हैं—तलवार बहुत भयावह है।",
    english: "Karna recalls that his teacher often says: the sword is greatly fearsome.",
  },
  "sarga-2-114": {
    meaning: "इसको उठाने का अधिकार संसार में हर व्यक्ति को नहीं है।",
    english: "Not everyone in the world has the right to lift it.",
  },
  "sarga-2-115": {
    meaning: "इसे वही उठा सकता है जो कठोर भी हो और कोमल भी।",
    english: "Only one who is both stern and tender may take it up.",
  },
  "sarga-2-116": {
    meaning: "जिसमें धैर्य, वीरता और तपस्या का बल हो।",
    english: "One who has patience, courage, and the strength of austerity.",
  },
  "sarga-2-117": {
    meaning: "सच्चा वीर जब शत्रु पर तलवार उठाता है।",
    english: "The true hero, when he raises the sword against an enemy,",
  },
  "sarga-2-118": {
    meaning: "तब भी मनुष्यता के महान गुणों को नहीं भूलता।",
    english: "does not forget the great virtues of humanity.",
  },
  "sarga-2-119": {
    meaning: "जिसके भीतर तलवार को मर्यादा में रखने की क्षमता हो, केवल उसे पास आने दो।",
    english: "Only the one who can keep the sword within limits should be allowed near it.",
  },
  "sarga-2-120": {
    meaning: "परशुराम कहते हैं कि तप, विवेक और संयम से युक्त ब्राह्मण-स्वभाव के बिना किसी को तलवार न उठाने दो।",
    english: "Parashurama says: let none lift the sword unless he has the Brahmin-like nature of discipline, wisdom, and restraint.",
  },
  "sarga-2-121": {
    meaning: "कर्ण सोचता है कि जब-जब वह धनुष-बाण उठाकर अपना कौशल दिखाता है,",
    english: "Karna thinks that whenever he takes up the bow and arrows and displays his skill,",
  },
  "sarga-2-122": {
    meaning: "गुरु का आशीर्वाद सुनकर वह अपने को बहुत धन्य समझता है।",
    english: "he feels blessed and fulfilled on hearing his teacher's blessings.",
  },
  "sarga-2-123": {
    meaning: "परशुराम उसे प्यार से कहते हैं कि बेटा, तुमने कैसा अद्भुत तीर चलाया है।",
    english: "Parashurama lovingly says: live long, child; what a remarkable arrow you have shot.",
  },
  "sarga-2-124": {
    meaning: "उस तीर के प्रभाव से उधर वन जल उठा और इधर जलधारा फूट पड़ी।",
    english: "By its force the forest blazed on one side, while a stream burst forth on the other.",
  },
  "sarga-2-125": {
    meaning: "गुरु कहते हैं कि मुझे डर था कि क्या ब्राह्मणों की वीरता मेरे साथ ही मर जाएगी।",
    english: "The teacher says he feared that Brahmin valor might die with him.",
  },
  "sarga-2-126": {
    meaning: "क्या परशुराम की स्मृति ब्राह्मण जाति में आगे नहीं बचेगी?",
    english: "Would the memory of Parashurama not remain alive in the Brahmin lineage?",
  },
  "sarga-2-127": {
    meaning: "लेकिन तुम्हें पाकर इस वन में मेरा हृदय ठंडा और संतुष्ट हो गया है।",
    english: "But having found you in this forest, my heart has become cool and content.",
  },
  "sarga-2-128": {
    meaning: "तुम अवश्य मेरे भीतर के तेज और अग्नि को आगे लेकर जाओगे।",
    english: "You will surely carry forward the fire and brilliance that live in me.",
  },
  "sarga-2-129": {
    meaning: "गुरु आशीर्वाद देते हैं कि हे ब्राह्मण कुमार, तुम अमर कीर्ति पाओगे।",
    english: "The teacher blesses him: O Brahmin youth, may you earn undying fame.",
  },
  "sarga-2-130": {
    meaning: "तुम भी एक दिन धरती से अत्याचारी क्षत्रियों का अभिमान मिटा दोगे।",
    english: "One day you too will rid the earth of arrogant, oppressive Kshatriya power.",
  },
  "sarga-2-131": {
    meaning: "परशुराम को विश्वास है कि कवच-कुण्डल धारण करने वाला कर्ण अवश्य ब्राह्मण कुमार है।",
    english: "Parashurama is certain that Karna, wearing armor and earrings, must be a Brahmin youth.",
  },
  "sarga-2-132": {
    meaning: "वे सोचते हैं कि इतना भारी तप ब्राह्मण माता-पिता का पुत्र ही कर सकता है।",
    english: "He believes only the child of such austere Brahmin parents could perform such severe penance.",
  },
  "sarga-2-133": {
    meaning: "लेकिन कर्ण को 'ब्राह्मणकुमार' सुनकर भीतर से भय और ग्लानि होती है।",
    english: "But whenever Karna hears 'Brahmin youth,' his vows seem to tremble with fear and shame.",
  },
  "sarga-2-134": {
    meaning: "उसका मन अपने को धिक्कारता है और हृदय में अपराध-बोध जागता है।",
    english: "His mind condemns itself, and a feeling of guilt awakens in his heart.",
  },
  "sarga-2-135": {
    meaning: "वह सोचता है कि गुरु का प्रेम क्या कभी किसी को इस तरह चुभा होगा?",
    english: "He wonders whether a teacher's love has ever pained anyone in this way.",
  },
  "sarga-2-136": {
    meaning: "और क्या किसी शिष्य ने अपने गुरु को कभी इस तरह धोखा दिया होगा?",
    english: "And whether any disciple has ever deceived his teacher like this.",
  },
  "sarga-2-137": {
    meaning: "कर्ण अपने को समझाता है कि मेरा दोष क्या था, मैं और क्या कर सकता था?",
    english: "Karna argues with himself: what fault was mine, what else could I have done?",
  },
  "sarga-2-138": {
    meaning: "सारा अपमान पीकर भी मैं द्रोणाचार्य के पैरों में कैसे गिरता?",
    english: "After swallowing so much insult, how could I fall at Drona's feet?",
  },
  "sarga-2-139": {
    meaning: "और अगर पैरों पर गिरता भी, तो क्या वे मुझे गुप्त और श्रेष्ठ विद्या सिखाते?",
    english: "Even if I had done so, would he have taught me the deep and secret knowledge?",
  },
  "sarga-2-140": {
    meaning: "क्या वे एकलव्य की तरह मेरा भी अंगूठा नहीं कटवा देते?",
    english: "Would he not have made me sacrifice my thumb, as he did with Ekalavya?",
  },
  "sarga-2-141": {
    meaning: "कर्ण दुख में अपने जन्म को कोसता है कि तू क्यों जन्मा, और जन्मा तो वीर क्यों बना?",
    english: "In sorrow Karna curses his birth: why were you born, and if born, why were you made a hero?",
  },
  "sarga-2-142": {
    meaning: "कवच-कुण्डल से सजा शरीर भी समाज की दृष्टि में नीच माना गया।",
    english: "Even a body adorned with armor and earrings is treated as low in society's eyes.",
  },
  "sarga-2-143": {
    meaning: "जहाँ गुण की पहचान नहीं होती, ऐसा देश डूब जाना चाहिए।",
    english: "A land where merit is not recognized deserves to sink into the depths.",
  },
  "sarga-2-144": {
    meaning: "जहाँ बुद्धिमान लोग भी जाति और गोत्र के आधार पर ही सम्मान पाते हैं।",
    english: "There, even the wise receive honor only by the power of caste and lineage.",
  },
  "sarga-2-145": {
    meaning: "कोई यह नहीं पूछता कि तुम तपस्वी, वीर या दानी हो या नहीं।",
    english: "No one asks whether you are disciplined, brave, or generous.",
  },
  "sarga-2-146": {
    meaning: "सब केवल यही पूछते हैं कि तुम किस कुल पर गर्व करते हो।",
    english: "Everyone asks only which family or clan you claim with pride.",
  },
  "sarga-2-147": {
    meaning: "लेकिन मनुष्य क्या करे, जन्म लेना उसके हाथ में नहीं होता।",
    english: "But what can a human do? Birth is not in one's own hands.",
  },
  "sarga-2-148": {
    meaning: "अपनी जाति और कुल चुनना भी मनुष्य के वश की बात नहीं है।",
    english: "Choosing one's caste and lineage is also beyond a person's control.",
  },
  "sarga-2-149": {
    meaning: "कर्ण कहता है कि यदि विधाता मनुष्यों को मुट्ठी में भरकर भी फेंक दें,",
    english: "Karna says that even if the Creator gathered humans in his fist and scattered them,",
  },
  "sarga-2-150": {
    meaning: "और ब्रह्मलोक से उन्हें नीचे धरती पर बिखेर दें,",
    english: "even if he sprinkled them down from Brahmalok onto the earth,",
  },
  "sarga-2-151": {
    meaning: "तब भी यहाँ वे अलग-अलग जातियों में ही गिरेंगे और पहचाने जाएँगे।",
    english: "they would still fall into different castes and be known through them.",
  },
  "sarga-2-152": {
    meaning: "क्योंकि नीचे क्यारियाँ पहले से बनी हैं, बीज उनके बाहर कहाँ जा सकता है?",
    english: "For the beds are already marked below; where else can the seed go?",
  },
  "sarga-2-153": {
    meaning: "कौन किस कुल में जन्म लेता है, यह केवल संयोग की बात है।",
    english: "Who is born into which family is merely a matter of chance.",
  },
  "sarga-2-154": {
    meaning: "फिर भी छोटे कुल पर यहाँ कितने ही अपमान और आघात होते हैं।",
    english: "Yet a so-called lower family must still bear countless insults and blows.",
  },
  "sarga-2-155": {
    meaning: "यदि जाति छोटी मानी गई, तो लोगों को हमारे सभी गुण भी छोटे लगते हैं।",
    english: "If the caste is considered low, people see all our virtues as low as well.",
  },
  "sarga-2-156": {
    meaning: "और जाति बड़ी हो तो दोष होने पर भी लोग बड़े कहलाते रहते हैं।",
    english: "And if the caste is high, people remain honored even with countless faults.",
  },
  "sarga-2-157": {
    meaning: "कर्ण अपने गुरु को लेकर ऐसे ही चिंतन में अचल बैठा था।",
    english: "Karna sat motionless, absorbed in these thoughts about his teacher.",
  },
  "sarga-2-158": {
    meaning: "तभी कहीं से एक विषैला कीड़ा उसके आसन के नीचे घुस आया।",
    english: "Just then, a poisonous insect slipped beneath his seat from somewhere.",
  },
  "sarga-2-159": {
    meaning: "कठोर दाँतों वाला वह कीड़ा कर्ण की जाँघ को काट-काटकर खाने लगा।",
    english: "With hard, piercing teeth, it began gnawing into Karna's thigh.",
  },
  "sarga-2-160": {
    meaning: "वह मांस में छेद बनाकर धीरे-धीरे भीतर घुसने लगा।",
    english: "It made a wound in the flesh and slowly moved deeper inside.",
  },
  "sarga-2-161": {
    meaning: "कर्ण व्याकुल हो उठा, पर वह उस दुष्ट कीड़े पर हाथ कैसे रखता?",
    english: "Karna was distressed, but how could he place his hand on that cruel insect?",
  },
  "sarga-2-162": {
    meaning: "अंग हिलाए बिना वह किसी तरह उस कीड़े को कैसे पकड़ता?",
    english: "How could he catch it without moving his body?",
  },
  "sarga-2-163": {
    meaning: "जो कीड़ा भीतर धँस गया था, वहाँ तक उसका हाथ पहुँच नहीं सकता था।",
    english: "His hand could not reach the insect that had burrowed inside.",
  },
  "sarga-2-164": {
    meaning: "पाँव उठाए बिना कर्ण उस शत्रु को पकड़ भी नहीं सकता था।",
    english: "Without lifting his leg, Karna could not get at that enemy.",
  },
  "sarga-2-165": {
    meaning: "लेकिन पाँव हिलते ही गुरुवर की नींद टूट जाती।",
    english: "But the moment his leg moved, his revered teacher's sleep would break.",
  },
  "sarga-2-166": {
    meaning: "यह सोचकर कर्ण की भक्तिभरी छाती सहम गई।",
    english: "Thinking this, Karna's devoted heart trembled with concern.",
  },
  "sarga-2-167": {
    meaning: "उसने निश्चय किया कि यह कीड़ा रक्त पीना चाहता है तो पीने दूँगा।",
    english: "He decided: if this insect wants to drink blood, I shall let it drink.",
  },
  "sarga-2-168": {
    meaning: "पर गुरु की हल्की नींद तोड़ने का पाप मैं नहीं करूँगा।",
    english: "But I will not commit the sin of breaking my teacher's delicate sleep.",
  },
  "sarga-2-169": {
    meaning: "कर्ण मन को दबाकर आसन पर अचल बैठा रहा।",
    english: "Karna restrained his mind and remained still on the seat.",
  },
  "sarga-2-170": {
    meaning: "वह बिना आह निकाले पत्थर जैसी सहनशीलता धारण किए रहा।",
    english: "Without even a sigh, he held a stone-like endurance.",
  },
  "sarga-2-171": {
    meaning: "लेकिन रक्त की गर्म धार अचानक परशुराम के शरीर से लग गई।",
    english: "But suddenly the warm stream of blood touched Parashurama's body.",
  },
  "sarga-2-172": {
    meaning: "परशुराम जाग पड़े और रक्त देखकर मन में चकित हो गए।",
    english: "Parashurama awoke and was astonished to see the blood.",
  },
  "sarga-2-173": {
    meaning: "कर्ण झट से उठा और संकेतों में गुरु से अनुमति लेकर,",
    english: "Karna quickly rose and, with gestures, took his teacher's permission.",
  },
  "sarga-2-174": {
    meaning: "उसने घाव में उँगली डालकर कीड़े को बाहर निकाल दिया।",
    english: "Then he put his finger into the wound and pulled the insect out.",
  },
  "sarga-2-175": {
    meaning: "परशुराम बोले कि यह कैसी बड़ी मूर्खता कर डाली तुमने!",
    english: "Parashurama cried out: what great foolishness you have done!",
  },
  "sarga-2-176": {
    meaning: "तुम जाने कब से ऐसी कठोर पीड़ा अचल होकर सहते रहे।",
    english: "Who knows how long you have sat still, enduring such terrible pain.",
  },
  "sarga-2-177": {
    meaning: "कर्ण ने थोड़ा लजाकर कहा कि मुझे अधिक पीड़ा नहीं हुई।",
    english: "Karna, a little embarrassed, said that the pain was not much.",
  },
  "sarga-2-178": {
    meaning: "महाराज, यह छोटा-सा कीड़ा मेरा क्या बिगाड़ सकता है?",
    english: "Master, what harm could such a small insect do to me?",
  },
  "sarga-2-179": {
    meaning: "मैंने सोचा कि यदि मैं हिला-डुला तो आप व्यर्थ ही जाग जाएँगे।",
    english: "I thought that if I moved, you would wake up needlessly.",
  },
  "sarga-2-180": {
    meaning: "आपको जो थोड़ा विश्राम मिला था, उसे बिना कारण क्यों खोया जाए?",
    english: "Why should the brief rest you had received be wasted without reason?",
  },
  "sarga-2-181": {
    meaning: "कर्ण कहता है कि वह इसलिए चुप बैठा रहा कि कीड़ा अपने-आप उड़ जाएगा।",
    english: "Karna says he sat still thinking the insect would fly away on its own.",
  },
  "sarga-2-182": {
    meaning: "उसने सोचा था कि इतना छोटा जीव उसे कितनी पीड़ा दे सकेगा?",
    english: "He thought: how much pain could such a small creature cause me?",
  },
  "sarga-2-183": {
    meaning: "लेकिन वह कीड़ा भीतर धँसता गया और कर्ण को बहुत परेशान कर गया।",
    english: "But the insect kept burrowing inward and troubled him deeply.",
  },
  "sarga-2-184": {
    meaning: "कर्ण कहता है कि वह इस बात से लज्जित है कि गुरु ने सब कुछ देख लिया।",
    english: "Karna says he is ashamed that his teacher saw everything himself.",
  },
  "sarga-2-185": {
    meaning: "परशुराम गंभीर हो गए और मन में न जाने क्या सोचने लगे।",
    english: "Parashurama grew grave, lost in thoughts known only to him.",
  },
  "sarga-2-186": {
    meaning: "फिर अचानक उनके भीतर भयानक क्रोध की आग भड़क उठी।",
    english: "Then suddenly a terrible fire of anger flared within him.",
  },
  "sarga-2-187": {
    meaning: "दाँत पीसकर और आँखें तरेरकर उन्होंने पूछा कि तू कौन छली है?",
    english: "Grinding his teeth and glaring, he asked: who are you, deceiver?",
  },
  "sarga-2-188": {
    meaning: "क्या तू सचमुच ब्राह्मण है, या किसी और कुल का बलवान पुत्र है?",
    english: "Are you truly a Brahmin, or the strong son of some other noble line?",
  },
  "sarga-2-189": {
    meaning: "परशुराम कहते हैं कि ब्राह्मण इस तरह अपार सहनशीलता अपनाकर नहीं जीता।",
    english: "Parashurama says a Brahmin does not live by embracing such extreme endurance.",
  },
  "sarga-2-190": {
    meaning: "वह किसी लक्ष्य के लिए अपमान रूपी विष नहीं पीता।",
    english: "He does not drink the poison of humiliation for the sake of an ambition.",
  },
  "sarga-2-191": {
    meaning: "ऐसी कठिन पीड़ा और अपमान वही सह सकता है,",
    english: "Only one kind of person can bear such hard pain and humiliation,",
  },
  "sarga-2-192": {
    meaning: "जिसे बुद्धि चलाती हो और जो अपने तेज का भी बलिदान कर सके।",
    english: "one ruled by strategy, able even to sacrifice his own brilliance.",
  },
  "sarga-2-193": {
    meaning: "तेज से भरा ब्राह्मण तिल-तिल जलता रहे, यह संभव नहीं।",
    english: "A Brahmin filled with radiance cannot burn away little by little like this.",
  },
  "sarga-2-194": {
    meaning: "किसी भी स्थिति में वह अपना स्वभाव कैसे खो सकता है?",
    english: "In any condition, how could he lose his own nature?",
  },
  "sarga-2-195": {
    meaning: "पीड़ा सहते हुए कोई ब्राह्मण इतना निश्चल कैसे रह सकता है?",
    english: "How could a Brahmin remain so still while suffering such pain?",
  },
  "sarga-2-196": {
    meaning: "इस तरह की चुभन और वेदना केवल क्षत्रिय ही सह सकता है।",
    english: "Only a Kshatriya could endure this kind of piercing agony.",
  },
  "sarga-2-197": {
    meaning: "परशुराम कहते हैं कि तू अवश्य क्षत्रिय है; सच बता, नहीं तो दंड मिलेगा।",
    english: "Parashurama says: you must be a Kshatriya; speak the truth, or you will be punished.",
  },
  "sarga-2-198": {
    meaning: "वरना परशुराम के कठोर शाप से तू अभी भस्म हो जाएगा।",
    english: "Otherwise, by Parashurama's severe curse, you will be reduced to ashes now.",
  },
  "sarga-2-199": {
    meaning: "कर्ण दयालु गुरु से क्षमा माँगते हुए उनके चरणों में गिर पड़ा।",
    english: "Karna fell at his teacher's feet, begging the merciful master for forgiveness.",
  },
  "sarga-2-200": {
    meaning: "उसका चेहरा पीला पड़ गया और भय से उसके अंग काँपने लगे।",
    english: "His face turned pale, and his limbs trembled with fear.",
  },
  "sarga-2-201": {
    meaning: "कर्ण स्वीकार करता है कि वह सूत-पुत्र, शूद्र कर्ण है और दया चाहता है।",
    english: "Karna admits: I am Karna, a charioteer's son, a Shudra, seeking compassion.",
  },
  "sarga-2-202": {
    meaning: "वह कहता है कि जो भी हूँ, मैं आपका सेवक और आश्रमवासी शिष्य हूँ।",
    english: "He says: whatever I am, I am your attendant and resident disciple.",
  },
  "sarga-2-203": {
    meaning: "कर्ण कहता है कि मैं मन से छली नहीं था, पर मेरा काम छल जैसा हो गया।",
    english: "Karna says he was not deceitful at heart, yet his act has become deception.",
  },
  "sarga-2-204": {
    meaning: "मैं विद्या पाने आया था, लेकिन व्यर्थ ही बदनाम हो गया।",
    english: "I came to gather knowledge, but I have been disgraced for nothing.",
  },
  "sarga-2-205": {
    meaning: "मुझे उस गुरु का शिष्य बनने की बड़ी लालसा थी जिसने कार्तवीर्य को हराया था।",
    english: "I deeply longed to become the disciple of the one who defeated Kartavirya.",
  },
  "sarga-2-206": {
    meaning: "जो तप से दीप्त वीर और संसार में नए धर्म के प्रवर्तक हैं।",
    english: "He is the austerity-lit hero, the founder of a new order in the world.",
  },
  "sarga-2-207": {
    meaning: "लेकिन मुझे डर था कि यदि आपको सत्य पता चल गया,",
    english: "But I feared that if you came to know the truth,",
  },
  "sarga-2-208": {
    meaning: "तो महाराज मुझे सूत-पुत्र जानकर कुछ भी नहीं सिखाएँगे।",
    english: "you would teach nothing to me, knowing me to be a charioteer's son.",
  },
  "sarga-2-209": {
    meaning: "इसी कारण, प्रभु, मैं अपनी छोटी मानी जाने वाली जाति नहीं बता सका।",
    english: "For this reason, my lord, I could not reveal my so-called low caste.",
  },
  "sarga-2-210": {
    meaning: "कर्ण विनती करता है कि विश्वास करें, मेरी भावना और कोई बुरी नहीं थी।",
    english: "Karna pleads: believe me, no other feeling in me was impure.",
  },
  "sarga-2-211": {
    meaning: "लेकिन इतने भर से भी मैं लज्जा में धरती में गड़ा जाता हूँ।",
    english: "Yet even for this much, I feel buried in shame.",
  },
  "sarga-2-212": {
    meaning: "बिना किसी के मारे ही मैं अपने हृदय में मरा-सा जा रहा हूँ।",
    english: "Even without being killed, I feel dead within my own heart.",
  },
  "sarga-2-213": {
    meaning: "छल से संसार में मान पाना पाप और मैल के समान है।",
    english: "To gain honor in the world through deceit is sin, a stain.",
  },
  "sarga-2-214": {
    meaning: "आपके सामने ऊँचा बनकर खड़ा होना सचमुच छल ही था।",
    english: "To stand high before you was indeed an act of deception.",
  },
  "sarga-2-215": {
    meaning: "अब तक मैं दानी, व्रती और बलवान होकर सम्मान पाता था।",
    english: "Until now I earned honor by being generous, disciplined, and strong.",
  },
  "sarga-2-216": {
    meaning: "अब गुरु के सामने छली सिद्ध होकर मैं कहाँ जाऊँगा?",
    english: "Now, exposed as a deceiver before my own teacher, where can I go?",
  },
  "sarga-2-217": {
    meaning: "कर्ण कहता है कि देव, मुझे भस्म कर दीजिए; मेरा सिर आपके सामने झुका है।",
    english: "Karna says: burn me to ashes, lord; my head is bowed before you.",
  },
  "sarga-2-218": {
    meaning: "बस एक कसक रह गई कि मेरे जीवन का व्रत पूरा नहीं हुआ।",
    english: "Only one ache remains: the vow of my life has not been fulfilled.",
  },
  "sarga-2-219": {
    meaning: "गुरु की कृपा से मैं शाप में जलकर अभी भस्म हो जाऊँगा।",
    english: "By the teacher's will, I may burn in the curse and become ash now.",
  },
  "sarga-2-220": {
    meaning: "पर मैं अभिमानी अर्जुन का सिर कहाँ से पा सकूँगा?",
    english: "But where shall I find the proud head of Arjuna?",
  },
  "sarga-2-221": {
    meaning: "कर्ण कहता है कि यह प्यास और विजय की इच्छा मुझे कैसे छोड़ेगी?",
    english: "Karna asks: how will this thirst, this desire for victory, ever leave me?",
  },
  "sarga-2-222": {
    meaning: "यह अतृप्त वासना मृत्यु के बाद भी मुझे भटकाएगी।",
    english: "This unsatisfied longing will delude me even after death.",
  },
  "sarga-2-223": {
    meaning: "हे देव, मैं दुर्योधन की हार कैसे सहन कर पाऊँगा?",
    english: "O lord, how will I endure Duryodhana's defeat?",
  },
  "sarga-2-224": {
    meaning: "अर्जुन को निर्भय देखकर मैं मरकर भी रोज मरता रहूँगा।",
    english: "Seeing Arjuna fearless, I will die every day even after death.",
  },
  "sarga-2-225": {
    meaning: "कर्ण कहता है कि परशुराम का शिष्य होकर मैं जीवनदान नहीं माँगूँगा।",
    english: "Karna says that as Parashurama's disciple, he will not beg for his life.",
  },
  "sarga-2-226": {
    meaning: "मैं आपके चरण पकड़कर शांत मन से अपने प्राण त्याग दूँगा।",
    english: "Holding your feet, I will surrender my life with great calm.",
  },
  "sarga-2-227": {
    meaning: "कर्ण अपने को दंड और मृत्यु के लिए प्रस्तुत बताता है।",
    english: "Karna declares himself ready for punishment and death.",
  },
  "sarga-2-228": {
    meaning: "वह प्रार्थना करता है कि इन्हीं पवित्र चरणों पर मुझे प्राण त्यागने दें।",
    english: "He prays: let me give up my life upon these sacred feet.",
  },
  "sarga-2-229": {
    meaning: "इतना कहकर व्याकुल कर्ण गुरु के चरणों से लिपट गया।",
    english: "Having said this, the anguished Karna clung to his teacher's feet.",
  },
  "sarga-2-230": {
    meaning: "गुरु की आँखों से आँसू की दो बूँदें बह पड़ीं।",
    english: "Two drops of tears flowed from the teacher's eyes.",
  },
  "sarga-2-231": {
    meaning: "परशुराम दुख से कहते हैं कि तो तू ही अर्जुन का प्रसिद्ध प्रतिद्वंद्वी कर्ण है?",
    english: "Parashurama says in sorrow: so you are Karna, the famed rival of Arjuna?",
  },
  "sarga-2-232": {
    meaning: "तू धृतराष्ट्र-पुत्रों का अटल मित्र और विश्व-विजय की इच्छा रखने वाला है?",
    english: "You are the steadfast friend of Dhritarashtra's sons, eager for world conquest?",
  },
  "sarga-2-233": {
    meaning: "अब मैं समझा कि तू दिन-रात इतना श्रम क्यों करता था।",
    english: "Now I understand why you labored so intensely day and night.",
  },
  "sarga-2-234": {
    meaning: "और मेरे हर शब्द को मन में मोती सँभालती सीपी की तरह क्यों रखता था।",
    english: "And why you held every word of mine in your mind like an oyster holding a pearl.",
  },
  "sarga-2-235": {
    meaning: "मैंने असंख्य शिष्य देखे हैं और द्रोण को भी कुछ कौशल सिखाया है।",
    english: "I have seen countless disciples and have even taught Drona some skill.",
  },
  "sarga-2-236": {
    meaning: "पर आज तक तेरे जैसा जिज्ञासु शिष्य मैंने कभी नहीं पाया।",
    english: "But never until today have I found a seeker like you.",
  },
  "sarga-2-237": {
    meaning: "तूने अपनी पवित्रता के बल से मुझे जीत लिया था।",
    english: "You had won me over by the strength of your purity.",
  },
  "sarga-2-238": {
    meaning: "मुझे क्या पता था कि कोई छल से मुझे लूटने आया है?",
    english: "How was I to know someone had come to rob me through deception?",
  },
  "sarga-2-239": {
    meaning: "मैंने जैसा स्नेह तुझ पर किया, वैसा किसी और पर नहीं किया।",
    english: "The affection I gave you, I gave to no one else.",
  },
  "sarga-2-240": {
    meaning: "मैं सोते समय भी तेरे कानों में धनुर्वेद का ज्ञान भरता था।",
    english: "Even while sleeping, I poured the knowledge of archery into your ears.",
  },
  "sarga-2-241": {
    meaning: "परशुराम कहते हैं कि मैंने कंजूसी नहीं की; मेरे पास जो रत्न था, सब दे दिया।",
    english: "Parashurama says he held nothing back; whatever treasure he had, he gave.",
  },
  "sarga-2-242": {
    meaning: "तुझमें अपना ज्ञान सौंपकर मेरा मन अभी-अभी शांत और प्रसन्न हुआ था।",
    english: "Having entrusted myself to you, my heart had only just become peaceful and glad.",
  },
  "sarga-2-243": {
    meaning: "वे व्याकुल होकर कहते हैं कि अभी भी कह दे कि तू सूत या रथचालक नहीं है।",
    english: "In anguish he says: even now, say that you are not a charioteer or of the Suta line.",
  },
  "sarga-2-244": {
    meaning: "कह दे कि तू परशुराम का वीर शिष्य और ब्राह्मणवंश का बालक है।",
    english: "Say that you are Parashurama's brave disciple, a child of the Brahmin line.",
  },
  "sarga-2-245": {
    meaning: "वे पूछते हैं कि सूत वंश में तुझे सूर्य जैसा प्रचंड तेज कैसे मिला?",
    english: "He asks how such sun-like brilliance came to one born in the Suta line.",
  },
  "sarga-2-246": {
    meaning: "कवच और कुण्डल तुझे किसने और कहाँ से लाकर दिए?",
    english: "Who brought you this armor and these earrings, and from where?",
  },
  "sarga-2-247": {
    meaning: "जिसे पुत्र की तरह रखा, उसे मैं कठोर होकर कैसे मारूँ?",
    english: "How can I harden myself to strike one whom I kept like a son?",
  },
  "sarga-2-248": {
    meaning: "पर मेरे भीतर जलती हुई क्रोध की ज्वाला कहाँ उतारूँ?",
    english: "Yet where shall I release the blazing fire of anger within me?",
  },
  "sarga-2-249": {
    meaning: "चरणों पर पड़े कर्ण ने कहा कि जिस पर आपने आँसुओं का जल दिया था,",
    english: "At his feet, Karna says: the one to whom you once gave the water of your eyes,",
  },
  "sarga-2-250": {
    meaning: "हे ज्ञानी गुरु, आज उसी को आपकी अग्नि भी स्वीकार करनी होगी।",
    english: "O wise teacher, today that same one must also receive your fire.",
  },
  "sarga-2-251": {
    meaning: "आप आँखों से अग्नि बरसाइए, मैं उसे अपने सिर पर धारण करूँगा।",
    english: "Pour fire from your eyes; I will bear it upon my head.",
  },
  "sarga-2-252": {
    meaning: "हे मुनिश्रेष्ठ, दंड भोगकर और जलकर मैं छल का पाप धो दूँगा।",
    english: "O greatest sage, by burning through punishment, I will cleanse the sin of deceit.",
  },
  "sarga-2-253": {
    meaning: "परशुराम कहते हैं कि कर्ण, तू मुझे इस तरह और मत घायल कर।",
    english: "Parashurama says: Karna, do not pierce me further like this.",
  },
  "sarga-2-254": {
    meaning: "तुझे क्या पता कि कैसी दुविधा मुझे भीतर से सता रही है?",
    english: "You do not know what painful conflict is tormenting me within.",
  },
  "sarga-2-255": {
    meaning: "लेकिन तूने छल किया है, इसलिए उसका दंड अवश्य पाएगा।",
    english: "Yet you have deceived me, and you must surely receive its punishment.",
  },
  "sarga-2-256": {
    meaning: "परशुराम का भयानक क्रोध कभी व्यर्थ नहीं जाता।",
    english: "Parashurama's terrible anger never goes fruitless.",
  },
  "sarga-2-257": {
    meaning: "मैंने तुझे पुत्र माना था, इसलिए तुझे जीवनदान देता हूँ।",
    english: "I had accepted you as a son, so I grant you your life.",
  },
  "sarga-2-258": {
    meaning: "लेकिन अपनी विद्या का अंतिम और चरम तेज तुझसे छीन लेता हूँ।",
    english: "But I take away the final, supreme radiance of my knowledge from you.",
  },
  "sarga-2-259": {
    meaning: "जो ब्रह्मास्त्र मैंने तुझे सिखाया है, वह तेरे काम नहीं आएगा।",
    english: "The Brahmastra I taught you will not serve you when needed.",
  },
  "sarga-2-260": {
    meaning: "मेरा शाप है कि समय आने पर तू उसे भूल जाएगा।",
    english: "This is my curse: at the crucial moment, you will forget it.",
  },
  "sarga-2-261": {
    meaning: "कर्ण व्याकुल होकर खड़ा हुआ और बोला कि गुरुवर, आपने यह क्या कर दिया?",
    english: "Karna rose in anguish and cried: teacher, what have you done?",
  },
  "sarga-2-262": {
    meaning: "इतना कठोर शाप दिया, मेरा जीवन ही क्यों नहीं ले लिया?",
    english: "You gave such a cruel curse; why did you not take my life instead?",
  },
  "sarga-2-263": {
    meaning: "आप मेरी वर्षों की साधना के साथ मेरे प्राण भी क्यों नहीं ले लेते?",
    english: "Why not take my life along with the years of discipline I practiced?",
  },
  "sarga-2-264": {
    meaning: "अब किस सुख के लिए आप मुझे धरती पर जीवित रहने देते हैं?",
    english: "For what joy do you leave me alive on earth now?",
  },
  "sarga-2-265": {
    meaning: "परशुराम कहते हैं कि कर्ण, यह शाप अटल है, इसे सहो।",
    english: "Parashurama says: Karna, this curse is unchangeable; endure it.",
  },
  "sarga-2-266": {
    meaning: "जो मैंने कहा है, उसे आदर से सिर पर लेकर निभाओ।",
    english: "Accept what I have said with reverence and carry it upon your head.",
  },
  "sarga-2-267": {
    meaning: "इस महेन्द्र पर्वत पर तुमने थोड़ा नहीं, बहुत कुछ कमाया है।",
    english: "On this Mahendra mountain, you have earned no small treasure.",
  },
  "sarga-2-268": {
    meaning: "मेरा समस्त संचित ज्ञान तुमने मुझसे ही पाया है।",
    english: "You have received from me all the knowledge I had gathered.",
  },
  "sarga-2-269": {
    meaning: "केवल एक ब्रह्मास्त्र चला गया, इससे क्या बहुत अंतर पड़ता है?",
    english: "Only one Brahmastra is gone; what great difference does that make?",
  },
  "sarga-2-270": {
    meaning: "कोई वीर केवल एक शस्त्र के बल से सदा वीर नहीं कहलाता।",
    english: "No hero remains a hero forever by the strength of one weapon alone.",
  },
  "sarga-2-271": {
    meaning: "नई कला, नई रचनाएँ, नई सूझ और नए साधन चाहिए।",
    english: "New arts, new creations, new insight, and new means are needed.",
  },
  "sarga-2-272": {
    meaning: "नए भाव और नई उमंग से ही वीर हमेशा नए बने रहते हैं।",
    english: "Through new feelings and new enthusiasm, heroes remain ever renewed.",
  },
  "sarga-2-273": {
    meaning: "परशुराम कहते हैं कि तुम स्वयं दीप्त पुरुषार्थ हो और कवच-कुण्डल धारण किए हो।",
    english: "Parashurama says: you yourself are radiant manhood, wearing armor and earrings.",
  },
  "sarga-2-274": {
    meaning: "इनके रहते कौन-सा महान योद्धा तुम्हें जीत पाएगा?",
    english: "While these remain with you, what great warrior will be able to defeat you?",
  },
  "sarga-2-275": {
    meaning: "वे वर देते हैं कि तुम संसार में महान कहलाओगे।",
    english: "He grants a boon: you will be called great in the world.",
  },
  "sarga-2-276": {
    meaning: "तुम भारत के इतिहास को अपनी कीर्ति से और उज्ज्वल कर जाओगे।",
    english: "You will make India's history brighter with your fame.",
  },
  "sarga-2-277": {
    meaning: "अब विदा लो, बेटा, और अपने मन को थोड़ा कठोर करो।",
    english: "Now take leave, child, and make your heart a little firm.",
  },
  "sarga-2-278": {
    meaning: "हम यहाँ किसी अभिशप्त व्यक्ति को रहने नहीं देते।",
    english: "We do not allow one under a curse to remain here.",
  },
  "sarga-2-279": {
    meaning: "हाय, मुझे अपना ही दिया हुआ धन स्वयं छीनना पड़ा।",
    english: "Alas, I had to take back the very wealth I myself had given.",
  },
  "sarga-2-280": {
    meaning: "यह सोच-सोचकर मेरा मन बहुत व्याकुल हो रहा है।",
    english: "Thinking this again and again, my heart grows deeply restless.",
  },
  "sarga-2-281": {
    meaning: "पर कभी-कभी व्रत निभाना ऐसे भी करना पड़ता है।",
    english: "But sometimes a vow must be kept even in this painful way.",
  },
  "sarga-2-282": {
    meaning: "जिस हाथ से दिया गया, उसी हाथ से वापस भी लेना पड़ता है।",
    english: "What one hand gives, that same hand may have to take back.",
  },
  "sarga-2-283": {
    meaning: "अब जाओ कर्ण, कृपा करके मुझे आसक्ति से मुक्त करो।",
    english: "Now go, Karna; please free me from attachment.",
  },
  "sarga-2-284": {
    meaning: "मुझे इस तरह आँसू भरी आँखों से मत देखो, मेरा व्रत मत तोड़ो।",
    english: "Do not look at me with tearful eyes like this; do not break my vow.",
  },
  "sarga-2-285": {
    meaning: "मेरी बुद्धि कहती है कि जो किया वह ठीक था, लेकिन हृदय मानता नहीं।",
    english: "My reason says what I did was right, but my heart does not accept it.",
  },
  "sarga-2-286": {
    meaning: "मेरा हृदय मुझसे विद्रोह कर तुम्हारी ही विजय मान रहा है।",
    english: "My heart rebels against me and somehow celebrates your victory.",
  },
  "sarga-2-287": {
    meaning: "तुम्हारे गुण और शील अपने-आप मेरे मन में फिर उभर आते हैं।",
    english: "Your virtues and character rise again and again in my mind.",
  },
  "sarga-2-288": {
    meaning: "वे मुझे भीतर किसी आँसुओं की गंगा में डुबो देते हैं।",
    english: "They bathe me inwardly in a river of tears.",
  },
  "sarga-2-289": {
    meaning: "जाओ कर्ण, मुझे पूरी तरह निर्लिप्त हो जाने दो।",
    english: "Go, Karna; let me become completely detached.",
  },
  "sarga-2-290": {
    meaning: "किसी एकांत कुंज में बैठकर मुझे अपना मन शांत करने दो।",
    english: "Let me sit in some lonely grove and restore my mind.",
  },
  "sarga-2-291": {
    meaning: "मुझे डर है कि तुम्हें निराश देखकर मेरा हृदय फट न पड़े।",
    english: "I fear my heart may burst on seeing you so disappointed.",
  },
  "sarga-2-292": {
    meaning: "कहीं मैं पिघलकर शाप वापस न ले लूँ और अपनी वाणी न बदल दूँ।",
    english: "I may melt, withdraw the curse, and reverse my own words.",
  },
  "sarga-2-293": {
    meaning: "यह कहकर परशुराम ने अपना चेहरा फेर लिया।",
    english: "Saying this, Parashurama turned his face away.",
  },
  "sarga-2-294": {
    meaning: "जहाँ कर्ण को सपना मिला था, वहीं उसका प्यारा सपना टूटकर बिखर गया।",
    english: "The very place where Karna had found his dream became the place where it shattered.",
  },
  "sarga-2-295": {
    meaning: "कर्ण ने उनके चरण छूकर आँसुओं का अर्घ्य अर्पित किया।",
    english: "Touching his feet, Karna offered the oblation of his tears.",
  },
  "sarga-2-296": {
    meaning: "फिर गुरु को जी भरकर देखकर वह धीरे-धीरे चल पड़ा।",
    english: "Then, gazing at his teacher to his heart's fill, he slowly departed.",
  },
  "sarga-2-297": {
    meaning: "परशुधारी गुरु के चरणों की धूल लेकर और हृदय की भक्ति अर्पित करके,",
    english: "Taking the dust of the axe-bearing teacher's feet and offering his heart's devotion,",
  },
  "sarga-2-298": {
    meaning: "निराशा से व्याकुल, टूटा हुआ, जैसे किसी पर्वत-शिखर से अलग हुआ हो,",
    english: "restless with despair, broken, as though fallen away from a mountain peak,",
  },
  "sarga-2-299": {
    meaning: "कर्ण मन में खोया-सा आगे बढ़ा।",
    english: "Karna moved on, lost within himself.",
  },
  "sarga-2-300": {
    meaning: "वह ऐसा लग रहा था जैसे आकाश में चाँद अकेला चलता हो।",
    english: "He seemed like the moon moving alone across the sky.",
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

console.log("Seeded Hindi meanings and English translations for sarga-2 lines 1-300.");
