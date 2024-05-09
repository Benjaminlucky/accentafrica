import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { FaPlay } from "react-icons/fa6";
import { RxCaretRight } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import { FaSchoolFlag } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { FcReading } from "react-icons/fc";
import { PiStudentBold } from "react-icons/pi";
import { RiArtboardFill } from "react-icons/ri";
import { HiDocumentReport } from "react-icons/hi";
import { FcBusiness } from "react-icons/fc";
import { FaUsersRectangle } from "react-icons/fa6";
import './home.css';
import { approach, goals, missionItems, speakers, visionColumns } from '../../data';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
    useEffect(() => {
        // Initialize ScrollReveal when the component mounts
        const sr = ScrollReveal();
        sr.reveal('.main__section', {
            duration: 1000,
            reset: true,
            distance: '30px',
            origin: 'top',
            easing: 'ease',
        });
        sr.reveal('.about__section', {
            duration: 1000,
            reset: true,
            distance: '30px',
            origin: 'bottom',
            easing: 'ease',
        });
        sr.reveal('.vision__section', {
            duration: 1000,
            reset: true,
            distance: '30px',
            origin: 'bottom',
            easing: 'ease',
        });
        sr.reveal('.approach__section', {
            duration: 1000,
            reset: true,
            distance: '30px',
            origin: 'bottom',
            easing: 'ease',
        });
        sr.reveal('.conference__section', {
            duration: 1000,
            reset: true,
            distance: '30px',
            origin: 'bottom',
            easing: 'ease',
        });
        sr.reveal('.goal__section', {
            duration: 1000,
            reset: true,
            distance: '30px',
            origin: 'bottom',
            easing: 'ease',
        });
    }, []); // Empty dependency array to run once on mount
    
    return (
        <main>
            <Helmet>
                <title> Accent Africa Alliance Ltd - Home</title>
                <title>Accent Africa Alliance Ltd</title>
                <link rel='canonical' href='... the page URL ...' />
                <meta name="keywords" content="global recognition, human development, culture, values, beliefs, skills, intentional human resources, progress, African civilization" />
            </Helmet>
            <div className="main__section">
                <div className="main__wrapper">
                    <div className="hero__section">
                        {/** hero section */}
                        <div className="hero__left">
                            <div className="typing-text">
                                <div>Driving</div>
                                <div>collaborations for</div>
                                <div>human</div>
                                <div>development.</div>
                            </div>
                        </div>
                        <div className="hero__right"></div>
                    </div>
                </div>
            </div>

            {/** About Section */}
            <div className="about__section">
                    <div className="about__wrapper">
                        <div className="about__content">
                            <div className="about__left"></div>
                            <div className="about__right">
                                <p className="about__para">
                                    Our esteemed organization is unwavering in its commitment 
                                    to acquiring global recognition as a leading proponent of the 
                                    development of the human personality, culture, values, beliefs, 
                                    and skills.
                                </p>
                                <p className="about__para">
                                    Our objective is to cultivate intentional human resources in order to 
                                    further the progress of our nation and foster the emergence of a new African civilization.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>

            {/** Vision Section */}
            <div className="vision__section">
                <div className="vision__wrapper">
                    <div className="vision__content">
                        <div className="vision__left">
                            <div className="vleft__content">
                                <div className="title">
                                    <h2>Our vision drivers collaborations</h2>
                                </div>
                                <p className="para">
                                    A cluster perspective that ensures a whole collaboration 
                                    for sustainable human resources growth.
                                </p>
                                <div className="vision__img">
                                    <FaPlay className='vision__icon' />
                                    <img src="./assets/collab.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="vision__right">
                            <div className="vright__content">
                                {
                                    visionColumns.map((column, index) => (
                                            <div key={index} className="vright__columns">
                                                <h3 className='subtitle'>{column.title}</h3>
                                                <p>{column.text}</p>
                                            </div>
                                    ))
                                }
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/** Approach Section */}

            <div className="approach__section">
                <div className="approach__wrapper">
                    <div className="approach__content">
                        <div className="title">
                            <h2>Our Approach to Human Development</h2>
                        </div>
                        <p className="para">
                            A cluster perspective that ensures a whole collaboration for sustainable human resources growth.
                        </p>
                        <div className="approach">
                            {
                                approach.map((item, index) => (
                                    <div key={index} className="approach__item">
                                        <img src={item.img} alt="" />
                                        <h3 className='subtitle '>{item.title}</h3>
                                        <p>{item.text}</p>
                                        <Link to={item.link} className='linkBtn'>{item.action}<RxCaretRight className='icon' /></Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/** Bridge Council */}
            <div className="bridge__section">
                <div className="bridge__wrapper">
                    <div className="bridge__content">
                        <div className="bridge__top">
                            <div className="bridge__logo">
                                <img src="./assets/bridgeLogo.svg" alt="" />
                            </div>
                            <div className="title">
                                <h2>Bridging socialization gap to nurturing a Godly civilization...</h2>
                            </div>
                            <p className="bridge__para">
                                The Bridge Council is the convergence of educators, parents, learners, educational practitioners, 
                                policy-makers, community leaders and corporate stakeholders to discuss, formulate and implement policy 
                                and issues on educational development and nation building. The Bridge Council Conference aims at enhancing the thinking 
                                process of the primary agents of socialization in Nigeria and Africa towards a positive and godly mind shift that would enable 
                                transformational changes for the rise of a godly, self-confident, and self-reliant African civilization and nations
                            </p>
                        </div>
                        <div className="bridge__bottom">
                            <div className="subtitle">
                                <h3>The Mission</h3>
                            </div>
                            <div className="mission__items">
                               {
                                missionItems.map((item, index) => (
                                    <div key={index} className="mission__item">
                                        <p>{item.missionItem}</p>
                                    </div>
                                ))
                               }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="conference__section">
                <div className="conference__wrapper">
                    <div className="conference__content">
                        <div className="conference__intro">
                            <div className="intro__items">
                                <div className="intro__item">
                                    <div className="accent__logo">
                                        <img src="./assets/accentLogo.svg" alt="Accent Africa Alliance Limited Logo" />
                                    </div>
                                </div>
                                <div className="intro__item">
                                    <div className="bridge__logo">
                                        <img src="./assets/bridgeCouncilLogo.svg" alt="Bridge Council Logo" />
                                    </div>
                                    <span></span>
                                </div>
                                <div className="intro__item">
                                    <div className="intro__title">
                                        <p>THE 5TH ASSEMBLAGE OF BRIDGE COUNCIL EDUCATIONAL CONFERENCE AFRICA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro__span">
                            -Presents
                        </div>
                        <div className="conference__title">
                            <div className="africa__map1">
                                <img src="./assets/smallmap1.svg" alt="Map of Africa" />
                            </div>
                            <div className="ctitle__img">
                                <img src="./assets/EdufusionAfrica.svg" alt="Edu Fusion Africa Conference Logo" />
                            </div>
                            <div className="africa__map2">
                                <img src="./assets/smappmap2.svg" alt="Map of Africa" />
                            </div>
                        <div className="conference__slug">
                            <p>Bridging Worlds, Shaping Minds</p>
                        </div>
                        </div>
                        <div className="conference__attending">
                            <div className="attending__container">
                                <h5>The Convergence of</h5>
                                <p>Educators, Educational Practitioners, Parents, Students, Policy-makers, Community Leaders, Corporate Stakeholders and Nation - Builders</p>
                                <h5>2 States <span>|</span> 4 Centers <span>|</span> 16 Speakers <span>|</span></h5>   
                            </div>
                        </div>
                        <div className="conference__keyhighlights">
                            <div className="highlights">
                                <h5>Key Highlights</h5>
                                <p>Empowering African-Led Education Globally <span>|</span> Evolutionizing Schools with Tech & Innovation 
                                Turning Infrastructure Challenges into Success Stories <span>|</span> Attracting Corporate Investment for Education Fueling Economic Growth in Schools & Communities <span>|</span> Engaging Parents & Students in Education Development Tailored Curricular for Every African Child</p>
                            </div>
                        </div>
                        <div className="conference__speakers">
                            {
                                speakers.map((speaker, index) => (
                                    <div key={index} className="speaker">
                                        <div className="speaker__img">
                                            <img src={speaker.img} alt={speaker.name} />
                                        </div>
                                        <div className="speaker__detail">
                                            <p className="speaker__name">{speaker.name}</p>
                                            <p className="speaker__title">{speaker.title}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="conference__locations">
                            <div className="conference__location">
                                <div className="locations">
                                    <div className="location">          
                                        <div className="location__title"><h4>Lagos State</h4></div>
                                        <div className="location__item">
                                            <p><FaLocationDot className='icon' /><span>Island Saturday, 26th October 2024</span></p>
                                            <p><FaLocationDot className='icon' /><span>Mainland Friday, 25th October 2024</span></p>
                                        </div>
                                    </div>

                                    <div className="location">
                                        <div className="location__title"><h4>Ogun State</h4></div>
                                        <div className="location__item">
                                            <p><FaLocationDot className='icon' /><span>Ota & Environs Thursday, 24th October 2024</span></p>
                                            <p><FaLocationDot className='icon' /><span>Abeokuta & Environs Wednesday, 23th October 2024</span></p>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="location__title"><h4>For more information and participation</h4></div>
                                        <div className="location__item">
                                            <p><FaLocationDot className='icon' /><span>Send WhatsApp Message to 08103910085</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/** CONFERENCE GOAL SECTION */}
            <div className="goal__section">
                <div className="goal__wrapper">
                    <div className="goal__content">
                        <div className="goal__top">
                            <div className="title">
                                <h2>The Bridge Council Goals</h2>
                            </div>
                            <div className="goal__subtitle">
                                Our collective objective is to foster collaboration and dialogue aimed at:
                            </div>
                        </div>
                        <div className="goal__bottom">
                            <div className="bottom__content">
                                <div className="goals__items">
                                    {
                                        goals.map((goal, index) => (
                                            <div key={index} className="goal__item">
                                                <div className="goal__number">
                                                    <h4>{goal.number}</h4>
                                                </div>
                                                <div className="goal">
                                                    <div className="goal__title">{goal.title}</div>
                                                    <div className="goal__text">{goal.goal}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                        <div className="conference__target">
                            <div className="target__title">
                                <div className="title">
                                    Conference Target Audience 
                                </div>
                            </div>
                            <div className="conference__icons">
                                <div className="audience__item">
                                    <div className="conference__icon">
                                        <FaSchoolFlag className='audience__icon' />
                                    </div>
                                    <div className="audience">
                                        <p>School Directors</p>
                                    </div>
                                </div>
                                <div className="audience__item">
                                    <div className="conference__icon">
                                        <MdFamilyRestroom />
                                    </div>
                                    <div className="audience">
                                        <p>Parent</p>
                                    </div>
                                </div>
                                <div className="audience__item">
                                    <div className="conference__icon">
                                        <FcReading className='audience__icon' />
                                    </div>
                                    <div className="audience">
                                        <p>Educators</p>
                                    </div>
                                </div>
                                <div className="audience__item">
                                    <div className="conference__icon">
                                        <PiStudentBold className='audience__icon' />
                                    </div>
                                    <div className="audience">
                                        <p>Students</p>
                                    </div>
                                </div>
                                <div className="audience__item">
                                    <div className="conference__icon">
                                        <RiArtboardFill  className='audience__icon' />
                                    </div>
                                    <div className="audience">
                                        <p>Educational Practitioners</p>
                                    </div>
                                </div>
                                <div className="audience__item">
                                    <div className="conference__icon">
                                        <HiDocumentReport className='audience__icon' />
                                    </div>
                                    <div className="audience">
                                        <p>Policy Makers</p>
                                    </div>
                                </div>
                                <div className="audience__item">
                                    <div className="conference__icon">
                                        <FcBusiness className='audience__icon' />
                                    </div>
                                    <div className="audience">
                                        <p>Corporate Stakeholders</p>
                                    </div>
                                </div>
                                <div className="audience__item">
                                    <div className="conference__icon">
                                        <FaUsersRectangle className='audience__icon' />
                                    </div>
                                    <div className="audience">
                                        <p>Nation Builders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
