import React from 'react';
import sport from "../assets/sport.jpeg"
import project from "../assets/exhibition.jpg"
import cult from "../assets/cultural.jpg"
import classes from "../assets/classes.jpg"
import librari from "../assets/library.jpg"

const Gallery = () => {
    return (
        <div className="gallery-page">
            <header className=" text-black text-center py-16">
                <h1 className="text-4xl font-bold mb-4">Gallery</h1>
                <p className="text-lg leading-relaxed">Explore our school events and activities.</p>
            </header>
            <section className="photos my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Photos</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <img src={sport} alt="Sports Day" className="rounded-lg mb-2" />
                        <p className="text-lg">Students participating in various sports events.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <img src={project} alt="Science Exhibition" className="rounded-lg mb-2" />
                        <p className="text-lg">Students presenting their science projects.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <img src={cult} alt="Cultural Fest" className="rounded-lg mb-2" />
                        <p className="text-lg">Students performing in the cultural fest.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <img src={classes} alt="Classroom" className="rounded-lg mb-2" />
                        <p className="text-lg">A glimpse of our interactive classrooms.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <img src={librari} alt="Library" className="rounded-lg mb-2" />
                        <p className="text-lg">Students reading and studying in the school library.</p>
                    </div>
                </div>
            </section>
            <section className="videos my-8 container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Videos</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <video controls className="rounded-lg mb-2">
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="text-lg">Virtual tour of Springdale Public School.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <video controls className="rounded-lg mb-2">
                            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="text-lg">Highlights from the Annual Function 2023.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
