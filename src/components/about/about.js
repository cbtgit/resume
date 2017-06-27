import React from 'react'
import ProfilePicture from '../../images/profile-picture.jpg';
import './about.css'

const About = props => {
	const {
		resumeData
	} = props

	return (
		<div>						
			<section className="about-me">
				<div className="about-me-text">
					<h2>
						+ About me
					</h2>
					<p>
						My name is Christian Bloch Thomsen and I have been working with software development for almost 20 years. I have developed several complex business oriented web applications for large Danish and international coorperations. I like working with modern web technologies - especially everything evolving around the ReactJS community.
					</p>
				</div>
				<div className="picture-personal-data">
					<div>									
						<img className="profile-picture" src={ProfilePicture} alt={resumeData.name} />									
					</div>
					<div>
						<div className="personal-data-wrapper">
							<p>
								{resumeData.name}
							</p>												 
							<p>
								{resumeData.address}
							</p>
							<p>
								{resumeData.zipCode} {resumeData.city}
							</p>
							<p>
								{resumeData.country}
							</p>
							<p>
								<a href={"mailto:" + resumeData.email}>{resumeData.email}</a>
							</p>																		
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default	About