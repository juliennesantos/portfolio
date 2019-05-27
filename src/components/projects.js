import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'; 

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {activeTab:0};
	}

	toggleCatergories() {
		if(this.state.activeTab === 0){
			return (
				<div className="projects-grid">
					{/* Project #1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}> React Project #1 </CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut pellentesque lacus. Donec vel elit.
						</CardText>
						<CardActions>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/* Project #2 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}> React Project #1 </CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut pellentesque lacus. Donec vel elit.
						</CardText>
						<CardActions>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/* Project #3 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}> React Project #1 </CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut pellentesque lacus. Donec vel elit.
						</CardText>
						<CardActions>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			)
		}
		else if(this.state.activeTab === 1){
			return (
				<div><h1>This is PHP.</h1></div>
			)
		}
		else if(this.state.activeTab === 2){
			return (
				<div><h1>This is NodeJS.</h1></div>
			)
		}
		else if(this.state.activeTab === 3){
			return (
				<div><h1>This is SQL.</h1></div>
			)
		}
	}
	
	render(){
		return(
			<div>
				<Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple >
					<Tab>React</Tab>
					<Tab>PHP</Tab>
					<Tab>NodeJS</Tab>
					<Tab>SQL</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCatergories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects;