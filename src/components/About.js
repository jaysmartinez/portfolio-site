const About = () => {
	return (
		<section
			id='about'
			data-nav-tooltip='About'
			className='pp-section pp-scrollable section counter'
		>
			<div className='container'>
				{/* <div className='row align-items-center justify-content-center'>
					<div className='col-lg-6 m-15px-tb'>
						<div className='about-me'>
							<div className='img'>
								<div className='img-in'>
									<img src='static/img/headshot.jpg' title='' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-6 m-15px-tb'>
						<div className='about-info'>
							<div className='title'>
								<h3>About me.</h3>
							</div>
							<div className='about-text'>
								<h3>I'm a Freelancer Front-end Developer with over 3 years of experience. </h3>
								<p>
									Im a Full-Stack Web Developer with a range of experiences in the web field. From
									small Creative Agencies to large Tech Companies, I'm always up for a challenge and
									enjoy collaborating with teams to find innovative solutions.
								</p>
								<div className='row'>
									<div className='col-auto'>
										<div className='media align-items-center'>
											<span className='count'>5k</span>
											<div className='media-body'>
												Projects <br />
												Completed.
											</div>
										</div>
									</div>
									<div className='col-auto'>
										<div className='media align-items-center'>
											<span className='count'>3k</span>
											<div className='media-body'>
												Satisfied <br />
												Clients.
											</div>
										</div>
									</div>
								</div>
								<div className='btn-bar'>
									<a className='px-btn px-btn-theme' href='#'>
										<span>Contact Me</span>
									</a>
									<a className='px-btn px-btn-theme' href='#'>
										<span>Portfolio</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='separated' /> */}
				<div className='title'>
					<h3>Education &amp; Skills</h3>
				</div>
				<div className='row'>
					<div className='col-lg-4 m-15px-tb'>
						<ul className='aducation-box'>
							<li>
								<span>2010-2012</span>
								<h6>Graphic Designer</h6>
								<p>International Design Institute</p>
							</li>
							<li>
								<span>2010-2012</span>
								<h6>Web Development</h6>
								<p>International Design Institute</p>
							</li>
							<li>
								<span>2010-2012</span>
								<h6>Search Engine Optimization</h6>
								<p>International Design Institute</p>
							</li>
						</ul>
					</div>
					<div className='col-lg-7 ml-auto m-15px-tb'>
						<div className='skills-box'>
							<h3>My skills</h3>
							<p>
								{`I'm`} a Freelancer Front-end Developer with over 3 years of experience. I code and
								create web elements for amazing people around the world. I like work with new
								people. New people new Experiences.
							</p>
							{/* <div className='skill-lt'>
								<h6>HTML5</h6>
								<div className='skill-bar'>
									<div className='skill-bar-in' style={{ width: '92%' }}>
										<span data-toggle='tooltip' title='92%' />
									</div>
								</div>
							</div>
							<div className='skill-lt'>
								<h6>WordPress</h6>
								<div className='skill-bar'>
									<div className='skill-bar-in' style={{ width: '72%' }}>
										<span data-toggle='tooltip' title='72%' />
									</div>
								</div>
							</div>
							<div className='skill-lt'>
								<h6>Magento</h6>
								<div className='skill-bar'>
									<div className='skill-bar-in' style={{ width: '86%' }}>
										<span data-toggle='tooltip' title='86%' />
									</div>
								</div>
							</div>
							<div className='skill-lt'>
								<h6>UI/UX</h6>
								<div className='skill-bar'>
									<div className='skill-bar-in' style={{ width: '88%' }}>
										<span data-toggle='tooltip' title='88%' />
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
				<div className='separated' />
				<div className='title'>
					<h3>Experience.</h3>
				</div>
				<div className='resume-box'>
					<div className='resume-row'>
						<div className='row'>
							<div className='col-sm-3 col-md-3 col-xl-2'>
								<div className='rb-left'>
									<img src='static/img/a1.png' title='' alt='' />
								</div>
							</div>
							<div className='col-sm-9 col-md-9 col-xl-10'>
								<div className='rb-right'>
									<h6>Software Engineer</h6>
									<label>Lumin8ion Labs | July 2023 - Present</label>
									<div className='rb-time'>Full Time</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor 1.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='resume-row'>
						<div className='row'>
							<div className='col-sm-3 col-md-3 col-xl-2'>
								<div className='rb-left'>
									<img src='static/img/fromaggio.png' title='' alt='' />
								</div>
							</div>
							<div className='col-sm-9 col-md-9 col-xl-10'>
								<div className='rb-right'>
									<h6>Front-End Developer</h6>
									<label>Fromaggio | Sept 2022 - May 2023</label>
									<div className='rb-time'>Contract</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor 2.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='resume-row'>
						<div className='row'>
							<div className='col-sm-3 col-md-3 col-xl-2'>
								<div className='rb-left'>
									<img src='static/img/wix.png' title='' alt='' />
								</div>
							</div>
							<div className='col-sm-9 col-md-9 col-xl-10'>
								<div className='rb-right'>
									<h6>Product Analyst</h6>
									<label>Wix | Sept 2017 - May 2022</label>
									<div className='rb-time'>Full Time</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor 2.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='resume-row'>
						<div className='row'>
							<div className='col-sm-3 col-md-3 col-xl-2'>
								<div className='rb-left'>
									<img src='static/img/zimala.jpg' title='' alt='' />
								</div>
							</div>
							<div className='col-sm-9 col-md-9 col-xl-10'>
								<div className='rb-right'>
									<h6>Web Developer</h6>
									<label>Zimala | Apr 2015 - Dec 2016</label>
									<div className='rb-time'>Contract</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor 3.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default About;
