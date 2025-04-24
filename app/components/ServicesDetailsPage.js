'use client';

export default function ServicesDetailsPage() {
    const services = [
        {
            title: 'Plastic Surgery',
            description:
                'Our plastic surgery services include facial enhancements, body contouring, and reconstructive surgeries. Each procedure is performed by our expert surgeons using the latest techniques in a state-of-the-art facility. Personalized consultations are provided to ensure patient safety and satisfaction.',
            image: '/images/plastic-surgery.jpg',
            priceRange: 'Starting from $500',
        },
        {
            title: 'Laser Treatments',
            description:
                'We offer a full range of laser treatments including skin rejuvenation, hair removal, pigmentation treatment, and vascular therapy. Our advanced laser equipment ensures effective, safe, and minimally invasive procedures suitable for all skin types.',
            image: '/images/laser-treatment.jpg',
            priceRange: 'Starting from $200',
        },
        {
            title: 'Dental Care',
            description:
                'Our dental department provides comprehensive oral healthcare services including dental implants, cosmetic dentistry, orthodontics, and routine dental check-ups. Our experienced dentists ensure your perfect smile with gentle and precise care.',
            image: '/images/dental-care.jpg',
            priceRange: 'Starting from $100',
        },
    ];

    return (
        <section className="py-16 px-6 text-dark">
            <h1 className="text-4xl font-bold text-primary text-center mb-10">Our Services in Detail</h1>
            <div className="space-y-12 max-w-5xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden md:flex hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full md:w-1/2 h-64 object-cover"
                        />
                        <div className="p-6 flex flex-col justify-center">
                            <h2 className="text-3xl font-semibold text-primary mb-4">{service.title}</h2>
                            <p className="text-base mb-4">{service.description}</p>
                            <p className="text-base font-medium text-accent">{service.priceRange}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
