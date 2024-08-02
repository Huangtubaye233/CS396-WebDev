import React from 'react';
import avatar from '../assets/otto0.jpeg';

const HomePage = () => {
  return (
    <body>
        <div className="homepage">
            <main>
                <section>
                <img src={avatar} alt="Avatar" className="avatar"/>
                </section>
                <section className="container">
                <div id="homepagepara">
                    <h2>Welcome to OTTO's League</h2>
                    <p>This site is an introductory website for OTTO (Guoyu Hou), the ex-pro of League of Legends and streamer. OTTO, during his time as a pro, played as a mid laner but had mediocre results. Despite a relatively unsuccessful professional career, he was born to be a successful streamer after his retirement, attracting many fans. His fans often voluntarily create memes for him, including reversing the sentences he speaks during live streams and re-applying them in Chinese to achieve a humorous effect, and using his voice to produce sound clips to make AI OTTO sing various songs. Given the diverse composition of his fanbase, the memes they produce cover a broad range, from wild animals to virtual VTubers, and have a significant influence over the Internet. The 'OTTO Universe' has become one of the most popular subcultures on the Chinese internet, and it continues to merge with, influence, and expand along with other subcultures.</p>
                </div>

                </section>
            </main>
        </div>
    </body>
  );
};

export default HomePage;

