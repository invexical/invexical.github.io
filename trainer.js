import { initializeApp } from "[https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js](https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js)";
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from "[https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js](https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js)";
import { getFirestore, doc, setDoc, onSnapshot, arrayUnion } from "[https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js](https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js)";

// --- DATA ---
const problems = [
    {
        id: "AMC10A_2025_P1",
        contest: "AMC 10A 2025",
        problemNumber: 1,
        difficulty: 6,
        answerIndex: 4,
        idealTime: { beginner: 90, intermediate: 40, experienced: 20 },
        category: "Algebra",
        tags: ["Rate", "Distance-Rate-Time"],
        coreIdeas: "Accounting for Betsy's 1-hour delay.",
        nonObviousTransitions: "N/A",
        techniques: "Distance-rate-time setup.",
        errorProneSteps: "Failing to account for the one hour delay.",
        solution: "Andy and Betsy both live in Mathville. Andy leaves Mathville on his bicycle at $1{:}30$ traveling due north at a steady $8$ miles per hour. Betsy leaves at $2{:}30$, traveling due east at a steady $12$ miles per hour. At what time will they be exactly the same distance from their starting point?",
        options: ["3:30 PM", "3:45 PM", "4:00 PM", "4:15 PM", "4:30 PM"]
    },
    {
        id: "AMC10A_2025_P2",
        contest: "AMC 10A 2025",
        problemNumber: 2,
        difficulty: 9,
        answerIndex: 1,
        idealTime: { beginner: 60, intermediate: 30, experienced: 20 },
        category: "Algebra",
        tags: ["Mixtures", "Weighted Mean"],
        coreIdeas: "Using weighted means properly.",
        nonObviousTransitions: "N/A",
        techniques: "Linear equations.",
        errorProneSteps: "Finding the weight of the mixture instead of cashews.",
        solution: "A box contains $10$ pounds of a nut mix that is $50\\%$ peanuts, $20\\%$ cashews, and $30\\%$ almonds. A second nut mix containing $20\\%$ peanuts, $40\\%$ cashews, and $40\\%$ almonds is added to the box resulting in a new nut mix that is $40\\%$ peanuts. How many pounds of cashews are now in the box?",
        options: ["3.5", "4", "4.5", "5", "6"]
    },
    {
        id: "AMC10A_2025_P3",
        contest: "AMC 10A 2025",
        problemNumber: 3,
        difficulty: 14,
        answerIndex: 3,
        idealTime: { beginner: 90, intermediate: 45, experienced: 25 },
        category: "Algebra, Geometry, and Combinatorics",
        tags: ["Casework", "Triangle Inequality"],
        coreIdeas: "Triangle inequality constraints.",
        nonObviousTransitions: "Two cases for isosceles.",
        techniques: "Casework.",
        errorProneSteps: "Double counting.",
        solution: "How many isosceles triangles are there with positive area whose side lengths are all positive integers and whose longest side has length $2025$?",
        options: ["2025", "2026", "3012", "3037", "4050"]
    },
    { id: "AMC10A_2025_P4", contest: "AMC 10A 2025", problemNumber: 4, difficulty: 26, answerIndex: 1, idealTime: { beginner: 180, intermediate: 120, experienced: 60 }, category: "Algebra", tags: ["Mean", "Average"], coreIdeas: "Change in sum based on average.", nonObviousTransitions: "N/A", techniques: "System of equations.", errorProneSteps: "Incorrect setup.", solution: "A team of students is going to compete against a team of teachers in a trivia contest. The total number of students and teachers is $15$. Ash wants to join. If Ash plays with the students, the average age increases from $12$ to $14$. If Ash plays with the teachers, the average age decreases from $55$ to $52$. How old is Ash?", options: ["28", "29", "30", "31", "32"] },
    { id: "AMC10A_2025_P5", contest: "AMC 10A 2025", problemNumber: 5, difficulty: 30, answerIndex: 4, idealTime: { beginner: 180, intermediate: 60, experienced: 35 }, category: "Algebra", tags: ["Sequences", "Patterns"], coreIdeas: "Sequence decomposition.", nonObviousTransitions: "Decomposing into blocks.", techniques: "Triangular numbers.", errorProneSteps: "Off-by-one errors.", solution: "Consider the sequence of positive integers $$1,2,1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,\\dots$$ What is the 2025th term?", options: ["5", "15", "16", "44", "45"] },
    { id: "AMC10A_2025_P6", contest: "AMC 10A 2025", problemNumber: 6, difficulty: 28, answerIndex: 2, idealTime: { beginner: 120, intermediate: 60, experienced: 25 }, category: "Geometry", tags: ["Angle Chasing", "Triangles"], coreIdeas: "Geometry angles.", nonObviousTransitions: "Hexagon interior.", techniques: "Angle sum.", errorProneSteps: "Assuming equiangular.", solution: "In an equilateral triangle each interior angle is trisected by a pair of rays. The intersection of the interiors of the middle 20°-angle at each vertex is the interior of a convex hexagon. What is the degree measure of the smallest angle of this hexagon?", options: ["80", "90", "100", "110", "120"] },
    { id: "AMC10A_2025_P7", contest: "AMC 10A 2025", problemNumber: 7, difficulty: 18, answerIndex: 4, idealTime: { beginner: 90, intermediate: 40, experienced: 30 }, category: "Algebra", tags: ["Polynomials", "Remainder Theorem"], coreIdeas: "Remainder Theorem.", nonObviousTransitions: "N/A", techniques: "Substitution.", errorProneSteps: "Arithmetic.", solution: "Suppose $a$ and $b$ are real numbers. When the polynomial $x^3+x^2+ax+b$ is divided by $x-1$, the remainder is $4$. When divided by $x-2$, the remainder is $6$. What is $b-a$?", options: ["14", "15", "16", "17", "18"] },
    { id: "AMC10A_2025_P8", contest: "AMC 10A 2025", problemNumber: 8, difficulty: 13, answerIndex: 1, idealTime: { beginner: 120, intermediate: 60, experienced: 60 }, category: "Logic", tags: ["Logic", "Truth Tables"], coreIdeas: "Implication logic.", nonObviousTransitions: "Statement dependencies.", techniques: "Casework.", errorProneSteps: "Misinterpreting statements.", solution: "Agnes writes the following four statements on a blank piece of paper.<ul><li>$\\bullet$ At least one of these statements is true.</li><li>$\\bullet$ At least two of these statements are true.</li><li>$\\bullet$ At least two of these statements are false.</li><li>$\\bullet$ At least one of these statements is false.</li></ul>Each statement is either true or false. How many false statements did Agnes write on the paper?", options: ["0", "1", "2", "3", "4"] },
    { id: "AMC10A_2025_P9", contest: "AMC 10A 2025", problemNumber: 9, difficulty: 45, answerIndex: 2, idealTime: { beginner: 600, intermediate: 240, experienced: 150 }, category: "Algebra", tags: ["Functions", "Roots"], coreIdeas: "Graph transformations.", nonObviousTransitions: "Relating f(x-a) to f(x).", techniques: "Root counting.", errorProneSteps: "Calculus traps.", solution: "Let $f(x)=100x^3-300x^2+200x$. For how many real numbers $a$ does the graph of $y=f(x-a)$ pass through the point $(1,25)$?", options: ["1", "2", "3", "4", "more than 4"] },
    { id: "AMC10A_2025_P10", contest: "AMC 10A 2025", problemNumber: 10, difficulty: 32, answerIndex: 2, idealTime: { beginner: 150, intermediate: 90, experienced: 40 }, category: "Geometry", tags: ["Area", "Circles"], coreIdeas: "Pythagorean theorem on chords.", nonObviousTransitions: "Radius relationship.", techniques: "Difference of areas.", errorProneSteps: "Semicircle vs circle.", solution: "A semicircle has diameter $\\overline{AB}$ and chord $\\overline{CD}$ of length $16$ parallel to $\\overline{AB}$. A smaller semicircle with diameter on $\\overline{AB}$ and tangent to $\\overline{CD}$ is cut from the larger semicircle, as shown below. What is the area of the resulting figure, shown shaded?", options: ["$16\\pi$", "$24\\pi$", "$32\\pi$", "$48\\pi$", "$64\\pi$"] },
    { id: "AMC10A_2025_P11", contest: "AMC 10A 2025", problemNumber: 11, difficulty: 23, answerIndex: 4, idealTime: { beginner: 210, intermediate: 90, experienced: 45 }, category: "Algebra", tags: ["Sequences"], coreIdeas: "Arithmetic and Geometric properties.", nonObviousTransitions: "Integer constraints.", techniques: "Trial and error.", errorProneSteps: "Arithmetic errors.", solution: "The sequence $1, x, y, z$ is arithmetic. The sequence $1, p, q, z$ is geometric. Both sequences are strictly increasing and contain only integers, and $z$ is as small as possible. What is the value of $x+y+z+p+q$?", options: ["66", "91", "103", "132", "149"] },
    { id: "AMC10A_2025_P12", contest: "AMC 10A 2025", problemNumber: 12, difficulty: 35, answerIndex: 3, idealTime: { beginner: 300, intermediate: 150, experienced: 90 }, category: "Combinatorics", tags: ["Counting", "Casework"], coreIdeas: "Digit properties (Even/Prime).", nonObviousTransitions: "The digit 2 is unique.", techniques: "Constructive counting.", errorProneSteps: "Missing the '2' case.", solution: "Carlos uses a $4$-digit passcode to unlock his computer. In his passcode, exactly one digit is even, exactly one (possibly different) digit is prime, and no digit is $0$. How many $4$-digit passcodes satisfy these conditions?", options: ["176", "192", "432", "464", "608"] },
    { id: "AMC10A_2025_P13", contest: "AMC 10A 2025", problemNumber: 13, difficulty: 36, answerIndex: 3, idealTime: { beginner: 240, intermediate: 120, experienced: 90 }, category: "Geometry", tags: ["Geometric Series", "Similarity"], coreIdeas: "Infinite series of areas.", nonObviousTransitions: "Area ratio is k squared.", techniques: "Sum of geometric series.", errorProneSteps: "Ratio confusion.", solution: "In the figure below, the outside square contains infinitely many squares, each of them with the same center and sides parallel to the outside square. The ratio of the side length of a square to the side length of the next inner square is $k$, where $0 < k < 1$. The spaces between squares are alternately shaded as shown in the figure. The area of the shaded portion of the figure is $64\\%$ of the area of the original square. What is $k$?", options: ["\\frac{3}{5}", "\\frac{16}{25}", "\\frac{2}{3}", "\\frac{3}{4}", "\\frac{4}{5}"] }
];

