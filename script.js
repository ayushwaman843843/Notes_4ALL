const ChatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

// Expanded responses for a variety of keywords
const responses = {
    "brainrot":["what is brainrot","brainrot?","brainrot"],
    "paper query m1":["where can i find bds m1 papers","where can i find pps m1 papers","where can i find calculus m1 papers",
        "where can i find cal m1 papers","where can i find eob m1 papers","where can i find evs m1 papers","where are bds m1 papers",
        "where are cal m1 papers","where are find pps m1 papers","where are fwd m1 papers","where are m1 papers","mid-term 1","midterm 1",
        "mid-term-1","where can i find m1 papers"
    ],
    "paper query m2":["where can i find bds m2 papers","where can i find pps m2 papers","where can i find calculus m2 papers",
        "where can i find cal m2 papers","where can i find eob m2 papers","where can i find evs m2 papers","where are bds m2 papers",
        "where are cal m2 papers","where are find pps m2 papers","where are fwd m2 papers","where are m2 papers","mid-term 2","midterm 2",
        "mid-term-2",
    ],
    "paper query tee":["where can i find bds tee papers","where can i find pps tee papers","where can i find calculus tee papers",
        "where can i find cal tee papers","where can i find tee m1 papers","where can i find evs tee papers","where are bds tee papers",
        "where are cal tee papers","where are find pps tee papers","where are fwd tee papers","where are tee papers","term-end-exam","term-end",
        "term end","termend","term end exam"
    ],
    "holidays":["vacations start","vacations","holidays"],
    "greetings": ["hello", "hi", "hey", "what's up", "howdy", "how are u?", "How are you?", "how u?", "how you?"],
    "farewell": ["bye", "goodbye", "see you later", "take care"],
    "thank": ["thank you", "thanks", "appreciate it", "thanku", "tysm"],
    "introduction": ["what's your name", "who are you", "tell me about yourself", "who u?", "who you?","who are u","who are u?"],
    "help": ["help", "assist", "support"],
    "joke": ["tell me a joke", "make me laugh", "joke"],
    "do I have": ["do I have", "what do I have", "what's my schedule"],
    "best music": ["who is ur fav artist", "who is your fav artist", "your fav artist?", "ur fav song?", "fav song?"],
    "time": ["what time is it", "tell me the time", "current time", "what's the time", "whats the time", "time?", "what time is it rn?", "what time is it rn", "what time is it?", "what time is it"],
    "weather": ["whats the weather", "tell me the weather", "hows the weather", "weather update"],
    "favorite food": ["what's your favorite food?", "fav food", "food you like"],
    "movies": ["what's your favorite movie?", "best movie", "movie suggestions"],
    "hobbies": ["what are your hobbies?", "hobby", "what do you like to do"],
    "inspiration": ["who inspires you?", "inspirational quotes", "motivation"],
    "news": ["what's the news?", "latest news", "news update"],
    "science": ["tell me something about science", "science facts", "science news"],
    "schedule monday": ["what is my schedule on monday?","monday", "whats the schedule on monday?", "whats my schedule on monday", "what is my schedule on monday", "schedule on monday?"],
    "schedule tuesday": ["what is my schedule on tuesday?","teusday", "whats the schedule on tuesday?", "whats my schedule on tuesday", "what is my schedule on tuesday", "schedule on tuesday?"],
    "schedule wednesday": ["what is my schedule on wednesday?","wednesday", "whats the schedule on wednesday?", "whats my schedule on wednesday", "what is my schedule on wednesday", "schedule on wednesday?"],
    "schedule thursday": ["what is my schedule on thursday?","thursday", "whats the schedule on thursday?", "whats my schedule on thursday", "what is my schedule on thursday", "schedule on thursday?"],
    "schedule friday": ["what is my schedule on friday?","friday","whats the schedule on friday?", "whats my schedule on friday", "what is my schedule on friday", "schedule on friday?"],
    "schedule saturday": ["what is my schedule on saturday?","saturday", "whats the schedule on saturday?", "whats my schedule on saturday", "what is my schedule on saturday", "schedule on saturday?"],
    "schedule sunday": ["what is my schedule on sunday?","sunday","whats the schedule on sunday?", "whats my schedule on sunday", "what is my schedule on sunday", "schedule on sunday?"],
    "prof.pps": [
        "who is my pps professor",
        "whose my pps professor",
        "who teaches me pps",
        "who is teaching pps",
        "who is my pps teacher"
    ],
    "prof.fwd": [
        "who is my fwd professor",
        "whose my fwd professor",
        "who teaches me fwd"
    ],
    "prof.cal": [
        "who is my calculus professor",
        "whose my calculus professor",
        "who teaches me calculus"
    ],
    "prof.eob": [
        "who is my eob professor",
        "whose my eob professor",
        "who teaches me eob",
        "who is teaching eob",
        "who is my eob teacher"
    ],
    "prof.es": [
        "who is my evs professor",
        "whose my evs professor",
        "who teaches me evs"
    ],
    "prof.mae": [
        "who is my mae professor",
        "whose my mae professor",
        "who teaches me mae"
    ]
};

