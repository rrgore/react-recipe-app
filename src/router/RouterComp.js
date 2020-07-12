import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';

export default class RouterComp extends React.Component {
    render() {
        return (
            <Router>
                <App />
            </Router>
        );
    }
}