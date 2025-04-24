'use client';

export default function HomePage() {
    return (
        <section
            className="homepage text-center py-32 px-6">
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
                Welcome to Medica Clinics
            </h1>
            <p className="text-lg text-white max-w-xl mx-auto drop-shadow">
                We offer world-class medical services including plastic surgery, laser treatments, and dental care. Your beauty and wellness journey starts here.
            </p>
            <button className="mt-8 bg-primary text-white py-3 px-6 rounded-xl hover:bg-accent transition duration-300">
                Book an Appointment
            </button>
        </section>
    );
}