// --- FIREBASE SETUP ---
const firebaseConfig = JSON.parse(__firebase_config);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// State
let currentCategory = 'All';
let currentSort = 'difficulty-desc';
let currentUser = null;
let completedProblems = new Set(); // Stores IDs of solved problems

const gridEl = document.getElementById('problemGrid');
const overlayEl = document.getElementById('detailOverlay');
const contentEl = document.getElementById('detailContent');
const userStatusEl = document.getElementById('userStatus');

// Difficulty Colors
const difficultyColors = [
    { max: 10, color: '#00BFFF' }, { max: 20, color: '#00FFFF' },
    { max: 35, color: '#7CFC00' }, { max: 50, color: '#FFD700' },
    { max: 65, color: '#FF8C00' }, { max: 80, color: '#FF6347' },
    { max: 90, color: '#FF0000' }, { max: 100, color: '#FF00FF' }
];
function getDifficultyColor(diff) {
    for (const r of difficultyColors) if (diff <= r.max) return r.color;
    return '#333';
}

// --- AUTH & DATA LOGIC ---
async function initAuth() {
    try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
            await signInWithCustomToken(auth, __initial_auth_token);
        } else {
            await signInAnonymously(auth);
        }
    } catch (e) {
        console.error("Auth Failed", e);
        userStatusEl.innerText = "Offline Mode";
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        userStatusEl.innerHTML = `<span style="color:#20C997">●</span> Connected (ID: ${user.uid.slice(0,4)}...)`;
        
        // Listen for completed problems
        const docRef = doc(db, 'artifacts', appId, 'users', user.uid, 'trainerData', 'progress');
        onSnapshot(docRef, (snap) => {
            if (snap.exists()) {
                const data = snap.data();
                if (data.completed) {
                    completedProblems = new Set(data.completed);
                    renderGrid(); // Refresh grid to show green circles
                }
            }
        });
    } else {
        userStatusEl.innerText = "Guest Mode";
    }
});

