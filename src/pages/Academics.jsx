import React from 'react';

const Academics = () => {
    return (
        <div className="academics-page">
            <header className=" text-black text-center py-8">
                <h1 className="text-4xl font-bold mb-1">Academics</h1>
            </header>
            <section className="curriculum my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold">Primary (Grades 1-5)</h3>
                        <p className="text-lg leading-relaxed">English, Mathematics, Science, Social Studies, Art, Physical Education</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Secondary (Grades 6-10)</h3>
                        <p className="text-lg leading-relaxed">English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Senior Secondary (Grades 11-12)</h3>
                        <p className="text-lg leading-relaxed">
                            <strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English
                        </p>
                        <p className="text-lg leading-relaxed">
                            <strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English
                        </p>
                    </div>
                </div>
            </section>
            <section className="teaching-methodologies my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Teaching Methodologies</h2>
                <p className="text-lg leading-relaxed">
                    We use a blend of traditional and modern teaching techniques to cater to different learning styles.
                </p>
            </section>
            <section className="educational-resources my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
                <p className="text-lg leading-relaxed">
                    Digital classrooms, interactive learning modules, and access to online educational platforms.
                </p>
            </section>
        </div>
    );
};

export default Academics;