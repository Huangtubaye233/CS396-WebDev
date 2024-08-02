import React, { useState } from 'react';

const MemesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMeme, setSelectedMeme] = useState(null);

    const memes = [
        { id: 1, description: "Meme description for 1", videoUrl: "http://placeholder.com/video1" },
        { id: 2, description: "Meme description for 2", videoUrl: "http://placeholder.com/video2" },
        { id: 3, description: "Meme description for 3", videoUrl: "http://placeholder.com/video3" },
        { id: 4, description: "Meme description for 4", videoUrl: "http://placeholder.com/video4" },
        { id: 5, description: "Meme description for 5", videoUrl: "http://placeholder.com/video5" },
    ];

    const handleButtonClick = (meme) => {
        setSelectedMeme(meme);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="memes-page">
            <main>
                <section>
                    <h1>This is the Meme Vault for the GOAT LOL player OTTO</h1>
                    <p>Explore the most popular memes created by OTTO's fans.</p>
                </section>
                <footer>
                    <ul>
                        {memes.map(meme => (
                            <li key={meme.id}><button onClick={() => handleButtonClick(meme)}>Meme {meme.id}</button></li>
                        ))}
                    </ul>
                </footer>
            </main>

            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <h2>Meme {selectedMeme.id} Details</h2>
                        <p>{selectedMeme.description}</p>
                        <a href={selectedMeme.videoUrl} target="_blank" rel="noopener noreferrer">Watch Original Video</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MemesPage;
