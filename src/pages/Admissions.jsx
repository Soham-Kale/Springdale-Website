import React from 'react';

const Admissions = () => {
    return (
        <div className="admissions-page">
            <header className="  text-black text-center py-8">
                <h1 className="text-4xl font-bold mb-1">Admissions</h1>
            </header>
            <section className="process my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
                <p className="text-lg leading-relaxed">
                    Admission forms are available for download. Submit the completed form along with required documents at the school office.
                </p>
            </section>
            <section className="criteria my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Admission Criteria</h2>
                <p className="text-lg leading-relaxed">
                    Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
                </p>
            </section>
            <section className="important-dates my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Important Dates</h2>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                    <li><strong>Admission Form Availability:</strong> March 1st</li>
                    <li><strong>Last Date for Submission:</strong> March 31st</li>
                    <li><strong>Entrance Test:</strong> April 15th</li>
                    <li><strong>Announcement of Results:</strong> April 30th</li>
                </ul>
            </section>
            <section className="download-form my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Download Admission Form</h2>
                <a
                    href="https://modelacademy.in/oldweb/Adm-Form.pdf"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
                    download
                >
                    Download Form
                </a>
            </section>
        </div>
    );
};

export default Admissions;
