import React from 'react'
import './menu.css'

const Menu = props => {

	const {
		activeCategoryId,
		resumeData, 
		onMenuClick
	} = props

	return (
		<div className="header-wrapper">
			<span className="header-text-emphazied">
				{resumeData.name.toUpperCase()}
			</span>
			<ul>
				{
					resumeData.resumeCategories.map((category, i) => {
						return <li 
							key={i}
							onClick={() => onMenuClick(category)}
							className={activeCategoryId === category.id ? "header-text-emphazied" : ""}
						>
							{category.title}
						</li>
					})
				}
			</ul>
		</div>
	)
}

export default Menu