const projects = document.querySelectorAll(".project");
const preview = document.getElementById("project-preview");
const previewImage = document.getElementById("project-preview-image");

projects.forEach((project) => {

    project.addEventListener("mouseenter", () => {

        const image = project.dataset.preview;

        if (!image) {
            preview.classList.remove("visible");
            return;
        }

        previewImage.src = image;
        previewImage.alt = project.querySelector("h2").textContent + " preview";
        preview.classList.add("visible");

    });

    project.addEventListener("mouseleave", () => {
        preview.classList.remove("visible");
    });

});

/* STARDROP CURSOR INTERACTION */

const stardrop = document.querySelector(".intro-image");

if (stardrop) {

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    stardrop.addEventListener("mousemove", (event) => {

        const rect = stardrop.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = event.clientX - centerX;
        const distanceY = event.clientY - centerY;

        targetX = -(distanceX / (rect.width / 2)) * 7;
        targetY = -(distanceY / (rect.height / 2)) * 7;

    });

    stardrop.addEventListener("mouseleave", () => {
        targetX = 0;
        targetY = 0;
    });

    function animateStardrop() {

        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;

        stardrop.style.transform =
            `translate(${currentX}px, ${currentY}px)`;

        requestAnimationFrame(animateStardrop);
    }

    animateStardrop();
}