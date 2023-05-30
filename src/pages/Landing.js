import React from 'react';
import Layout from '../components/Layout';

import HeroSection from '../components/Hero/HeroSection';
import Card from '../components/Card';

const Landing = () => {
    return (
        <Layout>
            <div className="w-full flex flex-col space-y-12 px-[12rem]">
                <HeroSection />
                <div className="bg-teal/40 w-full h-[21rem] rounded-xl flex space-x-8 justify-center items-center">
                    <Card 
                        icon="pepicons-pop:list-circle" 
                        title="Daily Tasks" 
                        descr="Keep track of your daily habits with a taskboard and easily reset it each day!" 
                    />
                    <Card 
                        icon="fluent:star-12-regular" 
                        title="Island Goals" 
                        descr="Improve your island life by working towards goals throughout your day." 
                    />
                    <Card 
                        icon="tabler:message-circle" 
                        title="Friendships" 
                        descr="Improve your relationships with your villagers by remembering to say hey!" 
                    />
                </div>
                <div className="bg-teal w-full h-[35rem] rounded-xl">

                </div>
                <div className="bg-white w-full h-[5rem] rounded-xl">
                    
                    </div>
            </div>
        </Layout>
    );
};

export default Landing;