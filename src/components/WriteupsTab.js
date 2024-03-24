import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import styles from '../styles/Home.module.css';

const WriteupsTab = () => {
  const writeupsData = [
    // Your writeups data, each object with id, image, title, description, and detailedText
    {
      id: 1,
    title: "As the arrow found its mark and the mighty demon king Ravana fell to the ground, a triumphant roar erupted from the victorious side. The air was thick with the scent of victory, and chants of 'Jai Shree Ram' resonated through the atmosphere, celebrating the remarkable feat of Lord Rama. Ravana, a formidable and visionary leader who led an entire civilization to glory lay dead on the ground. Under his reign, the cities were adorned with the splendor of gold, women were accorded a position of respect and equality, and every citizen was a staunch devotee of their emperor, their lord.The battle had been won but what unfolded later was something that changed the course of the society forever. Vibhishana, A man who went behind his own brother's back to support a force that killed so many of his own race was crowned as the ruler of that very race. A woman whose pride was projected to be the reason for the battle was made to testify for her purity. The ambiguous term of ‘mariyada’ got an entirely new meaning. One wonders whether the society would have been framed differently if the lord were as godly as his disciples claimed him to be.But this day was just about that man lying dead on the ground. One might wonder about the poetic justice in his defeat. Maybe, In the pursuit of protecting his sister's pride, he crossed his own principles and overlooked the respect that Sita deserved. In the desperate attempt of symbolism in every single walk of life one claims the ‘Raavan Dahan’ to be the victory of good over evil, one wonders if, in the grand tapestry of this epic battle, the true meaning of victory was more elusive than it first appeared.",
    description:
      "Grey Conscience",
    image: "/img1.png"
    },
    {
      id: 2,
    title: "A young girl around 7-8 years old, with slightly wheatish brown hair, crimson on the lips and pink on the cheeks, and small brown twinkling eyes sat peering outside the window. The house located right next to a highway, woke up to the sound of blowing horns every day. A small room on top of a small South Indian tiffin restaurant quite literally named “South Indian Tiffin”, the house had a character of its own. There were no lights in the house as the street mostly lit it more than what was required, with the ceiling just a little higher than 6 feet, they could not fit in any ceiling fans either and so, a small table fan choked hesitantly in one distant corner. Her parents lived in their village and she came to this big city with her brother. He worked at the restaurant downstairs, all day from 4 in the morning till 10 at night. He only climbed up for lunch when they both dipped their hands into the same pile of rice. She had been admitted into a govt. school once but neither the teachers nor her classmates spoke or understood her tongue so she decided to drop out. In the mornings She used to make rangolis in the apartments nearby. She envied the flower lady who delivered marigolds and garlands to the houses of the societies nearby. She wished to have a flower shop of her own someday. Apart from that her days were mostly spent staring outside her window. Inside the apartment, she saw drenched sooty walls, creaky old furniture, and an asthmatic squeaky fan. But outside the window was a bright beautiful sky and broad busy roads where large trucks, buses, and luxury cars lit the commute. She would often wave out to the people whenever there was a traffic jam as they playfully waved back. She was sitting at her usual spot, waiting for her brother to climb up with their lunch. There was an unusual rush at the restaurant as there was a long traffic jam that stalled the daily trek. A small movement made a bus move and stand right in front of her window. A young man sat at a window seat. A broad fair-toned guy with pitch-black hair and some shades of grey in between. He had airpods on his ears and dry distant eyes. As he sat there, oblivious to the point where he was almost completely numb to the rest of the honking chaos. The ticket in his hand said that he was supposed to get down two stops ago. The music in his ears claimed that he hadn’t gotten inside the bus at all. The scars on his wrist told a story, the hope in his eyes protested the same. A sudden lurch from the bus jolted him back to reality. He looked out as he saw an extremely intriguing scene unfolding in front of his eyes. Families enjoyed music in their cars, a father pointing out everything interesting to his crying child, weaving stories of wonder from the mundane. The street vendors hawked their wares, their voices rising above the din. Suddenly, one of them slipped, and the previously crying child burst into laughter. The pure joy on his face resonated with the young man, making him wonder when he last felt such unadulterated happiness, probably the time when happiness wasn't associated with the monumental events of life. Amidst the chaos, his gaze fell upon a reflection in the window - the girl staring at the window back at him,  staring right at him, he slid his window to have a better look when she suddenly started laughing. He was totally lost and asked her for the reason, she kept laughing and couldn’t stop, After a while, she pointed straight at his shirt which happened to be stuck with the window glass and a large part of it, torn as a consequence. He couldn’t help but smile-the first genuine one in a long time. The horns blew hard as the bus trudged ahead. The girl waved at him with a smile as he waved back. He would probably get down at the next stop.",
    description:
      "Through the window",
    image: "/img2b.jpg"
    },
    {
      id: 3,
    title: "At the heart of a mesmerizing Durga Puja Visarjan procession, he found himself surrounded by hundreds of exuberant women. Their jubilant dance exuded a profound sense of empowerment that stirred his soul. Clad in pristine white saris adorned with vibrant red bindis, they appeared as an unstoppable army bidding farewell to their revered empress, marking her return to the celestial abode.The red bindi on their foreheads gleamed with an inner radiance, akin to the third eye of Maa Durga herself, guiding her devoted disciples with unwavering strength. In his days of rebellion, when atheism was cool, he had once questioned and even mocked the significance of such festivities. Yet, what unfolded before his eyes was an experience he had never encountered before. The atmosphere resonated with power, synergy, and an infectious positivity that permeated the entire crowd. Beyond that, he was captivated by the unshakable devotion these women held for their empress.One might wonder what drove so many women to follow Maa Durga with such unwavering faith. Well…within the rich tapestry of religious literature, where women were mostly depicted as supportive counterparts, Maa Durga and her nine avatars emerged as the pioneers of empowerment and independence for their race. She was the first warrior queen, the truest symbol of feminism that had withstood the test of time.As he watched the idol of Maa Durga submerge gracefully into the flowing river, it was a sight of unparalleled beauty. Her form, resplendent with ten powerful arms, each bearing an emblem of her divine prowess, seemed to echo the very essence of feminine strength. The intricately detailed idol's vibrant colors and fine craftsmanship painted a portrait of timeless elegance and devotion.The immersion of the goddess symbolized her promise to return the following year, to safeguard and empower her devoted tribe, and to celebrate the unbreakable spirit of life and joy. It was a promise that transcended generations and offered hope, strength, and empowerment to all who beheld it.",
    description:
      "Divine Embrace",
    image: "/img3.jpg"
    },
    {
      id: 4,
    title: "We live in a country where a youtubers video gets deleted and the entire nation comes together but a six-year old gets raped and no one really cares.A few month back a twelve year old's soul was ravaged by a monster. After the act of insanity,he chose to shatter her entire body with a pair of scissors. But the saddest part is that we don't even know if she survived or not. No justice campaigns were run for her as the fourth pillar of democracy chose to mourn in silence. We often hear that money has the power to mould the law. If that's the case then why did it take nine years for Nirbhayas family to watch the daemons who destroyed their daughter,pay for their deeds. None of the culprits belonged to any well to do family ,neither did they have any political connections . This means that there is a flaw in our legal system. Nirbhaya was lucky enough to at least have a family who decided to fight for her. But the muzzafarpur incident redefined the meaning of the word 'insanity'. A minor was repeatedly raped at the top of the panchayat building until she went unconscious . Later, she was paraded with a shaved head as a form of punishment. When she bore a child,the same panchayat forced her to sell it. There were no justice campaigns,no trending hashtags,no protests ,no parades. The present status of the girl is still unknown. All that came out in the news was that a few people were detained by the police but what followed no one cared to follow.The total magnitude of the sad reality that we are living in can’t be covered in 200 words .The goddess is bleeding, its high time that we stand up for her. India is one of the only thirty six countries of the world where marital rape is legal. This means once you are married the bride is at the complete disposal of the groom. While there is an ongoing debate about feminism and women empowerment,no one cares enough to reach out to the people who actually require it. The saddest part is that most women don’t even know that their lives are being controlled by a person who reflects love but demands respect .One would think that this feminism debate has been goin on for over a decade now . One should see if we have reached anywhere yet . It has only been a decade ,the country has been suffering from centuries of patriarchal ignorance .lets keep talking...",
    description:
      "The Agony Of the Angel",
    image: "/img4.jpg"
    },
    {
      id: 5,
    title: "Amidst the grating dissonance of an urban jungle, there he was, sitting peacefully at the rear end of a BMTC bus. The breeze whispered in his ears, much like a mother's gentle chiding for letting his head stray beyond the window's frame. The traffic signal blinked green, yet the bus remained stationary. Bangalore was being Bangalore. In the midst of the misty haze that veiled the scene, a young boy materialized, clutching a handful of tricolor flags in one hand and a couple of cigarettes in the other. He must’ve figured out what sells at this corporate end of the city.A hand projected out of a rickshaw and asked for a flag, a voice complained about the quality and bought a cigarette instead. The child's smile betrayed the accuracy of his guess. He collected the money and darted towards a narrow alleyway on the roadside. His momentary peace was shattered by the impatient honking of a car. A group of school students boarded the bus, and he suddenly realized, judging by the color of their costumes, that it was Independence Day. In days of yore, his father would have gathered the family to watch the parade together. He smiled at his indifference and returned his gaze to the world outside.There, he spotted the same child stationed at the entrance of the narrow gully. A young girl, resembling his elder sister, approached, bearing the same tricolor flags and cigarettes. The child produced a few crumpled notes from his pocket and handed them to her. Back at home his sister and he would have been discussing some random aspect of politics or religion, crafting wild conspiracy theories about Mahatma Gandhi, or more likely, bitchin’ about their relatives. Regardless, the girl affectionately patted his back, and together, they vanished into the labyrinthine of the gully.He often pondered where these alleyways led to. It’s like every single gully on the sides of a highway opened into hundreds of stories. Stories we cross every day but never care to explore. On that particular day, something in the breeze prompted him to disembark from the bus and chase the narratives hidden within these narrow byways. He removed his headphones, rolled up the cuffs of his trousers, and ventured into the slender lane. A man from India was stepping into Bharat.",
    description:
      "Bharat/India part 1- Departed",
    image: "/img5.jpg"
    },
    {
      id: 6,
    title: "As he ventured further into the narrow alley, he found himself immersed in a hidden world that contrasted starkly with the bustling chaos of the city. Crumbling mossed walls lined either side of the path, their paint peeled out like the bark on an ancient tree revealing the layers of history it swallowed underneath it. The occasional glimpse through the cracks hinted at cozy courtyards and weathered buildings concealed from the outside world.Passing a quaint store named 'Manjunath Handlooms',he witnessed the shopkeeper greeting customers by name, forging bonds that transcended mere commerce. The roadside vendors with their colorful trinkets on their small carts reminded him of his childhood, when his father would lovingly buy a few of these handcrafted toys, admiring the skill it took to create such beauty from limited materials.Further down the path, a small temple came into view. A mother sat within, her son by her side, their devotion a reflection of days gone by when his own mother used to insist he accompany her to the temple. He remembered the sense of pride he felt when he had grown tall enough to ring the temple bell on his own.As he walked, his senses were suddenly arrested by an enticing aroma, the clock had ticked past 7 in the afternoon, and the dinner preparations had started in the neighborhood. The elderly residents of the area had congregated around a ‘chabutara’ near the temple. They discussed everything from local gossip to global affairs, seeming to have a solution to every problem that ever existed. A small flickering yellow bulb illuminated the locale.In the midst of these musings, a face suddenly appeared in the crowd, one he hadn't expected to see in this hidden enclave. It carried a look of recognition, adding an air of suspense to the serene world he had stumbled upon. She stepped forward, a smile tugging at the corners of her lips with a clear sense of shock haunting her face. It was Divya, the most popular chick in his college. She extended a warm hand in greeting, and as he shook it, he couldn't help but wonder what had brought her to this tranquil haven.With the sun casting long shadows on the greasy walls,as they exchanged glances, he knew that this chance encounter had opened a door to a new and mysterious chapter.",
    description:
      "Bharat/India part 2 - New World",
    image: "/img6.jpg"
    },
    {
      id: 7,
    title: "As he looked at Divya, standing in this humble enclave, he couldn't help but be surprised by her presence. Curiosity getting the best of him, he asked her what someone like her was doing in this sham. His tone was genuinely curious, not meant to demean the surroundings but rather to understand what had brought her here. He figured that she might have been there for some NGO or charity work or something.She,however,didn't take offense. She smiled warmly and replied, 'This is where I come from, where I belong. I grew up in this neighborhood.' Her words were filled with a sense of pride for her roots.She extended an invitation to him,'Why don't you come over to my place?It's just a short walk from here.' He accepted, and they made their way through the narrow alleys to her home.Her house was a revelation. It was small, with the most basic furniture and amenities, yet it exuded a unique beauty in every sense. The simplicity and elegance of the place left him in awe. The walls were adorned with colorful fabrics and paintings, and the room was filled with the aroma of spices and incense. A soft, handwoven rug lay on the floor, and a few well-placed cushions served as seating.Her father, a tall and sturdy man, greeted him with a smile, but there was a slight sense of alarm in his eyes, a protective instinct kicking in, as his daughter had brought a young man home.Her mother embraced him tightly and insisted that he sit at the dining table. She served the most delicious meal, he’d had in ages. He resisted a bit in the beginning but he had been surviving on hostel food for quite some time and the aroma and flavors were irresistible, and so he couldn't refuse.As they sat down for dinner, the family engaged in sweet and heartfelt conversations. They talked about their day, shared stories, and laughed together. He couldn't help but feel a wave of nostalgia washing over him. Back home, his family made sure that they all sat together for at least one meal of the day. He missed his family, realizing that it had been such a long time since he had left home. Even when he went back, things were never quite the same, as there was always a fixed time after which he was expected to return to his bustling city life.As the evening wore on, he came to a profound realization. He was more of a 'Bharatiya' himself than an 'Indian.' The glitz and glamour of the city were enticing, but his heart found solace in the true values and basic joys of 'Bharat.'Finally, as he bid goodbye to Divya and her parents, thanking them for the wonderful meal, he had moist eyes and a more mature heart. This chance encounter had not only brought him closer to his roots but had also rekindled a sense of belonging that he had been missing for a long time.",
    description:
      "Bharat/India part 3 - Home",
    image: "/img7.jpg"
    },
    {
      id:8,
      title:"In the hushed aftermath of gentle rain, a delicate miracle came into existence—a newborn moth. It unfolded its damp, gossamer wings, breathing in the petrichor-scented air, its minuscule body pulsating with life. As the first light filtered through the wet leaves, the world opened before it like a canvas of wonder.The fragile creature, adorned with tiny iridescent scales, fluttered hesitantly, exploring the lush, rain-kissed foliage. Dewdrops clung like diamonds to every surface, refracting the emerging sunlight. It marveled at the shimmering spectacle, its world a kaleidoscope of colors and radiance. Every blade of grass stood as a tower, every droplet a lake, and every petal a universe.In the enchanting hour that followed its birth, the newborn moth encountered a panorama of experiences. It danced amidst delicate flower petals, sipped from the nectar-filled chalices of blooms, and felt the zephyrs of wind caressing its fragile wings. The aroma of nature's perfume intoxicated its senses, the symphony of bird songs and rustling leaves composing an exquisite melody.As the moments flitted by, the moth’s exploration deepened. It witnessed the ephemerality of life—watched a caterpillar undergo a metamorphosis, emerging as a butterfly, as the world around it continued its timeless cycle of birth and rebirth.Yet, within the brevity of an hour, the newborn moth underwent a lifetime. It experienced the vibrant joy of flight, the thrill of discovery, and the sorrow of impermanence. In the swiftness of its existence, it found companionship, faced challenges, and tasted the bittersweet beauty of existence.And just as the light that birthed it began to wane, the moth felt an inexplicable pull, a subtle whisper calling it toward the end. It hovered in a final graceful dance, embracing the echoes of its transient existence. As the hour concluded, it settled into the gentle embrace of the fading day, a silent metaphor for the fleeting nature of life itself.",
      description: "Petricor Existence",
      image: "/img9.jpg"
    },
    {
      id:9,
      title:"A young boy walked alongside his mother, hand firmly grasped in hers. The vibrant tapestry of the chaotic bazaar hummed with life. The air carried the heady fragrance of spices intermingled with the sweet scent of marigold garlands adorning the lively stalls.The boy clung to the security of his mother's hand, finding solace in her presence amidst the whirlwind of activity. His innocent eyes absorbed the spectacle before him—bright fabrics swaying like festive flags, the melody of vendors’ banter merging with the chorus of street musicians, creating an enchanting symphony.As the mother paused to admire the textiles, the boy's attention wandered to a street performer nearby, skillfully dancing with a puppet. Enthralled, he edged closer for a better view, his tiny fingers slipping away from his mother’s grasp unnoticed. Engrossed in the performance, he took a few steps backward, his focus solely on the lively show. Meanwhile, the mother, engrossed in the shimmering fabrics, turned back to find her son by her side, only to discover an empty space where he once stood. Panic sliced through her heart as she scanned the immediate vicinity, calling out her son's name in a rising tone of alarm. The bustling marketplace obscured any trace of the little boy. Unbeknownst to her, the boy, now captivated by the street performer, was caught in the enchantment of the puppet show. In the whirlwind of the marketplace, the gap between them widened, and he failed to notice his mother’s absence until he turned around, hoping to share his excitement with her. His face twisted in confusion and fear as he realized she was no longer beside him. Frantically, he swiveled, attempting to find her amidst the swarming crowd, calling out, his voice lost in the din of the marketplace.Their separation grew like a subtle rift, each one unaware of the other's predicament. As he traversed the market's maze, the absence of his parents loomed like a dark cloud. He missed the warmth of his mother's hand, the security in his father's smile, and the comfort of their protective embrace. The sights and sounds that had initially seemed thrilling now felt overwhelming and daunting in their absence. He attempted to approach a few adults, his voice quivering as he sought help, but his fear rendered his words nearly inaudible. It felt increasingly isolating and disorienting without the safety net of his parents' presence.Simultaneously, the mother frantically searched for her lost son. Memories flooded her mind—a fragrant incense from forgotten prayers, echoes of ancient hymns sung in the temples, and moments when life was simpler and harmonious. The mother's heart pounded with anxiety as she scoured the crowded stalls, each step laden with memories of her life's unbreakable link to her son. In a moment of respite, she paused near a seller offering traditional cloth. Memories flooded her mind—a distant yet vivid recollection of an evening she spent embroidering similar fabric in her youth. With tears welling in her eyes, she realized how her life had transformed, each thread of her past woven into the fabric of her existence as a mother.Amidst the teeming marketplace, the son, feeling lost and disoriented, wandered to a familiar spot, hoping against hope to find his mother. And there, in a moment that seemed to suspend time, he caught sight of her—amidst a crowd of strangers, her eyes met his in a brief, charged moment. Without words, but with an understanding that transcended the noisy surroundings, they rushed toward each other. Their embrace, amidst the bustling chaos, was a wordless affirmation of their unbreakable bond, a silent promise that no separation could diminish the very fabric of the cloth they called family.",
      description: "Lost",
      image: "/img8.jpg"
    },
    {
      id:10,
      title:"Within the city's beating heart, where the streets wore the glimmer of Christmas like a cloak of enchantment, a tapestry of life unfolded. Restaurants and bars flanked either side, their facades adorned with shimmering lights that danced along the cobblestone pathways. Laughter wove through the air, harmonizing with the melodies that echoed from every corner as if the very essence of joy had taken physical form. Amidst the merry chaos, a woman’s song floated out from a nearby bar, adding to the festive cheer. Amidst the revelry, tiny feet donned Santa hats, their innocent glee painting streaks of pure joy across the bustling scene. Yet, in a quiet corner, a section of the kids peddled misty tulips and red roses to the crowd, a whisper of poignant reality amidst the merry façade. Standing amidst this whirlwind of merriment was a man, silhouetted against the vibrant drapery of lights. His countenance, adorned with a salt-and-pepper beard, beneath a black denim, exuded a quiet nostalgia. His eyes, veiled in reminiscence, traced the delicate luminescence of a Christmas tree, each shade lightening fragments of memories. His thoughts drifted back a decade, to a tale painted within the city's essence. It was here, amidst these very streets, where their last Christmas had unfolded, a tale of poignant beauty and a bittersweet farewell. In the embrace of the city's nocturnal glow, they found themselves drawn to their cherished spot, nestled in a secluded alcove adorned with the soft glow of distant streetlights. The night wrapped around them like a silken veil, enfolding their shared history in its gentle embrace. They lingered there, cocooned in each other's presence, amidst whispered promises and stolen glances that spoke volumes. Their last visit to this clandestine nook held an air of both familiarity and impending finality. They traced the contours of the moments they'd shared there before, savoring the depth of their connection while silently acknowledging the approaching dawn that would mark their separation. Every second was a treasure, a symphony of whispered conversations and stolen laughs that echoed through the night. They danced in the fleeting moments, their movements synchronized like a melancholic melody, aware that their steps were leading them towards an inevitable parting. As the clock ticked away the hours, they found themselves drawn to the central church, an anchor amidst the ebb and flow of time. In that sanctified space, he felt a profound sense of closure as they knelt side by side. It wasn't solace he sought in that moment, nor was it a plea for a future that fate had already delineated. Instead, he found solace in the gratitude that filled his heart, for the stolen moments and the poignant beauty of their shared journey. Emerging from the hallowed confines of the church, an unspoken understanding hung heavy between them. Beneath the canopy of stars, they paused, acknowledging the inevitable parting. No words lingered in the crisp air, only a shared moment of silent acknowledgment—a farewell laced with tenderness and unspoken promises. With a lingering touch and a soft closure of her door, they both chose to embrace the forward path, no longer looking back. Amidst his reverie, the man was abruptly jolted back to the present by a tug on his jacket. A small child, barely reaching his waist, stood there with a bright-eyed innocence, clutching a crimson rose and offering it with a tentative yet hopeful expression. A wistful smile graced the man's lips as he gently patted the child's shoulder and trudged ahead to disappear into the crowd.",
      description: "Echoes",
      image: "/img10.jpg"
    },
    {
      id:11,
      title:"In the hushed silence of post-Diwali dawn, as the world gradually stirred awake, a silent ballet unfolded in the streets. Young, impoverished children tiptoed amidst the remnants of burst crackers, their eyes alight with hope as they scoured for the stray sparks that still held a promise of illumination. Street dogs, emancipated from their nocturnal hideouts, roamed freely, sniffing curiously at the traces of the previous night's revelry. Overhead, birds cautiously resumed their symphony, a tentative melody reclaiming the dawn from the echoes of fireworks. The diligent cleaning brigade emerged, armed with brooms and baskets, to sweep away the colors that adorned the streets just hours before. In a quiet corner of a bright-lit home, a lady meticulously scraped molten wax of spent candles from the boundaries, a ritualistic act that mirrored the slow return to normalcy. The morning, languid and serene, seemed to linger in the spaces between each breath, as if hesitant to let go of the festive fervor. The privileged, sipping leisurely on their morning chai, reveled in the luxury of a slow start. Simultaneously, a parallel universe unfolded on the streets below, where laborers queued stoically, their day unfurling with a different rhythm. A stark reminder that for some, the luxury of a leisurely morning was an unaffordable extravagance. The simple joy and contentment of being with one's family made people travel hundreds of kilometers to reunite with their loved ones. The ones who couldn’t , sat together in the nostalgic embrace of days gone by. Yet, amidst the dichotomy of lifestyles, a subtle undercurrent of positivity pervaded the air. Despite the disparities, the essence of Diwali lingered – a reminder that joy need not be exclusive, and the remnants of a festival could bind disparate lives in a common thread of celebration.",
      description: "The Morning After",
      image: "/img11.jpg"
    },
    {
      id:12,
      title:"The priest sat quietly on the corner of the small temple, or rather the sacred space beneath the ancient tree where the idol of Vasukhi Naag, resided. His face, weathered by time and spiritual contemplation, bore a dense network of wrinkles, each line a testament to the stories he carried within. Around his shoulders, a saffron shawl, once vibrant but now worn and torn with age, clung loosely. Despite the modesty of his surroundings, there was a gentle strength in his presence, and a faint smile played on his lips as if he held a secret joy known only to him and the serpentine deity beside him. He was waiting, as he did every day, for her arrival. She had been a constant in this place for twenty long years. After her husband's death, she moved back to her ancestral home. Nestled on the tranquil outskirts of Kashi, where the soft murmur of the Ganges kissed the very boundary of the garden, stood a small villa of undeniable charm. Though not grand in size, it held a timeless allure, its weathered stone façade speaking stories of past ages. Countless flowers, once vibrant in their youth, now swayed gently with the breeze, their colors faded like old memories. Her only daughter used to call her once every week. But as the years passed, those weekly calls grew less frequent. She would come to the temple every day with a glass of water and a small portion of food. In return, he would share a page from the rich tapestry of Indian mythology. They would sit together, chatting for hours about religion, devotion politics, and whatnot until the night grew silent around them. Then, he would grab all the Dakshina lying in front of the idol and walk her to her house. Despite the whispers and sideways glances of the neighborhood, they remained oblivious, cocooned in their shared world of comfort and companionship. He would drop her at her door, walk back to his humble abode, and lie there under the same tree. He kept waiting till it got dark and the eeriness of the wind shook his soul. He couldn't ignore the uncertainty of their age, realizing that each visit might be their last. He often joked about the fact that she would not be able to pull through a single after he was gone. Concerned, he made his way to her house, crossing the threshold for the first time. She greeted him at the door, her once vibrant spirit now diminished by illness. Coughing violently, she led him inside. He hesitated, feeling the vastness of her relatively spacious home contrasting sharply with the simplicity of his life under the tree. But her weakness tugged at his heart, and he gently guided her to lie down. As she coughed, specks of blood staining her lips, he cradled her head in his lap, feeling the weight of her fragility. It was then, after ten years of companionship, that he reached out and held her hand for the first time. As she lay there, he began to weave a story, a tale of love, loss, and the unbreakable bonds of the soul. He spoke of Lord Shiva and Sati, of the grandeur of their union and the tragedy of their separation. Sati, consumed by her self-respect, had chosen to sacrifice herself rather than endure indignity. Shiva, the all-knowing, had foreseen this but was powerless to stop it. He watched in anguish as half of his spiritual being departed from him, unable to intervene. The most powerful of beings, creator of worlds, rendered immobile by the pain of loss. ‘Aur Phir?’ she whispered her voice barely a rasp amidst her coughs. ‘Shiva, mourned for centuries, waiting for Sati to be reborn as Parvati. Perhaps this was why the divine had granted humans seven lives, the stories left unfinished in one life would find completion in the next. Like that random Punjabi dude says, Aapan phaer milange’ . As he spoke, he felt her hand tighten in his, her frail fingers seeking comfort in his grasp. They closed their eyes together, the weight of a lifetime's companionship settling around them. In that moment, the world faded away, leaving only the two of them cocooned in the timeless bonds of the soul. And as the night deepened, he remained there, cradling her in his arms, their breaths mingling with the rustle of leaves. The temple of Vasukhi Naag stood silent witness, the winding serpent around the Shiva Lingam seeming to echo the eternal dance of time - past, present, and future - as they embraced the quietude of their shared world.",
      description: "Samsara",
      image: "/img12.jpg"
    },
  ];

  const initialItemCount = 6;
  const [showAll, setShowAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowMore = () => {
    setShowAll(true);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleShowLess = () => {
    setShowAll(false);
    setSelectedItem(null);
  };

  return (
    <div className={styles.writeupsTab}>
      <div className={styles.projectGrid}>
        {writeupsData.slice(0, showAll ? writeupsData.length : initialItemCount).map((item) => (
          <div key={item.id} className={styles.writeupsItem} onClick={() => handleItemClick(item)}>
            <div>
              <Image src={item.image} alt={item.title} width={150} height={150} className={styles.WriteupsImage}/>
            </div>
            <p className={styles.caption1}>{item.description}</p>
          </div>
        ))}
      </div>

      {!showAll && (
        <button className={styles.showbutton} onClick={handleShowMore}>
          Show More
        </button>
      )}
      {showAll && (
        <button className={styles.showbutton} onClick={handleShowLess}>
          Show Less
        </button>
      )}
      {selectedItem && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button className={styles.closeButton} onClick={handleShowLess}>
              Close
            </button>
            <div className={styles.overlayDetails}>
              <div className={styles.detailImage}>
                <Image src={selectedItem.image} alt={selectedItem.title} width={300} height={300} />
              </div>
              <div className={styles.detailText}>
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.detailedText}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteupsTab;