import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Shambhu ji Travels?</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-4">
                        <div className="bg-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                            <ShieldCheck size={40} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Reliable & Safe</h3>
                        <p className="text-gray-600">Our drivers are verified and trained to ensure your safety during the journey.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-green-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                            <CheckCircle size={40} className="text-accent" />
                        </div>
                        <h3 className="text-xl font-bold">Transparent Pricing</h3>
                        <p className="text-gray-600">No hidden charges. Pay what you see. We offer the most competitive rates.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-orange-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                            <Clock size={40} className="text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold">24/7 Support</h3>
                        <p className="text-gray-600">We are always available to assist you with your booking queries anytime.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
