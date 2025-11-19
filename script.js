// -------------------- Navigation --------------------
function show(id) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// -------------------- 100 Things I Love --------------------
let loveList = [
"1. Your beautiful blue eyes",
"2. Your beautiful smile",
"3. Your laugh",
"4. The way you talk to me",
"5. How sweet and caring you are",
"6. How you make me feel safe",
"7. Your beautiful personality",
"8. Your sweet voice",
"9. How you care for other people",
"10. How you need babying and act like my baby",
"11. How attractive you are",
"12. How smart you are",
"13. How you feel so deeply",
"14. Your dimples",
"15. Your body",
"16. Your hair",
"17. The way you dress",
"18. The way you respect me",
"19. The way you're scared of loosing me",
"20. How much effort You put in our relationship",
"21. How you make me feel like you really care",
"22. How happy you get when I give you or do what you want",
"23. How so sleepy you get after you say IM GONNA STAY UP THE WHOLE NIGHT ",
"24. How you look like when you're sleeping",
"25. How you look like when you just woke up",
"26. How you look like without makeup",
"27. How you look like with makeup",
"28. Your kindness",
"29. How so patient you are",
"30. How you're so confident",
"31. How you support me",
"32. How you make me feel special",
"33. How you love yapping so much",
"34. Your silly jokes",
"35. HOW SHHYYY YOU ARREEE",
"36. Your love and kindness for animals",
"37. How you remember small details",
"38. How you dance infront of me before getting embarresed",
"39. How embarresed you get from me",
"40. How cute you look when you're blushing",
"41. How you cheer me up",
"42. How you forgive me",
"43. How you make sacrifices",
"44. Your understanding",
"45. How you give me advice",
"46. You do stuff for me",
"47. How you love music",
"48. How you make everyday fun",
"49. That you agree to play games with me",
"50. How you say I love you",
"51. How hard you work",
"52. How you chase your goals and dreams",
"53. How you never give up",
"54. How you inspier me to be better",
"55. How you laugh at my jokes(while swearing that im not funny)",
"56. Your first smile of the day",
"57. Your last smile of the day",
"58. How you unique you are",
"59. How you do your eyebrows",
"60. How you are so intrested in psychology ",
"61. How you love your family",
"62. How you love my family",
"63. How I can tell that you're gonna be such a good mother",
"64. How you treat everyone with kindness even the ones who be bad to you",
"65. How you think the best of everyone",
"66. How you trust me with your life",
"67. How you need reassurence",
"68. How reassured I feel trusting you with my life",
"69. How you love your friends",
"70. How you're so excited about summer",
"71. How you're so excited about winter",
"72. How you're so obssesed with christmas",
"73. How you decorate your room",
"74. How you work hard",
"75. How you grew up",
"76. How you need me so much",
"77. How you love being called a princess",
"78. How you're so sweet to little kids",
"79. How your're social",
"80. How you always need my attention",
"81. How you dont need anyone's else attention",
"82. How needy you are",
"83. How adorable you get when its time to sleep",
"84. How you use your laptop",
"85. How you love playing kids games on your phone",
"86. How you need me to close your eyes before sleep",
"87. How obssesed you are with  bedtime stories",
"88. How you need me to put you to sleep",
"89. How happy you get for others",
"90. Every single inch of you",
"91. How you're so spontaneous",
"92. How beautiful you look in every picture of you",
"93. How you ask me for help",
"94. How you take my opinion",
"95. How I can be myself with you",
"96. How you're always on my side",
"97. How you love life",
"98. How you learn Arabic",
"99. How good you are with everything you do",
"UUUUUUUUUUU YOU REACHED THE 100",
"ARE YOU REAAAADDDDDDYYYYY",
"Tbh 100 isn't enough",
"There is billion things I love about you ",
"Words could never explain how much I love you and how much you mean to me",
"I LLOOOOOOVVVVVVEEEE YOOOOOOUUUUU BIRTHDAY QUEEEEEEEN"

   



    
    
];
let loveIndex = 0;

