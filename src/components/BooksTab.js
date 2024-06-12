import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import styles from '../styles/Home.module.css';

const BooksTab = () => {
  const booksData = [
    // Your books data, each object with id, image, title, and description
    {
      id: 1,
      title: "Fast Bowler Injury Prevention System",
      description: "A Predictive Model for Analyzing and Preventing Injuries in Bowlers through Posture Analysis and Reverse Image Search, ICT4SD 2024 – Goa, Springer. This study presents a model that captures the posture of bowlers at their landing stage to analyze actions for potential injury risks. If an action is labeled as injury-prone, the model proceeds to a reverse image search stage, predicting an alternative action that is less prone to injuries and requires minimal adjustments to the original action, thus enhancing bowler safety",
      image: "/mov1.webp",
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


