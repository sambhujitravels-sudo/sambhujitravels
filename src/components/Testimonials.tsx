

const Testimonials = () => {
    const reviews = [
        {
            name: "Rajesh Kumar",
            role: "Customer",
            text: "Excellent service! The cab arrived on time and the driver was very polite. Highly recommended.",
            location: "Bareilly"
        },
        {
            name: "Amit Singh",
            role: "Business Traveler",
            text: "Clean car and smooth drive. I use Shambhu ji Travels for all my outstation trips.",
            location: "Lucknow"
        },
        {
            name: "Priya Sharma",
            role: "Tourist",
            text: "Affordable rates and safe for female travelers. Very happy with the service.",
            location: "Delhi"
        }
    ];

    return (
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-blue-800 p-6 rounded-xl border border-blue-700">
                            <div className="flex space-x-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => <span key={i}>&#9733;</span>)}
                            </div>
                            <p className="mb-4 italic">"{review.text}"</p>
                            <div>
                                <p className="font-bold">{review.name}</p>
                                <p className="text-sm text-blue-200">{review.role}, {review.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
