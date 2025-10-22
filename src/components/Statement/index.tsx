import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Statement = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({
            scrollTrigger: {
                trigger: 'section#statement',
                start: 'top-=75 top',
                // end: 'bottom top',
                toggleActions: 'play none none reverse',
            }
        })
        .to('header h2', {
            color: '#0D1F2D',
            duration: 0.2
        });
    });
  return (
    <section id="statement" className="bg-background flex items-center justify-center py-40 min-h-[150dvh]">
        <div className="flex flex-col gap-40">
            <h2 className="font-cursive text-7xl self-start">
                Taste our mom&apos;s freshly cooked homemade dishes made with love,
            </h2>
            <h4 className="text-5xl self-end">or just cook it yourself.</h4>
        </div>
    </section>
  )
}

export default Statement;

