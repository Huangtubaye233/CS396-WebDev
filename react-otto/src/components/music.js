import React, { useState, useEffect } from 'react';
import YOASOBI from '../assets/YOASOBI.mp3';
import SAKANA from '../assets/SAKANA.mp3'
import BONES from '../assets/♿️Bones♿️.mp3'
import cover1 from '../assets/Racing Into the Wheelchair.jpg'
import cover2 from '../assets/Tornado, Maybe.jpg'
import cover3 from '../assets/♿️Bones♿️.jpg'

const songs = [
    { title: "Racing Into the Wheelchair", cover: cover1, audio: YOASOBI, videoUrl: "https://www.bilibili.com/video/BV1bV4y1k7tF" },
    { title: "Tornado, Maybe", cover: cover2, audio: SAKANA, videoUrl: "https://www.bilibili.com/video/BV1Tj411L7hX" },
    { title: "♿️Bones♿️", cover: cover3, audio: BONES, videoUrl: "https://www.bilibili.com/video/BV1ek4y1p7ao" },
];

const MusicPage = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioPlayer] = useState(new Audio());

    useEffect(() => {
        const loadSong = (songIndex) => {
            const song = songs[songIndex];
            audioPlayer.src = song.audio;
        };

        loadSong(currentSongIndex);
    }, [currentSongIndex, audioPlayer]); 

    useEffect(() => {
        if (isPlaying) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }, [isPlaying, audioPlayer]); 

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const nextSong = () => {
        setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    };

    const previousSong = () => {
        setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
    };

    return (
        <body>
            <div className="music-page container">
                <section>
                    <h2>{songs[currentSongIndex].title}</h2>
                    <div className="music-player">
                        <img src={songs[currentSongIndex].cover} alt="Song Cover" className={isPlaying ? "rotating" : ""} />
                    </div>
                    <div>
                        <button onClick={previousSong}>Previous</button>
                        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
                        <button onClick={nextSong}>Next</button>
                    </div>
                    <a href={songs[currentSongIndex].videoUrl} target="_blank" rel="noopener noreferrer">Watch Original Video</a>
                </section>        
            </div>
        </body>
    );
};

export default MusicPage;
