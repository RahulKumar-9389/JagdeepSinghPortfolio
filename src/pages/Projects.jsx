import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Layout from '../layout/Layout';
import SampleNextArrow from '../components/SampleNextArrow'
import SamplePrevArrow from '../components/SamplePrevArrow'

import { useState } from "react";
import projects from '../data/projects';
import { nanoid } from "nanoid";
import { FaGithub } from "react-icons/fa";
import TransactionEffect from "../components/TransactionEffect";
import { Link } from "react-router-dom";




const Projects = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500,
        beforeChange: (current, next) => setSlideIndex(next),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return <>
        <Layout title="Projects">
            <TransactionEffect />

            <section id="projects">
                <h1>My Latest Work!</h1>

                <div className="carousel_container">
                    <Slider {...settings}>

                        {
                            projects.map((project, index) => {
                                return <div key={nanoid()} className={index == slideIndex ? "active_slide slide" : 'slide'}>
                                    <img src={project.img_url} alt={project.title} />
                                    <h2>{project.title} <Link to="https://github.com/Jagdeep113"> <FaGithub className="git_icon" /></Link></h2>
                                    <p>{project.description}</p>
                                    <div className="tech_stack">
                                        {
                                            project.tech_stack.map((val, i) => {
                                                return <span key={i}>{val}</span>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }

                    </Slider>
                </div>
            </section>

        </Layout>
    </>
};

export default Projects;