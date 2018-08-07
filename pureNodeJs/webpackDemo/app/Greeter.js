// Greeter.js
import React, {Component} from 'react';
const greetContent = require('./config');
import styles from './Greeter.css';//导入


class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
            {greetContent.greetText}
    </div>
    );
    }
}

export default Greeter
