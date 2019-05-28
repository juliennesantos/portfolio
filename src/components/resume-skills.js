import React, {Component} from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
	render() {
		return(
			<Grid>
				<Cell col={12}>
					<div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
						{this.props.skill} <ProgressBar style={{margin: 'auto', width: '100%', height: '18px'}} className='resume-skills-progress progressbar' progress={this.props.progress} />
					</div>
				</Cell>
		
			</Grid>
		)
	}	
}

export default Skills;