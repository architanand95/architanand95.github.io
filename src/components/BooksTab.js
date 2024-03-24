import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import styles from '../styles/Home.module.css';

const BooksTab = () => {
  const booksData = [
    // Your books data, each object with id, image, title, and description
    {
      id: 1,
      title: "The Clifton Chronicles",
      description: "The Clifton Chronicles by Jeffrey Archer is a gripping series that spans generations, following the lives of the Clifton and Barrington families. At its heart is Harry Clifton, a determined young man from humble beginnings whose ambition to become a writer propels him through a journey of obstacles and triumphs. His childhood friend and rival, Giles Barrington, represents the contrasting world of privilege and wealth.As the series unfolds, readers are drawn into a web of intricate relationships and complex characters. Emma Barrington, Giles' sister and Harry's love interest, adds a layer of romance and drama to the narrative. Set against the backdrop of the 20th century, the series incorporates real historical events, from World War I to the Cold War era, grounding the characters' lives in a vivid and ever-changing world.Throughout the books, readers are taken on an emotional rollercoaster as they witness the characters' highs and lows, their loves and losses. Archer's storytelling prowess shines through with unexpected twists and turns that keep readers eagerly turning the pages. It is not just a tale of ambition and rivalry; it's a story of family bonds, loyalty, and the resilience of the human spirit. With its blend of drama, romance, and historical context, this series offers readers a compelling and unforgettable saga.",
      image: "/book1.webp",
    },
    {
      id: 2,
      title: " Ram Chandra Series.",
      description: "The 'Ram Chandra Series' by Amish is a captivating retelling of the epic Ramayana, focusing on the character of Sita. Amish brings a fresh perspective to this ancient tale, reimagining Sita as a strong, independent woman who faces trials and tribulations with courage and resilience.At the heart of the series is Sita, the adopted daughter of King Janak, who later becomes the wife of Lord Ram. The first book, 'Sita: Warrior of Mithila,' introduces us to a young and spirited Sita who discovers her true identity and embarks on a journey to fulfill her destiny. Amish's portrayal of Sita as a warrior princess adds a new dimension to her character, showcasing her bravery and determination.The series delves into Sita's relationship with Lord Ram, exploring their deep love and unwavering devotion to each other. Despite the challenges they face, including exile and separation, their bond remains strong throughout the series. Amish also highlights Sita's role as a leader and strategist, showcasing her intelligence and resourcefulness in times of crisis.As the story unfolds, readers are introduced to a rich tapestry of characters, from the noble Lord Ram to the loyal Hanuman and the cunning Ravana. Each character is intricately woven into the narrative, adding depth and complexity to the retelling of this timeless epic.Throughout the series, Amish skillfully weaves together themes of love, duty, honor, and sacrifice. Sita's journey is one of self-discovery and empowerment as she navigates the challenges of her role as queen and wife. The series also explores larger themes of justice, righteousness, and the eternal battle between good and evil.Amish's storytelling is both engaging and thought-provoking, immersing readers in a world of magic, mythology, and moral dilemmas. With its blend of mythology and fantasy, the 'Sita: Ram Chandra Series' offers readers a fresh and exciting take on the classic tale of the Ramayana. It is a tale of love, courage, and the enduring power of the human spirit, making it a must-read for fans of epic fantasy and Indian mythology.",
      image: "/book2.jpg",
    },
    {
      id: 3,
      title: " The Lost Symbol",
      description: "The Lost Symbol by Dan Brown is a thrilling mystery novel that follows renowned symbologist Robert Langdon on another adventure filled with secrets, symbols, and hidden truths. Set in Washington D.C., the story takes readers on a fast-paced journey through the city's iconic landmarks and Masonic history. At the center of the novel is Robert Langdon, who finds himself embroiled in a web of intrigue when his mentor, Peter Solomon, is kidnapped. The kidnapper, Mal'akh, a tattooed and sinister figure, demands that Langdon decipher ancient symbols and uncover the location of the Masonic Pyramid, a mythical source of untold power.As Langdon races against time to save Peter Solomon and uncover the truth behind the symbols, readers are treated to a thrilling ride filled with twists and turns. Along the way, Langdon teams up with Peter's sister, Katherine Solomon, a brilliant scientist who holds the key to unlocking the mysteries of the symbols.The novel delves deep into the world of Freemasonry, exploring its history, symbols, and rituals. Through Langdon's investigation, readers are introduced to the enigmatic world of Masonic secrets and hidden knowledge. Dan Brown weaves together history, art, and science, creating a rich tapestry of intrigue and mystery.As Langdon unravels the clues left behind by the ancient Masons, he discovers a shocking truth that could change the course of history. The story is filled with codes, puzzles, and cryptic messages, keeping readers on the edge of their seats as they try to decipher the mysteries alongside Langdon.'The Lost Symbol' is not just a tale of adventure and mystery; it also delves into deeper themes of faith, science, and the age-old conflict between reason and belief. As Langdon navigates the treacherous world of hidden symbols and ancient secrets, he is forced to confront his own beliefs and assumptions.Dan Brown's masterful storytelling and intricate plot twists make 'The Lost Symbol' a captivating read from start to finish. With its blend of history, mystery, and suspense, the novel offers readers a thrilling glimpse into the world of secret societies and hidden knowledge. It is a gripping tale of discovery and revelation that will leave readers eager for more.",
      image: "/book3.jpg",
    },
    // Add more booksData as needed
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={styles.booksTab}>
      <div className={styles.horizontalTabs}>
        {booksData.map((item) => (
          <div key={item.id} className={`${styles.horizontalTab} ${selectedItem === item ? styles.active : ''}`} onClick={() => handleItemClick(item)}>
            <div className={styles.tabImage}>
              <Image src={item.image} alt={item.title} width={100} height={100} />
            </div>
            <div className={styles.tabText}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksTab;


