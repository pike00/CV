import './App.css';

// import about_data from './cv/about.json'
import education from './cv/education.json'
import awards from './cv/awards.json'
import activities from './cv/activities.json'
import publications from './cv/publications.json'

import React from 'react';

function Sidebar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
			<a className="navbar-brand js-scroll-trigger" href="#page-top">
				<span className="d-block d-lg-none">Will Pike</span>
				<span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2"
				                                         loading="lazy"
				                                         // src="assets/img/profile_min.webp" alt="..."/></span>
				                                         src="assets/img/profile_min.webp" alt="..."/></span>
			</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
			        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
				className="navbar-toggler-icon"/></button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav">
					<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
					<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
					<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards &
						Scholarships</a></li>
					<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#activities">Activities</a></li>
					<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#publications">Publications</a>
					</li>
					{/*<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#abstracts">Abstracts</a></li>*/}
					<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
					{/*<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>*/}
				</ul>
			</div>
		</nav>
	)
}


function AboutPage() {
	function handleClick() {
		window.open('https://mailhide.io/e/0fKuB2Zz', 'mailhidepopup', 'width=580,height=635');
		return false;
	}

	return (
		<section className="resume-section" id="about">
			<div className="resume-section-content">
				<h1 className="mb-0">
					Will
					<span className="text-primary">Pike</span>
				</h1>
				<div className="subheading mb-5">
					4435 P Street Northwest, Washington, DC 20007 ·
					<a href="https://mailhide.io/e/0fKuB2Zz"
					   onClick={handleClick}>w.......@gmail.com</a>

				</div>
				<p className="lead mb-5">I am a fourth year medical student entering the field of Emergency Medicine. I also
					have interests with data science and computers, and hope to incorporate my data science skillset to
					improve patient outcomes.</p>

			</div>
		</section>
	)
}

function EducationPage() {
	const educationEntries = education.map((educationRow, index) => {
		return (
			<div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={index}>
				<div className="flex-grow-1">
					<h3 className="mb-0">{educationRow['name']}</h3>
					<div className="subheading mb-3">{educationRow['degree']}</div>
					<div>{educationRow['description']}</div>
				</div>
				<div className="flex-shrink-0"><span className="text-primary">{educationRow['date']}</span></div>
			</div>
		)
	})

	return (
		<section className="resume-section" id="education">
			<div className="resume-section-content">
				<h2 className="mb-5">Education</h2>
				{educationEntries}
			</div>
		</section>
	)
}

function AwardsPage() {
	const awardsEntries = awards.map((awardsRow, index) => {
		return (
			<div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={index}>
				<div className="flex-grow-1">
					<h3 className="mb-0">{awardsRow['name']}</h3>
					<div className="subheading mb-3">{awardsRow['organization']}</div>
					<div>
						{awardsRow['description']}
					</div>
				</div>
				<div className="flex-shrink-0"><span className="text-primary">{awardsRow['date']}</span></div>
			</div>
		)
	})

	return (
		<section className="resume-section" id="awards">
			<div className="resume-section-content">
				<h2 className="mb-5">Awards & Scholarships</h2>
				{awardsEntries}
			</div>
		</section>
	)
}

function ActivitiesPage() {
	const activitiesEntries = activities.map((activityRow, index) => {
		return (
			<div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={index}>
				<div className="flex-grow-1">
					<h3 className="mb-0">{activityRow['name']}</h3>
					<div className="subheading mb-3">{activityRow['organization']}</div>
					<p>{activityRow['description']}</p>
				</div>
				<div className="flex-shrink-0"><span className="text-primary">{activityRow['date']}</span></div>
			</div>
		)
	})

	return (
		<section className="resume-section" id="activities">
			<div className="resume-section-content">
				<h2 className="mb-5">Activities</h2>
				{activitiesEntries}
			</div>
		</section>
	)
}

function PublicationsPage() {

	const publicationsEntries = publications.map((publicationRow, publicationIndex) => {
			publicationRow['pubmedLink'] = "https://pubmed.ncbi.nlm.nih.gov/" + publicationRow['pmid']
			publicationRow['doiLink'] = "https://doi.org/" + publicationRow['doi']
			// Generates author list with bolded name
			const authorsElements = publicationRow['authors'].map((author, index) => {
				return (
					<span className="author" key={index}>
					{author.includes("Pike") ? <p className={"myname"}>{author}</p> : author}
						{index !== publicationRow['authors'].length - 1 ? ", " : ""}
				</span>
				)

			})

			return (
				<div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={index}>
					<div className="flex-grow-1">
						<h3 className="mb-0">{publicationRow['title']}</h3>
						<div className="subheading">{publicationRow['journal']}</div>
						{authorsElements}
						<p>{publicationRow['description']}</p>
						<a href={publicationRow['download_link']}
						   style={{marginRight: "5px"}}>
							<img src="./assets/img/file_download.svg"/>
						</a>
						<a href={publicationRow['pubmedLink']} style={{marginRight: "5px"}}>
							<img src={publicationRow['pmid_icon']}/></a>
						<a href={publicationRow['doiLink']} style={{marginRight: "5px"}}>
							<img src={publicationRow['doi_icon']}/> </a>

					</div>
					<div className="flex-shrink-0"><span className="text-primary">{publicationRow['date']}</span></div>

				</div>
			)
		}
		)
	;


	return (
		<section className="resume-section" id="publications">
			<div className="resume-section-content">
				<h2 className="mb-5">Publications</h2>
				{publicationsEntries}
			</div>
		</section>
	)

}

function SkillsPage() {
	const skills_icons_list = ["fab fa-python", "fab fa-r-project", "fab fa-cloudflare", "fab fa-docker", "fab fa-git", "fab fa-js-square", "fab fa-linux", "fab fa-raspberry-pi"]

	return (
		<section className="resume-section" id="skills">
			<div className="resume-section-content">
				<h2 className="mb-5">Skills</h2>
				<div className="subheading mb-3">Programming Languages & Tools</div>
				<ul className="list-inline dev-icons">
					{skills_icons_list.map((icon_text) => <li className="list-inline-item" key={icon_text}><em className={icon_text}/></li>)}

				</ul>

			</div>
		</section>
	)
}

class App extends React.Component {
	render() {
		return (
			<div id="layout" className="page-top">
				<Sidebar/>
				<div id="content" className="container-fluid p-0">
					<AboutPage/>
					<hr className="m-0"/>
					<EducationPage/>
					<hr className="m-0"/>
					<AwardsPage/>
					<hr className="m-0"/>
					<ActivitiesPage/>
					<hr className="m-0"/>
					<PublicationsPage/>
					<hr className="m-0"/>
					<SkillsPage/>
					<hr className="m-0"/>
				</div>
			</div>
		);
	}
}

export default App;
