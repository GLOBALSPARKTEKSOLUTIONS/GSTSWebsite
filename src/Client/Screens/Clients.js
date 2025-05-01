import React from 'react';
import Slider from 'react-slick';
import '../Styles/client.css'
import afmc from '../../Assets/afmc.png';
import vigilant from '../../Assets/vigilant.jfif';
import osi from '../../Assets//osi.jpg';
import alloys from '../../Assets/alloys.jpg';
import Adtech from '../../Assets/adtech.jpg';
import enroc from '../../Assets/encroc.jfif';
import saksoft from '../../Assets/saksoft.jfif';


const Clients = () => {
    const clients = [
        { id: 1, name: 'AFMC', image: afmc, description: 'Leading Medical Training Institute.' },
        { id: 2, name: 'Adtech', image: Adtech, description: 'Global air conditioning innovator.' },
        { id: 3, name: 'Enroc', image: enroc, description: 'Retail and distribution experts.' },
        { id: 4, name: 'Saksoft', image: saksoft, description: 'Dairy industry leader.' },
        { id: 5, name: 'Vigilant', image: vigilant, description: 'Top consulting firm.' },
        { id: 6, name: 'Alloys', image: alloys, description: 'Education and publishing giant.' },
        { id: 7, name: 'OSI', image: osi, description: 'Food solutions specialist.' },

    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="clients-container">
            <h3 className='hTitle'>Our Clients</h3>
            <p>We offer a wide range of services to help you succeed.</p>
            <Slider {...settings} className="clients-carousel">
                {clients.map((client) => (
                    <div key={client.id} className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={client.image} alt={client.name} className="client-img" />
                            </div>
                            <div className="flip-card-back">
                                <h3 className="client-name">{client.name}</h3>
                                <p className="client-description">{client.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Clients;
