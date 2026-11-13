
/* =========================================
   LPU SMART ASSISTANT - VERSION 2
   Frontend-only knowledge assistant
========================================= */

const knowledgeBase = [
    {
        category: "University",
        keywords: ["what is lpu", "about lpu", "university", "introduction", "lovely professional university", "history"],
        answer: "Lovely Professional University (LPU) is a private university located in Phagwara, Punjab, India. It offers academic programmes across multiple disciplines.",
        source: "https://www.lpu.in/"
    },
    {
        category: "Location",
        keywords: ["location", "address", "where is lpu", "campus location", "reach lpu", "phagwara"],
        answer: "Lovely Professional University is located in Phagwara, Punjab, India, on the Jalandhar-Delhi G.T. Road. Please consult the official university website for current travel and contact information.",
        source: "https://www.google.com/maps/place/Lovely+Professional+University/@31.2606374,75.5625682,12z/data=!4m10!1m2!2m1!1slpu+location!3m6!1s0x391a5f5e9c489cf3:0x4049a5409d53c300!8m2!3d31.2606374!4d75.7067638!15sCgxscHUgbG9jYXRpb24iA4gBAVoFIgNscHWSARJwcml2YXRlX3VuaXZlcnNpdHngAQA!16s%2Fm%2F02wbfhd?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        category: "Admissions",
        keywords: ["admission", "apply", "application", "joining lpu", "eligibility", "admission process", "how to join", "application form"],
        answer: "The admission process generally involves selecting a programme, checking its eligibility criteria, submitting an application and completing the required admission formalities. Exact requirements depend on the programme and admission year. Check the official admission portal for current details.",
        source: "https://lpuonline.degree-admission.co.in/?gad_source=1&gad_campaignid=24097905046&gbraid=0AAAABEZyDtxe2OGeVOFzpDt_wwomqWoXK&gclid=Cj0KCQiAh9vXBhDKARIsAMooYhdteJFiN_2yO_A4z0UpmjkYt-RjZ1elAMoSUye2fhCD6yjcAtdguE4aAvcyEALw_wcB"
    },
    {
        category: "LPUNEST",
        keywords: ["lpunest", "entrance test", "national entrance test", "entrance examination", "lpu test"],
        answer: "LPUNEST stands for Lovely Professional University National Entrance and Scholarship Test. It is used as an admission and scholarship criterion for various programmes. Applicability, schedule and eligibility can vary. Verify the latest details through LPU's official website.",
        source: "https://www.lpu.in/landing-pages/brand/?utm_source=google&utm_medium=cpc&utm_campaign=1671145846&utm_adgroupid=175830719036&utm_campaignid=1671145846&utm_keyword=lpu%20lpunest&utm_device=c&utm_placement=&utm_network=g&utm_creativeid=829956349136&utm_matchtype=e&utm_field_session=Session_2027&gad_source=1&gad_campaignid=1671145846&gbraid=0AAAAADp1LSOD7sUFP3BA4RP2XYKZ3XMJg&gclid=Cj0KCQiAh9vXBhDKARIsAMooYheORYq6fhT-0-rz-PJXODyuyDCqY0WrpIPHQVHUW72ew6qDKcJuIlsaAqPeEALw_wcB"
    },
    {
        category: "Academics",
        keywords: ["courses", "programmes", "programs", "departments", "subjects", "engineering", "btech", "b tech", "computer science", "bca", "degree"],
        answer: "LPU offers programmes in areas such as Engineering, Computer Applications, Management, Commerce, Agriculture, Law, Design, Sciences, Pharmacy, Education and Humanities. Programme availability and curriculum should be checked on the official website.",
        source: "https://www.lpu.in/academics/calendar-regular-programmes.php"
    },
    {
        category: "Scholarships",
        keywords: ["scholarship", "financial aid", "fee concession", "scholarship eligibility", "scholarship test", "scholarship criteria"],
        answer: "LPU offers scholarship opportunities under different criteria, which may include academic performance, entrance tests, sports and other achievements. Eligibility, amounts and conditions vary. Check the current scholarship policy before making decisions.",
        source: "https://www.lpu.in/"
    },
    {
        category: "Fees",
        keywords: ["fee", "fees", "tuition fee", "payment", "semester fee", "course cost", "college fees"],
        answer: "Programme fees depend on the selected course, academic year and applicable scholarship. Other charges may also apply. I do not have a verified live fee database. Check the official LPU website for the current fee structure.",
        source: "https://www.lpu.in/"
    },
    {
        category: "Hostel",
        keywords: ["hostel", "accommodation", "residence", "hostel facilities", "room", "mess", "food", "residential"],
        answer: "LPU provides residential accommodation options for students. Hostel arrangements, room types, mess facilities, charges and availability may vary. Consult the official university website for current details.",
        source: "https://www.lpu.in/student-services/residence.php"
    },
    {   category:"library",
        keywords:["library timings","library hours","library access","library resources","library facilities"],
        answer:"LPU has a library with resources for students and faculty. Library timings, access rules and available resources may change.the library usually stays open until midnight, with book issuing until 9 PM, and stays open until 2 AM during exams. Check the official university website for current library information.",
        source:"https://www.lpu.in/"
    },
    {
        category: "Campus",
        keywords: ["sports", "gym", "medical", "campus facilities", "food court", "infrastructure", "facilities"],
        answer: "Area: Sprawls over 600 acres along the Jalandhar-Delhi G.T. Road. Student Population: Houses over 30,000+ students from across India and multiple countries. Accreditations: Holds an NAAC A++ grade and recognition from various national and international bodies. Infrastructure: Features modern multi-story academic blocks (such as the Mittal School of Business), the UniMall, an amphitheatre, the Shanti Devi Mittal Indoor Sports Stadium, extensive central and branch libraries, and resident student hostels with 24/7 medical and dining options. Virtual Access: You can explore the layout using the 360 Virtual Tour | LPU Jalandhar.",
        source: "https://www.lpu.in/"
    },
    {
        category: "Examinations",
        keywords: ["exam", "examination", "result", "marks", "assessment", "timetable", "date sheet", "midterm", "ca", "end term", "grades"],
        answer: "For examination schedules, marks, results, assessment rules and academic notices, students should use the official student portal and university announcements. I do not have access to live student records or examination results.",
        source: "https://www.lpu.in/"
    },
    {
        category: "Placements",
        keywords: ["placement", "placements", "jobs", "career", "recruitment", "companies", "internship", "job opportunities"],
        answer: "LPU provides career development and placement-related support. Opportunities and outcomes depend on the programme, student eligibility, recruitment cycle and employer requirements. Verify current placement information through official university publications.",
        source: "https://www.lpu.in/landing-pages/brand/?utm_source=google&utm_medium=cpc&utm_campaign=1671145846&utm_adgroupid=92923337412&utm_campaignid=1671145846&utm_keyword=lpu%20placements&utm_device=c&utm_placement=&utm_network=g&utm_creativeid=829956349346&utm_matchtype=e&utm_field_session=Session_2027&gad_source=1&gad_campaignid=1671145846&gbraid=0AAAAADp1LSOD7sUFP3BA4RP2XYKZ3XMJg&gclid=Cj0KCQiAh9vXBhDKARIsAMooYhe_2Cavpwg5cJfVVY2st5WIvn0sga4GAWmxZd9vmk1wFA18_wA-Gs4aAms1EALw_wcB"
    },
    {
        category: "Student Support",
        keywords: ["contact", "phone number", "email", "help desk", "support", "complaint", "student help", "office"],
        answer: "For university enquiries, use the official LPU Contact Us section. I cannot verify whether individual phone numbers or email addresses are currently active, so please confirm contact details directly on the official website.",
        source: "https://www.lpu.in/"
    },
    {
        category: "International Education",
        keywords: ["international", "foreign students", "study abroad", "global", "exchange programme", "international admission"],
        answer: "LPU provides opportunities for international students and global academic exposure. Admission requirements and international programmes should be checked through the official university website.",
        source: "https://www.lpu.in/"
    },
    {
        category: "Research",
        keywords: ["research", "innovation", "projects", "patents", "research facilities", "research opportunities"],
        answer: "Research and innovation are part of university academic activities. For current research centres, projects, publications and opportunities, consult official LPU information.",
        source: "https://www.lpu.in/academics/research.php"
    }
];