function nextLove() {
    if (loveIndex >= loveList.length) loveIndex = 0;
    document.getElementById("loveText").innerText = loveList[loveIndex];
    loveIndex++;
}

// -------------------- NEW QUIZ SYSTEM (fixed + animations) --------------------

const quizData = [
    { q: "Where did we first call after omegele?", options: ["Instagram", "Discord", "WhatsApp","Snapchat"], correct: 2 },
    { q: "What’s my favorite thing about you?", options: ["Your eyes", "Your voice", "Your kindness","Everything"], correct: 3 }, // <-- fixed index
    { q: "Who fell first? 😏", options: ["You", "Me", "Both"], correct: 2 },
    { q: "What do I love calling you the most?", options: ["Baby", "Angel", "Princess"], correct: 1 },
    { q: "Your best trait?", options: ["Funny", "Beautiful", "Sweet","All of the Above"], correct: 3 },
    { q: "What color reminds me of you?", options: ["Blue", "Pink", "Purple"], correct: 0 },
    { q: "Which animal suits you?", options: ["Bunny", "Cat", "Deer"], correct: 0 },
    { q: "When do I miss you most?", options: ["Night", "Morning","All the time"], correct: 2 },
    { q: "You’re:", options: ["Cute", "Adorable","Sweet", "All of the above"], correct: 3 },
    { q: "What do I want with you?", options: ["Future", "Memories", "Both"], correct: 2 },
    { q: "Your smile is:", options: ["Beautiful", "Cute", "Adorable"], correct: 0 },
    { q: "Best nickname?", options: ["Honeybunny", "Princess", "Angel"], correct: 2 },
    { q: "What melts me?", options: ["Your laugh", "Your face", "Your voice","Anything you do"], correct: 3 },
    { q: "Perfect date?", options: ["Movie", "Cuddles", "Walk"], correct: 1 },
    { q: "What do I want to hear?", options: ["Your laugh", "Your voice", "Your stories","everything you have to say"], correct: 3 },
    { q: "Which is true?", options: ["I love you", "I love you a lot", "I love you the most"], correct: 2 },
    { q: "How cute are you?", options: ["A bit", "Very", "SO FUCKING CUTE"], correct: 2 },
    { q: "What do I think of your eyes?", options: ["Pretty", "Beautiful", "Adorable"], correct: 2 },
    { q: "Best thing about us?", options: ["Chemistry", "Communication", "Everything"], correct: 2 },
    { q: "What do you make me?", options: ["Happy", "Calm", "Loved","All of the above"], correct: 3 },
    { q: "If I could teleport, where first?", options: ["Your home", "Finland", "Your arms"], correct: 2 },
    { q: "What do I love?", options: ["You", "You", "Still you"], correct: 2 },
    { q: "Our love = ?", options: ["Cute", "Strong", "Special"], correct: 2 },
    { q: "Your laugh is:", options: ["Cute", "Addicting", "My favorite"], correct: 2 },
    { q: "You are my:", options: ["Girl", "Love", "Home"], correct: 2 },
    { q: "Your voice is:", options: ["Soft", "Beautiful", "My comfort"], correct: 2 },
    { q: "Who do I adore?", options: ["You", "You", "You"], correct: 0 },
    { q: "What do I want rn?", options: ["Food", "Sleep", "You"], correct: 2 },
    { q: "What’s true?", options: ["I miss you", "I need you", "I want you"], correct: 1 },
    { q: "What’s our vibe?", options: ["Cute", "Chaos", "Perfect mix of everything"], correct: 2 },
    { q: "Your beauty is:", options: ["Normal", "Cute", "Insane"], correct: 2 },
    { q: "I fall for you:", options: ["Sometimes", "Weekly", "Daily"], correct: 2 },
    { q: "Your energy is:", options: ["Soft", "Warm", "The best"], correct: 2 },
    { q: "Favorite thing to hear?", options: ["Hi", "Baby", "I love you"], correct: 2 },
    { q: "Which one is you?", options: ["Smart", "Beautiful", "Both"], correct: 2 },
    { q: "I want to call you:", options: ["My girl", "My baby", "Forever mine"], correct: 2 },
    { q: "You make my heart:", options: ["Warm", "Happy", "Melt"], correct: 2 },
    { q: "When do I think about you?", options: ["Morning", "Night", "Always"], correct: 2 },
    { q: "Your existence is:", options: ["Nice", "Important", "Everything"], correct: 2 },
    { q: "You are:", options: ["Pretty", "Perfect", "My favorite person"], correct: 2 },
    { q: "Our bond is:", options: ["Good", "Strong", "Unbreakable"], correct: 2 },
    { q: "What do I want?", options: ["Cuddles", "Hugs", "You"], correct: 2 },
    { q: "When do I love you?", options: ["Now", "Soon", "Always"], correct: 2 },
    { q: "You are worth:", options: ["A lot", "More", "Everything"], correct: 2 },
    { q: "You’re the:", options: ["Best", "Cutest", "One"], correct: 2 },
    { q: "My feelings for you:", options: ["Small", "Big", "Huge"], correct: 2 },
    { q: "Favorite part of day?", options: ["Food", "Sleep", "Talking to you"], correct: 2 },
    { q: "What am I?", options: ["Yours", "Yours", "Still yours"], correct: 0 },
];

