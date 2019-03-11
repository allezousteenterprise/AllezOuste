import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';

import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
		<div>
			<Navbar/ >
                    	<h1>Allez Ouste!!</h1>
                </div>
        );
    };
}

export default App;
