import React from 'react';
import { useState } from 'react';
import "./intro.css"

const Intro = () => {
    const [intro] = useState([
        {
            name: "guy",
            image: "https://st2.depositphotos.com/1010683/7109/i/950/depositphotos_71090693-stock-photo-caucasian-handsome-man-in-grey.jpg",
        },
        {
            name: "girl",
            image: "https://s1.1zoom.me/big3/232/Sophie_Turner_White_background_Blonde_girl_Glance_562095_2560x1440.jpg",
        },
        {
            name: "boy",
            image: "https://media.istockphoto.com/id/1124742827/photo/happy-curly-boy-laughing-and-holding-skateboard.jpg?s=612x612&w=0&k=20&c=ZyvGDajiAgrGB0iMET4hcopuWXG7u_cYV9b-RfttmsU=",
        },
        {
            name: "girl",
            image: "https://img.freepik.com/premium-photo/image-asian-child-posing-blue-background_296537-6329.jpg?w=2000",
        },
        {
            name: "baby",
            image: "https://media.istockphoto.com/id/867206720/photo/the-baby-with-headphones-on-a-yellow-background.jpg?s=612x612&w=0&k=20&c=sXS4n3oigxctEXAD1pURanWz6a2Q9VfUw_4jwlPQ3vE=",
        },
        {
            name: "clothes",
            image: "https://img.freepik.com/premium-photo/stack-clothing-isolated-white_93675-64684.jpg?w=2000",
        }
    ]);
    const [introBanner] = useState([
        {
            img: "https://theglobalhaat.com/image/cache/catalog/icon/bnew3-1056x450.jpg"
        },
        {
            img: "https://cdn.create.vista.com/downloads/5935e56d-0272-44a1-bba7-9cbc14a43b2b_1024.jpeg"
        },
        {
            img: "https://www.peopleglobalrelocation.com/wp-content/uploads/familia-de-adopcion-1-1536x1025.jpg"
        },
    ]);






    return (
        <div>
            <div className="intro-products">
                {intro.map((item, index) => {
                    return (
                        <div className="intro-product" key={index}>
                            <div className="intro-product-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="intro-banner">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={introBanner[0].img} className="d-block w-100 h-100" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={introBanner[1].img} className="d-block w-100 h-100" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={introBanner[2].img} className="d-block w-100 h-100" alt="..." />
                        </div>


                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Intro;
