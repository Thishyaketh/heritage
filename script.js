const heritageSites = [
    // Existing Sites
    { id: 0, name: "Taj Mahal", location: "Agra, Uttar Pradesh", era: "Mughal Era (1632-1653)", description: "An ivory-white marble mausoleum, symbol of eternal love.", funFact: "It appears to change color depending on the time of day.", points: 150, unlocked: true, completed: false, image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", panorama: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Taj_Mahal_360°_View.jpg", questions: [ { question: "Who commissioned the Taj Mahal?", options: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"], correct: 1, explanation: "Shah Jahan built it in memory of his wife Mumtaz Mahal." }, { question: "What river is it on?", options: ["Ganges", "Yamuna", "Brahmaputra", "Indus"], correct: 1, explanation: "It's on the south bank of the Yamuna river." } ] },
    { id: 1, name: "Konark Sun Temple", location: "Konark, Odisha", era: "13th Century", description: "A monumental representation of the sun god Surya's chariot.", funFact: "The 24 wheels of the temple are intricately carved and serve as sundials.", points: 120, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Konarka_Temple.jpg", panorama: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Konark_Sun_Temple_360_View.jpg", questions: [ { question: "The temple is dedicated to which deity?", options: ["Shiva", "Vishnu", "Surya", "Brahma"], correct: 2, explanation: "It is dedicated to Surya, the sun god." }, { question: "It's also known by what colorful name?", options: ["White Pagoda", "Golden Pagoda", "Red Pagoda", "Black Pagoda"], correct: 3, explanation: "Due to its color, sailors called it 'The Black Pagoda'." } ] },
    // New Sites
    { id: 2, name: "Ajanta Caves", location: "Maharashtra", era: "2nd Century BCE - 6th Century CE", description: "30 rock-cut Buddhist cave monuments with ancient Indian art.", funFact: "The caves were hidden by jungle for nearly 1,500 years.", points: 160, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Ajanta_(63).jpg", panorama: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Ajanta_Caves_360_Panorama.jpg", questions: [ { question: "The caves are primarily associated with which religion?", options: ["Hinduism", "Jainism", "Buddhism", "Sikhism"], correct: 2, explanation: "They are a series of Buddhist cave monuments." }, { question: "The paintings depict stories from what texts?", options: ["Vedas", "Mahabharata", "Jataka tales", "Ramayana"], correct: 2, explanation: "The paintings illustrate the Jataka tales about the previous births of the Buddha." }, { question: "When were the caves rediscovered?", options: ["1619", "1719", "1819", "1919"], correct: 2, explanation: "They were rediscovered by a British officer in 1819." } ] },
    { id: 3, name: "Khajuraho Temples", location: "Madhya Pradesh", era: "10th-12th Century", description: "Hindu and Jain temples known for Nagara-style architecture and erotic sculptures.", funFact: "Only about 10% of the carvings are erotic.", points: 140, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Khajuraho_Temples.jpeg", panorama: null, questions: [ { question: "The temples were built by which dynasty?", options: ["Maurya", "Gupta", "Chandela", "Chola"], correct: 2, explanation: "They were built by the rulers of the Chandela dynasty." }, { question: "What architectural style are they known for?", options: ["Dravidian", "Nagara", "Vesara", "Kalinga"], correct: 1, explanation: "The temples are famous examples of Nagara-style architecture." } ] },
    { id: 4, name: "Red Fort", location: "Delhi", era: "17th Century", description: "The main residence of the Mughal emperors for nearly 200 years.", funFact: "The fort's boundary walls are about 2.5 kilometers long.", points: 110, unlocked: true, completed: false, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/1200px-Delhi_fort.jpg", panorama: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Red_Fort_360_Panorama%2C_Delhi.jpg", questions: [ { question: "Who built the Red Fort?", options: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"], correct: 1, explanation: "It was built by Mughal emperor Shah Jahan." }, { question: "What is its original name?", options: ["Lal Kot", "Qila-i-Mubarak", "Shahjahanabad", "Agra Fort"], correct: 1, explanation: "Its original name was 'Qila-i-Mubarak' (the Blessed Fort)." } ] },
    { id: 5, name: "Kerala Backwaters", location: "Kerala", era: "Ancient", description: "A network of lagoons, lakes, canals, and estuaries.", funFact: "The houseboats are called Kettuvallams.", points: 125, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Kerala%20Backwaters.jpg", panorama: null, questions: [ { question: "What are the traditional houseboats called?", options: ["Shikaras", "Kettuvallams", "Vallams", "Catamarans"], correct: 1, explanation: "They are called Kettuvallams, which means 'boat with knots'." }, { question: "The backwaters are parallel to which sea?", options: ["Bay of Bengal", "Arabian Sea", "Indian Ocean", "Laccadive Sea"], correct: 1, explanation: "They form a network parallel to the Arabian Sea coast." } ] },
    { id: 6, name: "Gateway of India", location: "Mumbai", era: "20th Century", description: "An arch-monument built to commemorate the visit of King George V.", funFact: "The last British troops to leave India passed through it in 1948.", points: 120, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Gateway-to-India_0.jpg", panorama: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Gateway_of_India_360_degree_view.jpg", questions: [ { question: "It was built to commemorate the visit of which British monarch?", options: ["Queen Victoria", "King Edward VII", "King George V", "Queen Elizabeth II"], correct: 2, explanation: "It was for King George V and Queen Mary." }, { question: "What is its architectural style?", options: ["Victorian Gothic", "Art Deco", "Indo-Saracenic", "Neoclassical"], correct: 2, explanation: "It's built in the Indo-Saracenic style." } ] },
    { id: 7, name: "Dilwara Temples", location: "Rajasthan", era: "11th-13th Century", description: "Stunning Jain temples with intricate marble carvings.", funFact: "It is said that the artisans were paid according to the amount of dust they collected.", points: 155, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Dilwara-Temples.jpg", panorama: null, questions: [ { question: "These temples are dedicated to which religion?", options: ["Hinduism", "Buddhism", "Sikhism", "Jainism"], correct: 3, explanation: "They are a pilgrimage site for Jains." }, { question: "What material are they famous for?", options: ["Sandstone", "Granite", "Marble", "Limestone"], correct: 2, explanation: "They are renowned for their intricate marble carvings." } ] },
    { id: 8, name: "Ellora Caves", location: "Maharashtra", era: "6th-10th Century", description: "One of the largest rock-cut monastery-temple cave complexes.", funFact: "The Kailasa Temple is the largest single monolithic rock excavation.", points: 170, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Ellora%20Caves.jpeg", panorama: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ellora_Caves_360_View%2C_Kailash_Temple.jpg", questions: [ { question: "Which three religions are represented here?", options: ["Hinduism, Buddhism, Sikhism", "Hinduism, Buddhism, Jainism", "Buddhism, Jainism, Islam", "Hinduism, Jainism, Christianity"], correct: 1, explanation: "It features monuments from Hinduism, Buddhism, and Jainism." }, { question: "What is the most famous structure here?", options: ["The Great Stupa", "The Sun Temple", "The Kailasa Temple", "The Golden Temple"], correct: 2, explanation: "The Kailasa Temple (Cave 16) is the centerpiece of Ellora." } ] },
    { id: 9, name: "Meenakshi Temple", location: "Tamil Nadu", era: "12th-13th Century", description: "A vibrant temple complex dedicated to Goddess Meenakshi.", funFact: "The temple has an estimated 33,000 sculptures.", points: 145, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Meenakshi%20Temple.jpg", panorama: null, questions: [ { question: "In which city is this temple located?", options: ["Chennai", "Coimbatore", "Madurai", "Thanjavur"], correct: 2, explanation: "It is located in the temple city of Madurai." }, { question: "How many gopurams (gateway towers) does it have?", options: ["4", "8", "12", "14"], correct: 3, explanation: "The temple complex is famous for its 14 tall gopurams." } ] },
    { id: 10, name: "Hampi", location: "Karnataka", era: "14th-16th Century", description: "The capital of the Vijayanagara Empire.", funFact: "The Vittala Temple has 56 musical pillars.", points: 130, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Hampi.jpg", panorama: "https://upload.wikimedia.org/wikipedia/commons/2/23/Hampi_360_Panorama.jpg", questions: [ { question: "Hampi was the capital of which empire?", options: ["Maurya", "Gupta", "Chola", "Vijayanagara"], correct: 3, explanation: "It was the capital of the powerful Vijayanagara Empire." }, { question: "What is a famous feature of the Vittala Temple?", options: ["Golden roof", "Musical pillars", "Underground passages", "Tallest statue"], correct: 1, explanation: "It is famous for its 56 musical pillars." } ] },
    { id: 11, name: "Amber Fort", location: "Rajasthan", era: "16th Century", description: "A majestic fort with beautiful gardens and architecture.", funFact: "The Sheesh Mahal (Mirror Palace) is covered in intricate mirror mosaics.", points: 135, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Amber%20Fort.jpg", panorama: null, questions: [ { question: "In which city is this fort located?", options: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"], correct: 0, explanation: "It is located in Amer, near Jaipur." }, { question: "What is the name of the famous mirror palace inside?", options: ["Hawa Mahal", "Jal Mahal", "Sheesh Mahal", "Rang Mahal"], correct: 2, explanation: "The Sheesh Mahal is famous for its intricate mirror work." } ] },
    { id: 12, name: "Brihadeeswara Temple", location: "Tamil Nadu", era: "11th Century", description: "A UNESCO site in Thanjavur, built by Raja Raja Chola I.", funFact: "The main vimana (tower) is made from a single 80-ton granite block.", points: 165, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Brihadeeswara%20Temple.jpeg", panorama: null, questions: [ { question: "Which king built this temple?", options: ["Rajendra Chola I", "Raja Raja Chola I", "Karikala Chola", "Vijayalaya Chola"], correct: 1, explanation: "It was built by the great Chola king Raja Raja Chola I." }, { question: "The temple is dedicated to which deity?", options: ["Vishnu", "Brahma", "Shiva", "Ganesha"], correct: 2, explanation: "It is a Hindu temple dedicated to Lord Shiva." } ] },
    { id: 13, name: "Great Living Chola Temples", location: "Tamil Nadu", era: "11th-12th Century", description: "A group of temples built during the Chola dynasty.", funFact: "They are a UNESCO World Heritage Site.", points: 150, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Great%20Living%20Chola%20Temples.jpg", panorama: null, questions: [ { question: "Which temple is NOT part of this group?", options: ["Brihadeeswara Temple", "Airavatesvara Temple", "Meenakshi Temple", "Gangaikonda Cholapuram"], correct: 2, explanation: "The Meenakshi Temple is not a Chola temple." }, { question: "These temples are located in which state?", options: ["Karnataka", "Kerala", "Andhra Pradesh", "Tamil Nadu"], correct: 3, explanation: "They are all located in the state of Tamil Nadu." } ] },
    { id: 14, name: "Raigad Fort", location: "Maharashtra", era: "17th Century", description: "The capital of the Maratha Empire under Shivaji.", funFact: "It has a famous cliff called Takmak Tok, a former execution point.", points: 130, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/RAIGAD_FORT.png", panorama: null, questions: [ { question: "This fort was the capital of which empire?", options: ["Mughal", "Vijayanagara", "Maratha", "Maurya"], correct: 2, explanation: "It was the capital of the Maratha Empire under Chhatrapati Shivaji." }, { question: "How does one reach the fort today?", options: ["By car", "By train", "By ropeway", "By boat"], correct: 2, explanation: "A ropeway exists to help visitors reach the hilltop fort." } ] },
    { id: 15, name: "Chittorgarh Fort", location: "Rajasthan", era: "7th Century", description: "A historic fort associated with the Mewar kingdom.", funFact: "It is famous for the Jauhar (mass self-immolation) of its women.", points: 140, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Chittorgarh-Fort.jpg", panorama: null, questions: [ { question: "The fort is famous for the story of which queen?", options: ["Rani Lakshmibai", "Rani Padmini", "Rani Durgavati", "Rani Chennamma"], correct: 1, explanation: "The legend of Rani Padmini and her Jauhar is associated with this fort." }, { question: "The Vijay Stambha (Victory Tower) was built to commemorate victory over whom?", options: ["Mughals", "Sultan of Gujarat", "Sultan of Malwa", "Tughlaqs"], correct: 2, explanation: "Rana Kumbha built it to commemorate his victory over the Sultan of Malwa." } ] },
    { id: 16, name: "Sanchi Stupa", location: "Madhya Pradesh", era: "3rd Century BCE", description: "An ancient Buddhist monument and UNESCO site.", funFact: "It was commissioned by the emperor Ashoka.", points: 150, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Sanchi%20Stupa.jpg", panorama: null, questions: [ { question: "Which emperor commissioned this stupa?", options: ["Chandragupta Maurya", "Ashoka", "Samudragupta", "Harsha"], correct: 1, explanation: "It was originally commissioned by the Mauryan emperor Ashoka." }, { question: "What do the four gateways (toranas) depict?", options: ["Scenes from Ashoka's life", "Scenes from the Buddha's life", "Hindu mythological stories", "Jain teachings"], correct: 1, explanation: "The ornate gateways depict scenes from the life of the Buddha." } ] },
    { id: 17, name: "Kailasa Temple", location: "Ellora Caves", era: "8th Century", description: "The world's largest monolithic rock-cut temple.", funFact: "It was carved from a single rock, top-down.", points: 175, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Kailasa%20Temple.jpg", panorama: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ellora_Caves_360_View%2C_Kailash_Temple.jpg", questions: [ { question: "This temple is part of which larger complex?", options: ["Ajanta Caves", "Elephanta Caves", "Ellora Caves", "Badami Caves"], correct: 2, explanation: "It is Cave 16 of the Ellora Caves." }, { question: "It is dedicated to which Hindu deity?", options: ["Vishnu", "Brahma", "Ganesha", "Shiva"], correct: 3, explanation: "It is a remarkable monument dedicated to Lord Shiva." } ] },
    { id: 18, name: "Mysore Palace", location: "Karnataka", era: "1912", description: "A grand palace complex in the heart of Mysore.", funFact: "It is illuminated with over 97,000 bulbs on Sundays and public holidays.", points: 130, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Mysore%20Palace.jpg", panorama: null, questions: [ { question: "The palace was the official residence of which dynasty?", options: ["Hoysalas", "Chalukyas", "Wodeyars", "Vijayanagara"], correct: 2, explanation: "It was the residence of the Wodeyar dynasty." }, { question: "What architectural style is the palace?", options: ["Indo-Saracenic", "Dravidian", "Mughal", "Gothic"], correct: 0, explanation: "It is a fine example of the Indo-Saracenic style of architecture." } ] },
    { id: 19, name: "Mohenjo-Daro", location: "Punjab", era: "c. 2500 BCE", description: "One of the world's earliest major cities, a UNESCO site.", funFact: "The city had a sophisticated water management system.", points: 180, unlocked: true, completed: false, image: "https://raw.githubusercontent.com/Thishyaketh/heritage-images/main/Mohenjo-Daro.jpeg", panorama: null, questions: [ { question: "This city was part of which ancient civilization?", options: ["Mesopotamian", "Egyptian", "Indus Valley", "Chinese"], correct: 2, explanation: "It was a major city of the Indus Valley Civilization." }, { question: "What is the most famous structure at Mohenjo-Daro?", options: ["The Great Pyramid", "The Great Bath", "The Ziggurat", "The Citadel"], correct: 1, explanation: "The Great Bath is one of the best-known structures of the ancient city." } ] }
];

let player = { name: "Heritage Explorer", points: 0, badges: [], currentSite: null, currentQuestionIndex: 0 };
let chatHistory = {};

// --- Game State Persistence ---
function saveGame() {
    localStorage.setItem('heritageARPlayer', JSON.stringify(player));
    const sitesProgress = heritageSites.map(site => ({ id: site.id, completed: site.completed, unlocked: site.unlocked }));
    localStorage.setItem('heritageARSites', JSON.stringify(sitesProgress));
}

function loadGame() {
    const savedPlayer = localStorage.getItem('heritageARPlayer');
    if (savedPlayer) player = JSON.parse(savedPlayer);

    const savedSites = localStorage.getItem('heritageARSites');
    if (savedSites) {
        const sitesProgress = JSON.parse(savedSites);
        sitesProgress.forEach(progress => {
            const site = heritageSites.find(s => s.id === progress.id);
            if (site) {
                site.completed = progress.completed;
                site.unlocked = progress.unlocked;
            }
        });
    }
}

// --- Navigation ---
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    if (screenId === 'map') updateMap(); // Always show all sites when navigating to map
}

// --- Map Screen ---
function updateMap(filter = '') {
    const numberGrid = document.getElementById('numberGrid');
    numberGrid.innerHTML = '';
    let completedCount = 0;
    const filteredSites = heritageSites.filter(site => site.name.toLowerCase().includes(filter.toLowerCase()));

    filteredSites.forEach(site => {
        const card = document.createElement('div');
        card.className = `number-card ${site.completed ? 'completed' : (site.unlocked ? 'unlocked' : 'locked')}`;
        card.innerHTML = `
            <img src="${site.image}" alt="${site.name}" class="site-card-image">
            <div class="site-card-content">
                <span class="site-card-number">${site.id + 1}</span>
                <div class="site-name">${site.name}</div>
            </div>
        `;
        if (site.unlocked) card.onclick = () => exploreSite(site.id);
        numberGrid.appendChild(card);
    });

    // Update progress based on all sites, not just filtered ones
    completedCount = heritageSites.filter(s => s.completed).length;
    const progress = (completedCount / heritageSites.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').innerText = `Progress: ${completedCount}/${heritageSites.length} sites`;
}


function exploreRandomSite() {
    const unlockedSites = heritageSites.filter(site => site.unlocked && !site.completed);
    if (unlockedSites.length > 0) {
        const randomSite = unlockedSites[Math.floor(Math.random() * unlockedSites.length)];
        exploreSite(randomSite.id);
    } else {
        // Optional: handle case where no sites are available to explore randomly
        alert("You've completed all unlocked sites! Unlock more to explore randomly.");
    }
}

// --- Site Exploration ---
function exploreSite(siteId) {
    player.currentSite = siteId;
    const site = heritageSites[siteId];
    document.getElementById('siteName').innerText = site.name;
    document.getElementById('siteLocation').innerText = site.location;
    document.getElementById('siteDescription').innerText = site.description;

    const mediaContainer = document.getElementById('mediaContainer');
    mediaContainer.innerHTML = `<img id="siteDetailImage" src="${site.image}" alt="${site.name}" class="site-detail-image">`;
    const toggleBtn = document.getElementById('toggleViewBtn');
    toggleBtn.innerText = '3D View';
    toggleBtn.disabled = !site.panorama;

    document.getElementById('chatMessages').innerHTML = '';

    showScreen('siteExploration');
}

function toggleMediaView() {
    const site = heritageSites[player.currentSite];
    const mediaContainer = document.getElementById('mediaContainer');
    const toggleBtn = document.getElementById('toggleViewBtn');

    if (mediaContainer.querySelector('a-scene')) {
        mediaContainer.innerHTML = `<img id="siteDetailImage" src="${site.image}" alt="${site.name}" class="site-detail-image">`;
        toggleBtn.innerText = '3D View';
    } else if (site.panorama) {
        mediaContainer.innerHTML = `<a-scene embedded style="height: 400px; width: 100%;"><a-sky src="${site.panorama}" rotation="0 -130 0"></a-sky></a-scene>`;
        toggleBtn.innerText = '2D View';
    }
}

// --- Quiz Logic ---
function startQuiz() {
    player.currentQuestionIndex = 0;
    displayQuestion();
    showScreen('quiz');
}

function displayQuestion() {
    const site = heritageSites[player.currentSite];
    const question = site.questions[player.currentQuestionIndex];
    document.getElementById('quizQuestion').innerText = question.question;
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const site = heritageSites[player.currentSite];
    const question = site.questions[player.currentQuestionIndex];
    if (selectedIndex === question.correct) {
        if (player.currentQuestionIndex < site.questions.length - 1) {
            player.currentQuestionIndex++;
            displayQuestion();
        } else {
            completeSite();
        }
    } else {
        document.getElementById('correctAnswer').innerText = `Correct Answer: ${question.options[question.correct]}`;
        document.getElementById('explanation').innerText = question.explanation;
        showScreen('quizWrong');
    }
}

function completeSite() {
    const site = heritageSites[player.currentSite];
    if (!site.completed) {
        site.completed = true;
        player.points += site.points;
        addBadge();
        saveGame();
    }
    document.getElementById('pointsEarned').innerText = `+${site.points} Points!`;
    document.getElementById('totalPoints').innerText = `Total: ${player.points} points`;
    showScreen('quizResult');
}

function addBadge() {
    const completedCount = heritageSites.filter(s => s.completed).length;
    let newBadge = null;
    if (completedCount === 1) newBadge = "First Explorer";
    else if (completedCount >= 4 && !player.badges.includes("Heritage Enthusiast")) newBadge = "Heritage Enthusiast";
    else if (completedCount === heritageSites.length && !player.badges.includes("Culture Champion")) newBadge = "Culture Champion";

    if (newBadge && !player.badges.includes(newBadge)) {
        player.badges.push(newBadge);
    }
}

// --- Profile Screen ---
function updateProfile() {
    document.getElementById('playerPoints').innerText = player.points;
    const completedCount = heritageSites.filter(s => s.completed).length;
    document.getElementById('sitesCompleted').innerText = `${completedCount}/${heritageSites.length} sites`;
    const badgesContainer = document.getElementById('badgesContainer');
    badgesContainer.innerHTML = player.badges.length > 0
        ? player.badges.map(badge => `<div class="badge">${badge}</div>`).join('')
        : '<p>No badges yet. Keep exploring!</p>';
}

// --- Chatbot ---
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    messagesContainer.appendChild(indicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

async function streamNGenPro(prompt) {
    const site = heritageSites[player.currentSite];
    const context = `The user is currently viewing the ${site.name}.`;
    const fullPrompt = `${context} The user asks: ${prompt}`;

    showTypingIndicator();

    try {
        const response = await fetch('https://api.tnsaai.com/infer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'NGen3.9-Pro',
                prompt: fullPrompt,
                chat_id: `chat_${player.currentSite}`,
                stream: true
            })
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = '';
        let assistantMessage = null;
        let isFirstToken = true;

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    try {
                        const data = JSON.parse(line.slice(6));
                        if (data.token) {
                            if (isFirstToken) {
                                removeTypingIndicator();
                                assistantMessage = document.createElement('div');
                                assistantMessage.className = 'assistant';
                                document.getElementById('chatMessages').appendChild(assistantMessage);
                                isFirstToken = false;
                            }
                            fullText += data.token;
                            assistantMessage.innerHTML = DOMPurify.sanitize(marked.parse(fullText));
                            const messagesContainer = document.getElementById('chatMessages');
                            messagesContainer.scrollTop = messagesContainer.scrollHeight;
                        }
                    } catch (e) {
                        // Skip invalid JSON
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error during streaming:', error);
        removeTypingIndicator();
        const messagesContainer = document.getElementById('chatMessages');
        const errorMessage = document.createElement('div');
        errorMessage.className = 'assistant';
        errorMessage.style.color = 'red';
        errorMessage.innerText = "Sorry, I couldn't connect to the guide. Please try again later.";
        messagesContainer.appendChild(errorMessage);
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    const messagesContainer = document.getElementById('chatMessages');
    const userMessage = document.createElement('div');
    userMessage.className = 'user';
    userMessage.innerText = message;
    messagesContainer.appendChild(userMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    input.value = '';
    streamNGenPro(message);
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    showScreen('mainMenu');

    // Main Navigation
    document.getElementById('startBtn').onclick = () => showScreen('map');
    document.getElementById('aboutBtn').onclick = () => showScreen('about');
    document.getElementById('profileBtn').onclick = () => { updateProfile(); showScreen('profile'); };
    document.querySelectorAll('.back-to-menu').forEach(btn => btn.onclick = () => showScreen('mainMenu'));

    // Map Screen Controls
    document.getElementById('backToMap').onclick = () => showScreen('map');
    document.getElementById('searchInput').addEventListener('input', (e) => updateMap(e.target.value));
    document.getElementById('randomSiteBtn').onclick = exploreRandomSite;

    // Site Exploration & Quiz
    document.getElementById('takeQuizBtn').onclick = startQuiz;
    document.getElementById('toggleViewBtn').onclick = toggleMediaView;
    document.getElementById('retryQuizBtn').onclick = displayQuestion;
    document.getElementById('backToSite').onclick = () => exploreSite(player.currentSite);
    document.getElementById('continueExploring').onclick = () => showScreen('map');

    // Chat
    document.getElementById('chatSendBtn').onclick = sendChatMessage;
    document.getElementById('chatInput').onkeydown = (e) => { if (e.key === 'Enter') sendChatMessage(); };
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.onclick = () => {
            document.getElementById('chatInput').value = btn.innerText;
            sendChatMessage();
        };
    });
});
