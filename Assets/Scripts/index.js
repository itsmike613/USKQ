const els = {
    startScreen: document.getElementById("start-screen"),
    quizScreen: document.getElementById("quiz-screen"),
    resultScreen: document.getElementById("result-screen"),
    questionContainer: document.getElementById("question-container"),
    nextButton: document.getElementById("next-button"),
    backButton: document.getElementById("back-button"),
    categoryBreakdown: document.getElementById("category-breakdown"),
    questionReview: document.getElementById("question-review"),
    uskqScore: document.getElementById("uskq-score")
};

let currentQuestion = 0;
let selectedOptions = Array(questions.length).fill(null);
const categoryScores = {};

const startTest = () => {
    els.startScreen.classList.add("hidden");
    els.quizScreen.classList.remove("hidden");
    showQuestion();
};

const showQuestion = () => {
    const q = questions[currentQuestion];
    els.questionContainer.innerHTML = `
        <div class="question">
            <div class="category">Category: ${q.category}</div>
            <h3>${q.question}</h3>
        </div>
        ${q.options.map((opt, i) => `
            <div class="option ${selectedOptions[currentQuestion] === i ? "selected" : ""}" data-index="${i}">
                <img src="${opt.img}" alt="" /><span>${opt.text}</span>
            </div>
        `).join('')}
    `;
    els.nextButton.disabled = selectedOptions[currentQuestion] === null;
    els.nextButton.textContent = currentQuestion === questions.length - 1 ? "Submit" : "Next";
    els.backButton.disabled = !currentQuestion;
};

els.questionContainer.addEventListener("click", e => {
    const option = e.target.closest(".option");
    if (!option) return;
    const i = parseInt(option.dataset.index);
    selectedOptions[currentQuestion] = i;
    els.questionContainer.querySelector(".option.selected")?.classList.remove("selected");
    option.classList.add("selected");
    els.nextButton.disabled = false;
});

const nextQuestion = () => {
    currentQuestion === questions.length - 1 ? showResults() : (currentQuestion++, showQuestion());
};

const prevQuestion = () => {
    if (currentQuestion) currentQuestion--, showQuestion();
};

const showResults = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ["#B31942", "#F8F8FF", "#0A3161"] });
    els.quizScreen.classList.add("hidden");
    els.resultScreen.classList.remove("hidden");

    const fragment = document.createDocumentFragment();
    questions.forEach((q, i) => {
        const selIdx = selectedOptions[i];
        const corrIdx = q.options.findIndex(o => o.weight === 1);
        const cat = q.category;
        categoryScores[cat] = categoryScores[cat] || { score: 0, total: 0 };
        categoryScores[cat].score += q.options[selIdx]?.weight || 0;
        categoryScores[cat].total++;

        const qDiv = document.createElement("div");
        qDiv.innerHTML = `<p><strong>${q.question}</strong></p>`;
        q.options.forEach((opt, j) => {
            const optDiv = document.createElement("div");
            optDiv.className = `option ${j === corrIdx ? "correct" : ""} ${j === selIdx ? "selected" : ""} ${j === selIdx && j !== corrIdx ? "wrong" : ""}`;
            optDiv.innerHTML = `<img src="${opt.img}" alt="" /><span>${opt.text}</span>`;
            qDiv.appendChild(optDiv);
            if (opt.info) {
                const infoDiv = document.createElement("div");
                infoDiv.className = "info";
                infoDiv.textContent = opt.info;
                qDiv.appendChild(infoDiv);
            }
        });
        fragment.appendChild(qDiv);
    });

    const categoryPercentages = Object.entries(categoryScores).map(([cat, { score, total }]) => ({
        cat,
        pct: (score / total) * 100
    }));
    els.categoryBreakdown.innerHTML = categoryPercentages.map(({ cat, pct }) => `<p><strong>${cat}:</strong> ${pct.toFixed(1)}%</p>`).join('');
    const totalScore = categoryPercentages.reduce((acc, { pct }) => acc + pct, 0);
    els.uskqScore.textContent = Math.round(totalScore / categoryPercentages.length * 10);
    els.questionReview.innerHTML = "";
    els.questionReview.appendChild(fragment);
};

const retry = () => {
    currentQuestion = 0;
    selectedOptions = Array(questions.length).fill(null);
    Object.keys(categoryScores).forEach(key => delete categoryScores[key]);
    els.resultScreen.classList.add("hidden");
    els.startScreen.classList.remove("hidden");
};