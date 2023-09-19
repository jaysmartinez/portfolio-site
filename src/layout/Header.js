import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { activeSection } from '../utilits';
const Header = ({ blog }) => {
	const [sideBarToggle, setSideBarToggle] = useState(false);
	useEffect(() => {
		if (!blog) {
			activeSection();
		}
	}, []);
	return (
		<Fragment>
			<div className='mob-header'>
				<div className='d-flex'>
					<div className='navbar-brand'>
						<Link href='/' className='logo-text'>
							JBM
						</Link>
					</div>
					<button
						className={`toggler-menu ${sideBarToggle ? 'open' : ''}`}
						onClick={() => setSideBarToggle(!sideBarToggle)}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>
			{/* End Header */}
			{/* nav bar */}
			<header className={`header-left ${sideBarToggle ? 'menu-open menu-open-desk' : ''}`}>
				<div className='scroll-bar'>
					<div className='hl-top'>
						<div className='hl-logo'>
							<div className='img'>
								<img src='static/img/headshot.jpg ' title='' alt='' />
							</div>
							<h5>Jay The Dev</h5>
						</div>
					</div>
					{blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
				</div>
				<div className='nav justify-content-center social-icons'>
					<a href='https://github.com/jaysmartinez' target='_blank' rel='noreferrer'>
						<i className='fab fa-github' />
					</a>
					<a href='https://codepen.io/jaysmartinez' target='_blank' rel='noreferrer'>
						<i className='fab fa-codepen' />
					</a>
					<a href='https://www.linkedin.com/in/jaysmartinez/' target='_blank' rel='noreferrer'>
						<i className='fab fa-linkedin-in' />
					</a>
				</div>
			</header>
		</Fragment>
	);
};
export default Header;

const MenuWithOutBlog = () => {
	return (
		<ul className='nav nav-menu' id='pp-menu'>
			<li data-menuanchor='home' className='active'>
				<a className='nav-link' href='#home'>
					<i className='ti-home' />
					<span>Home</span>
				</a>
			</li>
			<li data-menuanchor='about'>
				<a className='nav-link' href='#about'>
					<i className='ti-id-badge' />
					<span>About Me</span>
				</a>
			</li>
			<li data-menuanchor='services'>
				<a className='nav-link' href='#services'>
					<i className='ti-panel' />
					<span>Services</span>
				</a>
			</li>
			<li data-menuanchor='work'>
				<a className='nav-link' href='#work'>
					<i className='ti-bookmark-alt' />
					<span>Portfolio</span>
				</a>
			</li>
			<li data-menuanchor='blog' className='blog'>
				<a className='nav-link' href='#blog'>
					<i className='ti-layout-media-overlay-alt-2' />
					<span>Blogs</span>
				</a>
			</li>
			<li data-menuanchor='contactus'>
				<a className='nav-link' href='#contactus'>
					<i className='ti-map-alt' />
					<span>Contact Me</span>
				</a>
			</li>
		</ul>
	);
};

const MenuWithBlog = () => {
	useEffect(() => {
		window.addEventListener('scroll', () =>
			document.querySelector('.blog').classList.add('active'),
		);
	});

	return (
		<Fragment>
			<ul className='nav nav-menu' id='pp-menu'>
				<li data-menuanchor='home'>
					<Link href='/#home' className='nav-link'>
						<i className='ti-home' />
						<span>Home</span>
					</Link>
				</li>
				<li data-menuanchor='about'>
					<Link href='/#about' className='nav-link'>
						<i className='ti-id-badge' />
						<span>About Me</span>
					</Link>
				</li>
				<li data-menuanchor='services'>
					<Link href='/#services' className='nav-link'>
						<i className='ti-panel' />
						<span>Services</span>
					</Link>
				</li>
				<li data-menuanchor='work'>
					<Link href='/#work' className='nav-link'>
						<i className='ti-bookmark-alt' />
						<span>Portfolio</span>
					</Link>
				</li>
				<li data-menuanchor='blog' className='blog active'>
					<Link href='/#blog' className='nav-link'>
						<i className='ti-layout-media-overlay-alt-2' />
						<span>Blogs</span>
					</Link>
				</li>
				<li data-menuanchor='contactus'>
					<Link href='/#contactus' className='nav-link'>
						<i className='ti-map-alt' />
						<span>Contact Me</span>
					</Link>
				</li>
			</ul>
		</Fragment>
	);
};
