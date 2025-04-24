'use client';

export default function Services() {
    const services = [
        {
            title: 'Plastic Surgery',
            description: 'Advanced cosmetic and reconstructive surgeries by expert surgeons.',
            image: '/images/plastic-surgery.jpg',
        },
        {
            title: 'Laser Treatments',
            description: 'Skin rejuvenation, hair removal, and aesthetic laser procedures.',
            image: '/images/laser-treatment.jpg',
        },
        {
            title: 'Dental Care',
            description: 'Comprehensive dental services for a perfect and healthy smile.',
            image: '/images/dental-care.jpg',
        },
    ];

    return (
        <section className="py-16 px-6 bg-secondary text-dark">
            <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
            <div className="grid gap-8 md:grid-cols-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-primary mb-2">{service.title}</h3>
                        <p className="text-base">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
