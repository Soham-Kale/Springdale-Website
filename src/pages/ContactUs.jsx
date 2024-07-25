import React, { useState } from 'react';

const ContactUs = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        let formErrors = {};
        if (!form.name) formErrors.name = "Name is required";
        if (!form.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            formErrors.email = "Email address is invalid";
        }
        if (!form.message) formErrors.message = "Message is required";
        return formErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setSubmitted(true);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="contact-us py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <div className="contact-info mb-8">
                    <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Email: info@springdale.edu</p>
                </div>
                {submitted ? (
                    <div className="thank-you-message bg-green-100 p-4 text-green-800">
                        <p>Thank you for your message! We will get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form bg-gray-100 p-8 rounded shadow-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                rows="5"
                                required
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>
                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
                    </form>
                )}
                <div className="map mt-8">
                    <h2 className="text-2xl font-bold mb-4">Find Us</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093985!2d-122.42177868468247!3d37.77492927975947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581599cbed6fb%3A0x5a1fbb3cb20ea88b!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1634580333603!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        className="border-0"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
