/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    /* Close menu after clicking a link */

    const navigationItems =
        navLinks.querySelectorAll("a");


    navigationItems.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    /* Fallback for older browsers */

    revealElements.forEach((element) => {

        element.classList.add("active");

    });

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.querySelector(".back-to-top");


if (backToTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            !menuToggle ||
            !navLinks
        ) {
            return;
        }


        const clickedInsideMenu =
            navLinks.contains(
                event.target
            );


        const clickedMenuButton =
            menuToggle.contains(
                event.target
            );


        if (
            !clickedInsideMenu &&
            !clickedMenuButton &&
            navLinks.classList.contains(
                "active"
            )
        ) {

            navLinks.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    new Date().getFullYear();


const footerYear =
    document.querySelector(
        ".footer-bottom p"
    );


if (footerYear) {

    footerYear.innerHTML =
        footerYear.innerHTML.replace(
            /\b20\d{2}\b/,
            currentYear
        );

}

