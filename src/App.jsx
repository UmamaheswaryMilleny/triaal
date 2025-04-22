import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GiftIdeas from './components/GiftIdeas';
import Footer from './components/Footer';
import SplitText from './react-bits/SplitText/SplitText'
import SplashCursor from './react-bits/SplashCursor/SplashCursor'



function App() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div className="font-sans">
      
      <Navbar />
      <SplashCursor />
      <Hero />
      <SplitText
  text="Hello, Tailwind!"
  className="text-2xl font-semibold text-center"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>
      <About />
      <GiftIdeas />
      <Footer />
    </div>
  );
}

export default App;
