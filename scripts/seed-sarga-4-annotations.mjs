import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const files = [
  path.join(ROOT, "content", "sarga-4.json"),
  path.join(ROOT, "public", "content", "sarga-4.json"),
];

const annotations = {
  "sarga-4-1": {
    meaning: "प्रेम के यज्ञ जैसे कठिन कुंड में कौन वीर अपनी बलि देगा?",
    english: "Which hero will offer himself in the difficult altar of love's sacrifice?",
  },
  "sarga-4-2": {
    meaning: "कौन तन, मन, धन और सब कुछ अर्पित कर अतुलनीय यश पाएगा?",
    english: "Who will offer body, mind, wealth, and everything, and gain incomparable fame?",
  },
  "sarga-4-3": {
    meaning: "जिसकी निष्ठा कृष्ण के सामने भी हार मानने को तैयार नहीं हुई।",
    english: "Whose loyalty did not accept defeat even before Krishna.",
  },
  "sarga-4-4": {
    meaning: "धन्य हो राधेय कर्ण, जो मित्रता पर अद्भुत गर्व रखने वाले थे।",
    english: "Blessed are you, Radheya, wondrously proud of the bond of friendship.",
  },
  "sarga-4-5": {
    meaning: "पर न जाने क्यों संसार में एक विचित्र नियम चलता है।",
    english: "Yet somehow a strange law seems to operate in the world.",
  },
  "sarga-4-6": {
    meaning: "भोगी सुख भोगता है, और तपस्वी और अधिक जलता रहता है।",
    english: "The pleasure-seeker enjoys comfort, while the ascetic burns even more.",
  },
  "sarga-4-7": {
    meaning: "जहाँ हरियाली होती है, बादल भी उसी क्षेत्र में आते हैं।",
    english: "Where there is greenery, the clouds too dwell there.",
  },
  "sarga-4-8": {
    meaning: "लेकिन रेगिस्तान की भूमि प्यासी की प्यासी रह जाती है।",
    english: "But the desert land remains thirsty as ever.",
  },
  "sarga-4-9": {
    meaning: "और जो वीर किसी प्रतिज्ञा पर अड़ जाता है,",
    english: "And the hero who stands firm upon a vow,",
  },
  "sarga-4-10": {
    meaning: "सचमुच, उसे उस प्रतिज्ञा के लिए सब कुछ देना पड़ता है।",
    english: "truly has to give everything for that vow.",
  },
  "sarga-4-11": {
    meaning: "भय और विपत्ति हमेशा केवल पाप के द्वार पर ही नहीं दौड़ती।",
    english: "Terror and suffering do not always rush only to the door of sin.",
  },
  "sarga-4-12": {
    meaning: "मनुष्य कभी-कभी पुण्य को अपनाकर भी दुख भोगता है।",
    english: "At times a person suffers even by choosing virtue.",
  },
  "sarga-4-13": {
    meaning: "फिर भी जहाँ कहीं प्रकाश की रेखा मुस्कराती है,",
    english: "Even so, wherever a line of light smiles,",
  },
  "sarga-4-14": {
    meaning: "वहाँ किसी ज्वलंत वीर पुरुष की आभा रहती है।",
    english: "there lives the radiance of some blazing hero.",
  },
  "sarga-4-15": {
    meaning: "जिसने विपत्तियों से घबराकर अपना रास्ता नहीं छोड़ा।",
    english: "One who did not abandon his path out of fear of adversity.",
  },
  "sarga-4-16": {
    meaning: "जिसने अपनी जान गँवाकर भी जगत को प्रकाश दिया।",
    english: "One who gave light to the world even by losing his life.",
  },
  "sarga-4-17": {
    meaning: "मानवता का आदर्श तपस्या के भीतर ही पलता है।",
    english: "The ideal of humanity grows within austerity.",
  },
  "sarga-4-18": {
    meaning: "जो आग में निर्भय जलता है, वही प्रकाश देता है।",
    english: "Only what burns fearlessly in fire gives light.",
  },
  "sarga-4-19": {
    meaning: "व्रतधारी वीर जीवन भर दाह का डंक सहते हैं।",
    english: "Vow-bound heroes endure the sting of burning pain all their lives.",
  },
  "sarga-4-20": {
    meaning: "तभी वे कहीं अमरता के पद के अधिकारी बनते हैं।",
    english: "Only then do they become worthy of immortality.",
  },
  "sarga-4-21": {
    meaning: "प्रतिज्ञा करना सरल है, लेकिन उसे निभाना कठिन है।",
    english: "Making a vow is easy; fulfilling it is difficult.",
  },
  "sarga-4-22": {
    meaning: "व्रत की सबसे बड़ी परीक्षा उसका अंतिम मूल्य चुकाना है।",
    english: "The greatest test of a vow is paying its final price.",
  },
  "sarga-4-23": {
    meaning: "यदि अंतिम मूल्य नहीं दिया, तो बाकी मूल्य देने का क्या अर्थ?",
    english: "If the final price is not paid, what meaning is there in paying any other price?",
  },
  "sarga-4-24": {
    meaning: "यदि प्राणों का मोह करने लगे, तो प्रतिज्ञा लेने का क्या अर्थ?",
    english: "If one clings to life, what is the point of taking a vow?",
  },
  "sarga-4-25": {
    meaning: "जब तक बलिदान सस्ती कीमत पर मिलता रहता है,",
    english: "As long as sacrifice is available at a cheap price,",
  },
  "sarga-4-26": {
    meaning: "तब तक सभी त्यागी और बलिदानी बने रह सकते हैं।",
    english: "everyone can appear renouncing and sacrificial.",
  },
  "sarga-4-27": {
    meaning: "लेकिन जब तपस्या का मूल्य भारी होता है, उसे देना कठिन है।",
    english: "But when the price of austerity is high, paying it is hard.",
  },
  "sarga-4-28": {
    meaning: "जो हँसकर वह मूल्य दे सके, ऐसा मनुष्य हर घर में नहीं मिलता।",
    english: "A person who pays that price smiling is not found in every home.",
  },
  "sarga-4-29": {
    meaning: "जीवन की यात्रा दान की शक्ति से निरंतर चलती है।",
    english: "Life's journey moves ceaselessly through the power of giving.",
  },
  "sarga-4-30": {
    meaning: "जितना अधिक स्नेह जलता है, उतनी ही ज्योति बढ़ती है।",
    english: "The more abundantly affection burns, the more its light grows.",
  },
  "sarga-4-31": {
    meaning: "दान में हम रोकर या हँसकर जो कुछ देते हैं,",
    english: "Whatever we give in charity, whether weeping or smiling,",
  },
  "sarga-4-32": {
    meaning: "अहंकार के कारण उसे अपनी वस्तु का त्याग मान लेते हैं।",
    english: "we often mistake it, through ego, as surrendering what is ours.",
  },
  "sarga-4-33": {
    meaning: "वह स्वत्व का त्याग नहीं; दान तो जीवन का झरना है।",
    english: "It is not surrender of ownership; giving is the spring of life.",
  },
  "sarga-4-34": {
    meaning: "उसे रोककर रखना मृत्यु से पहले ही मर जाने जैसा है।",
    english: "To block it is to die before death.",
  },
  "sarga-4-35": {
    meaning: "वृक्ष अपना फल देकर किस पर कृपा करते हैं?",
    english: "Upon whom do trees show favor when they give their fruit?",
  },
  "sarga-4-36": {
    meaning: "वे फल गिरने से पहले उन्हें रोक क्यों नहीं लेते?",
    english: "Why do they not hold the fruit back from falling?",
  },
  "sarga-4-37": {
    meaning: "ऋतु बीत जाने पर फल रोकना डालों के सड़ने जैसा है।",
    english: "After the season passes, holding fruit back means the branches rot.",
  },
  "sarga-4-38": {
    meaning: "देने योग्य वस्तु पर मोह दिखाना आत्मघात करना है।",
    english: "Clinging to what should be given is self-destruction.",
  },
  "sarga-4-39": {
    meaning: "वृक्ष इसलिए देते हैं कि रसों में कीट न लग जाए।",
    english: "Trees give so that decay does not enter their fibers.",
  },
  "sarga-4-40": {
    meaning: "डालियाँ स्वस्थ रहें और फिर नए-नए फल आएँ।",
    english: "So the branches remain healthy and new fruits come again.",
  },
  "sarga-4-41": {
    meaning: "नदी अपना जल देती है ताकि बादल उससे भर जाएँ।",
    english: "The river gives water so that clouds may be filled by it.",
  },
  "sarga-4-42": {
    meaning: "बादल बरसें, फिर नदी भरें, और नया जीवन उत्पन्न हो।",
    english: "The clouds rain, fill the river again, and new life arises.",
  },
  "sarga-4-43": {
    meaning: "आत्मदान का जगत-जीवन से सीधा संबंध है।",
    english: "Self-giving has a direct bond with the life of the world.",
  },
  "sarga-4-44": {
    meaning: "जो जितना देता है, बदले में उतना ही पाता है।",
    english: "One receives in return according to how much one gives.",
  },
  "sarga-4-45": {
    meaning: "कंजूसी दिखाना अपने-आप को धोखा देना है।",
    english: "To show miserliness is to deceive oneself.",
  },
  "sarga-4-46": {
    meaning: "दान को अपूर्ण रखना अपनी ही रिक्तता में रह जाना है।",
    english: "To leave giving incomplete is to remain in one's own emptiness.",
  },
  "sarga-4-47": {
    meaning: "जो व्रत का अंतिम मूल्य चुकाते हुए नहीं रोते,",
    english: "Those who do not weep while paying the final price of a vow,",
  },
  "sarga-4-48": {
    meaning: "वे ही जीवन की पूर्णता से एकाकार होते हैं।",
    english: "they alone become one with the fulfillment of life.",
  },
  "sarga-4-49": {
    meaning: "जो मनुष्य आत्मदान से अपने जीवन-घट को भरता है,",
    english: "The person who fills the vessel of life through self-giving,",
  },
  "sarga-4-50": {
    meaning: "वह मृत्यु के मुख में पड़कर भी कभी नहीं मरता।",
    english: "does not truly die even when entering the mouth of death.",
  },
  "sarga-4-51": {
    meaning: "जहाँ भी संसार में ज्योति है, जहाँ भी उजाला है,",
    english: "Wherever there is light in the world, wherever there is radiance,",
  },
  "sarga-4-52": {
    meaning: "वहाँ कोई न कोई अंतिम मूल्य चुकाने वाला खड़ा है।",
    english: "there stands someone who has paid the final price.",
  },
  "sarga-4-53": {
    meaning: "राम ने सीता का त्याग कर अपने व्रत का अंतिम मूल्य दिया।",
    english: "Rama paid the final price of his vow by renouncing Sita.",
  },
  "sarga-4-54": {
    meaning: "जो जीवन की संगिनी, प्राणों की मणि और अत्यंत पवित्र थीं।",
    english: "She was his life companion, jewel of his soul, and supremely pure.",
  },
  "sarga-4-55": {
    meaning: "दधीचि ने अस्थियाँ देकर और शिवि ने अपना अंग कटवाकर मूल्य दिया।",
    english: "Dadhichi paid it with his bones, and Shibi by cutting his own flesh.",
  },
  "sarga-4-56": {
    meaning: "हरिश्चंद्र ने कफन माँगते हुए भी सत्य पर अडिग रहकर मूल्य दिया।",
    english: "Harishchandra paid it by standing firm on truth even while asking for a shroud.",
  },
  "sarga-4-57": {
    meaning: "ईसा ने संसार के लिए सूली पर अपने प्राण देकर मूल्य दिया।",
    english: "Jesus paid it by giving his life on the cross for the world.",
  },
  "sarga-4-58": {
    meaning: "गांधी ने तीन गोलियाँ खाकर अंतिम मूल्य चुकाया।",
    english: "Gandhi paid the final price by receiving three bullets.",
  },
  "sarga-4-59": {
    meaning: "जीवन ने जब अंतिम मूल्य माँगते हुए अंतिम ललकार दी,",
    english: "When life gave its final challenge, demanding the final price,",
  },
  "sarga-4-60": {
    meaning: "सरमद ने हँसते हुए अपने पूरे शरीर की त्वचा उतरवा दी।",
    english: "Sarmad smilingly gave up the skin of his entire body.",
  },
  "sarga-4-61": {
    meaning: "सुकरात ने जीवन का व्रत निभाते हुए हँसकर मृत्यु को स्वीकार किया।",
    english: "Socrates accepted death with a smile while upholding the vow of life.",
  },
  "sarga-4-62": {
    meaning: "विष का प्याला पीकर वे संसार में अमर हो गए।",
    english: "By drinking the cup of poison, he became immortal in the world.",
  },
  "sarga-4-63": {
    meaning: "मंसूर को मारकर भी नियति उसकी दृढ़ता का उपहास सह नहीं सकी।",
    english: "Even after Mansur was killed, destiny could not bear the mockery of his firmness.",
  },
  "sarga-4-64": {
    meaning: "उसके टुकड़े-टुकड़े भी मानो सौ बार चीखकर उत्तर देते रहे।",
    english: "In reply, each fragment of him seemed to cry out a hundred times.",
  },
  "sarga-4-65": {
    meaning: "दान संसार का स्वाभाविक धर्म है; मनुष्य व्यर्थ ही डरता है।",
    english: "Giving is the natural law of the world; humans fear it in vain.",
  },
  "sarga-4-66": {
    meaning: "एक दिन तो हमें स्वयं सब कुछ छोड़ना ही पड़ता है।",
    english: "One day we ourselves must give up everything.",
  },
  "sarga-4-67": {
    meaning: "वही बचते हैं जो समय आने पर सर्वस्व दान कर देते हैं।",
    english: "Those alone are saved who give everything at the right time.",
  },
  "sarga-4-68": {
    meaning: "जिन्हें समय की पहचान नहीं, वे देकर भी मर जाते हैं।",
    english: "Those who do not know the proper season die even after giving.",
  },
  "sarga-4-69": {
    meaning: "वीर, पराक्रमी कर्ण दान के अचूक व्रतधारी थे।",
    english: "Heroic, mighty Karna was bound to an unfailing vow of charity.",
  },
  "sarga-4-70": {
    meaning: "वे बहुत समय से एक बड़ा पुण्य-प्रण निभा रहे थे।",
    english: "For a long time he had been upholding a great sacred vow.",
  },
  "sarga-4-71": {
    meaning: "सूर्य-पूजन के समय जो भी याचक उनके सामने आता था,",
    english: "Whoever came before him as a petitioner during sun-worship,",
  },
  "sarga-4-72": {
    meaning: "वह कर्ण से माँगा हुआ दान सहज ही पा लेता था।",
    english: "received from Karna whatever he asked for.",
  },
  "sarga-4-73": {
    meaning: "यह बात प्रसिद्ध थी कि कर्ण गुणवान और ज्ञानी हैं।",
    english: "It was famous that Karna was virtuous and wise.",
  },
  "sarga-4-74": {
    meaning: "वे दीनों के सहारे और संसार के सबसे बड़े दानी हैं।",
    english: "He was the support of the poor and the greatest giver in the world.",
  },
  "sarga-4-75": {
    meaning: "जिस पर जैसी विपत्ति हो, उससे कहो कि कर्ण के पास जाए।",
    english: "Tell anyone in distress to go to Karna.",
  },
  "sarga-4-76": {
    meaning: "गाय, धरती, हाथी, घोड़े या जो भी जितना चाहो माँग लो।",
    english: "Ask for cattle, land, elephants, horses, or whatever you desire.",
  },
  "sarga-4-77": {
    meaning: "किसने, कब, कहाँ इस दानी के मुख से 'नहीं' सुना है?",
    english: "Who has ever heard 'no' from this giver's mouth?",
  },
  "sarga-4-78": {
    meaning: "धन की क्या बात, वे तो प्राण भी आनंद से दे सकते हैं।",
    english: "What is wealth? He could gladly give even his life.",
  },
  "sarga-4-79": {
    meaning: "दान देते समय वे अत्यंत विनम्र रहते हैं।",
    english: "While giving, he remains deeply humble.",
  },
  "sarga-4-80": {
    meaning: "वे निर्धन याचकों से भी बहुत मधुर वचन कहते हैं।",
    english: "He speaks sweetly even to poor petitioners.",
  },
  "sarga-4-81": {
    meaning: "वे ऐसा सत्कार करते हैं मानो हम भिखारी नहीं हैं।",
    english: "He honors them as though they are not beggars.",
  },
  "sarga-4-82": {
    meaning: "बल्कि जो माँग रहे हैं, उसके न्यायपूर्ण अधिकारी हैं।",
    english: "Rather, they are rightful claimants of what they ask.",
  },
  "sarga-4-83": {
    meaning: "उनकी प्रसन्न आँखों में कैसी आँसुओं की धारा उमड़ती है।",
    english: "What a stream of tears rises in his joyful eyes.",
  },
  "sarga-4-84": {
    meaning: "मानो वे हमारा ही जमा धन हमें लौटा रहे हों।",
    english: "As if he is returning to us a trust that was already ours.",
  },
  "sarga-4-85": {
    meaning: "कर्ण युग-युग तक जिएँ; वे दलितों के दुख और दैन्य हरने वाले हैं।",
    english: "May Karna live through the ages; he removes the sorrow and poverty of the oppressed.",
  },
  "sarga-4-86": {
    meaning: "वे धरती के कल्पवृक्ष और आश्रयहीनों की अनुपम शरण हैं।",
    english: "He is the wish-fulfilling tree of earth and the unmatched refuge of the shelterless.",
  },
  "sarga-4-87": {
    meaning: "धरती पर पहले ऐसा दानवीर कब आया था?",
    english: "When before had such a giver-hero come upon the earth?",
  },
  "sarga-4-88": {
    meaning: "इतने अधिक लोगों को ऐसा सुख किसने पहुँचाया था?",
    english: "Who had brought such happiness to so many people?",
  },
  "sarga-4-89": {
    meaning: "सचमुच, कर्ण दान के लिए ही संचय करते थे।",
    english: "Truly, Karna accumulated wealth only for giving.",
  },
  "sarga-4-90": {
    meaning: "बहुत वैभव अर्जित कर वे दीनों के घर भरते थे।",
    english: "Gathering great wealth, he filled the homes of the poor.",
  },
  "sarga-4-91": {
    meaning: "गाय, धरती, हाथी, घोड़े, अन्न, धन, वस्त्र जो भी मिला,",
    english: "Cattle, land, elephants, horses, grain, wealth, clothing, whatever he obtained,",
  },
  "sarga-4-92": {
    meaning: "दानवीर ने हृदय खोलकर वहीं बाँट दिया।",
    english: "the giver-hero distributed there with an open heart.",
  },
  "sarga-4-93": {
    meaning: "चारों दिशाओं में उनके निर्मल यश की पताका फहरा रही थी।",
    english: "The pure banner of his fame waved freely in all directions.",
  },
  "sarga-4-94": {
    meaning: "कर्ण का नाम दान की अतुलनीय महिमा का प्रतीक बन गया।",
    english: "Karna's name became the symbol of charity's incomparable glory.",
  },
  "sarga-4-95": {
    meaning: "देश के ज्ञानी उनका नाम सुनकर श्रद्धा से प्रणाम करते थे।",
    english: "The wise of the land bowed reverently on hearing his name.",
  },
  "sarga-4-96": {
    meaning: "भाग्यहीन लोग उन्हें अपना भाग्य समझकर स्मरण करते थे।",
    english: "The unfortunate worshiped him as their good fortune.",
  },
  "sarga-4-97": {
    meaning: "कहा जाता है, एक बार प्रत्यक्ष युद्ध से हटकर,",
    english: "It is said that once, away from direct battle,",
  },
  "sarga-4-98": {
    meaning: "नियति ने पुण्य के छिपे मार्ग से कर्ण पर वार किया।",
    english: "destiny struck Karna from the hidden opening of virtue.",
  },
  "sarga-4-99": {
    meaning: "दान ही उनके व्रत की कसौटी था; अब उनकी काया ही उस कसौटी पर चढ़ी।",
    english: "Charity was the touchstone of his vow; this time his very body was placed upon it.",
  },
  "sarga-4-100": {
    meaning: "भाग्य देह धारण कर कठिन मूल्य माँगने सामने आ गया।",
    english: "Fate took bodily form and came before him to demand a hard price.",
  },
  "sarga-4-101": {
    meaning: "एक दिन जब सूर्य मध्य आकाश को छोड़ने लगे थे,",
    english: "One day, when the sun was leaving the middle of the sky,",
  },
  "sarga-4-102": {
    meaning: "कर्ण गंगा के तट पर आँखें बंद किए खड़े थे।",
    english: "Karna stood on the bank of the Ganga with eyes closed.",
  },
  "sarga-4-103": {
    meaning: "वे कमर तक जल में डूबे हुए, ध्यान में लीन थे।",
    english: "He was immersed waist-deep in water, absorbed in meditation.",
  },
  "sarga-4-104": {
    meaning: "वे समुद्र में आधा डूबे स्वर्ण-जटित पर्वत जैसे लगते थे।",
    english: "He seemed like a gold-adorned mountain half sunk in the ocean.",
  },
  "sarga-4-105": {
    meaning: "सूर्य-किरणें निर्मल जल को चाँदी जैसी चमक से भर रही थीं।",
    english: "Sunrays filled the pure water with silver brightness.",
  },
  "sarga-4-106": {
    meaning: "और कवच-कुण्डल को छूकर स्वयं स्वर्णिम हो उठती थीं।",
    english: "Touching his armor and earrings, they themselves turned golden.",
  },
  "sarga-4-107": {
    meaning: "किरणों का अमृत पीकर प्रकृति आनंद से दमक रही थी।",
    english: "Drinking the nectar of rays, nature glowed with joy.",
  },
  "sarga-4-108": {
    meaning: "केले के चिकने पत्तों पर पारे जैसी चमक झलक रही थी।",
    english: "On smooth banana leaves, a mercury-like shine glittered.",
  },
  "sarga-4-109": {
    meaning: "तट पर लताओं और वनस्पतियों के बीच पक्षी चहक रहे थे।",
    english: "On the bank, birds sang among vines and plants.",
  },
  "sarga-4-110": {
    meaning: "धूप, दीप, कपूर और फूल सब मिलकर वातावरण को सुगंधित कर रहे थे।",
    english: "Incense, lamps, camphor, and flowers together perfumed the air.",
  },
  "sarga-4-111": {
    meaning: "पूजा और उपासना पूरी कर कर्ण ने ध्यान खोला।",
    english: "Completing worship and devotion, Karna opened his meditation.",
  },
  "sarga-4-112": {
    meaning: "तभी ऊपर तट पर सूखे पत्तों में कुछ हलचल हुई।",
    english: "Just then, something moved among the dry leaves on the bank above.",
  },
  "sarga-4-113": {
    meaning: "कर्ण ने कहा, उधर कौन है? भाई, सामने आओ।",
    english: "Karna said: Who is there? Brother, come forward.",
  },
  "sarga-4-114": {
    meaning: "मैं तैयार हूँ; निश्चिंत होकर अपना आदेश कहो।",
    english: "I am ready; speak your command without fear.",
  },
  "sarga-4-115": {
    meaning: "अपनी पीड़ा कहो; कर्ण सबका विनम्र सेवक है।",
    english: "Tell me your suffering; Karna is the humble servant of all.",
  },
  "sarga-4-116": {
    meaning: "यह विपन्नों का मित्र तुम्हारी सेवा के लिए तत्पर है।",
    english: "This friend of the distressed is ready to serve you.",
  },
  "sarga-4-117": {
    meaning: "दान माँगो: अन्न, वस्त्र, घर या धन दूँ?",
    english: "Ask for a gift: shall I give food, clothing, home, or wealth?",
  },
  "sarga-4-118": {
    meaning: "अपना छोटा राज्य दूँ या यह क्षणिक, तुच्छ जीवन?",
    english: "Shall I give my small kingdom, or this brief, little life?",
  },
  "sarga-4-119": {
    meaning: "कभी बादल समुद्र से उदास होकर लौट सकते हैं।",
    english: "Clouds may someday return sadly from the ocean.",
  },
  "sarga-4-120": {
    meaning: "लेकिन याचक कर्ण के घर से निराश नहीं लौट सकते।",
    english: "But petitioners cannot return disappointed from Karna's house.",
  },
  "sarga-4-121": {
    meaning: "कर्ण कहता है कि दूसरों का दुख दूर करने में ही मैंने अपना सुख माना है।",
    english: "Karna says he has found his happiness in removing others' sorrow.",
  },
  "sarga-4-122": {
    meaning: "भाग्यहीन मैंने जीवन में और कौन-सा स्वाद जाना है?",
    english: "What other sweetness has an unfortunate man like me known in life?",
  },
  "sarga-4-123": {
    meaning: "आओ, तुम्हारी धरोहर देकर मैं तुमसे भी उऋण हो जाऊँ।",
    english: "Come, let me return your trust and become free of debt to you too.",
  },
  "sarga-4-124": {
    meaning: "अपनी संचित निधि मुझसे लेकर मुझ पर उपकार करो।",
    english: "Take from me the treasure kept for you, and bless me by accepting it.",
  },
  "sarga-4-125": {
    meaning: "यहाँ कौन भिक्षुक है और कौन दाता है?",
    english: "Who here is the beggar, and who is the giver?",
  },
  "sarga-4-126": {
    meaning: "मनुष्य अपना ही अधिकार अलग-अलग तरीकों से पाता है।",
    english: "A person receives his own right in many different ways.",
  },
  "sarga-4-127": {
    meaning: "जब भी तुम हाथ फैलाकर मुझसे कुछ लेते हो,",
    english: "Whenever you stretch out your hand and take something from me,",
  },
  "sarga-4-128": {
    meaning: "तृप्त भाव से मुझे देखकर तुम मुझे क्या नहीं दे जाते?",
    english: "what do you not give me in return through your satisfied gaze?",
  },
  "sarga-4-129": {
    meaning: "दीनों का संतोष और भाग्यहीनों की भाव-विह्वल वाणी,",
    english: "The contentment of the poor, the choked voice of the unfortunate,",
  },
  "sarga-4-130": {
    meaning: "आँखों के कोनों में भरा कृतज्ञता का जल,",
    english: "the water of gratitude brimming in the corners of their eyes,",
  },
  "sarga-4-131": {
    meaning: "युगों से मुरझाए होंठों का फिर से हरा हो जाना,",
    english: "the long-withered lips becoming fresh again,",
  },
  "sarga-4-132": {
    meaning: "अनेक लोगों का आशीर्वाद, प्रेम और विश्वास पाना।",
    english: "and receiving the blessings, love, and trust of many people.",
  },
  "sarga-4-133": {
    meaning: "इससे बड़ी प्राप्ति और क्या होगी जिस पर मैं गर्व करूँ?",
    english: "What greater gain could there be for me to take pride in?",
  },
  "sarga-4-134": {
    meaning: "यदि दूसरे को जीवन मिले, तो मैं हँसकर क्यों न मरूँ?",
    english: "If another receives life, why should I not die smiling?",
  },
  "sarga-4-135": {
    meaning: "कोई मोल-तोल नहीं; जो तुम्हें अच्छा लगे, माँग लो।",
    english: "No bargaining; ask for whatever pleases you.",
  },
  "sarga-4-136": {
    meaning: "मैं सबको मुँहमाँगा दान देता आया हूँ।",
    english: "I have always given everyone exactly what they asked.",
  },
  "sarga-4-137": {
    meaning: "कर्ण की गहरी वाणी सुनकर वह आगंतुक चकित और भीतर से भ्रमित हुआ।",
    english: "Hearing Karna's deep words, the visitor was amazed and inwardly unsettled.",
  },
  "sarga-4-138": {
    meaning: "लताओं की ओट से एक ब्राह्मण कर्ण के सामने आया।",
    english: "From behind the vines, a Brahmin appeared before Karna.",
  },
  "sarga-4-139": {
    meaning: "उसने कहा, जय हो; हमने आपकी सुकीर्ति की कथा सुनी है।",
    english: "He said: victory to you; I too have heard the tale of your noble fame.",
  },
  "sarga-4-140": {
    meaning: "आज तीनों लोकों में आपके जैसा दानी कोई नहीं।",
    english: "Today, in all three worlds, there is no giver like you.",
  },
  "sarga-4-141": {
    meaning: "जो बात आप मुख से कह देते हैं, उसे कभी नहीं टालते।",
    english: "Whatever you once say, you never turn away from it.",
  },
  "sarga-4-142": {
    meaning: "प्रतिज्ञा निभाने के लिए आप अनेक प्रकार के कष्ट सहते हैं।",
    english: "You endure many kinds of suffering to keep your vow.",
  },
  "sarga-4-143": {
    meaning: "आपका आश्वासन मिलते ही दुखी मनुष्य निर्भय सुख पाता है।",
    english: "A distressed person becomes fearless and comforted by your assurance alone.",
  },
  "sarga-4-144": {
    meaning: "कर्ण का वचन हर जगह कर्म में बदलने वाला माना जाता है।",
    english: "Karna's word is known everywhere as a word that turns into action.",
  },
  "sarga-4-145": {
    meaning: "लोग आपकी निष्ठा के सैकड़ों दिव्य प्रमाण बताते हैं।",
    english: "People cite hundreds of divine proofs of your loyalty.",
  },
  "sarga-4-146": {
    meaning: "आपकी गिनती शिवि, दधीचि और प्रह्लाद जैसे महान लोगों में होती है।",
    english: "You are counted among the likes of Shibi, Dadhichi, and Prahlad.",
  },
  "sarga-4-147": {
    meaning: "सबका विश्वास है कि आप मृत्यु से डर नहीं सकते।",
    english: "Everyone believes you cannot fear death.",
  },
  "sarga-4-148": {
    meaning: "आप प्रतिज्ञा के लिए हँसकर प्राण दे सकते हैं।",
    english: "You can smilingly offer your life for a vow.",
  },
  "sarga-4-149": {
    meaning: "यदि ऐसा है, तो मनुष्यलोक अवश्य आदर पाएगा।",
    english: "If this is so, then the human world will surely earn honor.",
  },
  "sarga-4-150": {
    meaning: "किसी दिन स्वर्ग भी भीख माँगने धरती पर आएगा।",
    english: "One day even heaven may come down to earth to beg.",
  },
  "sarga-4-151": {
    meaning: "लेकिन भाग्य बलवान है; कौन किससे कितना पाता है,",
    english: "But fate is powerful; who receives how much from whom,",
  },
  "sarga-4-152": {
    meaning: "यह लेखा मनुष्य के ललाट में ही लिखा होता है।",
    english: "that account is written on a person's forehead.",
  },
  "sarga-4-153": {
    meaning: "यदि छोटा पात्र कुएँ में डूबे, तो जितना जल उसमें आता है उतना ही लेता है।",
    english: "If a small vessel sinks into a well, it takes only as much water as it can hold.",
  },
  "sarga-4-154": {
    meaning: "समुद्र भी उसे उससे अधिक जल नहीं दे सकता।",
    english: "Even the ocean cannot give it more than that.",
  },
  "sarga-4-155": {
    meaning: "इसलिए बड़ों को देखकर बड़ी वस्तु की आशा करना व्यर्थ है।",
    english: "So it is useless to expect great things merely by seeing the great.",
  },
  "sarga-4-156": {
    meaning: "ऊँची इच्छा ही काफी नहीं, भाग्य भी चाहिए।",
    english: "High desire alone is not enough; fate is needed too.",
  },
  "sarga-4-157": {
    meaning: "कर्ण ने कहा कि आप व्यर्थ ही भाग्य से डर रहे हैं।",
    english: "Karna said: you are fearing fate for no reason.",
  },
  "sarga-4-158": {
    meaning: "जो आपके सामने खड़ा है, उसे आप पहचान नहीं पा रहे।",
    english: "You are not recognizing the one standing before you.",
  },
  "sarga-4-159": {
    meaning: "भाग्य में विधाता ने क्या लिखा था, मैं खूब जानता हूँ।",
    english: "I know well what destiny had written for me.",
  },
  "sarga-4-160": {
    meaning: "लेकिन मैं अपनी भुजाओं को भाग्य से भी अधिक बलवान मानता हूँ।",
    english: "But I consider my arms stronger than fate.",
  },
  "sarga-4-161": {
    meaning: "महाराज, परिश्रम से विधि का लिखा बदल जाता है।",
    english: "Sir, effort can overturn what fate has written.",
  },
  "sarga-4-162": {
    meaning: "पुरुषार्थ से किस्मत का पासा पलट जाता है।",
    english: "By human effort, the dice of fortune can be reversed.",
  },
  "sarga-4-163": {
    meaning: "ऊँची अभिलाषाएँ तो हर मनुष्य की शक्ति हैं।",
    english: "High aspirations are the strength of every human being.",
  },
  "sarga-4-164": {
    meaning: "वे हमें बार-बार जगाकर चंचल और सक्रिय रखती हैं।",
    english: "They awaken us again and again, keeping us restless and alive.",
  },
  "sarga-4-165": {
    meaning: "जिसकी दृष्टि आगे नहीं है, वह कहाँ जाएगा?",
    english: "Where can one go if one's gaze does not look ahead?",
  },
  "sarga-4-166": {
    meaning: "जो अधिक नहीं चाहता, वह कितना धन पाएगा?",
    english: "How much wealth can one gain if one does not desire greatly?",
  },
  "sarga-4-167": {
    meaning: "अब औपचारिक बातें छोड़िए और बताइए, आप क्या लेंगे?",
    english: "Now leave ceremony aside and say what you will take.",
  },
  "sarga-4-168": {
    meaning: "सत्य मानिए, आप जो माँगेंगे, मैं वही दूँगा।",
    english: "Believe me, whatever you ask, I will give.",
  },
  "sarga-4-169": {
    meaning: "धरती डोले और आकाश में देवताओं का निवास भी डोल जाए,",
    english: "The earth may tremble, and even the gods' abode in the sky may shake,",
  },
  "sarga-4-170": {
    meaning: "कभी-कभी युद्ध में वीर का हृदय भी थोड़ा डोल सकता है।",
    english: "at times even a hero's heart may tremble in battle.",
  },
  "sarga-4-171": {
    meaning: "अचल पर्वत की जड़ डोले या ध्रुवतारा हिल जाए,",
    english: "The root of a fixed mountain may shake, or the pole star may move,",
  },
  "sarga-4-172": {
    meaning: "सब डोल सकते हैं, पर मेरा वचन नहीं डोल सकता।",
    english: "all may tremble, but my word cannot.",
  },
  "sarga-4-173": {
    meaning: "दाता को अच्छी तरह कसकर परख लेने के बाद वह भिखारी बोला।",
    english: "After testing the giver thoroughly, the base beggar spoke.",
  },
  "sarga-4-174": {
    meaning: "धन्य हो राधेय, तुम दान के अचूक व्रतधारी हो।",
    english: "Blessed are you, Radheya, unfailing keeper of the vow of charity.",
  },
  "sarga-4-175": {
    meaning: "आपकी उदारता ऐसी है कि हर याचक यही कहता है।",
    english: "Such is your generosity that every petitioner says this.",
  },
  "sarga-4-176": {
    meaning: "महाराज का वचन हमेशा और हर जगह कर्म बन जाता है।",
    english: "The king's word always and everywhere becomes action.",
  },
  "sarga-4-177": {
    meaning: "आपके मुख से वचन पाकर ही मैं सब कुछ पा गया।",
    english: "By receiving your word, I have already gained everything.",
  },
  "sarga-4-178": {
    meaning: "अब तो मैं कुछ लिए बिना भी सुख से जा सकता हूँ।",
    english: "Now I can leave happily even without taking anything.",
  },
  "sarga-4-179": {
    meaning: "क्योंकि जो माँगना है, उसे कहते हुए डर लगता है।",
    english: "For I am afraid to say what I have to ask.",
  },
  "sarga-4-180": {
    meaning: "और साथ ही मेरे मन में एक दुविधा भी है।",
    english: "And at the same time I feel a conflict within.",
  },
  "sarga-4-181": {
    meaning: "कहीं ऐसा न हो कि मैं जो माँगूँ, वह आप दे न सकें।",
    english: "What if you cannot give what I ask?",
  },
  "sarga-4-182": {
    meaning: "मैं तो किसी तरह अपनी इच्छा छोड़ दूँगा।",
    english: "I would somehow give up my desire.",
  },
  "sarga-4-183": {
    meaning: "लेकिन आपकी कीर्ति की चाँदनी फीकी पड़ जाएगी।",
    english: "But the moonlight of your fame would grow dim.",
  },
  "sarga-4-184": {
    meaning: "फिर धरती को ऐसा निष्कलंक चंद्रमा कहाँ मिलेगा?",
    english: "Where would the earth find another spotless moon?",
  },
  "sarga-4-185": {
    meaning: "क्या किसी मनस्वी पुरुष को संकट में डालना अच्छा कर्म है?",
    english: "Is it a noble act to place a high-souled man in distress?",
  },
  "sarga-4-186": {
    meaning: "यदि मैं आपको व्रत से डिगा दूँ, तो संसार को क्या उत्तर दूँगा?",
    english: "If I make you fall from your vow, what answer will I give the world?",
  },
  "sarga-4-187": {
    meaning: "सब मुझे दोष देंगे कि मैंने धरती का पुण्य लूट लिया।",
    english: "Everyone will blame me for robbing the earth of its virtue.",
  },
  "sarga-4-188": {
    meaning: "मेरे कारण महाराज की अटूट प्रतिज्ञा टूट गई।",
    english: "Because of me, the king's unbroken vow was broken.",
  },
  "sarga-4-189": {
    meaning: "इसलिए मुझे विदा दीजिए, मैं खुशी से लौट जाता हूँ।",
    english: "So give me leave; I will gladly return.",
  },
  "sarga-4-190": {
    meaning: "कर्ण बोल उठे कि मैं आपको बहुत अद्भुत पाता हूँ।",
    english: "Karna replied: I find you truly extraordinary.",
  },
  "sarga-4-191": {
    meaning: "आप देव हैं, यक्ष हैं, या हरि की कोई मायामयी चाल?",
    english: "Are you a god, a yaksha, or some magical agent of Hari?",
  },
  "sarga-4-192": {
    meaning: "मैं समझ नहीं पाता कि आप मनुष्य हैं या कोई और योनि के प्राणी।",
    english: "I cannot tell whether you are human or of some other order of being.",
  },
  "sarga-4-193": {
    meaning: "आप मुझ नश्वर मनुष्य से कौन-सी वस्तु माँगेंगे,",
    english: "What thing could you ask from a mortal like me,",
  },
  "sarga-4-194": {
    meaning: "जिसे न पाकर आपको अपनी अभिलाषा छोड़नी पड़े?",
    english: "without which you would have to abandon your desire?",
  },
  "sarga-4-195": {
    meaning: "गाय, धरती, धन, घर, जितनी वस्तु चाहें दिलवा दूँ।",
    english: "I can give cattle, land, wealth, homes, whatever you wish.",
  },
  "sarga-4-196": {
    meaning: "यदि इच्छा हो तो अपना सिर काटकर यहीं चरणों में चढ़ा दूँ।",
    english: "If you wish, I can cut off my head and place it here at your feet.",
  },
  "sarga-4-197": {
    meaning: "या यदि आप मुझे जीवित ही साथ ले जाना चाहें,",
    english: "Or if you wish to take me alive with you,",
  },
  "sarga-4-198": {
    meaning: "तब भी वचन तोड़कर मैं ब्राह्मण का द्रोही नहीं बनूँगा।",
    english: "even then I will not break my word and betray a Brahmin.",
  },
  "sarga-4-199": {
    meaning: "चलूँगा, आपके साथ सब भार उठाकर।",
    english: "I will go with you, bearing your entire burden.",
  },
  "sarga-4-200": {
    meaning: "सारी उम्र आपके चरण धोते हुए बिता दूँगा।",
    english: "I will spend my whole life washing your feet.",
  },
  "sarga-4-201": {
    meaning: "वचन माँगकर फिर दान न माँगना बहुत अद्भुत है।",
    english: "To ask for a promise and then not ask for a gift is very strange.",
  },
  "sarga-4-202": {
    meaning: "ऐसी कौन-सी वस्तु है जिसे राधा का पुत्र नहीं दे सकता?",
    english: "What thing is there that Radha's son cannot give?",
  },
  "sarga-4-203": {
    meaning: "हे विप्रदेव, संकोच छोड़कर मनचाही वस्तु माँगिए।",
    english: "Holy Brahmin, leave hesitation aside and ask for what your heart desires.",
  },
  "sarga-4-204": {
    meaning: "यदि मैं एक बार भी 'नहीं' कहूँ, तो यश नहीं मृत्यु मिले।",
    english: "If I say 'no' even once, may I meet dishonor or death.",
  },
  "sarga-4-205": {
    meaning: "कर्ण की शपथ सुनकर ब्राह्मण का हृदय काँप उठा।",
    english: "Hearing Karna's oath, the Brahmin's heart trembled.",
  },
  "sarga-4-206": {
    meaning: "आँखें झुकाए वह भिक्षु साहस जुटाकर बोला।",
    english: "With lowered eyes, the beggar gathered courage and spoke.",
  },
  "sarga-4-207": {
    meaning: "मैं धन की भीख लेकर अपना घर भरने नहीं आया हूँ।",
    english: "I have not come to fill my home by begging for wealth.",
  },
  "sarga-4-208": {
    meaning: "और न राजा को अपना सेवक बनाने आया हूँ।",
    english: "Nor have I come to make a king my servant.",
  },
  "sarga-4-209": {
    meaning: "मुझे इनमें से कुछ नहीं चाहिए; धर्म को बल दीजिए।",
    english: "I want none of these; strengthen dharma instead.",
  },
  "sarga-4-210": {
    meaning: "यदि देना हो, तो कृपा कर मुझे कवच और कुण्डल दीजिए।",
    english: "If you would give, then kindly give me your armor and earrings.",
  },
  "sarga-4-211": {
    meaning: "'कवच और कुण्डल!' यह सुनकर कर्ण के तन में जैसे बिजली छू गई।",
    english: "'Armor and earrings!' It was as if lightning touched Karna's body.",
  },
  "sarga-4-212": {
    meaning: "पर कुछ रहस्य समझकर उसने मन को गंभीर कर लिया।",
    english: "But sensing the mystery, he steadied his mind gravely.",
  },
  "sarga-4-213": {
    meaning: "वह बोला, समझ गया, आप कोई और नहीं, स्वयं इन्द्र हैं।",
    english: "He said: I understand; you are none other than Indra himself.",
  },
  "sarga-4-214": {
    meaning: "आप मेरे तप को नई गति देने प्रसन्न होकर आए हैं।",
    english: "You have come gladly to give my austerity a new direction.",
  },
  "sarga-4-215": {
    meaning: "धन्य है मेरा यश, जिसने आपको धरती पर खींच लाया।",
    english: "Blessed is my fame, which has drawn you down to earth.",
  },
  "sarga-4-216": {
    meaning: "आज सचमुच स्वर्ग भीख माँगने मिट्टी पर आया है।",
    english: "Today, truly, heaven has come to earth to beg.",
  },
  "sarga-4-217": {
    meaning: "क्षमा कीजिए, मैं यह रहस्य तुरंत नहीं जान सका।",
    english: "Forgive me; I could not grasp this secret at once.",
  },
  "sarga-4-218": {
    meaning: "आप छिपकर आए थे, इसलिए पहचान नहीं सका।",
    english: "You came in disguise, so I could not recognize you.",
  },
  "sarga-4-219": {
    meaning: "आपको दीन ब्राह्मण समझकर धन, घर और जमीन लेने को कहा।",
    english: "Taking you for a poor Brahmin, I offered wealth, home, and land.",
  },
  "sarga-4-220": {
    meaning: "वरना मेरे पास देवराज को देने योग्य और था ही क्या?",
    english: "Otherwise, what else did I have that was worthy of the king of gods?",
  },
  "sarga-4-221": {
    meaning: "जिन्हें केवल सुगंध प्रिय है, उन्हें स्थूल मनुष्य क्या दे सकता है?",
    english: "What can a material human give to one who loves only fragrance?",
  },
  "sarga-4-222": {
    meaning: "आकाशवासी देव मिट्टी से भला क्या दान लेंगे?",
    english: "What gift can a sky-dwelling god take from dust?",
  },
  "sarga-4-223": {
    meaning: "फिर भी यदि देवराज भिक्षुक बनकर हाथ फैलाएँ,",
    english: "Yet if the king of gods stretches out his hand as a beggar,",
  },
  "sarga-4-224": {
    meaning: "तो हम इस अवसर को अशुभ क्यों समझें?",
    english: "why should I consider such an opportunity inauspicious?",
  },
  "sarga-4-225": {
    meaning: "इसलिए आपने जो माँगा है, वही दान मैं दूँगा।",
    english: "Therefore, I will give exactly what you have asked.",
  },
  "sarga-4-226": {
    meaning: "शिवि और दधीचि की पंक्ति छोड़कर मैं संसार में अपयश नहीं लूँगा।",
    english: "I will not leave the line of Shibi and Dadhichi and accept dishonor in the world.",
  },
  "sarga-4-227": {
    meaning: "पर कहता हूँ, मुझे असुरक्षित छोड़ते क्यों हैं?",
    english: "But tell me, why leave me defenseless?",
  },
  "sarga-4-228": {
    meaning: "कवच और कुण्डल लेकर मेरे प्राण क्यों छोड़ते हैं?",
    english: "Why take my armor and earrings but leave my life?",
  },
  "sarga-4-229": {
    meaning: "शायद इसलिए कि अर्जुन जीवित रहे और आप सुख पाएँ।",
    english: "Perhaps so that Arjuna may live and you may rejoice.",
  },
  "sarga-4-230": {
    meaning: "उसके अचूक बाण मुझसे टकराकर व्यर्थ न टूटें।",
    english: "So that his unfailing arrows do not break uselessly against me.",
  },
  "sarga-4-231": {
    meaning: "उधर पार्थ की रक्षा स्वयं कृष्ण अनेक प्रकार से करें।",
    english: "On that side, Krishna himself protects Partha in many ways.",
  },
  "sarga-4-232": {
    meaning: "और इधर मैं कवचहीन देह लेकर युद्ध करूँ।",
    english: "And here I must fight with my body emptied of armor.",
  },
  "sarga-4-233": {
    meaning: "जरा सोचिए, क्या यह वीरों के योग्य युद्ध होगा?",
    english: "Think a little: will this be a battle worthy of heroes?",
  },
  "sarga-4-234": {
    meaning: "इस तरह मुझे मारकर अर्जुन कैसे अमर कहलाएगा?",
    english: "By killing me this way, how will Arjuna become immortal in fame?",
  },
  "sarga-4-235": {
    meaning: "एक बाज का पंख तोड़कर दूसरे को निर्भय करना,",
    english: "Breaking one hawk's wing to make another fearless,",
  },
  "sarga-4-236": {
    meaning: "देवताओं को भले शोभे, पर मनुष्यों की नीति को नहीं।",
    english: "may suit the gods, but not human ethics.",
  },
  "sarga-4-237": {
    meaning: "यह तो घायल और निर्बल शरभ पर चढ़कर शिकारी का पद पाना है।",
    english: "This is like earning the hunter's title by mounting a disabled beast.",
  },
  "sarga-4-238": {
    meaning: "यह तो सिंह को विष पिलाकर उस पर पौरुष दिखाना है।",
    english: "It is like showing bravery over a lion after feeding it poison.",
  },
  "sarga-4-239": {
    meaning: "यह तो खुले युद्ध से डरकर मुँह मोड़ना है।",
    english: "This is turning away in fear from open battle.",
  },
  "sarga-4-240": {
    meaning: "जब जीत निश्चित हो जाए, तभी शत्रु के सामने जाना है।",
    english: "It means facing the enemy only after victory is already assured.",
  },
  "sarga-4-241": {
    meaning: "देवराज, जिसे हम भुजबल से नहीं जीत सकते,",
    english: "King of gods, one whom we cannot defeat by strength of arms,",
  },
  "sarga-4-242": {
    meaning: "क्या उसे न्याय छोड़कर छल से मारना उचित है?",
    english: "is it right to kill him by deceit, abandoning justice?",
  },
  "sarga-4-243": {
    meaning: "हार-जीत क्या चीज है? वीरता की असली पहचान युद्ध है।",
    english: "What are defeat and victory? Battle is the true test of heroism.",
  },
  "sarga-4-244": {
    meaning: "सत्य पर टिके रहकर हारने वाला भी सचमुच नहीं हारता।",
    english: "One who stands by truth does not truly lose even in defeat.",
  },
  "sarga-4-245": {
    meaning: "यदि अर्जुन बिना लड़े ही विजय पाने को व्याकुल है,",
    english: "If Arjuna is restless to win without fighting,",
  },
  "sarga-4-246": {
    meaning: "तो इस विजय का एक सरल उपाय मैं बताता हूँ।",
    english: "then I can suggest an easy way to gain such victory.",
  },
  "sarga-4-247": {
    meaning: "उसे कहिए कि मेरी मोम की एक मूर्ति बनवाए।",
    english: "Tell him to have a wax image of me made.",
  },
  "sarga-4-248": {
    meaning: "और उसे काटकर संसार में कर्ण-विजयी कहलाए।",
    english: "Then cut it down and be known in the world as conqueror of Karna.",
  },
  "sarga-4-249": {
    meaning: "युद्ध में वह मुझे किसी और तरह जीत नहीं सकेगा।",
    english: "He will not be able to defeat me in battle by any other means.",
  },
  "sarga-4-250": {
    meaning: "कर्ण-विजय की आशा उसके मन में तड़पती रह जाएगी।",
    english: "The hope of conquering Karna will remain aching in his heart.",
  },
  "sarga-4-251": {
    meaning: "वीरों ने सदा भुजबल से लड़कर विजय पाई है।",
    english: "Heroes have always won by fighting with the strength of their arms.",
  },
  "sarga-4-252": {
    meaning: "मुझे छोड़कर कवच-कुण्डल में सुरक्षित जन्मा कौन था?",
    english: "Except me, who was born protected in armor and earrings?",
  },
  "sarga-4-253": {
    meaning: "मैं ही अपवाद था; आज वह भेद भी मिटाता हूँ।",
    english: "I alone was the exception; today I remove that difference too.",
  },
  "sarga-4-254": {
    meaning: "कवच छोड़कर अपना शरीर सबके समान कर देता हूँ।",
    english: "By giving up the armor, I make my body like everyone else's.",
  },
  "sarga-4-255": {
    meaning: "अच्छा किया कि आप मुझे समतल पर लाने आए।",
    english: "It is good that you came to bring me onto equal ground.",
  },
  "sarga-4-256": {
    meaning: "मेरे दिव्य कवच को हटाकर मुझे सामान्य मनुष्य बनाने आए।",
    english: "You came to remove my divine protection and make me an ordinary man.",
  },
  "sarga-4-257": {
    meaning: "अब संसार नहीं कहेगा कि कर्ण के पास ईश्वरीय बल भी था।",
    english: "Now the world will not say Karna had divine strength too.",
  },
  "sarga-4-258": {
    meaning: "वह इसलिए जीता क्योंकि उसके पास कवच-कुण्डल थे।",
    english: "That he won because he possessed armor and earrings.",
  },
  "sarga-4-259": {
    meaning: "महाराज, किस्मत ने मेरी कौन-सी अवहेलना नहीं की?",
    english: "Lord, what insult has fate not dealt me?",
  },
  "sarga-4-260": {
    meaning: "किस आपत्ति के गड्ढे में उसने मुझे नहीं धकेला?",
    english: "Into what pit of trouble has it not pushed me?",
  },
  "sarga-4-261": {
    meaning: "न जाने कहाँ जन्मा, और पददलित सूत कुल में पला।",
    english: "I was born who knows where, and raised in a trampled Suta household.",
  },
  "sarga-4-262": {
    meaning: "अपमान सहता रहा, प्रोत्साहन के लिए व्याकुल रहा।",
    english: "I bore humiliation and longed in vain for encouragement.",
  },
  "sarga-4-263": {
    meaning: "द्रोण से निराश होकर वन में परशुराम तक दौड़ा।",
    english: "Disappointed by Drona, I ran to Parashurama in the forest.",
  },
  "sarga-4-264": {
    meaning: "बहुत भक्ति की, पर बदले में भयानक शाप पाया।",
    english: "I served with great devotion, but received a terrible curse in return.",
  },
  "sarga-4-265": {
    meaning: "जिस दान के कारण मैं संसार में प्रसिद्ध हुआ,",
    english: "The charity because of which I became famous in the world,",
  },
  "sarga-4-266": {
    meaning: "वही आज विजय के मार्ग में बाधा बनकर सामने आया है।",
    english: "has today come as an obstacle on the path of victory.",
  },
  "sarga-4-267": {
    meaning: "क्या ब्रह्मा के हित मुझे इस तरह छलना उचित था?",
    english: "Was it right, for divine interests, to deceive me in this way?",
  },
  "sarga-4-268": {
    meaning: "यज्ञ में आहुति डालते हुए क्या मुझे ही जलना था?",
    english: "Was I myself to burn while offering into the sacrifice?",
  },
  "sarga-4-269": {
    meaning: "सबको स्नेह की छाया और नई सुविधाएँ मिलीं।",
    english: "Everyone else received the shade of affection and fresh comforts.",
  },
  "sarga-4-270": {
    meaning: "पर नियति मेरे लिए सदा विपत्तियाँ ही भेजती रही।",
    english: "But fate kept sending only adversities for me.",
  },
  "sarga-4-271": {
    meaning: "मैं मन-ही-मन सोचता रहा कि यह रहस्य क्या है।",
    english: "I have kept wondering within: what is this mystery?",
  },
  "sarga-4-272": {
    meaning: "न जाने क्यों विपत्ति मुझे ही खोज-खोजकर घेरती है।",
    english: "Why does adversity search me out and surround me?",
  },
  "sarga-4-273": {
    meaning: "यदि कहें कि यह पूर्व जन्म के पापों का फल है,",
    english: "If it is said this is the fruit of sins from a past birth,",
  },
  "sarga-4-274": {
    meaning: "तो फिर विधाता ने मुझे कवच और कुण्डल क्यों दिए?",
    english: "then why did the creator give me armor and earrings?",
  },
  "sarga-4-275": {
    meaning: "समझ में नहीं आता, ब्रह्मा की माया बहुत जटिल है।",
    english: "I cannot understand; the creator's illusion is very complex.",
  },
  "sarga-4-276": {
    meaning: "सब कुछ पाकर भी मुझे यह भाग्य-दोष क्यों मिला?",
    english: "Why did I receive this flaw of fate even after receiving everything?",
  },
  "sarga-4-277": {
    meaning: "जिससे किसी व्रत का सिद्ध फल मुझे नहीं मिलता।",
    english: "Because of it, no vow of mine bears its proper fruit.",
  },
  "sarga-4-278": {
    meaning: "धर्म मेरे पास आकर भी उलटा प्रभाव कर देता है।",
    english: "Even dharma comes to me and works in reverse.",
  },
  "sarga-4-279": {
    meaning: "गंगा में जन्म लेकर भी मैं गंगा का जल नहीं पी सका।",
    english: "Though born in the Ganga, I could not drink the water of the Ganga.",
  },
  "sarga-4-280": {
    meaning: "सदा सत्कर्म किए, पर चिंता छोड़कर जी नहीं सका।",
    english: "I always did good deeds, yet could never live free from worry.",
  },
  "sarga-4-281": {
    meaning: "न जाने प्रकृति ने मेरी रचना में क्या उद्देश्य रखा था।",
    english: "Who knows what purpose nature had in making me?",
  },
  "sarga-4-282": {
    meaning: "मुझे शूरता, करुणा और धैर्य का घर बनाया।",
    english: "It made me a dwelling of valor, compassion, and patience.",
  },
  "sarga-4-283": {
    meaning: "देवों जैसे गुण देकर न जाने क्या करना चाहा।",
    english: "Giving me godlike virtues, who knows what it intended?",
  },
  "sarga-4-284": {
    meaning: "मुझे धरती पर केवल बाधाओं से लड़ने भेज दिया।",
    english: "It sent me to earth only to fight obstacles.",
  },
  "sarga-4-285": {
    meaning: "फिर कहता हूँ, राधेय यहाँ व्यर्थ नहीं आया है।",
    english: "Still I say, Radheya has not come here in vain.",
  },
  "sarga-4-286": {
    meaning: "वह भी संसार के हित में एक नया संदेश लाया है।",
    english: "He too has brought a new message for the world's good.",
  },
  "sarga-4-287": {
    meaning: "शायद उसे मनुष्यों को नया पाठ सिखाना है।",
    english: "Perhaps he has to teach humanity a new lesson.",
  },
  "sarga-4-288": {
    meaning: "जीवन-विजय के लिए कोई अद्भुत कर्म दिखाना है।",
    english: "He has to show some deed for victory in life.",
  },
  "sarga-4-289": {
    meaning: "वह कर्म यह है कि वीर जो चाहे कर सकता है।",
    english: "That deed is this: a hero can do whatever he wills.",
  },
  "sarga-4-290": {
    meaning: "मनुष्य अपने बल से नियति के माथे पर पाँव रख सकता है।",
    english: "By his own strength, a person can set his foot upon fate's forehead.",
  },
  "sarga-4-291": {
    meaning: "वह कर्म यह है कि शक्ति वंश या कुल में नहीं बसती।",
    english: "That deed is this: power does not dwell in lineage or clan.",
  },
  "sarga-4-292": {
    meaning: "वह सदा वीर पुरुषों की विशाल छाती में बसती है।",
    english: "It dwells in the broad chest of heroic people.",
  },
  "sarga-4-293": {
    meaning: "वह कर्म यह है कि चाहे पूरा संसार शत्रु बन जाए,",
    english: "That deed is this: even if the whole world becomes an enemy,",
  },
  "sarga-4-294": {
    meaning: "धर्म धोखा दे और पुण्य आग बरसाए,",
    english: "even if dharma deceives and virtue rains fire,",
  },
  "sarga-4-295": {
    meaning: "तब भी मनुष्य सत्पथ से नहीं हट सकता।",
    english: "a person still must not move away from the righteous path.",
  },
  "sarga-4-296": {
    meaning: "वह अपने बल से आँधी को धकेलकर आगे बढ़ सकता है।",
    english: "With strength, he can push back the storm and move ahead.",
  },
  "sarga-4-297": {
    meaning: "वह कर्म यह है कि युद्ध में मारो और मरो।",
    english: "That deed is this: in war, strike and be struck down.",
  },
  "sarga-4-298": {
    meaning: "पर जीत के लिए कभी कुपथ पर पाँव मत रखो।",
    english: "But never step onto the wrong path for victory.",
  },
  "sarga-4-299": {
    meaning: "वह कर्म यह है कि सत्य-पथ पर कट जाना स्वीकार करो।",
    english: "That deed is this: accept being cut down on the path of truth.",
  },
  "sarga-4-300": {
    meaning: "पर विजय-तिलक के लिए हाथों में कालिख मत लगाओ।",
    english: "But do not blacken your hands merely to receive victory's mark.",
  },
  "sarga-4-301": {
    meaning: "देवराज, मैं छल, कपट या स्वार्थ साथ नहीं लाया हूँ।",
    english: "King of gods, I have brought no deceit, disguise, or selfishness.",
  },
  "sarga-4-302": {
    meaning: "मैं केवल उनका आदर्श बनने आया हूँ।",
    english: "I have come only to become an ideal for those people.",
  },
  "sarga-4-303": {
    meaning: "जिन्हें अपनी भुजाओं के बल के अलावा कोई सहारा नहीं मिलता।",
    english: "Those who have no support except the strength of their own arms.",
  },
  "sarga-4-304": {
    meaning: "जो किसी लोभ से धर्म छोड़कर छल को नहीं अपनाते।",
    english: "Those who do not abandon dharma for deceit out of greed.",
  },
  "sarga-4-305": {
    meaning: "मैं उन लोगों का आदर्श हूँ जिन्हें कुल का गर्व तिरस्कार करेगा।",
    english: "I am the ideal of those whom family pride will scorn.",
  },
  "sarga-4-306": {
    meaning: "जिन्हें संसार 'नीच वंश में जन्मा' कहकर धिक्कारेगा।",
    english: "Those whom the world will condemn as born in a low lineage.",
  },
  "sarga-4-307": {
    meaning: "जो समाज की असमानता की आग में चारों ओर जलेंगे।",
    english: "Those who will burn on all sides in society's unequal fire.",
  },
  "sarga-4-308": {
    meaning: "और हर कदम पर बाधा सहते हुए असीम आगे बढ़ेंगे।",
    english: "And yet move endlessly forward, bearing obstacles at every step.",
  },
  "sarga-4-309": {
    meaning: "मैं उन लोगों का आदर्श हूँ जो अपनी पीड़ा कहीं खोल नहीं सकेंगे।",
    english: "I am the ideal of those who will not be able to reveal their pain anywhere.",
  },
  "sarga-4-310": {
    meaning: "संसार पूछेगा, पर वे पिता का नाम नहीं बता सकेंगे।",
    english: "The world will ask, yet they will not be able to name their father.",
  },
  "sarga-4-311": {
    meaning: "जिनका पूरे संसार में कहीं कोई अपना नहीं होगा।",
    english: "Those who will have no one of their own anywhere in the world.",
  },
  "sarga-4-312": {
    meaning: "जो मन में उमंग लिए बहुत समय तक तड़पते रहेंगे।",
    english: "Those who, carrying aspiration within, will ache for a long time.",
  },
  "sarga-4-313": {
    meaning: "मैं उनका आदर्श हूँ, जो तनिक भी नहीं घबराएँगे।",
    english: "I am the ideal of those who will not panic even a little.",
  },
  "sarga-4-314": {
    meaning: "जो अपने चरित्र-बल से समाज में विशिष्ट स्थान पाएँगे।",
    english: "Those who will earn a special place in society through strength of character.",
  },
  "sarga-4-315": {
    meaning: "सिंहासन ही नहीं, स्वर्ग भी उन्हें देखकर झुकेगा।",
    english: "Not only thrones, even heaven will bow on seeing them.",
  },
  "sarga-4-316": {
    meaning: "धर्म के लिए धन और घर लुटा देना जिनका व्रत होगा।",
    english: "Their vow will be to give away wealth and home for dharma.",
  },
  "sarga-4-317": {
    meaning: "जो श्रम से विमुख नहीं होंगे और दुख से नहीं डरेंगे।",
    english: "Those who will not turn away from labor or fear suffering.",
  },
  "sarga-4-318": {
    meaning: "जो सुख के लिए पाप से कभी समझौता नहीं करेंगे।",
    english: "Those who will never compromise with sin for comfort.",
  },
  "sarga-4-319": {
    meaning: "धरती पर कर्ण-धर्म होगा कि बलिदान से पीछे न हटना।",
    english: "On earth, Karna's dharma will be never to shrink from sacrifice.",
  },
  "sarga-4-320": {
    meaning: "जिस तेज से जियो, उसी शान से मरना।",
    english: "To die with the same splendor with which one lived.",
  },
  "sarga-4-321": {
    meaning: "मेरी भुजाओं के अलावा मुझे किसी और सहारे का भरोसा नहीं।",
    english: "Apart from my arms, I rely on no other support.",
  },
  "sarga-4-322": {
    meaning: "हाँ, इस कवच और कुण्डल पर भी बड़ा भरोसा था।",
    english: "Yes, I had great confidence in this armor and earrings.",
  },
  "sarga-4-323": {
    meaning: "पर आज उनसे भी अपना संबंध दूर कर लेता हूँ।",
    english: "But today I sever my bond with them too.",
  },
  "sarga-4-324": {
    meaning: "देवराज, लीजिए, मैं खुशी से यह महादान देता हूँ।",
    english: "King of gods, take them; I gladly offer this supreme gift.",
  },
  "sarga-4-325": {
    meaning: "यह कर्ण का जीवन और कुरुराज की जीत भी लीजिए।",
    english: "Take Karna's life, and with it the victory of the Kuru king.",
  },
  "sarga-4-326": {
    meaning: "अपने पुत्र की उन्नति के लिए यह स्वर्ण-सी अनोखी सीढ़ी लीजिए।",
    english: "Take this golden, unmatched ladder for your son's rise.",
  },
  "sarga-4-327": {
    meaning: "यह पांडवों के भय और महाभारत के परिणाम का कारण है।",
    english: "This is the cause of the Pandavas' fear and the outcome of the Mahabharata.",
  },
  "sarga-4-328": {
    meaning: "यह किसी दानी जीवन के कठोर व्रत का अंतिम मूल्य है।",
    english: "This is the final price of a giver's terrible vow.",
  },
  "sarga-4-329": {
    meaning: "संसार में जीवन देकर विजय खरीदने की रीति है।",
    english: "In the world, victory is bought by giving life.",
  },
  "sarga-4-330": {
    meaning: "प्राण बचाकर कोई विजय का दान नहीं करता।",
    english: "No one gives victory while keeping life safe.",
  },
  "sarga-4-331": {
    meaning: "पर आज मैं प्राण रखते हुए अपना प्रण निभा रहा हूँ।",
    english: "But today I uphold my vow while keeping my life.",
  },
  "sarga-4-332": {
    meaning: "पूर्णाहुति के लिए विजय को ही हवन में डाल रहा हूँ।",
    english: "For the final offering, I cast victory itself into the sacrificial fire.",
  },
  "sarga-4-333": {
    meaning: "देवराज, जीवन में अब और कौन-सी कीर्ति लूँगा?",
    english: "King of gods, what further fame could I gain in life?",
  },
  "sarga-4-334": {
    meaning: "इससे बढ़कर अनुपम दान मैं किसे और क्या दूँगा?",
    english: "What greater incomparable gift could I give, and to whom?",
  },
  "sarga-4-335": {
    meaning: "अब जाकर कहिए कि पुत्र, मैं व्यर्थ नहीं आया।",
    english: "Now go and say: Son, I did not come in vain.",
  },
  "sarga-4-336": {
    meaning: "अर्जुन, मैं तेरे लिए कर्ण से विजय माँग लाया हूँ।",
    english: "Arjuna, I have begged victory from Karna for you.",
  },
  "sarga-4-337": {
    meaning: "एक विनती और है: जब आप अमर-लोक लौटें,",
    english: "I have one more request: when you return to the immortal realm,",
  },
  "sarga-4-338": {
    meaning: "सत्य के हित में यह सूचना ब्रह्मा को दे दीजिए।",
    english: "for truth's sake, give this message to Brahma.",
  },
  "sarga-4-339": {
    meaning: "जिस युद्ध के लिए पृथ्वी का जन-जन उद्वेलित है,",
    english: "The war for which every person on earth is stirred,",
  },
  "sarga-4-340": {
    meaning: "वह कुरुक्षेत्र में अभी शुरू भी नहीं हुआ है।",
    english: "has not even begun yet in Kurukshetra.",
  },
  "sarga-4-341": {
    meaning: "पर दो वीरों ने पहले ही आपस में निपटारा कर लिया है।",
    english: "Yet two heroes have already settled it between themselves.",
  },
  "sarga-4-342": {
    meaning: "इस युद्ध में राधेय विजयी हुआ और अर्जुन हार गया।",
    english: "Radheya has won, and Arjuna has lost this war.",
  },
  "sarga-4-343": {
    meaning: "यह कहकर कर्ण ने कृपाण उठाई और क्षण भर में त्वचा चीर दी।",
    english: "Saying this, Karna raised his blade and in a moment cut his skin.",
  },
  "sarga-4-344": {
    meaning: "कवच और कुण्डल उतारकर इन्द्र के हाथों में रख दिए।",
    english: "He removed the armor and earrings and placed them in Indra's hands.",
  },
  "sarga-4-345": {
    meaning: "वन-कुंजों में पक्षी भय और आश्चर्य से चहचहा उठे।",
    english: "In the groves, birds cried out in fear and wonder.",
  },
  "sarga-4-346": {
    meaning: "यह दृश्य देखकर दिशाएँ भय से स्तब्ध रह गईं।",
    english: "Seeing this sight, the directions stood stunned with fear.",
  },
  "sarga-4-347": {
    meaning: "आघात सह न सके, सूर्य बादल में छिप गए।",
    english: "Unable to bear the blow, the sun slipped behind a cloud.",
  },
  "sarga-4-348": {
    meaning: "गंभीर आकाश में 'साधु-साधु' की मंद्र ध्वनि गूँज उठी।",
    english: "A deep sound of 'well done, well done' echoed in the solemn sky.",
  },
  "sarga-4-349": {
    meaning: "अपना काम सोचकर और कर्ण का अद्भुत कर्म देखकर,",
    english: "Thinking of his own deed and seeing Karna's extraordinary act,",
  },
  "sarga-4-350": {
    meaning: "देवराज का मुख ग्लानि से काला पड़ गया।",
    english: "Indra's face darkened with shame.",
  },
  "sarga-4-351": {
    meaning: "भीगा हुआ कवच लिए वे किसी चिंता में डूबे से रह गए।",
    english: "Holding the blood-wet armor, he stood sunk in thought.",
  },
  "sarga-4-352": {
    meaning: "इन्द्र जड़ता में ठगे-से वैसे ही रह गए।",
    english: "Indra remained as he was, stunned and motionless.",
  },
  "sarga-4-353": {
    meaning: "जब पाप मनुष्य के हाथ से निकलकर सिर पर छा जाता है,",
    english: "When sin leaves a person's hand and spreads over his head,",
  },
  "sarga-4-354": {
    meaning: "तब सचमुच प्राणों का दाह सहा नहीं जाता।",
    english: "then truly the burning of the soul becomes unbearable.",
  },
  "sarga-4-355": {
    meaning: "इन्द्र अहंकार में सरल मनुष्य को छलने आए थे।",
    english: "Indra had come in pride to deceive a simple man.",
  },
  "sarga-4-356": {
    meaning: "वे त्याग के महान तेज के सामने जलने नहीं आए थे।",
    english: "He had not come to burn before the great radiance of sacrifice.",
  },
  "sarga-4-357": {
    meaning: "पर कर्ण की बलि का बाण उनके हृदय में लग गया।",
    english: "But the arrow of Karna's sacrifice struck his heart.",
  },
  "sarga-4-358": {
    meaning: "बहुत देर तक इन्द्र विस्मय में डूबे मौन रहे।",
    english: "For a long time Indra remained silent, absorbed in wonder.",
  },
  "sarga-4-359": {
    meaning: "आखिर सिर झुकाकर वे बोले, अब मैं क्या कहूँ?",
    english: "At last, bowing his head, he said: what can I say now?",
  },
  "sarga-4-360": {
    meaning: "ऐसा पाप करके भी मैं चुप कैसे रहूँ?",
    english: "After committing such a sin, how can I remain silent?",
  },
  "sarga-4-361": {
    meaning: "पुत्र, तुमने सत्य पहचान लिया; मैं ही इन्द्र हूँ।",
    english: "Son, you recognized the truth; I am indeed Indra.",
  },
  "sarga-4-362": {
    meaning: "पर देवत्व भूलकर मैं तुम्हें प्रणाम करता हूँ।",
    english: "But forgetting my godhood, I bow to you.",
  },
  "sarga-4-363": {
    meaning: "आज मैंने धरती पर वह देखा जो पहले कभी नहीं देखा था।",
    english: "Today on earth I have seen what I had never seen before.",
  },
  "sarga-4-364": {
    meaning: "आज तुला में धरती नीचे नहीं, स्वर्ग से ऊपर है।",
    english: "Today, in the scale, earth stands not below but above heaven.",
  },
  "sarga-4-365": {
    meaning: "मैं क्या कहकर तुम्हें सांत्वना दूँ? जीभ काँपती है, प्राण हिलते हैं।",
    english: "How shall I console you? My tongue trembles, my life itself shakes.",
  },
  "sarga-4-366": {
    meaning: "क्षमा माँगने के लिए भी मुझे शब्द नहीं मिलते।",
    english: "I cannot even find words to ask forgiveness.",
  },
  "sarga-4-367": {
    meaning: "कर्ण, मुझे पवित्र चरण-धूलि दो; मेरे लिए दूसरा उपाय नहीं।",
    english: "Karna, give me your sacred foot-dust; I have no other recourse.",
  },
  "sarga-4-368": {
    meaning: "मेरी बुद्धि पहले भी भ्रमित थी और अब भी भँवर में फँसी है।",
    english: "My mind was confused before and is still caught in a whirlpool.",
  },
  "sarga-4-369": {
    meaning: "मैं नहीं जानता था कि यह छल इतना विनाशकारी होगा।",
    english: "I did not know this deception would be so destructive.",
  },
  "sarga-4-370": {
    meaning: "कवच-कुण्डल का दान इतना हृदय-विदारक होगा।",
    english: "That the gift of armor and earrings would be so heart-rending.",
  },
  "sarga-4-371": {
    meaning: "मेरे मन का पाप धुएँ की तरह मुझ पर ही घिर आएगा।",
    english: "The sin in my heart will gather over me like smoke.",
  },
  "sarga-4-372": {
    meaning: "तुम्हें भेदने वाला वज्र तुरंत मुझ पर ही आ गिरेगा।",
    english: "The thunderbolt meant to pierce you will fall back upon me.",
  },
  "sarga-4-373": {
    meaning: "तुम्हारे महान तेज के सामने मैं मलिन हो रहा हूँ।",
    english: "Before your great radiance, I grow stained and dim.",
  },
  "sarga-4-374": {
    meaning: "कर्ण, सचमुच आज मैं स्वयं को बहुत छोटा पाता हूँ।",
    english: "Karna, truly, today I find myself very small.",
  },
  "sarga-4-375": {
    meaning: "हाय, अपनी लघुता मुझे कभी ऐसी नहीं खली थी।",
    english: "Alas, my smallness had never pained me like this before.",
  },
  "sarga-4-376": {
    meaning: "दानी, आज तुम्हारी छाया भी मुझसे अधिक दिव्य है।",
    english: "O giver, today even your shadow is more divine than I am.",
  },
  "sarga-4-377": {
    meaning: "मैं तिनके की तरह विवश डूबता, उगता, बहता और उतराता हूँ।",
    english: "Like a blade of grass, I helplessly sink, rise, drift, and float.",
  },
  "sarga-4-378": {
    meaning: "तुम्हारे शील-सागर की गहराई का पता नहीं लगा पाता।",
    english: "I cannot fathom the depth of your ocean of character.",
  },
  "sarga-4-379": {
    meaning: "मन-ही-मन घूम रहा हूँ, पर किनारा नहीं मिलता।",
    english: "I keep circling within myself, but find no shore.",
  },
  "sarga-4-380": {
    meaning: "परीक्षा पूरी हुई; सचमुच मनुष्य जीता और देव हार गया।",
    english: "The test is complete; truly, man has won and the god has lost.",
  },
  "sarga-4-381": {
    meaning: "हाँ, पुत्र-प्रेम में पड़कर मैं छल करने ही आया था।",
    english: "Yes, driven by love for my son, I had come to deceive you.",
  },
  "sarga-4-382": {
    meaning: "जान-बूझकर तुमसे कवच और कुण्डल छीनने आया था।",
    english: "I knowingly came to take your armor and earrings from you.",
  },
  "sarga-4-383": {
    meaning: "यह छल प्रसिद्ध होगा; अब मैं कौन-सा मुँह दिखाऊँगा?",
    english: "This deceit will become known; what face shall I show now?",
  },
  "sarga-4-384": {
    meaning: "ब्राह्मण बनकर आया था, चोर बनकर लौटूँगा।",
    english: "I came as a Brahmin and will return as a thief.",
  },
  "sarga-4-385": {
    meaning: "कर्ण, तुम वंदनीय हो; तुम्हारा तीव्र तेज देखकर,",
    english: "Karna, you are worthy of worship; seeing your fierce radiance,",
  },
  "sarga-4-386": {
    meaning: "आते ही मेरा देवत्वपूर्ण मन काँप उठा था।",
    english: "my divine heart trembled as soon as I came.",
  },
  "sarga-4-387": {
    meaning: "पर अब तुम्हें देखकर मन और अधिक डर रहा है।",
    english: "But now, seeing you, my heart grows even more afraid.",
  },
  "sarga-4-388": {
    meaning: "मेरा हृदय सिमटकर अपने-आप मरता जा रहा है।",
    english: "My heart shrinks and seems to die within itself.",
  },
  "sarga-4-389": {
    meaning: "तुम मुझे उज्ज्वल प्रकाश के अचल पर्वत जैसे दिखाई देते हो।",
    english: "You appear to me like a fixed mountain of bright light.",
  },
  "sarga-4-390": {
    meaning: "करोड़ों जन्मों के संचित महापुण्य के फल जैसे।",
    english: "Like the fruit of great virtue gathered over countless births.",
  },
  "sarga-4-391": {
    meaning: "तीनों लोकों में जिन असंख्य योगियों का प्रकाश जगता है,",
    english: "The light of countless yogis that shines through the three worlds,",
  },
  "sarga-4-392": {
    meaning: "उन सबके संचित रूप जैसे तुम मुझे लगते हो।",
    english: "you seem like their collected form.",
  },
  "sarga-4-393": {
    meaning: "मुझे आकाश में तुम्हारे पीछे जगन्नियंता खड़े दिखते हैं।",
    english: "Behind you in the sky I see the ruler of the universe standing.",
  },
  "sarga-4-394": {
    meaning: "वे तुम्हें प्रेम से ज्योतिर्मय आलिंगन में लिए हैं।",
    english: "He holds you lovingly in a radiant embrace.",
  },
  "sarga-4-395": {
    meaning: "तुम्हारे दान, धर्म, असंख्य व्रत, योग, यज्ञ और तप,",
    english: "Your charity, dharma, countless vows, yoga, sacrifice, and austerity,",
  },
  "sarga-4-396": {
    meaning: "सब प्रकाश बनकर तुम्हें चारों ओर से घेरे खड़े हैं।",
    english: "all stand around you as light.",
  },
  "sarga-4-397": {
    meaning: "धरती तुम्हें गोद में लेकर मग्न होकर इठलाती है।",
    english: "The earth, holding you in her lap, delights with pride.",
  },
  "sarga-4-398": {
    meaning: "माथा सूँघकर कहती है कि यह मेरा अपना है।",
    english: "Smelling your head, she declares you her own.",
  },
  "sarga-4-399": {
    meaning: "इसने मेरे असंख्य दुखी पुत्रों का दुख मिटाया है।",
    english: "He has erased the suffering of my countless afflicted children.",
  },
  "sarga-4-400": {
    meaning: "यह सूर्यपुत्र नहीं, यह मेरी दुखिया धरती का बेटा कर्ण है।",
    english: "He is not merely the son of the sun; Karna is the son of suffering earth.",
  },
  "sarga-4-401": {
    meaning: "तुम दानी हो, मैं कुटिल छल करने वाला; तुम पवित्र हो, मैं पापी।",
    english: "You are the giver, I the crooked deceiver; you are pure, I sinful.",
  },
  "sarga-4-402": {
    meaning: "तुम देकर भी सुखी हो और मैं लेकर भी दुखी हूँ।",
    english: "You are happy even after giving; I am tormented even after receiving.",
  },
  "sarga-4-403": {
    meaning: "कर्ण, जहाँ तुम पहुँचे हो, वहाँ देवत्व भी नहीं जा सकता।",
    english: "Karna, where you have reached, even godhood cannot go.",
  },
  "sarga-4-404": {
    meaning: "ऐसे महान पद को केवल कोई मनुष्य ही पा सकता है।",
    english: "Only a human being can attain such a great state.",
  },
  "sarga-4-405": {
    meaning: "कर्ण, मैं तुम्हारा यह रूप अब और नहीं देख सकता।",
    english: "Karna, I cannot keep looking at this form of yours.",
  },
  "sarga-4-406": {
    meaning: "मेरा जागा हुआ भयानक पाप मुझे काट रहा है।",
    english: "My awakened terrible sin is cutting into me.",
  },
  "sarga-4-407": {
    meaning: "तुम्हारे पवित्र स्वरूप में जितना अधिक डूबता हूँ,",
    english: "The more I sink into your sacred form,",
  },
  "sarga-4-408": {
    meaning: "उतना ही मैं स्वयं को और अधिक बर्बर समझता हूँ।",
    english: "the more barbaric I seem to myself.",
  },
  "sarga-4-409": {
    meaning: "इसलिए कर्ण, कृपा करके मुझे तुरंत यहाँ से जाने दो।",
    english: "Therefore, Karna, please let me leave here at once.",
  },
  "sarga-4-410": {
    meaning: "अपने इस दुर्दम्य तेज से मुझे बचने दो।",
    english: "Let me find protection from this unconquerable radiance of yours.",
  },
  "sarga-4-411": {
    meaning: "पर विदा देने से पहले एक कृपा कर दो।",
    english: "But before you send me away, grant me one kindness.",
  },
  "sarga-4-412": {
    meaning: "मुझ निष्ठुर से भी कोई वर माँग लो।",
    english: "Ask even this cruel one for some boon.",
  },
  "sarga-4-413": {
    meaning: "कर्ण ने कहा, आज सब कुछ देकर मैं धन्य हुआ।",
    english: "Karna said: by giving everything today, I am blessed.",
  },
  "sarga-4-414": {
    meaning: "देवराज, अब नया वरदान लेकर क्या होगा?",
    english: "King of gods, what use is a new boon now?",
  },
  "sarga-4-415": {
    meaning: "बस आशीर्वाद दीजिए कि धर्म में मेरा भाव अचल रहे।",
    english: "Just bless me that my feeling for dharma remains firm.",
  },
  "sarga-4-416": {
    meaning: "वही मेरा छत्र, वही मुकुट, वही कवच-कुण्डल हो।",
    english: "Let that be my umbrella, crown, armor, and earrings.",
  },
  "sarga-4-417": {
    meaning: "इन्द्र बोले, कर्ण, यदि धर्म तुम्हें छोड़ देगा,",
    english: "Indra said: Karna, if dharma leaves you,",
  },
  "sarga-4-418": {
    meaning: "तो अपनी रक्षा के लिए वह नया संबंध कहाँ जोड़ेगा?",
    english: "where will it find a new alliance for its own protection?",
  },
  "sarga-4-419": {
    meaning: "और पुत्र, तुम धर्म को किस भय से छोड़ोगे?",
    english: "And son, out of what fear would you leave dharma?",
  },
  "sarga-4-420": {
    meaning: "अभी-अभी तुमने उसे विजय से इतना ऊपर रखा है।",
    english: "You have just placed it so far above victory.",
  },
  "sarga-4-421": {
    meaning: "मैंने तुमसे धर्म नहीं छीना, बल्कि वह वस्तु छीनी है।",
    english: "I have not taken dharma from you, but I have taken that thing from you.",
  },
  "sarga-4-422": {
    meaning: "जिससे छलपूर्वक आघात कर तुम्हें असहाय किया है।",
    english: "By striking through deceit, I have made you helpless.",
  },
  "sarga-4-423": {
    meaning: "मैं चाहता हूँ कि उस असहायता को दूर या कम कर दूँ।",
    english: "I wish to remove or at least lessen that helplessness.",
  },
  "sarga-4-424": {
    meaning: "पर तुम अपनी इच्छा से मेरी यह आशा पूरी नहीं होने दोगे।",
    english: "But of your own will, you will not let me fulfill this hope.",
  },
  "sarga-4-425": {
    meaning: "तुम कुछ नहीं माँगते, पर मुझे अवश्य कुछ देना है।",
    english: "You ask for nothing, yet I must give something.",
  },
  "sarga-4-426": {
    meaning: "मुझे अपने मन का कठिन बोझ थोड़ा हल्का करना है।",
    english: "I must lighten the heavy burden on my heart a little.",
  },
  "sarga-4-427": {
    meaning: "यह अमोघ अस्त्र लो; यह काल को भी निगल सकता है।",
    english: "Take this unfailing weapon; it can devour even Time.",
  },
  "sarga-4-428": {
    meaning: "इसका कोई भी प्रहार किसी पर व्यर्थ नहीं जा सकता।",
    english: "No strike from it can fail against anyone.",
  },
  "sarga-4-429": {
    meaning: "लेकिन तुम इससे केवल एक बार ही काम ले पाओगे।",
    english: "But you will be able to use it only once.",
  },
  "sarga-4-430": {
    meaning: "फिर यह तुरंत लौटकर मेरे पास आ जाएगा।",
    english: "After that, it will immediately return to me.",
  },
  "sarga-4-431": {
    meaning: "इसलिए पुत्र, चंचल होकर इसे कभी व्यर्थ मत चलाना।",
    english: "Therefore, child, never use it uselessly in haste.",
  },
  "sarga-4-432": {
    meaning: "इसका उपयोग तभी करना जब तुम्हारे पास कोई और बल न बचे।",
    english: "Use it only when no other strength remains to you.",
  },
  "sarga-4-433": {
    meaning: "दानवीर, तुम्हारी जय हो; सब लोग तुम्हारी महिमा गाएँ।",
    english: "Victory to you, giver-hero; may all people sing your glory.",
  },
  "sarga-4-434": {
    meaning: "देव और मनुष्य दोनों तुम्हारा चरित्र अपनाएँ।",
    english: "May gods and humans alike adopt your character.",
  },
  "sarga-4-435": {
    meaning: "अमोघ बाण का दान देकर देवराज आकाश को चले गए।",
    english: "Giving the unfailing arrow, Indra departed for the sky.",
  },
  "sarga-4-436": {
    meaning: "और कर्ण अपने व्रत का अंतिम मूल्य चुकाकर घर लौट गया।",
    english: "And Karna, having paid the final price of his vow, returned home.",
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

console.log("Seeded Hindi meanings and English translations for sarga-4 lines 1-436.");
