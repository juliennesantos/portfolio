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

								<p>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | SQL</p>

								<div className="social-links">
									{/* LinkedIn */}
									<a href="http://google.com" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-linkedin-square" aria-hidden="true"/>
									</a>

									{/* Github */}
									<a href="http://google.com" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-github-square" aria-hidden="true"/>
									</a>

									{/* Freecodecamp */}
									<a href="http://google.com" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-free-code-camp" aria-hidden="true"/>
									</a>

									{/* Youtube */}
									<a href="http://google.com" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-youtube-square" aria-hidden="true"/>
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