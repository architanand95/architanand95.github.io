import '../styles/globals.css';
import CustomIcon from '../components/CustomIcon';
import Navigation from '../components/Navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SidequestSection from '../components/SidequestSection';
function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
