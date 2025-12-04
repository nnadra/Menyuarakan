import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import ContentImg1 from '../assets/images/hiw1.gif'; 
import ContentImg2 from '../assets/images/hiw2.gif';
import ContentImg3 from '../assets/images/hiw3.gif';

const howItWorksData = [
    { id: 'card-1', title: "Spot It", coverBg: "bg-blue-200", contentImg: ContentImg1, coverDir: "right", pinPos: "top" },
    { id: 'card-2', title: "Hear It", coverBg: "bg-green-200", contentImg: ContentImg2, coverDir: "left", pinPos: "center" },
    { id: 'card-3', title: "Fix It Together", coverBg: "bg-teal-200", contentImg: ContentImg3, coverDir: "right", pinPos: "bottom" },
];

const CardItem = React.memo(({ data, setRef }) => {
    const { title, coverBg, contentImg, id } = data;
    
    return (
        <div 
            ref={(el) => setRef(id, 'item', el)} 
            className="relative h-[170px] md:h-[320px] lg:h-[450px] w-full overflow-hidden border-b-white border-b-4 shrink-0 mb-0" 
        > 
            
            <div className="absolute inset-0 flex items-center justify-center p-0 bg-white">
                <img 
                    src={contentImg} 
                    alt={`Konten ${title}`} 
                    className="object-cover w-full h-full" 
                />
            </div>

            <div
                ref={(el) => setRef(id, 'cover', el)}
                className={`absolute inset-0 ${coverBg} flex items-center justify-center z-10`}
            >
                <h2 
                    ref={(el) => setRef(id, 'title', el)}
                    className="text-4xl font-extrabold text-gray-900"
                >
                    {title}
                </h2>
            </div>
        </div>
    );
});

CardItem.displayName = 'CardItem';


const HowItWorks = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const allRefs = useRef({}); 
    
    const setRef = (id, type, el) => {
        if (!allRefs.current[id]) {
            allRefs.current[id] = {};
        }
        allRefs.current[id][type] = el;
    };

    const getPinOffset = (pinPos, itemHeight) => {
        switch (pinPos) {
            case 'top':
                return 0; 
            case 'center':
                return (window.innerHeight / 2) - (itemHeight / 2); 
            case 'bottom':
                return window.innerHeight - itemHeight - 20; 
            default:
                return 0;
        }
    };


    useLayoutEffect(() => {
        const container = containerRef.current;
        const data = howItWorksData;
        const refs = allRefs.current;
        
        const isReady = data.every(d => refs[d.id] && refs[d.id].item && refs[d.id].cover && refs[d.id].title);
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
        
        if (!container || !isReady) {
            return; 
        }
        
        // Reset GSAP state
        gsap.set(container, { y: 0 });

        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        if (isDesktop) {
            
            const cardHeight = refs[data[0].id].item.offsetHeight;
            const scrollDurationPerCard = window.innerHeight * 0.8; 
            const totalScrollHeight = data.length * scrollDurationPerCard; 


            const masterTl = gsap.timeline({
                immediateRender: false,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80", 
                    end: `+=${totalScrollHeight}`, 
                    scrub: 1, 
                    pin: container, 
                    pinSpacing: true,
                    onLeaveBack: () => ScrollTrigger.refresh(),
                    onEnterBack: () => ScrollTrigger.refresh(),
                }
            });

            data.forEach((cardData, i) => {
                const cover = refs[cardData.id].cover;
                const title = refs[cardData.id].title;
                
                const swipeX = cardData.coverDir === "right" ? "100%" : "-100%";
                const label = `step-${i}`; 
                
                const viewportOffset = getPinOffset(cardData.pinPos, cardHeight);
                const cumulativeItemHeight = i * cardHeight; 
                const finalY = cumulativeItemHeight - viewportOffset;

                // Transisi Y
                if (i > 0) {
                    masterTl.to(container, {
                        y: -finalY, 
                        duration: 0.5, 
                        ease: "power2.inOut",
                    }, label); 
                } else {
                    masterTl.to(container, {
                        y: -viewportOffset, 
                        duration: 0.1, 
                        ease: "none",
                    }, label);
                }
                
                // Remove Title
                masterTl.to(title, { opacity: 0, duration: 0.1, ease: "none" }, `${label}+=0.5`); 

                // Swipe Cover
                masterTl.to(cover, { x: swipeX, duration: 0.5, ease: "power2.inOut" }, `${label}+=0.6`); 
            });

        } else {
            
            data.forEach((cardData, i) => {
                const item = refs[cardData.id].item;
                const cover = refs[cardData.id].cover;
                const title = refs[cardData.id].title;
                
                gsap.set(cover, { x: 0 });
                gsap.set(title, { opacity: 1 });
                
                const swipeX = cardData.coverDir === "right" ? "100%" : "-100%";
                
                gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top center", 
                    }
                })
                .to(title, { opacity: 0, duration: 0.3 })
                .to(cover, { x: swipeX, duration: 0.7, ease: "power2.out" }, "<"); 
            });
        }
        
        // Clean up
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            ScrollTrigger.refresh(); 
        };
    }, [howItWorksData.length]); 


    return (
        <section ref={sectionRef} className="w-full"> 
            <div ref={containerRef} className="flex flex-col">
                {howItWorksData.map((data) => (
                    <CardItem 
                        key={data.id} 
                        data={data} 
                        setRef={setRef} 
                    />
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;