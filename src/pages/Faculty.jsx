import React from 'react';

const Faculty = () => {
    const facultyMembers = [
        {
            name: 'John Doe',
            position: 'Principal',
            qualification: 'M.Ed',
            experience: '20 years of experience in educational administration.',
            image: 'src/assets/principle.jpg', // Placeholder image URL
        },
        {
            name: 'Jane Smith',
            position: 'Vice Principal',
            qualification: 'M.Sc. in Physics',
            experience: '15 years of teaching experience.',
            image: 'src/assets/vicePrinciple.jpg',
        },
        {
            name: 'Emily Johnson',
            position: 'English Teacher',
            qualification: 'M.A. in English',
            experience: '10 years of teaching experience.',
            image: 'src/assets/english.jpg',
        },
        {
            name: 'Michael Brown',
            position: 'Mathematics Teacher',
            qualification: 'M.Sc. in Mathematics',
            experience: '8 years of teaching experience.',
            image: 'src/assets/math.jpg',
        },
        {
            name: 'Sophia Davis',
            position: 'Science Teacher',
            qualification: 'M.Sc. in Chemistry',
            experience: '12 years of teaching experience.',
            image: 'src/assets/scienceTeacher.jpg',
        },
        {
            name: 'David Wilson',
            position: 'Computer Science Teacher',
            qualification: 'B.Tech in Computer Science',
            experience: '5 years of teaching experience.',
            image: 'src/assets/csTech.jpg',
        },
    ];

    return (
        <div className="faculty-page container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Our Faculty</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {facultyMembers.map((member, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 mx-auto rounded-full mb-4"
                        />
                        <h2 className="text-xl font-semibold text-center">{member.name}</h2>
                        <p className="text-center text-gray-600">{member.position}</p>
                        <p className="text-center text-gray-600 italic mb-2">{member.qualification}</p>
                        <p className="text-center text-gray-700">{member.experience}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faculty;