async function saveProgress(problemId) {
    if (!currentUser) return;
    const docRef = doc(db, 'artifacts', appId, 'users', currentUser.uid, 'trainerData', 'progress');
    // Save to Firestore
    await setDoc(docRef, {
        completed: arrayUnion(problemId)
    }, { merge: true });
}

// --- UI LOGIC ---

function init() {
    renderGrid();
    lucide.createIcons();
    initAuth();

    // Filters
    document.querySelectorAll('.filter-tag').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.val;
            renderGrid();
        });
    });

    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderGrid();
    });

    document.getElementById('closeDetail').addEventListener('click', closeDetail);
}

function renderGrid() {
    gridEl.innerHTML = '';
    
    let filtered = problems.filter(p => currentCategory === 'All' || p.category.includes(currentCategory));
    
    filtered.sort((a, b) => {
        if (currentSort === 'difficulty-desc') return b.difficulty - a.difficulty;
        if (currentSort === 'difficulty-asc') return a.difficulty - b.difficulty;
        if (currentSort === 'time') return a.idealTime.experienced - b.idealTime.experienced;
    });

    filtered.forEach(p => {
        const row = document.createElement('div');
        row.className = 'problem-row';
        row.onclick = () => openDetail(p);
        
        let diffColor = getDifficultyColor(p.difficulty);
        
        // CHECK IF SOLVED
        let isSolved = completedProblems.has(p.id);
        let statusClass = isSolved ? 'status-circle solved' : 'status-circle';
        // Add solved style dynamically if needed, but class is better
        let statusStyle = isSolved ? 'background-color: #20C997; box-shadow: 0 0 5px #20C997;' : '';

        row.innerHTML = `
            <div class="col-status">
                <div class="status-circle" style="${statusStyle}"></div>
            </div>
            <div class="col-source">${p.contest}</div>
            <div class="col-title">Problem ${p.problemNumber}: ${p.category}</div>
            <div class="col-difficulty">
                <span class="difficulty-badge" style="background-color: ${diffColor};">
                    ${p.difficulty}
                </span>
            </div>
        `;
        gridEl.appendChild(row);
    });
}

