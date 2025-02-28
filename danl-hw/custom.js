document.addEventListener("DOMContentLoaded", function() {
    function updateCodeButtons() {
        document.querySelectorAll(".code-fold-button").forEach(button => {
            let label = button.querySelector(".code-tools-button-label");
            if (label && label.textContent.trim() === "Code") {
                label.textContent = "Show Code";  // Change this to your desired text
            }
        });
    }

    // Run immediately in case the page has already loaded
    updateCodeButtons();

    // Observe changes in case Quarto modifies buttons dynamically
    let observer = new MutationObserver(updateCodeButtons);
    observer.observe(document.body, { childList: true, subtree: true });
});