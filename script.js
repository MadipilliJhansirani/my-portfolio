document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const projectCards = document.querySelectorAll(".project-card");
    
    // Highlight the navbar links on scroll
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 80) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Interactive project section
    projectCards.forEach((card) => {
        card.addEventListener("mouseover", function () {
            card.style.transform = "scale(1.1)";
            card.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseout", function () {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });

        card.addEventListener("click", function () {
            const projectTitle = card.querySelector("h3").textContent;
            alert(`You clicked on: ${projectTitle}`);
        });
    });

    // Form submission with animation
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const submitButton = document.querySelector("button[type='submit']");
        submitButton.textContent = "Sending...";
        submitButton.style.backgroundColor = "#feb47b";

        setTimeout(() => {
            alert("Message sent successfully!");
            submitButton.textContent = "Send Message";
            submitButton.style.backgroundColor = "#ff7e5f";
            this.reset();
        }, 1500);
    });
});
