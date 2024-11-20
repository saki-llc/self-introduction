/* ===============================================
 *  ローディングアニメーション
 =============================================== */
document.addEventListener("DOMContentLoaded", () => {

    document.body.style.display = "initial";

    if (sessionStorage.getItem('visited') !== "true") {
        sessionStorage.setItem('visited', "true");

        const loadingScreen = document.getElementById("loadingScreen");
        const loadingSpinner = document.querySelector(".loading-spinner");
        const introductionImage = document.querySelector(".introductionImageWrapper");
        const introductionTextArea = document.querySelector(".introductionTextArea");

        loadingScreen.style.display = "flex";

        const timeLineLoading = gsap.timeline()
        timeLineLoading
            .from(loadingSpinner, {
                duration: 1,
                transform: "translateY(50px)",
                opacity: 0,
                ease: "power2.inOut",
            })
            .to(loadingSpinner, {
                duration: 0.3,
                scale: 1.5,
                ease: "power2.inOut",
            })
            .to(loadingSpinner, {
                duration: 0.5,
                scale: 0,
                ease: "power2.inOut",
            },)
            .to(loadingScreen, {
                duration: 0.6,
                opacity: 0,
                ease: "power2.inOut",
            }, "<0.3")
            .from(introductionImage, {
                transform: "translateY(100px)",
                duration: 0.8,
                opacity: 0,
                ease: "power2.inOut",
            }, "<")
            .from(introductionTextArea, {
                transform: "translateX(-100px)",
                duration: 1,
                opacity: 0,
                ease: "power2.inOut",
                onComplete: () => {
                    loadingScreen.style.display = "none";
                }
            }, "<0.2")
    }

    /* ===============================================
     *  セクションタイトル
     =============================================== */
    const sectionTitles = document.querySelectorAll(".sectionTitleGroup");

    sectionTitles.forEach(sectionTitle => {
        gsap.from(sectionTitle, {
            duration: 1,
            opacity: 0,
            scale: 0.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: sectionTitle,
                start: "top 80%",
            },
            onComplete: () => {
                console.log("complete-title");
            }
        });
    });

    /* ===============================================
     *  できることカード
     =============================================== */
    const skillsCards = document.querySelectorAll(".skillsCard");

    const skillsCard0 = skillsCards[0];
    const skillsCard1 = skillsCards[1];
    const skillsCard2 = skillsCards[2];
    const skillsCard3 = skillsCards[3];

    const timeLineSkillsCard = gsap.timeline({
        scrollTrigger: {
            trigger: skillsCard0,
            start: "top 70%",
        },
        onComplete: () => {
            console.log("complete-skillsCard");
        }
    })

    timeLineSkillsCard
        .from(skillsCard0, {
            transform: "translateX(-100px) rotate(-10deg)",
            duration: 1,
            opacity: 0,
            ease: "power2.inOut",

        },)
        .from(skillsCard1, {
            transform: "translateX(100px) rotate(10deg)",
            duration: 1,
            opacity: 0,
            ease: "power2.inOut",
        }, "<0.1")
        .from(skillsCard2, {
            transform: "translateX(-100px) rotate(-10deg)",
            duration: 1,
            opacity: 0,
            ease: "power2.inOut",
        }, "<0.1")
        .from(skillsCard3, {
            transform: "translateX(100px) rotate(10deg)",
            duration: 1,
            opacity: 0,
            ease: "power2.inOut",
        }, "<0.1")

    /* ===============================================
     *  現在の仕事
     =============================================== */
    const currentWork = document.querySelector("#currentWorks");
    const currentWorkLeft = document.querySelector(".currentWorksMainAreaLeft");
    const currentWorkRight = document.querySelector(".currentWorksMainAreaRight");
    const timeLineCurrentWork = gsap.timeline({
        scrollTrigger: {
            trigger: currentWork,
            start: "top 80%",
        },
        onComplete: () => {
            console.log("complete-currentWork");
        }
    })

    timeLineCurrentWork
        .from(currentWork, {
            transform: "translateX(50%)",
            duration: 1,
            opacity: 0,
            ease: "power2.inOut",
        })
        .from(currentWorkLeft, {
            transform: "translateY(-120px)",
            duration: 1,
            opacity: 0,
            ease: "power2.inOut",
        }, "<1")
        .from(currentWorkRight, {
            transform: "translateX(-200px)",
            duration: 1,
            opacity: 0,
            ease: "power2.inOut",
        }, "<0.25")

    /* ===============================================
     *  キャリア
     =============================================== */
    const careerTimelineItem = document.querySelectorAll(".careerTimelineItem");

    careerTimelineItem.forEach(eachCareerTimelineItem => {
        gsap.from(eachCareerTimelineItem, {
            transform: "translateY(-100px)",
            duration: 1,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: eachCareerTimelineItem,
                start: "top 50%",
            },
            onComplete: () => {
                console.log("complete-careerTimelineItem");
            }
        })
    })

    const careerHighlightItem = document.querySelectorAll(".careerHighlightItem");
    const careerHighlightList = document.querySelector(".careerHighlightList");

    gsap.from(careerHighlightItem, {
        scale: 0,
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: careerHighlightList,
            start: "top 70%",
        },
        onComplete: () => {
            console.log("complete-careerHighlightItem");
        }
    })

    /* ===============================================
     *  制作実績
     =============================================== */
    const works = document.querySelector("#works");
    const worksCard = document.querySelectorAll(".worksCard");

    const worksCard1 = worksCard[0];
    const worksCard2 = worksCard[1];
    const worksCard3 = worksCard[2];

    const timeLineWorksCard = gsap.timeline({
        scrollTrigger: {
            trigger: worksCard1,
            start: "top 60%",
        },
        onComplete: () => {
            console.log("complete-worksCard");
        }
    });
});