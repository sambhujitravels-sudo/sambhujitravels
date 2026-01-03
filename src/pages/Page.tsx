import Header from '../components/Header';
import Footer from '../components/Footer';

const Page = ({ title }: { title: string }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4 py-16">
                <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
                <p className="text-gray-600">This page is under construction. Shambhu ji Travels is committed to providing the best service.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Page;
