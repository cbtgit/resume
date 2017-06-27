import React, { Component } from 'react';
import Menu from './components/menu/menu';
import About from './components/about/about';
import Entries from './components/entries/entries';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeCategoryId: 0
		}
	}

	render() {
		const resumeData = {
			name: "Christian Bloch Thomsen",
			address: "Søsterhøjvej 46",
			zipCode: "8270",
			city: "Højbjerg",
			country: "Denmark",
			email: "cblochth@gmail.com",
			resumeCategories : [
				{id: 0, title: "About me", entries: []},
				{id: 1, title: "Work experience", entries: [
					{organizationName: "SOS International A/S", yearFrom: "2017", yearTo: "2017", title: "Frontend developer", desc: 'Responsible for development of KnockoutJS-based case handling application. Developed ReactJS web application for searching assistance service providors utilizing Google Places and Google Maps.'},
					{organizationName: "Joblicate A/S", yearFrom: "2016", yearTo: "2017", title: "Senior frontend developer", desc: 'Development at start-up of web application for video screening of job applicants, based on React/Redux. Short-time employment, because the company was sold and all employees were let go.'},
					{organizationName: "SYMFONI", yearFrom: "2010", yearTo: "2016", title: "Senior web application developer", desc: 'Fullstack development of complex business-critical web applications for large danish companies using Sencha Ext JS on the frontend. Consulting position with responsibility for several customers regarding sales, development, implementation and support'},
					{organizationName: "Freelance", yearFrom: "2009", yearTo: "2010", title: "Web application developer", desc: 'I worked for a short period of time as a freelance web application developer for my former US employer, after returning back to Denmark.'},
					{organizationName: "ipsh!/The Marketing Arm", yearFrom: "2006", yearTo: "2009", title: "Web Application Engineer", desc: 'Web developer at a digital agency in San Francisco, where I developed web applications and mobile web sites for companies like Bank of Ameria, NFL, NBA, AT&T and was responsible for the main application used for setting up campaigns for clients'},

					{organizationName: "LN PRO ApS", yearFrom: "1998", yearTo: "2006", title: "Lotus Notes application developer/consultant", desc: 'Employed at an IBM Business Partner developing IBM Notes/Domino applications for the web and Lotus Notes client. Responsible for sales, development, implementation and support on my customers.'}
				]},
				{id: 2, title: "Education", entries: [
					{organizationName: "Handelshøjskolen i Aarhus", yearFrom: "1995", yearTo: "1998", title: "Cand. merc.", desc: 'I took my degree in International Business. Studied for one term on an exchange program at Oregon State University in the fall of 1996.'},
					{organizationName: "Handelshøjskole syd, Flensburg", yearFrom: "1992", yearTo: "1995", title: "HA, Erhversøkonomi", desc: 'Studied at the German branch of Handelshøjskole syd in Flensburg.'}
				]},
				{id: 3, title: "Projects", entries: [
					{organizationName: "Joblicate A/S", yearFrom: "2016", yearTo: "2017", title: "Video screening application", desc: 'Development of administration module for video screening application'},
					{organizationName: "Per Aarsleff A/S", yearFrom: "2011", yearTo: "2016", title: "Application for Rørteknik", desc: 'Development of complete web application to manage all business processes regarding no-dig renovation of underground pipes'},
					{organizationName: "Grundfos", yearFrom: "2012", yearTo: "2013", title: "Application for quality management of pumps", desc: 'Development of complete web application for registering all relevant data and images regarding test and verfication of pumps'},
					{organizationName: "ipsh!", yearFrom: "2007", yearTo: "2007", title: "Budweiser digital campaign for Super Bowl 2007", desc: 'Development of in-game live voting for best Budweiser commercial during Superbowl 2007.'},

				]},
				{id: 4, title: "Skills", entries: [
					{organizationName: null, yearFrom: "1999", yearTo: "2017", title: "HTML", desc: 'Skill level: 4/5'},
					{organizationName: null, yearFrom: "1999", yearTo: "2017", title: "CSS", desc: 'Skill level: 3/5'},
					{organizationName: null, yearFrom: "1999", yearTo: "2017", title: "Javascript", desc: 'Skill level: 3,5/5'},
					{organizationName: null, yearFrom: "2016", yearTo: "2017", title: "React JS", desc: 'Skill level: 3/5'},
					{organizationName: null, yearFrom: "2011", yearTo: "2016", title: "Sencha Ext JS", desc: 'Skill level: 4/5'},


				]}
			]
		}

		const {
			activeCategoryId
		} = this.state

		return (
			<div className="App">
				<header>
					<div className="container">
						<Menu 
							activeCategoryId={activeCategoryId}
							resumeData={resumeData}
							onMenuClick={category => this.setState({activeCategoryId: category.id})}
						/>
					</div>
				</header>
				<main>
					<div className="container">
					{activeCategoryId === 0 ? 
						<About 
							resumeData={resumeData}
						/>
					: 
						<Entries
							resumeCategories={resumeData.resumeCategories}
							activeCategoryId={activeCategoryId}
						/>				
					}	
					</div>				
				</main>
			</div>
		);
	}
}

export default App;
