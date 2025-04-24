'use client';

export default function ContactPage() {
    return (
        <section className="py-16 px-6 bg-secondary text-dark">
            <h1 className="text-4xl font-bold text-primary text-center mb-8">Contact Us</h1>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Contact Form */}
                <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            placeholder="Your message"
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-primary text-white py-3 px-6 rounded-xl hover:bg-accent transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Clinic Info */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-primary mb-2">Clinic Information</h2>
                        <p className="text-base">123 Medica Street, Cairo, Egypt</p>
                        <p className="text-base">Phone: +20 123 456 7890</p>
                        <p className="text-base">Email: info@medicaclinics.com</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Working Hours</h3>
                        <p className="text-base">Saturday - Thursday: 9:00 AM - 9:00 PM</p>
                        <p className="text-base">Friday: Closed</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
