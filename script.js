// JavaScript for Animations
document.addEventListener("DOMContentLoaded", () => {
    // Animate Header
    const headerText = document.querySelector("header");
    headerText.style.transition = "transform 1s ease-in-out, opacity 1s";
    headerText.style.transform = "scale(1.1)";
    headerText.style.opacity = "1";

    setInterval(() => {
        headerText.style.transform = "scale(1.05)";
        setTimeout(() => {
            headerText.style.transform = "scale(1.1)";
        }, 500);
    }, 2000);

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Product Card Animation on Hover
    const productCards = document.querySelectorAll(".product");
    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.1)";
            card.style.boxShadow = "0 4px 15px rgba(255, 127, 0, 0.8)";
            card.style.transition = "transform 0.3s, box-shadow 0.3s";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });

    // Fade-in Animation for Products on Page Load
    const fadeInProducts = () => {
        const products = document.querySelectorAll(".product");
        products.forEach((product, index) => {
            setTimeout(() => {
                product.style.opacity = "1";
                product.style.transform = "translateY(0)";
                product.style.transition = "opacity 1s ease, transform 1s ease";
            }, index * 200);
        });
    };
    fadeInProducts();

    // Contact Section Glow Effect
    const contactSection = document.querySelector(".contact");
    setInterval(() => {
        contactSection.style.boxShadow = "0 0 15px rgba(40, 167, 69, 0.7)";
        setTimeout(() => {
            contactSection.style.boxShadow = "none";
        }, 1000);
    }, 2000);
});
