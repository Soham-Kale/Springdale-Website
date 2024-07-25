import React from 'react';
import { Link } from 'react-router-dom';
import school from "../assets/school.jpg"
import sport from "../assets/sport.jpeg"
import exhibition from "../assets/exhibition.jpg"
import cultural from "../assets/cultural.jpg"

const Home = () => {
  const carouselItems = [
    {
      image: sport, // Replace with actual image URL
      caption: 'Annual Sports Day - Celebrating Excellence in Sports',
    },
    {
      image: exhibition,
      caption: 'Science Exhibition - Showcasing Student Innovations',
    },
    {
      image: cultural,
      caption: 'Cultural Fest - Embracing Diversity and Creativity',
    },
  ];

  return (
    <div className="home-page">
      <header className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Springdale Public School</h1>
        <p className="text-xl">Where we nurture young minds for a brighter future</p>
      </header>
      <section className="school-image my-8">
        <div className="container mx-auto">
          <img
            src={school} // Replace with actual school image URL
            alt="Springdale Public School"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="carousel my-8">
        <div className="container mx-auto">
          <div className="relative">
            {carouselItems.map((item, index) => (
              <div key={index} className="relative w-full mb-4">
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-85 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="quick-links container mx-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Link to="/about-us" className="bg-blue-100 p-4 rounded-lg text-center shadow hover:bg-blue-200">
            About Us
          </Link>
          <Link to="/academics" className="bg-blue-100 p-4 rounded-lg text-center shadow hover:bg-blue-200">
            Academics
          </Link>
          <Link to="/admissions" className="bg-blue-100 p-4 rounded-lg text-center shadow hover:bg-blue-200">
            Admissions
          </Link>
          <Link to="/faculty" className="bg-blue-100 p-4 rounded-lg text-center shadow hover:bg-blue-200">
            Faculty
          </Link>
          <Link to="/students" className="bg-blue-100 p-4 rounded-lg text-center shadow hover:bg-blue-200">
            Students
          </Link>
          <Link to="/gallery" className="bg-blue-100 p-4 rounded-lg text-center shadow hover:bg-blue-200">
            Gallery
          </Link>
          <Link to="/contact-us" className="bg-blue-100 p-4 rounded-lg text-center shadow hover:bg-blue-200">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
