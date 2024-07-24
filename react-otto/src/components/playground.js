import React from 'react';

const PlaygroundPage = () => {
  return (
    <body>
        <div className="playground-page">
        <main>
            <section>
            <h1>Welcome to the Playground!</h1>
            <p>Here you can interact with AI OTTO and create your own experiences.</p>
            <p>Hint: this only supports Mandarin Chinese (so if you type En it will utter every letter), so try to copy paste a paragraph that you know how it sounds!</p>
            </section>
            <section>
            <iframe 
                src="https://ottohzys.wzq02.top/" 
                style={{width: '80%', height: '800px'}}
                title="AI OTTO Playground"
            ></iframe>
            <p>
                <a href="https://ottohzys.wzq02.top/" target="_blank" rel="noopener noreferrer">Visit the Playground here!</a>
            </p>
            </section>
        </main>
        </div>
    </body>
  );
};

export default PlaygroundPage;