// Weekly schedule data
const weeklySchedule = {
        "monday": `
    </br>8-9 AM: BDS-B1 - CL-404 (Prof. Khushbu Chauhan)</br>PPS-B2 - CL-402 (Prof. Krishna Samdani)</br>
    9-10 AM: FWD - CR-401 (Prof. Rojal Rodriguez)</br>
    10-11 AM: PPS - CR-401 (Prof. Payal Mishra)</br>
    11-12 PM: BDS - CR-401 (Prof. Khushbu Chauhan) BREAK</br>
    12-1 PM: BREAK</br>
    1-2 PM: EOB - CR-307 (Prof. Bhakti Bapat)</br>
    2-3 PM: EVS - CR-307 (Prof. Preeti Shrivastava)</br>
    3-4 PM: NOTHING FOR NOW</br>`,

        "tuesday": `
    </br>8-9 AM: FWD - CR-401 (Prof. Rojal Rodriguez)</br>
    9-10 AM: PPS - CL-705 (Prof. Krishna Samdani)</br>
    10-11 AM: FWD-B1 - CL-404 (Prof. Rojal Rodriguez)</br>
    11-12 PM: BREAK</br>
    12-1 PM: BREAK</br>
    1-2 PM: EOB - CR-403 (Prof. Bhakti Bapat)</br>
    2-3 PM: MAE - CR-407 (Prof. Sanjay Kumar)</br>
    3-4 PM: NOTHING FOR NOW</br>`,

        "wednesday": `
    </br>8-9 AM: PPS-B1 - CL-404 (Prof. Krishna Samdani)</br>
    9-10 AM: BDS - CR-401 (Prof. Khushbu Chauhan)</br>
    10-11 AM: Critical Thinking - CR-403 (Prof. [Name Unknown])</br>
    11-12 PM: Critical Thinking - CR-403 (Prof. [Name Unknown])</br>
    12-1 PM: BREAK</br>
    1-2 PM: BDS - CR-401 (Prof. Khushbu Chauhan)</br>
    2-3 PM: NOTHING FOR NOW</br>
    3-4 PM: NOTHING FOR NOW</br>`,

        "thursday": `
    </br>8-9 AM: PPS-B1 - CL-404 (Prof. Krishna Samdani)</br>
    9-10 AM: PPS - CR-306 (Prof. Payal Mishra)</br>
    10-11 AM: Calculus - CR-403 (Prof. Minirani)</br>
    11-12 PM: BREAK</br>
    12-1 PM: BREAK</br>
    1-2 PM: EOB - CR-401 (Prof. Khushbu Chauhan)</br>
    2-3 PM: EVS - CR-401 (Prof. Preeti Shrivastava)</br>
    3-4 PM: NOTHING FOR NOW</br>`,

        "friday": `
    </br>8-9 AM: FWD-B2 - CL-403 (Prof. Ganesh Bhagvat)</br>
    9-10 AM: BDS-B2 - CL-403 (Prof. Khushbu Chauhan)</br>
    10-11 AM: PPS - CR-306 (Prof. Payal Mishra)</br>
    11-12 PM: Critical Thinking - CR-403 (Prof. [Name Unknown])</br>
    12-1 PM: BREAK</br>
    1-2 PM: CAL - CR-401 (Prof. Minirani)</br>
    2-3 PM: NOTHING FOR NOW</br>
    3-4 PM: NOTHING FOR NOW</br>`,

        "saturday": `
    </br>8-9 AM: PPS-B1 - CL-705 (Prof. Krishna Samdani)</br>
    9-10 AM: FWD-B2 - CL-404 (Prof. Ganesh Bhagvat)</br>
    10-11 AM: CAL - CR-403 (Prof. Minirani)</br>
    Day Ends`,

        "sunday": `HOLIDAY!!!`,
    
    "holidays":
    `<br>Diwali Vacation:<br>
    Start Date: October 28, 2024<br>
    End Date: November 3, 2024<br><br>
    Winter Vacation:<br>
    Start Date: December 26, 2024<br>
    End Date: January 1, 2025<br><br>
    Commencement of Next Academic Year (AY 2025-26):<br>
    Start Date: July 14, 2025<br>`
    
};


