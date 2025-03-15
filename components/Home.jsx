import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Player from './Player';
import Display from './Display';

function Home() {
    const [currentSong, setCurrentSong] = useState(null);

    return (
        <div className='h-screen bg-black'>
            <div className='h-[90%] flex'>
                <Sidebar />
                <Display setCurrentSong={setCurrentSong} />
            </div>
            <Player currentSong={currentSong} />
        </div>
    );
}

export default Home;
