import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react'

const InternationalSavory = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top-=75 top',
            toggleActions: 'play none none reverse',
        }
    })
    .to('header h2', {
        color: '#FAE1DF',
        duration: 0.2
    });
  });
  return (
    <section ref={sectionRef} id="international-savory" className="py-40 min-h-[150dvh] bg-foreground">
        <hgroup className="space-y-24 text-secondary">
            <div className="flex w-full items-center gap-10">
                <div className="bg-foreground w-1/2 h-px" />
                <h2 className="text-5xl font-cursive">International Savory</h2>
            </div>
            <p className="text-2xl w-2/3"><span className="font-semibold">Global favorites, mastered.</span> Satisfying and iconic classics from around the world, prepared with precision and a contemporary touch.</p>
        </hgroup>
    </section>
  )
}

export default InternationalSavory;
