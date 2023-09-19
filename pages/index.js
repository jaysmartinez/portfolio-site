import dynamic from 'next/dynamic';
import About from '../src/components/About';
import Blog from '../src/components/Blog';
import Contact from '../src/components/Contact';
import ParticlesBackground from '../src/components/ParticlesBackground';
import Services from '../src/components/Services';
import TypingAnimation from '../src/components/TypingAnimation';
import Layout from '../src/layout/Layout';
const Portfolio = dynamic(() => import('../src/components/Portfolio'), {
	ssr: false,
});
const Index = () => {
	return (
		<Layout>
			<section id='home' data-nav-tooltip='Home' className='pp-section pp-scrollable'>
				<div className='home-banner'>
					<ParticlesBackground />
					<div className='container'>
						<div className='row full-screen align-items-center'>
							<div className='col-lg-6'>
								<div className='type-box'>
									<h6>Hello, I am</h6>
									<h1 className='font-alt'>Jay Martinez</h1>
									<p className='lead'>
										I am <TypingAnimation />
									</p>
									<p className='desc'>
										Im a Full-Stack Web Developer with a range of experiences in the web field. From
										small Creative Agencies to large Tech Companies, I'm always up for a challenge
										and enjoy collaborating with teams to find innovative solutions.
									</p>
									<div className='btn-bar'>
										<a className='px-btn px-btn-theme' href='#'>
											Download CV
										</a>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='hb-img'>
									<img src='static/img/headshot.jpg' title='' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End Home */}
			{/* about us */}
			<About />
			{/* End about us */}
			{/* Services */}
			<Services />
			{/* End Services */}
			{/* Portfolio */}
			<Portfolio />
			{/* End Portfolio */}
			{/* Blog */}
			<Blog />
			{/* End Blog */}
			{/* Contact us */}
			<Contact />
		</Layout>
	);
};
export default Index;
