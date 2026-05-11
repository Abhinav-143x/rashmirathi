import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const files = [
  path.join(ROOT, "content", "sarga-5.json"),
  path.join(ROOT, "public", "content", "sarga-5.json"),
];

const annotations = {
  "sarga-5-1": {
    meaning: "शांति के समाप्त होने का भयानक समय आ गया।",
    english: "The dreadful time for the end of peace had arrived.",
  },
  "sarga-5-2": {
    meaning: "धरती पर आंशिक प्रलय का निश्चित मुहूर्त आ पहुँचा।",
    english: "The appointed moment for a partial destruction on earth had come.",
  },
  "sarga-5-3": {
    meaning: "नियति की सारी योजना पूरी हो चुकी थी।",
    english: "The entire plan of destiny had been completed.",
  },
  "sarga-5-4": {
    meaning: "कल बहुत बड़ा युद्ध आरंभ होने वाला था।",
    english: "The great war was to begin the next day.",
  },
  "sarga-5-5": {
    meaning: "कल जैसे ही सूर्य की पहली किरण फूटेगी,",
    english: "Tomorrow, as soon as the first ray of sunlight appears,",
  },
  "sarga-5-6": {
    meaning: "रणभूमि में बाणों पर चढ़कर महा-मृत्यु छूट पड़ेगी।",
    english: "great death will ride upon arrows and be released in battle.",
  },
  "sarga-5-7": {
    meaning: "संहार मचेगा और घना अँधेरा छा जाएगा।",
    english: "Destruction will rage, and dense darkness will spread.",
  },
  "sarga-5-8": {
    meaning: "पूरा समाज जैसे दृष्टि खो बैठेगा।",
    english: "The whole society will become as though blinded.",
  },
  "sarga-5-9": {
    meaning: "हर व्यक्ति अपने ही स्वजनों के लिए क्रूर यम जैसा हो जाएगा।",
    english: "Each person will become a cruel death-god for his own kin.",
  },
  "sarga-5-10": {
    meaning: "परिजन ही परिजन के लिए काल के समान बन जाएगा।",
    english: "A family member will become death itself for another family member.",
  },
  "sarga-5-11": {
    meaning: "कल से भाई ही भाई के प्राण हरेंगे।",
    english: "From tomorrow, brothers will take brothers' lives.",
  },
  "sarga-5-12": {
    meaning: "मनुष्य ही मनुष्य के रक्त में स्नान करेंगे।",
    english: "Humans will bathe in the blood of other humans.",
  },
  "sarga-5-13": {
    meaning: "युद्ध की चिंता में बैठी कुंती सुध-बुध खो चुकी थी।",
    english: "Kunti sat lost in thoughts of war, almost unaware of herself.",
  },
  "sarga-5-14": {
    meaning: "मन में कुछ सोचकर वह व्याकुल हो उठी।",
    english: "Thinking something in her heart, she became deeply distressed.",
  },
  "sarga-5-15": {
    meaning: "वह पुकार उठी कि हे राम, क्या यह संयोग टल नहीं सकता?",
    english: "She cried: O Rama, can this fate not be averted?",
  },
  "sarga-5-16": {
    meaning: "क्या सचमुच कुंती का हृदय फट जाएगा?",
    english: "Will Kunti's heart truly burst apart?",
  },
  "sarga-5-17": {
    meaning: "एक ही गोद के लाल और एक ही कोख के भाई,",
    english: "Sons of the same lap, brothers from the same womb,",
  },
  "sarga-5-18": {
    meaning: "क्या सच में दो ओर खड़े होकर लड़ेंगे?",
    english: "will they truly stand on two sides and fight?",
  },
  "sarga-5-19": {
    meaning: "क्या कर्ण सचमुच अपने छोटे भाइयों के प्राण लेगा?",
    english: "Will Karna truly take the lives of his younger brothers?",
  },
  "sarga-5-20": {
    meaning: "या अर्जुन के हाथों स्वयं मारा जाएगा?",
    english: "Or will he himself die by Arjuna's hand?",
  },
  "sarga-5-21": {
    meaning: "दोनों में जिसका भी हृदय फटेगा, मैं ही फटूँगी।",
    english: "Whichever of the two has his heart torn, I will be the one torn.",
  },
  "sarga-5-22": {
    meaning: "जिसकी भी गर्दन कटेगी, मानो मेरी ही कटेगी।",
    english: "Whichever neck is cut, it will be as though mine is cut.",
  },
  "sarga-5-23": {
    meaning: "कर्ण अर्जुन को मारे या अर्जुन कर्ण को,",
    english: "Whether Karna kills Arjuna or Arjuna kills Karna,",
  },
  "sarga-5-24": {
    meaning: "उन अंगारों की वर्षा मुझ पर ही होगी।",
    english: "the burning coals will fall upon me alone.",
  },
  "sarga-5-25": {
    meaning: "हे भगवान, मेरी यह कथा कौन सुनेगा?",
    english: "O God, who will listen to this story of mine?",
  },
  "sarga-5-26": {
    meaning: "संसार में मेरी यह पीड़ा कौन समझेगा?",
    english: "Who in the world will understand this pain of mine?",
  },
  "sarga-5-27": {
    meaning: "हे राम, अपनी लज्जा खोले बिना,",
    english: "O Rama, without uncovering my shame,",
  },
  "sarga-5-28": {
    meaning: "कौन है जो मेरी पीड़ा दूर कर सकेगा?",
    english: "who can remove my suffering?",
  },
  "sarga-5-29": {
    meaning: "गांधारी महिमामयी हैं, भीष्म आदि गुरुजन हैं।",
    english: "Gandhari is noble, and Bhishma and others are revered elders.",
  },
  "sarga-5-30": {
    meaning: "धृतराष्ट्र दुखी हैं और संसार से विरक्त-से हो रहे हैं।",
    english: "Dhritarashtra is sorrowful and becoming weary of the world.",
  },
  "sarga-5-31": {
    meaning: "फिर भी यदि मैं उनसे कहूँ, तो वे क्या करेंगे?",
    english: "Even if I tell them, what can they do?",
  },
  "sarga-5-32": {
    meaning: "क्या वे मेरी खोई हुई मणि मेरे हाथ में रख देंगे?",
    english: "Will they place my lost jewel back in my hands?",
  },
  "sarga-5-33": {
    meaning: "यदि मैं यह मलिन कथा युधिष्ठिर से कहूँ,",
    english: "If I tell this stained story to Yudhishthira,",
  },
  "sarga-5-34": {
    meaning: "तो वह भावुक ज्ञानी पिघलकर टूट जाएगा।",
    english: "that sensitive wise man will melt and break within.",
  },
  "sarga-5-35": {
    meaning: "तो चलूँ, कर्ण से ही मिलकर बात करूँ।",
    english: "Then let me go and speak directly to Karna.",
  },
  "sarga-5-36": {
    meaning: "उसी के सामने अपना अंतर खोलकर रख दूँ।",
    english: "Let me open my heart before him.",
  },
  "sarga-5-37": {
    meaning: "लेकिन मैं उसके सामने कैसे जाऊँगी?",
    english: "But how will I go before him?",
  },
  "sarga-5-38": {
    meaning: "किस तरह उसे अपना चेहरा दिखाऊँगी?",
    english: "How will I show him my face?",
  },
  "sarga-5-39": {
    meaning: "आज मन व्याकुल होकर जो वस्तु माँग रहा है,",
    english: "What my restless heart asks for today,",
  },
  "sarga-5-40": {
    meaning: "मेरा पूरा बीता जीवन उसी के विरुद्ध रहा है।",
    english: "my entire past life has opposed it.",
  },
  "sarga-5-41": {
    meaning: "मेरे पापकर्म का समाधान कैसे होगा?",
    english: "How will the sin of my deed be answered?",
  },
  "sarga-5-42": {
    meaning: "अपने कठोर और विचित्र आचरण का मैं क्या उत्तर दूँगी?",
    english: "What answer will I give for my harsh and strange conduct?",
  },
  "sarga-5-43": {
    meaning: "मैं कैसे कहूँगी, पुत्र, मेरी गोद में आओ?",
    english: "How shall I say: Son, come into my lap?",
  },
  "sarga-5-44": {
    meaning: "इस पत्थर-हृदय माँ का हृदय शीतल करो?",
    english: "Cool the heart of this stone-hearted mother?",
  },
  "sarga-5-45": {
    meaning: "इस तरह चिंता और व्यथा में उलझी हुई कुंती,",
    english: "Thus tangled in worry and pain, Kunti,",
  },
  "sarga-5-46": {
    meaning: "विदुर के भवन से बाहर निकली।",
    english: "came out of Vidura's house.",
  },
  "sarga-5-47": {
    meaning: "सामने तेज धूप देखकर वह थोड़ी घबरा गई।",
    english: "Seeing the sun's heat before her, she grew a little startled.",
  },
  "sarga-5-48": {
    meaning: "सफेद केशों वाली कुंती संकोच और भ्रम में चल पड़ी।",
    english: "White-haired Kunti walked on, hesitant and confused.",
  },
  "sarga-5-49": {
    meaning: "वह विचारों के धागे पर उड़ती पतंग जैसी थी।",
    english: "She was like a kite flying on the thread of anxious thoughts.",
  },
  "sarga-5-50": {
    meaning: "स्मृतियों की तीखी चोट उसके प्राणों पर पड़ रही थी।",
    english: "Sharp blows of memory struck her very life.",
  },
  "sarga-5-51": {
    meaning: "आशा और अभिलाषा से भारी, डरी और भ्रमित,",
    english: "Heavy with hope and longing, frightened and bewildered,",
  },
  "sarga-5-52": {
    meaning: "कुंती किसी तरह गंगा तट पर पहुँची।",
    english: "Kunti somehow reached the bank of the Ganga.",
  },
  "sarga-5-53": {
    meaning: "सूर्य पश्चिम क्षितिज की ओर झुक रहा था।",
    english: "The sun was leaning toward the western horizon.",
  },
  "sarga-5-54": {
    meaning: "मानो वह धरती पर स्वर्ण के घट उँड़ेल रहा हो।",
    english: "As though pouring pitchers of gold upon the earth.",
  },
  "sarga-5-55": {
    meaning: "वह लालिमा बहाकर हर अंग को नहला रहा था।",
    english: "It bathed every limb of the world in flowing redness.",
  },
  "sarga-5-56": {
    meaning: "और स्वयं भी लज्जा से लाल होता जा रहा था।",
    english: "And itself seemed to grow red with modesty.",
  },
  "sarga-5-57": {
    meaning: "राधेय कर्ण संध्या-पूजन में ध्यान लगाए थे।",
    english: "Radheya Karna was absorbed in evening worship.",
  },
  "sarga-5-58": {
    meaning: "वे निर्मल जल में दोनों भुजाएँ उठाए खड़े थे।",
    english: "He stood in pure water with both arms raised.",
  },
  "sarga-5-59": {
    meaning: "उनके शरीर में सूर्य का अनुपम तेज जाग रहा था।",
    english: "The matchless brilliance of the sun glowed in his body.",
  },
  "sarga-5-60": {
    meaning: "उनका चमकता ललाट दूसरे सूर्य जैसा लग रहा था।",
    english: "His shining forehead looked like another sun.",
  },
  "sarga-5-61": {
    meaning: "मानो स्वर्णिम युग-शिखर के मूल में आकर,",
    english: "As though at the base of a golden peak of the age,",
  },
  "sarga-5-62": {
    meaning: "सूर्य सचमुच सिमटकर बैठ गया हो।",
    english: "the sun itself had gathered and sat there.",
  },
  "sarga-5-63": {
    meaning: "या जैसे मस्तक पर अरुण देवता को धारण किए,",
    english: "Or as if bearing the crimson god upon his head,",
  },
  "sarga-5-64": {
    meaning: "गरुड़ अपने पंख फैलाए तट पर खड़ा हो।",
    english: "Garuda stood on the bank with wings spread.",
  },
  "sarga-5-65": {
    meaning: "या जैसे पवित्र अग्नि की दो विशाल लपटें,",
    english: "Or as if two vast flames of sacred fire,",
  },
  "sarga-5-66": {
    meaning: "प्रकाश-मंडल की आरती सजा रही हों।",
    english: "were arranging the aarti of the halo of light.",
  },
  "sarga-5-67": {
    meaning: "या जैसे अथाह सोने में नहाकर,",
    english: "Or as if bathed in unfathomable gold,",
  },
  "sarga-5-68": {
    meaning: "मैनाक पर्वत बाँहें फैलाए खड़ा हो।",
    english: "Mount Mainak stood with arms spread wide.",
  },
  "sarga-5-69": {
    meaning: "पुत्र की शोभा देखकर कुंती आनंद से भर गई।",
    english: "Seeing her son's splendor, Kunti swelled with joy.",
  },
  "sarga-5-70": {
    meaning: "क्षण भर को वह अपनी सारी व्यथा और वेदना भूल गई।",
    english: "For a moment she forgot all her pain and anguish.",
  },
  "sarga-5-71": {
    meaning: "ममता के दूध से आँखें भरकर, बिना पलक झपकाए,",
    english: "With eyes filled by the milk of motherly love, without blinking,",
  },
  "sarga-5-72": {
    meaning: "वह खड़ी-खड़ी पुत्र के शरीर को निहारती रही।",
    english: "she stood there watering her son's body with her gaze.",
  },
  "sarga-5-73": {
    meaning: "आहट पाकर जब कर्ण ने ध्यान खोला,",
    english: "When Karna heard a sound and opened his meditation,",
  },
  "sarga-5-74": {
    meaning: "कुंती को सामने देखकर वह विनम्र होकर बोला।",
    english: "seeing Kunti before him, he spoke humbly.",
  },
  "sarga-5-75": {
    meaning: "मैं अपने भीतर की भक्ति आपके चरणों में रखता हूँ।",
    english: "I place the devotion of my heart at your feet.",
  },
  "sarga-5-76": {
    meaning: "देवी, मैं राधा का पुत्र हूँ, आपको प्रणाम करता हूँ।",
    english: "Lady, I am Radha's son; I bow to you.",
  },
  "sarga-5-77": {
    meaning: "आप कौन हैं? यहाँ किसलिए आई हैं?",
    english: "Who are you? Why have you come here?",
  },
  "sarga-5-78": {
    meaning: "मेरे लिए कौन-सा आदेश लेकर आई हैं?",
    english: "What command have you brought for me?",
  },
  "sarga-5-79": {
    meaning: "यह कुरुक्षेत्र की भूमि है, युद्ध का स्थल है।",
    english: "This is the land of Kurukshetra, the field of war.",
  },
  "sarga-5-80": {
    meaning: "सूर्य का प्रकाश-मंडल अस्त होने को है।",
    english: "The sun's circle of light is about to set.",
  },
  "sarga-5-81": {
    meaning: "यह सुनसान और कठिन घाट बहुत भयावह है।",
    english: "This lonely, difficult bank is very frightening.",
  },
  "sarga-5-82": {
    meaning: "और ऊपर से आप वृद्धा नारी होकर अकेली आई हैं।",
    english: "And on top of that, you have come alone as an elderly woman.",
  },
  "sarga-5-83": {
    meaning: "देवी, बताइए, आप कौन हैं और मैं क्या सेवा करूँ?",
    english: "Lady, tell me who you are and what service I may do.",
  },
  "sarga-5-84": {
    meaning: "क्या मैं आपके चरणों में भक्ति-भेंट रखूँ?",
    english: "Shall I place an offering of devotion at your feet?",
  },
  "sarga-5-85": {
    meaning: "कर्ण की गूढ़ वाणी सुनकर कुंती का धैर्य टूट गया।",
    english: "Hearing Karna's deep words, Kunti's courage broke.",
  },
  "sarga-5-86": {
    meaning: "भीतर का अपार क्लेश आँसू बनकर फूट पड़ा।",
    english: "The immense grief within burst out as tears.",
  },
  "sarga-5-87": {
    meaning: "पिघलकर उसने काँपते स्वर में कहा।",
    english: "Melting with emotion, she spoke in a trembling voice.",
  },
  "sarga-5-88": {
    meaning: "हे कर्ण, मुझे कठोर बाणों से मत घायल करो।",
    english: "O Karna, do not pierce me with such cruel arrows.",
  },
  "sarga-5-89": {
    meaning: "तू राधा का पुत्र नहीं, मेरा पुत्र है।",
    english: "You are not Radha's son; you are mine.",
  },
  "sarga-5-90": {
    meaning: "जो वंश धर्मराज का है, वही वंश तुम्हारा है।",
    english: "The lineage of Dharmaraj is your lineage too.",
  },
  "sarga-5-91": {
    meaning: "तू सूत का पुत्र नहीं, राजवंशी है।",
    english: "You are not a charioteer's son; you are of royal blood.",
  },
  "sarga-5-92": {
    meaning: "तू अर्जुन की तरह कुरुवंश का ही अंश है।",
    english: "Like Arjuna, you too are part of the Kuru line.",
  },
  "sarga-5-93": {
    meaning: "जिस तरह मैंने तीन पुत्र पाए,",
    english: "Just as I later bore three sons,",
  },
  "sarga-5-94": {
    meaning: "उसी तरह तू सबसे पहले मेरी कोख में आया था।",
    english: "you first came into my womb in the same way.",
  },
  "sarga-5-95": {
    meaning: "तुझे पाकर मेरी गोद धन्य हुई थी।",
    english: "My lap was blessed when I received you.",
  },
  "sarga-5-96": {
    meaning: "मैं ही अभागिनी पृथा, तेरी माँ हूँ।",
    english: "I am that unfortunate Pritha, your mother.",
  },
  "sarga-5-97": {
    meaning: "पर जब तू आया था, मैं अविवाहित कन्या थी।",
    english: "But when you came, I was an unmarried maiden.",
  },
  "sarga-5-98": {
    meaning: "मैंने यह अनमोल लाल असमय पाया था।",
    english: "I had received this priceless child before time.",
  },
  "sarga-5-99": {
    meaning: "इसीलिए, हाय, अपने दूधमुँहे पुत्र से भी,",
    english: "Therefore, alas, even from my infant son,",
  },
  "sarga-5-100": {
    meaning: "समाज के भय से मुझे भागना पड़ा।",
    english: "I had to flee out of fear of society.",
  },
  "sarga-5-101": {
    meaning: "बेटा, धरती पर नारी बहुत दीन है।",
    english: "Son, a woman is very helpless on this earth.",
  },
  "sarga-5-102": {
    meaning: "कुमारी स्त्री सचमुच अबला होती है।",
    english: "An unmarried girl is truly powerless.",
  },
  "sarga-5-103": {
    meaning: "समाज के मुख को बंद करना बहुत कठिन है।",
    english: "It is very hard to silence society's mouth.",
  },
  "sarga-5-104": {
    meaning: "गिरी हुई कही जाने वाली स्त्री अपना सुख सिर उठाकर नहीं पा सकती।",
    english: "A woman branded fallen cannot lift her head to claim her happiness.",
  },
  "sarga-5-105": {
    meaning: "ऊपर से मैं बालिका थी, वह बचपन का समय था।",
    english: "Besides, I was a child; it was the time of innocence.",
  },
  "sarga-5-106": {
    meaning: "मुझे पतन से बचने का कोई दूसरा उपाय नहीं सूझा।",
    english: "I could think of no other way to avoid disgrace.",
  },
  "sarga-5-107": {
    meaning: "मन को वज्र बनाकर तुझे पेटी में रखा।",
    english: "Hardening my heart like thunderbolt, I placed you in a box.",
  },
  "sarga-5-108": {
    meaning: "और अपने हृदय के धन को नदी की धारा में छोड़ आई।",
    english: "And left the treasure of my heart in the current.",
  },
  "sarga-5-109": {
    meaning: "संयोग से सूत-पत्नी ने तुम्हें पाला।",
    english: "By chance, the charioteer's wife raised you.",
  },
  "sarga-5-110": {
    meaning: "उन दयामयी पर मुझे तनिक भी क्रोध नहीं है।",
    english: "I hold not the slightest anger toward that compassionate woman.",
  },
  "sarga-5-111": {
    meaning: "मुझे ले चलो, मैं उनके दोनों पाँव पकड़ूँगी।",
    english: "Take me to her; I will hold both her feet.",
  },
  "sarga-5-112": {
    meaning: "उन्हें बड़ी बहन मानकर आदर से गले लगाऊँगी।",
    english: "I will honor her as an elder sister and embrace her respectfully.",
  },
  "sarga-5-113": {
    meaning: "पर एक बात सुनो, जिसके लिए मैं आई हूँ।",
    english: "But listen to the one thing for which I have come.",
  },
  "sarga-5-114": {
    meaning: "मैं आदेश नहीं, प्रार्थना लेकर आई हूँ।",
    english: "I have brought not a command, but a plea.",
  },
  "sarga-5-115": {
    meaning: "कल कुरुक्षेत्र में जो युद्ध आरंभ होगा,",
    english: "In the war that will begin tomorrow in Kurukshetra,",
  },
  "sarga-5-116": {
    meaning: "कल क्षत्रिय समाज पर जो प्रलय टूटेगी,",
    english: "in the destruction that will fall upon the Kshatriya world tomorrow,",
  },
  "sarga-5-117": {
    meaning: "उसमें पांडवों के विरुद्ध मत लड़ना।",
    english: "do not fight against the Pandavas.",
  },
  "sarga-5-118": {
    meaning: "उन्हें मत मारना, और उनके हाथों मत मरना।",
    english: "Do not kill them, and do not die by their hands.",
  },
  "sarga-5-119": {
    meaning: "मेरे ही पुत्र मेरे पुत्रों को न मारें।",
    english: "Let not my own sons kill my own son.",
  },
  "sarga-5-120": {
    meaning: "वे क्रोध में एक-दूसरे से प्रतिशोध न लें।",
    english: "Let them not, in anger, take revenge upon one another.",
  },
  "sarga-5-121": {
    meaning: "कुंती कहती है कि यह भयानक दृश्य मुझसे सहा नहीं जाएगा।",
    english: "Kunti says she will not be able to bear this terrible sight.",
  },
  "sarga-5-122": {
    meaning: "अब मुझसे और मौन नहीं रहा जाएगा।",
    english: "I can no longer remain silent.",
  },
  "sarga-5-123": {
    meaning: "जो पीड़ा अब तक छिपकर मेरे मन को कुरेदती रही,",
    english: "The pain that has secretly scraped my heart until now,",
  },
  "sarga-5-124": {
    meaning: "उसे अब मैं सारे संसार को बता दूँगी।",
    english: "I will now tell it to the whole world.",
  },
  "sarga-5-125": {
    meaning: "जिस भय से कभी तुझे छोड़कर भागी थी,",
    english: "The fear because of which I once fled after abandoning you,",
  },
  "sarga-5-126": {
    meaning: "जिस संदेह से फिर कभी तुझे देखने नहीं आई,",
    english: "the doubt because of which I never came to see you again,",
  },
  "sarga-5-127": {
    meaning: "उस जड़ समाज के सिर पर अब मैं कदम रखूँगी।",
    english: "I will now step upon the head of that lifeless society.",
  },
  "sarga-5-128": {
    meaning: "बहुत डर चुकी; अब और अधिक नहीं डरूँगी।",
    english: "I have feared enough; I will fear no more.",
  },
  "sarga-5-129": {
    meaning: "मेरी इच्छा थी कि अपने मन का कीचड़ धो डालूँ।",
    english: "I wished to wash the mud from my heart.",
  },
  "sarga-5-130": {
    meaning: "मरने से पहले तुझे अपनी गोद में भर लूँ।",
    english: "Before dying, I wished to hold you in my lap.",
  },
  "sarga-5-131": {
    meaning: "युद्ध के बहाने वह समय आज आ गया है।",
    english: "Through the excuse of war, that time has arrived today.",
  },
  "sarga-5-132": {
    meaning: "मैंने भी क्या अद्भुत अवसर पाया है!",
    english: "What a strange opportunity I have found!",
  },
  "sarga-5-133": {
    meaning: "जीवन की बाजी तो मैं बहुत पहले हार चुकी हूँ।",
    english: "I had already lost the game of life long ago.",
  },
  "sarga-5-134": {
    meaning: "लेकिन सृष्टिकर्ता कितना निर्मोही निकला!",
    english: "But how detached and merciless the creator proved to be!",
  },
  "sarga-5-135": {
    meaning: "उसने आज तक मुझे तेरे पास आने नहीं दिया।",
    english: "He never let me come to you until today.",
  },
  "sarga-5-136": {
    meaning: "इस छिपे जन्म-रहस्य को तुझे बताने नहीं दिया।",
    english: "Never let me reveal this hidden secret of your birth.",
  },
  "sarga-5-137": {
    meaning: "पर पुत्र, मन में कुछ उलटा मत सोचो।",
    english: "But son, do not think wrongly of this.",
  },
  "sarga-5-138": {
    meaning: "जीवन में कभी-कभी ऐसा भी होता है।",
    english: "Such things sometimes happen in life.",
  },
  "sarga-5-139": {
    meaning: "अब दौड़कर मेरी गोद में वापस आ जा।",
    english: "Now run back into my lap, child.",
  },
  "sarga-5-140": {
    meaning: "विनाश निकट है, अब देर मत कर।",
    english: "Destruction is near; delay no longer.",
  },
  "sarga-5-141": {
    meaning: "द्वेष और क्रोध के विष को भूल जा।",
    english: "Forget the poisons of hatred and anger.",
  },
  "sarga-5-142": {
    meaning: "हे कर्ण, अब युद्ध में तू किसे मारेगा?",
    english: "O Karna, whom will you kill now in battle?",
  },
  "sarga-5-143": {
    meaning: "पाँचों पांडव तेरे छोटे भाई हैं, तू ही बड़ा है।",
    english: "The five Pandavas are your younger brothers; you are the eldest.",
  },
  "sarga-5-144": {
    meaning: "बड़े भाई बनकर उनकी रक्षा के लिए खड़ा होना तेरा काम है।",
    english: "As the elder brother, you should stand to protect them.",
  },
  "sarga-5-145": {
    meaning: "नेता बनकर युद्ध की डोर अपने हाथ में ले।",
    english: "Become the leader and take the reins of war in your hand.",
  },
  "sarga-5-146": {
    meaning: "अपनी विशाल भुजाओं की छाया छोटे भाइयों पर दे।",
    english: "Give your younger brothers the shade of your mighty arms.",
  },
  "sarga-5-147": {
    meaning: "युद्ध जीतकर महान विजय प्राप्त करो।",
    english: "Win the war and gain a great victory.",
  },
  "sarga-5-148": {
    meaning: "विजय-मुकुट पहनकर सारी संपदा भोगो।",
    english: "Wear the crown of victory and enjoy all prosperity.",
  },
  "sarga-5-149": {
    meaning: "यह किसी छल की योजना नहीं है।",
    english: "This is no scheme of deceit.",
  },
  "sarga-5-150": {
    meaning: "पुत्र, मैंने सच ही कहा है।",
    english: "Son, I have spoken the truth.",
  },
  "sarga-5-151": {
    meaning: "विश्वास न हो तो मैं किसकी शपथ खाऊँ?",
    english: "If you do not believe me, by whom shall I swear?",
  },
  "sarga-5-152": {
    meaning: "प्रमाण के लिए यहाँ किसे बुलाऊँ?",
    english: "Whom shall I call here as proof?",
  },
  "sarga-5-153": {
    meaning: "देखो, पश्चिमी तट के पास आकाश में,",
    english: "Look, near the western bank in the sky,",
  },
  "sarga-5-154": {
    meaning: "स्वर्ण-वस्त्रों में जो देवता चमक रहे हैं,",
    english: "the deity shining in golden garments,",
  },
  "sarga-5-155": {
    meaning: "जिनके प्रताप की किरण अद्भुत और अजेय है,",
    english: "whose ray of glory is wondrous and unconquerable,",
  },
  "sarga-5-156": {
    meaning: "तू उन्हीं सूर्यदेव का प्रकाशमय पुत्र है।",
    english: "you are the radiant son of that sun-god.",
  },
  "sarga-5-157": {
    meaning: "कुंती रुकी और आँचल से आँसू पोंछने लगी।",
    english: "Kunti paused and began wiping tears with her veil.",
  },
  "sarga-5-158": {
    meaning: "तभी आकाश-मंडल से एक वाणी आई।",
    english: "Just then, a voice came from the sky.",
  },
  "sarga-5-159": {
    meaning: "कुंती की सारी बातों को सत्य मानो।",
    english: "Know all of Kunti's words to be true.",
  },
  "sarga-5-160": {
    meaning: "बेटा, माँ की आज्ञा अवश्य मानो।",
    english: "Son, you must obey your mother's command.",
  },
  "sarga-5-161": {
    meaning: "यह कहकर सूर्यदेव तुरंत आकाश से उतर गए।",
    english: "Having said this, the sun-god quickly descended from the sky.",
  },
  "sarga-5-162": {
    meaning: "और किसी लहर में मिलकर अदृश्य हो गए।",
    english: "And vanished, merging into some wave.",
  },
  "sarga-5-163": {
    meaning: "मानो कुंती का भयानक भार पाकर,",
    english: "As though receiving Kunti's terrible burden,",
  },
  "sarga-5-164": {
    meaning: "वे दायित्व छोड़कर घबराए हुए चले गए।",
    english: "he left in fear, abandoning the responsibility.",
  },
  "sarga-5-165": {
    meaning: "डूबते सूर्य को प्रणाम करके,",
    english: "After offering salutation to the setting sun,",
  },
  "sarga-5-166": {
    meaning: "और कुंती के चरणों की धूल सिर पर धरकर,",
    english: "and placing the dust of Kunti's feet upon his head,",
  },
  "sarga-5-167": {
    meaning: "राधेय कर्ण बड़े दुख से बोलने लगा।",
    english: "Radheya Karna began to speak with deep sorrow.",
  },
  "sarga-5-168": {
    meaning: "तुम किस मुख से मुझे पुत्र कहने आई हो?",
    english: "With what face have you come to call me son?",
  },
  "sarga-5-169": {
    meaning: "तुम्हें कर्ण से क्या काम? वह तो तुम्हारा पुत्र कहलाने योग्य नहीं।",
    english: "What do you want from Karna? He is hardly worthy to be called your son.",
  },
  "sarga-5-170": {
    meaning: "वह तो माता के शरीर का त्यागा हुआ मल और अपवित्र समझा गया।",
    english: "He was treated as the discarded impurity of a mother's body.",
  },
  "sarga-5-171": {
    meaning: "तुम बड़े वंश की बेटी और ठकुरानी हो।",
    english: "You are the daughter of a great lineage, a noble lady.",
  },
  "sarga-5-172": {
    meaning: "अर्जुन की माता और कुरुकुल की रानी हो।",
    english: "You are Arjuna's mother and the queen of the Kuru line.",
  },
  "sarga-5-173": {
    meaning: "मैं नाम और गोत्र से हीन, दीन और खोटा हूँ।",
    english: "I am low in name and lineage, poor and flawed.",
  },
  "sarga-5-174": {
    meaning: "मैं सारथी-पुत्र हूँ, बहुत छोटा मनुष्य हूँ।",
    english: "I am a charioteer's son, a very small man.",
  },
  "sarga-5-175": {
    meaning: "ठकुरानी, तुम मुझे लेकर क्या करोगी?",
    english: "Noble lady, what will you do with me?",
  },
  "sarga-5-176": {
    meaning: "इस मल को अपनी पवित्र गोद में कहाँ रखोगी?",
    english: "Where will you place this impurity in your pure lap?",
  },
  "sarga-5-177": {
    meaning: "मुझे जन्म की कथा ज्ञात है; बात मत बढ़ाओ।",
    english: "I know the story of my birth; do not stretch the matter.",
  },
  "sarga-5-178": {
    meaning: "मेरे मन को छेड़-छेड़कर मेरी पीड़ा मत उकसाओ।",
    english: "Do not keep stirring my heart and inflaming my pain.",
  },
  "sarga-5-179": {
    meaning: "मैं खूब जानता हूँ कि मुझे किसने जन्म दिया था।",
    english: "I know very well who gave birth to me.",
  },
  "sarga-5-180": {
    meaning: "और किसके प्राणों पर मैं भारी बोझ बन गया था।",
    english: "And upon whose life I became an unbearable burden.",
  },
  "sarga-5-181": {
    meaning: "मनुष्य अनेक यातनाएँ सहकर जन्म पाता है।",
    english: "A human is born after enduring many sufferings.",
  },
  "sarga-5-182": {
    meaning: "शिशु धरती पर भूखा-प्यासा आता है।",
    english: "The infant comes to earth hungry and thirsty.",
  },
  "sarga-5-183": {
    meaning: "माँ सहज स्नेह से व्याकुल होकर प्रेरित होती है।",
    english: "The mother, moved by natural affection, grows restless.",
  },
  "sarga-5-184": {
    meaning: "वह शिशु को हृदय से लगाकर दूध पिलाती है।",
    english: "She holds the child to her heart and feeds him milk.",
  },
  "sarga-5-185": {
    meaning: "मुख चूमकर जन्म की थकान दूर करती है।",
    english: "She kisses his face and removes the fatigue of birth.",
  },
  "sarga-5-186": {
    meaning: "अपनी आँखों से निहारकर उसके अंगों में अमृत भरती है।",
    english: "With her gaze she fills his limbs with nectar.",
  },
  "sarga-5-187": {
    meaning: "पर तुम मुझे गोद में उठा न सकीं।",
    english: "But you could not lift me into your lap.",
  },
  "sarga-5-188": {
    meaning: "तुम मुझे दूध का पहला आहार न दे सकीं।",
    english: "You could not give me my first nourishment of milk.",
  },
  "sarga-5-189": {
    meaning: "उलटे, तुमने मुझे असहाय जल में छोड़ दिया।",
    english: "Instead, you left me helpless in the water.",
  },
  "sarga-5-190": {
    meaning: "और अपनी इज्जत के बड़े महल में लौट गईं।",
    english: "And returned to the grand palace of your honor.",
  },
  "sarga-5-191": {
    meaning: "यदि मैं बचा, तो अपनी आयु-शक्ति से बचा।",
    english: "If I survived, I survived by the strength of my own lifespan.",
  },
  "sarga-5-192": {
    meaning: "मुझे मृत्यु के मुँह से किसने बचाया?",
    english: "Who protected me from the jaws of death?",
  },
  "sarga-5-193": {
    meaning: "क्या तुमने मुझे मारने में कोई कमी छोड़ी थी?",
    english: "Had you left any shortcoming in sending me to death?",
  },
  "sarga-5-194": {
    meaning: "जीवन के बदले तुमने तो साफ मृत्यु ही दी थी।",
    english: "Instead of life, you had plainly given me death.",
  },
  "sarga-5-195": {
    meaning: "पर जब तुमने अपना हृदय पत्थर बना लिया,",
    english: "But when you hardened your heart like stone,",
  },
  "sarga-5-196": {
    meaning: "भाग्य ने मुझे असली माता के पास भेज दिया।",
    english: "fate sent me to my real mother.",
  },
  "sarga-5-197": {
    meaning: "अब जब सब कुछ घट चुका और केवल दो क्षण बचे हैं,",
    english: "Now that everything has happened and only two moments remain,",
  },
  "sarga-5-198": {
    meaning: "जीवन आखिरी दाँव पर लगा है।",
    english: "life is staked on the final throw.",
  },
  "sarga-5-199": {
    meaning: "तब तुम अंचल में प्यार बाँधकर आई हो।",
    english: "Now you have come tying love into the edge of your veil.",
  },
  "sarga-5-200": {
    meaning: "मानो श्मशान में खोई निधि खोजने आई हो।",
    english: "As if searching for lost treasure in a cremation ground.",
  },
  "sarga-5-201": {
    meaning: "तुम अपना खोया संसार वापस नहीं पाओगी।",
    english: "You will not regain your lost world.",
  },
  "sarga-5-202": {
    meaning: "तुम राधा माँ का अधिकार नहीं पा सकोगी।",
    english: "You will not gain Mother Radha's right.",
  },
  "sarga-5-203": {
    meaning: "तुम उसका अधिकार छीनने आई हो।",
    english: "You have come to take away her rightful claim.",
  },
  "sarga-5-204": {
    meaning: "पर क्या कभी यह बात भी मन में लाई है?",
    english: "But have you ever thought of this too?",
  },
  "sarga-5-205": {
    meaning: "उसे सेवा प्यारी है, तुम्हें सुकीर्ति प्यारी है।",
    english: "She loves service; you love good fame.",
  },
  "sarga-5-206": {
    meaning: "तुम ठकुरानी हो, वह केवल माँ-सी सरल नारी है।",
    english: "You are a noble lady; she is simply a woman of motherly service.",
  },
  "sarga-5-207": {
    meaning: "तुमने मुझे अपने तन से निकालकर फेंक दिया।",
    english: "You cast me out from your own body.",
  },
  "sarga-5-208": {
    meaning: "उसने अनाथ को हृदय से लगाकर गर्मी दी।",
    english: "She held the orphan to her heart and warmed him.",
  },
  "sarga-5-209": {
    meaning: "तुम्हारे हृदय से स्नेह की उज्ज्वल धारा नहीं उमड़ी।",
    english: "No bright stream of affection rose from your heart.",
  },
  "sarga-5-210": {
    meaning: "मुझे पाते ही तुम भय से सूख गईं।",
    english: "On receiving me, you dried up with fear.",
  },
  "sarga-5-211": {
    meaning: "पर जिस दिन राधा ने मुझे पाया,",
    english: "But the day Radha found me,",
  },
  "sarga-5-212": {
    meaning: "कहते हैं, उसके स्तनों में दूध उतर आया।",
    english: "they say milk came into her breasts.",
  },
  "sarga-5-213": {
    meaning: "तुमने जन्म देकर भी मुझे पुत्र नहीं माना।",
    english: "Even after giving birth, you did not recognize me as son.",
  },
  "sarga-5-214": {
    meaning: "उसने पाकर मुझे अपना पुत्र मान लिया।",
    english: "She found me and accepted me as her own son.",
  },
  "sarga-5-215": {
    meaning: "अब तुम ही कहो, मैं अपनी आत्मा को कैसे मारूँ?",
    english: "Now tell me, how can I kill my own soul?",
  },
  "sarga-5-216": {
    meaning: "उसे माँ कहने के बदले तुम्हें कैसे माँ पुकारूँ?",
    english: "How can I call you mother instead of her?",
  },
  "sarga-5-217": {
    meaning: "अर्जुन की जननी, मुझे कोई दुख नहीं है।",
    english: "Mother of Arjuna, I have no sorrow now.",
  },
  "sarga-5-218": {
    meaning: "किसी तरह मैंने भी अपना सुख ढूँढ़ लिया है।",
    english: "Somehow I too have found my own happiness.",
  },
  "sarga-5-219": {
    meaning: "जब भी मेरी दृष्टि पीछे जाती है,",
    english: "Whenever my gaze turns backward,",
  },
  "sarga-5-220": {
    meaning: "चिंतन में भी यह बात नहीं आती।",
    english: "this thought does not even enter my reflection.",
  },
  "sarga-5-221": {
    meaning: "कि तुम्हारा आचरण उचित था या अनुचित।",
    english: "Whether your conduct was right or wrong.",
  },
  "sarga-5-222": {
    meaning: "या मेरा असमय जन्म शील के विरुद्ध था।",
    english: "Or whether my untimely birth violated social virtue.",
  },
  "sarga-5-223": {
    meaning: "पर एक बात है, जिसे सोचकर मन में,",
    english: "But there is one thing which, when I think of it,",
  },
  "sarga-5-224": {
    meaning: "मैं जीवन भर जलता आया हूँ।",
    english: "has burned me throughout my whole life.",
  },
  "sarga-5-225": {
    meaning: "मैंने अज्ञात कुल और शील को बाधा नहीं माना।",
    english: "I did not treat unknown lineage and status as obstacles.",
  },
  "sarga-5-226": {
    meaning: "मैंने भुजबल को ही अपना भाग्य माना।",
    english: "I always considered the strength of my arms my fate.",
  },
  "sarga-5-227": {
    meaning: "बाधाओं के ऊपर चढ़कर धूम मचाई।",
    english: "I climbed over obstacles and made my mark.",
  },
  "sarga-5-228": {
    meaning: "पुरुषार्थ पाकर मैंने सब कुछ पाया।",
    english: "Through effort, I gained everything.",
  },
  "sarga-5-229": {
    meaning: "अभिशाप लेकर जन्मा, पर वरदानी बन गया।",
    english: "I was born with a curse, yet became one who grants boons.",
  },
  "sarga-5-230": {
    meaning: "कंगाल बनकर आया, पर दानी कहलाया।",
    english: "I came as a pauper, yet became known as a giver.",
  },
  "sarga-5-231": {
    meaning: "जीवन ने जो भी मूल्य माँगे, मैंने दे दिए।",
    english: "Whatever prices life demanded, I paid them.",
  },
  "sarga-5-232": {
    meaning: "कभी किसी के आगे सिर नहीं झुकाया।",
    english: "I never bowed my head before anyone.",
  },
  "sarga-5-233": {
    meaning: "पर हाय, विधाता इतना विपरीत क्यों हुआ?",
    english: "But alas, why did fate turn so hostile?",
  },
  "sarga-5-234": {
    meaning: "मुझ वीर पुत्र को डरपोक माँ क्यों मिली?",
    english: "Why did a brave son like me receive a fearful mother?",
  },
  "sarga-5-235": {
    meaning: "जो जाति के भय से पत्थर बन गई।",
    english: "Who became stone out of fear of caste.",
  },
  "sarga-5-236": {
    meaning: "और दूधमुँहे पुत्र से संबंध तोड़कर भाग गई।",
    english: "And broke ties with her infant son and ran away.",
  },
  "sarga-5-237": {
    meaning: "वह स्वयं नहीं मरी, पुत्र को मारकर भी नहीं।",
    english: "She did not die herself, not even after killing her son in effect.",
  },
  "sarga-5-238": {
    meaning: "बल्कि कठोर, क्रूर और निर्मोही बनकर जीना चाहा।",
    english: "Instead she chose to live, hard, cruel, and detached.",
  },
  "sarga-5-239": {
    meaning: "क्या कहूँ देवी, मैं तो अनचाहा ठहरा।",
    english: "What can I say, lady? I was unwanted.",
  },
  "sarga-5-240": {
    meaning: "पर तुमने माँ का चरित्र बहुत अच्छी तरह निभाया!",
    english: "But you played the role of mother very well indeed!",
  },
  "sarga-5-241": {
    meaning: "तुम्हारे हृदय में कौन-सा लोभ और कौन-से अरमान थे?",
    english: "What greed and what desires were in your heart?",
  },
  "sarga-5-242": {
    meaning: "जिनकी बाधा तुमने अपने पुत्र में देखी?",
    english: "What ambitions did you see obstructed by your son?",
  },
  "sarga-5-243": {
    meaning: "शायद यह छोटी-सी बात कि राजसुख पाओ।",
    english: "Perhaps this small thing: that you might enjoy royal comfort.",
  },
  "sarga-5-244": {
    meaning: "किसी राजा को वरकर रानी कहलाओ।",
    english: "That by marrying some king, you might be called queen.",
  },
  "sarga-5-245": {
    meaning: "वधू-मंडल में सम्मान मिले और यश बढ़े।",
    english: "That you receive honor among brides and your fame increase.",
  },
  "sarga-5-246": {
    meaning: "धरती पर साध्वी और सती कहलाओ।",
    english: "That you be called virtuous and chaste on earth.",
  },
  "sarga-5-247": {
    meaning: "बलवान, पवित्र और प्रतापी पुत्र भी पाओ।",
    english: "That you have strong, pure, and glorious sons.",
  },
  "sarga-5-248": {
    meaning: "मेरे जैसा पाप-जन्मा, मलिन और दुखी नहीं।",
    english: "Not one like me, born in sin, stained and sorrowful.",
  },
  "sarga-5-249": {
    meaning: "तो देवी, तुम सब कुछ पाकर धन्य हुईं।",
    english: "So, lady, you were blessed by gaining everything.",
  },
  "sarga-5-250": {
    meaning: "मुझे खोकर भी तुमने कुछ नहीं गँवाया।",
    english: "By losing me, you lost nothing.",
  },
  "sarga-5-251": {
    meaning: "लेकिन जिनका दीपक आकाश में जलता है,",
    english: "But those whose lamp burns in the sky,",
  },
  "sarga-5-252": {
    meaning: "जिनके अधीन पूरा संसार चलता है,",
    english: "under whose rule the whole world moves,",
  },
  "sarga-5-253": {
    meaning: "उनकी पुस्तक में भी कुछ लेखा होगा।",
    english: "their book too must contain some account.",
  },
  "sarga-5-254": {
    meaning: "उन्होंने भी तुम्हारे कुछ कर्म देखे होंगे।",
    english: "They too must have seen some of your deeds.",
  },
  "sarga-5-255": {
    meaning: "नवजात पुत्र का धारा पर बहना,",
    english: "A newborn son floating upon the current,",
  },
  "sarga-5-256": {
    meaning: "और माँ का वज्र-कठोर होकर वह दृश्य सहना।",
    english: "and the mother, hard as thunderbolt, bearing that sight.",
  },
  "sarga-5-257": {
    meaning: "फिर उसका अनेक सुखों में डूब जाना,",
    english: "Then her sinking into many pleasures,",
  },
  "sarga-5-258": {
    meaning: "और छोड़े हुए जन्मे पुत्र का अनगिनत दुखों में जलना।",
    english: "while the abandoned child burned in endless sorrows.",
  },
  "sarga-5-259": {
    meaning: "जब हम दोनों मरकर वापस जाएँगे,",
    english: "When both of us die and return there,",
  },
  "sarga-5-260": {
    meaning: "ये सारे दृश्य फिर सामने आ जाएँगे।",
    english: "all these scenes will come before us again.",
  },
  "sarga-5-261": {
    meaning: "मनुष्य संसार की आँखों से अपना भेद छिपाकर,",
    english: "A person hides his secret from the eyes of the world,",
  },
  "sarga-5-262": {
    meaning: "अपने मन को समझाकर व्यर्थ तृप्त हो जाता है।",
    english: "and vainly comforts his own mind.",
  },
  "sarga-5-263": {
    meaning: "वह सोचता है कि जीवन में कोई छेद शेष नहीं रहा।",
    english: "He thinks no opening remains in life.",
  },
  "sarga-5-264": {
    meaning: "हम पर्दे में अच्छी तरह सुरक्षित हैं।",
    english: "We are well protected behind the veil.",
  },
  "sarga-5-265": {
    meaning: "पर कहीं अदृश्य जगत के स्वामी हँसते हैं।",
    english: "But somewhere the unseen lord of the world smiles.",
  },
  "sarga-5-266": {
    meaning: "अंतर्यामी तब भी सब कुछ देखते हैं।",
    english: "The knower within sees everything even then.",
  },
  "sarga-5-267": {
    meaning: "नियति सबको कहीं सहेजकर रखती है।",
    english: "Destiny preserves everything somewhere.",
  },
  "sarga-5-268": {
    meaning: "सब कुछ अदृश्य पट पर अंकित करती रहती है।",
    english: "It records everything upon an unseen screen.",
  },
  "sarga-5-269": {
    meaning: "यदि उस पट का चित्र उज्ज्वल नहीं है,",
    english: "If the picture on that screen is not bright,",
  },
  "sarga-5-270": {
    meaning: "यदि उसमें कालिमा या कोई मल लगा है,",
    english: "if there is blackness or stain upon it,",
  },
  "sarga-5-271": {
    meaning: "तो हमारी विजय का मूल्य क्या रह जाता है?",
    english: "what value remains in our victory?",
  },
  "sarga-5-272": {
    meaning: "और संसार में जुटाई हुई कलुषित समृद्धि का क्या मूल्य है?",
    english: "What value remains in all the tainted prosperity gathered in the world?",
  },
  "sarga-5-273": {
    meaning: "हाय, तुम्हारे भीतर धर्म का भाव जागा ही नहीं।",
    english: "Alas, the feeling of dharma did not awaken in you.",
  },
  "sarga-5-274": {
    meaning: "तुम जीवन के आगे की बात देख ही नहीं पाईं।",
    english: "You could not see beyond immediate life.",
  },
  "sarga-5-275": {
    meaning: "तुमने दीन और कातर पुत्र का मुख नहीं देखा।",
    english: "You did not look at the face of your helpless, grieving son.",
  },
  "sarga-5-276": {
    meaning: "केवल अपना क्षणभंगुर सुख देखा।",
    english: "You saw only your fleeting comfort.",
  },
  "sarga-5-277": {
    meaning: "जब विधाता का पहला वरदान तुम्हें मिला,",
    english: "When destiny's first boon came to you,",
  },
  "sarga-5-278": {
    meaning: "जब गोद में तुम्हें नन्हा दान मिला,",
    english: "when a tiny gift was placed in your lap,",
  },
  "sarga-5-279": {
    meaning: "तब तुम वीर-माता बनकर आगे क्यों नहीं आईं?",
    english: "why did you not step forward as a brave mother?",
  },
  "sarga-5-280": {
    meaning: "सबके सामने निर्भय होकर क्यों नहीं चिल्लाईं?",
    english: "Why did you not cry out fearlessly before everyone?",
  },
  "sarga-5-281": {
    meaning: "सुनो, समाज के प्रमुख धर्म-ध्वजधारियों,",
    english: "Listen, leaders of society who carry the banner of dharma,",
  },
  "sarga-5-282": {
    meaning: "मैं अविवाहित नारी होकर भी पुत्रवती हो गई हूँ।",
    english: "I, an unmarried woman, have become a mother.",
  },
  "sarga-5-283": {
    meaning: "अब चाहो तो मुझे भवन में रहने दो।",
    english: "Now let me remain in the house if you wish.",
  },
  "sarga-5-284": {
    meaning: "या जातिच्युत कर मुझे वन में भेज दो।",
    english: "Or cast me out from caste and send me to the forest.",
  },
  "sarga-5-285": {
    meaning: "लेकिन मैं अपने प्राणों की इस मणि को नहीं छोड़ूँगी।",
    english: "But I will not abandon this jewel of my life.",
  },
  "sarga-5-286": {
    meaning: "मातृत्व-धर्म से कभी मुँह नहीं मोड़ूँगी।",
    english: "I will never turn away from the dharma of motherhood.",
  },
  "sarga-5-287": {
    meaning: "यह दिव्य और मुक्त प्रेम का फल है।",
    english: "This is the fruit of divine and free love.",
  },
  "sarga-5-288": {
    meaning: "जैसा भी हो, बेटा माँ का सहारा होता है।",
    english: "Whatever he may be, a son is a mother's support.",
  },
  "sarga-5-289": {
    meaning: "सोचो, क्रोधित होकर संसार कौन-सा दंड देता?",
    english: "Think, what punishment could the angry world have given?",
  },
  "sarga-5-290": {
    meaning: "निंदा और कलंक के सिवा और क्या लेता?",
    english: "What could it take except slander and stigma?",
  },
  "sarga-5-291": {
    meaning: "ग्लानि धूल की तरह हवा में उड़ जाती।",
    english: "Shame would have flown away like dust in the wind.",
  },
  "sarga-5-292": {
    meaning: "तुम अग्नि में तपकर पवित्र हो जातीं।",
    english: "You would have become purified by passing through fire.",
  },
  "sarga-5-293": {
    meaning: "शायद समाज वज्र बनकर तुम पर टूटता।",
    english: "Perhaps society would have struck you like a thunderbolt.",
  },
  "sarga-5-294": {
    meaning: "शायद दुख के भयानक बादल तुम पर घिरते।",
    english: "Perhaps terrible clouds of sorrow would have gathered over you.",
  },
  "sarga-5-295": {
    meaning: "शायद तुम्हें परिजनों से अलग होना पड़ता।",
    english: "Perhaps you would have had to separate from family.",
  },
  "sarga-5-296": {
    meaning: "शायद तुम्हें भवन छोड़कर जाना पड़ता।",
    english: "Perhaps you would have had to leave the palace.",
  },
  "sarga-5-297": {
    meaning: "पर विपत्ति की मार सहकर तुम अड़ी रहतीं।",
    english: "But bearing the blows of adversity, you should have stood firm.",
  },
  "sarga-5-298": {
    meaning: "संसार के सामने निर्भय खड़ी रहतीं।",
    english: "You should have stood fearless before the world.",
  },
  "sarga-5-299": {
    meaning: "अमृत पीकर विष को देखकर घबराती नहीं।",
    english: "Having drunk nectar, you should not have feared poison.",
  },
  "sarga-5-300": {
    meaning: "यदि प्रेम किया था, तो आगे बढ़कर उसका मूल्य चुकातीं।",
    english: "If you had loved, you should have stepped forward and paid its price.",
  },
  "sarga-5-301": {
    meaning: "तुम महलों में राजसुख भोगती हुई न रहतीं।",
    english: "You would not have remained in palaces enjoying royal comfort.",
  },
  "sarga-5-302": {
    meaning: "बल्कि किसी पेड़ के नीचे खड़ी होकर मुझे पालतीं।",
    english: "You would have raised me standing beneath some tree.",
  },
  "sarga-5-303": {
    meaning: "देवी, तब तुम संसार में महान कीर्ति पातीं।",
    english: "Lady, then you would have won great fame in the world.",
  },
  "sarga-5-304": {
    meaning: "सचमुच सती और श्रेष्ठ चरित्र वाली नारी कहलातीं।",
    english: "You would truly have been called a chaste and noble woman.",
  },
  "sarga-5-305": {
    meaning: "मैं बड़े गर्व से सिर उठाकर चलता।",
    english: "I would have walked with my head held high in great pride.",
  },
  "sarga-5-306": {
    meaning: "अपने मन को मन में छिपाकर संकुचित न रहता।",
    english: "I would not have hidden my heart within itself in shame.",
  },
  "sarga-5-307": {
    meaning: "मनुष्य रूप में आया कर्ण क्या नहीं पा सकता था?",
    english: "What could Karna, born as a heroic human, not have achieved?",
  },
  "sarga-5-308": {
    meaning: "यदि उसे तुम्हारी पवित्र गोद मिली होती।",
    english: "If he had received your pure lap.",
  },
  "sarga-5-309": {
    meaning: "पर अब सब कुछ हो चुका, रोना व्यर्थ है।",
    english: "But now everything has happened; weeping is useless.",
  },
  "sarga-5-310": {
    meaning: "बीती बात पर विलाप करना जीवन खोना है।",
    english: "To lament the past is to waste life.",
  },
  "sarga-5-311": {
    meaning: "जो छूट चुका है, उसे मैं कैसे पाऊँगा?",
    english: "How can I regain what has been lost?",
  },
  "sarga-5-312": {
    meaning: "मैं कितनी दूर लौटूँगा और कहाँ जाऊँगा?",
    english: "How far can I return, and where would I go?",
  },
  "sarga-5-313": {
    meaning: "जिस सौभाग्य को तुमने कठोर होकर छीन लिया था,",
    english: "The fortune you had cruelly taken away,",
  },
  "sarga-5-314": {
    meaning: "आज रोकर वही लौटाने आई हो।",
    english: "today you have come weeping to give it back.",
  },
  "sarga-5-315": {
    meaning: "गंगा का जल अब बीत चुका है, पर वह मेरे लिए विष बन चुका है।",
    english: "The water of the Ganga has flowed past; now it has become poison for me.",
  },
  "sarga-5-316": {
    meaning: "अब उसका लेना-देना सरल नहीं रहा।",
    english: "Its exchange is no longer simple.",
  },
  "sarga-5-317": {
    meaning: "जो गहरा भेद जीवन भर नहीं खोला,",
    english: "The deep secret you never opened through life,",
  },
  "sarga-5-318": {
    meaning: "अब बुढ़ापे में उसे क्यों खोलती हो?",
    english: "why do you open it now in old age?",
  },
  "sarga-5-319": {
    meaning: "सब कुछ पर पड़ा आवरण पड़ा ही रहने दो।",
    english: "Let the veil over everything remain where it is.",
  },
  "sarga-5-320": {
    meaning: "बाकी अपमान भी मुझे ही सहने दो।",
    english: "Let me bear the remaining humiliation too.",
  },
  "sarga-5-321": {
    meaning: "दूध से वंचित कर, गोद से निकालकर,",
    english: "Having deprived me of milk and cast me out of the lap,",
  },
  "sarga-5-322": {
    meaning: "परिवार, गोत्र और कुल से निर्वासित कर,",
    english: "having exiled me from family, lineage, and clan,",
  },
  "sarga-5-323": {
    meaning: "तुमने जिस तरह मुझ भाग्यहीन को फेंका था,",
    english: "as you threw away this unfortunate one,",
  },
  "sarga-5-324": {
    meaning: "मुझे आज भी त्यक्त और विषादपूर्ण रहने दो।",
    english: "let me remain abandoned and sorrowful even today.",
  },
  "sarga-5-325": {
    meaning: "हे देवी, मुझे पाने का यह प्रयास व्यर्थ है।",
    english: "Lady, this attempt to reclaim me is in vain.",
  },
  "sarga-5-326": {
    meaning: "मैं फिर वंश में वापस जाने वाला नहीं हूँ।",
    english: "I am not going back into that lineage.",
  },
  "sarga-5-327": {
    meaning: "मैंने सारी आयु कुलहीन कहलाकर बिता दी।",
    english: "I have spent my whole life being called without lineage.",
  },
  "sarga-5-328": {
    meaning: "अब उसे अपना कर मुझे क्या मिलेगा?",
    english: "What will I gain by accepting it now?",
  },
  "sarga-5-329": {
    meaning: "यद्यपि जीवन की कथा कलंक से भरी है,",
    english: "Though the story of my life is full of stigma,",
  },
  "sarga-5-330": {
    meaning: "मेरे लिए वह कोई नई बात नहीं है।",
    english: "it is nothing new to me.",
  },
  "sarga-5-331": {
    meaning: "जो कुछ तुमने बड़े दुख से कहा है,",
    english: "Whatever you have said in deep sorrow,",
  },
  "sarga-5-332": {
    meaning: "वह मैं कृष्ण के मुख से पहले ही सुन चुका हूँ।",
    english: "I have already heard it from Krishna's mouth.",
  },
  "sarga-5-333": {
    meaning: "न जाने अचानक तुम सबने क्या पा लिया है,",
    english: "Who knows what you all have suddenly discovered,",
  },
  "sarga-5-334": {
    meaning: "कि मुझ पर इतना प्रेम उमड़ आया है।",
    english: "that so much love has surged toward me.",
  },
  "sarga-5-335": {
    meaning: "अब तक किसी ने मुझे स्नेह से नहीं देखा।",
    english: "Until now, no one looked at me with affection.",
  },
  "sarga-5-336": {
    meaning: "पर मेरा सौभाग्य अचानक जाग उठा है।",
    english: "But now my fortune has suddenly awakened.",
  },
  "sarga-5-337": {
    meaning: "मैं भली-भाँति समझता हूँ कि यह नीति क्या है।",
    english: "I understand well what this policy is.",
  },
  "sarga-5-338": {
    meaning: "असमय जन्मी हुई यह प्रीति क्या है।",
    english: "What this untimely love really is.",
  },
  "sarga-5-339": {
    meaning: "तुम बिछुड़े कुलजन से मुझे जोड़ने नहीं आई हो।",
    english: "You have not come to unite me with separated kin.",
  },
  "sarga-5-340": {
    meaning: "तुम मुझे दुर्योधन से अलग करने आई हो।",
    english: "You have come to split me away from Duryodhana.",
  },
  "sarga-5-341": {
    meaning: "जब युद्ध सिर पर आ खड़ा हुआ है,",
    english: "Now that war stands over our heads,",
  },
  "sarga-5-342": {
    meaning: "परिणाम सोचकर तुम्हारा मन काँप उठा है।",
    english: "your heart has shaken at the thought of its outcome.",
  },
  "sarga-5-343": {
    meaning: "तुम मुझे गोद में भरने नहीं आई हो।",
    english: "You have not come to hold me in your lap.",
  },
  "sarga-5-344": {
    meaning: "तुम कुरुराज की शक्ति को कुछ कमजोर करने आई हो।",
    english: "You have come to weaken the Kuru king's strength.",
  },
  "sarga-5-345": {
    meaning: "नहीं तो यह स्नेह की प्रबल धारा,",
    english: "Otherwise, this powerful stream of affection,",
  },
  "sarga-5-346": {
    meaning: "तट को मरोड़ती, झकझोरती और बंधन तोड़ती हुई,",
    english: "twisting the bank, shaking it, and breaking its prison,",
  },
  "sarga-5-347": {
    meaning: "बाँह बढ़ाकर मुझे खींचने पहले क्यों नहीं आई?",
    english: "why did it not come earlier to pull me with outstretched arms?",
  },
  "sarga-5-348": {
    meaning: "यह वरदान पहले क्यों नहीं लाई?",
    english: "Why did it not bring this boon before?",
  },
  "sarga-5-349": {
    meaning: "कृष्ण पर चिंता डालकर निडर रहना,",
    english: "To put the worry on Krishna and remain fearless,",
  },
  "sarga-5-350": {
    meaning: "इस भाग्यशाली अर्जुन की भी क्या बात है!",
    english: "what can one say of this fortunate Arjuna!",
  },
  "sarga-5-351": {
    meaning: "पिता ने माँगकर कवच-कुण्डल ले लिए।",
    english: "His father begged away my armor and earrings.",
  },
  "sarga-5-352": {
    meaning: "अब जननी शत्रु-बल को कुंठित करने आई है।",
    english: "Now his mother has come to blunt the enemy's strength.",
  },
  "sarga-5-353": {
    meaning: "लेकिन ऐसा नहीं होगा; देवी, तुम जाओ।",
    english: "But this will not happen; lady, you may go.",
  },
  "sarga-5-354": {
    meaning: "जैसे भी हो, अपने पुत्र का सौभाग्य मनाओ।",
    english: "In whatever way you can, celebrate your son's fortune.",
  },
  "sarga-5-355": {
    meaning: "कृष्ण भले कभी अर्जुन को छोड़ दें,",
    english: "Even if Krishna someday leaves Arjuna,",
  },
  "sarga-5-356": {
    meaning: "मैं दुर्योधन को छोड़ने वाला नहीं हूँ।",
    english: "I am not going to leave Duryodhana.",
  },
  "sarga-5-357": {
    meaning: "कुरुराज का मेरे रोम-रोम पर ऋण है।",
    english: "Every pore of my being is indebted to the Kuru king.",
  },
  "sarga-5-358": {
    meaning: "उससे उऋण होना कभी आसान नहीं है।",
    english: "It is never easy to become free of that debt.",
  },
  "sarga-5-359": {
    meaning: "यदि छल करूँ, तो संसार में कौन-सा यश लूँगा?",
    english: "If I deceive him, what fame will I earn in the world?",
  },
  "sarga-5-360": {
    meaning: "प्राण ही नहीं, तो मैं उसे और क्या दे सकता हूँ?",
    english: "If not my life, what else can I give him?",
  },
  "sarga-5-361": {
    meaning: "मैं धर्म के ऊपर पहले ही न्योछावर हो चुका हूँ।",
    english: "I have already been offered up to dharma.",
  },
  "sarga-5-362": {
    meaning: "मैं देवता पर चढ़े नैवेद्य जैसा अर्पित हूँ।",
    english: "I am like an offering already placed before the deity.",
  },
  "sarga-5-363": {
    meaning: "अर्पित फूल को पाने की लालसा मत करो।",
    english: "Do not long for a flower that has already been offered.",
  },
  "sarga-5-364": {
    meaning: "पूजा की वेदी पर हाथ मत बढ़ाओ।",
    english: "Do not stretch your hand toward the altar of worship.",
  },
  "sarga-5-365": {
    meaning: "अपनी व्यथा कहकर राधेय मौन हो गया।",
    english: "Having spoken his pain, Radheya fell silent.",
  },
  "sarga-5-366": {
    meaning: "उसकी आँखों से आँसू बहने लगे।",
    english: "Tears began to flow from his eyes.",
  },
  "sarga-5-367": {
    meaning: "कुंती के मुख में जीभ व्यर्थ हिल रही थी।",
    english: "Kunti's tongue moved in vain within her mouth.",
  },
  "sarga-5-368": {
    meaning: "उसे कहने के लिए कोई बात नहीं मिल रही थी।",
    english: "She could find no words to say.",
  },
  "sarga-5-369": {
    meaning: "आकाश में मोतियों जैसे तारों से गुँथे केश फैलाकर,",
    english: "Spreading hair across the sky woven with pearl-like stars,",
  },
  "sarga-5-370": {
    meaning: "और पूरे जगत को अंजन-सा अँधेरा उँड़ेलकर नहलाते हुए,",
    english: "pouring collyrium-darkness and bathing the whole world in it,",
  },
  "sarga-5-371": {
    meaning: "अपनी साड़ी में अनंत तारे टाँके हुए,",
    english: "with countless stars stitched into her sari,",
  },
  "sarga-5-372": {
    meaning: "रात्रि अँधकार का आँचल फैलाए घूम रही थी।",
    english: "night moved about spreading her dark veil.",
  },
  "sarga-5-373": {
    meaning: "दिशाएँ स्तब्ध थीं और पूरा जगत मौन था।",
    english: "The directions were stunned, and the whole world was silent.",
  },
  "sarga-5-374": {
    meaning: "कुंजों में अब कोई पक्षी नहीं बोल रहा था।",
    english: "No bird now spoke in the groves.",
  },
  "sarga-5-375": {
    meaning: "झींगुर कभी-कभी अपना स्वर भरते थे।",
    english: "Only crickets occasionally filled the silence with sound.",
  },
  "sarga-5-376": {
    meaning: "और जल में कभी-कभी मछली छप-छप करती थी।",
    english: "And now and then a fish splashed in the water.",
  },
  "sarga-5-377": {
    meaning: "इस सन्नाटे में नदी किनारे दो लोग,",
    english: "In this silence, two people on the riverbank,",
  },
  "sarga-5-378": {
    meaning: "भाग्य से मारे, पत्थर जैसे मौन खड़े थे।",
    english: "struck by fate, stood mute like stone.",
  },
  "sarga-5-379": {
    meaning: "कर्ण मन में यह सोचकर सिसक रहा था,",
    english: "Karna sobbed within, thinking,",
  },
  "sarga-5-380": {
    meaning: "मेरे कटु वचनों में असमय विष क्यों उबल पड़ा?",
    english: "why did poison boil up untimely in my harsh words?",
  },
  "sarga-5-381": {
    meaning: "कुंती सोच नहीं पा रही थी कि और क्या कहे।",
    english: "Kunti could not think what more to say.",
  },
  "sarga-5-382": {
    meaning: "निंदा और अपराध-बोध से वह भीतर ही भीतर मर रही थी।",
    english: "Crushed by blame, she was dying within.",
  },
  "sarga-5-383": {
    meaning: "आखिर पृथा ने अपना मन समेटकर कहा।",
    english: "At last Pritha gathered her heart and spoke.",
  },
  "sarga-5-384": {
    meaning: "मैं वेदी पर चढ़ा फूल उठाने नहीं आई।",
    english: "I have not come to lift a flower already placed on the altar.",
  },
  "sarga-5-385": {
    meaning: "न किसी और का फूल, न किसी और का धन लेने आई हूँ।",
    english: "I have not come for another's flower or another's wealth.",
  },
  "sarga-5-386": {
    meaning: "मैं तो अपने ही शरीर का अंश खोज रही थी।",
    english: "I was searching only for a part of my own body.",
  },
  "sarga-5-387": {
    meaning: "पर समझ गई कि वह मुझे नहीं मिलेगा।",
    english: "But I understand now that I will not receive it.",
  },
  "sarga-5-388": {
    meaning: "बिछुड़ी डाली पर फूल फिर आकर नहीं खिलता।",
    english: "A flower does not bloom again on a branch from which it was severed.",
  },
  "sarga-5-389": {
    meaning: "तो अब जाती हूँ; मैं और क्या कर सकूँगी?",
    english: "Then I will go; what more can I do?",
  },
  "sarga-5-390": {
    meaning: "आगे मैं और क्या उत्तर दे सकूँगी?",
    english: "What further answer can I give?",
  },
  "sarga-5-391": {
    meaning: "जो भयानक दोष मैंने जीवन भर किया,",
    english: "The terrible wrong I committed throughout life,",
  },
  "sarga-5-392": {
    meaning: "उसे क्षण भर की कौन-सी बात से मिटाऊँगी?",
    english: "with what words can I erase it in a moment?",
  },
  "sarga-5-393": {
    meaning: "बेटा, सचमुच मैं बहुत बड़ी पापिनी हूँ।",
    english: "Son, truly, I am deeply sinful.",
  },
  "sarga-5-394": {
    meaning: "मैं मनुष्य रूप में भयानक साँपिनी हूँ।",
    english: "I am a terrible serpent in human form.",
  },
  "sarga-5-395": {
    meaning: "मुझ जैसी प्रचंड पापमयी, कुटिल और हत्यारी,",
    english: "So fiercely sinful, crooked, and murderous as I am,",
  },
  "sarga-5-396": {
    meaning: "धरती पर दूसरी नारी कौन होगी?",
    english: "what other woman could exist on earth?",
  },
  "sarga-5-397": {
    meaning: "फिर भी जो ताड़ना मैंने तुमसे सुनी,",
    english: "Yet the rebuke I heard from you,",
  },
  "sarga-5-398": {
    meaning: "मेरा मन भी मुझसे वही कहता रहा है।",
    english: "my own heart has always spoken the same to me.",
  },
  "sarga-5-399": {
    meaning: "मैं यश ओढ़कर संसार को छलती रही हूँ।",
    english: "Wearing fame as a covering, I kept deceiving the world.",
  },
  "sarga-5-400": {
    meaning: "लेकिन हृदय की गहराई में सदा जलती रही हूँ।",
    english: "But deep in my heart I have always burned.",
  },
  "sarga-5-401": {
    meaning: "अब भी मन पर आग की रेखा खिंची हुई है।",
    english: "Even now a line of fire is drawn across my heart.",
  },
  "sarga-5-402": {
    meaning: "जब त्यागते समय मैंने तुझे देखा था।",
    english: "From the moment I saw you while abandoning you.",
  },
  "sarga-5-403": {
    meaning: "मैं तुझे पेटिका के भीतर डाल रही थी।",
    english: "I was placing you inside the box.",
  },
  "sarga-5-404": {
    meaning: "और तू मुझे टुक-टुक देखकर ताक रहा था।",
    english: "And you were staring at me, piece by piece, helplessly.",
  },
  "sarga-5-405": {
    meaning: "तेरा वह कातर, टुकुर-टुकुर देखना,",
    english: "That helpless, wide-eyed gaze of yours,",
  },
  "sarga-5-406": {
    meaning: "और मेरा पत्थर बना साँपिनी-सा मन,",
    english: "and my stone-like, serpent-hearted mind,",
  },
  "sarga-5-407": {
    meaning: "ये दोनों मुझे हमेशा पीड़ा देते रहे हैं।",
    english: "both have always kept wounding me.",
  },
  "sarga-5-408": {
    meaning: "हे कर्ण, अपनी व्यथा तुझे कहाँ तक सुनाऊँ?",
    english: "O Karna, how far can I narrate my pain to you?",
  },
  "sarga-5-409": {
    meaning: "वत्स, लज्जित होकर तू व्यर्थ रो रहा है।",
    english: "Child, you are weeping in shame for no reason.",
  },
  "sarga-5-410": {
    meaning: "सत्य का स्वर कब कोमल होता है?",
    english: "When is the voice of truth ever gentle?",
  },
  "sarga-5-411": {
    meaning: "धिक्कार के सिवा मैं और क्या सुनूँगी?",
    english: "What else should I hear except condemnation?",
  },
  "sarga-5-412": {
    meaning: "मैंने काँटे बोए थे, फूल कैसे चुनूँगी?",
    english: "I sowed thorns; how can I gather flowers?",
  },
  "sarga-5-413": {
    meaning: "धिक्कार, ग्लानि, निंदा और पछतावा ही,",
    english: "Condemnation, shame, slander, and regret,",
  },
  "sarga-5-414": {
    meaning: "यही लेकर मेरा निर्मोही जीवन बीता है।",
    english: "with these alone my loveless life has passed.",
  },
  "sarga-5-415": {
    meaning: "असंख्य बार मन में अरमान जागे थे,",
    english: "Countless times desires rose in my heart,",
  },
  "sarga-5-416": {
    meaning: "कि अपना अंतर खोलकर तेरे आगे रख दूँ।",
    english: "to open my heart and place it before you.",
  },
  "sarga-5-417": {
    meaning: "पर ग्लानि से भरकर कदम उठा न सकी।",
    english: "But filled with shame, I could not take the step.",
  },
  "sarga-5-418": {
    meaning: "निंदा के डर से सामने न आ सकी।",
    english: "Out of fear of blame, I could not come before you.",
  },
  "sarga-5-419": {
    meaning: "लेकिन जब कुरुकुल पर विनाश छा गया है,",
    english: "But now that destruction has covered the Kuru line,",
  },
  "sarga-5-420": {
    meaning: "और अंतिम घड़ी प्रलय को निकट ले आई है।",
    english: "and the final hour has brought doom near.",
  },
  "sarga-5-421": {
    meaning: "तब मैंने किसी तरह सारी हिम्मत समेटी।",
    english: "Then I somehow gathered all my courage.",
  },
  "sarga-5-422": {
    meaning: "भाग्य की मारी मैं तुम्हारे पास आई।",
    english: "Struck by fate, I came to you.",
  },
  "sarga-5-423": {
    meaning: "सोचा कि यदि आज भी चूक गई,",
    english: "I thought that if I failed even today,",
  },
  "sarga-5-424": {
    meaning: "तो फिर इस भयंकर अनर्थ को रोक नहीं पाऊँगी।",
    english: "I would not be able to stop this terrible disaster.",
  },
  "sarga-5-425": {
    meaning: "इसलिए मन की सारी शक्तियाँ जुटाकर,",
    english: "Therefore, gathering all the powers of my heart,",
  },
  "sarga-5-426": {
    meaning: "सब कुछ सहने के लिए तैयार होकर,",
    english: "and readying myself to endure everything,",
  },
  "sarga-5-427": {
    meaning: "मैं यह छिपा हुआ रहस्य बताने आई थी।",
    english: "I came to reveal this hidden secret.",
  },
  "sarga-5-428": {
    meaning: "तुझे भाई-वध के पाप से बचाने आई थी।",
    english: "I came to save you from the sin of killing your brothers.",
  },
  "sarga-5-429": {
    meaning: "इसलिए बता दिया कि बेटा, तू किस माँ का है।",
    english: "So I told you, son, whose child you are.",
  },
  "sarga-5-430": {
    meaning: "तेरे शरीर में किस कुल का दिव्य रक्त है।",
    english: "What divine lineage's blood flows in your body.",
  },
  "sarga-5-431": {
    meaning: "अब तू स्वतंत्र है; जो चाहे कर।",
    english: "Now you are free; do as you wish.",
  },
  "sarga-5-432": {
    meaning: "द्वेष भूल जा, या अपने छोटे भाइयों से युद्ध कर।",
    english: "Forget hatred, or fight your younger brothers.",
  },
  "sarga-5-433": {
    meaning: "जो कलंक मन में कसक रहा था, वह निकल गया।",
    english: "The stain that ached in my heart has come out.",
  },
  "sarga-5-434": {
    meaning: "हाँ, टूटे जीवन में एक लालसा रह गई।",
    english: "Yes, one longing remains in this broken life.",
  },
  "sarga-5-435": {
    meaning: "मुझे छह-छह पुत्र मिले थे, पर विधाता विपरीत रहा।",
    english: "I had received six sons, but fate turned against me.",
  },
  "sarga-5-436": {
    meaning: "मैं सदा पाँच पुत्रों की ही माता रह गई।",
    english: "I remained forever the mother of only five sons.",
  },
  "sarga-5-437": {
    meaning: "मैं बहुत बड़ी अभिलाषा लेकर आई थी।",
    english: "I had come with a very great desire.",
  },
  "sarga-5-438": {
    meaning: "पर अपने बल पर आशा लेकर नहीं आई थी।",
    english: "But I did not bring hope based on my own strength.",
  },
  "sarga-5-439": {
    meaning: "मेरा एक ही भरोसा था कि तू दानी है।",
    english: "My only trust was that you are a giver.",
  },
  "sarga-5-440": {
    meaning: "तू अपनी अचूक करुणा पर गर्व रखता है।",
    english: "You take pride in your unfailing compassion.",
  },
  "sarga-5-441": {
    meaning: "वत्स, तेरी निराली कीर्ति मुझे ज्ञात थी।",
    english: "Child, I knew your unique fame.",
  },
  "sarga-5-442": {
    meaning: "तेरे द्वार से कोई कभी खाली नहीं लौटता।",
    english: "No one ever returns empty from your door.",
  },
  "sarga-5-443": {
    meaning: "पर मैं अभागिनी अंचल फैलाकर भी,",
    english: "But I, unfortunate one, even after spreading my veil,",
  },
  "sarga-5-444": {
    meaning: "अपने बेटे से भीख न पाकर खाली जा रही हूँ।",
    english: "am going away empty, unable to receive alms from my son.",
  },
  "sarga-5-445": {
    meaning: "फिर भी तू जीता रहे और अपयश न पाए।",
    english: "Still, may you live and never meet dishonor.",
  },
  "sarga-5-446": {
    meaning: "कभी संसार तुझे पहचाने, पुत्र।",
    english: "May the world someday recognize you, son.",
  },
  "sarga-5-447": {
    meaning: "अब आ, क्षण भर तुझे अपनी गोद में भर लूँ।",
    english: "Now come, let me hold you in my lap for a moment.",
  },
  "sarga-5-448": {
    meaning: "आखिरी बार तेरा आलिंगन कर लूँ।",
    english: "Let me embrace you one last time.",
  },
  "sarga-5-449": {
    meaning: "जो ममता मन में जमकर पत्थर हो गई थी,",
    english: "The motherly love that had frozen into stone in my heart,",
  },
  "sarga-5-450": {
    meaning: "जो फूटकर बहने से पहले ही सूख गई थी,",
    english: "that had dried before it could burst and flow,",
  },
  "sarga-5-451": {
    meaning: "वही आज फिर हृदय में उमड़कर लहरा रही है।",
    english: "today surges again in my heart like a wave.",
  },
  "sarga-5-452": {
    meaning: "वह हृदय के तटों और किनारों को भर रही है।",
    english: "It fills the banks and shores of my heart.",
  },
  "sarga-5-453": {
    meaning: "कुरुकुल की रानी नहीं, बल्कि वह कुमारी नारी,",
    english: "Not the queen of the Kuru line, but that unmarried woman,",
  },
  "sarga-5-454": {
    meaning: "दीन, हीन, असहाय और ग्लानि से मारी हुई स्त्री,",
    english: "poor, helpless, abandoned, and crushed by shame,",
  },
  "sarga-5-455": {
    meaning: "आज सिर उठाकर अपने प्राणों में झाँक रही है।",
    english: "today lifts her head and looks into her own life.",
  },
  "sarga-5-456": {
    meaning: "और तुझ पर ममता के चुम्बन अंकित कर रही है।",
    english: "And marks you with kisses of motherly love.",
  },
  "sarga-5-457": {
    meaning: "इस आत्म-दाह से पीड़ित उदास कली को,",
    english: "Let this sorrowful bud, tormented by self-burning,",
  },
  "sarga-5-458": {
    meaning: "मुझमें बाँहें खोले खड़ी इस जली हुई स्त्री को,",
    english: "this burned woman within me standing with arms open,",
  },
  "sarga-5-459": {
    meaning: "छाती से पुत्र को लगाकर थोड़ा रो लेने दो।",
    english: "hold her son to her chest and weep a little.",
  },
  "sarga-5-460": {
    meaning: "जीवन में पहली बार धन्य हो लेने दो।",
    english: "Let her be blessed for the first time in life.",
  },
  "sarga-5-461": {
    meaning: "जैसे ही माँ ने बढ़कर उसे गले लगाया,",
    english: "As soon as the mother stepped forward and embraced him,",
  },
  "sarga-5-462": {
    meaning: "कर्ण का शरीर रोमांच से काँटों-सा खड़ा हो उठा।",
    english: "Karna's body thrilled, his hair standing on end.",
  },
  "sarga-5-463": {
    meaning: "मानो संजीवनी-सी कोई वस्तु उसके शरीर को छू गई।",
    english: "As if something life-giving had touched his body.",
  },
  "sarga-5-464": {
    meaning: "मन में कहीं से कोमल झरना बह निकला।",
    english: "A tender spring began to flow somewhere in his heart.",
  },
  "sarga-5-465": {
    meaning: "जैसे पहली वर्षा में धरती भीगती है,",
    english: "As the earth is drenched in the first rain,",
  },
  "sarga-5-466": {
    meaning: "वैसे ही कुछ देर कर्ण भी भीगता रहा।",
    english: "so Karna too remained soaked for a while.",
  },
  "sarga-5-467": {
    meaning: "फिर गले से अलग होकर चरणों में आकर बोला।",
    english: "Then leaving her embrace, he came to her feet and spoke.",
  },
  "sarga-5-468": {
    meaning: "बिछुड़ी गोद पाकर मैं धन्य हुआ।",
    english: "I am blessed to have received the lap once lost.",
  },
  "sarga-5-469": {
    meaning: "पर हाय, तुम मेरा अधिकार समय पर नहीं लाई।",
    english: "But alas, you did not bring my right at the proper time.",
  },
  "sarga-5-470": {
    meaning: "माता, सचमुच तुम बहुत देर से आई हो।",
    english: "Mother, truly, you have come very late.",
  },
  "sarga-5-471": {
    meaning: "इसलिए मैं तुम्हारे अंचल की धरोहर नहीं ले सकूँगा।",
    english: "Therefore I cannot take back the trust of your veil.",
  },
  "sarga-5-472": {
    meaning: "पर तुम्हें खाली लौटने भी नहीं दे सकूँगा।",
    english: "Yet I cannot let you leave empty-handed either.",
  },
  "sarga-5-473": {
    meaning: "मैंने सबकी हर तरह की अभिलाषा पूरी की है।",
    english: "I have fulfilled everyone's wishes in every way.",
  },
  "sarga-5-474": {
    meaning: "तुम्हें निराश लेकर कैसे जाने दूँ?",
    english: "How can I let you go away disappointed?",
  },
  "sarga-5-475": {
    meaning: "पर माँ, तुम्हारे चरण पड़ता हूँ, हठ छोड़ो।",
    english: "But mother, I fall at your feet: give up this insistence.",
  },
  "sarga-5-476": {
    meaning: "कठोर बनकर मुझसे मुझे ही मत माँगो।",
    english: "Do not harden yourself and ask me for myself.",
  },
  "sarga-5-477": {
    meaning: "दुर्योधन तो केवल युद्ध का निमित्त है।",
    english: "Duryodhana is only the occasion for the war.",
  },
  "sarga-5-478": {
    meaning: "सच पूछो तो यह कर्ण और अर्जुन का युद्ध है।",
    english: "Truly, this is a war between Karna and Arjuna.",
  },
  "sarga-5-479": {
    meaning: "मुझे गोद में लेकर यह अवसर मत छीनो।",
    english: "Do not take this opportunity from me by holding me in your lap.",
  },
  "sarga-5-480": {
    meaning: "यश, मुकुट, मान, कुल, जाति और प्रतिष्ठा देकर भी नहीं।",
    english: "Not even by giving fame, crown, honor, lineage, caste, and prestige.",
  },
  "sarga-5-481": {
    meaning: "मैं तरह-तरह का विष हँसकर पीता आया हूँ।",
    english: "I have smiled and drunk many kinds of poison.",
  },
  "sarga-5-482": {
    meaning: "बस एक ध्येय के लिए जीता आया हूँ।",
    english: "I have lived only for one aim.",
  },
  "sarga-5-483": {
    meaning: "कभी अर्जुन को जीतकर कीर्ति पाऊँगा।",
    english: "One day I would defeat Arjuna and win fame.",
  },
  "sarga-5-484": {
    meaning: "धरती पर अनुपम वीर कहलाऊँगा।",
    english: "I would be called an unmatched hero on earth.",
  },
  "sarga-5-485": {
    meaning: "अब वह घड़ी आ गई है जब यह प्रण पूरा होगा।",
    english: "Now the hour has come to fulfill that vow.",
  },
  "sarga-5-486": {
    meaning: "रण में खुलकर मारने और मरने की घड़ी।",
    english: "The hour to strike and die openly in battle.",
  },
  "sarga-5-487": {
    meaning: "इस समय मेरे भीतर शिथिलता मत भरो।",
    english: "Do not fill me with weakness at this moment.",
  },
  "sarga-5-488": {
    meaning: "मुझे जीवन-व्रत से विमुख मत करो।",
    english: "Do not turn me away from my life's vow.",
  },
  "sarga-5-489": {
    meaning: "अर्जुन से लड़ना छोड़कर मैं कौन-सी कीर्ति लूँगा?",
    english: "What fame would I take by giving up the fight with Arjuna?",
  },
  "sarga-5-490": {
    meaning: "मैं स्वयं अपने को क्या उत्तर दूँगा?",
    english: "What answer would I give myself?",
  },
  "sarga-5-491": {
    meaning: "फिर मेरा चरित्र कौन समझ पाएगा?",
    english: "Who would then understand my character?",
  },
  "sarga-5-492": {
    meaning: "मेरा पूरा जीवन उलट-पलट जाएगा।",
    english: "My entire life would be overturned.",
  },
  "sarga-5-493": {
    meaning: "माता, तुम दान-दान की बात कर रही हो।",
    english: "Mother, you keep speaking of giving.",
  },
  "sarga-5-494": {
    meaning: "पर क्या पुत्र ही सदा संसार में दाता रहेगा?",
    english: "But will the son always remain the giver in this world?",
  },
  "sarga-5-495": {
    meaning: "दुनिया तो उससे सदा सब कुछ लेगी।",
    english: "The world will always take everything from him.",
  },
  "sarga-5-496": {
    meaning: "पर क्या माता भी उसे कुछ नहीं देगी?",
    english: "But will his mother give him nothing?",
  },
  "sarga-5-497": {
    meaning: "मैं एक कर्ण माँग लेता हूँ।",
    english: "I ask for one Karna.",
  },
  "sarga-5-498": {
    meaning: "बदले में तुम्हें चार कर्ण देता हूँ।",
    english: "In return, I give you four Karnas.",
  },
  "sarga-5-499": {
    meaning: "मैं अर्जुन को कभी नहीं छोड़ूँगा।",
    english: "I will never spare Arjuna.",
  },
  "sarga-5-500": {
    meaning: "अपना पुराना प्रण कैसे तोड़ूँ?",
    english: "How can I break my ancient vow?",
  },
  "sarga-5-501": {
    meaning: "पर अन्य पांडवों पर मैं कृपा करूँगा।",
    english: "But I will show mercy to the other Pandavas.",
  },
  "sarga-5-502": {
    meaning: "उन्हें पाकर भी उनका जीवन नहीं हरूँगा।",
    english: "Even if I capture them, I will not take their lives.",
  },
  "sarga-5-503": {
    meaning: "अब यह सोचकर प्रसन्न मन से जाओ।",
    english: "Now go with a happy heart, thinking this.",
  },
  "sarga-5-504": {
    meaning: "जो कुछ कहा है, रण में उसे निभाऊँगा।",
    english: "Whatever I have said, I will uphold in battle.",
  },
  "sarga-5-505": {
    meaning: "कुंती बोली, रे हठी, तूने दिया ही क्या?",
    english: "Kunti said: stubborn one, what have you given?",
  },
  "sarga-5-506": {
    meaning: "अपने को लेकर मुझे क्या दे दिया?",
    english: "What have you given me while keeping yourself?",
  },
  "sarga-5-507": {
    meaning: "मैं छह पुत्रों की माता बनने आई थी।",
    english: "I had come to become the mother of six sons.",
  },
  "sarga-5-508": {
    meaning: "पर विधाता फिर भी विपरीत ही रहा।",
    english: "But fate remained hostile still.",
  },
  "sarga-5-509": {
    meaning: "एक को पाए बिना और एक को खोकर,",
    english: "Without gaining one, and losing another,",
  },
  "sarga-5-510": {
    meaning: "मैं चार पुत्रों की माता होकर चली।",
    english: "I leave as the mother of four sons.",
  },
  "sarga-5-511": {
    meaning: "कर्ण ने कहा, छह और चार को भूलो।",
    english: "Karna said: forget six and four.",
  },
  "sarga-5-512": {
    meaning: "माता, यह निश्चय मानकर आनंदित रहो।",
    english: "Mother, accept this certainty and rejoice.",
  },
  "sarga-5-513": {
    meaning: "जीते-जी यह युद्ध भारी दुख देगा।",
    english: "While you live, this war will bring heavy sorrow.",
  },
  "sarga-5-514": {
    meaning: "लेकिन माँ, अंतिम विजय तुम्हारी ही होगी।",
    english: "But mother, the final victory will be yours.",
  },
  "sarga-5-515": {
    meaning: "युद्ध में कट-मरकर चाहे जो हानि हो,",
    english: "Whatever loss comes through death and slaughter in war,",
  },
  "sarga-5-516": {
    meaning: "पाँचों पांडव फिर भी पाँच ही रहेंगे।",
    english: "the five Pandavas will still remain five.",
  },
  "sarga-5-517": {
    meaning: "यदि कुरुराज युद्ध से जीतकर नहीं निकला,",
    english: "If the Kuru king does not come out victorious from war,",
  },
  "sarga-5-518": {
    meaning: "या मुझे अर्जुन के हाथ वीरगति मिली,",
    english: "or if I receive a hero's death at Arjuna's hands,",
  },
  "sarga-5-519": {
    meaning: "तुम इसी तरह गोद की धनी रहोगी।",
    english: "you will remain rich in sons as before.",
  },
  "sarga-5-520": {
    meaning: "पाँच पुत्रों की माता बनी रहोगी।",
    english: "You will remain the mother of five sons.",
  },
  "sarga-5-521": {
    meaning: "पर यदि काल का कोप अर्जुन पर बीता,",
    english: "But if Time's wrath falls upon Arjuna,",
  },
  "sarga-5-522": {
    meaning: "वह मारा गया और दुर्योधन ने युद्ध जीता,",
    english: "if he dies and Duryodhana wins the war,",
  },
  "sarga-5-523": {
    meaning: "तो मैं संसार को एक और खेल दिखाऊँगा।",
    english: "then I will show the world another act.",
  },
  "sarga-5-524": {
    meaning: "विजय छोड़कर तुम्हारे पास चला आऊँगा।",
    english: "I will leave victory and come to you.",
  },
  "sarga-5-525": {
    meaning: "संसार में जो भी दलित और पीड़ित लोग हैं,",
    english: "All the oppressed and tormented people in the world,",
  },
  "sarga-5-526": {
    meaning: "जो हीन, निंदित और निर्धन हैं,",
    english: "all who are lowly, condemned, and poor,",
  },
  "sarga-5-527": {
    meaning: "यह कर्ण उन्हीं का मित्र, बंधु और सहचर है।",
    english: "this Karna is their friend, brother, and companion.",
  },
  "sarga-5-528": {
    meaning: "उसका युद्ध सदा विधि के विरुद्ध रहा है।",
    english: "His struggle has always been against fate.",
  },
  "sarga-5-529": {
    meaning: "सच है, पांडवों को राज्य का सुख नहीं मिला।",
    english: "It is true the Pandavas have not enjoyed royal comfort.",
  },
  "sarga-5-530": {
    meaning: "पर जिनके साथ कृष्ण हैं, उन्हें क्या दुख हो सकता है?",
    english: "But those with Krishna beside them, what sorrow can they truly have?",
  },
  "sarga-5-531": {
    meaning: "मैं उनसे बढ़कर क्या उपकार करूँगा?",
    english: "What greater favor could I do for them?",
  },
  "sarga-5-532": {
    meaning: "ऐसा कौन-सा भय है जिसे केवल मैं दूर करूँगा?",
    english: "What fear is there that only I can remove?",
  },
  "sarga-5-533": {
    meaning: "हाँ, यदि इस युद्ध में पांडवों की बात न चली,",
    english: "Yes, if the Pandavas do not prevail in this war,",
  },
  "sarga-5-534": {
    meaning: "यदि जीवन में वे किसी तरह स्तब्ध और पराजित हो गए,",
    english: "if they are somehow stunned and defeated in life,",
  },
  "sarga-5-535": {
    meaning: "तो राधेय कुरुराज का सह-विजेता नहीं रहेगा।",
    english: "then Radheya will not remain the Kuru king's co-victor.",
  },
  "sarga-5-536": {
    meaning: "वह फिर से निःस्व दलितों का नेता होगा।",
    english: "He will again be the leader of the dispossessed and oppressed.",
  },
  "sarga-5-537": {
    meaning: "अभी उदय का समय है, दृश्य सुंदर है।",
    english: "For now it is the hour of sunrise; the scene is beautiful.",
  },
  "sarga-5-538": {
    meaning: "चारों ओर पांडु-पुत्रों की कीर्ति तेजस्वी है।",
    english: "On every side, the fame of Pandu's sons shines bright.",
  },
  "sarga-5-539": {
    meaning: "ज्योति की अनुकूल घड़ी मेरी नहीं होगी।",
    english: "The favorable hour of light will not be mine.",
  },
  "sarga-5-540": {
    meaning: "मैं तब आऊँगा जब अँधेरी रात होगी।",
    english: "I will come when the night is dark.",
  },
  "sarga-5-541": {
    meaning: "मैं यश, मान, प्रतिष्ठा या मुकुट लेने नहीं आऊँगा।",
    english: "I will not come to take fame, honor, prestige, or crown.",
  },
  "sarga-5-542": {
    meaning: "मैं कुल को अभयदान देने आऊँगा।",
    english: "I will come to grant fearlessness to the family.",
  },
  "sarga-5-543": {
    meaning: "अपमान, जलन, भ्रम और भय हरने आऊँगा।",
    english: "I will come to remove humiliation, burning pain, confusion, and fear.",
  },
  "sarga-5-544": {
    meaning: "दुख में अपने छोटे भाइयों को बाँहों में भरने आऊँगा।",
    english: "I will come to hold my younger brothers in sorrow.",
  },
  "sarga-5-545": {
    meaning: "भीषण विपत्ति में, माँ, उन्हें अपनाकर,",
    english: "In terrible adversity, mother, accepting them as my own,",
  },
  "sarga-5-546": {
    meaning: "हृदय से लगाकर उनका दुख बाँटने आऊँगा।",
    english: "I will come to clasp them to my heart and share their grief.",
  },
  "sarga-5-547": {
    meaning: "अँधेरे में नई आभा भरने आऊँगा।",
    english: "I will come to fill darkness with new radiance.",
  },
  "sarga-5-548": {
    meaning: "भाग्य को फिर से ताजा करने आऊँगा।",
    english: "I will come to renew destiny.",
  },
  "sarga-5-549": {
    meaning: "पर नहीं, जहाँ कृष्ण के हाथ की छाया है,",
    english: "But no, where Krishna's hand gives shade,",
  },
  "sarga-5-550": {
    meaning: "जहाँ अच्युत की बाँह स्वयं रक्षक है,",
    english: "where Achyuta's own arm protects,",
  },
  "sarga-5-551": {
    meaning: "उस भाग्यवान का भाग्य कैसे क्षीण होगा?",
    english: "how can that fortunate one's fortune turn to ash?",
  },
  "sarga-5-552": {
    meaning: "उसके सामने अंधकार कभी कैसे आएगा?",
    english: "How can darkness ever stand before him?",
  },
  "sarga-5-553": {
    meaning: "मैं कुरुक्षेत्र के युद्ध को देख रहा हूँ।",
    english: "I can see the battle of Kurukshetra.",
  },
  "sarga-5-554": {
    meaning: "मनुष्यों पर महा-मरण नाचता दिख रहा है।",
    english: "Great death dances over human beings.",
  },
  "sarga-5-555": {
    meaning: "पूरी धरती रक्त से भीगी और लथपथ है।",
    english: "The whole earth is wet and smeared with blood.",
  },
  "sarga-5-556": {
    meaning: "लेकिन अर्जुन का रथ निर्बाध आगे बढ़ रहा है।",
    english: "Yet Arjuna's chariot moves onward unhindered.",
  },
  "sarga-5-557": {
    meaning: "कृष्ण स्वयं अँधेरे के कारागार को काट रहे हैं।",
    english: "Krishna himself cuts through the prison of darkness.",
  },
  "sarga-5-558": {
    meaning: "अर्जुन के हित में धारा उलटकर बह रही है।",
    english: "For Arjuna's sake, the current flows in reverse.",
  },
  "sarga-5-559": {
    meaning: "शत्रु-दल सौ जाल फैलाता है, पर व्यर्थ।",
    english: "The enemy spreads a hundred snares, but in vain.",
  },
  "sarga-5-560": {
    meaning: "वह हर बार जाल तोड़कर निकल जाता है।",
    english: "He breaks through the net every time and escapes.",
  },
  "sarga-5-561": {
    meaning: "माँ, मैं देख रहा हूँ कि कल क्या होगा।",
    english: "Mother, I can see what will happen tomorrow.",
  },
  "sarga-5-562": {
    meaning: "इस महायुद्ध का अंतिम फल क्या होगा।",
    english: "What the final result of this great war will be.",
  },
  "sarga-5-563": {
    meaning: "फिर भी मेरा मन तनिक नहीं घबराता।",
    english: "Yet my heart does not tremble even a little.",
  },
  "sarga-5-564": {
    meaning: "मेरा उत्साह और दुगुना बढ़ता जाता है।",
    english: "My enthusiasm only grows twice as strong.",
  },
  "sarga-5-565": {
    meaning: "काल का नगाड़ा बज चुका है, यह भयानक क्षण है।",
    english: "The drum of Time has sounded; this is a terrible moment.",
  },
  "sarga-5-566": {
    meaning: "महामृत्यु सबको निमंत्रण दे रही है।",
    english: "Great death is inviting everyone.",
  },
  "sarga-5-567": {
    meaning: "पूरी छाती वाले पुरुष प्रलय को झेलेंगे।",
    english: "Men of full courage will endure the deluge.",
  },
  "sarga-5-568": {
    meaning: "वे आँधी की उलझी लटें खींचकर खेलेंगे।",
    english: "They will play by pulling the tangled locks of the storm.",
  },
  "sarga-5-569": {
    meaning: "अंत में कुछ भी शेष नहीं बचेगा।",
    english: "In the end, nothing will remain.",
  },
  "sarga-5-570": {
    meaning: "विजयी होकर भी संतुष्ट तत्व आखिर क्या पाएगा?",
    english: "What will the victor truly gain that satisfies the soul?",
  },
  "sarga-5-571": {
    meaning: "जिस मार्ग पर कौरव विलीन हो जाएँगे,",
    english: "On the path where the Kauravas will dissolve,",
  },
  "sarga-5-572": {
    meaning: "क्या पांडव उससे अलग कोई राह पाएँगे?",
    english: "will the Pandavas find any different road?",
  },
  "sarga-5-573": {
    meaning: "जीत हो या हार, मार्ग एक ही है।",
    english: "Whether victory or defeat, the path is one.",
  },
  "sarga-5-574": {
    meaning: "स्वयं मरना हो या शत्रु को मारना, अंत एक ही है।",
    english: "Whether one dies oneself or kills the enemy, the end is the same.",
  },
  "sarga-5-575": {
    meaning: "दोनों को एक ही देश जाना होगा।",
    english: "Both must go to the same realm.",
  },
  "sarga-5-576": {
    meaning: "बचने का कोई बहाना नहीं होगा।",
    english: "There will be no excuse for escape.",
  },
  "sarga-5-577": {
    meaning: "द्रोह की क्रिया निरर्थक है, यह युद्ध व्यर्थ है।",
    english: "The act of hostility is hollow; this war is vain.",
  },
  "sarga-5-578": {
    meaning: "मेरा और अर्जुन का प्रण भी खोखला है।",
    english: "My vow and Arjuna's vow are hollow too.",
  },
  "sarga-5-579": {
    meaning: "फिर भी न जाने क्यों हम रुकते नहीं।",
    english: "Still, for some reason, we do not stop.",
  },
  "sarga-5-580": {
    meaning: "काल जिधर चाहता है, हम उधर ही झुकते हैं।",
    english: "We bend in the direction Time desires.",
  },
  "sarga-5-581": {
    meaning: "जीवन-नदी की गति बड़ी अनोखी है।",
    english: "The movement of life's river is very strange.",
  },
  "sarga-5-582": {
    meaning: "मानव-बुद्धि उसे समझ नहीं पाती।",
    english: "Human understanding cannot grasp it.",
  },
  "sarga-5-583": {
    meaning: "वह सबको अपनाकर प्रचंडता से बहती है।",
    english: "It embraces all and flows with fierce force.",
  },
  "sarga-5-584": {
    meaning: "और अचानक महासागर में मिलकर खो जाती है।",
    english: "Then suddenly it meets the great ocean and disappears.",
  },
  "sarga-5-585": {
    meaning: "फिर लहर, धारा और बुलबुले की कोई निशानी नहीं रहती।",
    english: "Then no sign remains of wave, current, or bubble.",
  },
  "sarga-5-586": {
    meaning: "सबकी केवल एक कहानी रह जाती है।",
    english: "Only one story remains of all.",
  },
  "sarga-5-587": {
    meaning: "सब मिलकर एक ही जल में विलीन हो जाते हैं।",
    english: "All merge into the same water.",
  },
  "sarga-5-588": {
    meaning: "मूर्तियाँ पिघलकर तरल धातु में मिल जाती हैं।",
    english: "Forms melt and merge into liquid metal.",
  },
  "sarga-5-589": {
    meaning: "इसी पुण्यभूमि कुरुक्षेत्र में कल से,",
    english: "So from tomorrow, on this sacred land of Kurukshetra,",
  },
  "sarga-5-590": {
    meaning: "लहरें जल से मिलकर एकाकार हो जाएँगी।",
    english: "waves will merge with water and become one.",
  },
  "sarga-5-591": {
    meaning: "मूर्तियाँ आपस में खूब टकराएँगी।",
    english: "Forms will clash fiercely with one another.",
  },
  "sarga-5-592": {
    meaning: "फिर तरलता में गलकर खो जाएँगी।",
    english: "Then melt into fluidity and disappear.",
  },
  "sarga-5-593": {
    meaning: "हम आपस में खरे हों या खोटे,",
    english: "Whether we are true or false among ourselves,",
  },
  "sarga-5-594": {
    meaning: "बलवान काल के सामने सब छोटे हैं।",
    english: "before mighty Time, all are small.",
  },
  "sarga-5-595": {
    meaning: "छोटे होकर कल से सब साथ मरेंगे।",
    english: "Small as we are, from tomorrow all will die together.",
  },
  "sarga-5-596": {
    meaning: "शत्रुता न जाने कहाँ सिमट जाएगी।",
    english: "Who knows where enmity will be folded away?",
  },
  "sarga-5-597": {
    meaning: "लेकिन यह चिंता व्यर्थ है, बात जाने दो।",
    english: "But this worry is useless; let the matter go.",
  },
  "sarga-5-598": {
    meaning: "जैसा भी हो, कल का प्रभाव आने दो।",
    english: "Whatever may be, let tomorrow's force arrive.",
  },
  "sarga-5-599": {
    meaning: "किसी भी ओर उजाला दिखाई नहीं देता।",
    english: "No light is visible in any direction.",
  },
  "sarga-5-600": {
    meaning: "सचमुच आज की रात बहुत काली है।",
    english: "Truly, tonight is very dark.",
  },
  "sarga-5-601": {
    meaning: "जब चंद्रमा और सूर्य अँधेरे में छिप जाते हैं,",
    english: "When moon and sun hide in darkness,",
  },
  "sarga-5-602": {
    meaning: "जब किरणों को खोजने वाले व्याकुल हो उठते हैं,",
    english: "when seekers of rays become restless,",
  },
  "sarga-5-603": {
    meaning: "तब धूमकेतु इसी तरह आता है।",
    english: "then a comet comes in just this way.",
  },
  "sarga-5-604": {
    meaning: "वह श्मशान में थोड़ी-सी रोशनी फैला देता है।",
    english: "It spreads a little light over the cremation ground.",
  },
  "sarga-5-605": {
    meaning: "राधेय चरण छूकर मौन हो गया।",
    english: "Radheya touched her feet and fell silent.",
  },
  "sarga-5-606": {
    meaning: "उसकी आँखों से आँसू की दो बूँदें गिर पड़ीं।",
    english: "Two drops of tears fell from his eyes.",
  },
  "sarga-5-607": {
    meaning: "बेटे का मस्तक सूँघकर, बड़े दुख से,",
    english: "Smelling her son's head, in deep sorrow,",
  },
  "sarga-5-608": {
    meaning: "कुंती बिना कुछ कहे लौट गई।",
    english: "Kunti returned without saying anything.",
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

console.log("Seeded Hindi meanings and English translations for sarga-5 lines 1-608.");
