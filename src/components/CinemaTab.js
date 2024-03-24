import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import styles from '../styles/Home.module.css';

const Underrated_CinemaTab = () => {
  const moviesData = [
    // Your movies data, each object with id, image, title, and description
    {
      id: 1,
      title: "Road Movie",
      description:"An old truck beckons, which, Vishnu sees as his ticket to freedom. He offers to drive the 1942 Chevrolet across the desert to the sea, where it has been sold to a local museum. As he sets off across the harsh terrain of desert India, Vishnu discovers he is not merely transporting a battered vehicle but an old touring cinema.Along the way, Vishnu reluctantly picks up a young runaway, a wandering old entertainer and a striking gypsy woman. Together they roam in the barren land, searching for water and an elusive fair. The journey turns dire when they are waylaid by corrupt cops and a notorious water lord.The key to their freedom is the eccentric collection of films and the two forty-year-old film projectors in the back of the truck. As in One Thousand and One Nights, if the films are good, they live and move on. If the films are boring, they face death in the outback. The journey proves transformative for each of the travelers, but especially for Vishnu who discovers life, love and laughter on the Indian highway.",
      image: "/mov1.jpg",
    },
    {
      id: 2,
      title: "Khamoshi: The Musical",
      description: "The story is about Joseph and Flavy Braganza, a deaf couple in Goa. They have a baby girl, Annie, who is able to speak and hear. A few years later they have another baby, a boy named Sam, who also speaks and hears. Annie&apos;s life is divided into two worlds – one with her parents and the other of music, which she loves. Annie gets her musical inspirations from her grandmother, Maria Braganza .A few years later, after the tragic death of Sam, Annie&apos;s life is shattered and music and singing fade away. When Annie grows up she gets in touch with music once again – with Raj whom she falls in love with. She starts singing again. When Annie gets pregnant, her father tells her to abort the baby because it will dishonor the family. Annie refuses to go against her church and religion. When Joseph learns this, he asks Annie to leave the house. Raj tries to convince Annie&apos;s father that he is a nice guy, but Joseph dislikes him mainly because he is a Hindu who doesn&apos;t live in Goa, so Annie would have to live far away from him.Annie marries Raj and gives birth to a boy, whom they name Sam, after her brother. She, Raj, and Sam go to Joseph&apos;s house to reconcile with him. Joseph accepts Annie&apos;s boy and approves Raj as his son-in-law. Things are really beautiful until their life takes a drastic turn. Annie and Raj have a devastating accident; Annie is seriously injured and goes into a coma. Joseph, Flavy, and Raj try hard to revive her, even trying to stir her emotionally for the sake of Sam. The broken Raj, Joseph&apos;s moving mute &apos;speech&apos;, and Flavy&apos;s love and hope bring Annie back to consciousness.",
      image: "/movie2.jpeg",
    },
    {
      id: 3,
      title: "Manorama Six Feet Under",
      description: "The film opens with Satyaveer Singh Randhawa, a public works engineer, living a mundane life in the desolate town of Lakhot, Rajasthan. His wife Nimmi is dissatisfied with their financial situation, and Satyaveer, a failed novelist, feels resigned to his unremarkable life. One night, an affluent woman, Mrs. P. P. Rathore, approaches Satyaveer to hire him to procure evidence of her husband&apos;s affair. She pays him, and Satyaveer manages to get some photos for her. However, things take a mysterious turn when Satyaveer realizes the woman who hired him isn&apos;t who she claimed to be. He later encounters a woman named Manorama, who is running from pursuers. She asks him to remember her name and age before dying in what appears to be a suicide related to a canal project sponsored by Rathore.Satyaveer decides to investigate further and discovers that Manorama was connected to a local children&apos;s home. He is attacked by thugs looking for information. Meanwhile, he befriends Manorama&apos;s roommate, Sheetal, who eventually stays with him for a while. Satyaveer attends an event with Rathore and follows him, discovering Rathore&apos;s illegitimate daughter, Sameera.As Satyaveer digs deeper, he finds that Sameera and her doctor have been murdered. He also learns that Rathore is a pedophile who used the orphaned children from the home for his own purposes. Satyaveer confronts Rathore with evidence, including shocking photos, revealing Rathore&apos;s crimes. He also reveals that Manorama and the doctor wanted to expose Rathore&apos;s misdeeds.In the end, despite threats from Rathore, Satyaveer manages to escape and reunites with his family, realizing that sometimes the small fish can outsmart the big fish.",
      image: "/movie3.jpg",
    },
    {
      id:4,
      title: "Being Cyrus",
      description: "Cyrus Mistry, a wanderer, arrives at Dinshaw Sethna&apos;s house in Panchgani and becomes their sculpting apprentice. Dinshaw is an eccentric retired sculptor, and his wife Katy is having an affair with Farrokh, Dinshaw&apos;s brother in Mumbai. Katy sends Cyrus to Mumbai to retrieve money from her ill-treated father-in-law, Fardoonjee, and her sister-in-law, Tina, whom Farrokh mistreats.Katy manipulates Cyrus into murdering Fardoonjee and Tina so she can be with Farrokh. However, Cyrus learns Farrokh plans to kill him afterward. He arrives when Tina is away, kills Fardoonjee, and then Farrokh. Cyrus informs Katy of her failed plan before disappearing.Katy and Dinshaw are arrested for the murders, as the police find no evidence of Cyrus&apos; existence. Tina, who was away during the murders, is released.Months later, Cyrus returns to Tina&apos;s apartment, revealing they are siblings. Tina orchestrated the murders to inherit the Sethna property. Cyrus, unwilling to continue the scheme, takes the stolen money and leaves Tina, who plans another scheme alone.",
      image: "/movie4.avif",
    },
    {
      id: 5,
      title: "Dhobi Ghat",
      description: "The film follows the lives of three characters in Mumbai: Arun, a reclusive artist; Shai, an American banker with a passion for photography; and Munna, a dhobi who dreams of becoming a Bollywood actor.Arun and Shai have a one-night stand after meeting at Arun&apos;s exhibition. However, Arun expresses disinterest in continuing the relationship, leading to an argument. Munna, a dhobi who delivers Arun&apos;s laundry, becomes friends with Shai and agrees to show her around Mumbai for her photography project.Arun discovers a container left by the previous tenant, Yasmin, containing video diaries. Through these tapes, he learns about Yasmin&apos;s life and her struggles. Meanwhile, Shai begins to secretly photograph Arun from her father&apos;s construction site opposite his apartment.Munna continues to struggle to break into the film industry, working as a dhobi by day and killing rats by night. Despite developing feelings for Shai, Munna is unable to express them due to their differing social statuses.As Arun watches Yasmin&apos;s final tape, he realizes she may have committed suicide in the same apartment. This disturbs him, and he moves to a new place. Munna&apos;s life takes a tragic turn when his brother is killed, leading him to seek a new beginning in a different flat.The film ends with Arun completing a painting that includes elements of Yasmin&apos;s life. Shai tries to find Munna, who initially tries to avoid her but then decides to give her Arun&apos;s new address, signifying a new connection between the characters.",
      image: "/movie5.jpg",
    },
    // Add more moviesData as needed
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    
    <div className={styles.cinemaTab}>
      <div className={styles.MovieMudda}>
          <p>As a movie buff with a deep appreciation for Indian cinema (and cinema in general!), I&apos;m always on the lookout for brilliant films that deserve a wider recognition.So I just thought  about sharing some of these underrated pieces of cinematic brilliance .If you&apos;re looking for something fresh and exciting, I highly recommend giving these movies a try. You won&apos;t be disappointed!</p>
      </div>
      <div className={styles.horizontalCards}>
        {moviesData.map((item) => (
          <div key={item.id} className={styles.horizontalCard} onClick={() => handleItemClick(item)}>
            <div className={styles.cardImage}>
              <Image src={item.image} alt={item.title} width={150} height={150} />
            </div>
            <div className={styles.cardContent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button className={styles.closeButton} onClick={() => setSelectedItem(null)}>
              Close
            </button>
            <div className={styles.detailContainer}>
              <div className={styles.detailImage}>
                <Image src={selectedItem.image} alt={selectedItem.title} width={300} height={300} />
              </div>
              <div className={styles.detailText2}>
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Underrated_CinemaTab;
