import React, { useState } from 'react'; 

const MemesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMeme, setSelectedMeme] = useState(null);

    const memes = [
        { id: 'King Jiji', description: "Because OTTO is too thin and looks like a monkey, similar to King Jiji from the Chinese animated series 'Boonie Bears,' fans have also given him this nickname.", videoUrl: "https://www.youtube.com/watch?v=TNYomJ-dF4s" },
        { id: '欧内的手，好汉', description: "The meme '欧内的手，好汉' originates from a playful manipulation of language where the phrase '大家好，我是电棍' (Hello everyone, I am OTTO) is reversed in audio. This reversal turns into the nonsensical and humorous phrase '欧内的手，好汉', which literally translates to 'The hand inside, a brave man.' This form of content is known as '鬼畜' (Kichiku) in Chinese internet culture, which involves remixing audio and video clips to create entertaining and often absurd variations.", videoUrl: "https://www.youtube.com/shorts/J_e451W9fKk" },
        { id: '哈利路大旋风', description: "The meme '哈利路大旋风' (Hallelu the Grand Whirlwind) originated from reversing the audio of a video featuring OTTO, a popular streamer. In the original footage, OTTO reacts dramatically to a teammate disrupting his chance at a 'Penta Kill' in League of Legends. The reversed audio unintentionally sounds like '哈利路大旋风!'", videoUrl: "https://www.youtube.com/watch?v=EPfyBDNbhL4" },
        { id: '奥利安费, all in', description: "The meme '奥利安费, all in' originated from a video where OTTO's speech was played in reverse. Originally saying '别追了' (don't chase), it became '奥利安费' when reversed. Typically fans of OTTO who enjoy these reversed audio clips for their humor and absurdity.", videoUrl: "https://www.youtube.com/watch?v=JKRn_44U-A8" },
        { id: '一把米诺', description: "The meme '一把米诺' emerged from reversing the audio of the phrase 'caonimabi,' a vulgar expression in Chinese. When reversed, it phonetically approximates 'ibaminoac,' which humorously translates to '一把米诺' or 'a handful of Mino' when the final consonant is dropped. ", videoUrl: "https://www.youtube.com/watch?v=79MEk_hjh58" },
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
                            <li key={meme.id}><button onClick={() => handleButtonClick(meme)}>{meme.id}</button></li>
                        ))}
                    </ul>
                </footer>
            </main>

            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <h2>{selectedMeme.id} Details</h2>
                        <p>{selectedMeme.description}</p>
                        <a href={selectedMeme.videoUrl} target="_blank" rel="noopener noreferrer">Watch Original Video</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MemesPage;
