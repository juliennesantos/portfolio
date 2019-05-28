import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './resume-education';
import Experience from './resume-experience';
import Skills from './resume-skills';

class Resume extends Component {
	render(){
		return(
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{textAlign: 'center', paddingTop:'20px'}}>
							<img 
							src="https://scontent.fmnl6-1.fna.fbcdn.net/v/t1.0-9/50253075_10210993529074121_2950811719703724032_n.jpg?_nc_cat=110&_nc_eui2=AeFHu7R_Kj9LrbjnYzgneZtu_VAWpklud_kJqMECtzyi2JL_xjx0FvtOhisS3_9ppLaxoS7rbJqKKJx-SWe_Zc1uzF33rkJc-zt-6rc_Mk92xODFX3ddIg0qrEGsMoRxz38&_nc_ht=scontent.fmnl6-1.fna&oh=7175da4d0d58d70e7c7947cf6b83498a&oe=5D96B3A7"
							alt="avatar" 
							style={{height: '250px', borderRadius:'200px', border: '5px solid #fcb045'}}
							/>
						</div>
						<h2 style={{paddingTop:'30px', textAlign: 'center'}}>Julie Santos</h2>
						<h4 style={{color: 'grey', textAlign: 'center'}}>Programmer</h4>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%', margin: 'auto'}}/>
						<p style={{paddingTop:'20px', paddingBottom:'20px', textAlign: 'justify'}}>A NodeJS - based developer who is a resourceful and logical programmer. She is a motivated learner who is very interested to study and apply new, modern, and practical programming languages with the aim of acquiring certifications for those languages. She is an adaptable person who can speak in fluent English and can easily work both in a team and independently.</p>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%', margin: 'auto'}}/>
						<h5>Address</h5>
						<p>Makati City, Metro Manila, Philippines</p>
						<h5>Phone</h5>
						<p>+63 9178451486</p>
						<h5>Email</h5>
						<p>juliennejsantos@gmail.com</p>
						<h5>Web</h5>
						<p>juliennesantos.github.io/portfolio</p>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%', margin: 'auto'}}/>
						
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education 
							startYear="2012"
							endYear="2015"
							schoolName="De La Salle University"
							schoolDescription={<p>Discontinued - Computer Engineering <br/> Recipient of the Dean’s List First Honors award</p>}
						/>
						<Education 
							startYear="2015"
							endYear="2018"
							schoolName="De La Salle - College of Saint Benilde"
							schoolDescription={<p>Bachelor of Science - Information Systems <br/> Three-time Dean’s List First Honors awardee Three-time Dean’s <br/> List Second Honors awardee</p>}
						/>

						<hr style={{borderTop: '3px solid #e22947'}}/>

						<h2>Experience</h2>

						<Experience
							startYear="2017"
							endYear="2018"
							jobName="Software Solutions Intern / OJT"
							jobDescription={<p>Emerging Technologies<br/> Questronix Corporation <br/> List Second Honors awardee</p>}
						/>

						<Experience
							startYear="2018"
							endYear="2019"
							jobName="Software Developer"
							jobDescription={<p>API and Microservices <br/>Emerging Technologies<br/> Questronix Corporation</p>}
						/>

						<hr style={{borderTop: '3px solid #e22947'}}/>

						<h2>Skills</h2> 

						<Skills skill="SQL" progress="100" />
						<Skills skill="NodeJS" progress="90" />
						<Skills skill="APIs/Microservices" progress="85" />
						<Skills skill="NodeJS - Async" progress="80" />

						
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;