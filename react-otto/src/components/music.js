import React, { useState, useEffect } from 'react';

const songs = [
    { title: "Song 1", cover: "cover1.jpg", audio: "song1.mp3", videoUrl: "https://www.bilibili.com/video1" },
    { title: "Song 2", cover: "cover2.jpg", audio: "song2.mp3", videoUrl: "https://www.bilibili.com/video2" },
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
