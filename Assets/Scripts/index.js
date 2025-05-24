const els = {
    startScreen: document.getElementById("start-screen"),
    quizScreen: document.getElementById("quiz-screen"),
    resultScreen: document.getElementById("result-screen"),
    questionContainer: document.getElementById("question-container"),
    nextButton: document.getElementById("next-button"),
    backButton: document.getElementById("back-button"),
    categoryBreakdown: document.getElementById("category-breakdown"),
    questionReview: document.getElementById("question-review"),
    uskqScore: document.getElementById("uskq-score"),
    reviewContainer: document.getElementById("review-container"),
    reviewBackButton: document.getElementById("review-back-button"),
    reviewNextButton: document.getElementById("review-next-button")
};

let currentQuestion = 0;
let currentReviewQuestion = 0;
let selectedOptions = Array(questions.length).fill(undefined);
const categoryScores = {};

const startTest = () => {
    els.startScreen.classList.add("hidden");
    els.quizScreen.classList.remove("hidden");
    renderQuestion();
};

const renderQuestion = () => {
    const q = questions[currentQuestion];
    const selected = selectedOptions[currentQuestion];
    els.questionContainer.innerHTML = `
        <div class="question">
            <div class="category">Category: ${q.category}</div>
            <h3>${q.question}</h3>
        </div>
        ${q.options.map((opt, i) => `
            <div class="option ${selected === i ? "selected" : ""}" data-index="${i}">
                <img src="${opt.img}" alt="" loading="lazy" /><span>${opt.text}</span>
            </div>
        `).join('')}
    `;
    els.nextButton.disabled = selected === undefined;
    els.nextButton.textContent = currentQuestion === questions.length - 1 ? "Submit" : "Next";
    els.backButton.disabled = currentQuestion === 0;
};

els.questionContainer.addEventListener("click", e => {
    const option = e.target.closest(".option");
    if (option) {
        const index = parseInt(option.dataset.index);
        selectedOptions[currentQuestion] = index;
        els.questionContainer.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");
        els.nextButton.disabled = false;
    }
});

const nextQuestion = () => {
    currentQuestion < questions.length - 1 ? (currentQuestion++, renderQuestion()) : showResults();
};

const prevQuestion = () => {
    currentQuestion > 0 && (currentQuestion--, renderQuestion());
};

const prevReviewQuestion = () => {
    if (currentReviewQuestion > 0) {
        currentReviewQuestion--;
        renderReviewQuestion();
    }
};

const nextReviewQuestion = () => {
    if (currentReviewQuestion < questions.length - 1) {
        currentReviewQuestion++;
        renderReviewQuestion();
    }
};

const renderReviewQuestion = () => {
    const q = questions[currentReviewQuestion];
    const selIdx = selectedOptions[currentReviewQuestion];
    const corrIdx = q.options.findIndex(o => o.weight === 1);

    let html = `
        <div class="question">
            <h3>${q.question}</h3>
        </div>
    `;

    q.options.forEach((opt, j) => {
        const isSelected = j === selIdx;
        const isCorrect = j === corrIdx;
        const classNames = [
            'option',
            isSelected ? 'selected' : '',
            isCorrect ? 'correct' : '',
            isSelected && !isCorrect ? 'wrong' : ''
        ].filter(Boolean).join(' ');

        html += `
            <div class="${classNames}">
                <img src="${opt.img}" alt="" loading="lazy" />
                <span>${opt.text}</span>
            </div>
            ${opt.info ? `<div class="info">${opt.info}</div>` : ''}
        `;
    });

    els.reviewContainer.innerHTML = html;
    els.reviewBackButton.disabled = currentReviewQuestion === 0;
    els.reviewNextButton.disabled = currentReviewQuestion === questions.length - 1;
};

const showResults = () => {
    els.quizScreen.classList.add("hidden");
    els.resultScreen.classList.remove("hidden");

    questions.forEach((q, i) => {
        const selIdx = selectedOptions[i];
        const corrIdx = q.options.findIndex(o => o.weight === 1);
        const cat = q.category;
        categoryScores[cat] = categoryScores[cat] || { score: 0, total: 0 };
        categoryScores[cat].score += q.options[selIdx]?.weight || 0;
        categoryScores[cat].total++;
    });

    const categoryPercentages = Object.entries(categoryScores).map(([cat, { score, total }]) => ({
        cat,
        pct: (score / total) * 100
    }));
    els.categoryBreakdown.innerHTML = categoryPercentages.map(({ cat, pct }) => `<p><strong>${cat}:</strong> ${pct.toFixed(1)}%</p>`).join('');
    const totalScore = categoryPercentages.reduce((acc, { pct }) => acc + pct, 0);
    els.uskqScore.textContent = Math.round(totalScore / categoryPercentages.length * 10);
    currentReviewQuestion = 0;
    renderReviewQuestion();
};

const retry = () => {
    currentQuestion = 0;
    selectedOptions = Array(questions.length).fill(undefined);
    Object.keys(categoryScores).forEach(key => delete categoryScores[key]);
    currentReviewQuestion = 0;
    els.reviewContainer.innerHTML = '';
    els.resultScreen.classList.add("hidden");
    els.startScreen.classList.remove("hidden");
};