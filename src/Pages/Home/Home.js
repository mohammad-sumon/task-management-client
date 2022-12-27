import React from 'react';
import work from '../../Asset/work.jpg';

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold my-4 text-center">Welcome to Task Manager App</h1>
            <div className='block md:flex gap-4'>
                <div className='w-full md:w-1/2'>
                    <img src={work} alt="pc_photo" className='m-4 rounded-lg' />
                </div>
                <div className='m-4 w-full md:w-1/2'>
                    <p>This is a task manager app. Here you can create your daily, weekly or monthly work plan. You can check your all tasks. Moreover you can observe your completed and not completed task. Wherever you want you can delete your previous record. </p>
                    <p className='my-2'>This is very useful app. We all are human being. We can do many things daily. Also we have many works to do in future. This app helps your brain to take less pressure, even you do not need to memorize any of your work. Just put it your daily task, and see it in your desired time.</p>
                    <p>This is very handy app. You can use this app from your desktop and mobile also. You can find an elegent design feelings. I made this app for my own purpose. But it is now totally free to anyone. You can login or Register with your email and password. Moreover you also can log in with Google.</p>
                    <p className='mt-2'>Do not hesitate to knock me if there is any bug. Just send me an email. I will be always happy to get your review. Happy Journey !!!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;