/* =========================================
   DOM ELEMENTS
========================================= */

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const welcomeSection = document.getElementById("welcome-section");
const categoryList = document.getElementById("category-list");
const historyList = document.getElementById("history-list");

const newChatBtn = document.getElementById("new-chat-btn");
const clearChatBtn = document.getElementById("clear-chat-btn");
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");


/* =========================================
   APPLICATION STATE
========================================= */

const STORAGE_KEY = "lpu_smart_assistant_v2";
const HISTORY_KEY = "lpu_smart_assistant_history";

let activeCategory = "All";
let messages = [];
let isProcessing = false;


/* =========================================
   TEXT PROCESSING
========================================= */

function normalize(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function getWords(text) {
    const ignored = new Set([
        "the", "is", "are", "a", "an", "of", "to",
        "in", "on", "for", "and", "me", "my", "what",
        "how", "can", "could", "tell", "about", "please",
        "do", "does", "i", "you", "your", "at", "it",
        "with", "from", "be", "there", "give", "want"
    ]);

    return normalize(text)
        .split(" ")
        .filter(word => word.length > 1 && !ignored.has(word));
}


/* =========================================
   FUZZY MATCHING
========================================= */

function levenshtein(a, b) {
    const matrix = Array.from(
        { length: a.length + 1 },
        () => Array(b.length + 1).fill(0)
    );

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;

            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[a.length][b.length];
}

function fuzzyWordMatch(word, keywordWord) {
    if (word === keywordWord) return 1;

    if (word.length < 4 || keywordWord.length < 4) {
        return 0;
    }

    const distance = levenshtein(word, keywordWord);

    if (distance === 1) return 0.75;
    if (distance === 2 && word.length >= 7) return 0.45;

    return 0;
}


/* =========================================
   SMART KNOWLEDGE SEARCH
========================================= */

function calculateScore(question, item) {
    const normalizedQuestion = normalize(question);
    const questionWords = getWords(question);

    let score = 0;

    for (const keyword of item.keywords) {
        const normalizedKeyword = normalize(keyword);
        const keywordWords = getWords(keyword);

        // Exact phrase match
        if (normalizedQuestion.includes(normalizedKeyword)) {
            score += 12 + keywordWords.length * 3;
            continue;
        }

        // Word matching
        for (const keywordWord of keywordWords) {
            for (const questionWord of questionWords) {
                const similarity = fuzzyWordMatch(
                    questionWord,
                    keywordWord
                );

                if (similarity === 1) {
                    score += 3;
                } else {
                    score += similarity;
                }
            }
        }
    }

    // Category preference
    if (
        activeCategory !== "All" &&
        item.category === activeCategory
    ) {
        score += 3;
    }

    return score;
}

function getBotResponse(question) {
    const normalized = normalize(question);

    if (/^(hi|hello|hey|good morning|good afternoon|good evening)$/.test(normalized)) {
        return {
            answer: "Hello! Welcome to LPU Smart Assistant. I can help you explore university information, admissions, academics, scholarships and more.",
            category: "General",
            source: null,
            verified: false
        };
    }

    if (/^(thanks|thank you|thankyou)$/.test(normalized)) {
        return {
            answer: "You're welcome! Feel free to ask me another question about LPU.",
            category: "General",
            source: null,
            verified: false
        };
    }

    const matches = knowledgeBase
        .filter(item =>
            activeCategory === "All" ||
            item.category === activeCategory
        )
        .map(item => ({
            item,
            score: calculateScore(question, item)
        }))
        .sort((a, b) => b.score - a.score);

    if (!matches.length || matches[0].score < 3) {
        return {
            answer: "I couldn't find a sufficiently relevant answer in my current knowledge database. Try using different words or selecting a topic such as admissions, fees, courses, hostel, scholarships or placements. You can also check the official LPU website.",
            category: "Not found",
            source: "https://www.lpu.in/",
            verified: false
        };
    }

    const best = matches[0].item;

    return {
        answer: best.answer,
        category: best.category,
        source: best.source,
        verified: false
    };
}


/* =========================================
   DISPLAY MESSAGES SAFELY
========================================= */

function addMessageToScreen(message, type, details = {}) {
    const row = document.createElement("div");

    row.className = `message-row ${
        type === "user" ? "user-row" : "bot-row"
    }`;

    if (type === "bot") {
        const avatar = document.createElement("div");
        avatar.className = "message-avatar";
        avatar.textContent = "🎓";
        row.appendChild(avatar);
    }

    const content = document.createElement("div");

    content.className = `message-content ${
        type === "user" ? "user-message" : "bot-message"
    }`;

    content.textContent = message;

    if (type === "bot" && details.category) {
        const verification = document.createElement("div");

        verification.className = "verification";
        verification.textContent =
           verification.textContent =
    "✓ Reference available — please verify current details on the official LPU website.";

        content.appendChild(verification);

        if (details.category !== "General") {
            const category = document.createElement("div");

            category.className = "source-info";
            category.textContent = "Topic: " + details.category;

            content.appendChild(category);
        }

        if (details.source) {
            const sourceArea = document.createElement("div");
            sourceArea.className = "source-info";

            const link = document.createElement("a");
            link.href = details.source;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "Visit official LPU website ↗";

            sourceArea.appendChild(link);
            content.appendChild(sourceArea);
        }
    }

    row.appendChild(content);
    chatBox.appendChild(row);

    chatBox.scrollTop = chatBox.scrollHeight;
}


/* =========================================
   CHAT HISTORY STORAGE
========================================= */

function saveCurrentChat() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(messages)
        );
    } catch (error) {
        console.warn("Could not save chat:", error);
    }
}

