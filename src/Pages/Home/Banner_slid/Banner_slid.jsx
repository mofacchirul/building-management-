import React from 'react';
import img1 from '../../../assets/Banner1/c7d8b916-82c0-40df-b3fe-3ff961d69e41.jpg';
import img2 from '../../../assets/Banner1/Comprehensive Site Inspection by Safety Officers Ensuring Health and Safety Protocols Adherence in _ Premium AI-generated image.jpg';
import img3 from '../../../assets/Banner1/Gestão de Projetos de Construção_ Tendências atuais, ferramentas inovadoras e segredos para o suc___.jpg';
import img4 from '../../../assets/Banner1/Read the article on Reporting Key Performance Indicators to the Board for CIA Part 2 -.jpg';

const Banner_slid = () => {
    return (
        <div>
            {/* Carousel */}
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={img1}
                        className="w-full h-[400px] object-cover"
                        alt="Banner 1"
                    />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={img2}
                        className="w-full h-[400px] object-cover"
                        alt="Banner 2"
                    />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={img3}
                        className="w-full h-[400px] object-cover"
                        alt="Banner 3"
                    />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src={img4}
                        className="w-full h-[400px] object-cover"
                        alt="Banner 4"
                    />
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner_slid;