import React from 'react';

const Students = () => {
    return (
        <div className="students-page">
            <header className="  text-black text-center py-8">
                <h1 className="text-4xl font-bold mb-1">Students</h1>
            </header>
            <section className="life-at-school my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Life at Springdale</h2>
                <p className="text-lg leading-relaxed">
                    At Springdale Public School, students engage in a variety of extracurricular activities, clubs, and societies that foster holistic development.
                </p>
                <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Extracurricular Activities</h3>
                        <ul className="list-disc list-inside text-lg leading-relaxed">
                            <li>Music</li>
                            <li>Dance</li>
                            <li>Drama</li>
                            <li>Art</li>
                            <li>Sports</li>
                            <li>Robotics</li>
                            <li>Debate Club</li>
                            <li>Science Club</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Clubs and Societies</h3>
                        <ul className="list-disc list-inside text-lg leading-relaxed">
                            <li>Literary Society</li>
                            <li>Environmental Club</li>
                            <li>Astronomy Club</li>
                            <li>Coding Club</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Student Achievements</h3>
                        <ul className="list-disc list-inside text-lg leading-relaxed">
                            <li>John Smith - National Level Math Olympiad Winner</li>
                            <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
                            <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="student-council my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Student Council</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-lg leading-relaxed">
                        Our student council provides leadership opportunities and fosters a sense of responsibility among students.
                    </p>
                    <ul className="list-disc list-inside text-lg leading-relaxed mt-4">
                        <li><strong>President:</strong> Amy Parker, Grade 12</li>
                        <li><strong>Vice President:</strong> Rajiv Mehta, Grade 11</li>
                        <li><strong>Secretary:</strong> Lisa Wong, Grade 10</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Students;