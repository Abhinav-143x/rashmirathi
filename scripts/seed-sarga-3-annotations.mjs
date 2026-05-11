import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const files = [
  path.join(ROOT, "content", "sarga-3.json"),
  path.join(ROOT, "public", "content", "sarga-3.json"),
];

const annotations = {
  "sarga-3-1": {
    meaning: "पांडवों का अज्ञातवास पूरा हो गया।",
    english: "The Pandavas' period of incognito exile came to an end.",
  },
  "sarga-3-2": {
    meaning: "वे वन से आत्मविश्वास और प्रसन्नता के साथ लौटे।",
    english: "They returned from the forest with confidence and cheer.",
  },
  "sarga-3-3": {
    meaning: "जैसे सोना आग में तपकर और शुद्ध हो जाता है, वैसे ही वे कठिनाइयों से निखर आए।",
    english: "Like gold purified in fire, they emerged refined by hardship.",
  },
  "sarga-3-4": {
    meaning: "उनका वीरत्व पहले से भी अधिक तेज और प्रखर हो गया।",
    english: "Their heroism had become even sharper and brighter.",
  },
  "sarga-3-5": {
    meaning: "उनकी नस-नस में तेज और शक्ति का प्रवाह था।",
    english: "A current of vigor and brilliance flowed through every vein.",
  },
  "sarga-3-6": {
    meaning: "उनके भीतर नया उत्साह और नई ऊर्जा भरी हुई थी।",
    english: "They carried a fresh enthusiasm and renewed energy within them.",
  },
  "sarga-3-7": {
    meaning: "सच है कि जब विपत्ति आती है,",
    english: "It is true that when adversity arrives,",
  },
  "sarga-3-8": {
    meaning: "वह सबसे पहले कायर मनुष्य को ही डरा देती है।",
    english: "it is the coward whom it frightens first.",
  },
  "sarga-3-9": {
    meaning: "वीर लोग कठिनाई देखकर घबराते नहीं हैं।",
    english: "The brave do not tremble before difficulty.",
  },
  "sarga-3-10": {
    meaning: "वे एक क्षण के लिए भी अपना धैर्य नहीं खोते।",
    english: "They do not lose patience even for a moment.",
  },
  "sarga-3-11": {
    meaning: "वे बाधाओं को स्वीकार करके उनका सामना करते हैं।",
    english: "They embrace obstacles and face them directly.",
  },
  "sarga-3-12": {
    meaning: "काँटों के बीच भी वे अपने लिए रास्ता बना लेते हैं।",
    english: "Even among thorns, they carve out a path.",
  },
  "sarga-3-13": {
    meaning: "वे कभी मुँह से शिकायत या आह नहीं निकालते।",
    english: "They never let complaint or a groan escape their lips.",
  },
  "sarga-3-14": {
    meaning: "वे संकट के आगे झुकते या उससे विनती नहीं करते।",
    english: "They do not bow before crisis or beg it for mercy.",
  },
  "sarga-3-15": {
    meaning: "जो भी कठिनाई सामने आती है, वे उसे सह लेते हैं।",
    english: "Whatever hardship comes before them, they endure it.",
  },
  "sarga-3-16": {
    meaning: "वे हमेशा कर्म और प्रयास में लगे रहते हैं।",
    english: "They remain constantly devoted to effort and action.",
  },
  "sarga-3-17": {
    meaning: "वे कष्टों की जड़ मिटाने के लिए आगे बढ़ते हैं।",
    english: "They move forward to uproot the source of suffering.",
  },
  "sarga-3-18": {
    meaning: "वे स्वयं आगे जाकर विपत्ति पर छा जाते हैं।",
    english: "They advance themselves and overpower adversity.",
  },
  "sarga-3-19": {
    meaning: "दुनिया में ऐसा कौन-सा विघ्न है,",
    english: "What obstacle exists in this world,",
  },
  "sarga-3-20": {
    meaning: "जो किसी वीर मनुष्य के मार्ग में टिक सके?",
    english: "that can remain standing in the path of a brave person?",
  },
  "sarga-3-21": {
    meaning: "जब मनुष्य कमर कसकर पूरी शक्ति से धक्का देता है,",
    english: "When a person braces himself and pushes with full force,",
  },
  "sarga-3-22": {
    meaning: "तब पर्वतों के भी पैर उखड़ जाते हैं।",
    english: "even mountains seem to lose their footing.",
  },
  "sarga-3-23": {
    meaning: "जब मनुष्य सचमुच जोर लगाता है,",
    english: "When human beings truly exert their strength,",
  },
  "sarga-3-24": {
    meaning: "तब कठोर पत्थर भी पानी जैसा नरम हो जाता है।",
    english: "even stone turns soft like water.",
  },
  "sarga-3-25": {
    meaning: "मनुष्य के भीतर एक से बढ़कर एक तेजस्वी गुण छिपे हैं।",
    english: "Within humans lie many brilliant qualities, one greater than another.",
  },
  "sarga-3-26": {
    meaning: "ये गुण भीतर गहराई में छिपे रहते हैं।",
    english: "These qualities remain hidden deep inside.",
  },
  "sarga-3-27": {
    meaning: "जैसे मेंहदी के भीतर लाल रंग छिपा होता है।",
    english: "Just as redness lies hidden within henna.",
  },
  "sarga-3-28": {
    meaning: "और दीपक की बत्ती के भीतर प्रकाश की संभावना छिपी होती है।",
    english: "And as light lies waiting within the lamp's wick.",
  },
  "sarga-3-29": {
    meaning: "जो बत्ती को जलाता ही नहीं,",
    english: "One who never lights the wick,",
  },
  "sarga-3-30": {
    meaning: "वह प्रकाश प्राप्त नहीं कर सकता।",
    english: "can never receive its light.",
  },
  "sarga-3-31": {
    meaning: "जब गन्ने को पीसा जाता है,",
    english: "When the sugarcane stalk is crushed,",
  },
  "sarga-3-32": {
    meaning: "तभी उसमें से लगातार रस की धारा निकलती है।",
    english: "only then does an unbroken stream of juice flow out.",
  },
  "sarga-3-33": {
    meaning: "जब मेंहदी चोट और पिसाई सहती है,",
    english: "When henna bears blows and grinding,",
  },
  "sarga-3-34": {
    meaning: "तभी वह स्त्रियों का सुंदर श्रृंगार बनती है।",
    english: "only then does it become beautiful adornment.",
  },
  "sarga-3-35": {
    meaning: "जब फूलों को पिरोया जाता है,",
    english: "When flowers are threaded together,",
  },
  "sarga-3-36": {
    meaning: "तभी हम उन्हें माला बनाकर गले लगाते हैं।",
    english: "only then do we wear them lovingly around the neck.",
  },
  "sarga-3-37": {
    meaning: "धरती का नेता कौन बना?",
    english: "Who has become a leader of the earth?",
  },
  "sarga-3-38": {
    meaning: "भूमि के बड़े हिस्सों का विजेता कौन हुआ?",
    english: "Who has become a conqueror of lands?",
  },
  "sarga-3-39": {
    meaning: "अतुलनीय यश को पाने वाला कौन हुआ?",
    english: "Who has earned incomparable fame?",
  },
  "sarga-3-40": {
    meaning: "नए धर्म या नई व्यवस्था का प्रवर्तक कौन हुआ?",
    english: "Who has founded a new order or way of life?",
  },
  "sarga-3-41": {
    meaning: "वही जिसने कभी आराम को जीवन का लक्ष्य नहीं बनाया।",
    english: "Only the one who never made comfort the aim of life.",
  },
  "sarga-3-42": {
    meaning: "जिसने बाधाओं के बीच रहकर अपना नाम कमाया।",
    english: "The one who made a name while living amid obstacles.",
  },
  "sarga-3-43": {
    meaning: "जब बाधाएँ सामने आती हैं,",
    english: "When obstacles stand before us,",
  },
  "sarga-3-44": {
    meaning: "वे हमें सोई हुई अवस्था से जगा देती हैं।",
    english: "they wake us from sleep.",
  },
  "sarga-3-45": {
    meaning: "वे हर क्षण मन को मथती और कसती रहती हैं।",
    english: "They twist and test the mind every moment.",
  },
  "sarga-3-46": {
    meaning: "वे हर क्षण शरीर को झकझोरती रहती हैं।",
    english: "They shake the body again and again.",
  },
  "sarga-3-47": {
    meaning: "वे हमें सही मार्ग की ओर लगाकर ही छोड़ती हैं।",
    english: "They leave us only after turning us toward the right path.",
  },
  "sarga-3-48": {
    meaning: "वे हमें पूरी तरह जागृत करके ही जाती हैं।",
    english: "They depart only after awakening us fully.",
  },
  "sarga-3-49": {
    meaning: "बगीचा और वन एक जैसे नहीं होते।",
    english: "A garden and a forest are not the same.",
  },
  "sarga-3-50": {
    meaning: "आराम और युद्ध भी एक जैसे नहीं होते।",
    english: "Comfort and battle are not the same.",
  },
  "sarga-3-51": {
    meaning: "लगातार वर्षा, आँधी और कठोर धूप,",
    english: "Rain, storms, and relentless heat,",
  },
  "sarga-3-52": {
    meaning: "ये सब पुरुषार्थ को जगाने वाले प्रचंड साधन हैं।",
    english: "are fierce instruments that awaken human effort.",
  },
  "sarga-3-53": {
    meaning: "फूल तो वन में भी खिल जाते हैं।",
    english: "Flowers may bloom even in the forest.",
  },
  "sarga-3-54": {
    meaning: "लेकिन विशाल शाल वृक्ष आरामदेह बागों में नहीं मिलते।",
    english: "But mighty sal trees are not found in comfortable gardens.",
  },
  "sarga-3-55": {
    meaning: "जिनकी सुंदर सेज कंकड़ों पर ही बनती है,",
    english: "Those whose fine bed is made upon pebbles,",
  },
  "sarga-3-56": {
    meaning: "जिन्हें केवल आकाश ही छाया देता है,",
    english: "and for whom only the sky gives shade,",
  },
  "sarga-3-57": {
    meaning: "जिन्हें विपत्तियाँ ही पोषण देती हैं,",
    english: "whom adversities themselves nourish,",
  },
  "sarga-3-58": {
    meaning: "और आँधियाँ ही जिन्हें लोरी सुनाती हैं।",
    english: "and storms themselves lull to rest.",
  },
  "sarga-3-59": {
    meaning: "जो लाक्षागृह जैसी आग में जलकर तपते हैं,",
    english: "Those who burn and are tested in a lacquer-house fire,",
  },
  "sarga-3-60": {
    meaning: "वही सच्चे शूरवीर बनकर निकलते हैं।",
    english: "they alone emerge as true heroes.",
  },
  "sarga-3-61": {
    meaning: "हे युवा वीर, तू विपत्तियों से आगे बढ़कर उन पर विजय पा।",
    english: "Young hero, rise above adversities and conquer them.",
  },
  "sarga-3-62": {
    meaning: "कवि अपने ताजे और उत्साही किशोर को पुकारकर प्रेरित करता है।",
    english: "The poet calls to the fresh, spirited youth and urges him onward.",
  },
  "sarga-3-63": {
    meaning: "जीवन का कोमल रस कठिन तप में छनकर निखर जाने दे।",
    english: "Let the tender sap of life be strained and refined through hardship.",
  },
  "sarga-3-64": {
    meaning: "अपने शरीर को इतना दृढ़ बना कि वह पत्थर जैसा हो जाए।",
    english: "Make the body so firm that it becomes like stone.",
  },
  "sarga-3-65": {
    meaning: "तू स्वयं ही प्रचंड और भय जगाने वाला तेज है।",
    english: "You yourself are a fierce and fearsome radiance.",
  },
  "sarga-3-66": {
    meaning: "फिर छोटी-सी चिंगारी तेरा क्या बिगाड़ सकती है?",
    english: "What harm, then, can a tiny spark do to you?",
  },
  "sarga-3-67": {
    meaning: "वर्षों तक वन में घूमते-फिरते हुए,",
    english: "For years, wandering through the forest,",
  },
  "sarga-3-68": {
    meaning: "हर बाधा और विघ्न को स्वीकार करते हुए,",
    english: "embracing each obstacle and difficulty,",
  },
  "sarga-3-69": {
    meaning: "धूप, गर्मी, वर्षा और कठोर रास्ते सहते हुए,",
    english: "bearing heat, sun, rain, and stony paths,",
  },
  "sarga-3-70": {
    meaning: "पांडव पहले से अधिक निखरकर लौटे।",
    english: "the Pandavas returned more refined than before.",
  },
  "sarga-3-71": {
    meaning: "भाग्य हर समय सोया नहीं रहता।",
    english: "Fortune does not sleep forever.",
  },
  "sarga-3-72": {
    meaning: "अब देखना है कि आगे क्या घटित होता है।",
    english: "Now it remains to be seen what happens next.",
  },
  "sarga-3-73": {
    meaning: "मित्रता और शांति का मार्ग दिखाने के लिए,",
    english: "To show the path of friendship and peace,",
  },
  "sarga-3-74": {
    meaning: "सबको अच्छे मार्ग पर लाने के लिए,",
    english: "to bring everyone onto the right path,",
  },
  "sarga-3-75": {
    meaning: "दुर्योधन को समझाने के लिए,",
    english: "to reason with Duryodhana,",
  },
  "sarga-3-76": {
    meaning: "और भयानक विनाश को रोकने के लिए,",
    english: "and to prevent terrible destruction,",
  },
  "sarga-3-77": {
    meaning: "भगवान कृष्ण हस्तिनापुर आए।",
    english: "Lord Krishna came to Hastinapur.",
  },
  "sarga-3-78": {
    meaning: "वे पांडवों का संदेश लेकर आए थे।",
    english: "He had brought the Pandavas' message.",
  },
  "sarga-3-79": {
    meaning: "यदि न्याय देना है तो आधा राज्य दे दो।",
    english: "If justice is to be done, give them half the kingdom.",
  },
  "sarga-3-80": {
    meaning: "और यदि इसमें भी तुम्हें आपत्ति हो,",
    english: "And if even that seems difficult to you,",
  },
  "sarga-3-81": {
    meaning: "तो केवल पाँच गाँव ही दे दो।",
    english: "then give only five villages.",
  },
  "sarga-3-82": {
    meaning: "बाकी सारी धरती तुम अपने पास रखो।",
    english: "Keep all the rest of the land for yourself.",
  },
  "sarga-3-83": {
    meaning: "हम उन्हीं पाँच गाँवों में प्रसन्न होकर जीवन बिताएँगे।",
    english: "We will live happily in those five villages.",
  },
  "sarga-3-84": {
    meaning: "और अपने परिजनों पर तलवार नहीं उठाएँगे।",
    english: "And we will not raise swords against our own kin.",
  },
  "sarga-3-85": {
    meaning: "दुर्योधन पाँच गाँव भी नहीं दे सका।",
    english: "Duryodhana could not give even those five villages.",
  },
  "sarga-3-86": {
    meaning: "वह समाज और धर्म की शुभकामना भी नहीं पा सका।",
    english: "He could not earn the blessing of society or righteousness.",
  },
  "sarga-3-87": {
    meaning: "उलटा वह श्रीकृष्ण को बाँधने चल पड़ा।",
    english: "Instead, he tried to bind Krishna himself.",
  },
  "sarga-3-88": {
    meaning: "जो असंभव था, उसे वह संभव बनाने की मूर्खता करने लगा।",
    english: "He tried foolishly to accomplish the impossible.",
  },
  "sarga-3-89": {
    meaning: "जब मनुष्य पर विनाश छा जाता है,",
    english: "When destruction descends upon a person,",
  },
  "sarga-3-90": {
    meaning: "तो सबसे पहले उसका विवेक मर जाता है।",
    english: "his wisdom dies first.",
  },
  "sarga-3-91": {
    meaning: "कृष्ण ने भयानक हुंकार भरी।",
    english: "Krishna gave a terrible roar.",
  },
  "sarga-3-92": {
    meaning: "उन्होंने अपना विराट स्वरूप प्रकट कर दिया।",
    english: "He revealed his vast cosmic form.",
  },
  "sarga-3-93": {
    meaning: "दिशाओं के महान आधार भी डगमगाने लगे।",
    english: "The great supports of the directions began to tremble.",
  },
  "sarga-3-94": {
    meaning: "भगवान क्रोधित होकर बोले।",
    english: "The Lord spoke in anger.",
  },
  "sarga-3-95": {
    meaning: "वे कहते हैं कि जंजीर बढ़ाकर मुझे बाँधने की कोशिश करो।",
    english: "He says: stretch out your chains and try to bind me.",
  },
  "sarga-3-96": {
    meaning: "हाँ दुर्योधन, आओ, मुझे बाँधकर दिखाओ।",
    english: "Yes, Duryodhana, come and bind me if you can.",
  },
  "sarga-3-97": {
    meaning: "देखो, पूरा आकाश मुझमें ही लीन है।",
    english: "See, the whole sky is dissolved in me.",
  },
  "sarga-3-98": {
    meaning: "देखो, वायु भी मुझमें ही समाई हुई है।",
    english: "See, the wind too is absorbed in me.",
  },
  "sarga-3-99": {
    meaning: "सारी ध्वनियाँ और झंकार मुझमें विलीन हैं।",
    english: "All sounds and resonances are merged in me.",
  },
  "sarga-3-100": {
    meaning: "सारा संसार मुझमें ही लय हो रहा है।",
    english: "The entire world dissolves within me.",
  },
  "sarga-3-101": {
    meaning: "अमरत्व मेरे भीतर फूलता और फैलता है।",
    english: "Immortality blossoms within me.",
  },
  "sarga-3-102": {
    meaning: "संहार की शक्ति भी मेरे भीतर झूलती है।",
    english: "The power of destruction also sways within me.",
  },
  "sarga-3-103": {
    meaning: "पूर्व का उज्ज्वल पर्वत मेरा चमकता हुआ मस्तक है।",
    english: "The radiant mountain of dawn is my shining forehead.",
  },
  "sarga-3-104": {
    meaning: "पूरा भूमंडल मेरा विशाल वक्षस्थल है।",
    english: "The whole earth is my vast chest.",
  },
  "sarga-3-105": {
    meaning: "मेरी भुजाएँ समस्त दिशाओं की परिधि को घेरे हुए हैं।",
    english: "My arms encircle the boundaries of all directions.",
  },
  "sarga-3-106": {
    meaning: "मैनाक और मेरु पर्वत मेरे पैरों के समान हैं।",
    english: "The Mainak and Meru mountains are my feet.",
  },
  "sarga-3-107": {
    meaning: "जो ग्रह और नक्षत्र समूह चमक रहे हैं,",
    english: "The shining hosts of planets and stars,",
  },
  "sarga-3-108": {
    meaning: "वे सब मेरे मुख के भीतर हैं।",
    english: "all of them are inside my mouth.",
  },
  "sarga-3-109": {
    meaning: "यदि देखने की आँखें हैं तो यह अखंड दृश्य देखो।",
    english: "If you have eyes to see, behold this unbroken vision.",
  },
  "sarga-3-110": {
    meaning: "मुझमें पूरा ब्रह्मांड देखो।",
    english: "See the entire universe within me.",
  },
  "sarga-3-111": {
    meaning: "चल और अचल जीव, संसार, नश्वर और अविनाशी सब देखो।",
    english: "See moving and unmoving beings, the world, the perishable and imperishable.",
  },
  "sarga-3-112": {
    meaning: "नश्वर मनुष्य और अमर देवजाति सब मुझमें हैं।",
    english: "Mortal humans and the immortal race of gods are all within me.",
  },
  "sarga-3-113": {
    meaning: "सैकड़ों करोड़ सूर्य और सैकड़ों करोड़ चंद्रमा मुझमें हैं।",
    english: "Hundreds of crores of suns and moons are within me.",
  },
  "sarga-3-114": {
    meaning: "सैकड़ों करोड़ नदियाँ, सरोवर और गंभीर समुद्र मुझमें हैं।",
    english: "Hundreds of crores of rivers, lakes, and deep oceans are within me.",
  },
  "sarga-3-115": {
    meaning: "असंख्य विष्णु, ब्रह्मा और महेश मेरे भीतर हैं।",
    english: "Countless Vishnus, Brahmas, and Maheshes are within me.",
  },
  "sarga-3-116": {
    meaning: "असंख्य देव, जल के अधिपति और धन के अधिपति भी मेरे भीतर हैं।",
    english: "Countless divine powers, lords of water, and lords of wealth are within me.",
  },
  "sarga-3-117": {
    meaning: "असंख्य रुद्र और असंख्य काल मेरे भीतर हैं।",
    english: "Countless Rudras and countless forms of Time are within me.",
  },
  "sarga-3-118": {
    meaning: "असंख्य दंडधारी लोकपाल भी मेरे भीतर हैं।",
    english: "Countless guardian rulers bearing the rod of justice are within me.",
  },
  "sarga-3-119": {
    meaning: "इन सबको बाँधने के लिए अपनी जंजीर बढ़ाओ।",
    english: "Stretch your chain forward and bind all of these.",
  },
  "sarga-3-120": {
    meaning: "हाँ दुर्योधन, इन सबको बाँधकर दिखाओ।",
    english: "Yes, Duryodhana, try to bind them all.",
  },
  "sarga-3-121": {
    meaning: "मेरे भीतर पृथ्वी, अतल और पाताल लोकों को देखो।",
    english: "See within me the earth, Atal, and Patal realms.",
  },
  "sarga-3-122": {
    meaning: "बीता हुआ और आने वाला समय भी मेरे भीतर देखो।",
    english: "See past and future time within me.",
  },
  "sarga-3-123": {
    meaning: "इस जगत की आरंभिक सृष्टि को देखो।",
    english: "See the first creation of the world.",
  },
  "sarga-3-124": {
    meaning: "और महाभारत का भावी युद्ध भी देखो।",
    english: "And see the coming war of the Mahabharata.",
  },
  "sarga-3-125": {
    meaning: "धरती मृतकों से ढकी हुई दिखाई दे रही है।",
    english: "The earth is seen covered with the dead.",
  },
  "sarga-3-126": {
    meaning: "पहचानो कि इस दृश्य में तुम कहाँ खड़े हो।",
    english: "Recognize where you stand in this vision.",
  },
  "sarga-3-127": {
    meaning: "आकाश में मेरे केशों का विशाल जाल देखो।",
    english: "See the vast net of my hair spread across the sky.",
  },
  "sarga-3-128": {
    meaning: "मेरे पैरों के नीचे पाताल लोक देखो।",
    english: "See Patal beneath my feet.",
  },
  "sarga-3-129": {
    meaning: "मेरी मुट्ठी में भूत, वर्तमान और भविष्य तीनों काल देखो।",
    english: "See past, present, and future held in my fist.",
  },
  "sarga-3-130": {
    meaning: "मेरा भयानक विराट स्वरूप देखो।",
    english: "Behold my terrible cosmic form.",
  },
  "sarga-3-131": {
    meaning: "सभी जन्म मुझसे ही प्राप्त होते हैं।",
    english: "All births arise from me alone.",
  },
  "sarga-3-132": {
    meaning: "और अंत में सब लौटकर मुझमें ही आ जाते हैं।",
    english: "And in the end all return into me.",
  },
  "sarga-3-133": {
    meaning: "मेरी जिह्वा से घनी ज्वालाएँ निकलती हैं।",
    english: "Dense flames leap from my tongue.",
  },
  "sarga-3-134": {
    meaning: "मेरी साँसों से वायु का जन्म होता है।",
    english: "From my breaths the wind is born.",
  },
  "sarga-3-135": {
    meaning: "मेरी दृष्टि जिस दिशा में पड़ती है,",
    english: "Wherever my gaze falls,",
  },
  "sarga-3-136": {
    meaning: "वहाँ सृष्टि हँसकर खिल उठती है।",
    english: "creation smiles and blossoms there.",
  },
  "sarga-3-137": {
    meaning: "जब मैं अपनी आँखें बंद करता हूँ,",
    english: "When I close my eyes,",
  },
  "sarga-3-138": {
    meaning: "चारों ओर मृत्यु छा जाती है।",
    english: "death spreads everywhere.",
  },
  "sarga-3-139": {
    meaning: "तू मुझे बाँधने आया है।",
    english: "You have come to bind me.",
  },
  "sarga-3-140": {
    meaning: "क्या तू सचमुच इतनी बड़ी जंजीर लाया है?",
    english: "Have you truly brought a chain large enough?",
  },
  "sarga-3-141": {
    meaning: "यदि तुम्हारे मन में मुझे बाँधने की इच्छा है,",
    english: "If your mind wishes to bind me,",
  },
  "sarga-3-142": {
    meaning: "तो पहले अनंत आकाश को बाँधकर दिखाओ।",
    english: "then first bind the infinite sky.",
  },
  "sarga-3-143": {
    meaning: "जो शून्य को भी वश में नहीं कर सकता,",
    english: "One who cannot master even emptiness,",
  },
  "sarga-3-144": {
    meaning: "वह मुझे कैसे बाँध सकता है?",
    english: "how can he ever bind me?",
  },
  "sarga-3-145": {
    meaning: "तूने हित की बात नहीं मानी।",
    english: "You did not accept words spoken for your welfare.",
  },
  "sarga-3-146": {
    meaning: "तूने मित्रता का मूल्य नहीं पहचाना।",
    english: "You did not recognize the value of friendship.",
  },
  "sarga-3-147": {
    meaning: "तो लो, अब मैं भी यहाँ से जाता हूँ।",
    english: "So now, I too depart from here.",
  },
  "sarga-3-148": {
    meaning: "और अपना अंतिम निर्णय सुनाता हूँ।",
    english: "And I declare my final resolve.",
  },
  "sarga-3-149": {
    meaning: "अब याचना नहीं होगी, अब युद्ध होगा।",
    english: "There will be no more pleading; now there will be war.",
  },
  "sarga-3-150": {
    meaning: "अब या तो जीवन की विजय होगी या मृत्यु का सामना होगा।",
    english: "Now there will be either victory in life or the facing of death.",
  },
  "sarga-3-151": {
    meaning: "नक्षत्रों के समूह भी जैसे टकरा उठेंगे।",
    english: "The hosts of stars will seem to collide.",
  },
  "sarga-3-152": {
    meaning: "धरती पर प्रचंड अग्नि बरसेगी।",
    english: "Fierce fire will rain upon the earth.",
  },
  "sarga-3-153": {
    meaning: "शेषनाग का फन भी डोल उठेगा।",
    english: "Even Sheshnag's hood will tremble.",
  },
  "sarga-3-154": {
    meaning: "भयानक काल अपना मुँह खोल देगा।",
    english: "Terrible Time will open its mouth.",
  },
  "sarga-3-155": {
    meaning: "हे दुर्योधन, ऐसा युद्ध होगा।",
    english: "Duryodhana, such a war will come.",
  },
  "sarga-3-156": {
    meaning: "जिस जैसा युद्ध फिर कभी नहीं होगा।",
    english: "A war whose like will never be seen again.",
  },
  "sarga-3-157": {
    meaning: "भाई ही भाई पर टूट पड़ेंगे।",
    english: "Brother will fall upon brother.",
  },
  "sarga-3-158": {
    meaning: "विष से भरे बाण बूँदों की तरह छूटेंगे।",
    english: "Poisonous arrows will fly like drops of rain.",
  },
  "sarga-3-159": {
    meaning: "युद्धभूमि में मृतदेहों पर जीने वाले जीव सुख पाएँगे।",
    english: "Scavengers of the battlefield will feast.",
  },
  "sarga-3-160": {
    meaning: "मनुष्यों का सौभाग्य टूटकर बिखर जाएगा।",
    english: "Human fortune will break apart.",
  },
  "sarga-3-161": {
    meaning: "अंत में तू धरती पर गिरा हुआ मिलेगा।",
    english: "In the end, you will lie fallen on the ground.",
  },
  "sarga-3-162": {
    meaning: "पर इस हिंसा का उत्तरदायी तू ही होगा।",
    english: "But you will be responsible for this violence.",
  },
  "sarga-3-163": {
    meaning: "सभा स्तब्ध थी और सभी लोग भयभीत थे।",
    english: "The assembly was stunned, and everyone was afraid.",
  },
  "sarga-3-164": {
    meaning: "कुछ लोग चुप थे और कुछ जैसे बेहोश पड़े थे।",
    english: "Some were silent; others seemed to have fainted.",
  },
  "sarga-3-165": {
    meaning: "केवल दो मनुष्य इस दृश्य से तृप्त नहीं हो रहे थे।",
    english: "Only two men could not get enough of this vision.",
  },
  "sarga-3-166": {
    meaning: "धृतराष्ट्र और विदुर आनंद पा रहे थे।",
    english: "Dhritarashtra and Vidura were filled with joy.",
  },
  "sarga-3-167": {
    meaning: "वे दोनों हाथ जोड़कर प्रसन्न और निर्भय खड़े थे।",
    english: "Both stood with folded hands, joyful and fearless.",
  },
  "sarga-3-168": {
    meaning: "दोनों बार-बार जय-जयकार कर रहे थे।",
    english: "Both kept calling out praises of victory.",
  },
  "sarga-3-169": {
    meaning: "भगवान सभा छोड़कर चल पड़े।",
    english: "The Lord left the assembly.",
  },
  "sarga-3-170": {
    meaning: "वे भयंकर युद्ध-घोष करके निकले।",
    english: "He departed after making a terrible war-call.",
  },
  "sarga-3-171": {
    meaning: "सामने कर्ण संकोच में खड़ा था।",
    english: "In front of him stood Karna, hesitant.",
  },
  "sarga-3-172": {
    meaning: "वह चकित और भ्रमित होकर कृष्ण से आ मिला।",
    english: "Astonished and bewildered, he came to Krishna.",
  },
  "sarga-3-173": {
    meaning: "कृष्ण ने बड़े प्रेम से उसका हाथ थामा।",
    english: "Krishna took his hand with great affection.",
  },
  "sarga-3-174": {
    meaning: "और उसे अपने रथ पर चढ़ा लिया।",
    english: "And brought him up onto his chariot.",
  },
  "sarga-3-175": {
    meaning: "रथ चल पड़ा और दोनों के बीच बातचीत शुरू हुई।",
    english: "The chariot moved on, and conversation began between them.",
  },
  "sarga-3-176": {
    meaning: "शांति और संयम की कठिन नीति पर बात चली।",
    english: "They spoke of the difficult path of peace and restraint.",
  },
  "sarga-3-177": {
    meaning: "कृष्ण शांत होकर दुख से बोले।",
    english: "Krishna, becoming calm, spoke with sorrow.",
  },
  "sarga-3-178": {
    meaning: "अब कोई उपाय शेष नहीं रहा।",
    english: "No remedy now remains.",
  },
  "sarga-3-179": {
    meaning: "हम विवश होकर धनुष उठाने को बाध्य हैं।",
    english: "We are compelled to take up the bow.",
  },
  "sarga-3-180": {
    meaning: "अब क्षत्रिय समुदाय को युद्ध में मरना होगा।",
    english: "Now the Kshatriya host must die in war.",
  },
  "sarga-3-181": {
    meaning: "कृष्ण कहते हैं कि मैंने समझाने के लिए कितना कुछ नहीं कहा?",
    english: "Krishna says: how much did I not say in my effort to persuade?",
  },
  "sarga-3-182": {
    meaning: "मैंने कटु व्यंग्य और विष जैसे शब्द भी कहाँ तक नहीं सहे?",
    english: "How much bitter sarcasm and poisonous speech did I not endure?",
  },
  "sarga-3-183": {
    meaning: "लेकिन दुर्योधन अहंकार में मतवाला है।",
    english: "But Duryodhana is intoxicated with arrogance.",
  },
  "sarga-3-184": {
    meaning: "वह कुछ भी समझने को तैयार नहीं है।",
    english: "He is not ready to understand anything.",
  },
  "sarga-3-185": {
    meaning: "उसे केवल युद्ध ही चाहिए।",
    english: "He wants only war.",
  },
  "sarga-3-186": {
    meaning: "चाहे पूरी धरती मिले या केवल मृत्यु, उसकी जिद वही है।",
    english: "Whether it means the whole earth or only death, his stubborn desire remains.",
  },
  "sarga-3-187": {
    meaning: "कृष्ण कर्ण से कहते हैं कि हे वीर, तुम निष्पक्ष होकर बताओ।",
    english: "Krishna asks Karna: O hero, speak without self-interest.",
  },
  "sarga-3-188": {
    meaning: "क्या पाँच गाँव कोई बहुत बड़ी वस्तु थी?",
    english: "Were five villages such a great demand?",
  },
  "sarga-3-189": {
    meaning: "वह छोटी-सी माँग भी कौरवों को भारी लगी।",
    english: "Even that small request seemed too heavy to the Kauravas.",
  },
  "sarga-3-190": {
    meaning: "उस मूर्ख की बुद्धि जैसे मर चुकी है।",
    english: "The fool's wisdom seems dead.",
  },
  "sarga-3-191": {
    meaning: "मैं दुर्योधन को कैसे समझाऊँ?",
    english: "How can I make Duryodhana understand?",
  },
  "sarga-3-192": {
    meaning: "इस युद्ध को कैसे रोकूँ?",
    english: "How can I stop this war?",
  },
  "sarga-3-193": {
    meaning: "सोचो, वह दृश्य कितना भयानक होगा।",
    english: "Think how terrible that sight will be.",
  },
  "sarga-3-194": {
    meaning: "जब युद्धभूमि में स्वयं काल प्रकट होगा।",
    english: "When Time itself appears on the battlefield.",
  },
  "sarga-3-195": {
    meaning: "बाहर गरम रक्त की धाराएँ बहेंगी।",
    english: "Outside, hot streams of blood will flow.",
  },
  "sarga-3-196": {
    meaning: "और भीतर घरों में विधवाओं की पुकार गूँजेगी।",
    english: "And inside homes, the cries of widows will echo.",
  },
  "sarga-3-197": {
    meaning: "भूखे और दुखी बच्चे बिलखेंगे।",
    english: "Hungry and sorrowful children will wail.",
  },
  "sarga-3-198": {
    meaning: "अनाथ बच्चे चिल्ला-चिल्लाकर रोएँगे।",
    english: "Orphaned children will cry out helplessly.",
  },
  "sarga-3-199": {
    meaning: "मुझे चिंता है कि अब मैं और क्या करूँ?",
    english: "I worry: what more can I do now?",
  },
  "sarga-3-200": {
    meaning: "शांति को किस आश्रय में छिपाकर बचाऊँ?",
    english: "Where can I hide peace and save it?",
  },
  "sarga-3-201": {
    meaning: "मेरे जानते सभी रास्ते बंद हो चुके हैं।",
    english: "As far as I can see, all paths are closed.",
  },
  "sarga-3-202": {
    meaning: "हाँ, यदि तुम एक बात मान लो,",
    english: "Yet, if you accept one thing,",
  },
  "sarga-3-203": {
    meaning: "तो शांति अभी नष्ट होने से बच सकती है।",
    english: "peace can still be saved from burning away.",
  },
  "sarga-3-204": {
    meaning: "युद्ध की आग अभी शांत की जा सकती है।",
    english: "The fire of war can still be put out.",
  },
  "sarga-3-205": {
    meaning: "दुर्योधन तुम्हें पाकर अपने को धन्य समझता है।",
    english: "Duryodhana feels blessed to have you.",
  },
  "sarga-3-206": {
    meaning: "तुम ही उसके जीवन का सबसे बड़ा सहारा हो।",
    english: "You alone are the great support of his life.",
  },
  "sarga-3-207": {
    meaning: "उसे तुम्हारे बल पर ही आशा है।",
    english: "His hope rests on your strength.",
  },
  "sarga-3-208": {
    meaning: "उसे विजय का विश्वास भी तुमसे ही है।",
    english: "His confidence in victory comes from you.",
  },
  "sarga-3-209": {
    meaning: "यदि तुम उसका साथ नहीं छोड़ोगे,",
    english: "If you do not leave his side,",
  },
  "sarga-3-210": {
    meaning: "तो वह युद्ध से पीछे क्यों हटेगा?",
    english: "why would he turn away from war?",
  },
  "sarga-3-211": {
    meaning: "कृष्ण एक असाधारण और भयावह सत्य बताते हैं।",
    english: "Krishna reveals a startling and grave truth.",
  },
  "sarga-3-212": {
    meaning: "तुम कुंती की कोख से जन्मे पहले पुत्र हो।",
    english: "You are the first son born from Kunti's womb.",
  },
  "sarga-3-213": {
    meaning: "फिर भी सूत बनकर अपमान सहते रहे हो।",
    english: "Yet you have lived as a Suta and borne insult.",
  },
  "sarga-3-214": {
    meaning: "और कौरवों के दल में रहते हो।",
    english: "And you remain in the Kaurava camp.",
  },
  "sarga-3-215": {
    meaning: "तुम दिन-रात धनुष-बाण उठाए रहते हो।",
    english: "You stand armed with bow and arrows through all eight watches of the day.",
  },
  "sarga-3-216": {
    meaning: "और पांडवों से लड़ने के लिए तैयार हो।",
    english: "And you are ready to fight the Pandavas.",
  },
  "sarga-3-217": {
    meaning: "तुम्हें कभी माँ का स्नेह नहीं मिला।",
    english: "You never received a mother's affection.",
  },
  "sarga-3-218": {
    meaning: "तुम्हारे सामने कभी सत्य प्रकट नहीं हुआ।",
    english: "The truth was never placed before you.",
  },
  "sarga-3-219": {
    meaning: "भाग्य के उलटफेर में पड़कर,",
    english: "Caught in the turns of fate,",
  },
  "sarga-3-220": {
    meaning: "तुम प्रेम पाकर शत्रु के घर में बस गए।",
    english: "you received love and settled in the enemy's house.",
  },
  "sarga-3-221": {
    meaning: "तुम पराये को अपना भाई मानते हो।",
    english: "You regard an outsider as your own brother.",
  },
  "sarga-3-222": {
    meaning: "और अपने सगे भाई को शत्रु कहते हो।",
    english: "And you call your own brother an enemy.",
  },
  "sarga-3-223": {
    meaning: "लेकिन इसमें तुम्हारा दोष क्या है?",
    english: "But what fault of yours is there in this?",
  },
  "sarga-3-224": {
    meaning: "अब मेरी बात मान लो।",
    english: "Now accept my word.",
  },
  "sarga-3-225": {
    meaning: "अभी मेरे साथ चलो।",
    english: "Come with me now.",
  },
  "sarga-3-226": {
    meaning: "जहाँ तुम्हारे पाँच भाई हैं, वहाँ चलो।",
    english: "Come where your five brothers are.",
  },
  "sarga-3-227": {
    meaning: "बिछड़े हुए भाई फिर मिल जाएँगे।",
    english: "The separated brothers will be reunited.",
  },
  "sarga-3-228": {
    meaning: "हम सब मिलकर आनंद मनाएँगे।",
    english: "Together we will celebrate in joy.",
  },
  "sarga-3-229": {
    meaning: "तुम कुंती के सबसे बड़े पुत्र हो।",
    english: "You are Kunti's eldest son.",
  },
  "sarga-3-230": {
    meaning: "बल, बुद्धि और चरित्र में तुम सबसे श्रेष्ठ हो।",
    english: "In strength, wisdom, and character, you are supreme.",
  },
  "sarga-3-231": {
    meaning: "हम तुम्हारे मस्तक पर राजमुकुट रखेंगे।",
    english: "We will place the royal crown upon your head.",
  },
  "sarga-3-232": {
    meaning: "हम तुम्हारा राजाभिषेक करेंगे।",
    english: "We will perform your coronation.",
  },
  "sarga-3-233": {
    meaning: "सब आनंद से तुम्हारी आरती उतारेंगे।",
    english: "Everyone will joyfully perform your aarti.",
  },
  "sarga-3-234": {
    meaning: "सब मिलकर तुम्हारे चरण धोएँगे।",
    english: "All together will wash your feet.",
  },
  "sarga-3-235": {
    meaning: "भीम तुम्हें पादत्राण पहनाएँगे।",
    english: "Bhima will put footwear upon your feet.",
  },
  "sarga-3-236": {
    meaning: "धर्मराज युधिष्ठिर तुम्हारे ऊपर चँवर डुलाएँगे।",
    english: "Yudhishthira, lord of dharma, will wave the royal fly-whisk over you.",
  },
  "sarga-3-237": {
    meaning: "श्रेष्ठ अर्जुन पहरे पर खड़े होंगे।",
    english: "The noble Arjuna will stand guard.",
  },
  "sarga-3-238": {
    meaning: "सहदेव और नकुल तुम्हारे सेवक समान साथ रहेंगे।",
    english: "Sahadeva and Nakula will attend upon you.",
  },
  "sarga-3-239": {
    meaning: "उत्तरा तुम्हारे लिए भोजन बनाएगी।",
    english: "Uttara will prepare food for you.",
  },
  "sarga-3-240": {
    meaning: "द्रौपदी तुम्हें प्रेम से पान खिलाएगी।",
    english: "Draupadi will lovingly offer you betel.",
  },
  "sarga-3-241": {
    meaning: "कृष्ण कहते हैं कि वह दृश्य कितना सुंदर होगा।",
    english: "Krishna says: what a beautiful sight that would be.",
  },
  "sarga-3-242": {
    meaning: "सारा संसार आनंद और आश्चर्य से भर उठेगा।",
    english: "The whole world would be filled with joy and wonder.",
  },
  "sarga-3-243": {
    meaning: "सब लोग तुम्हें पहचानेंगे।",
    english: "Everyone will recognize you.",
  },
  "sarga-3-244": {
    meaning: "तुम्हारे असली स्वरूप को जानेंगे।",
    english: "They will know you in your true form.",
  },
  "sarga-3-245": {
    meaning: "जब कुंती अपनी खोई हुई मणि को पाएगी,",
    english: "When Kunti finds the jewel she had lost,",
  },
  "sarga-3-246": {
    meaning: "वह आनंद से फूली नहीं समाएगी।",
    english: "she will overflow with joy.",
  },
  "sarga-3-247": {
    meaning: "युद्ध अपने-आप रुक जाएगा।",
    english: "The war will stop on its own.",
  },
  "sarga-3-248": {
    meaning: "कुरुराज दुर्योधन स्वयं झुक जाएगा।",
    english: "The Kuru king himself will bow down.",
  },
  "sarga-3-249": {
    meaning: "संसार बड़े सुख में आ जाएगा।",
    english: "The world will enter great happiness.",
  },
  "sarga-3-250": {
    meaning: "कहीं भी कोई दुखी नहीं रहेगा।",
    english: "No one anywhere will remain in sorrow.",
  },
  "sarga-3-251": {
    meaning: "सब लोग खुशी के गीत गाएँगे।",
    english: "Everyone will sing songs of joy.",
  },
  "sarga-3-252": {
    meaning: "और तुम्हारे सौभाग्य का उत्सव मनाएँगे।",
    english: "And celebrate your good fortune.",
  },
  "sarga-3-253": {
    meaning: "कृष्ण कहते हैं कि मैं कुरुराज्य तुम्हें समर्पित करता हूँ।",
    english: "Krishna says: I offer you the Kuru kingdom.",
  },
  "sarga-3-254": {
    meaning: "पूरा साम्राज्य तुम्हें देता हूँ।",
    english: "I offer you the whole empire.",
  },
  "sarga-3-255": {
    meaning: "यश, मुकुट, सम्मान और सिंहासन सब ले लो।",
    english: "Take fame, crown, honor, and throne.",
  },
  "sarga-3-256": {
    meaning: "बस मुझे एक भीख दे दो।",
    english: "Only grant me one alms.",
  },
  "sarga-3-257": {
    meaning: "हे मित्र, कौरवों को छोड़कर युद्ध रोक दो।",
    english: "Friend, leave the Kauravas and stop the war.",
  },
  "sarga-3-258": {
    meaning: "धरती के आने वाले सारे शोक मिटा दो।",
    english: "Remove all the future grief of the earth.",
  },
  "sarga-3-259": {
    meaning: "यह सब सुनकर कर्ण व्याकुल हो उठा।",
    english: "Hearing all this, Karna became restless.",
  },
  "sarga-3-260": {
    meaning: "वह एक क्षण के लिए गंभीर हो गया।",
    english: "For a moment, he grew deeply serious.",
  },
  "sarga-3-261": {
    meaning: "फिर उसने कहा कि यह बहुत बड़ी माया है।",
    english: "Then he said: this is a great enchantment.",
  },
  "sarga-3-262": {
    meaning: "जो कुछ आपने बताया है, वह मोह जगाने वाला है।",
    english: "All that you have told me is meant to stir attachment.",
  },
  "sarga-3-263": {
    meaning: "मैं यही कथा सूर्यदेव से सुन चुका हूँ।",
    english: "I have already heard this same tale from the sun-god.",
  },
  "sarga-3-264": {
    meaning: "और उसे सुनकर ग्लानि और दुख भोग चुका हूँ।",
    english: "And after hearing it, I have suffered shame and pain.",
  },
  "sarga-3-265": {
    meaning: "जब मैं अपने जन्म पर ध्यान करता हूँ,",
    english: "When I think about my birth,",
  },
  "sarga-3-266": {
    meaning: "तो मेरा उदास मन सोचता है।",
    english: "my troubled mind wonders.",
  },
  "sarga-3-267": {
    meaning: "वह कैसी कठोर माँ रही होगी,",
    english: "What kind of cruel mother must she have been,",
  },
  "sarga-3-268": {
    meaning: "जो अपने ही शरीर से निकले शिशु को,",
    english: "who took the child born from her own body,",
  },
  "sarga-3-269": {
    meaning: "जलधारा में छोड़ आती है।",
    english: "and left him in the stream.",
  },
  "sarga-3-270": {
    meaning: "या उसे जीवित ही दफना देती है।",
    english: "As if burying him alive.",
  },
  "sarga-3-271": {
    meaning: "जिसे वह दस महीने तक धारण करती है,",
    english: "The one whom she carries for ten months,",
  },
  "sarga-3-272": {
    meaning: "जिसे अपने गर्भ में रखकर पालती है,",
    english: "whom she nourishes within her womb,",
  },
  "sarga-3-273": {
    meaning: "जिसे अपने जीवन का अंश खिलाती है,",
    english: "whom she feeds with a portion of her own life,",
  },
  "sarga-3-274": {
    meaning: "और अपने भीतर का रक्त पिलाती है।",
    english: "and gives the blood from within herself.",
  },
  "sarga-3-275": {
    meaning: "फिर यदि वही उसे कहीं फेंक आए,",
    english: "If she then goes and throws him away somewhere,",
  },
  "sarga-3-276": {
    meaning: "तो वह स्त्री नहीं, नागिन ही होगी।",
    english: "she is not a woman, but a serpent.",
  },
  "sarga-3-277": {
    meaning: "कर्ण कहता है, हे कृष्ण, आप चुप रहिए।",
    english: "Karna says: Krishna, please remain silent.",
  },
  "sarga-3-278": {
    meaning: "इस विषय पर अब और कुछ मत कहिए।",
    english: "Say nothing more on this matter.",
  },
  "sarga-3-279": {
    meaning: "मेरे कान तनिक भी यह सुनना नहीं चाहते।",
    english: "My ears do not wish to hear even a little of it.",
  },
  "sarga-3-280": {
    meaning: "जिस माँ ने मुझे जन्म दिया,",
    english: "The mother who gave birth to me,",
  },
  "sarga-3-281": {
    meaning: "वह कुल की रक्षा करने वाली आदर्श नारी नहीं थी।",
    english: "she was no noble guardian of family honor.",
  },
  "sarga-3-282": {
    meaning: "वह अत्यंत भयानक सर्पिणी जैसी थी।",
    english: "She was like a terrible serpent.",
  },
  "sarga-3-283": {
    meaning: "उसका हृदय पत्थर के समान कठोर था।",
    english: "Her heart was hard as stone.",
  },
  "sarga-3-284": {
    meaning: "उसे पुत्र से अधिक समाज प्रिय था।",
    english: "Society was dearer to her than her son.",
  },
  "sarga-3-285": {
    meaning: "उसने अपनी गोद में आग लगा दी।",
    english: "She set fire to her own lap.",
  },
  "sarga-3-286": {
    meaning: "और मेरा कुल-वंश छिपा दिया।",
    english: "And concealed my lineage and family.",
  },
  "sarga-3-287": {
    meaning: "उसने शत्रु का काम किया।",
    english: "She did the work of an enemy.",
  },
  "sarga-3-288": {
    meaning: "और माताओं के नाम को बदनाम किया।",
    english: "And brought shame upon motherhood.",
  },
  "sarga-3-289": {
    meaning: "मैंने माँ का दूध भी नहीं पिया।",
    english: "I did not even drink my mother's milk.",
  },
  "sarga-3-290": {
    meaning: "उसके बदले मैंने अभिशाप ही पाया।",
    english: "Instead, I received only a curse.",
  },
  "sarga-3-291": {
    meaning: "वह तो यशस्विनी बनी रही।",
    english: "She remained honored and famous.",
  },
  "sarga-3-292": {
    meaning: "और सबकी भौंहें मुझ पर तनी रहीं।",
    english: "While everyone's brows were raised against me.",
  },
  "sarga-3-293": {
    meaning: "वह अविवाहित कन्या बनी रही।",
    english: "She remained an unmarried maiden in public honor.",
  },
  "sarga-3-294": {
    meaning: "जो कुछ दुख हुआ, वह सब मेरे हिस्से आया।",
    english: "Whatever suffering came, it fell upon me.",
  },
  "sarga-3-295": {
    meaning: "मैं जाति और गोत्र से दीन-हीन माना गया।",
    english: "I was considered low and poor in caste and lineage.",
  },
  "sarga-3-296": {
    meaning: "राजाओं के सामने मुझे छोटा और मलिन समझा गया।",
    english: "Before kings, I was treated as stained and inferior.",
  },
  "sarga-3-297": {
    meaning: "जब मैं रोज अपमान सहता था,",
    english: "When I suffered insult every day,",
  },
  "sarga-3-298": {
    meaning: "और मुझे शूद्र कहकर पुकारा जाता था।",
    english: "and was called a Shudra.",
  },
  "sarga-3-299": {
    meaning: "तब भी उसकी पत्थर जैसी छाती नहीं फटी।",
    english: "Even then her stone-like heart did not break.",
  },
  "sarga-3-300": {
    meaning: "कुंती तब भी पीड़ा से मर नहीं गई।",
    english: "Even then Kunti did not die of pain.",
  },
  "sarga-3-301": {
    meaning: "मैं सूत वंश में पल-बढ़ रहा था।",
    english: "I was growing up in the Suta lineage.",
  },
  "sarga-3-302": {
    meaning: "और अपमान की आग में जल रहा था।",
    english: "And I was burning in the fire of insult.",
  },
  "sarga-3-303": {
    meaning: "कुंती यह सब दृश्य देख रही थी।",
    english: "Kunti was watching all of this.",
  },
  "sarga-3-304": {
    meaning: "फिर भी माँ की ममता व्यर्थ सिद्ध हुई।",
    english: "Yet a mother's tenderness proved useless.",
  },
  "sarga-3-305": {
    meaning: "वह छिपकर भी मेरी सुध नहीं ले सकी।",
    english: "Even secretly, she could not care for me.",
  },
  "sarga-3-306": {
    meaning: "वह मुझे अपने आँचल की छाया भी नहीं दे सकी।",
    english: "She could not give me even the shade of her veil.",
  },
  "sarga-3-307": {
    meaning: "पाँच पुत्र पाकर वह गर्व और सुख से भर गई।",
    english: "Having five sons, she swelled with pride and happiness.",
  },
  "sarga-3-308": {
    meaning: "और दिन-रात बड़े सुख में मुझे भूल गई।",
    english: "And in daily comfort, she forgot me.",
  },
  "sarga-3-309": {
    meaning: "कुंती अपने गौरव में डूबी रही।",
    english: "Kunti remained absorbed in her glory.",
  },
  "sarga-3-310": {
    meaning: "और मुझ पतित समझे गए पुत्र से दूर रही।",
    english: "And stayed away from me, her son treated as fallen.",
  },
  "sarga-3-311": {
    meaning: "अब ऐसा क्या हुआ कि वह व्याकुल हो रही है?",
    english: "What has happened now that she is so restless?",
  },
  "sarga-3-312": {
    meaning: "किस कारण वह मुझे बुला रही है?",
    english: "Why is she calling me now?",
  },
  "sarga-3-313": {
    meaning: "क्या पाँच पुत्र हो जाने के बाद,",
    english: "Is it after having five sons,",
  },
  "sarga-3-314": {
    meaning: "या पुत्रों के धन और राज्य खोने के डर से,",
    english: "or after fearing the loss of her sons' wealth and kingdom,",
  },
  "sarga-3-315": {
    meaning: "या महान विनाश सामने देखकर,",
    english: "or after seeing great destruction approach,",
  },
  "sarga-3-316": {
    meaning: "या मन के घबरा जाने पर,",
    english: "or because her mind has grown afraid,",
  },
  "sarga-3-317": {
    meaning: "स्त्रियाँ अचानक दयालु हो जाती हैं?",
    english: "that women suddenly become compassionate?",
  },
  "sarga-3-318": {
    meaning: "और बिछुड़े हुए को गले लगाने लगती हैं?",
    english: "and begin embracing the one they had abandoned?",
  },
  "sarga-3-319": {
    meaning: "जिस भय से कुंती हमेशा भरी रही,",
    english: "The fear that always filled Kunti,",
  },
  "sarga-3-320": {
    meaning: "जिसके कारण वह मुझे छोड़कर दूर खड़ी रही,",
    english: "because of which she left me and stood far away,",
  },
  "sarga-3-321": {
    meaning: "वह पाप अभी भी मेरे भीतर है।",
    english: "that sin still remains in me.",
  },
  "sarga-3-322": {
    meaning: "वह शाप अभी भी मेरे जीवन में है।",
    english: "that curse still remains in my life.",
  },
  "sarga-3-323": {
    meaning: "अब ऐसा क्या हुआ कि वह डर चला जाएगा?",
    english: "What has happened now that this fear will vanish?",
  },
  "sarga-3-324": {
    meaning: "क्या वह कुंती को काट नहीं खाएगा?",
    english: "Will it not still bite Kunti?",
  },
  "sarga-3-325": {
    meaning: "अचानक ऐसी विचित्र स्थिति कैसे बन गई?",
    english: "How has such a strange change suddenly come about?",
  },
  "sarga-3-326": {
    meaning: "मैं अचानक इतना पवित्र चरित्र वाला कैसे हो गया?",
    english: "How have I suddenly become so virtuous?",
  },
  "sarga-3-327": {
    meaning: "कुंती का हृदय आखिर क्या चाहता है?",
    english: "What does Kunti's heart truly want?",
  },
  "sarga-3-328": {
    meaning: "मेरा सुख, या पांडवों की विजय?",
    english: "My happiness, or the victory of the Pandavas?",
  },
  "sarga-3-329": {
    meaning: "यह नया अभिनंदन क्या है?",
    english: "What is this new welcome?",
  },
  "sarga-3-330": {
    meaning: "हे केशव, यह परिवर्तन कैसा है?",
    english: "Keshava, what is this change?",
  },
  "sarga-3-331": {
    meaning: "जब मैं प्रसिद्ध धनुर्धर बन गया,",
    english: "When I became a famed archer,",
  },
  "sarga-3-332": {
    meaning: "तब सब लोग मेरा हित चाहने लगे।",
    english: "everyone began wishing for my welfare.",
  },
  "sarga-3-333": {
    meaning: "लेकिन एक समय ऐसा भी था,",
    english: "But there was also a time,",
  },
  "sarga-3-334": {
    meaning: "जब यह समाज बहुत कठोर और निर्दयी था।",
    english: "when this society was harsh and merciless.",
  },
  "sarga-3-335": {
    meaning: "वह तनिक भी स्नेह नहीं दिखाता था।",
    english: "It showed not even a little affection.",
  },
  "sarga-3-336": {
    meaning: "और हमेशा विष जैसे कटु व्यंग्य बरसाता था।",
    english: "And always showered poisonous sarcasm.",
  },
  "sarga-3-337": {
    meaning: "उस समय मुझे सुंदर गोद में लेकर,",
    english: "At that time, taking me into a loving lap,",
  },
  "sarga-3-338": {
    meaning: "आँचल के नीचे छिपाकर,",
    english: "hiding me beneath her veil,",
  },
  "sarga-3-339": {
    meaning: "चुंबनों से मुझे भर देने वाली कौन थी?",
    english: "who filled me with kisses?",
  },
  "sarga-3-340": {
    meaning: "मेरी डाँट और दुख की गर्मी कौन हर लेती थी?",
    english: "Who took away the heat of scolding and suffering from me?",
  },
  "sarga-3-341": {
    meaning: "राधा को छोड़कर मैं किसकी पूजा करूँ?",
    english: "Whom shall I revere if I abandon Radha?",
  },
  "sarga-3-342": {
    meaning: "माँ तो वही है, उसे छोड़कर मैं किसे अपनाऊँ?",
    english: "She is my mother; whom else can I accept by leaving her?",
  },
  "sarga-3-343": {
    meaning: "हे कृष्ण, यह बात भी सुनिए।",
    english: "Krishna, listen to this too.",
  },
  "sarga-3-344": {
    meaning: "इसे मन में परखिए कि यह सच है या झूठ।",
    english: "Consider in your heart whether it is true or false.",
  },
  "sarga-3-345": {
    meaning: "मैं धूल में पड़ा हुआ था।",
    english: "I was lying in the dust.",
  },
  "sarga-3-346": {
    meaning: "किसके स्नेह से मैं बड़ा हुआ?",
    english: "By whose affection did I grow?",
  },
  "sarga-3-347": {
    meaning: "किसने मुझे सम्मान दिया?",
    english: "Who gave me honor?",
  },
  "sarga-3-348": {
    meaning: "किसने राजपद देकर मुझे महिमावान बनाया?",
    english: "Who made me glorious by giving me kingship?",
  },
  "sarga-3-349": {
    meaning: "जब मेरा विकास रुका हुआ दिखाई दे रहा था,",
    english: "When my growth seemed blocked,",
  },
  "sarga-3-350": {
    meaning: "और पूरा समाज मुझ पर क्रोधित था,",
    english: "and the whole society was angry with me,",
  },
  "sarga-3-351": {
    meaning: "जब मेरा मन भीतर से टूट चुका था,",
    english: "when my heart had broken within,",
  },
  "sarga-3-352": {
    meaning: "तभी अचानक दुर्योधन आया।",
    english: "then Duryodhana suddenly arrived.",
  },
  "sarga-3-353": {
    meaning: "वह निष्कपट और पवित्र प्रेम लेकर आया।",
    english: "He came with innocent and pure affection.",
  },
  "sarga-3-354": {
    meaning: "वह मेरा पूरा सौभाग्य लेकर आया।",
    english: "He brought with him all my good fortune.",
  },
  "sarga-3-355": {
    meaning: "कुंती ने मुझे केवल जन्म दिया।",
    english: "Kunti only gave me birth.",
  },
  "sarga-3-356": {
    meaning: "राधा ने माँ का वास्तविक कर्म किया।",
    english: "Radha performed the true work of a mother.",
  },
  "sarga-3-357": {
    meaning: "पर जिसे असली जीवन कहते हैं,",
    english: "But what is called real life,",
  },
  "sarga-3-358": {
    meaning: "वह देने दुर्योधन आया।",
    english: "Duryodhana came to give that to me.",
  },
  "sarga-3-359": {
    meaning: "वह मेरे लिए माता से अलग नहीं है।",
    english: "He is not separate from a mother to me.",
  },
  "sarga-3-360": {
    meaning: "वह सगे भाई से भी बढ़कर है।",
    english: "He is greater even than a true brother.",
  },
  "sarga-3-361": {
    meaning: "दुर्योधन ने मुझे दरिद्र से राजा बना दिया।",
    english: "Duryodhana raised me from a poor man into a king.",
  },
  "sarga-3-362": {
    meaning: "उसने मुझे यश, सम्मान और मुकुट पहनाया।",
    english: "He gave me fame, honor, and a crown.",
  },
  "sarga-3-363": {
    meaning: "उसने मुझे अपनी बाँहों में उठाया।",
    english: "He lifted me in his arms.",
  },
  "sarga-3-364": {
    meaning: "और मुझे संसार के सामने प्रतिष्ठित किया।",
    english: "And brought me with dignity before the world.",
  },
  "sarga-3-365": {
    meaning: "उसने मेरे लिए कौन-कौन से काम नहीं किए?",
    english: "What feats did he not perform for me?",
  },
  "sarga-3-366": {
    meaning: "उसने मुझे नया जन्म दिया।",
    english: "He gave me a new birth.",
  },
  "sarga-3-367": {
    meaning: "कर्ण का रोम-रोम उसका ऋणी है।",
    english: "Every pore of Karna's being is indebted to him.",
  },
  "sarga-3-368": {
    meaning: "सूर्य और चंद्रमा भी इस सत्य को जानते हैं।",
    english: "The sun and moon know this truth.",
  },
  "sarga-3-369": {
    meaning: "मेरा तन, मन और धन दुर्योधन का है।",
    english: "My body, mind, and wealth belong to Duryodhana.",
  },
  "sarga-3-370": {
    meaning: "यह जीवन भी दुर्योधन का है।",
    english: "This life too belongs to Duryodhana.",
  },
  "sarga-3-371": {
    meaning: "स्वर्गलोक से भी मैं मुँह मोड़ सकता हूँ।",
    english: "I can turn away even from heaven.",
  },
  "sarga-3-372": {
    meaning: "लेकिन हे केशव, मैं उसे नहीं छोड़ूँगा।",
    english: "But Keshava, I will not abandon him.",
  },
  "sarga-3-373": {
    meaning: "सच है कि उसे मुझसे आशा है।",
    english: "It is true that he has hope in me.",
  },
  "sarga-3-374": {
    meaning: "उसका मुझ पर अटूट विश्वास है।",
    english: "His trust in me is unbroken.",
  },
  "sarga-3-375": {
    meaning: "हाँ, यह भी सच है कि मेरे बल पर ही,",
    english: "Yes, it is also true that on my strength alone,",
  },
  "sarga-3-376": {
    meaning: "उसने महायुद्ध का निश्चय किया है।",
    english: "he has resolved upon this great war.",
  },
  "sarga-3-377": {
    meaning: "पर मैं कैसा पापी बनूँगा,",
    english: "But what kind of sinner would I be,",
  },
  "sarga-3-378": {
    meaning: "यदि दुर्योधन को धोखा दूँ?",
    english: "if I betrayed Duryodhana?",
  },
  "sarga-3-379": {
    meaning: "मैंने उसके साथ रहकर जीवन जिया, खेला और खाया है।",
    english: "I have lived, played, and eaten with him.",
  },
  "sarga-3-380": {
    meaning: "मैंने उसी से सौभाग्य और यश पाया है।",
    english: "From him I received fortune and good name.",
  },
  "sarga-3-381": {
    meaning: "अब जब विपत्ति आने वाली है,",
    english: "Now when danger is about to arrive,",
  },
  "sarga-3-382": {
    meaning: "और घोर प्रलय छाने वाली है,",
    english: "and terrible destruction is about to spread,",
  },
  "sarga-3-383": {
    meaning: "यदि मैं उसे छोड़कर भाग जाऊँ,",
    english: "if I abandon him and flee,",
  },
  "sarga-3-384": {
    meaning: "तो कायर और कृतघ्न कहलाऊँगा।",
    english: "I will be called cowardly and ungrateful.",
  },
  "sarga-3-385": {
    meaning: "यदि मैं भी कुंती का पुत्र माना जाऊँ,",
    english: "If I too am accepted as Kunti's son,",
  },
  "sarga-3-386": {
    meaning: "और लोगों को इसका विश्वास हो जाए,",
    english: "and people come to believe it,",
  },
  "sarga-3-387": {
    meaning: "तो संसार मुझे धिक्कारेगा।",
    english: "the world will condemn me.",
  },
  "sarga-3-388": {
    meaning: "लोग मन में यही सोचेंगे।",
    english: "People will think this in their hearts.",
  },
  "sarga-3-389": {
    meaning: "राज्य मिलते ही वह तुरंत बदल गया।",
    english: "The moment he received a kingdom, he changed sides.",
  },
  "sarga-3-390": {
    meaning: "यह कर्ण तो बड़ा पापी निकला।",
    english: "This Karna turned out to be deeply sinful.",
  },
  "sarga-3-391": {
    meaning: "केवल मुझे ही यह कठिन डंक नहीं सहना पड़ेगा।",
    english: "I alone will not bear this painful sting.",
  },
  "sarga-3-392": {
    meaning: "अर्जुन पर भी कलंक लगेगा।",
    english: "A stain will fall on Arjuna too.",
  },
  "sarga-3-393": {
    meaning: "सब लोग कहेंगे कि डरकर ही,",
    english: "Everyone will say that out of fear,",
  },
  "sarga-3-394": {
    meaning: "अर्जुन ने अद्भुत नीति अपनाई।",
    english: "Arjuna adopted a clever strategy.",
  },
  "sarga-3-395": {
    meaning: "उसने चाल चलकर कर्ण को तोड़ लिया।",
    english: "He used a trick to split Karna away.",
  },
  "sarga-3-396": {
    meaning: "और एक अनोखा संबंध जोड़ लिया।",
    english: "And formed a strange new relationship.",
  },
  "sarga-3-397": {
    meaning: "कोई भी कहीं पीछे नहीं रहेगा।",
    english: "No one anywhere will hold back.",
  },
  "sarga-3-398": {
    meaning: "सारा संसार मुझ पर थूकेगा।",
    english: "The whole world will spit upon me.",
  },
  "sarga-3-399": {
    meaning: "मेरा तप, त्याग, चरित्र, जप, योग और दान,",
    english: "My austerity, sacrifice, character, prayer, discipline, and charity,",
  },
  "sarga-3-400": {
    meaning: "सब मिट्टी के समान हो जाएँगे।",
    english: "will all become like dust.",
  },
  "sarga-3-401": {
    meaning: "मैं लोभी और लालची कहलाऊँगा।",
    english: "I will be called greedy and grasping.",
  },
  "sarga-3-402": {
    meaning: "फिर मैं किसे अपना मुँह दिखाऊँगा?",
    english: "Then whose face could I show myself to?",
  },
  "sarga-3-403": {
    meaning: "हे आर्य, जो बात आप आज कह रहे हैं,",
    english: "Noble one, what you are saying today,",
  },
  "sarga-3-404": {
    meaning: "यदि वही बात कुंती के मुख से कृपाचार्य ने सुन ली होती,",
    english: "if Kripacharya had heard the same from Kunti's mouth earlier,",
  },
  "sarga-3-405": {
    meaning: "तो वे लज्जित हो गए होते।",
    english: "he would have been ashamed.",
  },
  "sarga-3-406": {
    meaning: "हम युद्ध के लिए क्यों तैयार होते?",
    english: "Why would we have prepared for war?",
  },
  "sarga-3-407": {
    meaning: "कर्ण दुर्योधन को कभी न मिलता।",
    english: "Karna would never have come to Duryodhana.",
  },
  "sarga-3-408": {
    meaning: "और पांडव कभी वनवास को नहीं जाते।",
    english: "And the Pandavas would never have gone to the forest.",
  },
  "sarga-3-409": {
    meaning: "लेकिन नाव अब किनारा छोड़ चुकी है।",
    english: "But the boat has now left the shore.",
  },
  "sarga-3-410": {
    meaning: "पता नहीं वह किस दिशा में चली है।",
    english: "No one knows in which direction it has gone.",
  },
  "sarga-3-411": {
    meaning: "अब यह नदी की बीच धारा में है।",
    english: "It is now in the middle current of the river.",
  },
  "sarga-3-412": {
    meaning: "किनारा कहीं दिखाई नहीं देता।",
    english: "No bank or shore can be seen.",
  },
  "sarga-3-413": {
    meaning: "चाहे यह धारा मुझे निगल ले।",
    english: "Let this current swallow me if it must.",
  },
  "sarga-3-414": {
    meaning: "लेकिन लौटना मुझे स्वीकार नहीं है।",
    english: "But I will not accept turning back.",
  },
  "sarga-3-415": {
    meaning: "क्या मैं धर्मराज का बड़ा भाई बनूँ?",
    english: "Shall I become the elder brother of Dharmaraj?",
  },
  "sarga-3-416": {
    meaning: "क्या भारत में सबसे श्रेष्ठ कहलाऊँ?",
    english: "Shall I be called the greatest in India?",
  },
  "sarga-3-417": {
    meaning: "क्या कुलीनता का वस्त्र पहनकर,",
    english: "Shall I wear the garment of noble lineage,",
  },
  "sarga-3-418": {
    meaning: "सिर ऊँचा करके तनकर चलूँ?",
    english: "and walk proudly with my head held high?",
  },
  "sarga-3-419": {
    meaning: "इस झूठे प्रदर्शन में क्या रस है?",
    english: "What joy is there in this false display?",
  },
  "sarga-3-420": {
    meaning: "हे केशव, ऐसा यश आखिर कैसा यश है?",
    english: "Keshava, what kind of fame is such fame?",
  },
  "sarga-3-421": {
    meaning: "सिर पर कुलीनता का बाहरी चिह्न हो,",
    english: "One may wear the mark of noble birth on the forehead,",
  },
  "sarga-3-422": {
    meaning: "लेकिन भीतर जीवन का रस फीका हो सकता है।",
    english: "yet the sap of life within may be dull and weak.",
  },
  "sarga-3-423": {
    meaning: "जो अपना नाम अपने बल पर नहीं ले सकते,",
    english: "Those who cannot claim a name by their own strength,",
  },
  "sarga-3-424": {
    meaning: "और अपने तेज से अपना परिचय नहीं दे सकते।",
    english: "and cannot introduce themselves by their own brilliance.",
  },
  "sarga-3-425": {
    meaning: "ऐसे मनुष्य भी संसार में होते हैं।",
    english: "Such people too exist in the world.",
  },
  "sarga-3-426": {
    meaning: "वे अपने कुल पर ही जीते हैं और उसे भी नष्ट करते हैं।",
    english: "They live off their lineage and also waste it.",
  },
  "sarga-3-427": {
    meaning: "लेकिन पराक्रमी पुरुष अपने सिर पर,",
    english: "But the valorous man does not walk,",
  },
  "sarga-3-428": {
    meaning: "पूर्वजों की छत्रछाया लेकर नहीं चलता।",
    english: "carrying the umbrella of his ancestors over his head.",
  },
  "sarga-3-429": {
    meaning: "वह अपना बल और तेज स्वयं जगाता है।",
    english: "He awakens his own strength and radiance.",
  },
  "sarga-3-430": {
    meaning: "और संसार से अपने कर्मों से सम्मान पाता है।",
    english: "And wins honor from the world through his deeds.",
  },
  "sarga-3-431": {
    meaning: "सब लोग उसे देखकर लालायित होते हैं।",
    english: "Seeing him, everyone longs to claim him.",
  },
  "sarga-3-432": {
    meaning: "और तरह-तरह से उसे अपना बनाने का प्रयास करते हैं।",
    english: "And tries in many ways to make him their own.",
  },
  "sarga-3-433": {
    meaning: "कुल और जाति मेरे साधन नहीं हैं।",
    english: "Lineage and caste are not my means.",
  },
  "sarga-3-434": {
    meaning: "मेरा एकमात्र धन पुरुषार्थ है।",
    english: "My only wealth is my own effort.",
  },
  "sarga-3-435": {
    meaning: "कुल ने तो मुझे छोड़कर फेंक दिया था।",
    english: "My lineage had thrown me away.",
  },
  "sarga-3-436": {
    meaning: "मैंने हिम्मत से अपना रास्ता बनाया।",
    english: "I acted with courage and made my own path.",
  },
  "sarga-3-437": {
    meaning: "अब वही वंश आश्चर्य में पड़ गया है।",
    english: "Now that same lineage is astonished and bewildered.",
  },
  "sarga-3-438": {
    meaning: "और मुझे स्वयं खोजने चला आया है।",
    english: "It has come searching for me itself.",
  },
  "sarga-3-439": {
    meaning: "लेकिन क्या मैं अब लौट जाऊँगा?",
    english: "But will I turn back now?",
  },
  "sarga-3-440": {
    meaning: "क्या मैं अपने प्रण से विचलित हो जाऊँगा?",
    english: "Will I move away from my vow?",
  },
  "sarga-3-441": {
    meaning: "युद्ध में या तो कुरुराज दुर्योधन की विजय हो,",
    english: "In war, either the Kuru king Duryodhana shall win,",
  },
  "sarga-3-442": {
    meaning: "या अर्जुन के हाथों कर्ण की मृत्यु हो।",
    english: "or Karna shall die by Arjuna's hand.",
  },
  "sarga-3-443": {
    meaning: "हे कृष्ण, मेरा निश्चय यही है।",
    english: "Krishna, this is my resolve.",
  },
  "sarga-3-444": {
    meaning: "मेरे लिए तीसरा कोई मार्ग नहीं है।",
    english: "There is no third path for me.",
  },
  "sarga-3-445": {
    meaning: "मित्रता की छाया बहुत सुखद होती है।",
    english: "The shade of friendship is deeply comforting.",
  },
  "sarga-3-446": {
    meaning: "उससे शरीर और मन शीतल हो जाते हैं।",
    english: "It cools the body and the heart.",
  },
  "sarga-3-447": {
    meaning: "वह मनुष्य धिक्कार योग्य होगा,",
    english: "That person deserves condemnation,",
  },
  "sarga-3-448": {
    meaning: "जो ऐसा वृक्ष पाकर भी,",
    english: "who, after receiving such a tree of shelter,",
  },
  "sarga-3-449": {
    meaning: "अलग खड़ा होकर उसे कटवाता रहे।",
    english: "stands apart and lets it be cut down.",
  },
  "sarga-3-450": {
    meaning: "और स्वयं उसके साथ कट न जाए।",
    english: "instead of being cut down with it himself.",
  },
  "sarga-3-451": {
    meaning: "जिस मनुष्य की बाँह मैंने थामी है,",
    english: "The man whose arm I have held,",
  },
  "sarga-3-452": {
    meaning: "जिस वृक्ष की छाया मैंने ली है,",
    english: "the tree whose shade I have accepted,",
  },
  "sarga-3-453": {
    meaning: "उस पर मैं वार नहीं चलने दूँगा।",
    english: "I will not let a blow fall upon it.",
  },
  "sarga-3-454": {
    meaning: "उस पर कुठार कैसे चलने दूँ?",
    english: "How could I let an axe strike it?",
  },
  "sarga-3-455": {
    meaning: "जीते-जी मैं उसे बचाऊँगा।",
    english: "While alive, I will protect him.",
  },
  "sarga-3-456": {
    meaning: "या स्वयं कटकर मिट जाऊँगा।",
    english: "Or I will myself be cut down.",
  },
  "sarga-3-457": {
    meaning: "मित्रता बहुत अनमोल रत्न है।",
    english: "Friendship is a priceless jewel.",
  },
  "sarga-3-458": {
    meaning: "धन उसे कभी तौल नहीं सकता।",
    english: "Wealth can never weigh its value.",
  },
  "sarga-3-459": {
    meaning: "धरती का राज्य तो उसके आगे कुछ भी नहीं।",
    english: "The kingdom of earth is nothing before it.",
  },
  "sarga-3-460": {
    meaning: "यदि बैकुंठ भी हाथ आ जाए,",
    english: "Even if heaven itself came into my hands,",
  },
  "sarga-3-461": {
    meaning: "तो मैं उसे भी न्योछावर कर दूँगा।",
    english: "I would offer that too in sacrifice.",
  },
  "sarga-3-462": {
    meaning: "और कुरुराज के चरणों में रख दूँगा।",
    english: "And place it at the feet of the Kuru king.",
  },
  "sarga-3-463": {
    meaning: "मैं अपना सिर कंधे पर लिए चलता हूँ।",
    english: "I walk carrying my head upon my shoulders.",
  },
  "sarga-3-464": {
    meaning: "उस दिन के लिए उत्सुक हूँ,",
    english: "I am eager for that day,",
  },
  "sarga-3-465": {
    meaning: "जब दुर्योधन पर वज्र-सा आघात आए,",
    english: "when a thunderbolt may fall upon Duryodhana,",
  },
  "sarga-3-466": {
    meaning: "और मैं आगे बढ़कर उसे अपने ऊपर ले लूँ।",
    english: "and I step forward to take it upon myself.",
  },
  "sarga-3-467": {
    meaning: "उसके लिए अपना गला कटवा दूँ।",
    english: "I would have my throat cut for him.",
  },
  "sarga-3-468": {
    meaning: "मुझे इससे बढ़कर और क्या चाहिए?",
    english: "What more could I desire?",
  },
  "sarga-3-469": {
    meaning: "धर्मराज सम्राट बनेंगे,",
    english: "Whether Dharmaraj becomes emperor,",
  },
  "sarga-3-470": {
    meaning: "या कुरुराज दुर्योधन को ताज मिलेगा,",
    english: "or the Kuru king receives the crown,",
  },
  "sarga-3-471": {
    meaning: "मेरा काम केवल लड़ना रह गया है।",
    english: "my task is only to fight.",
  },
  "sarga-3-472": {
    meaning: "यह युद्ध दुर्योधन का है।",
    english: "This battle belongs to Duryodhana.",
  },
  "sarga-3-473": {
    meaning: "मुझे कहीं से कुछ पाना नहीं है।",
    english: "I have nothing to gain anywhere.",
  },
  "sarga-3-474": {
    meaning: "मुझे केवल अपना ऋण चुकाना है।",
    english: "I have only a debt to repay.",
  },
  "sarga-3-475": {
    meaning: "मैं कब कुरुराज्य चाहता हूँ?",
    english: "When have I ever desired the Kuru kingdom?",
  },
  "sarga-3-476": {
    meaning: "मैं कब साम्राज्य चाहता हूँ?",
    english: "When have I ever desired empire?",
  },
  "sarga-3-477": {
    meaning: "क्या आपने भी यह नहीं जाना?",
    english: "Have you not understood even this?",
  },
  "sarga-3-478": {
    meaning: "क्या आपने मुझे आज तक पहचाना नहीं?",
    english: "Have you still not recognized me?",
  },
  "sarga-3-479": {
    meaning: "मैं जीवन का मूल्य समझता हूँ।",
    english: "I understand the value of life.",
  },
  "sarga-3-480": {
    meaning: "मैं धन को धूल के समान समझता हूँ।",
    english: "I regard wealth as dust.",
  },
  "sarga-3-481": {
    meaning: "धन इकट्ठा करना मेरा लक्ष्य नहीं है।",
    english: "Gathering wealth is not my aim.",
  },
  "sarga-3-482": {
    meaning: "साम्राज्य का सुख भोगना भी मेरा लक्ष्य नहीं है।",
    english: "Enjoying an empire is not my aim either.",
  },
  "sarga-3-483": {
    meaning: "यदि भुजबल से संसार जीत भी लूँ,",
    english: "Even if I conquer the world by the strength of my arms,",
  },
  "sarga-3-484": {
    meaning: "और अनगिनत संपत्तियाँ जमा कर लूँ,",
    english: "and gather countless riches,",
  },
  "sarga-3-485": {
    meaning: "तो वह सब मित्र दुर्योधन को दे दूँगा।",
    english: "I would give it all to my friend Duryodhana.",
  },
  "sarga-3-486": {
    meaning: "लालच मेरे मन को छू भी नहीं सका है।",
    english: "Greed has not even touched my heart.",
  },
  "sarga-3-487": {
    meaning: "मुझे वैभव और विलास की चाह नहीं।",
    english: "I have no desire for luxury and splendor.",
  },
  "sarga-3-488": {
    meaning: "मुझे अपनी भी कोई चिंता नहीं।",
    english: "I have no concern even for myself.",
  },
  "sarga-3-489": {
    meaning: "मैं केवल यही चाहता हूँ,",
    english: "I desire only this,",
  },
  "sarga-3-490": {
    meaning: "कि दान की निर्मल देव-सरिता,",
    english: "that the pure divine river of charity,",
  },
  "sarga-3-491": {
    meaning: "मेरे हाथों से सदा बहती रहे।",
    english: "keep flowing forever from my palms.",
  },
  "sarga-3-492": {
    meaning: "और निर्धनों को सदा भरती और सहारा देती रहे।",
    english: "And continue to fill and support the poor.",
  },
  "sarga-3-493": {
    meaning: "हे केशव, राज्य क्या है? यह तो तुच्छ है।",
    english: "Keshava, what is a kingdom? It is trivial.",
  },
  "sarga-3-494": {
    meaning: "मनुष्य वैभव पाकर आखिर पाता ही क्या है?",
    english: "What does a person truly gain by gaining wealth?",
  },
  "sarga-3-495": {
    meaning: "बहुत सारी चिंता और बहुत थोड़ी हँसी।",
    english: "Much worry and very little laughter.",
  },
  "sarga-3-496": {
    meaning: "कुछ चमक-दमक और थोड़ी देर का विलास।",
    english: "Some glitter and a few moments of pleasure.",
  },
  "sarga-3-497": {
    meaning: "पर वह सब भी यहीं खो देना है।",
    english: "But even all that must be lost here.",
  },
  "sarga-3-498": {
    meaning: "साथ कुछ भी लेकर नहीं जाना है।",
    english: "Nothing is to be taken along.",
  },
  "sarga-3-499": {
    meaning: "मेरे जैसे मनुष्य,",
    english: "People like me,",
  },
  "sarga-3-500": {
    meaning: "सोने का भार नहीं ढोते।",
    english: "do not carry the burden of gold.",
  },
  "sarga-3-501": {
    meaning: "वे धन बिखेरने के लिए पाते हैं।",
    english: "They receive wealth in order to scatter it.",
  },
  "sarga-3-502": {
    meaning: "वे रत्न लुटाने के लिए लाते हैं।",
    english: "They bring jewels in order to give them away.",
  },
  "sarga-3-503": {
    meaning: "वे संसार से कभी कुछ लेते नहीं।",
    english: "They never really take anything from the world.",
  },
  "sarga-3-504": {
    meaning: "वे तो अपना हृदय ही दान में देते हैं।",
    english: "They give their very heart in charity.",
  },
  "sarga-3-505": {
    meaning: "महलों के सोने जैसे चमकते शिखर,",
    english: "The golden-looking towers of palaces,",
  },
  "sarga-3-506": {
    meaning: "केवल कबूतरों के घर बनते हैं।",
    english: "become homes only for pigeons.",
  },
  "sarga-3-507": {
    meaning: "गरुड़ महलों में नहीं रहता।",
    english: "Garuda does not live in palaces.",
  },
  "sarga-3-508": {
    meaning: "वह सोने पर कभी नहीं सोता।",
    english: "He never sleeps upon gold.",
  },
  "sarga-3-509": {
    meaning: "वह कहीं पर्वतों में रहता है।",
    english: "He lives somewhere in the mountains.",
  },
  "sarga-3-510": {
    meaning: "चट्टानों की फटी दरारों में रहता है।",
    english: "In the split crevices of rocks.",
  },
  "sarga-3-511": {
    meaning: "सुख और समृद्धि के अधीन होकर,",
    english: "When a human becomes dependent on comfort and prosperity,",
  },
  "sarga-3-512": {
    meaning: "मनुष्य का तप और शक्ति क्षीण हो जाते हैं।",
    english: "his austerity and inner force weaken.",
  },
  "sarga-3-513": {
    meaning: "सत्ता, मुकुट और रत्नों से जड़ा आसन,",
    english: "Power, crowns, and jewel-studded seats,",
  },
  "sarga-3-514": {
    meaning: "मनुष्य का तेज छीन लेते हैं।",
    english: "steal a person's radiance.",
  },
  "sarga-3-515": {
    meaning: "मनुष्य वैभव के लिए लालायित होता है।",
    english: "A person longs for splendor.",
  },
  "sarga-3-516": {
    meaning: "पर वही वैभव उसे भीतर से खा जाता है।",
    english: "But that same splendor consumes him.",
  },
  "sarga-3-517": {
    meaning: "चाँदनी और फूलों की छाया में पलकर,",
    english: "Raised in moonlight and the shade of flowers,",
  },
  "sarga-3-518": {
    meaning: "मनुष्य भले ही मधुर और कोमल बन जाए,",
    english: "a person may become sweet and gentle,",
  },
  "sarga-3-519": {
    meaning: "लेकिन कष्ट का अमृत पिए बिना,",
    english: "but without drinking the nectar of suffering,",
  },
  "sarga-3-520": {
    meaning: "धूप और आँधी में जीए बिना,",
    english: "without living through heat and storms,",
  },
  "sarga-3-521": {
    meaning: "वह सच्चा पुरुष नहीं कहलाया जा सकता।",
    english: "he cannot be called a true man.",
  },
  "sarga-3-522": {
    meaning: "वह बाधाओं को हिला नहीं सकता।",
    english: "He cannot shake obstacles.",
  },
  "sarga-3-523": {
    meaning: "जो आँधियों में उड़ते हैं,",
    english: "Those who fly amid tempests,",
  },
  "sarga-3-524": {
    meaning: "जो प्रपातों में पानी पीते हैं,",
    english: "who drink water from waterfalls,",
  },
  "sarga-3-525": {
    meaning: "जिनका मार्ग पूरा आकाश है,",
    english: "whose path is the whole sky,",
  },
  "sarga-3-526": {
    meaning: "जिनका भोजन विषधर सर्प होते हैं,",
    english: "whose food is venomous serpents,",
  },
  "sarga-3-527": {
    meaning: "वे ही नागपाश जैसे बंधन छुड़ाते हैं।",
    english: "they alone break serpent-like bonds.",
  },
  "sarga-3-528": {
    meaning: "वे ही धरती के हृदय को शीतल करते हैं।",
    english: "They alone cool the heart of the earth.",
  },
  "sarga-3-529": {
    meaning: "हे कृष्ण, मैं गरुड़ हूँ, पक्षियों का राजा।",
    english: "Krishna, I am Garuda, king of birds.",
  },
  "sarga-3-530": {
    meaning: "मुझे सिर पर ताज नहीं चाहिए।",
    english: "I do not need a crown upon my head.",
  },
  "sarga-3-531": {
    meaning: "दुर्योधन पर घोर विपत्ति आई है।",
    english: "Terrible danger has come upon Duryodhana.",
  },
  "sarga-3-532": {
    meaning: "मैं किसी भी तरह उसे छोड़ नहीं सकता।",
    english: "I cannot leave him in any way.",
  },
  "sarga-3-533": {
    meaning: "मुझे युद्धभूमि को पाटना है।",
    english: "I must fill the battlefield.",
  },
  "sarga-3-534": {
    meaning: "मुझे साँप जैसे बंधनों को काटना है।",
    english: "I must cut through the serpent-snare.",
  },
  "sarga-3-535": {
    meaning: "युद्ध का समुद्र लहरा रहा है।",
    english: "The ocean of war is surging.",
  },
  "sarga-3-536": {
    meaning: "सामने प्रलय गरज रहा है।",
    english: "Doom is thundering ahead.",
  },
  "sarga-3-537": {
    meaning: "मेरी भुजा बार-बार फड़कती है।",
    english: "My arm keeps throbbing.",
  },
  "sarga-3-538": {
    meaning: "मेरी नसें बिजली की तरह कड़कती हैं।",
    english: "My veins crackle like lightning.",
  },
  "sarga-3-539": {
    meaning: "मैं तुरंत उसमें कूद पड़ना चाहता हूँ।",
    english: "I want to leap into it at once.",
  },
  "sarga-3-540": {
    meaning: "या तो जीतूँ, या युद्ध में डूबकर मर जाऊँ।",
    english: "Either I shall win, or drown and die in battle.",
  },
  "sarga-3-541": {
    meaning: "अब देर मत कीजिए, हे केशव।",
    english: "Delay no longer, Keshava.",
  },
  "sarga-3-542": {
    meaning: "अब अवसर को व्यर्थ मत जाने दीजिए।",
    english: "Do not let the moment pass unused.",
  },
  "sarga-3-543": {
    meaning: "धनुष की डोरी तन जाने दीजिए।",
    english: "Let the bowstring be drawn tight.",
  },
  "sarga-3-544": {
    meaning: "युद्ध तुरंत आरंभ हो जाने दीजिए।",
    english: "Let the battle begin at once.",
  },
  "sarga-3-545": {
    meaning: "तांडव जैसा प्रचंड तेज लहराएगा।",
    english: "A fierce, dance-of-destruction radiance will surge.",
  },
  "sarga-3-546": {
    meaning: "और संसार उससे कुछ प्रकाश पाएगा।",
    english: "And the world will receive some light from it.",
  },
  "sarga-3-547": {
    meaning: "लेकिन हे मधुसूदन, मेरी एक विनती है।",
    english: "But Madhusudan, I have one request.",
  },
  "sarga-3-548": {
    meaning: "मेरी यह जन्मकथा गुप्त ही रहे।",
    english: "Let this story of my birth remain hidden.",
  },
  "sarga-3-549": {
    meaning: "इसे युधिष्ठिर से कभी मत कहिए।",
    english: "Never tell it to Yudhishthira.",
  },
  "sarga-3-550": {
    meaning: "जैसे भी हो, इसे छिपाए रखिए।",
    english: "Keep it concealed in whatever way you can.",
  },
  "sarga-3-551": {
    meaning: "यदि वे इसे जान जाएँगे,",
    english: "If he comes to know this,",
  },
  "sarga-3-552": {
    meaning: "तो सिंहासन को ठुकरा देंगे।",
    english: "he will reject the throne.",
  },
  "sarga-3-553": {
    meaning: "वे स्वयं कभी साम्राज्य स्वीकार नहीं करेंगे।",
    english: "He will never accept the empire for himself.",
  },
  "sarga-3-554": {
    meaning: "सारी संपत्ति मुझे दे देंगे।",
    english: "He will give all the wealth to me.",
  },
  "sarga-3-555": {
    meaning: "और मैं भी उसे अपने पास नहीं रख पाऊँगा।",
    english: "And I too will not be able to keep it.",
  },
  "sarga-3-556": {
    meaning: "मैं उसे दुर्योधन को दे दूँगा।",
    english: "I will hand it over to Duryodhana.",
  },
  "sarga-3-557": {
    meaning: "इस तरह पांडव वंचित रह जाएँगे।",
    english: "Thus the Pandavas will remain deprived.",
  },
  "sarga-3-558": {
    meaning: "और वे दुख से मुक्त नहीं हो पाएँगे।",
    english: "And they will not be freed from sorrow.",
  },
  "sarga-3-559": {
    meaning: "अब मैं चलता हूँ, हे आर्य, प्रणाम।",
    english: "Now I depart, noble one; my salutations.",
  },
  "sarga-3-560": {
    meaning: "युद्ध के कार्य शीघ्र सिद्ध हों।",
    english: "May the work of war soon be accomplished.",
  },
  "sarga-3-561": {
    meaning: "अब दर्शन रणभूमि में ही होंगे।",
    english: "Now we shall meet only on the battlefield.",
  },
  "sarga-3-562": {
    meaning: "बाणों से ही चरण-स्पर्श होगा।",
    english: "My arrows will be the touching of your feet.",
  },
  "sarga-3-563": {
    meaning: "आकाश में विचरते सूर्यदेव की जय हो।",
    english: "Victory to the sun-god moving through the sky.",
  },
  "sarga-3-564": {
    meaning: "वे धरती पर दिव्य प्रकाश भरें।",
    english: "May he fill the earth with divine light.",
  },
  "sarga-3-565": {
    meaning: "राधेय कर्ण रथ से उतर आया।",
    english: "Radheya Karna stepped down from the chariot.",
  },
  "sarga-3-566": {
    meaning: "कृष्ण के मन में आश्चर्य छा गया।",
    english: "Amazement filled Krishna's heart.",
  },
  "sarga-3-567": {
    meaning: "वे बोले कि हे वीर, तुम सौ बार धन्य हो।",
    english: "He said: O hero, blessed are you a hundred times.",
  },
  "sarga-3-568": {
    meaning: "तुम्हारे जैसा अनन्य मित्र कोई नहीं।",
    english: "There is no devoted friend like you.",
  },
  "sarga-3-569": {
    meaning: "तुम केवल कुरुराज के प्राण ही नहीं हो।",
    english: "You are not merely the life of the Kuru king.",
  },
  "sarga-3-570": {
    meaning: "तुम मानवता के महान आभूषण हो।",
    english: "You are a great ornament of humanity.",
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

console.log("Seeded Hindi meanings and English translations for sarga-3 lines 1-570.");
