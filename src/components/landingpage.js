import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends Component {
	render(){
		return(
			<div>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://cognigen-cellular.com/images/female-clipart-gardener-3.png" 
							alt="female-avatar" 
							className="avatar-img"
							/>
							<div className="banner-text">
								<h1>Full Stack Web Developer</h1>

								<hr/>

								<p>HTML/CSS | Bootstrap | Javascript | React | React Native* | NodeJS | Express | SQL</p>

								<div className="social-links">
									{/* LinkedIn */}
									<a href="https://www.linkedin.com/in/juliennejsantos/" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-linkedin-square" aria-hidden="true"/>
									</a>

									{/* Github */}
									<a href="https://github.com/juliennesantos" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-github-square" aria-hidden="true"/>
									</a>

									{/* Freecodecamp */}
									<a href="https://www.freecodecamp.org/juliennesantos" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-free-code-camp" aria-hidden="true"/>
									</a>
								</div>
							</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;