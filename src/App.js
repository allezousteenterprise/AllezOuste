import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';

import Home from './components/Home';

class App extends Component {
    render() {
        return (
		<div>
                    	<Home/>
                </div>
        );
    };
}

export default App;
