// Countdown to Christmas
const countdownTimer = document.getElementById("countdown-timer");
const christmasDate = new Date("2023-12-25T00:00:00").getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = christmasDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        countdownTimer.innerHTML = "Merry Christmas!";
    }
}

setInterval(updateCountdown, 1000);

// You can add more JavaScript functions as needed for your website's functionality
// Existing JavaScript code from the previous response

// JavaScript for the Santa's Workshop section
const letterForm = document.getElementById("letter-to-santa-form");
const santaResponse = document.getElementById("santa-response");

letterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const letterContent = document.getElementById("letter-content").value;

    // Simulate an automated response from Santa (you can replace this with your own logic)
    const automatedResponse = `Dear Child,\n\nThank you for your letter! Santa and his elves are working hard to make this Christmas special for you. Your wishes are noted, and I'll do my best to fulfill them. Have a wonderful holiday season!\n\nWarm regards,\nSanta Claus`;

    santaResponse.innerText = automatedResponse;
    letterForm.reset();
});

// JavaScript for the Christmas Recipes section
const recipeForm = document.getElementById("recipe-submission-form");
const recipeList = document.getElementById("recipe-list");
const recipeRatings = document.getElementById("recipe-ratings");

recipeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const recipeTitle = document.getElementById("recipe-title").value;
    const recipeDescription = document.getElementById("recipe-description").value;
    // In a real application, you would also handle the uploaded image here.

    // Create a new recipe card
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";
    recipeCard.innerHTML = `
        <h4>${recipeTitle}</h4>
        <p>${recipeDescription}</p>
        <!-- You can include the recipe image here -->
    `;
    recipeList.appendChild(recipeCard);

    // Reset the form
    recipeForm.reset();
});

// You can implement user ratings and comments for recipes in this section

// Existing JavaScript code from the previous responses

// JavaScript for the Christmas Stories section
const storyForm = document.getElementById("story-submission-form");
const storyList = document.getElementById("story-list");

storyForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const storyTitle = document.getElementById("story-title").value;
    const storyContent = document.getElementById("story-content").value;

    // Create a new story card
    const storyCard = document.createElement("div");
    storyCard.className = "story-card";
    storyCard.innerHTML = `
        <h4>${storyTitle}</h4>
        <p>${storyContent}</p>
    `;
    storyList.appendChild(storyCard);

    // Reset the form
    storyForm.reset();
});

// JavaScript for the Music & Carols section
const songList = document.getElementById("song-list");
const lyricsContainer = document.getElementById("lyrics-container");

// Example songs (you can add more)
const songs = [
    { title: "Jingle Bells", lyrics: "Dashing through the snow..." },
    { title: "Silent Night", lyrics: "Silent night, holy night..." },
    // Add more songs and lyrics here
];

// Populate the song list
songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#" data-index="${index}">${song.title}</a>`;
    songList.appendChild(listItem);
});

// Add event listener to display lyrics when a song is clicked
songList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        const index = e.target.getAttribute("data-index");
        const selectedSong = songs[index];
        lyricsContainer.innerText = selectedSong.lyrics;
    }
});

// Existing JavaScript code from the previous responses

// JavaScript for the DIY Decorations section
const uploadForm = document.getElementById("upload-creation-form");
const creationGallery = document.getElementById("creation-gallery");

uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const creationImage = document.getElementById("creation-image").files[0];

    // Create a new image card for the user's creation
    const imageCard = document.createElement("div");
    imageCard.className = "image-card";
    const img = document.createElement("img");
    img.src = URL.createObjectURL(creationImage);
    imageCard.appendChild(img);
    creationGallery.appendChild(imageCard);

    // Reset the form
    uploadForm.reset();
});

// JavaScript for the Holiday Games section
const gameList = document.getElementById("game-list");
const leaderboard = document.getElementById("leaderboard");

// Example games (you can add more)
const games = [
    { title: "Christmas Puzzle", link: "puzzle.html" },
    { title: "Santa's Sleigh Race", link: "sleigh-race.html" },
    // Add more games and links here
];

// Populate the game list
games.forEach((game) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${game.link}">${game.title}</a>`;
    gameList.appendChild(listItem);
});

// Existing JavaScript code from the previous responses

// JavaScript for the Christmas Lights Map section
const lightForm = document.getElementById("light-display-submission-form");
const displayRatings = document.getElementById("display-ratings");

lightForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const locationName = document.getElementById("location-name").value;
    const locationDescription = document.getElementById("location-description").value;

    // Create a new light display card
    const displayCard = document.createElement("div");
    displayCard.className = "display-card";
    displayCard.innerHTML = `
        <h4>${locationName}</h4>
        <p>${locationDescription}</p>
    `;
    displayRatings.appendChild(displayCard);

    // Reset the form
    lightForm.reset();
});

// JavaScript for the Charity & Giving section
const donationForm = document.getElementById("donation-form");

donationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const selectedCharity = document.getElementById("charity-select").value;
    const donationAmount = document.getElementById("donation-amount").value;

    // Process the donation (simulated example; you'd need a real donation gateway)
    // This is where you would connect to a payment gateway to process the donation

    // Clear the form
// Existing JavaScript code from the previous responses

// JavaScript for the Contact & Feedback section
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Handle the user's contact form submission (you can use this data as needed)

    // Clear the form
    contactForm.reset();
});

// You can add JavaScript for handling social media links and engagement with the community

// Add more JavaScript functions as needed for other sections


