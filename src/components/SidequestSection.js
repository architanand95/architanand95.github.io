import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
// You can define your CSS styles
import styles from '../styles/Home.module.css'
import WriteupsTab from './WriteupsTab';
import CinemaTab from './CinemaTab';
import BooksTab from './BooksTab';

const SidequestSection = () => {
  const [activeTab, setActiveTab] = useState('writeups'); // Default active tab is Writeups

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="sidequest" className={styles.sidequestSection}>
      <h1 className={styles.subHeading2}>SideQuest</h1>
      <div className={styles.workTypeButtons}>
         <button
          className={`${styles.workTypeButton} ${activeTab === 'books' ? styles.active : ''}`}
          onClick={() => handleTabChange('books')}
        >
          Publications
        </button>
        <button
          className={`${styles.workTypeButton} ${activeTab === 'writeups' ? styles.active : ''}`}
          onClick={() => handleTabChange('writeups')}
        >
          Writeups

        </button>
        {/* <button
          className={`${styles.workTypeButton} ${activeTab === 'Cinema' ? styles.active : ''}`}
          onClick={() => handleTabChange('Cinema')}
        >
          Certifications
        </button>
         */}
       
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'writeups' && <WriteupsTab />}
        {activeTab === 'cinema' && <CinemaTab />}
        {activeTab === 'books' && <BooksTab />}
      </div>
    </section>
  );
};

export default SidequestSection;