let quizIndex = 0;
let quizLocked = false; // prevent spamming clicks

function loadQuiz() {
    const q = quizData[quizIndex];
    document.getElementById("quizQuestion").innerText = q.q;

    const optionsBox = document.getElementById("quizOptions");
    optionsBox.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("div");
        btn.className = "quiz-option";
        btn.innerText = opt;

        // click handler uses the locked flag
        btn.addEventListener('click', (e) => {
            if (quizLocked) return;
            quizLocked = true;

            // Add quick click-pulse
            btn.classList.add('option-click');
            setTimeout(() => btn.classList.remove('option-click'), 300);

            // small delay to let the click animation show
            setTimeout(() => checkQuiz(i, btn), 120);
        });

        optionsBox.appendChild(btn);
    });

    // clear feedback
    document.getElementById("quizFeedback").innerText = "";
    quizLocked = false;
}

function checkQuiz(choice, btnElement) {
    const q = quizData[quizIndex];
    const feedback = document.getElementById("quizFeedback");

    if (choice === q.correct) {
        // Correct
        feedback.innerText = "Correct my smart baby 💖";

        // visual correct feedback
        btnElement.classList.add('correct');
        heartExplosion();

        // move to next question after small delay
        setTimeout(() => {
            quizIndex++;
            if (quizIndex >= quizData.length) {
                finishQuiz();
            } else {
                loadQuiz();
            }
        }, 900);

    } else {
        // Wrong: shake and stay on the same question
        feedback.innerText = "Noo try again angel";

        btnElement.classList.add('wrong');
        // remove wrong class after animation
        setTimeout(() => btnElement.classList.remove('wrong'), 600);

        // unlock so she can try again
        quizLocked = false;
    }
}

function finishQuiz() {
    // Small finishing celebration
    for (let i = 0; i < 15; i++) {
        setTimeout(heartExplosion, i * 80);
    }
    setTimeout(() => show('notes'), 1000);
}

function heartExplosion() {
    for (let i = 0; i < 8; i++) {
        const h = document.createElement('div');
        h.classList.add('heart-pop');
        h.innerText = ['💗','💖','💘','💞'][Math.floor(Math.random()*4)];
        document.body.appendChild(h);

        h.style.left = (Math.random() * 80 + 10) + 'vw';
        h.style.top = (Math.random() * 50 + 30) + 'vh';
        h.style.transform = `translateY(0) rotate(${Math.random()*360}deg) scale(${Math.random()*0.8 + 0.6})`;

        setTimeout(() => h.remove(), 1000);
    }
}