function saveHistory() {
    try {
        let history = JSON.parse(
            localStorage.getItem(HISTORY_KEY) || "[]"
        );

        history = history.filter(
            item => item.id !== currentChatId
        );

        if (messages.length > 0) {
            history.unshift({
                id: currentChatId,
                title: messages.find(m => m.type === "user")?.text
                    || "New conversation",
                messages: messages,
                updated: new Date().toLocaleString()
            });
        }

        history = history.slice(0, 10);

        localStorage.setItem(
            HISTORY_KEY,
            JSON.stringify(history)
        );

        renderHistory();

    } catch (error) {
        console.warn("Could not save history:", error);
    }
}

let currentChatId = Date.now().toString();

function loadCurrentChat() {
    try {
        messages = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]"
        );

        if (!Array.isArray(messages)) messages = [];

        renderMessages();
    } catch (error) {
        messages = [];
    }
}

function renderMessages() {
    chatBox.innerHTML = "";

    welcomeSection.style.display =
        messages.length ? "none" : "block";

    messages.forEach(message => {
        addMessageToScreen(
            message.text,
            message.type,
            message.details || {}
        );
    });
}

function renderHistory() {
    historyList.innerHTML = "";

    try {
        const history = JSON.parse(
            localStorage.getItem(HISTORY_KEY) || "[]"
        );

        history.forEach(chat => {
            if (chat.id === currentChatId) return;

            const button = document.createElement("button");

            button.className = "history-item";
            button.textContent = chat.title;
            button.title = chat.title;

            button.addEventListener("click", () => {
                messages = chat.messages;
                currentChatId = chat.id;

                saveCurrentChat();
                renderMessages();
                renderHistory();
            });

            historyList.appendChild(button);
        });
    } catch (error) {
        console.warn("Could not load history:", error);
    }
}


