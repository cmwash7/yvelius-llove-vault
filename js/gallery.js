// JavaScript for Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalVideo = document.getElementById("modal-video");
    const closeModal = document.querySelector(".close");

    // Open Modal
    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", () => {
            const type = item.dataset.type;
            const content = item.querySelector(type === "image" ? "img" : "video").src;

            if (type === "image") {
                modalImage.src = content;
                modalImage.style.display = "block";
                modalVideo.style.display = "none";
            } else {
                modalVideo.src = content;
                modalVideo.style.display = "block";
                modalImage.style.display = "none";
            }

            modal.style.display = "flex";
        });
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        modalImage.src = "";
        modalVideo.src = "";
    });

    // Close Modal on Outside Click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modalImage.src = "";
            modalVideo.src = "";
        }
    });
});