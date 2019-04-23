import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
		}
	}
	render() {
		return(
			<div className={styles.container}>
				<div className={styles.heading}>
					Joe Simpson	
				</div>
			</div>
		);
	}
}

export default App;