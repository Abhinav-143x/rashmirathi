import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const files = [
  path.join(ROOT, "content", "sarga-7.json"),
  path.join(ROOT, "public", "content", "sarga-7.json"),
];

const annotations = {
  "sarga-7-1": {
    meaning: "रात बीत गई और आकाश का रूप चमक उठा।",
    english: "The night passed, and the sky's form began to shine.",
  },
  "sarga-7-2": {
    meaning: "किनारे पर किसी का वस्त्र-सा उजाला चमका।",
    english: "On the horizon, a cloth-like gleam appeared.",
  },
  "sarga-7-3": {
    meaning: "क्षितिज के पास लालिमा फैल रही है।",
    english: "A redness is spreading near the horizon.",
  },
  "sarga-7-4": {
    meaning: "गहराई से कौन ऊपर आ रहा है?",
    english: "Who is rising upward from the depths?",
  },
  "sarga-7-5": {
    meaning: "सिर पर प्रकाश-मंडल सँभाले हुए,",
    english: "Carrying a circle of light upon her head,",
  },
  "sarga-7-6": {
    meaning: "दिशाओं में ज्योति का आँचल उड़ाती हुई।",
    english: "she spreads her luminous veil across the directions.",
  },
  "sarga-7-7": {
    meaning: "किरणों में कोमल धूप बिखेरती हुई,",
    english: "Scattering gentle warmth through her rays,",
  },
  "sarga-7-8": {
    meaning: "सर्दी से काँपते पेड़ों को मानो सेंकती हुई।",
    english: "as if warming the trees trembling with cold.",
  },
  "sarga-7-9": {
    meaning: "अपने स्पर्श से पक्षियों के पंख खोलती हुई,",
    english: "With her touch, she frees the birds' wings,",
  },
  "sarga-7-10": {
    meaning: "और फूलों की हिम-भीगी आँखें पोंछती हुई।",
    english: "and wipes the frost-wet eyes of flowers.",
  },
  "sarga-7-11": {
    meaning: "दिन की स्वामिनी आकाश में आ गई।",
    english: "The mistress of day entered the sky.",
  },
  "sarga-7-12": {
    meaning: "कुंकुम उड़ गया और संसार में जीवन जाग उठा।",
    english: "Vermilion scattered, and life awakened in the world.",
  },
  "sarga-7-13": {
    meaning: "लेकिन मनुष्य बुद्धि के मद में चूर होकर,",
    english: "But humanity, intoxicated with the pride of intellect,",
  },
  "sarga-7-14": {
    meaning: "प्रकृति से अलग, दूर बैठा है।",
    english: "sits apart and far away from nature.",
  },
  "sarga-7-15": {
    meaning: "फिर उषा उसकी आँखें कैसे पोंछे?",
    english: "How then can dawn wipe his eyes?",
  },
  "sarga-7-16": {
    meaning: "उसके मुक्त मन के पंख कैसे खोले?",
    english: "How can she open the wings of his free mind?",
  },
  "sarga-7-17": {
    meaning: "मनुष्य बहुत बड़ा ज्ञानी हो चुका है।",
    english: "Humanity has become greatly learned.",
  },
  "sarga-7-18": {
    meaning: "उसका आश्चर्य का स्रोत पानी हो चुका है।",
    english: "The spring of wonder in him has grown watery and weak.",
  },
  "sarga-7-19": {
    meaning: "अब प्रकृति में वह उत्साह कौन खोजेगा?",
    english: "Who will now seek that enthusiasm in nature?",
  },
  "sarga-7-20": {
    meaning: "कौन सितारों के हृदय में मार्ग खोजेगा?",
    english: "Who will search for a path in the heart of the stars?",
  },
  "sarga-7-21": {
    meaning: "क्या यह विभा मनुष्य को भ्रमित नहीं करेगी?",
    english: "Will this radiance not enchant humanity?",
  },
  "sarga-7-22": {
    meaning: "मनस्वी मनुष्य को यह कहाँ ले जाएगी?",
    english: "Where will it lead the proud, thoughtful human?",
  },
  "sarga-7-23": {
    meaning: "उसे कभी विश्राम नहीं मिलता।",
    english: "He never gets rest.",
  },
  "sarga-7-24": {
    meaning: "उसे मत छेड़ो, उसे अनेक काम हैं।",
    english: "Do not disturb him; he has countless tasks.",
  },
  "sarga-7-25": {
    meaning: "धरती पर महाभारत चल रहा है।",
    english: "The Mahabharata is unfolding upon the earth.",
  },
  "sarga-7-26": {
    meaning: "संसार का भाग्य युद्ध में जल रहा है।",
    english: "The world's fate is burning in war.",
  },
  "sarga-7-27": {
    meaning: "मनुष्य मनुष्य को ललकारता फिर रहा है।",
    english: "Human calls out in challenge to human.",
  },
  "sarga-7-28": {
    meaning: "मनुष्य ही मनुष्य को मारता फिर रहा है।",
    english: "Human alone goes about killing human.",
  },
  "sarga-7-29": {
    meaning: "पुरुष की बुद्धि अपना गौरव खो चुकी है।",
    english: "Human intellect has lost its dignity.",
  },
  "sarga-7-30": {
    meaning: "वह अब साँपिन की सहेली बन चुकी है।",
    english: "It has become a companion of the serpentess.",
  },
  "sarga-7-31": {
    meaning: "वह किसी भी बुरे कर्म को नहीं छोड़ेगी।",
    english: "It will not spare any evil deed.",
  },
  "sarga-7-32": {
    meaning: "वह सद्धर्म को भी निगल जाएगी।",
    english: "It will swallow even true dharma.",
  },
  "sarga-7-33": {
    meaning: "अभिमन्यु मरे या भीष्म टूट जाएँ,",
    english: "Whether Abhimanyu dies or Bhishma falls,",
  },
  "sarga-7-34": {
    meaning: "पिता के प्राण पुत्र के साथ छूट जाएँ,",
    english: "whether a father's life departs with his son,",
  },
  "sarga-7-35": {
    meaning: "संसार में घोर हाहाकार मचे,",
    english: "whether terrible cries spread through the world,",
  },
  "sarga-7-36": {
    meaning: "विधवाओं की चीत्कार भर जाए,",
    english: "whether the screams of widowhood fill it,",
  },
  "sarga-7-37": {
    meaning: "फिर भी मनुष्य का हृदय पत्थर हो गया है।",
    english: "still the human heart has turned to stone.",
  },
  "sarga-7-38": {
    meaning: "वह केवल अपनी विजय खोजता है।",
    english: "It seeks only its own victory.",
  },
  "sarga-7-39": {
    meaning: "यदि उसे ऊपर विजय नहीं मिलेगी,",
    english: "If it does not find victory above,",
  },
  "sarga-7-40": {
    meaning: "तो वह पतन की खाई में भी जाएगा।",
    english: "it will go even into the pit of downfall.",
  },
  "sarga-7-41": {
    meaning: "द्रोणाचार्य के रण में गिरने वाले दिन,",
    english: "On the day Dronacharya fell in battle,",
  },
  "sarga-7-42": {
    meaning: "पांडव सबको साथ लेकर पतन में पड़े।",
    english: "the Pandavas fell into decline, taking all with them.",
  },
  "sarga-7-43": {
    meaning: "बहुत धर्मिष्ठ, भावुक और भोले,",
    english: "Deeply righteous, tender-hearted, and simple,",
  },
  "sarga-7-44": {
    meaning: "युधिष्ठिर ने जीत के लिए झूठ बोला।",
    english: "Yudhishthira spoke a lie for victory.",
  },
  "sarga-7-45": {
    meaning: "थोड़े-बहुत का अंतर मत मानो।",
    english: "Do not count the difference as small or large.",
  },
  "sarga-7-46": {
    meaning: "यदि साधन बुरे हुए, तो सत्य जानो,",
    english: "If the means are wrong, know this as truth:",
  },
  "sarga-7-47": {
    meaning: "बर्फ में मन भी गलेंगे और आँखें भी,",
    english: "in the ice, both heart and eyes will melt,",
  },
  "sarga-7-48": {
    meaning: "सिर्फ अँगूठा नहीं, पूरा शरीर गल जाएगा।",
    english: "not merely the thumb, the whole body will melt.",
  },
  "sarga-7-49": {
    meaning: "उनको नमन, जो मरकर स्वर्ग गए।",
    english: "Salutations to those who died and went to heaven.",
  },
  "sarga-7-50": {
    meaning: "शत्रु को कलंकित कर और स्वयं को अमर कर गए।",
    english: "They stained the enemy and made themselves immortal.",
  },
  "sarga-7-51": {
    meaning: "अब अधिक शोक और दैन्य का अवसर नहीं है।",
    english: "There is no longer much time for grief and helplessness.",
  },
  "sarga-7-52": {
    meaning: "राधेय सेना का नायक बन गया है।",
    english: "Radheya has become the leader of the army.",
  },
  "sarga-7-53": {
    meaning: "निराशा छोड़कर उस शक्ति को जगा लो।",
    english: "Abandon despair and awaken that power.",
  },
  "sarga-7-54": {
    meaning: "द्विधा का महीन जाल तोड़ दो।",
    english: "Break the fine net of hesitation.",
  },
  "sarga-7-55": {
    meaning: "गरजते हुए ज्योति के आधार, जय हो!",
    english: "O roaring support of light, victory to you!",
  },
  "sarga-7-56": {
    meaning: "मेरा अंतिम प्रकाश भी उदित हो।",
    english: "May my final radiance also rise.",
  },
  "sarga-7-57": {
    meaning: "बहुत धुआँ उठ चुका; अब आग फूट पड़े।",
    english: "Enough smoke has risen; now let the fire burst out.",
  },
  "sarga-7-58": {
    meaning: "आज सारी किरणें सिमटकर छूट पड़ें।",
    english: "Let all rays gather and burst forth today.",
  },
  "sarga-7-59": {
    meaning: "हे देवताओं, जो भी अंगारे छिपे हों,",
    english: "O gods, whatever embers may be hidden,",
  },
  "sarga-7-60": {
    meaning: "प्राणों में जो भी हुंकार दबे हों,",
    english: "whatever roars lie pressed within life,",
  },
  "sarga-7-61": {
    meaning: "उन्हें एकत्र करो, उन्हें आकार दो।",
    english: "gather them and give them form.",
  },
  "sarga-7-62": {
    meaning: "मुझे मेरा ज्वलंत श्रृंगार दो।",
    english: "Give me my blazing adornment.",
  },
  "sarga-7-63": {
    meaning: "मुझे पवन का वेग और अजेय अग्नि दो।",
    english: "Give me the speed of wind and unconquerable fire.",
  },
  "sarga-7-64": {
    meaning: "हे सूर्य, आज मुझे अपना तेज और बल दो।",
    english: "O Sun, today give me your radiance and strength.",
  },
  "sarga-7-65": {
    meaning: "मैं धरती का सूर्य बनना चाहता हूँ।",
    english: "I want to become the sun of the earth.",
  },
  "sarga-7-66": {
    meaning: "मैं प्रकाश का रण-नाद बनना चाहता हूँ।",
    english: "I want to become the trumpet of radiance.",
  },
  "sarga-7-67": {
    meaning: "मैं समय को अपना दास बनाना चाहता हूँ।",
    english: "I want to make time my servant.",
  },
  "sarga-7-68": {
    meaning: "मैं निर्भय होकर मृत्यु का उपहास करना चाहता हूँ।",
    english: "Fearlessly, I want to mock death.",
  },
  "sarga-7-69": {
    meaning: "मैं अपनी भुजा की गहराई जानना चाहता हूँ।",
    english: "I want to measure the depth of my arm's power.",
  },
  "sarga-7-70": {
    meaning: "मैं हिमालय को उठाना चाहता हूँ।",
    english: "I want to lift the Himalaya.",
  },
  "sarga-7-71": {
    meaning: "मैं बाणों से युद्ध-सागर को मथकर,",
    english: "Churning the ocean of war with arrows,",
  },
  "sarga-7-72": {
    meaning: "धरती की श्री को हाथों में लेना चाहता हूँ।",
    english: "I want to hold the earth's glory in my hands.",
  },
  "sarga-7-73": {
    meaning: "मैं ग्रहों को खींचकर लाना चाहता हूँ।",
    english: "I want to pull the planets down.",
  },
  "sarga-7-74": {
    meaning: "मैं उन्हें हथेली पर नचाना चाहता हूँ।",
    english: "I want to make them dance on my palm.",
  },
  "sarga-7-75": {
    meaning: "मैं तलवार की धार पर मचलना चाहता हूँ।",
    english: "I want to writhe upon the blade's edge.",
  },
  "sarga-7-76": {
    meaning: "मैं अंगारों पर हँसना चाहता हूँ।",
    english: "I want to laugh upon burning embers.",
  },
  "sarga-7-77": {
    meaning: "मैं पूरा समुद्र पी जाना चाहता हूँ।",
    english: "I want to drink the entire ocean.",
  },
  "sarga-7-78": {
    meaning: "मैं आज धधककर जीना चाहता हूँ।",
    english: "Today I want to live by blazing.",
  },
  "sarga-7-79": {
    meaning: "समय को एक क्षण में बाँधकर,",
    english: "Binding time into a single moment,",
  },
  "sarga-7-80": {
    meaning: "मैं घनी चमक बनकर चमकना चाहता हूँ।",
    english: "I want to flash as concentrated brilliance.",
  },
  "sarga-7-81": {
    meaning: "असंभव कल्पना साकार होगी।",
    english: "The impossible imagination will take form.",
  },
  "sarga-7-82": {
    meaning: "आज पुरुष की जय-जयकार होगी।",
    english: "Today humanity's valor will be hailed.",
  },
  "sarga-7-83": {
    meaning: "आज धरती पर ऐसा युद्ध होगा,",
    english: "Today such a battle will occur on earth,",
  },
  "sarga-7-84": {
    meaning: "जैसा पहले कहीं नहीं हुआ।",
    english: "as has never happened before.",
  },
  "sarga-7-85": {
    meaning: "मेरे चरणों का भार लो और सिर पर सँभालो।",
    english: "Take the weight of my feet and bear it on your head.",
  },
  "sarga-7-86": {
    meaning: "हे नियति की दूतियों, अपना मस्तक झुका लो।",
    english: "O messengers of destiny, bow your heads.",
  },
  "sarga-7-87": {
    meaning: "चलो, जैसे मैं चलने को कहूँ।",
    english: "Move as I command you to move.",
  },
  "sarga-7-88": {
    meaning: "ढलो, जैसे मैं ढलने को कहूँ।",
    english: "Take shape as I command you to take shape.",
  },
  "sarga-7-89": {
    meaning: "हे फूलो, छल-कपट से आघात मत करो।",
    english: "O flowers, do not strike through deceit.",
  },
  "sarga-7-90": {
    meaning: "यह मत भूलो कि मैं पुरुष हूँ।",
    english: "Do not forget that I am a man of valor.",
  },
  "sarga-7-91": {
    meaning: "मैं तुम्हें कुचल दूँगा और निशान मिटा दूँगा।",
    english: "I will crush you and erase your mark.",
  },
  "sarga-7-92": {
    meaning: "तुम्हें अपनी अजेय भुजा की भेंट चढ़ा दूँगा।",
    english: "I will offer you to my unconquerable arm.",
  },
  "sarga-7-93": {
    meaning: "अरी, तुम इस तरह कब तक भागती रहोगी?",
    english: "How long will you keep fleeing like this?",
  },
  "sarga-7-94": {
    meaning: "हे छलिनी, मुझे कब तक छलोगी?",
    english: "O deceiver, how long will you deceive me?",
  },
  "sarga-7-95": {
    meaning: "तुम मेरा दाँव कब तक चुराओगी?",
    english: "How long will you steal my chance?",
  },
  "sarga-7-96": {
    meaning: "मेरे पाँव कब तक रोककर रखोगी?",
    english: "How long will you hold back my feet?",
  },
  "sarga-7-97": {
    meaning: "अभी भी मेरे भीतर तुमसे अधिक उग्र सत्त्व है।",
    english: "Even now, within me is a nobler force fiercer than you.",
  },
  "sarga-7-98": {
    meaning: "मेरे हृदय की भावना तुमसे अधिक निष्काम है।",
    english: "The feeling in my heart is more selfless than you.",
  },
  "sarga-7-99": {
    meaning: "तुमसे आठों पहर संघर्ष चले,",
    english: "Let struggle with you continue through all hours,",
  },
  "sarga-7-100": {
    meaning: "मैं अंत तक तुमसे संग्राम करूँगा।",
    english: "I will battle you until the end.",
  },
  "sarga-7-101": {
    meaning: "तुम मुझे शक्ति से कब तक वंचित करोगी?",
    english: "How long will you deprive me of strength?",
  },
  "sarga-7-102": {
    meaning: "मेरी सिद्धियाँ कब तक छीनोगी?",
    english: "How long will you take away my powers?",
  },
  "sarga-7-103": {
    meaning: "तुम्हारा सारा छल समाप्त हो जाएगा।",
    english: "All your deception will come to an end.",
  },
  "sarga-7-104": {
    meaning: "कर्ण का संचित बल समाप्त नहीं होगा।",
    english: "Karna's stored strength will not be exhausted.",
  },
  "sarga-7-105": {
    meaning: "कवच-कुंडल चले गए, पर प्राण तो हैं।",
    english: "The armor and earrings are gone, but life remains.",
  },
  "sarga-7-106": {
    meaning: "भुजा में शक्ति और धनुष पर बाण तो हैं।",
    english: "There is strength in the arm and arrows on the bow.",
  },
  "sarga-7-107": {
    meaning: "एकघ्नी गई तो क्या सब कुछ चला गया?",
    english: "If the single-slayer is gone, has everything gone?",
  },
  "sarga-7-108": {
    meaning: "क्या मुझमें अब कुछ भी नया नहीं बचा?",
    english: "Is there nothing new left within me?",
  },
  "sarga-7-109": {
    meaning: "मैं युद्ध की वीरता का साकार रूप हूँ।",
    english: "I am the embodied form of battle's bravery.",
  },
  "sarga-7-110": {
    meaning: "मैं महान सूर्य का अवतार हूँ।",
    english: "I am an incarnation of the great sun.",
  },
  "sarga-7-111": {
    meaning: "वेदों से विभूषित कर्म ही मेरा आभूषण है।",
    english: "My deed, adorned by the Vedas, is my ornament.",
  },
  "sarga-7-112": {
    meaning: "आज तक का धर्म ही मेरा कवच है।",
    english: "The dharma I have lived by until today is my armor.",
  },
  "sarga-7-113": {
    meaning: "हे तपस्याओं, उठो और रण में गलो।",
    english: "O austerities, rise and melt in battle.",
  },
  "sarga-7-114": {
    meaning: "नई एकघ्नियाँ बनकर ढल जाओ।",
    english: "Take shape as new single-slayer weapons.",
  },
  "sarga-7-115": {
    meaning: "हे सिद्धियों की अग्नि, आओ।",
    english: "O fire of attainments, come.",
  },
  "sarga-7-116": {
    meaning: "प्रलय का तेज बनकर मुझमें समा जाओ।",
    english: "Enter me as the radiance of destruction.",
  },
  "sarga-7-117": {
    meaning: "हे पुण्य, जहाँ भी हो, मेरी बाँहों में भर जाओ।",
    english: "O merit, wherever you are, fill my arms.",
  },
  "sarga-7-118": {
    meaning: "हे व्रत-साधना, रूप धारण करो।",
    english: "O discipline of vows, take form.",
  },
  "sarga-7-119": {
    meaning: "हमारे योग की पवित्र ज्वालाओं,",
    english: "O sacred flames of my spiritual discipline,",
  },
  "sarga-7-120": {
    meaning: "आज युद्ध में मेरे साथ आओ।",
    english: "come with me into battle today.",
  },
  "sarga-7-121": {
    meaning: "यदि दान से भी ज्योतियाँ उगी हों,",
    english: "If lights have arisen even from charity,",
  },
  "sarga-7-122": {
    meaning: "मनुष्य-निष्ठा और दलितों के कल्याण से भी,",
    english: "from human devotion and the welfare of the oppressed,",
  },
  "sarga-7-123": {
    meaning: "तो वे भी मेरे साथ चलें।",
    english: "let those too walk with me.",
  },
  "sarga-7-124": {
    meaning: "पराक्रम और शौर्य की ज्वाला सँजोकर।",
    english: "preserving the flame of valor and bravery.",
  },
  "sarga-7-125": {
    meaning: "जिन्हें मैंने हृदय से पूजनीय मानकर,",
    english: "Those whom I regarded as worthy of worship from my heart,",
  },
  "sarga-7-126": {
    meaning: "बड़ी भक्ति से सम्मान दिया।",
    english: "and honored with deep devotion.",
  },
  "sarga-7-127": {
    meaning: "यदि मैं स्त्री-जाति को सुख दे सका हूँ,",
    english: "If I have been able to give comfort to womanhood,",
  },
  "sarga-7-128": {
    meaning: "और उनसे आशीर्वाद ले सका हूँ,",
    english: "and have received blessings from them,",
  },
  "sarga-7-129": {
    meaning: "तो वह आशीर्वाद युद्ध में मेरा कवच बने।",
    english: "then let that blessing become my armor in battle.",
  },
  "sarga-7-130": {
    meaning: "आज वही सत्कर्म मेरा सहायक बने।",
    english: "Let that good deed aid me today.",
  },
  "sarga-7-131": {
    meaning: "मैं पुण्य-बल का सहारा माँगता हूँ।",
    english: "I ask for the support of meritorious strength.",
  },
  "sarga-7-132": {
    meaning: "प्रकट धर्म और अचल निष्ठा का सहारा।",
    english: "of manifest dharma and unwavering devotion.",
  },
  "sarga-7-133": {
    meaning: "मैं ठगा गया हूँ; नियति की दृष्टि में बड़ा दोषी हूँ।",
    english: "I am deceived; in destiny's eyes I am greatly guilty.",
  },
  "sarga-7-134": {
    meaning: "मैं जीवन में विधाता से विद्रोह कर खड़ा हूँ।",
    english: "In life I stand in rebellion against the creator.",
  },
  "sarga-7-135": {
    meaning: "स्वयं भगवान मेरे शत्रु को ले जा रहे हैं।",
    english: "God himself is guiding my enemy.",
  },
  "sarga-7-136": {
    meaning: "गोविंद अनेक प्रकार से मुझे छल रहे हैं।",
    english: "Govinda is deceiving me in many ways.",
  },
  "sarga-7-137": {
    meaning: "फिर भी राधेय का रथ नहीं रुकेगा।",
    english: "Even so, Radheya's chariot will not stop.",
  },
  "sarga-7-138": {
    meaning: "गोविंद के सामने भी मेरा मस्तक युद्ध में नहीं झुकेगा।",
    english: "Even before Govinda, my head will not bow in battle.",
  },
  "sarga-7-139": {
    meaning: "आज मैं उन्हें बताऊँगा कि मनुष्य का धर्म क्या है।",
    english: "Today I will show him what human dharma is.",
  },
  "sarga-7-140": {
    meaning: "युद्ध किसे कहते हैं और विजय का मर्म क्या है।",
    english: "what war is, and what the essence of victory is.",
  },
  "sarga-7-141": {
    meaning: "बच-बचकर पाँव रखना और युद्ध की थाह लेते चलना,",
    english: "To step cautiously and keep measuring the battle,",
  },
  "sarga-7-142": {
    meaning: "दूसरे योद्धा को अपनी मृत्यु का ग्रास बनाना,",
    english: "to make another warrior food for one's own death,",
  },
  "sarga-7-143": {
    meaning: "शत्रु पुकारे तो व्यूह में छिपकर रहना,",
    english: "to hide in formation when the enemy calls,",
  },
  "sarga-7-144": {
    meaning: "सबके सामने ललकार को मन मारकर सहना।",
    english: "to silently endure a challenge before all.",
  },
  "sarga-7-145": {
    meaning: "तभी प्रकट होना जब प्रतिवीर संकट में हो,",
    english: "to appear only when the rival hero is in danger,",
  },
  "sarga-7-146": {
    meaning: "जब उसका धनुष ढीला और तीर कुछ शिथिल हो।",
    english: "when his bow is slack and his arrows weakened.",
  },
  "sarga-7-147": {
    meaning: "यह कौन-सा धर्म है? यह तो निंदा की बात है।",
    english: "What dharma is this? This is worthy of condemnation.",
  },
  "sarga-7-148": {
    meaning: "यह वीरता नहीं, कपट का आघात है।",
    english: "This is not valor; it is a blow of cunning.",
  },
  "sarga-7-149": {
    meaning: "समझ में नहीं आता कि कृष्ण क्या सिखा रहे हैं।",
    english: "I cannot understand what Krishna is teaching.",
  },
  "sarga-7-150": {
    meaning: "वे जगत को कौन-सा नया पुण्य-पथ दिखा रहे हैं?",
    english: "What new path of merit is he showing the world?",
  },
  "sarga-7-151": {
    meaning: "कल द्रोण का वध जिस तरह हुआ, क्या वह धर्म था?",
    english: "Was the way Drona was killed yesterday dharma?",
  },
  "sarga-7-152": {
    meaning: "क्या वह कर्म केशव के समर्थन योग्य था?",
    english: "Was that deed worthy of Keshava's support?",
  },
  "sarga-7-153": {
    meaning: "क्या यही धर्मनिष्ठा है? क्या यही नीति का पालन है?",
    english: "Is this righteousness? Is this the keeping of justice?",
  },
  "sarga-7-154": {
    meaning: "क्या यही मनुष्य के मलिन मन को धोना है?",
    english: "Is this the cleansing of humanity's filth?",
  },
  "sarga-7-155": {
    meaning: "क्या संसार इसे देखकर आगे बढ़ेगा?",
    english: "Will the world move forward after seeing this?",
  },
  "sarga-7-156": {
    meaning: "क्या वह उस शिखर पर चढ़ेगा जहाँ गोविंद हैं?",
    english: "Will it climb the peak where Govinda stands?",
  },
  "sarga-7-157": {
    meaning: "भगवान जो चाहें करें, क्या सब उन्हें क्षमा है?",
    english: "May God do whatever he wishes; is everything forgiven to him?",
  },
  "sarga-7-158": {
    meaning: "पर क्या वज्र का विस्फोट छींटों से रुकता है?",
    english: "But can a thunderbolt's explosion be stopped by droplets?",
  },
  "sarga-7-159": {
    meaning: "वे बुद्धि की चाल चलें, मैं बल से चलूँगा।",
    english: "Let him move by intellect; I will move by strength.",
  },
  "sarga-7-160": {
    meaning: "मैं न उन्हें छलूँगा, न अपने को टेढ़ा होकर छलूँगा।",
    english: "I will deceive neither him nor myself by crookedness.",
  },
  "sarga-7-161": {
    meaning: "क्या इस छोटी-सी धरती के लिए धर्म डिगाना उचित है?",
    english: "Is it right to shake dharma for this small earth?",
  },
  "sarga-7-162": {
    meaning: "क्या मृत्यु के बाद की जिंदगी को भूल जाना उचित है?",
    english: "Is it right to forget the life after death?",
  },
  "sarga-7-163": {
    meaning: "क्या एक नगर बसाने को लाख जन्म जलाना ठीक है?",
    english: "Is it right to burn countless lives to build one city?",
  },
  "sarga-7-164": {
    meaning: "क्या पुण्य को युद्ध में गलाकर मुकुट गढ़ना अच्छा है?",
    english: "Is it good to melt merit in war to forge a crown?",
  },
  "sarga-7-165": {
    meaning: "राधेय सत्पथ छोड़कर पाप का आश्रय नहीं लेगा।",
    english: "Radheya will not leave the right path and take shelter in sin.",
  },
  "sarga-7-166": {
    meaning: "विजय मिले या न मिले, वह किरणों का लोक पाएगा।",
    english: "Whether victory comes or not, he will attain the realm of rays.",
  },
  "sarga-7-167": {
    meaning: "कृष्ण विजय के गुरु हों, पर मैं बलिदान का गुरु हूँ।",
    english: "Krishna may be the master of victory, but I am of sacrifice.",
  },
  "sarga-7-168": {
    meaning: "वे शरीर को आशीष दें, मैं निरंतर प्राण का हूँ।",
    english: "Let him bless the body; I belong always to the life-force.",
  },
  "sarga-7-169": {
    meaning: "बलिदान की पवित्र ज्वालाएँ जाग उठीं।",
    english: "The sacred flames of sacrifice have awakened.",
  },
  "sarga-7-170": {
    meaning: "आज युद्ध में कुछ अद्भुत करतब दिखाओ।",
    english: "Show some wondrous feat in battle today.",
  },
  "sarga-7-171": {
    meaning: "आज केवल बाण नहीं, सत्कर्म भी मेरा साथी हो।",
    english: "Today let not arrows alone, but good deeds too be my companions.",
  },
  "sarga-7-172": {
    meaning: "मेरे धनुष पर आज मेरा धर्म भी हो।",
    english: "Let my dharma too rest upon my bow today.",
  },
  "sarga-7-173": {
    meaning: "प्राणों के महल में भूकंप मच जाए।",
    english: "Let an earthquake shake the palace of life.",
  },
  "sarga-7-174": {
    meaning: "युद्ध हमारे बाहुबल में डूब जाए।",
    english: "Let the war sink into the strength of my arms.",
  },
  "sarga-7-175": {
    meaning: "आकाश से वज्र की बौछार छूट पड़े।",
    english: "Let showers of thunderbolts fall from the sky.",
  },
  "sarga-7-176": {
    meaning: "किरणों के तार से झंकार फूट पड़े।",
    english: "Let music burst from the strings of rays.",
  },
  "sarga-7-177": {
    meaning: "पर्वत चलें और समुद्र डोल उठे।",
    english: "Let mountains move and oceans sway.",
  },
  "sarga-7-178": {
    meaning: "मृत्यु अपनी नगरी का द्वार खोल दे।",
    english: "Let death open the gate of its city.",
  },
  "sarga-7-179": {
    meaning: "युद्ध में विनाश फटने जा रहा है।",
    english: "Destruction is about to burst open in battle.",
  },
  "sarga-7-180": {
    meaning: "धरती का मंडल उलटने जा रहा है।",
    english: "The circle of the earth is about to overturn.",
  },
  "sarga-7-181": {
    meaning: "आज कर्ण का युद्ध अनूठा होगा।",
    english: "Today Karna's battle will be unique.",
  },
  "sarga-7-182": {
    meaning: "आज संसार काल का दर्शन करेगा।",
    english: "Today the world will behold death-time itself.",
  },
  "sarga-7-183": {
    meaning: "आज प्रलय का भयानक नृत्य होगा।",
    english: "Today destruction will perform its terrible dance.",
  },
  "sarga-7-184": {
    meaning: "आज आकाश में व्यापक परिवर्तन होगा।",
    english: "Today a vast upheaval will fill the sky.",
  },
  "sarga-7-185": {
    meaning: "जब बाण तरकश छोड़कर चलेगा,",
    english: "When the arrow leaves the quiver,",
  },
  "sarga-7-186": {
    meaning: "तब गोविंद का भी वश नहीं चलेगा।",
    english: "even Govinda will not be able to control it.",
  },
  "sarga-7-187": {
    meaning: "पार्थ का सिर कटे धड़ से गिर पड़ेगा।",
    english: "Partha's head will fall from his severed body.",
  },
  "sarga-7-188": {
    meaning: "विजयी कुरुराज युद्ध से लौटेगा।",
    english: "The victorious Kuru king will return from battle.",
  },
  "sarga-7-189": {
    meaning: "आनंद बनकर मेरे हृदय में छा रहा है।",
    english: "Joy is spreading through my heart.",
  },
  "sarga-7-190": {
    meaning: "रक्त में ज्वार उठता जा रहा है।",
    english: "A tide is rising in my blood.",
  },
  "sarga-7-191": {
    meaning: "मेरे सारे शरीर में रोमांच हो रहा है।",
    english: "A thrill runs through my whole body.",
  },
  "sarga-7-192": {
    meaning: "मानो शरीर में काँटेदार वृक्ष उग आए हों।",
    english: "as if thorny trees have sprouted in my body.",
  },
  "sarga-7-193": {
    meaning: "अहा! मैं भावावेश में डूबता जा रहा हूँ।",
    english: "Ah! I am entering a state of deep emotion.",
  },
  "sarga-7-194": {
    meaning: "मैं जाग रहा हूँ या सोता जा रहा हूँ?",
    english: "Am I awake, or am I falling asleep?",
  },
  "sarga-7-195": {
    meaning: "युद्ध के बाजे बजाओ।",
    english: "Sound the drums of war.",
  },
  "sarga-7-196": {
    meaning: "हे शल्य, मेरा रथ सजाओ।",
    english: "Shalya, prepare my chariot.",
  },
  "sarga-7-197": {
    meaning: "रथ सज गया, नगाड़े गूँज उठे और विशाल आकाश गरज उठा।",
    english: "The chariot was prepared, drums thundered, and the vast sky roared.",
  },
  "sarga-7-198": {
    meaning: "कर्ण गरजकर रथ पर कूदा, जैसे क्रोध से अंधा काल उठता है।",
    english: "Karna roared and leapt onto the chariot like anger-blinded death rising.",
  },
  "sarga-7-199": {
    meaning: "नगाड़े और शंख बज उठे, उल्लसित वीर हुंकार करने लगे।",
    english: "Drums and conches sounded; delighted heroes roared.",
  },
  "sarga-7-200": {
    meaning: "उफनते समुद्र की तरह सैनिक-समूह कर्ण को लेकर चला।",
    english: "Like a swelling sea, the agitated army moved with Karna.",
  },
  "sarga-7-201": {
    meaning: "रथ-घोड़ों की हिनहिनाहट, चक्रों का शोर और हाथियों की गर्जना,",
    english: "The neighing of chariot horses, wheel-roar, and elephant thunder,",
  },
  "sarga-7-202": {
    meaning: "धनुष की भीषण टंकार और मतवाले रणवीरों की पुकार गूँज उठी।",
    english: "the fierce twang of bows and cries of proud warriors resounded.",
  },
  "sarga-7-203": {
    meaning: "ऊपर आकाश हिल उठा और धरती का तन काँप उठा।",
    english: "The sky above shook, and the body of the earth trembled.",
  },
  "sarga-7-204": {
    meaning: "बाण सनसनाकर उड़ने लगे, तलवारें झनझना उठीं।",
    english: "Arrows hissed through the air, and swords rang sharply.",
  },
  "sarga-7-205": {
    meaning: "युद्ध-सागर भूखी ऊँची तरंगों से लहर उठा।",
    english: "The ocean of war surged with hungry, towering waves.",
  },
  "sarga-7-206": {
    meaning: "या विनाश की लपट पहनकर स्वयं रुद्र युद्ध में नाच उठे।",
    english: "as if Rudra himself, wearing flames of destruction, danced in battle.",
  },
  "sarga-7-207": {
    meaning: "इंद्र कहाँ हैं? देखें कि नश्वर मनुष्य कितना प्रज्वलित होता है।",
    english: "Where is Indra? Let him see how blazing a mortal can become.",
  },
  "sarga-7-208": {
    meaning: "देवराज से छलित मनुष्य का युद्ध कितना प्रचंड होता है।",
    english: "how fierce the war of a man deceived by the lord of gods can be.",
  },
  "sarga-7-209": {
    meaning: "जैसे अंगार-वर्षा पाकर सूखे वन का तिनका धधक उठता है,",
    english: "As dry forest grass blazes when showered with embers,",
  },
  "sarga-7-210": {
    meaning: "जैसे नरम मक्खन हथियार की गति रोक नहीं सकता।",
    english: "as soft butter cannot stop a weapon's movement.",
  },
  "sarga-7-211": {
    meaning: "जैसे यम के सामने बँधे मनुष्य का वश नहीं चलता,",
    english: "As a bound man has no power before Yama,",
  },
  "sarga-7-212": {
    meaning: "वैसे ही पांडव-सेना बाणों से घायल और विवश हो गई।",
    english: "so the Pandava army became pierced by arrows and helpless.",
  },
  "sarga-7-213": {
    meaning: "कर्ण जिधर झुकता, वीर उस दिशा को छोड़ भागने लगते।",
    english: "Wherever Karna turned, warriors fled from that direction.",
  },
  "sarga-7-214": {
    meaning: "जैसे चिड़ियों का झुंड चमकते गरुड़ को देखकर भागता है।",
    english: "like small birds fleeing at the sight of a radiant eagle.",
  },
  "sarga-7-215": {
    meaning: "लोग मन-ही-मन पछताते थे कि आज युद्ध में क्यों आए।",
    english: "People inwardly regretted coming to battle that day.",
  },
  "sarga-7-216": {
    meaning: "उसे दूर से देखकर भी सब भय से सहम जाते थे।",
    english: "Even seeing him from afar, all shrank in fear.",
  },
  "sarga-7-217": {
    meaning: "युद्ध-वन को काटता हुआ राधेय हर क्षण गरजता था।",
    english: "Cutting through the forest of battle, Radheya roared again and again.",
  },
  "sarga-7-218": {
    meaning: "उसके नाद की धमक सुनकर शत्रु-व्यूह हर क्षण काँपता था।",
    english: "Hearing the shock of his roar, the enemy formation trembled constantly.",
  },
  "sarga-7-219": {
    meaning: "शत्रु-सेना को व्याकुल देखकर वह और उत्साह से बढ़ चला।",
    english: "Seeing the enemy army distressed, he advanced with greater zeal.",
  },
  "sarga-7-220": {
    meaning: "उसकी भुजा का अथाह सागर और अधिक उमड़ पड़ा।",
    english: "The unfathomable ocean of his arm's power surged even more.",
  },
  "sarga-7-221": {
    meaning: "कर्ण निडर होकर गरजा, शल्य, देखो आज मैं क्या करता हूँ।",
    english: "Karna roared fearlessly: Shalya, see what I do today.",
  },
  "sarga-7-222": {
    meaning: "कुंती-पुत्र और कृष्ण, दोनों को किस तरह जीवित पकड़ता हूँ।",
    english: "how I capture both Kunti's son and Krishna alive.",
  },
  "sarga-7-223": {
    meaning: "आज शाम तक यहीं सुयोधन का विजय-तिलक सजाकर,",
    english: "By this evening, after adorning Suyodhana with victory's mark here,",
  },
  "sarga-7-224": {
    meaning: "हम रणभूमि में विजय-दुंदुभि बजाकर लौटेंगे।",
    english: "we shall return after sounding the victory drum in battle.",
  },
  "sarga-7-225": {
    meaning: "इतने में कुटिल नियति से प्रेरित धर्मराज सामने आ गए।",
    english: "Just then, driven by crooked fate, Dharmaraja came before him.",
  },
  "sarga-7-226": {
    meaning: "कर्ण मृत्यु की तरह टूट पड़ा, जैसे बाज कोयल पर टूटता है।",
    english: "Karna fell like death, as a hawk falls upon a cuckoo.",
  },
  "sarga-7-227": {
    meaning: "लेकिन दोनों का असमान युद्ध क्षण-भर भी टिक न सका।",
    english: "But their unequal battle could not last even a moment.",
  },
  "sarga-7-228": {
    meaning: "युधिष्ठिर की मुनि-जैसी कोमल काया गहरी चोट सह न सकी।",
    english: "Yudhishthira's sage-like tender body could not bear the deep blow.",
  },
  "sarga-7-229": {
    meaning: "वे रण छोड़ भागे; कर्ण ने दौड़कर उनकी गर्दन पकड़ ली।",
    english: "He fled the battle; Karna rushed and seized him by the neck.",
  },
  "sarga-7-230": {
    meaning: "कौतुक से बोला, महाराज, आप तो अत्यंत कोमल निकले।",
    english: "Amused, he said: Majesty, you have turned out very delicate.",
  },
  "sarga-7-231": {
    meaning: "हाँ, कायर नहीं, कोमल कहकर आपकी जान बचा रहा हूँ।",
    english: "Yes, not coward, but delicate; saying this, I spare your life.",
  },
  "sarga-7-232": {
    meaning: "आगे के लिए एक सरल उपाय भी बता देता हूँ।",
    english: "For the future, I will also tell you a simple remedy.",
  },
  "sarga-7-233": {
    meaning: "आप ब्राह्मण-स्वभाव के हैं; धर्म साधिए किसी निर्जन वन में।",
    english: "You are priestly by nature; practice dharma in some lonely forest.",
  },
  "sarga-7-234": {
    meaning: "बताइए, साधुओं का इस घोर घातक युद्ध में क्या काम?",
    english: "Tell me, what business do saints have in this deadly war?",
  },
  "sarga-7-235": {
    meaning: "कभी क्षत्रियता के भ्रम में युद्ध की जलन मत झेला कीजिए।",
    english: "Never again suffer war's burning under the illusion of warriorhood.",
  },
  "sarga-7-236": {
    meaning: "जाइए, फिर कभी गरुड़ की झपटों से मत खेलिए।",
    english: "Go, and never again play with Garuda's swoops.",
  },
  "sarga-7-237": {
    meaning: "धर्मराज ग्लानि में डूबकर युद्ध छोड़ भागे।",
    english: "Dharmaraja, sunk in shame, fled the battle.",
  },
  "sarga-7-238": {
    meaning: "सोचते रहे, वीरों का समाज मन में क्या कहेगा?",
    english: "He wondered what the community of heroes would think.",
  },
  "sarga-7-239": {
    meaning: "उसने मेरे प्राण लेकर मेरा मान क्यों नहीं रखा?",
    english: "Why did he not preserve my honor by taking my life?",
  },
  "sarga-7-240": {
    meaning: "उस पापी ने आजीवन ग्लानि सहने को ही मुझे जीवनदान दिया।",
    english: "That sinner spared me only to suffer lifelong shame.",
  },
  "sarga-7-241": {
    meaning: "हाय कुंती-पुत्र समझ न सके कि कर्ण ने उनके प्राण क्यों छोड़ दिए।",
    english: "Alas, Kunti's sons did not understand why Karna spared their lives.",
  },
  "sarga-7-242": {
    meaning: "विजयी तलवार गर्दन तक आकर अचानक क्यों लौट गई।",
    english: "Why the victorious blade, reaching the neck, suddenly turned back.",
  },
  "sarga-7-243": {
    meaning: "पर अदृश्य भाग्य ने लिखा कि कर्ण ने धर्म-वचन निभाया।",
    english: "But unseen fate wrote that Karna kept his word of dharma.",
  },
  "sarga-7-244": {
    meaning: "उसने तलवार का ग्रास छीनकर उन्हें माँ के आँचल में डाल दिया।",
    english: "He snatched them from the sword's mouth and placed them in their mother's lap.",
  },
  "sarga-7-245": {
    meaning: "यह शील कितना पवित्र था; कर्ण जब तक रण में खड़ा रहा,",
    english: "How pure this virtue was; as long as Karna stood in battle,",
  },
  "sarga-7-246": {
    meaning: "माँ की चेतन प्रतिमा उसके मन में घूमती रही।",
    english: "the living image of his mother kept moving through his mind.",
  },
  "sarga-7-247": {
    meaning: "सहदेव, युधिष्ठिर, नकुल और भीम को बार-बार वश में लाकर,",
    english: "Again and again, after overpowering Sahadeva, Yudhishthira, Nakula, and Bhima,",
  },
  "sarga-7-248": {
    meaning: "भीतर से कोई संकेत पाकर उसने हँसकर मुक्त कर दिया।",
    english: "he received some inner sign and smilingly set them free.",
  },
  "sarga-7-249": {
    meaning: "शल्य सब देखता रहा, पर जब पांडव इसी तरह भागे,",
    english: "Shalya kept watching everything, but when the Pandavas escaped like this,",
  },
  "sarga-7-250": {
    meaning: "तो वह चकित होकर कर्ण से कठोर वचन बोला।",
    english: "he was astonished and spoke harsh words to Karna.",
  },
  "sarga-7-251": {
    meaning: "अरे सूतपुत्र! यह भयंकर काल-पृष्ठ धनुष किसलिए धरे हो?",
    english: "O charioteer's son, why do you carry this terrible death-dark bow?",
  },
  "sarga-7-252": {
    meaning: "मारना नहीं है तो वीरों को घेरकर पकड़ते क्यों हो?",
    english: "If you will not kill, why surround and capture heroes?",
  },
  "sarga-7-253": {
    meaning: "क्या आज शाम तक तुम इसी तरह युद्ध-विजय करोगे?",
    english: "Will you win today's war in this manner until evening?",
  },
  "sarga-7-254": {
    meaning: "शत्रुओं को मारोगे या उन्हें जीवन देकर स्वयं मरोगे?",
    english: "Will you kill your enemies, or give them life and die yourself?",
  },
  "sarga-7-255": {
    meaning: "युद्ध का यह विचित्र खेल मुझे समझ नहीं आता।",
    english: "I cannot understand this strange game of war.",
  },
  "sarga-7-256": {
    meaning: "कायर! अवश्य ही तुम मन में पार्थ को याद कर डरते हो।",
    english: "Coward, surely you remember Partha in your heart and fear him.",
  },
  "sarga-7-257": {
    meaning: "राधेय हँसकर बोला, शल्य, पार्थ का भय उसे होगा,",
    english: "Radheya laughed and said: Shalya, fear of Partha belongs to one,",
  },
  "sarga-7-258": {
    meaning: "जिसे नष्ट होने वाले क्षणिक शरीर से झूठा प्रेम होगा।",
    english: "who falsely loves this decaying, momentary body.",
  },
  "sarga-7-259": {
    meaning: "मैं इस चार दिन के जीवन को कुछ नहीं समझता।",
    english: "I consider this brief life of a few days as nothing.",
  },
  "sarga-7-260": {
    meaning: "मैं वही करता हूँ जिसे भीतर से सदा सही समझता हूँ।",
    english: "I do what I always feel inwardly to be right.",
  },
  "sarga-7-261": {
    meaning: "इन अत्यंत भूखे बाणों के मुख से ग्रास छीनकर,",
    english: "Snatching food from the mouths of these extremely hungry arrows,",
  },
  "sarga-7-262": {
    meaning: "मैं कौन-से आंतरिक सुख से प्रसन्न होकर हँस देता हूँ;",
    english: "I smile in joy from some restless inner happiness;",
  },
  "sarga-7-263": {
    meaning: "यह अंत:पुर की कथा नहीं कि मुख से बाहर कही जाए।",
    english: "this is not a private-chamber tale to be spoken aloud.",
  },
  "sarga-7-264": {
    meaning: "यह धर्म के वर जैसी व्यथा है, जिसे सुख सहित मौन सहना है।",
    english: "This is a pain like a boon of dharma, to be silently endured with joy.",
  },
  "sarga-7-265": {
    meaning: "सब लोग इसी लोक में विजय पाने के लिए आँख मूँदकर लड़ते हैं।",
    english: "Everyone fights blindly to gain victory in this world.",
  },
  "sarga-7-266": {
    meaning: "पर कर्ण किसी ऊँचे सद्धर्म को निभाने के लिए लड़ता है।",
    english: "But Karna fights to uphold a higher true dharma.",
  },
  "sarga-7-267": {
    meaning: "क्या सबके साथ मेरे भी पाँव इस कीचड़ भरे ताल में पड़ेंगे?",
    english: "Will my feet too fall with everyone else's into this muddy pool?",
  },
  "sarga-7-268": {
    meaning: "क्या मिट्टी के इस जगत के लोभ मेरी आत्मा का तेज हर लेंगे?",
    english: "Will the clay-world's temptations steal my soul's radiance?",
  },
  "sarga-7-269": {
    meaning: "यह देह टूटने वाली है, इस मिट्टी का प्रमाण कब तक?",
    english: "This body will break; how long can this clay be proof?",
  },
  "sarga-7-270": {
    meaning: "मिट्टी छोड़कर ऊपर आकाश में भी तो विमान ले जाना है।",
    english: "Leaving clay behind, one must carry the chariot upward into the sky too.",
  },
  "sarga-7-271": {
    meaning: "मैं आकाश-मंडल में सीढ़ियाँ बनाने का सामान जुटा रहा हूँ।",
    english: "I am gathering materials to build steps into the heavens.",
  },
  "sarga-7-272": {
    meaning: "ये चार फूल मैंने ऊपर की राह सजाने को फेंके हैं।",
    english: "These four flowers I have cast to decorate the upward path.",
  },
  "sarga-7-273": {
    meaning: "ये चार फूल किसी दुखी आँखों के आँसुओं का मूल्य हैं।",
    english: "These four flowers are the price of tear-filled, helpless eyes.",
  },
  "sarga-7-274": {
    meaning: "ये चार फूल किसी महान दानी का छिपा हुआ दान हैं।",
    english: "These four flowers are the hidden gift of a great giver.",
  },
  "sarga-7-275": {
    meaning: "ये चार फूल, जिन्हें कभी मेरा अदृष्ट चाहता था,",
    english: "These four flowers, which my destiny once desired,",
  },
  "sarga-7-276": {
    meaning: "उन्हें पाकर अंतर्यामी प्रसन्न होकर हँसते होंगे।",
    english: "having received them, the inner-knowing Lord must be smiling.",
  },
  "sarga-7-277": {
    meaning: "शल्य, तुम इसे नहीं समझोगे; यह नादानों का करतब है।",
    english: "Shalya, you will not understand; this is the feat of the innocent-mad.",
  },
  "sarga-7-278": {
    meaning: "ये खेल जीत से बड़े किसी उद्देश्य के दीवानों के हैं।",
    english: "These are games of those mad for a purpose greater than victory.",
  },
  "sarga-7-279": {
    meaning: "इसका स्वाद वही जानते हैं जो स्वप्न की मदिरा पीते हैं।",
    english: "Only those know its taste who drink the wine of dreams.",
  },
  "sarga-7-280": {
    meaning: "जो दुनिया में रहकर भी दुनिया से अलग खड़े जीते हैं।",
    english: "who live in the world while standing apart from it.",
  },
  "sarga-7-281": {
    meaning: "शल्य सचमुच इसे न समझा; बोला, यह प्रलाप बंद करो।",
    english: "Shalya truly did not understand; he said, stop this babbling.",
  },
  "sarga-7-282": {
    meaning: "हिम्मत है तो युद्ध करो, बल है तो धनुष धरो।",
    english: "If you have courage, fight; if you have strength, take up your bow.",
  },
  "sarga-7-283": {
    meaning: "देखो, वह वानर-ध्वजा दूर से दिखाई पड़ती है।",
    english: "Look, the monkey-banner is visible from afar.",
  },
  "sarga-7-284": {
    meaning: "पार्थ के महारथ की घरघराहट सुनाई पड़ती है।",
    english: "The rumble of Partha's great chariot can be heard.",
  },
  "sarga-7-285": {
    meaning: "उसके घोड़े कितने वेगवान हैं, बिजली भी लज्जित हो जाए।",
    english: "How swift his horses are; even lightning is put to shame.",
  },
  "sarga-7-286": {
    meaning: "आगे सेना हट रही है, पीछे से घटा-सी छा रही है।",
    english: "The army clears ahead, while a cloud seems to gather behind.",
  },
  "sarga-7-287": {
    meaning: "राधेय, काल आ पहुँचा; शीघ्र बाण संधान करो।",
    english: "Radheya, the hour of death has arrived; quickly aim your arrows.",
  },
  "sarga-7-288": {
    meaning: "जिस युद्ध की लालसा में सदा व्याकुल थे, उसे पूर्ण करो।",
    english: "Fulfill the battle-longing for which you were always restless.",
  },
  "sarga-7-289": {
    meaning: "पार्थ को देखकर उसके हृदय-सागर में उमंग उछल पड़ी।",
    english: "Seeing Partha, the ocean of his heart surged with delight.",
  },
  "sarga-7-290": {
    meaning: "कर्ण गड़गड़ाहट कर क्रुद्ध मृत्यु जैसा विशाल हो गया।",
    english: "With thunderous sound, Karna became vast like wrathful death.",
  },
  "sarga-7-291": {
    meaning: "वह बोला, पार्थ, जिस हेतु विधि ने हम दोनों का निर्माण किया,",
    english: "He said: Partha, the purpose for which fate created us both,",
  },
  "sarga-7-292": {
    meaning: "जिसलिए हम दोनों ने प्रकृति के अग्नि-तत्व को पिया,",
    english: "for which we both drank nature's element of fire,",
  },
  "sarga-7-293": {
    meaning: "जिस दिन के लिए हम दोनों वीर अथक साधना करते आए,",
    english: "the day for which we two heroes have practiced tirelessly,",
  },
  "sarga-7-294": {
    meaning: "भाग्य से जन्म-जन्मों का वह निश्चित क्षण आज आ गया।",
    english: "by fate, that destined moment of many births has arrived today.",
  },
  "sarga-7-295": {
    meaning: "आओ, हम दोनों बाण-अग्नि से पूजित होकर जयकार करें।",
    english: "Come, let us be worshiped by arrow-fire and call victory.",
  },
  "sarga-7-296": {
    meaning: "एक-दूसरे का अंग काटकर जी-भर सत्कार करें।",
    english: "Let us honor each other fully by cutting each other's limbs.",
  },
  "sarga-7-297": {
    meaning: "पर सावधान, इस मिलन-बिंदु से अलग नहीं होना होगा।",
    english: "But beware, neither of us may leave this point of meeting.",
  },
  "sarga-7-298": {
    meaning: "आज हम दोनों में से किसी एक को यहीं सोना होगा।",
    english: "Today one of us two must sleep here.",
  },
  "sarga-7-299": {
    meaning: "बहुत देर हो गई; आज अंतिम निर्णय कर लेना है।",
    english: "It has been too long; today the final decision must be made.",
  },
  "sarga-7-300": {
    meaning: "शत्रु का या अपना सिर काटकर यहीं धर देना है।",
    english: "Either the enemy's head or one's own must be cut and laid here.",
  },
  "sarga-7-301": {
    meaning: "कर्ण का यह गर्व देखकर पार्थ का सूर्य-सा हृदय दहक उठा।",
    english: "Seeing Karna's pride, Partha's sun-bright heart blazed.",
  },
  "sarga-7-302": {
    meaning: "वह बोला, सारथी-पुत्र, तूने सचमुच योग्य निश्चय किया।",
    english: "He said: charioteer's son, you have indeed made a fitting resolve.",
  },
  "sarga-7-303": {
    meaning: "पर यहाँ कौन रहेगा, यह अभी बता देता हूँ।",
    english: "But I will tell you right now who will remain here.",
  },
  "sarga-7-304": {
    meaning: "मूर्ख, अभी तेरे धड़ से सिर अलग कर देता हूँ।",
    english: "Fool, I will remove your head from your trunk right now.",
  },
  "sarga-7-305": {
    meaning: "यह कहकर अर्जुन ने कान तक धनुष तानकर बाण साधा।",
    english: "Saying this, Arjuna drew his bow to his ear and aimed.",
  },
  "sarga-7-306": {
    meaning: "अपने हिसाब से उसने शत्रु को मरा हुआ मान लिया।",
    english: "In his own mind, he judged the opponent already slain.",
  },
  "sarga-7-307": {
    meaning: "पर कर्ण ने वह महाबाण झेला और काल-सा ठहाका लगाया।",
    english: "But Karna endured that great arrow and laughed like death.",
  },
  "sarga-7-308": {
    meaning: "युद्ध के सारे स्वर डूब गए, दिशाएँ उसके निनाद से भर गईं।",
    english: "All sounds of battle drowned; the directions filled with his roar.",
  },
  "sarga-7-309": {
    meaning: "वह बोला, शाबाश वीर अर्जुन, यह बड़ा गहरा सत्कार था।",
    english: "He said: well done, brave Arjuna, this was a very deep greeting.",
  },
  "sarga-7-310": {
    meaning: "पर बुरा न मानना, मुझ पर आकर वह बेकार रहा।",
    english: "But do not mind; upon me it proved useless.",
  },
  "sarga-7-311": {
    meaning: "कवच-कुंडल रहित इस तन को कोमल कमल मत समझो।",
    english: "Do not think this armorless body a tender lotus.",
  },
  "sarga-7-312": {
    meaning: "साधना से दीप्त इस वक्ष को अब भी अभेद्य पर्वत समझो।",
    english: "Still consider this austerity-lit chest an impenetrable mountain.",
  },
  "sarga-7-313": {
    meaning: "अब मेरा उपहार लो, यही तुम्हें यमलोक पहुँचाएगा।",
    english: "Now take my gift; this will send you to Yama's realm.",
  },
  "sarga-7-314": {
    meaning: "जीवन का सारा स्वाद तुम्हें बस इसी बार मिल जाएगा।",
    english: "All the taste of life will come to you in this one moment.",
  },
  "sarga-7-315": {
    meaning: "ऐसा कहकर राधेय ने होंठ दबाए और रौद्रता से भर गया।",
    english: "Saying this, Radheya pressed his lips and filled with fury.",
  },
  "sarga-7-316": {
    meaning: "वह घातक शक्ति को विकराल धनुष पर धरकर हुंकार उठा।",
    english: "Placing the deadly force upon his terrible bow, he roared.",
  },
  "sarga-7-317": {
    meaning: "भगवान संभलकर रथ को थोड़ा इधर-उधर नचा पाते,",
    english: "Before the Lord could steady and move the chariot aside,",
  },
  "sarga-7-318": {
    meaning: "तब तक पृथानंदन रथ में ही घायल, व्याकुल, मूर्छित गिर पड़ा।",
    english: "Pritha's son fell in the chariot itself, wounded, shaken, and unconscious.",
  },
  "sarga-7-319": {
    meaning: "कर्ण का यह युद्ध-शौर्य देखकर रण में हाहाकार मच गया।",
    english: "Seeing Karna's battle-valor, panic spread through the battlefield.",
  },
  "sarga-7-320": {
    meaning: "सब पूछने लगे, क्या सचमुच पार्थ का संहार हो गया?",
    english: "All began asking: has Partha truly been destroyed?",
  },
  "sarga-7-321": {
    meaning: "पर नहीं, मृत्यु का तट छूकर अर्जुन शीघ्र चेत गया।",
    english: "But no; touching death's shore, Arjuna soon awakened.",
  },
  "sarga-7-322": {
    meaning: "क्रोध से अंधा होकर वह कर्ण के साथ द्विरथ-युद्ध मचाने लगा।",
    english: "Blinded by anger, he began a chariot duel with Karna.",
  },
  "sarga-7-323": {
    meaning: "दोनों वर्षा-ऋतु जैसे गरज-गरजकर प्रतिद्वंद्वी पर प्रहार करते थे।",
    english: "Both thundered like monsoon clouds and struck at the rival.",
  },
  "sarga-7-324": {
    meaning: "लेकिन दोनों की जीत-हार तराजू के बीच संतुलित खड़ी थी।",
    english: "Yet their victory and defeat stood balanced at the center of the scale.",
  },
  "sarga-7-325": {
    meaning: "इस ओर कर्ण सूर्य समान, उस ओर पार्थ मृत्यु समान था।",
    english: "On one side Karna was sun-like, on the other Partha death-like.",
  },
  "sarga-7-326": {
    meaning: "युद्ध के बहाने मानो स्वयं प्रलय रण में मूर्तिमान हो उठा।",
    english: "Under the pretext of battle, destruction itself seemed embodied.",
  },
  "sarga-7-327": {
    meaning: "एक क्षण लड़ना छोड़ पूरी सेना विस्मय से मोहित हो गई।",
    english: "For a moment all fighting stopped; the army was spellbound.",
  },
  "sarga-7-328": {
    meaning: "सब निःश्वास होकर दो महायोद्धाओं का विकट युद्ध देखने लगे।",
    english: "All watched breathlessly the fierce battle of the two great warriors.",
  },
  "sarga-7-329": {
    meaning: "कथा है, देवता भी आँखों का लोभ रोक न सके।",
    english: "It is said even the gods could not restrain their eyes' desire.",
  },
  "sarga-7-330": {
    meaning: "कुरुभूमि के ऊपर विमानों से आकाश भर गया।",
    english: "Above Kurukshetra, the sky filled with celestial vehicles.",
  },
  "sarga-7-331": {
    meaning: "दिशाओं की साँस रुक गई; प्रकृति के रूप गंभीर तन्मय हो गए।",
    english: "The directions held their breath; all forms of nature grew absorbed and grave.",
  },
  "sarga-7-332": {
    meaning: "ऊपर सूर्य का रथ ठहर गया, नीचे नदियों का जल अचल हो गया।",
    english: "Above, the sun's chariot paused; below, the rivers' waters stood still.",
  },
  "sarga-7-333": {
    meaning: "अहा! ये दो अद्भुत पुरुषों का युग्म,",
    english: "Ah, this pair of two wondrous men,",
  },
  "sarga-7-334": {
    meaning: "दो महा मतवाले मानव-हाथियों का।",
    english: "two greatly intoxicated human elephants.",
  },
  "sarga-7-335": {
    meaning: "ये दो नरगुणों के मूर्तिमान अवतार हैं।",
    english: "These two are embodied incarnations of human virtues.",
  },
  "sarga-7-336": {
    meaning: "ये दोनों मनुष्य-कुल के सुंदर श्रृंगार हैं।",
    english: "These two are beautiful adornments of humankind.",
  },
  "sarga-7-337": {
    meaning: "यदि ये दोनों कभी मिलकर एक हो पाते,",
    english: "If these two could ever unite as one,",
  },
  "sarga-7-338": {
    meaning: "यदि ये शील का आधार ग्रहण कर पाते,",
    english: "if they could take support in noble conduct,",
  },
  "sarga-7-339": {
    meaning: "तो क्या मनुष्यता को उत्थान नहीं मिलता?",
    english: "would humanity not have risen?",
  },
  "sarga-7-340": {
    meaning: "क्या उसे अनूठा वरदान नहीं मिलता?",
    english: "would it not have received a unique blessing?",
  },
  "sarga-7-341": {
    meaning: "पर यही मनुष्य जाति का शाप है।",
    english: "But this is the curse of humankind.",
  },
  "sarga-7-342": {
    meaning: "यह हमारा बचा हुआ पाप है।",
    english: "This is our remaining sin.",
  },
  "sarga-7-343": {
    meaning: "जो बड़े फूल खिलते हैं,",
    english: "The great flowers that bloom,",
  },
  "sarga-7-344": {
    meaning: "वे अहंकार में भ्रमित होकर भूल जाते हैं।",
    english: "become confused in ego and forget themselves.",
  },
  "sarga-7-345": {
    meaning: "वे मिलकर वन से प्रेम नहीं करते।",
    english: "They do not join together to love the forest.",
  },
  "sarga-7-346": {
    meaning: "झगड़कर विश्व का संहार करते हैं।",
    english: "They quarrel and destroy the world.",
  },
  "sarga-7-347": {
    meaning: "जगत को पूरा दुख में डालकर,",
    english: "After plunging the world into total sorrow,",
  },
  "sarga-7-348": {
    meaning: "वे स्वयं भी काल के मुख में शरण पाते हैं।",
    english: "they themselves take refuge in death's mouth.",
  },
  "sarga-7-349": {
    meaning: "यह विष की क्रांति कब तक चलेगी?",
    english: "How long will this revolution of poison continue?",
  },
  "sarga-7-350": {
    meaning: "शांति कब तक शक्ति से वंचित रहेगी?",
    english: "How long will peace remain deprived of strength?",
  },
  "sarga-7-351": {
    meaning: "मनुष्य मनुष्यता से कब तक लड़ता रहेगा?",
    english: "How long will humans keep fighting humanity?",
  },
  "sarga-7-352": {
    meaning: "वीरत्व से आग कब तक झड़ती रहेगी?",
    english: "How long will fire keep falling from heroism?",
  },
  "sarga-7-353": {
    meaning: "जो विकृति प्राणों में अंगार भरती है,",
    english: "The distortion that fills life with embers,",
  },
  "sarga-7-354": {
    meaning: "और हमें युद्ध के लिए विवश करती है,",
    english: "and makes us helplessly choose war,",
  },
  "sarga-7-355": {
    meaning: "उसकी तीखी जलन कब घटेगी?",
    english: "when will its fierce burning decrease?",
  },
  "sarga-7-356": {
    meaning: "उसे कोई दूसरी राह कब मिलेगी?",
    english: "When will it find another path?",
  },
  "sarga-7-357": {
    meaning: "हम विष का शमन खोजते हैं।",
    english: "We search for a cure to poison.",
  },
  "sarga-7-358": {
    meaning: "पर शायद हम उदास मन ही खोजते हैं।",
    english: "But perhaps we search with a dispirited mind.",
  },
  "sarga-7-359": {
    meaning: "दिन में जिस विष को हम बुझाते हैं,",
    english: "The poison we extinguish by day,",
  },
  "sarga-7-360": {
    meaning: "रात भर फूँक-फूँककर उसी को जगाते रहते हैं।",
    english: "we blow upon all night and awaken again.",
  },
  "sarga-7-361": {
    meaning: "मनुष्य का विवेचन टेढ़ा और उलझा हुआ हो गया है।",
    english: "Human reasoning has become twisted and entangled.",
  },
  "sarga-7-362": {
    meaning: "उसका हृदय सैकड़ों भय से डर गया है।",
    english: "His heart is terrified by a hundred fears.",
  },
  "sarga-7-363": {
    meaning: "धरती पर महाभारत चल रहा है।",
    english: "The Mahabharata is raging upon the earth.",
  },
  "sarga-7-364": {
    meaning: "संसार का भाग्य युद्ध में जल रहा है।",
    english: "The world's fate is burning in war.",
  },
  "sarga-7-365": {
    meaning: "महाभारत का युद्ध चल रहा है।",
    english: "The war of Mahabharata goes on.",
  },
  "sarga-7-366": {
    meaning: "धरती का सौभाग्य जल रहा है।",
    english: "The earth's sacred fortune is burning.",
  },
  "sarga-7-367": {
    meaning: "कुरुक्षेत्र में फटकर खेल रही है,",
    english: "Bursting open in Kurukshetra, there plays,",
  },
  "sarga-7-368": {
    meaning: "मनुष्य के भीतर की कुटिल आग।",
    english: "the crooked fire within humanity.",
  },
  "sarga-7-369": {
    meaning: "घोड़ों और हाथियों की लाशों में,",
    english: "Among the corpses of horses and elephants,",
  },
  "sarga-7-370": {
    meaning: "मनुष्यों के कटे अंग गिर रहे हैं।",
    english: "severed human limbs are falling.",
  },
  "sarga-7-371": {
    meaning: "चार पैरों वाले और दो पैरों वाले जीवों का,",
    english: "The blood of four-footed and two-footed beings,",
  },
  "sarga-7-372": {
    meaning: "रक्त मिलकर एक साथ बह रहा है।",
    english: "is flowing together as one.",
  },
  "sarga-7-373": {
    meaning: "गतिशील, लालिमा भरे, सुडौल पर्वतों जैसे,",
    english: "Moving, reddish, like graceful mountains,",
  },
  "sarga-7-374": {
    meaning: "रक्त से रंगे शरीर लिए हुए,",
    english: "bearing blood-stained bodies,",
  },
  "sarga-7-375": {
    meaning: "कुंती-पुत्र और कर्ण लड़ रहे थे।",
    english: "Kunti's son and Karna were battling.",
  },
  "sarga-7-376": {
    meaning: "वे हर क्षण गंभीर गर्जना कर रहे थे।",
    english: "They thundered deeply at every moment.",
  },
  "sarga-7-377": {
    meaning: "दोनों युद्धकुशल धनुर्धर पुरुष थे।",
    english: "Both were battle-skilled archers.",
  },
  "sarga-7-378": {
    meaning: "दोनों समान बलवान और समर्थ थे।",
    english: "Both were equally strong and capable.",
  },
  "sarga-7-379": {
    meaning: "दोनों की अचूक बाण-वर्षा,",
    english: "The unfailing arrow-showers of each,",
  },
  "sarga-7-380": {
    meaning: "दूसरे पर व्यर्थ हो रही थी।",
    english: "were proving useless against the other.",
  },
  "sarga-7-381": {
    meaning: "इसी बीच कर्ण ने अपने तरकश में देखा कि,",
    english: "Meanwhile, Karna saw in his quiver that,",
  },
  "sarga-7-382": {
    meaning: "बाणों के बीच कोई प्रचंड विषधर फुँकार उठा।",
    english: "among the arrows, a fierce venomous serpent hissed.",
  },
  "sarga-7-383": {
    meaning: "वह बोला, कर्ण, मैं अश्वसेन हूँ, प्रसिद्ध सर्पों का स्वामी।",
    english: "It said: Karna, I am Ashwasena, lord of famed serpents.",
  },
  "sarga-7-384": {
    meaning: "जन्म से पार्थ का परम शत्रु और अनेक तरह से तुम्हारा हितैषी हूँ।",
    english: "By birth Partha's supreme enemy and in many ways your well-wisher.",
  },
  "sarga-7-385": {
    meaning: "बस एक बार कृपा कर मुझे धनुष पर चढ़कर लक्ष्य तक जाने दो।",
    english: "Only once, kindly let me mount your bow and reach the target.",
  },
  "sarga-7-386": {
    meaning: "इस महाशत्रु को अभी रथ में ही सुलाने दो।",
    english: "Let me lay this great enemy to sleep in his chariot now.",
  },
  "sarga-7-387": {
    meaning: "जीवन भर का संचित विष उगलकर अपना प्रतिशोध उतारूँगा।",
    english: "Vomiting the venom stored through life, I will take my revenge.",
  },
  "sarga-7-388": {
    meaning: "तुम मुझे सहारा दो, मैं अभी पार्थ को मार डालूँगा।",
    english: "Support me, and I will kill Partha right now.",
  },
  "sarga-7-389": {
    meaning: "राधेय थोड़ा हँसकर बोला, रे कुटिल, कैसी बात कहता है?",
    english: "Radheya smiled slightly and said: crooked one, what are you saying?",
  },
  "sarga-7-390": {
    meaning: "मनुष्य की विजय के सारे साधन उसकी अपनी बाँहों में रहते हैं।",
    english: "All the means of human victory lie in one's own arms.",
  },
  "sarga-7-391": {
    meaning: "और मैं मनुष्य होकर साँपों से मिलकर मनुष्य से युद्ध करूँ?",
    english: "And should I, a human, join with serpents to fight a human?",
  },
  "sarga-7-392": {
    meaning: "जीवन भर पाली निष्ठा के विरुद्ध आचरण करूँ?",
    english: "Should I act against the devotion I have upheld all my life?",
  },
  "sarga-7-393": {
    meaning: "तेरी सहायता से मैं सहज ही विजय पा जाऊँगा।",
    english: "With your help I could easily win.",
  },
  "sarga-7-394": {
    meaning: "लेकिन आने वाली मानवता को मैं क्या मुख दिखाऊँगा?",
    english: "But what face would I show future humanity?",
  },
  "sarga-7-395": {
    meaning: "संसार कहेगा कि कर्ण ने जीवन का सारा पुण्य नष्ट कर दिया।",
    english: "The world would say Karna turned all his life's virtue to ash.",
  },
  "sarga-7-396": {
    meaning: "प्रतिद्वंद्वी के वध के लिए पापी ने सर्प की सहायता ली।",
    english: "For killing his rival, the sinner took a serpent's help.",
  },
  "sarga-7-397": {
    meaning: "अश्वसेन, तेरे अनेक वंशज मनुष्यों में भी छिपे हैं।",
    english: "Ashwasena, many of your descendants hide among humans too.",
  },
  "sarga-7-398": {
    meaning: "वे केवल वन में नहीं, नगरों, गाँवों और घरों में भी बसते हैं।",
    english: "They live not only in forests but in cities, villages, and homes.",
  },
  "sarga-7-399": {
    meaning: "ये मनुष्य-सर्प मानवता का मार्ग बहुत कठिन कर देते हैं।",
    english: "These human-serpents make humanity's path very difficult.",
  },
  "sarga-7-400": {
    meaning: "वे प्रतिद्वंद्वी के वध के लिए नीच सर्प-सहायता लेते हैं।",
    english: "They take vile serpent-help to kill an equal opponent.",
  },
  "sarga-7-401": {
    meaning: "ऐसा न हो कि उन साँपों में मेरा उज्ज्वल नाम भी जुड़ जाए।",
    english: "Let it not be that my bright name joins those serpents.",
  },
  "sarga-7-402": {
    meaning: "और मेरा आदर्श पाकर मनुष्यता का यह पाप और बढ़े।",
    english: "and, taking my example, this sin of humanity grows further.",
  },
  "sarga-7-403": {
    meaning: "अर्जुन मेरा शत्रु है, पर वह सर्प नहीं, मनुष्य ही है।",
    english: "Arjuna is my enemy, but he is not a serpent; he is human.",
  },
  "sarga-7-404": {
    meaning: "संघर्ष सनातन नहीं, शत्रुता केवल इस जीवन तक है।",
    english: "The struggle is not eternal; enmity lasts only this life.",
  },
  "sarga-7-405": {
    meaning: "फिर अगले जीवन को द्वेष से अंधा कर क्यों बिगाड़ूँ?",
    english: "Why then ruin the next life by making it blind with hatred?",
  },
  "sarga-7-406": {
    meaning: "साँपों की शरण जाकर सर्प बनकर मनुष्य को क्यों मारूँ?",
    english: "Why seek refuge with serpents and become one to kill a human?",
  },
  "sarga-7-407": {
    meaning: "भाग जा, मनुष्य के सहज शत्रु, मेरी मित्रता नहीं पा सकता।",
    english: "Go away, natural enemy of humans; you cannot gain my friendship.",
  },
  "sarga-7-408": {
    meaning: "मैं किसी कारण भी यह कलंक अपने ऊपर नहीं लगा सकता।",
    english: "For no reason can I place this stain upon myself.",
  },
  "sarga-7-409": {
    meaning: "सर्प को विदा कर कर्ण फिर गरजता हुआ युद्ध में बढ़ा।",
    english: "Sending the serpent away, Karna advanced roaring into battle again.",
  },
  "sarga-7-410": {
    meaning: "अनंत आकाश झंकार उठा और देवताओं के विमान हिल गए।",
    english: "The infinite sky rang out, and the gods' aircraft shook.",
  },
  "sarga-7-411": {
    meaning: "कर्ण तूफान उठाता हुआ शत्रु-दल को बल से धकेलता चला।",
    english: "Karna moved like a storm, pushing the enemy army by force.",
  },
  "sarga-7-412": {
    meaning: "जैसे बाढ़ की धारा सामने के जल को बहाती चली जाती है।",
    english: "as a flood-current sweeps away the water before it.",
  },
  "sarga-7-413": {
    meaning: "पांडव-सेना भयभीत होकर जिधर भी भागती थी,",
    english: "Wherever the frightened Pandava army fled,",
  },
  "sarga-7-414": {
    meaning: "वह अपने पीछे दौड़ते हुए कर्ण को पाती थी।",
    english: "it found Karna pursuing behind it.",
  },
  "sarga-7-415": {
    meaning: "किसी के मन में विजय की थोड़ी भी आशा नहीं रही।",
    english: "No one had even the slightest hope of victory left.",
  },
  "sarga-7-416": {
    meaning: "सबको व्याकुल और निराश देखकर भगवान बोले।",
    english: "Seeing everyone distressed and hopeless, the Lord spoke.",
  },
  "sarga-7-417": {
    meaning: "अर्जुन, देखो कर्ण किस तरह सारी सेना पर टूट रहा है।",
    english: "Arjuna, see how Karna is falling upon the whole army.",
  },
  "sarga-7-418": {
    meaning: "वह किस तरह निडर होकर पांडवों का पौरुष लूट रहा है।",
    english: "How fearlessly he is plundering the Pandavas' valor.",
  },
  "sarga-7-419": {
    meaning: "जिस ओर देखो, उसी ओर उसके बाण दिखाई पड़ते हैं।",
    english: "Whichever way you look, only his arrows are seen.",
  },
  "sarga-7-420": {
    meaning: "जिधर सुनो, केवल उसकी हुंकार सुनाई देती है।",
    english: "Wherever you listen, only his roar is heard.",
  },
  "sarga-7-421": {
    meaning: "कैसी भयानकता, कैसी चपलता, कितना पौरुष, कैसा प्रहार!",
    english: "What terror, what swiftness, what valor, what strikes!",
  },
  "sarga-7-422": {
    meaning: "यह वीर हाथी जैसे गौरव से युद्ध-वन में घूम रहा है।",
    english: "With what majesty this heroic elephant roams the forest of war.",
  },
  "sarga-7-423": {
    meaning: "एक के बाद एक व्यूह टूट रहे हैं, युद्ध उजड़ता जा रहा है।",
    english: "Formation after formation is breaking; the battle is being ravaged.",
  },
  "sarga-7-424": {
    meaning: "ऐसी धूम तो हाथी कमलवन में भी नहीं मचाता।",
    english: "Even an elephant does not make such havoc in a lotus forest.",
  },
  "sarga-7-425": {
    meaning: "इस पुरुष-सिंह का युद्ध देखकर मेरी आँखें निहाल हो गईं।",
    english: "Seeing this lion-man's battle, my eyes are blessed.",
  },
  "sarga-7-426": {
    meaning: "बुरा न मानना, आज मैं एक पुराना गूढ़ वचन कहता हूँ।",
    english: "Do not mind; today I speak an old, deeply hidden truth.",
  },
  "sarga-7-427": {
    meaning: "कर्ण के साथ तुम्हारा बल भी मैं खूब जानता हूँ।",
    english: "I know well both Karna's strength and yours.",
  },
  "sarga-7-428": {
    meaning: "पर मन-ही-मन इसे तुमसे बड़ा वीर मानता आया हूँ।",
    english: "But inwardly I have considered him a greater hero than you.",
  },
  "sarga-7-429": {
    meaning: "आज उसकी चरम वीरता देखकर मन में यही सोचता हूँ,",
    english: "Seeing his supreme valor today, I wonder in my heart,",
  },
  "sarga-7-430": {
    meaning: "क्या कोई है जो इस अतुल धनुर्धर को युद्ध में जीत सके?",
    english: "is there anyone who can defeat this matchless archer in battle?",
  },
  "sarga-7-431": {
    meaning: "मैं सुदर्शन चक्र धारण करूँ और तुम गांडीव तानो,",
    english: "Even if I take up the Sudarshan discus and you draw Gandiva,",
  },
  "sarga-7-432": {
    meaning: "तब भी शायद कर्ण आज हमारा आतंक नहीं मानेगा।",
    english: "even then Karna may not fear us today.",
  },
  "sarga-7-433": {
    meaning: "यह केवल देह का बल नहीं है।",
    english: "This is not merely bodily strength.",
  },
  "sarga-7-434": {
    meaning: "भीतर के आकाश के सूर्य भी इसे ऐसा प्रचंड बना रहे हैं।",
    english: "The suns of the inner sky too have made him so fiercely radiant.",
  },
  "sarga-7-435": {
    meaning: "यह सामान्य पुरुष नहीं, तपोनिष्ठ व्रतधारी वीर है।",
    english: "He is no ordinary man; he is a vow-bound hero of austerity.",
  },
  "sarga-7-436": {
    meaning: "मिट्टी का यह मनुष्य ज्योतियों के जग का अधिकारी है।",
    english: "This clay-made human is worthy of the world of lights.",
  },
  "sarga-7-437": {
    meaning: "वह अनंत विजय-विश्वास लेकर काल जैसा घोर युद्ध कर रहा है।",
    english: "With endless faith in victory, he wages war like death itself.",
  },
  "sarga-7-438": {
    meaning: "कौन जाने भीतर कौन-सा दिव्य प्रकाश लिए निर्भय घूम रहा है।",
    english: "Who knows what divine light he carries within as he roams fearless.",
  },
  "sarga-7-439": {
    meaning: "जब भी देखो, उसकी आँख सामने किसी शत्रु पर जमी है।",
    english: "Whenever you look, his eye is fixed on some enemy before him.",
  },
  "sarga-7-440": {
    meaning: "वह भूल गया है कि उसके अपने तन पर भी एक सिर है।",
    english: "He has forgotten that his own body too bears a head.",
  },
  "sarga-7-441": {
    meaning: "अर्जुन, तुम भी अपने सारे पराक्रम-बल का आह्वान करो।",
    english: "Arjuna, summon all your valor and strength too.",
  },
  "sarga-7-442": {
    meaning: "हृदय में अर्जित असंख्य विद्याओं का सजग ध्यान करो।",
    english: "Keep alert in your heart all the countless arts you have gained.",
  },
  "sarga-7-443": {
    meaning: "तुममें जो भी तेज है, उसे चरम पर खींच लाना होगा।",
    english: "Whatever radiance is in you must be drawn to its peak.",
  },
  "sarga-7-444": {
    meaning: "तैयार रहो, तुम्हें भी कुछ चमत्कार दिखाना होगा।",
    english: "Be ready; you too must show a marvel.",
  },
  "sarga-7-445": {
    meaning: "भयानक युद्ध देखते हुए सूर्य पश्चिम की ओर ढलने लगा।",
    english: "Watching the terrible battle, the sun began to sink westward.",
  },
  "sarga-7-446": {
    meaning: "कर्ण अचानक गरजा, न जाने किस प्रचंड सुख में डूबा हुआ।",
    english: "Karna suddenly roared, immersed in some fierce joy.",
  },
  "sarga-7-447": {
    meaning: "हे प्रलय, सामने आ; तुझे फाड़कर मैं राह बनाऊँगा।",
    english: "O destruction, appear before me; I will tear you and make a path.",
  },
  "sarga-7-448": {
    meaning: "जाना है तो तेरे भीतर संहार मचाते हुए जाऊँगा।",
    english: "If I must go, I will go creating havoc within you.",
  },
  "sarga-7-449": {
    meaning: "काल क्या धमकाता है? अरे आ जा, तुझे मुट्ठी में बंद करूँ।",
    english: "Why does death threaten me? Come, I will close you in my fist.",
  },
  "sarga-7-450": {
    meaning: "तुझसे छुट्टी पाऊँ, तुझे समाप्त कर स्वयं स्वतंत्र हो जाऊँ।",
    english: "I will be rid of you, end you, and set myself free.",
  },
  "sarga-7-451": {
    meaning: "हे शल्य, घोड़ों को तेज करो, शीघ्र वहाँ उड़ाकर ले चलो।",
    english: "Shalya, speed the horses; carry me there swiftly.",
  },
  "sarga-7-452": {
    meaning: "जहाँ चुने हुए सारे वीर गोविंद और पार्थ के साथ डटे हों।",
    english: "where all chosen heroes stand with Govinda and Partha.",
  },
  "sarga-7-453": {
    meaning: "जहाँ शस्त्रों का झनझनाता निनाद हो और हाथी चिंघाड़ रहे हों।",
    english: "where weapons ring and elephants roar.",
  },
  "sarga-7-454": {
    meaning: "जहाँ रण को भयानक घोषित करते रणवीर हुंकार रहे हों।",
    english: "where warriors roar, declaring battle terrible.",
  },
  "sarga-7-455": {
    meaning: "जहाँ अनगिनत धड़ और सिर कट रहे हों, हर क्षण आर्त्तनाद उठता हो।",
    english: "where countless trunks and heads are cut, and cries rise every moment.",
  },
  "sarga-7-456": {
    meaning: "जहाँ तलवारें झनझना रही हों और तीखे बाण सनसनाते उड़ते हों।",
    english: "where swords ring and sharp arrows hiss through the air.",
  },
  "sarga-7-457": {
    meaning: "जहाँ संहार शरीर धारण कर अपनी पायल बजाता खड़ा हो।",
    english: "where destruction stands embodied, jingling its anklets.",
  },
  "sarga-7-458": {
    meaning: "जहाँ भीषण गर्जन में तांडव का शोर डूब जाता हो।",
    english: "where the roar of tandava drowns in dreadful thunder.",
  },
  "sarga-7-459": {
    meaning: "ले चलो जहाँ आकाश फट रहा हो और घमासान मचा हो।",
    english: "Take me where the sky is tearing and fierce battle rages.",
  },
  "sarga-7-460": {
    meaning: "आज साकार विनाश के बीच घुसकर मुझे प्राण छोड़ने हैं।",
    english: "Today I must enter embodied destruction and give up my life.",
  },
  "sarga-7-461": {
    meaning: "शल्य की समझ में कुछ भी नहीं आया।",
    english: "Shalya understood nothing of it.",
  },
  "sarga-7-462": {
    meaning: "उसने घोड़ों को जोर से दौड़ाया।",
    english: "He drove the horses hard.",
  },
  "sarga-7-463": {
    meaning: "रथ भगवान के रथ के पास आ पहुँचा।",
    english: "The chariot reached near the Lord's chariot.",
  },
  "sarga-7-464": {
    meaning: "क्या वह अगम और अज्ञात के मार्ग पर आ पहुँचा?",
    english: "Had it arrived at the path of the unknowable and unknown?",
  },
  "sarga-7-465": {
    meaning: "सचमुच अगम की राह अगम ही होती है।",
    english: "Indeed, the path of the unfathomable is unfathomable.",
  },
  "sarga-7-466": {
    meaning: "नियति का कार्यक्रम बड़ा अनोखा होता है।",
    english: "Destiny's program is truly strange.",
  },
  "sarga-7-467": {
    meaning: "न जाने वह न्याय को भी पहचानती है,",
    english: "Who knows whether it recognizes justice,",
  },
  "sarga-7-468": {
    meaning: "या केवल कुटिलता को जानती है?",
    english: "or knows only crookedness?",
  },
  "sarga-7-469": {
    meaning: "जिसका शुभ धर्म सदा प्रकाशित रहा,",
    english: "He whose noble dharma always shone,",
  },
  "sarga-7-470": {
    meaning: "जिसका कर्म सूर्य की तरह चमकता था,",
    english: "whose deed shone like the sun,",
  },
  "sarga-7-471": {
    meaning: "जो अबाध दान का आधार था,",
    english: "who was the foundation of unbroken charity,",
  },
  "sarga-7-472": {
    meaning: "जो धरती का अतुलनीय श्रृंगार था,",
    english: "who was the earth's incomparable adornment,",
  },
  "sarga-7-473": {
    meaning: "हाय, उसी के लिए धरती की भूख जागी।",
    english: "alas, for him the earth's hunger awoke.",
  },
  "sarga-7-474": {
    meaning: "मानवों को जन्म देने वाली धरती को क्या कहें?",
    english: "What shall we say of the earth that gives birth to humans?",
  },
  "sarga-7-475": {
    meaning: "रक्त के कीचड़ में रथ को जकड़कर,",
    english: "Gripping the chariot in the mud of blood,",
  },
  "sarga-7-476": {
    meaning: "वह चक्के को पकड़कर बैठ गई।",
    english: "she sat holding its wheel.",
  },
  "sarga-7-477": {
    meaning: "घोड़ों ने बहुत जोर लगाया।",
    english: "The horses strained with great force.",
  },
  "sarga-7-478": {
    meaning: "पर धरती ने चक्र नहीं छोड़ा।",
    english: "But the earth did not release the wheel.",
  },
  "sarga-7-479": {
    meaning: "जब सारथी के सारे उपाय व्यर्थ हो गए,",
    english: "When all the charioteer's efforts failed,",
  },
  "sarga-7-480": {
    meaning: "तो उसने लाचार होकर रथी से कहा।",
    english: "helplessly, he spoke to the warrior.",
  },
  "sarga-7-481": {
    meaning: "हे राधेय, यह बड़ी अद्भुत बात है।",
    english: "Radheya, this is a very strange thing.",
  },
  "sarga-7-482": {
    meaning: "यह किसी दुष्ट शक्ति का ही प्रहार है।",
    english: "It is surely the strike of some evil power.",
  },
  "sarga-7-483": {
    meaning: "रथ थोड़ी-सी कीचड़ में फँसा है।",
    english: "The chariot is stuck in just a little mud.",
  },
  "sarga-7-484": {
    meaning: "पर रथ-चक्र कुछ इस तरह धँस गया है।",
    english: "Yet the chariot wheel has sunk in such a way.",
  },
  "sarga-7-485": {
    meaning: "निकालने पर भी निकलता नहीं।",
    english: "Even when pulled, it does not come out.",
  },
  "sarga-7-486": {
    meaning: "हमारा जोर उस पर चल ही नहीं रहा।",
    english: "Our strength is not working on it.",
  },
  "sarga-7-487": {
    meaning: "तुम भी इसे जरा हिलाकर देखो।",
    english: "You too try shaking it a little.",
  },
  "sarga-7-488": {
    meaning: "अपनी भुजा का बल लगाकर देखो।",
    english: "Try applying the force of your arm.",
  },
  "sarga-7-489": {
    meaning: "कर्ण मन में कुछ याद कर हँसा।",
    english: "Karna smiled, remembering something within.",
  },
  "sarga-7-490": {
    meaning: "उसने कहा, हाँ, सचमुच सारे संसार में,",
    english: "He said: yes, truly in the whole world,",
  },
  "sarga-7-491": {
    meaning: "विलक्षण बात मेरे ही लिए होती है।",
    english: "strange things happen only to me.",
  },
  "sarga-7-492": {
    meaning: "नियति का आघात भी मेरे ही लिए है।",
    english: "Destiny's blow too is meant for me.",
  },
  "sarga-7-493": {
    meaning: "पर ठीक है, जब किस्मत ही फँस जाए,",
    english: "But all right, when fate itself is stuck,",
  },
  "sarga-7-494": {
    meaning: "जब धरती ही कर्ण का रथ निगलने लगे,",
    english: "when the earth itself begins to swallow Karna's chariot,",
  },
  "sarga-7-495": {
    meaning: "तो राधेय के प्रबल पौरुष के सिवा,",
    english: "then apart from Radheya's mighty valor,",
  },
  "sarga-7-496": {
    meaning: "कौन उसे बाहुबल से निकाल सकता है?",
    english: "who can pull it out by arm-strength?",
  },
  "sarga-7-497": {
    meaning: "कर्ण रथ से उछलकर नीचे उतरा।",
    english: "Karna leapt down from the chariot.",
  },
  "sarga-7-498": {
    meaning: "फँसे हुए रथ-चक्र को अपनी भुजाओं में भरकर,",
    english: "Taking the stuck wheel in his arms,",
  },
  "sarga-7-499": {
    meaning: "वह जोर लगाकर उसे ऊपर उठाने लगा।",
    english: "he began lifting it upward with force.",
  },
  "sarga-7-500": {
    meaning: "कभी सीधा करके, कभी झकझोरकर।",
    english: "sometimes straightening it, sometimes shaking it.",
  },
  "sarga-7-501": {
    meaning: "धरती डोली, समुद्र डोले।",
    english: "The earth shook, the oceans trembled.",
  },
  "sarga-7-502": {
    meaning: "उसकी भुजाओं के बल से संसार डोल उठा।",
    english: "The world shook from the strength of his arms.",
  },
  "sarga-7-503": {
    meaning: "पर जो चक्का फँसा था, वह नहीं डोला।",
    english: "But the wheel that was stuck did not move.",
  },
  "sarga-7-504": {
    meaning: "वह तो और नीचे धँसता चला जा रहा था।",
    english: "It kept sinking further downward.",
  },
  "sarga-7-505": {
    meaning: "कर्ण को विपत्ति में ऐसा फँसा देखकर,",
    english: "Seeing Karna trapped in such misfortune,",
  },
  "sarga-7-506": {
    meaning: "धनुषहीन और अस्त-व्यस्त देखकर,",
    english: "seeing him bowless and disordered,",
  },
  "sarga-7-507": {
    meaning: "भगवान ने पार्थ को जगाकर कहा,",
    english: "the Lord awakened Partha and said,",
  },
  "sarga-7-508": {
    meaning: "भोले, चुप खड़े क्या देख रहे हो?",
    english: "simple one, why do you stand silent and watch?",
  },
  "sarga-7-509": {
    meaning: "धनुष तानो, यही अवसर है।",
    english: "Draw the bow; this is the moment.",
  },
  "sarga-7-510": {
    meaning: "ऐसी घड़ी फिर नहीं मिलेगी।",
    english: "Such an hour will not come again.",
  },
  "sarga-7-511": {
    meaning: "कोई बाण उसके गले के पार कर दो।",
    english: "Send an arrow through his throat.",
  },
  "sarga-7-512": {
    meaning: "अभी शत्रु का संहार कर दो।",
    english: "Destroy the enemy right now.",
  },
  "sarga-7-513": {
    meaning: "विश्वगुरु की यह आज्ञा सुनकर,",
    english: "Hearing this instruction from the teacher of the world,",
  },
  "sarga-7-514": {
    meaning: "विजय के लिए ऐसी आतुर इच्छा सुनकर,",
    english: "hearing this desire eager for victory,",
  },
  "sarga-7-515": {
    meaning: "पार्थ का मन थोड़ा सहम उठा।",
    english: "Partha's mind trembled a little.",
  },
  "sarga-7-516": {
    meaning: "पर वह विनय से ही असहाय-सा बोला।",
    english: "Yet humbly, almost helplessly, he spoke.",
  },
  "sarga-7-517": {
    meaning: "पर क्या यह कर्म मनुष्य के योग्य होगा?",
    english: "But would this deed be worthy of a human?",
  },
  "sarga-7-518": {
    meaning: "क्या इससे धर्म मलिन नहीं होगा?",
    english: "Will dharma not be stained by it?",
  },
  "sarga-7-519": {
    meaning: "केशव हँसे, व्यर्थ हठ कर रहे हो।",
    english: "Keshava laughed: you are stubborn in vain.",
  },
  "sarga-7-520": {
    meaning: "अभी तुम धर्म को क्या जानते हो?",
    english: "What do you know of dharma now?",
  },
  "sarga-7-521": {
    meaning: "जो मैं कहूँ, उसका पालन करो; यही धर्म है।",
    english: "Do what I say; that is dharma.",
  },
  "sarga-7-522": {
    meaning: "शत्रु का वध करो; यही सत्कर्म है।",
    english: "Kill the enemy; that is the righteous act.",
  },
  "sarga-7-523": {
    meaning: "यदि कर्म छोड़कर चिंतन में फँसोगे,",
    english: "If you leave action and get trapped in thought,",
  },
  "sarga-7-524": {
    meaning: "तो काल उलटकर तुम्हें ही निगल जाएगा।",
    english: "time will turn back and swallow you.",
  },
  "sarga-7-525": {
    meaning: "पार्थ भला काल का आहार क्यों बनता?",
    english: "Why would Partha become food for death?",
  },
  "sarga-7-526": {
    meaning: "वह व्यर्थ चिंता का भार क्यों ढोता?",
    english: "Why would he carry the burden of useless worry?",
  },
  "sarga-7-527": {
    meaning: "सभी दायित्व हरि पर डालकर,",
    english: "Putting all responsibility upon Hari,",
  },
  "sarga-7-528": {
    meaning: "जो आज्ञा मिली, उसका पालन करके,",
    english: "and obeying the command he received,",
  },
  "sarga-7-529": {
    meaning: "वह राधेय पर बाण चलाने लगा।",
    english: "he began shooting arrows at Radheya.",
  },
  "sarga-7-530": {
    meaning: "विपत्ति में पड़े शत्रु का संहार करने लगा।",
    english: "He began destroying the enemy caught in distress.",
  },
  "sarga-7-531": {
    meaning: "उसके शरीर और मुख को बाणों से बेधने लगा।",
    english: "He pierced his body and face with arrows.",
  },
  "sarga-7-532": {
    meaning: "निःशस्त्र व्यक्ति पर वीरता दिखाने लगा।",
    english: "He displayed valor against an unarmed man.",
  },
  "sarga-7-533": {
    meaning: "अर्जुन बाण-संधान में लगा था।",
    english: "Arjuna was absorbed in aiming arrows.",
  },
  "sarga-7-534": {
    meaning: "राधेय बिना सहारे और बिना रथ के खड़ा था।",
    english: "Radheya stood unsupported and chariotless.",
  },
  "sarga-7-535": {
    meaning: "सभी लोग मौन खड़े देख रहे थे।",
    english: "Everyone stood speechless and watched.",
  },
  "sarga-7-536": {
    meaning: "वे युद्ध का यह अनोखा धर्म देख रहे थे।",
    english: "They watched this strange dharma of war.",
  },
  "sarga-7-537": {
    meaning: "जब कर्ण ने देखा कि पार्थ सुधर नहीं रहा,",
    english: "When Karna saw that Partha was not changing,",
  },
  "sarga-7-538": {
    meaning: "और हृदय में धर्म का थोड़ा भी ध्यान नहीं रख रहा,",
    english: "and was not holding even a little thought of dharma in his heart,",
  },
  "sarga-7-539": {
    meaning: "समय के योग्य धैर्य सँजोकर,",
    english: "gathering patience suitable to the moment,",
  },
  "sarga-7-540": {
    meaning: "राधेय ने गंभीर होकर कहा।",
    english: "Radheya spoke gravely.",
  },
  "sarga-7-541": {
    meaning: "मनुष्य-योग्य धर्म से कुछ तो काम लो।",
    english: "Make at least some use of human-worthy dharma.",
  },
  "sarga-7-542": {
    meaning: "बहुत खेल चुके, अब थोड़ा विश्राम लो।",
    english: "You have played enough; rest a little.",
  },
  "sarga-7-543": {
    meaning: "जब तक मैं फँसा रथचक्र निकाल लूँ,",
    english: "Until I pull out the stuck chariot wheel,",
  },
  "sarga-7-544": {
    meaning: "धनुष धारण कर अपने अस्त्र सँभाल लूँ।",
    english: "take up my bow and ready my weapons.",
  },
  "sarga-7-545": {
    meaning: "तब तक रुको; फिर बाण चलाना।",
    english: "Wait until then; then shoot your arrows.",
  },
  "sarga-7-546": {
    meaning: "यदि कर सको तो फिर मेरे प्राण हर लेना।",
    english: "If you can, then take my life.",
  },
  "sarga-7-547": {
    meaning: "अर्जुन, मैं शरण नहीं माँगता।",
    english: "Arjuna, I do not ask for refuge.",
  },
  "sarga-7-548": {
    meaning: "मैं धर्म-समर्थित युद्ध माँगता हूँ।",
    english: "I ask for a battle upheld by dharma.",
  },
  "sarga-7-549": {
    meaning: "अपना नाम कलंकित मत करो।",
    english: "Do not stain your name.",
  },
  "sarga-7-550": {
    meaning: "हृदय में इसका भी ध्यान रखो।",
    english: "Keep this too in your heart.",
  },
  "sarga-7-551": {
    meaning: "शरीर की विजय केवल घड़ी भर की चमक है।",
    english: "Victory of the body is only a momentary gleam.",
  },
  "sarga-7-552": {
    meaning: "उसकी चमक इसी संसार तक रहती है।",
    english: "Its shine lasts only in this world.",
  },
  "sarga-7-553": {
    meaning: "संसार की जीत संसार में ही मिट जाती है।",
    english: "The world's victory fades within the world.",
  },
  "sarga-7-554": {
    meaning: "उसे पतन में गिरकर क्यों खोजा जाए?",
    english: "Why seek it by falling into degradation?",
  },
  "sarga-7-555": {
    meaning: "अंत में केवल उज्ज्वल धर्म ही शरण होगा।",
    english: "In the end, only radiant dharma will be refuge.",
  },
  "sarga-7-556": {
    meaning: "अंत में सत्कर्म ही सहारा होगा।",
    english: "In the end, righteous action alone will be support.",
  },
  "sarga-7-557": {
    meaning: "शत्रु को इस तरह न्याय माँगते देखकर,",
    english: "Seeing the enemy ask for justice in this way,",
  },
  "sarga-7-558": {
    meaning: "पार्थ ने खिन्न होकर हरि की ओर देखा।",
    english: "Partha looked at Hari in distress.",
  },
  "sarga-7-559": {
    meaning: "पर भगवान तनिक भी नहीं डोले।",
    english: "But the Lord did not waver at all.",
  },
  "sarga-7-560": {
    meaning: "क्रुद्ध होकर उन्होंने वज्र जैसी यह बात कही।",
    english: "Angrily, he spoke these thunderbolt-like words.",
  },
  "sarga-7-561": {
    meaning: "प्रलाप करने वाले, ओ उज्ज्वल धर्म की बातें करने वाले!",
    english: "O babbler, O speaker of radiant dharma!",
  },
  "sarga-7-562": {
    meaning: "बड़ी निष्ठा और बड़े सत्कर्म की बातें करने वाले!",
    english: "O man of great devotion and noble deeds!",
  },
  "sarga-7-563": {
    meaning: "जिस दिन अभिमन्यु अन्याय से मारा गया,",
    english: "The day Abhimanyu was killed unjustly,",
  },
  "sarga-7-564": {
    meaning: "उस दिन धर्म कहाँ सो रहा था?",
    english: "where was dharma sleeping that day?",
  },
  "sarga-7-565": {
    meaning: "जिस दिन भीम को विष दिया गया था,",
    english: "The day poison was given to Bhima,",
  },
  "sarga-7-566": {
    meaning: "उस दिन यह धर्म कहाँ पड़ा था?",
    english: "where was this dharma lying then?",
  },
  "sarga-7-567": {
    meaning: "जब लाक्षागृह में आग लगी थी,",
    english: "When the lac palace was set on fire,",
  },
  "sarga-7-568": {
    meaning: "तब क्या धर्म ही संसार में हँस रहा था?",
    english: "was dharma itself laughing in the world then?",
  },
  "sarga-7-569": {
    meaning: "सभा में द्रौपदी को खींचकर लाया गया,",
    english: "Draupadi was dragged into the assembly,",
  },
  "sarga-7-570": {
    meaning: "और सुयोधन ने उसे अपनी दासी बताया।",
    english: "and Suyodhana called her his slave.",
  },
  "sarga-7-571": {
    meaning: "तब स्त्री-जाति को जो आदर दिया गया,",
    english: "The honor then given to womanhood,",
  },
  "sarga-7-572": {
    meaning: "तुम सबने जो बहुत सत्कार किया,",
    english: "the great respect all of you showed,",
  },
  "sarga-7-573": {
    meaning: "वह और कुछ नहीं, सत्कर्म ही था?",
    english: "was that nothing else but righteous action?",
  },
  "sarga-7-574": {
    meaning: "वह उज्ज्वल, शीलभूषित धर्म ही था?",
    english: "was that radiant, virtue-adorned dharma?",
  },
  "sarga-7-575": {
    meaning: "जिस दिन धन-धाम जुए में हारकर,",
    english: "The day, after losing wealth and home in dice,",
  },
  "sarga-7-576": {
    meaning: "पांडव निष्काम यति जैसे हो गए,",
    english: "the Pandavas became like desireless ascetics,",
  },
  "sarga-7-577": {
    meaning: "और वनवास को चले, तब वही धर्म था?",
    english: "and went to exile, was that dharma?",
  },
  "sarga-7-578": {
    meaning: "क्या वह शकुनियों का अपकर्म नहीं था?",
    english: "Was that not the wickedness of Shakunis?",
  },
  "sarga-7-579": {
    meaning: "पर जब अवधि पूरी कर वे लौटे,",
    english: "But when they returned after completing the term,",
  },
  "sarga-7-580": {
    meaning: "तो असल में धर्म से वे ही गिर गए?",
    english: "were they the ones who had truly fallen from dharma?",
  },
  "sarga-7-581": {
    meaning: "वे बड़े पापी हो गए क्योंकि उन्होंने ताज माँगा।",
    english: "They became great sinners because they asked for the crown.",
  },
  "sarga-7-582": {
    meaning: "उन्होंने अन्याय किया क्योंकि अपना राज्य माँगा।",
    english: "They committed injustice because they asked for their own kingdom.",
  },
  "sarga-7-583": {
    meaning: "वे धर्म के लिए हार क्यों नहीं मानते?",
    english: "Why do they not accept defeat for dharma's sake?",
  },
  "sarga-7-584": {
    meaning: "वे अधर्मी हैं, शत्रु को क्यों मारते हैं?",
    english: "They are irreligious; why do they kill the enemy?",
  },
  "sarga-7-585": {
    meaning: "क्या केवल हम ही धर्म के लिए जलते रहेंगे?",
    english: "Will only we keep burning for dharma?",
  },
  "sarga-7-586": {
    meaning: "क्या हम सब कुछ मौन होकर सहते रहेंगे?",
    english: "Will we silently endure everything?",
  },
  "sarga-7-587": {
    meaning: "क्या अन्य लोग भी धर्म को बल देंगे?",
    english: "Will others too give strength to dharma?",
  },
  "sarga-7-588": {
    meaning: "क्या अन्य लोग भी क्रूरता और छल छोड़ेंगे?",
    english: "Will others too abandon cruelty and deceit?",
  },
  "sarga-7-589": {
    meaning: "क्या इन कौरवों ने यातना नहीं दी?",
    english: "Did these Kauravas not give torment?",
  },
  "sarga-7-590": {
    meaning: "कौरवों ने कौन-कौन-सा निर्दय कर्म नहीं किया?",
    english: "What cruelties did the Kauravas not commit?",
  },
  "sarga-7-591": {
    meaning: "पर तेरे लिए वह सब धर्म ही था।",
    english: "But for you all that was dharma.",
  },
  "sarga-7-592": {
    meaning: "अपने मित्र की बेटी का अपमान भी सत्कर्म ही था।",
    english: "The humiliation of your friend's daughter too was righteous action.",
  },
  "sarga-7-593": {
    meaning: "जब किए हुए कर्म का फल सामने आ गया,",
    english: "Now that the fruit of deeds has appeared,",
  },
  "sarga-7-594": {
    meaning: "और अभिशाप से तुम्हारा सहारा निगल गया,",
    english: "and your support has been swallowed by the curse,",
  },
  "sarga-7-595": {
    meaning: "तू युद्ध में धर्म खोजने चला है।",
    english: "you have set out to search for dharma in battle.",
  },
  "sarga-7-596": {
    meaning: "और दूसरों को झूठा पापी बताने चला है।",
    english: "and to call others falsely sinful.",
  },
  "sarga-7-597": {
    meaning: "पार्थ, अपना मन तनिक भी शिथिल मत करो।",
    english: "Partha, do not weaken your mind even slightly.",
  },
  "sarga-7-598": {
    meaning: "डरपोक बनकर धर्म-अधर्म में मत पड़ो।",
    english: "Do not, like a coward, get entangled in dharma and adharma.",
  },
  "sarga-7-599": {
    meaning: "छाती कठोर करो और इस पर बाण मारो।",
    english: "Harden your chest and shoot him.",
  },
  "sarga-7-600": {
    meaning: "तुरंत बाण चढ़ाकर इसका संहार करो।",
    english: "Set the arrow at once and destroy him.",
  },
  "sarga-7-601": {
    meaning: "राधेय हँसा, अब देर भी कैसी?",
    english: "Radheya laughed: what delay is there now?",
  },
  "sarga-7-602": {
    meaning: "सुंदर कर्म में अवसर भी कैसा?",
    english: "What need of occasion in such a noble deed?",
  },
  "sarga-7-603": {
    meaning: "थोड़ी और कृपा क्यों नहीं दिखाते?",
    english: "Why not show a little more grace?",
  },
  "sarga-7-604": {
    meaning: "सुदर्शन ही क्यों नहीं उठा लेते?",
    english: "Why not take up the Sudarshan itself?",
  },
  "sarga-7-605": {
    meaning: "बहुत तरह से ललकारकर वे स्वयं थक गए।",
    english: "After challenging in many ways, he himself grew tired.",
  },
  "sarga-7-606": {
    meaning: "पार्थ भी बाण मारते-मारते थक गया।",
    english: "Partha too grew tired from shooting arrows.",
  },
  "sarga-7-607": {
    meaning: "पर यह वक्ष फटता ही नहीं।",
    english: "Yet this chest does not split.",
  },
  "sarga-7-608": {
    meaning: "यह चमकता सिर कटता ही नहीं।",
    english: "This radiant head does not fall.",
  },
  "sarga-7-609": {
    meaning: "बाणों से मृत्यु झरकर छा रही है।",
    english: "Death is falling from arrows and spreading.",
  },
  "sarga-7-610": {
    meaning: "चारों ओर घेरकर मंडरा रही है।",
    english: "It circles all around, surrounding him.",
  },
  "sarga-7-611": {
    meaning: "पर पास आकर भी वह निगलती नहीं।",
    english: "Yet even coming near, it does not swallow him.",
  },
  "sarga-7-612": {
    meaning: "शायद भय से या लज्जा से रुक गई है।",
    english: "Perhaps it has stopped from fear or shame.",
  },
  "sarga-7-613": {
    meaning: "जरा पूछिए, वह क्यों डर गई है?",
    english: "Ask it a little, why has it become afraid?",
  },
  "sarga-7-614": {
    meaning: "मुझमें कौन-सी दुर्जेय ज्वाला भरी है?",
    english: "What unconquerable flame is filled within me?",
  },
  "sarga-7-615": {
    meaning: "किसकी चमक से वह मलिन हो रही है?",
    english: "By whose radiance is it being dimmed?",
  },
  "sarga-7-616": {
    meaning: "किस तपस्या की चमक से वह लजा रही है?",
    english: "Before the brilliance of what austerity does it feel ashamed?",
  },
  "sarga-7-617": {
    meaning: "जरा बढ़कर मेरी पीठ पर अपना हाथ रखिए।",
    english: "Come a little closer and place your hand on my back.",
  },
  "sarga-7-618": {
    meaning: "सहमती मृत्यु को निर्भय कर दीजिए।",
    english: "Make this trembling death fearless.",
  },
  "sarga-7-619": {
    meaning: "वह अपने-आप मुझे नहीं खाएगी।",
    english: "It will not devour me by itself.",
  },
  "sarga-7-620": {
    meaning: "भय से सिकुड़कर वही मर जाएगी।",
    english: "Shrinking in fear, it will die itself.",
  },
  "sarga-7-621": {
    meaning: "आपने जो कहा, वह सब सही है।",
    english: "Whatever you said is all true.",
  },
  "sarga-7-622": {
    meaning: "पर मुझे अपनी चिंता नहीं है।",
    english: "But I am not worried about myself.",
  },
  "sarga-7-623": {
    meaning: "मैं सुयोधन के लिए ही पछता रहा हूँ।",
    english: "I grieve only for Suyodhana.",
  },
  "sarga-7-624": {
    meaning: "उसे विजयी बनाए बिना जा रहा हूँ।",
    english: "I am leaving without making him victorious.",
  },
  "sarga-7-625": {
    meaning: "यह पूछना व्यर्थ है कि किसने क्या किया।",
    english: "It is useless to ask who did what.",
  },
  "sarga-7-626": {
    meaning: "किसने जगत के धर्म को सहारा दिया।",
    english: "who gave support to the world's dharma.",
  },
  "sarga-7-627": {
    meaning: "जहाँ कल तक सुयोधन खड़ा था,",
    english: "Where Suyodhana stood until yesterday,",
  },
  "sarga-7-628": {
    meaning: "क्या आज पांडव वहीं नहीं खड़े हैं?",
    english: "do the Pandavas not stand there today?",
  },
  "sarga-7-629": {
    meaning: "उन्होंने कौन-सा अधर्म छोड़ा?",
    english: "What adharma have they left undone?",
  },
  "sarga-7-630": {
    meaning: "किए जाने योग्य कौन-सा कुत्सित कर्म छोड़ा?",
    english: "What vile deed, once possible, have they avoided?",
  },
  "sarga-7-631": {
    meaning: "क्या गिनाऊँ? आप स्वयं सब जानते हैं।",
    english: "Why list them? You know everything yourself.",
  },
  "sarga-7-632": {
    meaning: "हम आपको जगद्गुरु मानते हैं।",
    english: "We regard you as the teacher of the world.",
  },
  "sarga-7-633": {
    meaning: "शिखंडी को ढाल बनाकर अर्जुन,",
    english: "Making Shikhandi a shield, Arjuna,",
  },
  "sarga-7-634": {
    meaning: "गांगेय भीष्म का काल बना।",
    english: "became the death of Bhishma, son of Ganga.",
  },
  "sarga-7-635": {
    meaning: "क्या वह और कुछ नहीं, सत्कर्म ही था?",
    english: "Was that nothing else but righteous action?",
  },
  "sarga-7-636": {
    meaning: "हे हरि, कह दीजिए, वह धर्म ही था।",
    english: "Hari, say it was dharma itself.",
  },
  "sarga-7-637": {
    meaning: "जिस तरह शक्तिशाली सात्यकि की रक्षा हुई,",
    english: "The way mighty Satyaki was protected,",
  },
  "sarga-7-638": {
    meaning: "और भूरिश्रवा के प्राण गए,",
    english: "and Bhurishrava lost his life,",
  },
  "sarga-7-639": {
    meaning: "क्या वह कर्म मनुष्यता से रहित नहीं था?",
    english: "was that deed not devoid of humanity?",
  },
  "sarga-7-640": {
    meaning: "क्या वह पांडवों का धर्म-हित पतन नहीं था?",
    english: "Was that not the Pandavas' fall in the name of dharma?",
  },
  "sarga-7-641": {
    meaning: "अभिमन्यु की कथा तो सब कहते हैं।",
    english: "Everyone speaks of Abhimanyu's story.",
  },
  "sarga-7-642": {
    meaning: "पर यह रहस्य क्यों नहीं खोलते?",
    english: "But why do they not reveal this secret?",
  },
  "sarga-7-643": {
    meaning: "कुटिल षड्यंत्र से युद्ध से हटाकर,",
    english: "Through crooked conspiracy, removing him from battle,",
  },
  "sarga-7-644": {
    meaning: "महायोद्धा द्रोण को छल से मारकर,",
    english: "and killing the great warrior Drona by deceit,",
  },
  "sarga-7-645": {
    meaning: "पांडव पतन में बहुत दूर जा चुके हैं।",
    english: "the Pandavas have gone far into downfall.",
  },
  "sarga-7-646": {
    meaning: "वे बलि का चार गुना मूल्य पा चुके हैं।",
    english: "They have already received fourfold payment for the sacrifice.",
  },
  "sarga-7-647": {
    meaning: "अब भी कौन-सा पुण्य तौलने को बचा है?",
    english: "What merit still remains to be weighed?",
  },
  "sarga-7-648": {
    meaning: "कौन-सा सिर उठाकर गर्जने को बचा है?",
    english: "What head remains to be raised and roar?",
  },
  "sarga-7-649": {
    meaning: "यह पूछना व्यर्थ है कि दोष किसका था।",
    english: "It is useless to ask whose fault it was.",
  },
  "sarga-7-650": {
    meaning: "पहले विष का भंडार किसने खोला।",
    english: "who first opened the store of poison.",
  },
  "sarga-7-651": {
    meaning: "अब तो सबका विष खुल रहा है।",
    english: "Now everyone's poison is being exposed.",
  },
  "sarga-7-652": {
    meaning: "विष ही विष से धुल रहा है।",
    english: "Poison is being washed by poison.",
  },
  "sarga-7-653": {
    meaning: "जब हम विष की कीच में आ ही गए,",
    english: "When we have come into the mud of poison,",
  },
  "sarga-7-654": {
    meaning: "जब कलुष बनकर कलुष पर छा गए,",
    english: "when impurity has covered impurity,",
  },
  "sarga-7-655": {
    meaning: "तो फिर दूसरों में दोष दिखाना क्या?",
    english: "then why show faults in others?",
  },
  "sarga-7-656": {
    meaning: "मन में अहंकार से व्यर्थ फूलना क्या?",
    english: "why swell uselessly with ego in the heart?",
  },
  "sarga-7-657": {
    meaning: "सुयोधन को उसके कर्मों का फल मिले,",
    english: "Let Suyodhana receive the fruit of his deeds,",
  },
  "sarga-7-658": {
    meaning: "द्रोह की आग पीने का कुटिल परिणाम मिले।",
    english: "the crooked result of drinking rebellion's fire.",
  },
  "sarga-7-659": {
    meaning: "पर पांडव अब जिस राह पर चल रहे हैं,",
    english: "But the path on which the Pandavas now walk,",
  },
  "sarga-7-660": {
    meaning: "जिस भयंकर वासना में जल रहे हैं,",
    english: "the fierce desire in which they burn,",
  },
  "sarga-7-661": {
    meaning: "वह अभी उनसे बहुत पाप करवाएगी।",
    english: "will still make them commit many sins.",
  },
  "sarga-7-662": {
    meaning: "न जाने उन्हें कहाँ ले जाएगी।",
    english: "Who knows where it will take them.",
  },
  "sarga-7-663": {
    meaning: "न जाने वे इसी विष से जलेंगे,",
    english: "Who knows whether they will burn in this poison,",
  },
  "sarga-7-664": {
    meaning: "या कहीं बर्फ में जाकर गलेंगे।",
    english: "or go somewhere and melt in ice.",
  },
  "sarga-7-665": {
    meaning: "सुयोधन पवित्र था या अपवित्र,",
    english: "Whether Suyodhana was pure or impure,",
  },
  "sarga-7-666": {
    meaning: "वह प्रतापी वीर मेरा मित्र ही था।",
    english: "he was still my mighty heroic friend.",
  },
  "sarga-7-667": {
    meaning: "मैंने वही किया जो सत्कर्म था।",
    english: "I did what was righteous action.",
  },
  "sarga-7-668": {
    meaning: "जो मित्रता का धर्म था, उसे निभाया।",
    english: "I fulfilled the dharma of friendship.",
  },
  "sarga-7-669": {
    meaning: "मेरे भीतर का आकाश तनिक भी मलिन नहीं है।",
    english: "The sky within me is not stained at all.",
  },
  "sarga-7-670": {
    meaning: "मेरा मन सोने जैसा स्वच्छ है।",
    english: "My mind is pure like gold.",
  },
  "sarga-7-671": {
    meaning: "हृदय की चेतना अभी भी उजली है।",
    english: "The consciousness of my heart is still bright.",
  },
  "sarga-7-672": {
    meaning: "यदि कुछ है, तो बस यही वेदना है।",
    english: "If anything remains, it is only this pain.",
  },
  "sarga-7-673": {
    meaning: "मैंने स्त्रियों को रक्षा क्यों नहीं दी?",
    english: "Why did I not give protection to women?",
  },
  "sarga-7-674": {
    meaning: "उस दिन पाप का समर्थन क्यों किया?",
    english: "Why did I support sin that day?",
  },
  "sarga-7-675": {
    meaning: "मुझे कोई उचित प्रायश्चित नहीं मिल रहा।",
    english: "I find no worthy atonement.",
  },
  "sarga-7-676": {
    meaning: "मैं यह जलन मन में लिए जा रहा हूँ।",
    english: "I leave carrying this burning in my heart.",
  },
  "sarga-7-677": {
    meaning: "केशव, अपने जनों को विजय दिलाइए।",
    english: "Keshava, bring victory to your own people.",
  },
  "sarga-7-678": {
    meaning: "पार्थ, सचमुच अपना मन शिथिल मत करो।",
    english: "Partha, truly do not weaken your mind.",
  },
  "sarga-7-679": {
    meaning: "निर्भय होकर शत्रु के अंगों को बेधते जाओ।",
    english: "Fearlessly keep piercing the enemy's limbs.",
  },
  "sarga-7-680": {
    meaning: "जब हरि साथ हैं तो द्विधा कैसी?",
    english: "When Hari is with you, what hesitation remains?",
  },
  "sarga-7-681": {
    meaning: "धरती, मैं यह रथ तुझे सौंपता हूँ।",
    english: "Earth, I hand this chariot over to you.",
  },
  "sarga-7-682": {
    meaning: "मैं आकाश में दूसरा मार्ग खोजता हूँ।",
    english: "I seek another path in the sky.",
  },
  "sarga-7-683": {
    meaning: "तू चाहे इस लकड़ी को निगल ले।",
    english: "You may swallow this wood.",
  },
  "sarga-7-684": {
    meaning: "पर तू तेजस्वी पुरुष को नहीं पा सकती।",
    english: "But you cannot seize the radiant person.",
  },
  "sarga-7-685": {
    meaning: "महानिर्वाण का क्षण आ रहा है; नया प्रकाश-रथ आ रहा है।",
    english: "The moment of great liberation is coming; a new chariot of light is arriving.",
  },
  "sarga-7-686": {
    meaning: "जिसके यंत्र तपस्या से बने हैं, जिसके तंत्र जप-यज्ञ से कसे हैं।",
    english: "whose mechanisms are made of austerity, whose cords are tightened by chant and sacrifice.",
  },
  "sarga-7-687": {
    meaning: "जिसमें कीर्तियों के घोड़े जुते हैं और किरणों की पंक्ति चमकती है।",
    english: "in which steeds of fame are yoked and rows of rays shine.",
  },
  "sarga-7-688": {
    meaning: "जिसमें मेरा पुण्य झूलता है, जो प्रकाश के कमल जैसा खिलता है।",
    english: "in which my merit swings, blooming like a lotus of radiance.",
  },
  "sarga-7-689": {
    meaning: "जिसे मैंने अपने पुण्य-बल, दया, दान और अचल निष्ठा से बनाया है।",
    english: "which I made with my merit, compassion, charity, and unwavering devotion.",
  },
  "sarga-7-690": {
    meaning: "जो मेरे प्राण जैसा पवित्र है, जो सद्धर्म से उत्पन्न हुआ है।",
    english: "which is pure like my life and born of true dharma.",
  },
  "sarga-7-691": {
    meaning: "जिसे तत्वों की तनिक भी परवाह नहीं, जिसके लिए हर राह सरल है।",
    english: "which cares nothing for the elements and finds every path easy.",
  },
  "sarga-7-692": {
    meaning: "जो आकाश में निडर घूमता है और प्रकाश-तरंगों पर झूमता है।",
    english: "which moves fearlessly in the sky and sways upon waves of light.",
  },
  "sarga-7-693": {
    meaning: "अहा! प्रकाश-रथ आ पहुँचा।",
    english: "Ah, the chariot of light has arrived.",
  },
  "sarga-7-694": {
    meaning: "मेरे पुण्य का क्षण आ पहुँचा।",
    english: "The moment of my merit has arrived.",
  },
  "sarga-7-695": {
    meaning: "सूर्य की प्रभाओं, विजय-गीत गाओ।",
    english: "O radiances of the sun, sing songs of victory.",
  },
  "sarga-7-696": {
    meaning: "किरणों के तार मिलाओ।",
    english: "Join the strings of rays.",
  },
  "sarga-7-697": {
    meaning: "प्रभामंडल, झंकार भरो और बोलो।",
    english: "Halo of light, fill with resonance and speak.",
  },
  "sarga-7-698": {
    meaning: "जगत की ज्योतियों, अपने द्वार खोलो।",
    english: "Lights of the world, open your doors.",
  },
  "sarga-7-699": {
    meaning: "मैं तपस्या से सुशोभित तेज लेकर आ रहा हूँ।",
    english: "I come bearing radiance adorned by austerity.",
  },
  "sarga-7-700": {
    meaning: "मैं रश्मि-रथ पर चढ़कर आ रहा हूँ।",
    english: "I am coming mounted on the chariot of rays.",
  },
  "sarga-7-701": {
    meaning: "जब कर्ण ने अपनी प्रकाशित आँखें आकाश में बाँध दीं,",
    english: "When Karna fixed his luminous eyes upon the sky,",
  },
  "sarga-7-702": {
    meaning: "और अपना मन सूर्य में स्थित कर लिया,",
    english: "and placed his mind in the sun,",
  },
  "sarga-7-703": {
    meaning: "तभी एक बाण सँभलकर उसकी गर्दन में लगा।",
    english: "then an arrow, carefully aimed, struck his neck.",
  },
  "sarga-7-704": {
    meaning: "और उसके शरीर से प्रभा निकलकर ऊपर उड़ गई।",
    english: "and radiance flew upward from his body.",
  },
  "sarga-7-705": {
    meaning: "उसका कटा हुआ मस्तक धरती पर गिरा।",
    english: "His severed head fell upon the earth.",
  },
  "sarga-7-706": {
    meaning: "तपस्या-धाम शरीर से अलग हो गया।",
    english: "The abode of austerity was separated from the body.",
  },
  "sarga-7-707": {
    meaning: "जो प्रकाश शरीर से छिटककर उड़ा,",
    english: "The light that sprang from the body,",
  },
  "sarga-7-708": {
    meaning: "वह सूर्य से मिलकर एकात्म हो गया।",
    english: "became one with the sun.",
  },
  "sarga-7-709": {
    meaning: "रण में कुंती-पुत्र की जयकार उठी।",
    english: "Victory cries for Kunti's son rose in battle.",
  },
  "sarga-7-710": {
    meaning: "रण में घोर हाहाकार मच गया।",
    english: "A terrible outcry spread through the battlefield.",
  },
  "sarga-7-711": {
    meaning: "सुयोधन बच्चों की तरह रो रहा था।",
    english: "Suyodhana was crying like a child.",
  },
  "sarga-7-712": {
    meaning: "भीम खुशी से पागल हो रहा था।",
    english: "Bhima was going mad with joy.",
  },
  "sarga-7-713": {
    meaning: "आकाश से सारे देव-यान लौट गए।",
    english: "All celestial vehicles turned back from the sky.",
  },
  "sarga-7-714": {
    meaning: "देवता झुके मुख लेकर आकाश से चले गए।",
    english: "The gods departed from the heavens with bowed faces.",
  },
  "sarga-7-715": {
    meaning: "सूर्य दुखी बादलों में छिप गया।",
    english: "The sun hid in sorrowful clouds.",
  },
  "sarga-7-716": {
    meaning: "पूरे संसार में उदासी छा गई।",
    english: "Sadness spread across the whole world.",
  },
  "sarga-7-717": {
    meaning: "हवा धीमी और व्यथित-सी चल रही थी।",
    english: "The wind moved slowly, as if pained.",
  },
  "sarga-7-718": {
    meaning: "पक्षी भी हवा में नहीं बोल रहा था।",
    english: "Not even a bird spoke in the air.",
  },
  "sarga-7-719": {
    meaning: "प्रकृति मौन थी; यह क्या हो गया?",
    english: "Nature was silent; what had happened?",
  },
  "sarga-7-720": {
    meaning: "क्या हमारी गाँठ से कुछ खो गया?",
    english: "Had something been lost from our own knot of treasure?",
  },
  "sarga-7-721": {
    meaning: "पर इस मौन लय को तोड़कर,",
    english: "But breaking this silent rhythm,",
  },
  "sarga-7-722": {
    meaning: "और भय को कुछ और गहरा करते हुए,",
    english: "and making the fear still deeper,",
  },
  "sarga-7-723": {
    meaning: "विजयी उन्मत्त होकर हुंकार रहा था।",
    english: "the victor roared in intoxication.",
  },
  "sarga-7-724": {
    meaning: "वह उदासी के हृदय को फाड़ रहा था।",
    english: "He was tearing open the heart of sorrow.",
  },
  "sarga-7-725": {
    meaning: "युधिष्ठिर भय से मुक्ति पाकर,",
    english: "Yudhishthira, having gained release from fear,",
  },
  "sarga-7-726": {
    meaning: "इस अत्यंत दुर्लभ विजय से प्रसन्न होकर,",
    english: "delighted by this extremely rare victory,",
  },
  "sarga-7-727": {
    meaning: "आँखों में आनंद के मोती सजाए,",
    english: "with pearls of joy in his eyes,",
  },
  "sarga-7-728": {
    meaning: "बहुत व्याकुल होकर हरि के पास आए।",
    english: "came anxiously to Hari.",
  },
  "sarga-7-729": {
    meaning: "कहा, केशव, मुझे बड़ा भय था।",
    english: "He said: Keshava, I was greatly afraid.",
  },
  "sarga-7-730": {
    meaning: "मुझे कभी विश्वास नहीं था,",
    english: "I never had faith,",
  },
  "sarga-7-731": {
    meaning: "कि अर्जुन यह संकट भी हर सकेगा।",
    english: "that Arjuna could remove even this danger.",
  },
  "sarga-7-732": {
    meaning: "कि कभी कर्ण युद्ध में मर सकेगा।",
    english: "that Karna could ever die in battle.",
  },
  "sarga-7-733": {
    meaning: "इसी के भय में मेरा हृदय डूबा रहता था।",
    english: "My heart remained soaked in fear of him.",
  },
  "sarga-7-734": {
    meaning: "वनवास में भी हमें भय लगा रहता था।",
    english: "Even in exile, we lived in fear.",
  },
  "sarga-7-735": {
    meaning: "क्या मैं कभी निश्चिंत हो सका था?",
    english: "Was I ever able to be carefree?",
  },
  "sarga-7-736": {
    meaning: "तेरह वर्ष मैं सुख से सो नहीं सका।",
    english: "For thirteen years I could not sleep peacefully.",
  },
  "sarga-7-737": {
    meaning: "वह बलवान योद्धा बड़ा विकराल था।",
    english: "That mighty warrior was terribly fearsome.",
  },
  "sarga-7-738": {
    meaning: "हे हरि, वह कितना भयानक काल था!",
    english: "Hari, what a dreadful death-force he was!",
  },
  "sarga-7-739": {
    meaning: "उसके बाण नहीं, मानो विष में डूबे मूसल थे।",
    english: "His arrows were not arrows, but maces dipped in poison.",
  },
  "sarga-7-740": {
    meaning: "उसके प्राण भी मानो अचूक पत्थर जैसे थे।",
    english: "His life itself seemed like an unfailing stone.",
  },
  "sarga-7-741": {
    meaning: "यह निडर समय हमें कैसे मिल गया?",
    english: "How did this fearless moment come to us?",
  },
  "sarga-7-742": {
    meaning: "क्या यह विजय केवल सौभाग्य से हुई?",
    english: "Was this victory won only by fortune?",
  },
  "sarga-7-743": {
    meaning: "यदि आज वह काल न सोया होता,",
    english: "If that death-force had not slept today,",
  },
  "sarga-7-744": {
    meaning: "तो न जाने युद्ध का हाल क्या होता।",
    english: "who knows what would have happened in the war.",
  },
  "sarga-7-745": {
    meaning: "भगवान उदासी से भरे हुए बोले,",
    english: "The Lord, filled with sadness, said,",
  },
  "sarga-7-746": {
    meaning: "आप केवल जीत को लेकर मत भूलिए।",
    english: "Do not be carried away by victory alone.",
  },
  "sarga-7-747": {
    meaning: "पुरुषार्थ केवल जीत में नहीं है।",
    english: "Human excellence is not only in victory.",
  },
  "sarga-7-748": {
    meaning: "प्रकाश का सार पवित्र शील में है।",
    english: "The essence of radiance lies in pure character.",
  },
  "sarga-7-749": {
    meaning: "विजय कहाँ बसती है, कौन जाने?",
    english: "Who knows where victory truly dwells?",
  },
  "sarga-7-750": {
    meaning: "उसकी अजेय चमक कहाँ हँसती है?",
    english: "Where does its unconquerable brilliance smile?",
  },
  "sarga-7-751": {
    meaning: "क्या वह जीत की हुंकार में भरी है?",
    english: "Is it contained in the roar of triumph?",
  },
  "sarga-7-752": {
    meaning: "या रक्त की धारा में छिपी है?",
    english: "Or hidden in the stream of blood?",
  },
  "sarga-7-753": {
    meaning: "न जाने आज युद्ध में क्या हुआ।",
    english: "Who knows what truly happened today in battle.",
  },
  "sarga-7-754": {
    meaning: "युद्ध में विजय का ताज किसे मिला?",
    english: "Who received the crown of victory in war?",
  },
  "sarga-7-755": {
    meaning: "हमने क्या पाया? हमने क्या दिया?",
    english: "What did we gain? What did we give?",
  },
  "sarga-7-756": {
    meaning: "क्या मूल्य चुकाया और क्या सौदा लिया?",
    english: "What price did we pay, and what bargain did we take?",
  },
  "sarga-7-757": {
    meaning: "शील की समस्या सचमुच गहरी है।",
    english: "The problem of character is truly deep.",
  },
  "sarga-7-758": {
    meaning: "थका हुआ मन कुछ समझ नहीं पाता।",
    english: "The tired mind cannot understand much.",
  },
  "sarga-7-759": {
    meaning: "वह पूरी तरह निश्चिंत नहीं हो पाता।",
    english: "It cannot become completely assured.",
  },
  "sarga-7-760": {
    meaning: "जिसे छोड़ता है, उसी को फिर मानता है।",
    english: "What it abandons, it ends up honoring again.",
  },
  "sarga-7-761": {
    meaning: "पर जो भी हो, वह मनुष्यों में श्रेष्ठ था।",
    english: "But whatever else, he was among the finest of humans.",
  },
  "sarga-7-762": {
    meaning: "वह केवल धनुर्धर नहीं, धर्मिष्ठ भी था।",
    english: "He was not merely an archer; he was righteous too.",
  },
  "sarga-7-763": {
    meaning: "वह तपस्वी, सत्यवादी और व्रती था।",
    english: "He was austere, truthful, and vow-bound.",
  },
  "sarga-7-764": {
    meaning: "वह बड़ा ब्रह्मण्य और मन से यति था।",
    english: "He was deeply reverent and inwardly ascetic.",
  },
  "sarga-7-765": {
    meaning: "हृदय से निष्कपट और कर्म से पवित्र था।",
    english: "Sincere in heart and pure in action.",
  },
  "sarga-7-766": {
    meaning: "दलितों का तारक और स्त्रियों का उद्धारक था।",
    english: "A savior of the oppressed and uplifter of women.",
  },
  "sarga-7-767": {
    meaning: "वह अद्वितीय दानी और दयालु था।",
    english: "He was an unmatched giver and compassionate man.",
  },
  "sarga-7-768": {
    meaning: "युधिष्ठिर, कर्ण का हृदय अद्भुत था।",
    english: "Yudhishthira, Karna's heart was wondrous.",
  },
  "sarga-7-769": {
    meaning: "उसने किसका कल्याण नहीं किया?",
    english: "Whose welfare did he not serve?",
  },
  "sarga-7-770": {
    meaning: "उसने छिपकर क्या-क्या दान नहीं दिए?",
    english: "What gifts did he not give in secret?",
  },
  "sarga-7-771": {
    meaning: "संसार के लिए अपना सर्वस्व खोकर,",
    english: "Having lost everything for the sake of the world,",
  },
  "sarga-7-772": {
    meaning: "आज वह युद्ध में निःस्व होकर मरा।",
    english: "today he died in battle with nothing left.",
  },
  "sarga-7-773": {
    meaning: "वह ज्योति संसार को तारने के लिए उगी थी।",
    english: "That light had risen to redeem the world.",
  },
  "sarga-7-774": {
    meaning: "वह पुरुष हारने के लिए जन्मा नहीं था।",
    english: "That man was not born to be defeated.",
  },
  "sarga-7-775": {
    meaning: "पर दान के लिए सब कुछ लुटाकर,",
    english: "But having given away everything for charity,",
  },
  "sarga-7-776": {
    meaning: "यश और मानव-कल्याण के लिए,",
    english: "for honor and human welfare,",
  },
  "sarga-7-777": {
    meaning: "शत्रु पर भी दया कर, उसे रक्षा देकर,",
    english: "showing mercy even to the enemy and granting protection,",
  },
  "sarga-7-778": {
    meaning: "मित्रता पर प्रसन्न होकर प्राण देकर,",
    english: "gladly giving his life for friendship,",
  },
  "sarga-7-779": {
    meaning: "कर्ण धरती को दीन बना कर चला गया।",
    english: "Karna has gone, leaving the earth impoverished.",
  },
  "sarga-7-780": {
    meaning: "मनुष्य-कुल को बहुत बलहीन करके चला गया।",
    english: "leaving humankind greatly weakened.",
  },
  "sarga-7-781": {
    meaning: "युधिष्ठिर, भूल जाइए कि वह विकराल था।",
    english: "Yudhishthira, forget that he was terrible.",
  },
  "sarga-7-782": {
    meaning: "वह विपक्षी था, हमारा काल था।",
    english: "He was an opponent, our death-force.",
  },
  "sarga-7-783": {
    meaning: "अहा, शील में वह कितना विनम्र था!",
    english: "Ah, how humble he was in character!",
  },
  "sarga-7-784": {
    meaning: "दया और धर्म में कितना रमा हुआ था!",
    english: "How absorbed he was in compassion and dharma!",
  },
  "sarga-7-785": {
    meaning: "उसे द्रोण समझकर मन में भक्ति भरिए।",
    english: "Think of him as Drona and fill your heart with devotion.",
  },
  "sarga-7-786": {
    meaning: "पितामह की तरह उसका सम्मान कीजिए।",
    english: "Honor him as you would the grandsire.",
  },
  "sarga-7-787": {
    meaning: "मनुष्यता का नया नेता उठ गया है।",
    english: "A new leader of humanity has departed.",
  },
  "sarga-7-788": {
    meaning: "जगत से ज्योति का विजेता उठ गया है।",
    english: "The conqueror of light has risen away from the world.",
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

console.log("Seeded Hindi meanings and English translations for all sarga-7 lines.");
