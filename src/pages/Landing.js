import React, { useRef } from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';

import heroImage from '../assets/HeroImage.png';

const Landing = () => {
    // Refs
    const inputBox = useRef();

    const handleSubmit = () => {
        inputBox.current.value = "";
    };

    return (
        <Layout>
            <div className="w-full flex flex-col space-y-12 px-[12rem]">
                {/* Hero Section */}
                <div className="flex space-x-8 bg-white rounded-xl p-12">
                    <div className="w-1/2 flex flex-col justify-center h-[30rem] space-y-8 pr-8">
                        <h1 className="text-4xl">Build daily routines and transform your island life</h1>
                        <p className="text-brown/80">This Island Tracker offers a daily taskboard, helping you manage daily routines. Whether it's remembering to water flowers, find fossils or talk to villagers, the Island Tracker won't let you forget.</p>
                        <a className="bg-yellow px-6 rounded-3xl my-4 group relative w-fit py-4" href="/about">
                            <p className="relative z-10">Learn More!</p>
                            <div className="w-full h-4 rounded-xl bg-darkYellow mt-[-1rem] relative z-[4] hidden group-hover:block"></div>
                        </a>
                    </div>
                    <div className="w-1/2">
                        <div className="w-full h-[30rem] bg-nookLeaf bg-slate-900 bg-blend-hard-light bg-cover rounded-xl flex justify-center items-center">
                            <img className="w-[27rem] " src={heroImage} alt="Hero" />
                        </div>
                    </div>
                </div>
                {/* Cards */}
                <div className="bg-teal/70 w-full h-[21rem] rounded-xl flex space-x-8 justify-center items-center">
                    <Card 
                        icon="carbon:task-star" 
                        title="Daily Tasks" 
                        descr="Keep track of your daily habits with a taskboard and easily reset it each day!"
                        bgColor="#A7ED9B"
                    />
                    <Card 
                        icon="fluent:star-12-regular" 
                        title="Island Goals" 
                        descr="Improve your island life by working towards your goals throughout your day." 
                        bgColor="#8BE3AF"
                    />
                    <Card 
                        icon="tabler:message-circle" 
                        title="Friendships" 
                        descr="Improve your relationships with your villagers by remembering to say hey!"
                        bgColor="#A7ED9B"
                    />
                </div>
                {/*  */}
                <div className="bg-lightTeal w-full h-fit py-8 px-12 rounded-xl flex flex-col space-y-8 items-center my-auto">
                    <div className="flex flex-col space-y-2 items-center">
                        <h1>Have a suggestion?</h1>
                        <p className="text-brown/80">Let us know what features you want to see next!</p>
                    </div>
                    <div className="w-3/5 flex space-x-4">
                        <input className="w-full px-4 py-2 rounded-full" type="text" placeholder="Send us a message..." ref={inputBox} />
                        <button onClick={() => handleSubmit()}>Submit!</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Landing;