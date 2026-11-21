/**
 * Toggles the visibility of an individual team member's bio and updates button text.
 * @param {string} bioId - The ID of the bio container element
 * @param {HTMLElement} [btnEl] - Optional button element that triggered the toggle
 */
function toggleBio(bioId, btnEl) {
    const bio = document.getElementById(bioId);
    if (!bio) return;

    const isOpen = bio.classList.toggle("is-open");

    if (btnEl) {
        btnEl.textContent = isOpen ? "Hide Bio" : "Show Bio";
        btnEl.setAttribute("aria-expanded", String(isOpen));
    }
}

/**
 * Switches between the 'bios' and 'vision' sections with a subtle fade.
 * @param {string} sectionId - 'bios' or 'vision'
 * @param {HTMLElement} [clickedBtn] - Optional nav button clicked
 */
function showSection(sectionId, clickedBtn) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach((btn) => btn.classList.remove("active"));
    if (clickedBtn) {
        clickedBtn.classList.add("active");
    }

    if (sectionId === "bios") {
        visionSection.style.display = "none";
        visionSection.classList.remove("is-visible");

        biosSection.style.display = "flex";
        requestAnimationFrame(() => biosSection.classList.add("is-visible"));
    } else if (sectionId === "vision") {
        biosSection.style.display = "none";
        biosSection.classList.remove("is-visible");

        visionSection.style.display = "block";
        requestAnimationFrame(() => visionSection.classList.add("is-visible"));
    }
}