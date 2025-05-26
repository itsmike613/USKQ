const dom = {
    startScreen: document.getElementById("start-screen"),
    testScreen: document.getElementById("test-screen"),
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

let currentIndex = 0, mode = "test", selectedOptions = Array(questions.length).fill(undefined);
const categoryScores = {};
questions.forEach(q => q.correctIndex = q.options.findIndex(o => o.weight === 1));

const generateOptionHTML = (opt, i, selected, correct, mode) => {
    const isSelected = i === selected, isCorrect = i === correct;
    const classNames = ['option', isSelected ? 'selected' : '', mode === 'review' && isCorrect ? 'correct' : '', mode === 'review' && isSelected && !isCorrect ? 'wrong' : ''].filter(Boolean).join(' ');
    return `<div class="${classNames}" data-index="${i}"><img src="${opt.img}" alt="" loading="lazy" /><span>${opt.text}</span></div>${mode === 'review' && opt.info ? `<div class="info">${opt.info}</div>` : ''}`;
};

const startTest = () => {
    dom.startScreen.classList.add("hidden");
    dom.testScreen.classList.remove("hidden");
    mode = "test";
    render();
};

const render = () => {
    const q = questions[currentIndex];
    if (mode === "test") {
        dom.questionContainer.innerHTML = `<div class="question"><div class="category">Category > ${q.category}</div><h3>${q.question}</h3></div>${q.options.map((opt, i) => generateOptionHTML(opt, i, selectedOptions[currentIndex], null, 'test')).join('')}`;
    } else {
        dom.reviewContainer.innerHTML = `<div class="question"><div class="category">Category > ${q.category}</div><h3>${q.question}</h3></div>${q.options.map((opt, j) => generateOptionHTML(opt, j, selectedOptions[currentIndex], q.correctIndex, 'review')).join('')}`;
    }
    updateButtonStates();
};

const updateButtonStates = () => {
    const isFirst = currentIndex === 0, isLast = currentIndex === questions.length - 1;
    if (mode === "test") {
        dom.nextButton.disabled = selectedOptions[currentIndex] === undefined;
        dom.backButton.disabled = isFirst;
        dom.nextButton.textContent = isLast ? "Submit" : "Next";
    } else if (mode === "review") {
        dom.reviewBackButton.disabled = isFirst;
        dom.reviewNextButton.disabled = isLast;
    }
};

const changeIndex = delta => {
    const newIndex = currentIndex + delta;
    if (newIndex >= 0 && newIndex < questions.length) {
        currentIndex = newIndex;
        render();
    } else if (mode === "test" && newIndex === questions.length) {
        showResults();
    }
};

dom.questionContainer.addEventListener("click", e => {
    const option = e.target.closest(".option");
    if (option && mode === "test") {
        selectedOptions[currentIndex] = parseInt(option.dataset.index);
        render();
    }
});

dom.nextButton.addEventListener("click", () => changeIndex(1));
dom.backButton.addEventListener("click", () => changeIndex(-1));
dom.reviewNextButton.addEventListener("click", () => changeIndex(1));
dom.reviewBackButton.addEventListener("click", () => changeIndex(-1));

const showResults = () => {
    dom.testScreen.classList.add("hidden");
    dom.resultScreen.classList.remove("hidden");
    questions.forEach((q, i) => {
        const selIdx = selectedOptions[i], cat = q.category;
        categoryScores[cat] = categoryScores[cat] || { score: 0, total: 0 };
        categoryScores[cat].score += q.options[selIdx]?.weight || 0;
        categoryScores[cat].total++;
    });
    const categoryPercentages = Object.entries(categoryScores).map(([cat, { score, total }]) => ({ cat, pct: (score / total) * 100 }));
    dom.categoryBreakdown.innerHTML = categoryPercentages.map(({ cat, pct }) => `<p><strong>${cat}:</strong> ${pct.toFixed(1)}%</p>`).join('');
    dom.uskqScore.textContent = Math.round(categoryPercentages.reduce((sum, { pct }) => sum + pct, 0) / categoryPercentages.length * 10);
    mode = "review";
    currentIndex = 0;
    render();
};

const retry = () => {
    currentIndex = 0;
    selectedOptions = Array(questions.length).fill(undefined);
    Object.keys(categoryScores).forEach(key => delete categoryScores[key]);
    dom.reviewContainer.innerHTML = '';
    dom.resultScreen.classList.add("hidden");
    dom.startScreen.classList.remove("hidden");
};
