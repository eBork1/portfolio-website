import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import Canvas from './Particles';
import Header from './Header';
import About from './About';
import Tech from './Tech';

function App() {
    return (
        <div className="App">
            <div className="container-fluid p-0">
                <Header />
                <Canvas />
            </div>
            <About />
            <Tech />

        </div>
    );
}

export default App;