// Make openDetail globally available if needed, or just keep in scope
function openDetail(p) {
    let optionsHtml = '';
    if (p.options && p.options.length > 0) {
        optionsHtml = p.options.map((opt, i) => 
            `<div class="opt-box" data-index="${i}" data-problem-id="${p.id}">
                <span class="opt-label">${String.fromCharCode(65+i)}</span>
                <span>${opt}</span>
                <span class="feedback-icon"></span>
            </div>`
        ).join('');
    } else {
        optionsHtml = '<div class="opt-box disabled">No options available</div>';
    }
    
    const conceptsHtml = p.tags.map(c => `<span class="concept-tag">${c}</span>`).join('');
    let diffColor = getDifficultyColor(p.difficulty);

    contentEl.innerHTML = `
        <div class="detail-header-section">
            <div class="detail-title">
                <h1>Problem ${p.problemNumber}</h1>
                <div class="detail-meta">
                    <span>${p.contest}</span>
                    <span>•</span>
                    <span style="color: ${diffColor}">${p.difficulty} Difficulty</span>
                </div>
            </div>
            <div class="big-score" style="color: ${diffColor}; font-size: 2rem; opacity: 0.5">#${p.problemNumber}</div>
        </div>

        <div class="detail-body">
            <div class="question-box">${p.solution}</div>
            <div id="optionsGrid" class="options-grid">${optionsHtml}</div>

            <div class="analysis-dashboard">
                <div class="analysis-col">
                    <div class="info-card">
                        <h4><i data-lucide="clock"></i> Ideal Time</h4>
                        <div class="time-stat-row"><span>Experienced</span> <span>${p.idealTime.experienced}s</span></div>
                        <div class="progress-track"><div class="progress-bar" style="width: 20%; background: #20C997"></div></div>
                        <div class="time-stat-row"><span>Intermediate</span> <span>${p.idealTime.intermediate}s</span></div>
                        <div class="progress-track"><div class="progress-bar" style="width: 50%; background: #19A4FF"></div></div>
                        <div class="time-stat-row"><span>Beginner</span> <span>${p.idealTime.beginner}s</span></div>
                        <div class="progress-track"><div class="progress-bar" style="width: 80%; background: #FFD700"></div></div>
                    </div>
                    <div class="info-card">
                        <h4><i data-lucide="book-open"></i> Concepts</h4>
                        <div>${conceptsHtml}</div>
                    </div>
                </div>
                <div class="analysis-col">
                    <div class="info-card"><h4><i data-lucide="lightbulb"></i> Core Idea</h4><div class="text-content">${p.coreIdeas}</div></div>
                    <div class="info-card trap-card"><h4><i data-lucide="alert-triangle"></i> Common Trap</h4><div class="text-content">${p.errorProneSteps}</div></div>
                    <div class="info-card"><h4><i data-lucide="code"></i> Technique</h4><div class="text-content">${p.techniques}</div></div>
                </div>
            </div>
        </div>
    `;

    overlayEl.classList.remove('hidden');
    lucide.createIcons();
    if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }

    // CLICK HANDLER FOR ANSWERS
    document.querySelectorAll('.opt-box').forEach(opt => {
        opt.addEventListener('click', (e) => {
            if (document.getElementById('optionsGrid').classList.contains('answered')) return;

            const clicked = e.currentTarget;
            const index = parseInt(clicked.dataset.index);
            
            document.getElementById('optionsGrid').classList.add('answered');

            document.querySelectorAll('.opt-box').forEach((box, idx) => {
                box.classList.add('disabled');
                if (idx === p.answerIndex) {
                    box.classList.add('correct');
                    box.querySelector('.feedback-icon').innerHTML = '<i data-lucide="check-circle"></i>';
                } else if (idx === index && idx !== p.answerIndex) {
                    box.classList.add('incorrect');
                    box.querySelector('.feedback-icon').innerHTML = '<i data-lucide="x-circle"></i>';
                }
            });
            lucide.createIcons();

            // SAVE PROGRESS
            if (index === p.answerIndex) {
                saveProgress(p.id);
                // Optimistic UI update for the grid
                completedProblems.add(p.id);
                renderGrid();
            }
        });
    });
}

function closeDetail() {
    overlayEl.classList.add('hidden');
}

// Start
init();
