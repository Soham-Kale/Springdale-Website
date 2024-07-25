import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <header className="text-black text-center py-8">
                <h1 className="text-4xl font-bold mb-1">About Us</h1>
            </header>
            <section className="history my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">History</h2>
                <p className="text-lg leading-relaxed">
                    Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
                </p>
            </section>
            <section className="vision my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Vision</h2>
                <p className="text-lg leading-relaxed">
                    To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
                </p>
            </section>
            <section className="mission my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Mission</h2>
                <p className="text-lg leading-relaxed">
                    To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
                </p>
            </section>
            <section className="principal-message my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Principal's Message</h2>
                <p className="text-lg leading-relaxed">
                    At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
                </p>
            </section>
            <section className="facilities my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Infrastructure and Facilities</h2>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                    <li>State-of-the-art science and computer labs</li>
                    <li>Spacious and well-equipped classrooms</li>
                    <li>Library with a vast collection of books and digital resources</li>
                    <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUs;