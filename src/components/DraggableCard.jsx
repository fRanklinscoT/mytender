import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Observer } from "gsap/Observer";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer);
gsap.config({ trialWarn: false });

const DraggableCard = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const sectionsRef = useRef(null);
  const section1Ref = useRef(null);

  const [winWidth, setWinWidth] = useState(window.innerWidth);

  const smootherRef = useRef(null);
  const observerRef = useRef(null);
  const directionRef = useRef(null);

  useEffect(() => {
    const isDesktop = !ScrollTrigger.isTouch;

    if (isDesktop && wrapperRef.current && contentRef.current) {
        smootherRef.current = ScrollSmoother.create{
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 0.8,
            effe
        }
    }

  },[winWidth])

  return(
    <>

    </>
  );

}

export default DraggableCard;
