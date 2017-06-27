import React from 'react'
import './entries.css'

const Entries = props => {
	const {
		resumeCategories,
		activeCategoryId
	} = props

	return (
		<section className="entries">
			{
				resumeCategories[activeCategoryId].entries.map((entry, i) => {
					return <div className="entry" key={i}>
								<div className="entry-year">
									{entry.yearFrom} - {entry.yearTo}
								</div>
								<div className="entry-text">
									<div className="entry-header">
										<div>
											{entry.title}
										</div>
										<div>
											{entry.organizationName}
										</div>
									</div>
									
									<div className="entry-desc">
										{entry.desc}
									</div>
								</div>
							</div>
				})
			}			
		</section>
	)
}

export default Entries