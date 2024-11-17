/* ===============================================
 * ハンバーガーボタンとナビゲーション
 =============================================== */

hamburgerButton = document.getElementById("hamburgerButton");
globalNav = document.getElementById("globalNav");

/*
  ハンバーガーボタンをクリックしたらナビゲーションを開く
=============================================== */
hamburgerButton.addEventListener("click", () => {
    document.body.classList.toggle("body--noScroll");
    globalNav.classList.toggle("globalNav--active");
    if (globalNav.getAttribute("aria-hidden") === "true") {
        globalNav.setAttribute("aria-hidden", "false");
    } else {
        globalNav.setAttribute("aria-hidden", "true");
    }
    hamburgerButton.classList.toggle("hamburgerButton--opened");
    if (hamburgerButton.getAttribute("aria-expanded") === "false") {
        hamburgerButton.setAttribute("aria-expanded", "true");
    } else {
        hamburgerButton.setAttribute("aria-expanded", "false");
    }
});

/*
  ナビゲーションのリンクをクリックしたらナビゲーションを閉じて該当セクションへスクロール
=============================================== */
const globalNavItems = document.querySelectorAll(".globalNavItem");

globalNavItems.forEach(eachItem => {
    eachItem.addEventListener("click", () => {
        document.body.classList.toggle("body--noScroll");

        let targetSection = document.querySelector(eachItem.getAttribute("data-target"));
        let scrollAmount = targetSection.offsetTop;

        globalNav.classList.toggle("globalNav--active");
        globalNav.setAttribute("aria-hidden", "true");
        hamburgerButton.classList.toggle("hamburgerButton--opened");
        hamburgerButton.setAttribute("aria-expanded", "false");

        setTimeout(() => {
            window.scrollTo({
                top: scrollAmount,
                behavior: "smooth"
            });
        }, 200);
    });
});

/* ===============================================
 * ヘッダーナビゲーション
 =============================================== */
const headerNavItems = document.querySelectorAll(".headerNavItem");
const currentItemBg = document.getElementById("headerCurrentItemBg");

let isAnimating = false; // アニメーション中かどうかをチェックするフラグ
headerNavItems.forEach(eachNavItem => {
    eachNavItem.addEventListener("click", () => {

        if (isAnimating) return; // アニメーション中は何もしない

        isAnimating = true; // アニメーション開始

        // 黒背景の位置を調整
        let navItemWidth = eachNavItem.offsetWidth;
        let navItemNth = eachNavItem.getAttribute("data-nthItem");
        let bgLeftPosition = (navItemNth * navItemWidth + 12) + "px";
        currentItemBg.style.left = bgLeftPosition;

        // テキストの色を変更
        let currentItem = document.querySelector(".headerNavItem--current");
        currentItem.classList.remove("headerNavItem--current");
        eachNavItem.classList.add("headerNavItem--current");

        // ページ内スクロール
        let targetSection = eachNavItem.getAttribute("data-target");
        const headerHeight = document.querySelector("header").offsetHeight;
        let scrollAmount = document.querySelector(targetSection).offsetTop + headerHeight - 24;

        console.log(targetSection);
        console.log(scrollAmount);

        if (targetSection === "#currentWorks") {
            console.log(scrollAmount);
            scrollAmount += 80;
            console.log(scrollAmount);
            window.scrollTo({
                top: scrollAmount,
                behavior: "smooth"
            });
        } else if (targetSection !== "#introduction") {
            window.scrollTo({
                top: scrollAmount,
                behavior: "smooth"
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        // アニメーション終了後に再度有効化
        setTimeout(() => {
            isAnimating = false;
        }, 1000); // アニメーションの時間に応じて調整
    });
});

// スクロールを検知して、条件に応じて黒背景の位置を変更
window.addEventListener("scroll", () => {

    if (!isAnimating) {
        const currentScrollAmount = window.scrollY;
        const headerNavItems = document.querySelectorAll(".headerNavItem");

        headerNavItems.forEach(eachNavItem => {
            let targetSection = eachNavItem.getAttribute("data-target");
            let targetSectionTop = document.querySelector(targetSection).offsetTop;
            let targetSectionBottom = document.querySelector(targetSection).offsetTop + document.querySelector(targetSection).offsetHeight;
            let currentItem = document.querySelector(".headerNavItem--current");

            let navItemWidth = eachNavItem.offsetWidth;
            let navItemNth = eachNavItem.getAttribute("data-nthItem");
            let bgLeftPosition = (navItemNth * navItemWidth + 12) + "px";

            if (targetSectionTop <= currentScrollAmount && currentScrollAmount <= targetSectionBottom) {
                currentItem.classList.remove("headerNavItem--current");
                eachNavItem.classList.add("headerNavItem--current");
                currentItemBg.style.left = bgLeftPosition;
            }
        });
    }
});

/* ===============================================
 * 現在の仕事の表示切り替え
 =============================================== */
const currentWorksContent = document.querySelectorAll(".currentWorksDetail");
const currentWorksTab = document.querySelectorAll(".currentWorksLogoWrapper");

currentWorksTab.forEach(eachTab => {
    eachTab.addEventListener("click", () => {
        let currentTab = document.querySelector(".currentWorksLogoWrapper--active");
        let currentContent = document.querySelector(".currentWorksDetail--active");

        if (!eachTab.classList.contains("currentWorksLogoWrapper--active")) {

            // タブの処理
            currentTab.classList.remove("currentWorksLogoWrapper--active");
            eachTab.classList.add("currentWorksLogoWrapper--active");

            // コンテンツの処理
            let eachTabChild = eachTab.children[0];
            let targetContentId = eachTabChild.getAttribute("data-target");
            let targetContent = document.getElementById(targetContentId);
            currentContent.classList.remove("currentWorksDetail--active");
            targetContent.classList.add("currentWorksDetail--active");
        }
    });
});