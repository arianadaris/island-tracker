import React from 'react';

import heroImage from '../../assets/HeroImage.png';

const HeroSection = () => {

    return (
        <div className="flex space-x-4">
            <div className="w-1/2 flex flex-col justify-center h-[30rem] space-y-8">
                <h1 className="text-4xl">Build daily routines and transform your island life</h1>
                <p className="text-opacity-80">This Island Tracker offers a daily taskboard, helping you manage daily routines. Whether it's remembering to water flowers, find fossils or talk to villagers, the Island Tracker won't let you forget.</p>
                <a className="bg-yellow px-6 rounded-3xl my-4 group relative w-fit py-4" href="/about">
                    <p className="relative z-10">Learn More!</p>
                    <div className="w-full h-4 rounded-xl bg-darkYellow mt-[-1rem] relative z-[4] hidden group-hover:block"></div>
                </a>
            </div>
            <div className="w-1/2">
                <div className="w-full h-[30rem] bg-nookLeaf bg-slate-900 bg-blend-hard-light bg-cover rounded-xl flex justify-center items-center">
                    <img className="w-[31rem] " src={heroImage} alt="Hero" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;