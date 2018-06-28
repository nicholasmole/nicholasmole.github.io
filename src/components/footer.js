// import React, {Component} from 'react';
import {h, Component} from 'preact';
import styles from './footer.scss';

export default () => (
	<div className={styles.footer_container}>
		<div className={styles.footer_text}>
			<a href="https://nicholasmole.github.io/"> designed by Nick Mole </a> <div>Copyright 2018</div>
		</div>
	</div>
)