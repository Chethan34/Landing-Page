import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollSection from './components/ScrollSection';
import IndustryGrid from './components/IndustrialGrid';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ScrollSection/>
            <IndustryGrid/>
            <Footer />
        </div>
    );
}