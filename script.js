const heritageSites = [
    {
        id: 0,
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        era: "Mughal Era (1632-1653)",
        description: "An ivory-white marble mausoleum on the south bank of the Yamuna river. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal.",
        funFact: "The Taj Mahal appears to change color depending on the time of day and whether there is a moon at night. It's said to be pinkish in the morning, milky white in the evening, and golden at night when lit by the moon.",
        points: 150,
        unlocked: true,
        completed: false,
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        panorama: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Taj_Mahal_360°_View.jpg",
        questions: [
            { question: "Who commissioned the construction of the Taj Mahal?", options: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"], correct: 1, explanation: "Shah Jahan built the Taj Mahal in memory of his beloved wife Mumtaz Mahal." },
            { question: "What river is the Taj Mahal located on?", options: ["Ganges", "Yamuna", "Brahmaputra", "Indus"], correct: 1, explanation: "The Taj Mahal is located on the south bank of the Yamuna river." }
        ]
    },
    {
        id: 1,
        name: "Konark Sun Temple",
        location: "Konark, Odisha",
        era: "13th Century",
        description: "Dedicated to the Hindu sun god Surya, this temple complex is a monumental representation of the sun god's chariot. It has 24 wheels, and is drawn by six horses.",
        funFact: "The 24 wheels of the temple are intricately carved and serve as sundials.",
        points: 120,
        unlocked: false,
        completed: false,
        image: "https://images.unsplash.com/photo-1594736797933-d0d69c3bc2db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        panorama: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Konark_Sun_Temple_360_View.jpg",
        questions: [
            { question: "The Konark Sun Temple is dedicated to which deity?", options: ["Shiva", "Vishnu", "Surya", "Brahma"], correct: 2, explanation: "The temple is dedicated to Surya, the Hindu sun god." },
            { question: "How many wheels are on the chariot temple?", options: ["12", "24", "36", "48"], correct: 1, explanation: "The temple is designed as a chariot with 24 intricately carved wheels." }
        ]
    },
    {
        id: 2,
        name: "Hampi",
        location: "Karnataka",
        era: "14th-16th Century",
        description: "Hampi was the capital of the Vijayanagara Empire. Its ruins are a testament to the architectural brilliance of the empire.",
        funFact: "The Vittala Temple in Hampi has 56 musical pillars that produce sounds of different musical instruments when tapped.",
        points: 130,
        unlocked: false,
        completed: false,
        image: "https://images.unsplash.com/photo-1595591143370-6b2ef86d1fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        panorama: "https://upload.wikimedia.org/wikipedia/commons/2/23/Hampi_360_Panorama.jpg",
        questions: [
            { question: "Hampi was the capital of which empire?", options: ["Maurya", "Gupta", "Chola", "Vijayanagara"], correct: 3, explanation: "Hampi was the capital of the powerful Vijayanagara Empire." },
            { question: "What is a famous feature of the Vittala Temple?", options: ["Golden roof", "Musical pillars", "Underground passages", "Tallest statue"], correct: 1, explanation: "The Vittala Temple is famous for its 56 musical pillars." }
        ]
    },
    {
        id: 3,
        name: "Red Fort",
        location: "Delhi",
        era: "17th Century",
        description: "The Red Fort was the main residence of the Mughal emperors for nearly 200 years. It was built by Shah Jahan.",
        funFact: "The fort's boundary walls are about 2.5 kilometers long and are built of red sandstone.",
        points: 110,
        unlocked: false,
        completed: false,
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        panorama: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Red_Fort_360_Panorama%2C_Delhi.jpg",
        questions: [
            { question: "Who built the Red Fort?", options: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"], correct: 1, explanation: "The Red Fort was built by the Mughal emperor Shah Jahan." },
            { question: "What material is the Red Fort primarily made of?", options: ["Marble", "Granite", "Red sandstone", "Limestone"], correct: 2, explanation: "The fort is known for its massive enclosing walls of red sandstone." }
        ]
    },
    {
        id: 4,
        name: "Qutub Minar",
        location: "Delhi",
        era: "12th Century",
        description: "The Qutub Minar is a towering 73-meter-high tower of victory, built in 1193 by Qutab-ud-din Aibak.",
        funFact: "The Iron Pillar in the Qutub Minar complex has not rusted for over 1600 years.",
        points: 100,
        unlocked: false,
        completed: false,
        image: "https://images.unsplash.com/photo-1587478223700-51d43fcb8cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        panorama: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Qutub_Minar_360_degree_view.jpg",
        questions: [
            { question: "Who started the construction of the Qutub Minar?", options: ["Iltutmish", "Alauddin Khilji", "Qutab-ud-din Aibak", "Firoz Shah Tughlaq"], correct: 2, explanation: "Qutab-ud-din Aibak started the construction of the Qutub Minar." },
            { question: "What is a notable feature of the Qutub Minar complex?", options: ["A large moat", "A non-rusting iron pillar", "A sound and light show", "A secret tunnel"], correct: 1, explanation: "The complex is home to a famous iron pillar that has resisted rust for centuries." }
        ]
    },
    {
        id: 5,
        name: "Khajuraho Temples",
        location: "Madhya Pradesh",
        era: "10th-12th Century",
        description: "The Khajuraho Group of Monuments are a group of Hindu and Jain temples, well known for their Nagara-style architectural symbolism and their erotic sculptures.",
        funFact: "Only about 10% of the carvings on the Khajuraho temples are erotic. The rest depict everyday life and mythological scenes.",
        points: 140,
        unlocked: false,
        completed: false,
        image: "https://images.unsplash.com/photo-1604328698662-12db8e9bf98e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        panorama: null,
        questions: [
            { question: "In which Indian state are the Khajuraho temples located?", options: ["Rajasthan", "Uttar Pradesh", "Madhya Pradesh", "Maharashtra"], correct: 2, explanation: "The Khajuraho temples are located in the state of Madhya Pradesh." },
            { question: "What architectural style are the Khajuraho temples known for?", options: ["Dravidian", "Nagara", "Vesara", "Kalinga"], correct: 1, explanation: "The temples are famous examples of Nagara-style architecture." }
        ]
    },
    {
        id: 6,
        name: "Ajanta Caves",
        location: "Maharashtra",
        era: "2nd Century BCE - 6th Century CE",
        description: "The Ajanta Caves are 30 rock-cut Buddhist cave monuments. The caves include paintings and rock-cut sculptures described as among the finest surviving examples of ancient Indian art.",
        funFact: "The caves were hidden by jungle for nearly 1,500 years and were rediscovered by a British officer in 1819.",
        points: 160,
        unlocked: false,
        completed: false,
        image: "https://images.unsplash.com/photo-1587138528339-268dae36b231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        panorama: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Ajanta_Caves_360_Panorama.jpg",
        questions: [
            { question: "The Ajanta Caves are primarily associated with which religion?", options: ["Hinduism", "Jainism", "Buddhism", "Sikhism"], correct: 2, explanation: "The Ajanta Caves are a series of Buddhist cave monuments." },
            { question: "How were the Ajanta Caves rediscovered?", options: ["By a local farmer", "During a railway construction", "By a British hunting party", "Through an ancient map"], correct: 2, explanation: "The caves were accidentally rediscovered by a British officer on a tiger hunt in 1819." }
        ]
    },
    {
        id: 7,
        name: "Ellora Caves",
        location: "Maharashtra",
        era: "6th-10th Century",
        description: "Ellora is one of the largest rock-cut monastery-temple cave complexes in the world, featuring Hindu, Buddhist and Jain monuments.",
        funFact: "The Kailasa Temple (Cave 16) is the largest single monolithic rock excavation in the world.",
        points: 170,
        unlocked: false,
        completed: false,
        image: "https://images.unsplash.com/photo-1597130951559-eb4226e5c2d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        panorama: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ellora_Caves_360_View%2C_Kailash_Temple.jpg",
        questions: [
            { question: "Which three religions are represented at the Ellora Caves?", options: ["Hinduism, Buddhism, Sikhism", "Hinduism, Buddhism, Jainism", "Buddhism, Jainism, Islam", "Hinduism, Jainism, Christianity"], correct: 1, explanation: "The Ellora Caves feature monuments from Hinduism, Buddhism, and Jainism." },
            { question: "What is the most famous structure in the Ellora Caves?", options: ["The Great Stupa", "The Sun Temple", "The Kailasa Temple", "The Golden Temple"], correct: 2, explanation: "The Kailasa Temple (Cave 16) is the centerpiece of Ellora." }
        ]
    },
    {
        id: 8,
        name: "Golden Temple",
        location: "Amritsar, Punjab",
        era: "16th Century",
        description: "The Golden Temple, or Sri Harmandir Sahib, is the holiest Gurdwara and the most important pilgrimage site of Sikhism.",
        funFact: "The temple's dome is gilded with 750 kg of pure gold.",
        points: 140,
        unlocked: false,
        completed: false,
        image: "https://images.unsplash.com/photo-1587977990420-5391e6ac2897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        panorama: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Golden_Temple_360_View%2C_Amritsar.jpg",
        questions: [
            { question: "The Golden Temple is the holiest shrine of which religion?", options: ["Hinduism", "Sikhism", "Jainism", "Buddhism"], correct: 1, explanation: "The Golden Temple is the pre-eminent spiritual site of Sikhism." },
            { question: "In which city is the Golden Temple located?", options: ["Ludhiana", "Chandigarh", "Amritsar", "Patiala"], correct: 2, explanation: "The Golden Temple is located in the city of Amritsar, Punjab." }
        ]
    },
    {
        id: 9,
        name: "Gateway of India",
        location: "Mumbai, Maharashtra",
        era: "20th Century",
        description: "The Gateway of India is an arch-monument built in the early 20th century to commemorate the visit of King George V and Queen Mary to Mumbai.",
        funFact: "The last British troops to leave India passed through the Gateway of India in 1948.",
        points: 120,
        unlocked: false,
        completed: false,
        image: "https://images.unsplash.com/photo-1595163122171-874b34b71185?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        panorama: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Gateway_of_India_360_degree_view.jpg",
        questions: [
            { question: "The Gateway of India was built to commemorate the visit of which British monarch?", options: ["Queen Victoria", "King Edward VII", "King George V", "Queen Elizabeth II"], correct: 2, explanation: "The Gateway of India was built to commemorate the visit of King George V and Queen Mary." },
            { question: "In which city is the Gateway of India located?", options: ["Delhi", "Kolkata", "Chennai", "Mumbai"], correct: 3, explanation: "The Gateway of India is located in Mumbai." }
        ]
    }
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
    if (screenId === 'map') updateMap();
}

// --- Map Screen ---
function updateMap() {
    const numberGrid = document.getElementById('numberGrid');
    numberGrid.innerHTML = '';
    let completedCount = 0;
    heritageSites.forEach(site => {
        const card = document.createElement('div');
        card.className = `number-card ${site.completed ? 'completed' : (site.unlocked ? 'unlocked' : 'locked')}`;
        card.innerHTML = `${site.id + 1}<div class="site-name">${site.name}</div>`;
        if (site.unlocked) card.onclick = () => exploreSite(site.id);
        numberGrid.appendChild(card);
        if (site.completed) completedCount++;
    });
    const progress = (completedCount / heritageSites.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').innerText = `Progress: ${completedCount}/${heritageSites.length} sites`;
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
        if (player.currentSite + 1 < heritageSites.length) {
            heritageSites[player.currentSite + 1].unlocked = true;
        }
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
async function streamNGenPro(prompt) {
    const site = heritageSites[player.currentSite];
    const context = `The user is currently viewing the ${site.name}.`;
    const fullPrompt = `${context} The user asks: ${prompt}`;

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
    let assistantMessage = document.createElement('div');
    assistantMessage.className = 'assistant';
    document.getElementById('chatMessages').appendChild(assistantMessage);

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
                        fullText += data.token;
                        assistantMessage.innerText = fullText;
                    }
                } catch (e) {
                    // Skip invalid JSON
                }
            }
        }
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

    input.value = '';
    streamNGenPro(message);
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    showScreen('mainMenu');

    document.getElementById('startBtn').onclick = () => showScreen('map');
    document.getElementById('aboutBtn').onclick = () => showScreen('about');
    document.getElementById('profileBtn').onclick = () => { updateProfile(); showScreen('profile'); };
    document.querySelectorAll('.back-to-menu').forEach(btn => btn.onclick = () => showScreen('mainMenu'));
    document.getElementById('backToMap').onclick = () => showScreen('map');
    document.getElementById('takeQuizBtn').onclick = startQuiz;
    document.getElementById('toggleViewBtn').onclick = toggleMediaView;
    document.getElementById('retryQuizBtn').onclick = displayQuestion;
    document.getElementById('backToSite').onclick = () => exploreSite(player.currentSite);
    document.getElementById('continueExploring').onclick = () => showScreen('map');
    document.getElementById('chatSendBtn').onclick = sendChatMessage;
    document.getElementById('chatInput').onkeydown = (e) => { if (e.key === 'Enter') sendChatMessage(); };
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.onclick = () => {
            document.getElementById('chatInput').value = btn.innerText;
            sendChatMessage();
        };
    });
});
