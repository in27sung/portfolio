"use client";

import { FC, useEffect, useRef } from "react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";

const Intro: FC = () => {
  // const [scope, animate] = useAnimate();
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <section className="section mt-12 md:mt-16 lg:mt-20" id="intro" ref={sectionRef}>
      <div className="container max-w-screen-xl">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]" ref={scope}>
          Building beautiful websites with clean code and thoughtful design to help your business grow and stand out online
        </h2>
      </div>
    </section>
  );
};

export default Intro;
