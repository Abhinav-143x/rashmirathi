import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const files = [
  path.join(ROOT, "content", "sarga-1.json"),
  path.join(ROOT, "public", "content", "sarga-1.json"),
];

const annotations = {
  "sarga-1-1": {
    meaning: "कवि संसार में जहाँ भी पवित्र तेज, ऊर्जा और ज्वाला दिखाई देती है, उसे प्रणाम करते हैं।",
    english: "May all sacred flame in the world be victorious; I bow to that pure fire wherever it burns.",
  },
  "sarga-1-2": {
    meaning: "जिस मनुष्य में तेज, साहस और बल बसता है, कवि उसे सम्मान देने योग्य मानते हैं।",
    english: "Wherever such radiance and strength dwell in a person, I offer my respect to that power.",
  },
  "sarga-1-3": {
    meaning: "फूल किसी भी डाली या वन में खिले, उसका सौंदर्य और गुण सम्मान योग्य होता है।",
    english: "A flower is worthy of reverence wherever it blooms, whether on any branch or in any forest.",
  },
  "sarga-1-4": {
    meaning: "समझदार लोग गुणों का मूल्य देखते हैं, उनके जन्म या मूल को नहीं खोजते।",
    english: "The wise do not ask where virtue was born; they honor its strength and beauty.",
  },
  "sarga-1-5": {
    meaning: "जो ऊँच-नीच के भेद को नहीं मानता, वही सच्चा ज्ञानी है।",
    english: "The truly wise person is the one who refuses to accept divisions of high and low birth.",
  },
  "sarga-1-6": {
    meaning: "जिसके भीतर दया और धर्म हों, वही सबसे अधिक पूजनीय मनुष्य है।",
    english: "The person filled with compassion and righteousness is the one most worthy of worship.",
  },
  "sarga-1-7": {
    meaning: "सच्चा क्षत्रिय वही है जिसके भीतर निर्भयता की अग्नि जलती हो।",
    english: "A true warrior is one whose heart burns with fearless courage.",
  },
  "sarga-1-8": {
    meaning: "सच्चा ब्राह्मण वही है जिसमें तपस्या, त्याग और संयम हो।",
    english: "The greatest Brahmin is the one who possesses discipline, austerity, and renunciation.",
  },
  "sarga-1-9": {
    meaning: "तेजस्वी लोग अपना सम्मान वंश बताकर नहीं माँगते।",
    english: "The radiant do not seek honor by announcing their lineage.",
  },
  "sarga-1-10": {
    meaning: "वे अपने कर्म और क्षमता से संसार में यश प्राप्त करते हैं।",
    english: "They earn praise in the world by proving themselves through action.",
  },
  "sarga-1-11": {
    meaning: "दुनिया चाहे किसी के छोटे माने जाने वाले जन्म को ठीक या गलत कहे, इससे वीर रुकते नहीं।",
    english: "Whether the world judges a lowly origin rightly or wrongly, heroes are not stopped by it.",
  },
  "sarga-1-12": {
    meaning: "वीर अपने पराक्रम से इतिहास में अपनी अलग रेखा खींच ही देते हैं।",
    english: "Heroes carve their own line into history by the force of their valor.",
  },
  "sarga-1-13": {
    meaning: "कर्ण के पिता सूर्यदेव थे और माता अविवाहित कुन्ती थीं।",
    english: "Karna’s father was the Sun, and his mother was the maiden Kunti.",
  },
  "sarga-1-14": {
    meaning: "जन्म के बाद उसका पालना नदी की धारा में बहती हुई पिटारी में हुआ।",
    english: "His cradle was a basket set afloat upon the current of a river.",
  },
  "sarga-1-15": {
    meaning: "वह सूत परिवार में पला और उसे अपनी जन्मदात्री माँ का दूध भी नहीं मिला।",
    english: "He grew up in a charioteer’s household and never tasted his birth mother’s milk.",
  },
  "sarga-1-16": {
    meaning: "फिर भी कर्ण सभी युवकों में अद्भुत वीर बनकर उभरा।",
    english: "Yet Karna emerged among all young men as a wondrous warrior.",
  },
  "sarga-1-17": {
    meaning: "उसका शरीर युद्ध के लिए वीर था, मन भावुक था और स्वभाव उदार था।",
    english: "In body he was battle-brave, in heart sensitive, and by nature generous.",
  },
  "sarga-1-18": {
    meaning: "उसे जाति या गोत्र का गर्व नहीं था; उसे अपने चरित्र और पुरुषार्थ का गर्व था।",
    english: "He took pride not in caste or clan, but in character and manly effort.",
  },
  "sarga-1-19": {
    meaning: "कर्ण ने ज्ञान, ध्यान, शस्त्र और शास्त्र सभी का विधिपूर्वक अभ्यास किया।",
    english: "He studied knowledge, meditation, weapons, and scriptures with complete discipline.",
  },
  "sarga-1-20": {
    meaning: "उसने अपने गुणों का विकास स्वयं अपने परिश्रम से किया।",
    english: "Through his own labor, Karna cultivated and developed his gifts.",
  },
  "sarga-1-21": {
    meaning: "वह नगर के शोर और लोगों की भीड़ से दूर रहता था।",
    english: "He stayed away from the noise of the city and the bustle of its people.",
  },
  "sarga-1-22": {
    meaning: "वह तन-मन से कठिन साधना और अभ्यास में लगा रहता था।",
    english: "With body and mind, he devoted himself to hard discipline and practice.",
  },
  "sarga-1-23": {
    meaning: "वह अपनी साधना और कर्मठता में सदा डूबा रहता था।",
    english: "He remained absorbed in his own meditation and relentless effort.",
  },
  "sarga-1-24": {
    meaning: "कर्ण वन के फूल की तरह संसार की आँखों से दूर चुपचाप खिला।",
    english: "Like a wildflower, Karna blossomed far from the world’s gaze.",
  },
  "sarga-1-25": {
    meaning: "फूल केवल राजाओं के बागों में ही नहीं खिलते।",
    english: "Flowers do not bloom only in royal gardens.",
  },
  "sarga-1-26": {
    meaning: "वे अनेक बार नगरों से दूर वन और कुंजों में भी खिलते हैं।",
    english: "Again and again, they bloom far from cities, in groves and forests.",
  },
  "sarga-1-27": {
    meaning: "प्रकृति का रहस्य कौन समझ सकता है? उसका ढंग बड़ा अद्भुत है।",
    english: "Who can understand nature’s mystery? Her ways are wonderfully strange.",
  },
  "sarga-1-28": {
    meaning: "प्रकृति कई बार सबसे कीमती रत्न साधारण वस्त्रों या गरीब घरों में छिपा देती है।",
    english: "Nature often hides her most precious jewels inside humble rags.",
  },
  "sarga-1-29": {
    meaning: "बादलों में छिपा सूर्य भी बहुत देर तक छिपा नहीं रह सकता।",
    english: "The sun may be hidden by clouds, but not forever.",
  },
  "sarga-1-30": {
    meaning: "एक वीर पुरुष युग की उपेक्षा बहुत समय तक सह नहीं सकता।",
    english: "A hero cannot endure the age’s neglect forever.",
  },
  "sarga-1-31": {
    meaning: "समय आने पर कर्ण की युवावस्था जाग उठी।",
    english: "At the right moment, Karna’s youth finally awakened.",
  },
  "sarga-1-32": {
    meaning: "उसके भीतर का पहला पुरुषार्थ सबके सामने प्रकट हो गया।",
    english: "The first blaze of his valor burst forth before everyone.",
  },
  "sarga-1-33": {
    meaning: "रंगभूमि में अर्जुन ने अपनी कला से अद्भुत वातावरण बना रखा था।",
    english: "In the arena, Arjuna had created a wondrous spectacle with his skill.",
  },
  "sarga-1-34": {
    meaning: "तभी भीड़ के बीच से कर्ण धनुष सँभाले अचानक आगे बढ़ा।",
    english: "Suddenly, Karna stepped out from the crowd, bow in hand.",
  },
  "sarga-1-35": {
    meaning: "कर्ण ने अर्जुन से कहा कि तालियों से इतना अभिमान क्यों कर रहे हो।",
    english: "He said, Why swell with pride merely because of applause?",
  },
  "sarga-1-36": {
    meaning: "कर्ण ने चुनौती दी कि अर्जुन की कीर्ति पल भर में मिट सकती है।",
    english: "Arjuna, your fame can be reduced to dust in a moment.",
  },
  "sarga-1-37": {
    meaning: "कर्ण बोला कि जो कुछ अर्जुन ने किया है, वह भी दिखा सकता है।",
    english: "Karna said he could perform everything Arjuna had displayed.",
  },
  "sarga-1-38": {
    meaning: "वह चाहे तो कुछ नई कलाएँ भी दिखा और सिखा सकता है।",
    english: "If needed, he could even show and teach some new arts.",
  },
  "sarga-1-39": {
    meaning: "कर्ण ने सबको अपनी धनुर्विद्या ध्यान से देखने को कहा।",
    english: "He asked them to open their eyes and watch the work of his hands.",
  },
  "sarga-1-40": {
    meaning: "सस्ते यश पर फूलने वाले मनुष्य को कर्ण धिक्कारता है।",
    english: "He condemned the man who grows proud over cheap fame.",
  },
  "sarga-1-41": {
    meaning: "यह कहकर कर्ण युद्ध की कलाएँ दिखाने लगा।",
    english: "Saying this, Karna began to display the arts of battle.",
  },
  "sarga-1-42": {
    meaning: "सभा स्तब्ध रह गई और सबकी आँखें उसी पर टिक गईं।",
    english: "The assembly fell silent; every eye remained fixed on him.",
  },
  "sarga-1-43": {
    meaning: "चारों ओर जनसमूह मंत्रमुग्ध होकर मौन था।",
    english: "All around, the sea of people stood silent as if enchanted.",
  },
  "sarga-1-44": {
    meaning: "केवल कर्ण के धनुष की टंकार गूँज रही थी।",
    english: "Only the twang of Karna’s bow echoed through the arena.",
  },
  "sarga-1-45": {
    meaning: "जब कर्ण लौटा, तो सब स्त्री-पुरुष साधु-साधु कहकर प्रशंसा करने लगे।",
    english: "When Karna turned back, men and women alike cried out in praise.",
  },
  "sarga-1-46": {
    meaning: "राजवंश के बड़े लोगों के सामने बड़ी कठिन स्थिति आ गई।",
    english: "A grave difficulty now fell upon the leaders of the royal line.",
  },
  "sarga-1-47": {
    meaning: "द्रोण, भीष्म और अर्जुन सब फीके और उदास पड़ गए।",
    english: "Drona, Bhishma, and Arjuna all seemed dimmed and disheartened.",
  },
  "sarga-1-48": {
    meaning: "केवल दुर्योधन आगे आया और कर्ण की वीरता की प्रशंसा की।",
    english: "Only Duryodhana stepped forward and praised the warrior: Bravo!",
  },
  "sarga-1-49": {
    meaning: "कर्ण ने फिर अर्जुन को द्वंद्व युद्ध के लिए ललकारा।",
    english: "Karna again challenged Partha, Arjuna, to a duel.",
  },
  "sarga-1-50": {
    meaning: "गुरु ने अर्जुन को चुप रहने का संकेत किया।",
    english: "The teacher signaled Arjuna to remain silent.",
  },
  "sarga-1-51": {
    meaning: "कृपाचार्य ने उस अज्ञात वीर युवक को संबोधित किया।",
    english: "Kripacharya addressed the unknown young warrior.",
  },
  "sarga-1-52": {
    meaning: "उन्होंने कहा कि अर्जुन पाण्डु का पुत्र और भरतवंश का गौरव है।",
    english: "He said Arjuna was Pandu’s son and an ornament of the Bharata line.",
  },
  "sarga-1-53": {
    meaning: "अर्जुन क्षत्रिय और राजपुत्र है, इसलिए वह यूँ ही किसी से नहीं लड़ेगा।",
    english: "Arjuna is a Kshatriya and a prince; he will not fight just anyone.",
  },
  "sarga-1-54": {
    meaning: "राजपुत्र किसी भी व्यक्ति से हाथापाई में कैसे उतर सकता है?",
    english: "How can he leap into combat with any random challenger?",
  },
  "sarga-1-55": {
    meaning: "यदि अर्जुन से लड़ना है, तो सभा में मौन मत रहो।",
    english: "If you wish to fight Arjuna, do not remain silent in this assembly.",
  },
  "sarga-1-56": {
    meaning: "अपना नाम, स्थान और जाति बताओ।",
    english: "Tell us your name, your place, and your caste.",
  },
  "sarga-1-57": {
    meaning: "जाति का प्रश्न सुनकर कर्ण का हृदय पीड़ा और क्षोभ से भर गया।",
    english: "At the word caste, Karna’s heart shook with pain and agitation.",
  },
  "sarga-1-58": {
    meaning: "क्रोध से भरे कर्ण ने सूर्य की ओर देखा और बोल उठा।",
    english: "Angrily, the warrior looked toward the sun and spoke.",
  },
  "sarga-1-59": {
    meaning: "कर्ण ने कहा कि जो लोग केवल जाति रटते हैं, उनकी पूँजी पाखंड है।",
    english: "Those who endlessly chant caste possess nothing but hypocrisy.",
  },
  "sarga-1-60": {
    meaning: "कर्ण कहता है कि मेरी जाति मेरे बलवान भुजदंड हैं; मैं जन्म की जाति नहीं जानता।",
    english: "What do I know of caste? These powerful arms are my caste.",
  },
  "sarga-1-61": {
    meaning: "कर्ण कहता है कि कुछ लोगों के सिर पर सोने का छत्र है, पर भीतर उनका मन अंधकार से भरा है।",
    english: "Some carry golden umbrellas over their heads, yet within they are dark through and through.",
  },
  "sarga-1-62": {
    meaning: "वे लोग संसार में दूसरों की जाति पूछते हुए भी शर्म नहीं करते।",
    english: "They feel no shame in asking a person’s caste before the world.",
  },
  "sarga-1-63": {
    meaning: "कर्ण कहता है कि यदि मैं सूतपुत्र हूँ, तो अर्जुन के पिता कौन थे, यह भी बताओ।",
    english: "If I am a charioteer’s son, then tell me, who was Partha’s father?",
  },
  "sarga-1-64": {
    meaning: "यदि साहस है तो सच कहो; लज्जा के कारण मौन मत रहो।",
    english: "If you have courage, speak the truth; do not fall silent out of shame.",
  },
  "sarga-1-65": {
    meaning: "कर्ण उन लोगों पर चोट करता है जो सिर ऊँचा करके जाति का नाम लेकर चलते हैं।",
    english: "Karna rebukes those who walk proudly, lifting their heads in the name of caste.",
  },
  "sarga-1-66": {
    meaning: "वे अधर्म और शोषण के बल पर सुखी जीवन बिताते हैं।",
    english: "They live in comfort through unrighteous exploitation.",
  },
  "sarga-1-67": {
    meaning: "उन्हें तथाकथित नीची जातियों से इतना भय लगता है कि उनका मन काँप उठता है।",
    english: "Their hearts tremble before the very people they call low-born.",
  },
  "sarga-1-68": {
    meaning: "वे छल से योग्य लोगों का अधिकार छीन लेते हैं, जैसे एकलव्य से अंगूठा माँगा गया था।",
    english: "Through deceit they take away the rights of the worthy, as Ekalavya’s thumb was demanded.",
  },
  "sarga-1-69": {
    meaning: "कर्ण चुनौती देता है कि मेरी जाति पूछनी है तो मेरे भुजबल से पूछो।",
    english: "Karna challenges them: if you must ask my caste, ask it from the strength of my arms.",
  },
  "sarga-1-70": {
    meaning: "मेरे सूर्य के समान चमकते ललाट और कवच-कुण्डल से मेरी पहचान पढ़ो।",
    english: "Read it from my sun-bright brow and from my armor and earrings.",
  },
  "sarga-1-71": {
    meaning: "मेरे भीतर जो तेज और प्रकाश झलक रहा है, उसी से मेरी असली पहचान समझो।",
    english: "Read my identity in the radiance and light shining through me.",
  },
  "sarga-1-72": {
    meaning: "मेरा इतिहास मेरे शरीर के हर रोम में लिखा हुआ है।",
    english: "My history is inscribed in every pore of my body.",
  },
  "sarga-1-73": {
    meaning: "यदि अर्जुन सचमुच बड़ा क्षत्रिय वीर है, तो वह आगे आए।",
    english: "If Arjuna is truly a great Kshatriya hero, let him step forward.",
  },
  "sarga-1-74": {
    meaning: "वह मुझे भी अपने क्षत्रिय तेज का प्रमाण दिखाए।",
    english: "Let him show me, too, the brilliance of his warriorhood.",
  },
  "sarga-1-75": {
    meaning: "कर्ण कहता है कि मैं अभी इस राजपुत्र के हाथ से धनुष-बाण छीन लूँगा।",
    english: "Karna declares that he will snatch the bow and arrows from this prince’s hands.",
  },
  "sarga-1-76": {
    meaning: "तब मैं तुम्हें अपनी महान जाति की पहचान करा दूँगा।",
    english: "Then I shall show you the true identity of my great caste.",
  },
  "sarga-1-77": {
    meaning: "कृपाचार्य कहते हैं कि तुम व्यर्थ ही क्रोध में आ रहे हो।",
    english: "Kripacharya says that Karna is becoming angry for no reason.",
  },
  "sarga-1-78": {
    meaning: "वे कहते हैं कि तुम एक साधारण बात भी नहीं समझ पा रहे।",
    english: "He says Karna is unable to understand even a simple matter.",
  },
  "sarga-1-79": {
    meaning: "यदि राजपुत्र से लड़े बिना तुम्हारा काम नहीं चलता, तो पहले राज्य प्राप्त करो।",
    english: "If your purpose cannot be fulfilled without fighting a prince, first obtain a kingdom.",
  },
  "sarga-1-80": {
    meaning: "अर्जुन से युद्ध करना है तो तुम्हें पहले कोई राज-पद अर्जित करना चाहिए।",
    english: "To fight Arjuna, you must first acquire a royal status.",
  },
  "sarga-1-81": {
    meaning: "कर्ण क्षण भर के लिए चकित और भीतर से विचलित हो गया।",
    english: "Karna stood stunned for a moment, inwardly confused and shaken.",
  },
  "sarga-1-82": {
    meaning: "अन्याय सह न सकने वाला दुर्योधन आगे बढ़ आया।",
    english: "Duryodhana, unable to bear the injustice, stepped forward.",
  },
  "sarga-1-83": {
    meaning: "दुर्योधन ने कहा कि ऐसे वीर का अपमान करना बड़ा पाप है।",
    english: "Duryodhana said it was a great sin to insult such a man.",
  },
  "sarga-1-84": {
    meaning: "यह उस मनुष्य का अपमान है जो सचमुच सूर्य की तरह चमक रहा है।",
    english: "This is the insult of one who truly shines like the sun.",
  },
  "sarga-1-85": {
    meaning: "नदियों और वीरों का मूल जानना बहुत कठिन होता है।",
    english: "The origin of rivers and heroes is very hard to know.",
  },
  "sarga-1-86": {
    meaning: "रणवीरों का गोत्र उनके धनुष के अतिरिक्त और क्या हो सकता है?",
    english: "What lineage can warriors have except the bow they bear?",
  },
  "sarga-1-87": {
    meaning: "वीर धरती पर अपने तप, परिश्रम और शक्ति से सम्मान पाते हैं।",
    english: "Heroes earn honor on earth through discipline, effort, and strength.",
  },
  "sarga-1-88": {
    meaning: "जाति-जाति का शोर केवल कायर और कठोर लोग मचाते हैं।",
    english: "Only cowards and cruel people raise the noise of caste.",
  },
  "sarga-1-89": {
    meaning: "दुर्योधन पूछता है कि जब कर्ण भीड़ से निकला, तो किसने उसका प्रभाव नहीं देखा?",
    english: "Duryodhana asks: who did not see Karna’s power when he emerged from the crowd?",
  },
  "sarga-1-90": {
    meaning: "उसके आते ही पूरी सभा पर सहज ही भय और आश्चर्य छा गया।",
    english: "As soon as he appeared, awe and alarm spread naturally through the whole assembly.",
  },
  "sarga-1-91": {
    meaning: "दुर्योधन कहता है कि कर्ण चाहे सूतपुत्र हो या सबसे नीची कही जाने वाली जाति का हो।",
    english: "Whether Karna is a charioteer’s son or from any despised caste, Duryodhana says it does not matter.",
  },
  "sarga-1-92": {
    meaning: "फिर भी उसके सामने सारे राजकुमार फीके और छोटे लगते हैं।",
    english: "Before him, all the princes appear dim and small.",
  },
  "sarga-1-93": {
    meaning: "ऐसे अनमोल रत्न का अपमान करना क्या उचित है?",
    english: "Is it right to insult such a priceless jewel?",
  },
  "sarga-1-94": {
    meaning: "यह मनुष्यता की विभूति और धरती का धन है।",
    english: "He is a glory of humanity and a treasure of the earth.",
  },
  "sarga-1-95": {
    meaning: "यदि राज्य के बिना इसे वीरता का अधिकार नहीं मिलता।",
    english: "If, without a kingdom, he is denied the right to prove his heroism,",
  },
  "sarga-1-96": {
    meaning: "तो दुर्योधन अपनी खुली घोषणा पूरे संसार को सुनाता है।",
    english: "then let the whole world hear Duryodhana’s open declaration.",
  },
  "sarga-1-97": {
    meaning: "दुर्योधन कर्ण के सिर पर अंगदेश का मुकुट रखता है।",
    english: "Duryodhana places the crown of Anga upon Karna’s head.",
  },
  "sarga-1-98": {
    meaning: "वह इस महान वीर के लिए एक राज्य अर्पित करता है।",
    english: "He offers a kingdom to this great warrior.",
  },
  "sarga-1-99": {
    meaning: "दुर्योधन ने अपना मुकुट उतारकर कर्ण के सिर पर रख दिया।",
    english: "Removing his own crown, Duryodhana placed it on Karna’s head.",
  },
  "sarga-1-100": {
    meaning: "रंगभूमि दुर्योधन के जयकार से गूँज उठी।",
    english: "The arena rang with cries of victory for Duryodhana.",
  },
  "sarga-1-101": {
    meaning: "दुर्योधन की इस महान कृपा से कर्ण चकित रह गया।",
    english: "Karna was astonished by this supreme generosity of Duryodhana.",
  },
  "sarga-1-102": {
    meaning: "कृतज्ञता से भरकर वह दुर्योधन को बाँहों में भर उठा।",
    english: "Overwhelmed with gratitude, he embraced Duryodhana.",
  },
  "sarga-1-103": {
    meaning: "दुर्योधन ने उसे हृदय से लगाकर शांत होने को कहा।",
    english: "Duryodhana held him close and said, Brother, be calm.",
  },
  "sarga-1-104": {
    meaning: "वह कहता है कि मेरे इस छोटे उपहार से तुम इतने विचलित क्यों हो?",
    english: "Why be so overwhelmed by this small gift of mine?",
  },
  "sarga-1-105": {
    meaning: "दुर्योधन कहता है कि राज्य देकर मैंने कौन-सा अनोखा त्याग कर दिया?",
    english: "What extraordinary sacrifice have I made by giving you a kingdom?",
  },
  "sarga-1-106": {
    meaning: "यदि तुम मुझे स्वीकार कर लो तो मेरे प्राण धन्य हो जाएँगे।",
    english: "If you accept me, my very life will be blessed.",
  },
  "sarga-1-107": {
    meaning: "कर्ण और अधिक भावुक हो गया कि मुझ पर इतना स्नेह भी हो सकता है।",
    english: "Karna melted further, moved that such affection could be shown to him.",
  },
  "sarga-1-108": {
    meaning: "वह कहता है कि आज से हम दो शरीर हैं, पर एक ही प्राण हैं।",
    english: "He says: from today we are two bodies, but one life.",
  },
  "sarga-1-109": {
    meaning: "कर्ण दुर्योधन के उस सम्मान को याद करता है जो उसने सभा के बीच दिया।",
    english: "Karna remembers the honor Duryodhana gave him before the whole assembly.",
  },
  "sarga-1-110": {
    meaning: "जीवन में पहली बार उसे ऐसा उठान और प्रतिष्ठा मिली थी।",
    english: "For the first time in life, he had been lifted into dignity.",
  },
  "sarga-1-111": {
    meaning: "कर्ण सोचता है कि इस कृपा का ऋण वह कौन-सा मूल्य चुका कर उतारेगा?",
    english: "He wonders what price could ever repay this kindness.",
  },
  "sarga-1-112": {
    meaning: "वह सूर्यदेव से प्रार्थना करता है कि कभी दुर्योधन के काम आ सके।",
    english: "He prays to the Sun that one day he may be of use to Duryodhana.",
  },
  "sarga-1-113": {
    meaning: "आनंदित और मोहित नगरवासी कर्ण को घेरकर खड़े हो गए।",
    english: "Delighted and enchanted, the citizens gathered around Karna.",
  },
  "sarga-1-114": {
    meaning: "लोग स्वभाव से ही वीरता की पूजा करना चाहते हैं।",
    english: "People naturally long to worship courage.",
  },
  "sarga-1-115": {
    meaning: "द्वेष, ईर्ष्या और झूठा अभिमान चाहे कुछ भी कहें।",
    english: "Let hatred, jealousy, and false pride say what they will.",
  },
  "sarga-1-116": {
    meaning: "जनता अपने आराध्य वीर को पहचान ही लेती है।",
    english: "The people recognize the hero worthy of their devotion.",
  },
  "sarga-1-117": {
    meaning: "लोग कर्ण को कुंकुम और कमल से पूजने लगे।",
    english: "People began worshiping Karna with vermilion and lotuses.",
  },
  "sarga-1-118": {
    meaning: "रंगभूमि चारों ओर आनंद और उत्साह की ध्वनि से भर गई।",
    english: "The arena filled on all sides with a thrilled and joyous murmur.",
  },
  "sarga-1-119": {
    meaning: "कर्ण ने अत्यंत विनम्रता से झुककर सबका प्रत्युत्तर दिया।",
    english: "Karna bowed with deep humility in grateful response.",
  },
  "sarga-1-120": {
    meaning: "उत्साहित जनता ने पुकार उठी—अंगराज की जय हो।",
    english: "The excited crowd cried out: Victory to the king of Anga!",
  },
  "sarga-1-121": {
    meaning: "‘महाराज अंगेश’ की पुकार भीम के हृदय में तीर की तरह लगी।",
    english: "The cry, King of Anga, struck Bhima’s heart like an arrow.",
  },
  "sarga-1-122": {
    meaning: "कुछ और न सूझने पर भीम ने असफल क्रोध में कटु बात कही।",
    english: "Finding no better answer, Bhima spoke bitterly in frustrated anger.",
  },
  "sarga-1-123": {
    meaning: "भीम ने तिरस्कार से कहा कि घोड़ों की सेवा ही अब तक इसका काम रहा है।",
    english: "Bhima sneered that tending horses had been Karna’s work until now.",
  },
  "sarga-1-124": {
    meaning: "वह पूछता है कि सूतपुत्र कोई राज्य कैसे चला सकेगा।",
    english: "How, he asks, can a charioteer’s son ever govern a kingdom?",
  },
  "sarga-1-125": {
    meaning: "दुर्योधन ने भीम को उत्तर दिया कि वह झूठी और व्यर्थ बातें कर रहा है।",
    english: "Duryodhana replied that Bhima was speaking empty falsehoods.",
  },
  "sarga-1-126": {
    meaning: "वह कहता है कि तुम धर्मज्ञ कहलाते हो, पर मन में द्वेष का विष रखते हो।",
    english: "You are called righteous, he says, yet you carry the poison of hatred within.",
  },
  "sarga-1-127": {
    meaning: "यदि कर्म खराब हों तो बड़े वंश का कोई महत्व नहीं रह जाता।",
    english: "What does noble lineage matter if one’s actions are corrupt?",
  },
  "sarga-1-128": {
    meaning: "मनुष्य की सच्ची शोभा उसका उज्ज्वल चरित्र है, न कि वंश या धन।",
    english: "A person’s true glory is bright character, not lineage, wealth, or grain.",
  },
  "sarga-1-129": {
    meaning: "दुर्योधन कहता है कि कर्ण ने सही पूछा—तुम स्वयं कौन हो?",
    english: "Duryodhana says Karna asked rightly: who are you yourselves?",
  },
  "sarga-1-130": {
    meaning: "यदि जानते हो तो अपने जन्म का रहस्य भी खोलकर बताओ।",
    english: "If you know it, reveal the mystery of your own birth.",
  },
  "sarga-1-131": {
    meaning: "दुनिया का अजब हाल है कि लोग अपना दोष नहीं देखते।",
    english: "Strange is the world: people do not see their own faults.",
  },
  "sarga-1-132": {
    meaning: "सच है कि अपनी आँखों से अपना माथा दिखाई नहीं देता।",
    english: "It is true: one cannot see one’s own forehead with one’s own eyes.",
  },
  "sarga-1-133": {
    meaning: "कृपाचार्य बीच में आ गए और इस झगड़े को लज्जाजनक कहा।",
    english: "Kripacharya intervened and called this quarrel shameful.",
  },
  "sarga-1-134": {
    meaning: "उन्होंने पूछा कि क्या तुम लोगों में नाम मात्र की भी लज्जा नहीं बची।",
    english: "He asked whether even a trace of shame remained among them.",
  },
  "sarga-1-135": {
    meaning: "वे सबको घर चलने को कहते हैं क्योंकि शाम होने वाली है।",
    english: "He tells everyone to go home, for evening is approaching.",
  },
  "sarga-1-136": {
    meaning: "वे कहते हैं कि सब थक गए होंगे और अब विश्राम की आवश्यकता है।",
    english: "He says they must be tired and need rest.",
  },
  "sarga-1-137": {
    meaning: "नगरवासी प्रसन्न मन से रंगभूमि से लौटने लगे।",
    english: "The citizens left the arena with delighted hearts.",
  },
  "sarga-1-138": {
    meaning: "कोई कर्ण के गुण गा रहा था, कोई अर्जुन के गुणों की चर्चा कर रहा था।",
    english: "Some praised Karna, while others sang of Partha’s virtues.",
  },
  "sarga-1-139": {
    meaning: "गुरु द्रोण अर्जुन को लेकर सबसे अलग चले।",
    english: "Guru Drona walked apart from the others, taking Arjuna with him.",
  },
  "sarga-1-140": {
    meaning: "द्रोण सोचते हैं कि यह नया राहु कौन है जो अर्जुन के सामने आ गया।",
    english: "Drona wondered: who is this new Rahu that has appeared before Arjuna?",
  },
  "sarga-1-141": {
    meaning: "द्रोण कहते हैं कि अर्जुन, तुम्हारे बराबर कोई जन्मा नहीं।",
    english: "Drona says, Arjuna, no equal to you has been born in this world.",
  },
  "sarga-1-142": {
    meaning: "आज तक मेरा ध्यान इसी बात पर टिका था कि तुम अप्रतिद्वंद्वी रहो।",
    english: "Until today, my attention has rested on keeping you unmatched.",
  },
  "sarga-1-143": {
    meaning: "एकलव्य से अंगूठा लिया गया और उसने शिकायत भी नहीं की।",
    english: "Ekalavya’s thumb was taken, and not a sigh escaped his lips.",
  },
  "sarga-1-144": {
    meaning: "द्रोण कहते हैं कि बेटा, मैं तुम्हारा मार्ग बाधारहित रखना चाहता हूँ।",
    english: "My son, Drona says, I wished to keep your path free of thorns.",
  },
  "sarga-1-145": {
    meaning: "पर आज जो देखा, उससे मेरा धैर्य डगमगा रहा है।",
    english: "But what I saw today has shaken my confidence.",
  },
  "sarga-1-146": {
    meaning: "द्रोण को कर्ण में अत्यंत उच्च वीरता के लक्षण दिखाई देते हैं।",
    english: "In Karna, Drona sees signs of supreme heroism.",
  },
  "sarga-1-147": {
    meaning: "यदि यह प्रचंड योद्धा बिना रोक-टोक बढ़ता गया।",
    english: "If this formidable warrior continues to grow unchecked,",
  },
  "sarga-1-148": {
    meaning: "तो अर्जुन के लिए कभी वह विनाशकारी सिद्ध हो सकता है।",
    english: "then one day, Arjuna, he may become your doom.",
  },
  "sarga-1-149": {
    meaning: "द्रोण सोच रहे हैं कि कर्ण के साथ क्या उपाय किया जाए।",
    english: "Drona wonders what strategy he should use against Karna.",
  },
  "sarga-1-150": {
    meaning: "वह सोचते हैं कि इस प्रचंड धूमकेतु का तेज कैसे कम किया जाए।",
    english: "How shall I diminish the brilliance of this fierce comet?",
  },
  "sarga-1-151": {
    meaning: "द्रोण निश्चित करते हैं कि वे कर्ण को अपना शिष्य नहीं बनाएँगे।",
    english: "Drona decides firmly that he will not accept Karna as his disciple.",
  },
  "sarga-1-152": {
    meaning: "वे अर्जुन को चेतावनी देते हैं कि इस भयानक प्रतिद्वंद्वी से सावधान रहना।",
    english: "He warns Arjuna to remain alert against this dangerous rival.",
  },
  "sarga-1-153": {
    meaning: "कौरव शंख बजाते हुए कर्ण को रंगभूमि से ले चले।",
    english: "The Kauravas led Karna away from the arena, blowing conches.",
  },
  "sarga-1-154": {
    meaning: "वे आनंद में झूमते, गाते और उत्सव मनाते हुए चले।",
    english: "They went swaying with joy, singing and celebrating.",
  },
  "sarga-1-155": {
    meaning: "दुर्योधन और कर्ण सोने के दो पर्वत-शिखरों जैसे सुंदर और सुदृढ़ दिख रहे थे।",
    english: "Duryodhana and Karna looked like two well-formed golden mountain peaks.",
  },
  "sarga-1-156": {
    meaning: "दोनों गले में बाँहें डाले साथ-साथ चले।",
    english: "Arm in arm, Duryodhana and Karna walked together.",
  },
  "sarga-1-157": {
    meaning: "सूर्य अस्ताचल से बड़ी तृप्ति के साथ यह दृश्य देख रहे थे।",
    english: "From the western horizon, the Sun watched with deep satisfaction.",
  },
  "sarga-1-158": {
    meaning: "वे अपनी कोमल किरणों से अंगराज कर्ण को मानो चूम रहे थे।",
    english: "With gentle rays, he seemed to kiss his son, the king of Anga.",
  },
  "sarga-1-159": {
    meaning: "आज सूर्य को दिन का अंत भी प्रिय नहीं लग रहा था।",
    english: "Today, the Sun did not welcome the day’s appointed end.",
  },
  "sarga-1-160": {
    meaning: "वह क्षितिज पर क्षण भर को जैसे अपनी गति रोककर ठहर गया।",
    english: "For a moment, he seemed to halt his chariot at the horizon.",
  },
  "sarga-1-161": {
    meaning: "जब रानियों का समूह राजभवन लौटने लगा।",
    english: "When the royal women began returning to the palace,",
  },
  "sarga-1-162": {
    meaning: "सबके पीछे एक व्याकुल स्त्री मन दबाए चल रही थी।",
    english: "behind them all walked one distressed woman, suppressing her heart’s anguish.",
  },
  "sarga-1-163": {
    meaning: "मानो उसके सपने उजड़ गए हों या वह कोई बड़ा दाँव हार गई हो।",
    english: "It was as if her dreams had been ruined, as if she had lost a great wager.",
  },
  "sarga-1-164": {
    meaning: "कुन्ती के पैर उठाना चाहने पर भी उठ नहीं पा रहे थे।",
    english: "Kunti’s feet would not rise, however much she tried to lift them.",
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

console.log("Seeded Hindi meanings and English translations for sarga-1 lines 1-164.");
