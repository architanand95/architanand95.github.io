import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import styles from '../styles/Home.module.css';

const Underrated_CinemaTab = () => {
  const moviesData = [
    // Your movies data, each object with id, image, title, and description
    {
  // id: 1,
  // title: "Fast Bowler Injury Prevention System",
  // description: "A Predictive Model for Analyzing and Preventing Injuries in Bowlers through Posture Analysis and Reverse Image Search, ICT4SD 2024 – Goa, Springer. This study presents a model that captures the posture of bowlers at their landing stage to analyze actions for potential injury risks. If an action is labeled as injury-prone, the model proceeds to a reverse image search stage, predicting an alternative action that is less prone to injuries and requires minimal adjustments to the original action, thus enhancing bowler safety.",
  // image: "/mov1.webp"
}

    
    
    // Add more moviesData as needed
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    
    <div className={styles.cinemaTab}>
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
