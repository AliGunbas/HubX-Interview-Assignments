import { useEffect, useState } from "react";
import { SliderButtons } from "./SliderButtons"
import gsap from "gsap";
import "./slider.css"
import { SliderPage } from "../types";

export const Slider = (props: { sliderPages: SliderPage[] }) => {

    const { sliderPages } = props


    const [selectedPageId, setSelectedPageId] = useState<number>(1)
    const [selectedButton, setSelectedButton] = useState<number>(0)

    useEffect(() => {
        const container = document.querySelector(`#img-container-${selectedPageId}`) as HTMLElement;
        const detailContainer = document.querySelector(`#detail-container-${selectedPageId}`) as HTMLElement;

        if (!container) return;
        container.style.opacity = "1"
        detailContainer.style.opacity = "1"

        const images = container.querySelectorAll("img");
        const tl = gsap.timeline();

        tl.fromTo(images[0],
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
        );

        const isThereParticleImages = images.length > 1
        if (isThereParticleImages) {
            if (selectedPageId == 2) {
                tl.fromTo(
                    [images[1], images[2]],
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "back.out(1.7)",
                        clearProps: "transform",
                    }
                );
            } else if (selectedPageId == 3) {
                tl.fromTo(
                    [images[1], images[2], images[3]].reverse(),
                    {
                        y: "100%",
                    },
                    {
                        y: 0,
                        duration: 0.6,
                        stagger: 0.3,
                        ease: "power2.out",
                        clearProps: "transform",
                    }
                );
            } else if (selectedPageId == 4) {
                tl.fromTo(
                    [images[1], images[2]],
                    {
                        y: -50,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.2,
                        ease: "power2.out",
                        clearProps: "transform",
                    }
                );
            } else if (selectedPageId == 5) {
                const rotateArr = [-39.61, -21.51, 0, 25.96]


                images.forEach((img, index) => {
                    if (index === 0) return;
                    const container = img.parentElement;
                    if (container == null) return
                    const containerRect = container.getBoundingClientRect();
                    const imgRect = img.getBoundingClientRect();
                    const containerCenterX = containerRect.left + containerRect.width / 2;
                    const imgCenterX = imgRect.left + imgRect.width / 2;
                    const deltaX = containerCenterX - imgCenterX;
                    tl.fromTo(
                        img,
                        {
                            x: deltaX,
                            y: 100,
                            opacity: 0,
                            rotateZ: 0,
                            xPercent: -50,
                        },
                        {
                            x: 0,
                            y: 0,
                            xPercent: -50,
                            opacity: 1,
                            rotateZ: rotateArr[index - 1],
                            duration: 0.25,
                            ease: "power2.out",
                        },
                        "-=0.1"
                    );
                });

            }
        }


        return () => {
            tl.kill();
        }

    }, [selectedPageId]);


    const handleChangeSliderPage = (targetId: number) => {
        const targetButton = document.querySelector(`#slider-button-${targetId}`) as HTMLElement
        if (selectedPageId === targetId || targetButton == null) return;
        setSelectedButton(targetId)
        scrollToCenter(targetButton)
        const currentContainer = document.querySelector(`#img-container-${selectedPageId}`);
        const detailContainer = document.querySelector(`#detail-container-${selectedPageId}`);
        if (!currentContainer) {
            setSelectedPageId(targetId);
            return;
        }

        gsap.fromTo([currentContainer, detailContainer],
            {
                opacity: 1,
            },
            {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    setSelectedPageId(targetId);
                },
            });
    };

    const scrollToCenter = (buttonElement: HTMLElement) => {
        const container = buttonElement.parentElement;
        if (!container) return;
        buttonElement.scrollIntoView()
    };



    return (
        <div className="slider">
            <div className="slider-body">
                {sliderPages.map((item: SliderPage) => {
                    return <div key={item.id} data-selected={(selectedPageId === item.id).toString()} className="slider-page">
                        <div id={`img-container-${item.id}`} className="img-container">
                            <div className="imgs-wrapper">
                                {
                                    item.imgArr.map((img: string) => {
                                        return <img src={img}></img>
                                    })
                                }
                            </div>
                        </div>
                        <div id={`detail-container-${item.id}`} className="detail-container">
                            <h2>{item.title}</h2>
                            <h1>{item.h1}</h1>
                            <p>{item.p}</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                })
                }
            </div>
            <SliderButtons
                sliderPages={sliderPages}
                handleChangeSliderPage={handleChangeSliderPage}
                selectedButton={selectedButton}
            />
        </div>
    )
}