import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Instructor from './components/Instructor';
import CourseTracks from './components/CourseTracks';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Instructor />
        <CourseTracks />
        <Services />
        <SocialProof />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
