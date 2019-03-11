import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
		<div>
			<NavBar/>
                    	<Home/>

                </div>
        );
    };
}

export default App;
