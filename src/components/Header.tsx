
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Header = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '#statement',
	// 		start: 'top center',
	// 		end: 'bottom center',
	// 		toggleActions: 'play reverse play reverse'
	// 	}
	// })
	// .to('header h2', {
	// 	color: '#0D1F2D',
	// 	duration: 0.2
	// });

	gsap.timeline({
		scrollTrigger: {
			trigger: '#international-savory',
			start: 'top-=75 top',
			end: 'bottom bottom',
			toggleActions: 'play none play reverse'
		}
	})
	.to('header h2', {
		color: '#FAE1DF',
		duration: 0.2
	});
  })
  return (
    <header className="w-full px-4 py-12 flex justify-center fixed top-0 left-0">
		<h2 className="text-3xl font-cursive text-background transition-colors">By Riana's Kitchen</h2>
	</header>
  )
}

export default Header;
