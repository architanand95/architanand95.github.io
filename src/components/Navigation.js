import { FaUser, FaBriefcase, FaProjectDiagram, FaLightbulb, FaEnvelope, FaHome, FaNetworkWired } from 'react-icons/fa';
import styles from '../styles/Navigation.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const router = useRouter();
  const [isNavbarFixed, setIsNavbarFixed] = useState(true);

  const handleNavigate = (path) => {
    if (path === '/') {
      const isAtTop = window.scrollY === 0;
      if (isAtTop) {
        window.location.reload(); // Reload the page
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
      }
    } else {
      // Scroll to the corresponding section based on the path
      const element = document.getElementById(path.substring(1)); // Remove the leading '/'
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isNavbarFixed ? styles.fixed : ''}`}>
      <div className={styles.navHeader}>
        <a onClick={() => handleNavigate('/')}>
          <img src="/favicon.ico" alt="Custom Icon" className={styles.navIcon} />
        </a>
        <div className="flex items-center">
          {/* <button className={styles.navButton} onClick={() => handleNavigate('/')}>
            <FaHome /> Home
          </button> */}
          <button className={styles.navButton} onClick={() => handleNavigate('/about')}>
            <FaUser /> About
          </button> 
          
          <button className={styles.navButton} onClick={() => handleNavigate('/experiences')}>
            <FaBriefcase /> Experiences
          </button>
          <button className={styles.navButton} onClick={() => handleNavigate('/projects')}>
            <FaProjectDiagram /> Projects
          </button>
          <button className={styles.navButton} onClick={() => handleNavigate('/SideQuest')}>
            <FaLightbulb /> SideQuest
          </button>
          <button className={styles.navButton} onClick={() => handleNavigate('/contact')}>
            <FaEnvelope /> Get in Touch
          </button>
         
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
