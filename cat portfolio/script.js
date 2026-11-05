const cat = document.getElementById("cat");
const scratch = document.getElementById("scratch");
const profile = document.getElementById("profile");

// Wait for the cat to finish walking
setTimeout(() => {

    // Show scratch marks
    scratch.classList.add("show");

    // Reveal profile after scratching
    setTimeout(() => {
        profile.classList.add("show");
    }, 900);

}, 4000);


// Portfolio button
function openPortfolio() {
    window.location.href = "home.html";
}