/* =========================================
   TYPING INDICATOR
========================================= */

function showTyping() {
    const typing = document.createElement("div");

    typing.id = "typing-indicator";
    typing.className = "typing";
    typing.textContent = "🎓 LPU Assistant is thinking...";

    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTyping() {
    const typing = document.getElementById(
        "typing-indicator"
    );

    if (typing) typing.remove();
}


/* =========================================
   SEND MESSAGE
========================================= */

function sendMessage() {
    const question = userInput.value.trim();

    if (!question || isProcessing) return;

    isProcessing = true;
    sendBtn.disabled = true;

    welcomeSection.style.display = "none";

    messages.push({
        type: "user",
        text: question
    });

    addMessageToScreen(question, "user");

    userInput.value = "";
    saveCurrentChat();
    saveHistory();

    showTyping();

    // Small delay for the typing effect
    setTimeout(() => {
        try {
            const result = getBotResponse(question);

            hideTyping();

            messages.push({
                type: "bot",
                text: result.answer,
                details: result
            });

            addMessageToScreen(
                result.answer,
                "bot",
                result
            );

            saveCurrentChat();
            saveHistory();

        } catch (error) {
            hideTyping();

            addMessageToScreen(
                "Something went wrong. Please try again.",
                "bot"
            );
        }

        isProcessing = false;
        sendBtn.disabled = false;
        userInput.focus();

    }, 650);
}


/* =========================================
   CATEGORY NAVIGATION
========================================= */

categoryList.addEventListener("click", event => {
    const button = event.target.closest(".category");

    if (!button) return;

    document.querySelectorAll(".category").forEach(item => {
        item.classList.remove("active");
    });

    button.classList.add("active");

    activeCategory = button.dataset.category;

    if (activeCategory !== "All") {
        userInput.placeholder =
            "Ask about " + activeCategory + "...";
    } else {
        userInput.placeholder = "Ask anything about LPU...";
    }

    sidebar.classList.remove("open");
    userInput.focus();
});


/* =========================================
   SUGGESTED QUESTIONS
========================================= */

document.querySelectorAll(".suggestion").forEach(button => {
    button.addEventListener("click", () => {
        userInput.value = button.dataset.question;
        sendMessage();
    });
});


/* =========================================
   NEW CHAT
========================================= */

newChatBtn.addEventListener("click", () => {
    if (messages.length > 0) {
        saveHistory();
    }

    messages = [];
    currentChatId = Date.now().toString();

    localStorage.removeItem(STORAGE_KEY);

    renderMessages();
    renderHistory();

    sidebar.classList.remove("open");
    userInput.focus();
});


/* =========================================
   CLEAR CURRENT CONVERSATION
========================================= */

clearChatBtn.addEventListener("click", () => {
    if (!confirm("Clear this conversation?")) return;

    messages = [];
    localStorage.removeItem(STORAGE_KEY);

    renderMessages();
    userInput.focus();
});


/* =========================================
   BUTTON AND KEYBOARD EVENTS
========================================= */

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});


/* =========================================
   INITIALIZE APPLICATION
========================================= */

loadCurrentChat();
renderHistory();

console.log("LPU Smart Assistant Version 2 loaded.");
console.log("Knowledge entries:", knowledgeBase.length);