// start quiz
loadQuiz();


/* ---------- TIME TOGETHER LIVE COUNTER ---------- */

const startDate = new Date(2023, 5, 7); // June 7th 2023

function updateTimeTogether() {
    const now = new Date();
    let diff = now - startDate;

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    let years = Math.floor(days / 365);
    days = days % 365;

    let months = Math.floor(days / 30);
    days = days % 30;

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    document.getElementById("timeTogether").innerHTML = 
        `We have been together for<br>
        <strong>${years}</strong> years  
        <strong>${months}</strong> months  
        <strong>${days}</strong> days<br><br>
        <strong>${hours}</strong> hours  
        <strong>${minutes}</strong> minutes  
        <strong>${seconds}</strong> seconds 💖`;
}

setInterval(updateTimeTogether, 1000);
window.addEventListener("load", updateTimeTogether);


/* ---------- BREAK THE HEARTS GAME ---------- */
const heartMessages = [
    "You make everyday become a good day.",
    "My heart gets so excited when I see your name.",
    "Your laugh is my favorite sound.",
    "I dream of holding you everyday.",
    "Your eyes are my favorite.",
    "You're stronger and braver than you think.",
    "I love the little things you do.",
    "You are my home."
];

// Create hearts and handle popping
function initBreakHearts() {
    const heartsArea = document.getElementById('heartsArea');
    const counter = document.getElementById('heartCounter');
    const finalMsg = document.getElementById('finalHeartMsg');

    heartsArea.innerHTML = '';
    finalMsg.style.display = 'none';
    heartsArea.style.opacity = '1';

    let popped = 0;
    const total = heartMessages.length;
    counter.innerText = `${popped} / ${total}`;

    for (let i = 0; i < total; i++) {
        const h = document.createElement('div');
        h.className = 'break-heart';
        h.innerText = "💗";

        // random positions
        h.style.left = (Math.random() * 85 + 5) + '%';
        h.style.top = (Math.random() * 75 + 10) + '%';
        heartsArea.appendChild(h);

        // floating animation
        h.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-12px)' },
            { transform: 'translateY(0px)' }
        ], {
            duration: 3000 + Math.random() * 2000,
            iterations: Infinity
        });

        // clicking
// clicking — popup will appear exactly where the heart was (inside heartsArea)
h.addEventListener("click", () => {
    if (h.classList.contains("popped")) return;

    h.classList.add("popped");
    popped++;
    counter.innerText = `${popped} / ${total}`;

    // small hearts explosion (visual only)
    for (let x = 0; x < 5; x++) heartExplosion();

    // create popup INSIDE the heartsArea so positioning matches the heart container
    const popup = document.createElement("div");
    popup.className = "heart-popup";
    popup.innerText = heartMessages[i];

    // append to same container so percentage left/top are correct
    heartsArea.appendChild(popup);

    // use the heart's percent left/top (set earlier) and center with translate(-50%,-50%)
    popup.style.position = 'absolute';
    popup.style.left = h.style.left;
    popup.style.top = h.style.top;
    popup.style.transform = 'translate(-50%, -55%)';
    popup.style.opacity = '1';
    popup.style.zIndex = 50;

    // fade & lift then remove
    setTimeout(() => {
        popup.style.transition = 'opacity .6s ease, transform .6s ease';
        popup.style.opacity = '0';
        popup.style.transform = 'translate(-50%, -90%)';
        setTimeout(() => popup.remove(), 700);
    }, 1500);

    // show final message when all popped
    if (popped === total) {
        setTimeout(() => {
            finalMsg.style.display = "block";
            heartsArea.style.opacity = "0.15";
        }, 600);
    }
});



    }
}


// init hearts game after load when element exists
window.addEventListener('load', () => {
    if (document.getElementById('heartsArea')) initBreakHearts();
});


// -------------------- Floating Hearts --------------------
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '🩷';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Create hearts every 300ms
setInterval(createHeart, 25);
