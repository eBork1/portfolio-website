import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import Canvas from './Particles';
import Header from './Header';
import About from './About';
import Tech from './Tech';
import Projects from './Projects';

function App() {
    return (
        <div className="App">
            <div className="container-fluid p-0">
                <Header />
                <Canvas />
            </div>
            <About />
            <Tech />
            <Projects />
        </div>
    );
}

export default App;
