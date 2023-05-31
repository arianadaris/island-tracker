import React from 'react';
import { Icon } from '@iconify/react';

import Layout from '../components/Layout';

import logo from '../assets/logo.png';

const About = () => {
    return (
        <Layout>
            <div className="w-full flex flex-col justify-center items-center space-y-8 px-[12rem]">
                <div className="flex flex-col space-y-4 justify-center items-center">
                    <img className="rounded-2xl w-30 h-30" src={logo} alt="Logo" />
                    <h1 className="text-4xl pt-4">Island Tracker</h1>
                    <p className="text-center w-3/4 text-lg leading-8 text-brown/80">I created this project to learn how to create a user authentication system and manage a database by using cost-efficient practices.</p>
                </div>
                {/* Cards */}
                <div className="flex space-x-8 justify-center items-center bg-nookLeaf py-8 px-16 rounded-xl w-full">
                    <div className="table w-full h-full table-fixed border-spacing-4">
                        <div className="table-row">
                            {/* Time Spent */}
                            <div className="table-cell">
                                <div className="bg-white h-full rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.1)] flex flex-col items-center px-4 pt-8 pb-12 space-y-4">
                                    <div className="rounded-full p-2" style={{backgroundColor: "#7CC9C340"}}>
                                        <Icon className="w-10 h-10" style={{color: "#7CC9C3"}} icon="mdi:clock" />
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <h3>Time Spent</h3>
                                        <p className="text-center text-sm text-brown/80">I spent a week creating this project from start to finish!</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Tech Stack */}
                            <div className="table-cell">
                                <div className="bg-white h-full rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.1)] flex flex-col items-center px-4 pt-8 pb-12 space-y-4">
                                    <div className="rounded-full p-2" style={{backgroundColor: "#7CC9C340"}}>
                                        <Icon className="w-10 h-10" style={{color: "#7CC9C3"}} icon="tabler:code" />
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <h3>Tech Stack</h3>
                                        <p className="text-center text-sm text-brown/80">ReactJS / TailwindCSS / Firebase Authentication / Firestore Database / jQuery</p>
                                    </div>
                                </div>
                            </div>

                            {/* APIs Used */}
                            <div className="table-cell">
                                <div className="bg-white h-4/5 rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.1)] flex flex-col items-center px-4 pt-8 pb-12 space-y-4">
                                    <div className="rounded-full p-2" style={{backgroundColor: "#7CC9C340"}}>
                                        <Icon className="w-10 h-10" style={{color: "#7CC9C3"}} icon="solar:server-bold" />
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <h3>APIs Used</h3>
                                        <p className="text-center text-sm text-brown/80"><a className="text-darkTeal hover:text-teal text-sm underline" href="http://acnhapi.com/" target="_blank" rel="noreferrer">ACNH API</a> is a fan-made Animal Crossing New Horizons RESTful API.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project Decisions */}
                <div className="bg-lightTeal/70 w-full rounded-xl p-8 flex flex-col space-y-4">
                    <h1 className="text-4xl">Project Decisions</h1>
                    <div className="table w-full border-spacing-y-8">
                        <div className="table-row-group">
                            <div className="table-row">
                                <div className="table-cell whitespace-nowrap pr-4">
                                    <h3>User Authentication</h3>
                                </div>
                                <div className="table-cell">
                                    <p className="text-brown/80 text-base">When using other programs or websites to manage a checklist, I would accidentally refresh the page and lose my list. By implementing user authentication, I can access my list from any device, regardless of whether I refresh the page or not.</p>
                                </div>
                            </div>
                        </div>
                        <div className="table-row-group">
                            <div className="table-row">
                                <div className="table-cell whitespace-nowrap pr-4">
                                    <h3>Database Management</h3>
                                </div>
                                <div className="table-cell">
                                    <p className="text-brown/80 text-base">During development, I had to learn how to limit the number of calls made to the database. The majority of calls made were to retrieve data from the database. I learned how to use react-query useQuery, which fetches and stores data in a cache. Now, I make a single data retrieval call to the database when the user first logs in. All other calls to the database involve updating or removing user data.</p>
                                </div>
                            </div>
                        </div>
                        <div className="table-row-group">
                            <div className="table-row">
                                <div className="table-cell whitespace-nowrap pr-4">
                                    <h3>UI Components</h3>
                                </div>
                                <div className="table-cell">
                                    <p className="text-brown/80 text-base">This project allowed me the opportunity to craft interface components from scratch. I developed all pop-up modals, forms, checkboxes and dropdown menus myself.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Personal Portfolio Promo */}
                <div className="bg-nookLeaf rounded-xl p-9 w-full h-[10rem] flex flex-col justify-center items-center space-y-4">
                    <h1>Check out more of my work!</h1>
                    <a className="bg-yellow py-2 px-4 rounded-full hover:bg-darkYellow" href="https://www.arianadaris.dev/" target="_blank" rel="noreferrer">arianadaris.dev</a>
                </div>
            </div>
        </Layout>
    );
};

export default About;