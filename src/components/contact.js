import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Julienne Santos</h2>
						<img src="https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/180-woman-astronaut-2-512.png" alt="avatar" style={{height: "250px"}}  />
						<h5 style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Let me help you reach your goals.</h5>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />

						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent class="list-item-contact">
										<i className="fa fa-phone-square" aria-hidden="true"/>
										+63 9178451486
									</ListItemContent>
								</ListItem>
								
								<ListItem>
									<ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
										<i className="fa fa-fax" aria-hidden="true"/>
										(632) 889-3276
									</ListItemContent>
								</ListItem>
								
								<ListItem>
									<ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
										<i className="fa fa-envelope" aria-hidden="true"/>
										juliennejsantos@gmail.com
									</ListItemContent>
								</ListItem>
								
								<ListItem>
									<ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
										<i className="fa fa-linkedin-square" aria-hidden="true"/>
										juliennejsantos
									</ListItemContent>
								</ListItem>
								
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;