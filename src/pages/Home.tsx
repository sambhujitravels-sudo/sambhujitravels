import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import PopularDestinations from '../components/PopularDestinations';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <PopularDestinations />
            <Footer />
        </div>
    );
};

export default Home;
