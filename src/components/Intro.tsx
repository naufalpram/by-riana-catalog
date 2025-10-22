import { useCallback, useRef, useState } from "react";
import SplitText from "./SplitText";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

const slideUp = (element: HTMLElement | null, toggleDone: VoidFunction) => {
    if (!element) return;
    gsap.timeline()
        .to(element, {
            yPercent: -100,
            duration: 0.5,
            ease: 'power1.in'
        })
        .to(element, {
            display: 'none',
            onComplete: toggleDone
        }, '+1');
}

const Intro = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [introDone, setIntroDone] = useState(false);

  const toggleDone = () => {
    setIntroDone(true);
    document.body.style.overflow = 'auto';
  };

  const handleLetterAnimationComplete = useCallback(() => {
    slideUp(sectionRef.current, toggleDone);
  }, []);

  useGSAP(() => {
    document.body.style.overflow = 'hidden';
    gsap.to('.intro h1', {
      alpha: 1,
      duration: 0.1,
    });
  });

  return !introDone && (
    <section
        ref={sectionRef}
        className="intro w-full h-screen flex flex-col justify-center items-center gap-16 fixed top-0 left-0 bg-background z-[1000] overflow-hidden"
      >
        <SplitText
            tag="h1"
            text="By Riana's Kitchen"
            className="text-6xl font-cursive overflow-visible opacity-0"
            delay={100}
            duration={0.5}
            ease="elastic.out(1,0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            onLetterAnimationComplete={handleLetterAnimationComplete}
        />
        {/* <!-- <Button variant="secondary" classNameName="explore-btn text-lg font-semibold hover:scale-105 transition-transform duration-500 ease-in-out hover:[&_svg]:translate-x-1.5 [&_svg]:transition-transform [&_svg]:duration-500 [&_svg]:ease-in-out" size="xl">Explore Catalog <ArrowRight /></Button> --> */}
    </section>
  );
};

export default Intro;
