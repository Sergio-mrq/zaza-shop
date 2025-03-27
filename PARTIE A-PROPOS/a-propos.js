document.addEventListener("DOMContentLoaded", function() {
    const avisContainer = document.querySelector(".avis-container");
    const avis = document.querySelectorAll(".avis");
    
    let index = 0;
    function defilerAvis() {
        avis.forEach((a, i) => {
            a.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % avis.length;
    }

    setInterval(defilerAvis, 4000); // Change d'avis toutes les 4 secondes
    defilerAvis();
});
