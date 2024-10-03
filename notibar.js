// Notification Bar Config
const notibarConfig = {
    color: "transparent", // Notibar color (HEX)
    text: "Our Grand Opening is set for 20th of October. Don't be late!", // Notibar text
    active: true, // Notibar active: (true or false)
    width: "100%", // Notibar width

    button1: {
        color: "#007bff", // Button1 Color (HEX)
        text: "Join Discord", // Button1 text
        active: true, // Button1 active
        url: "https://discord.gg/5xDxHSBm4s" // Button1 URL
    },
    button2: {
        color: "#28a745", // Button2 Color (HEX)
        text: "Subscribe on YouTube", // Button2 text
        active: false, // Button2 active
        url: "https://www.youtube.com/@NightlyPirateCinema" // Button2 URL
    },
    button3: {
        color: "#dc3545", // Button3 Color (HEX)
        text: "Get Modpack", // Button3 text
        active: false, // Button3 active
        url: "https://mega.nz/file/diFiUbLS#pQzILAWYi_Nez_8kYyhG6DR8W9bQ3r1Z9JRySSY-cOw" // Button3 URL
    }
};

function updateNotibar(config) {
    const notifBar = document.getElementById("notification-bar");
    const notifText = document.getElementById("notif-text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");

    if (config.active) {
        notifBar.style.display = "block"; // Show the bar
        notifBar.style.backgroundColor = config.color;
        notifBar.style.width = config.width;
        notifText.textContent = config.text;

        // Button 1
        if (config.button1.active) {
            button1.style.display = "inline-block";
            button1.style.backgroundColor = config.button1.color;
            button1.textContent = config.button1.text;
            button1.href = config.button1.url;
        } else {
            button1.style.display = "none";
        }

        // Button 2
        if (config.button2.active) {
            button2.style.display = "inline-block";
            button2.style.backgroundColor = config.button2.color;
            button2.textContent = config.button2.text;
            button2.href = config.button2.url;
        } else {
            button2.style.display = "none";
        }

        // Button 3
        if (config.button3.active) {
            button3.style.display = "inline-block";
            button3.style.backgroundColor = config.button3.color;
            button3.textContent = config.button3.text;
            button3.href = config.button3.url;
        } else {
            button3.style.display = "none";
        }

    } else {
        notifBar.style.display = "none"; // Hide the bar if inactive
    }
}

// Initialize Notification Bar
updateNotibar(notibarConfig);