// Function to generate chatbot responses
const generateResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    for (let responseType in responses) {
        for (let keyword of responses[responseType]) {
            if (lowerCaseMessage.includes(keyword)) {
                switch (responseType) {
                    case "brainrot":
                        return `Fe!n fe!n fe!n, I’m out here dodging the fanum tax, mewing like a sigma in the skibidi toilet, all for the ultimate fe!n fe!n fe!n grindset.`
                    case "paper query m1":
                        return `The Papers for M1 can be found at the bottom of the home page , or you can access them through individual subject tabs through our filters`
                    case "paper query m2":
                        return `The Papers for M2 can be found at the bottom of the home page , or you can access them through individual subject tabs through our filters`
                    case "paper query tee":
                        return `The Papers for TEE can be found at the bottom of the home page , or you can access them through individual subject tabs through our filters`
                    case "holidays":
                        return `Your Vacation Schedule : ${weeklySchedule.holidays}`;
                    case "prof.pps":
                        return "Your PPS professor is Ms. Payal Mishra for theory and Mr. Krishna Samdani for lab sessions.";
                    case "prof.fwd":
                        return "Your FWD professor is Prof. Rojal Rodriguez for theory and Mr.Ganesh Bhagvat for Lab Sessions";
                    case "prof.bds":
                        return"Your BDS professor is Prof. Khushbu Chauhan.";
                    case "prof.cal":
                        return "Your Calculus professor is Ms.Minirani";
                    case "prof.eob":
                        return "Your FWD professor is Ms.Bhakti Bapat";
                    case "prof.es":
                        return"Your BDS professor is Ms.Preeti Shrivastava";
                    case "schedule monday":
                        return `Your Monday schedule: ${weeklySchedule.monday}`;
                    case "schedule tuesday":
                        return `Your Tuesday schedule: ${weeklySchedule.tuesday}`;
                    case "schedule wednesday":
                        return `Your Wednesday schedule: ${weeklySchedule.wednesday}`;
                    case "schedule thursday":
                        return `Your Thursday schedule: ${weeklySchedule.thursday}`;
                    case "schedule friday":
                        return `Your Friday schedule: ${weeklySchedule.friday}`;
                    case "schedule saturday":
                        return `Your Saturday schedule: ${weeklySchedule.saturday}`;
                    case "schedule sunday":
                        return `Your Sunday schedule: ${weeklySchedule.sunday}`;
                    case "best music":
                        return "I don't have a favourite song, but I love all kinds of music! 🎶";
                    case "greetings":
                        return "Hi there! 😊 How can I assist you today?";
                    case "farewell":
                        return "Goodbye! Take care and have a wonderful day! 🌟";
                    case "thank":
                        return "You're welcome! If you need anything else, just ask! 😊";
                    case "introduction":
                        return "I'm Skibidi chatbot 69! Made by GigaChad Ayush Waman. 🤖";
                    case "help":
                        return "Of course! What do you need help with? Feel free to ask me anything.";
                    case "joke":
                        return "Sure! Why don't scientists trust atoms? Because they make up everything! 😄";
                    case "schedule":
                        return "I can help you with your schedule or classes. Just let me know what day you need information for!";
                    case "do I have":
                        return "Could you please specify the day and time you want to know about?";
                    case "time":
                        const currentTime = new Date().toLocaleTimeString();
                        return `The current time is ${currentTime}. 🕒`;
                    case "weather":
                        return "I currently can't fetch live weather updates, but it's always a good day! ☀️";
                    case "favorite food":
                        return "I can't eat, but I hear pizza and sushi are pretty popular! 🍕🍣";
                    case "movies":
                        return "I recommend checking out classics like 'The Shawshank Redemption' or 'Inception'! 🎬";
                    case "hobbies":
                        return "I love learning new things and chatting with you! What about you?";
                    case "inspiration":
                        return "One of my favorite quotes is: 'The best way to predict the future is to create it.'";
                    case "news":
                        return "I'm not up-to-date with the latest news, but you can check trusted news websites for the latest updates.";
                    case "science":
                        return "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly good to eat!";
                }
            }
        }
    }

    return "I’m not sure how to respond to that. Could you please rephrase or provide more details?";
};

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing"
        ? `<p>${message}<br></p>`
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = () => {
    const userMessage = ChatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    setTimeout(() => {
        const responseMessage = generateResponse(userMessage);
        chatbox.appendChild(createChatLi(responseMessage, "incoming"));
    }, 600);
    ChatInput.value = "";
}

sendChatBtn.addEventListener("click", handleChat);

ChatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); 
        handleChat(); 
    }
});


//THIS IS FOR THE POPup

window.onload = function() {
    function showPopup() {
        document.getElementById('popup').style.display = 'block'; // Show the popup
    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none'; // Hide the popup
    }

    // Show the popup after 20 seconds
    setTimeout(showPopup, 20000); 

    // Close button event listener
    document.getElementById('close-btn').onclick = closePopup;

    // jQuery document ready function to handle the check button click
    $('#check-btn').click(function(){
        window.location.href = 'index.html#target-section'; // Redirect to target section
        closePopup(); // Close the popup
    });
};










function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar'); // Use querySelector for a class
    sidebar.classList.toggle('open');
}

document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar'); // Use querySelector for a class
    const navMenu = document.querySelector('.navmenu');
    
    if (!sidebar.contains(event.target) && !navMenu.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});



