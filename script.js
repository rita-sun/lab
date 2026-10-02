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