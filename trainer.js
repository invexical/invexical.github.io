/**
 * Trainer.js - Data file for the Problem Trainer Dashboard.
 * * This file contains an array of problem objects, each representing a single competitive
 * math problem with metadata like difficulty, time costs, categories, and tags.
 */

// Define the problem data structure
const problems = [
    {
        id: "AMC10A_2025_P1",
        contest: "AMC 10A 2025",
        problemNumber: 1,
        difficulty: 6, // Scale 0-100
        answerIndex: 4,
        idealTime: { // Time in seconds
            beginner: 90, 
            intermediate: 40,
            experienced: 20
        },
        category: "Algebra",
        tags: ["Rate", "Distance-Rate-Time", "Equation Setup", "Relative Motion"],
        coreIdeas: "Accounting for Betsy's 1-hour delay.",
        nonObviousTransitions: "N/A",
        techniques: "Distance-rate-time setup. Algebraic substitution.",
        errorProneSteps: "Failing to account for the one hour delay.",
        solution: "Andy and Betsy both live in Mathville. Andy leaves Mathville on his bicycle at $1{:}30$ traveling due north at a steady $8$ miles per hour. Betsy leaves at $2{:}30$, traveling due east at a steady $12$ miles per hour. At what time will they be exactly the same distance from their starting point?",
        options: [
            "3:30 PM",
            "3:45 PM",
            "4:00 PM",
            "4:15 PM",
            "4:30 PM"
        ]
    },
    {
        id: "AMC10A_2025_P2",
        contest: "AMC 10A 2025",
        problemNumber: 2,
        difficulty: 9,
        answerIndex: 1,
        idealTime: { 
            beginner: 60, 
            intermediate: 30,
            experienced: 20
        },
        category: "Algebra",
        tags: ["Mixtures", "Weighted Mean", "Percentages", "System of Equations"],
        coreIdeas: "Using weighted means properly. Knowing how to traverse the information given in the problem, and ignoring unimportant info.",
        nonObviousTransitions: "N/A",
        techniques: "Set up a linear equation for the second mixture's weight.",
        errorProneSteps: "Finding the number of pounds of the second mixture and thinking that is the answer.",
        solution: "A box contains $10$ pounds of a nut mix that is $50\%$ peanuts, $20\%$ cashews, and $30\%$ almonds. A second nut mix containing $20\%$ peanuts, $40\%$ cashews, and $40\%$ almonds is added to the box resulting in a new nut mix that is $40\%$ peanuts. How many pounds of cashews are now in the box?",
        options: [
            "3.5",
            "4",
            "4.5",
            "5",
            "6"
        ]
    },
    {
        id: "AMC10A_2025_P3",
        contest: "AMC 10A 2025",
        problemNumber: 3,
        difficulty: 14,
        answerIndex: 3,
        idealTime: { 
            beginner: 90, 
            intermediate: 45,
            experienced: 25
        },
        category: "Algebra, Geometry, and Combinatorics",
        tags: ["Casework", "Triangle Inequality", "Isosceles Triangle", "Counting"],
        coreIdeas: "Realizing that the longest side being $2025$ results in two scenarios.",
        nonObviousTransitions: "Realizing the need for two cases based on which side is repeated.",
        techniques: "Solve inequalities for both cases, avoid double-counting equilateral triangle.",
        errorProneSteps: "Forgetting or double-counting equilateral case.",
        solution: "How many isosceles triangles are there with positive area whose side lengths are all positive integers and whose longest side has length $2025$?",
        options: [
            "2025",
            "2026",
            "3012",
            "3037",
            "4050"
        ]
    },
    {
        id: "AMC10A_2025_P4",
        contest: "AMC 10A 2025",
        problemNumber: 4,
        difficulty: 26,
        answerIndex: 1,
        idealTime: { 
            beginner: 180, 
            intermediate: 120,
            experienced: 60
        },
        category: "Algebra",
        tags: ["Mean", "Average", "System of Equations", "Word Problem"],
        coreIdeas: "Dealing with the change in means by finding the change in the total sum.",
        nonObviousTransitions: "N/A",
        techniques: "Use sums and averages, set up system with three unknowns.",
        errorProneSteps: "Setting up equations incorrectly (for example, forgetting that Ash adds one person to the team).",
        solution: "A team of students is going to compete against a team of teachers in a trivia contest. The total number of students and teachers is $15$. Ash wants to join. If Ash plays with the students, the average age increases from $12$ to $14$. If Ash plays with the teachers, the average age decreases from $55$ to $52$. How old is Ash?",
        options: [
            "28",
            "29",
            "30",
            "31",
            "32"
        ]
    },

    {
        id: "AMC10A_2025_P5",
        contest: "AMC 10A 2025",
        problemNumber: 5,
        difficulty: 30,
        answerIndex: 4,
        idealTime: { 
            beginner: 180, 
            intermediate: 60,
            experienced: 35
        },
        category: "Algebra",
        tags: ["Sequences", "Arithmetic Progression", "Triangular Numbers"],
        coreIdeas: "Finding the endpoints of each 'valley.' Recognizing the sequence can be decomposed is hard to observe for a beginner.",
        nonObviousTransitions: "Decomposing the sequence into blocks of increasing size (e.g., $1, 2, 1$; $2, 3, 2, 1, 2, 3, 4, 3, 2, 1$)",
        techniques: "Use triangular number sums; incremental block sizes.",
        errorProneSteps: "Miscounting position, remembering the index begins at $1$.",
        solution: "Consider the sequence of positive integers $$1,2,1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,\dots$$ What is the 2025th term?",
        options: [
            "5",
            "15",
            "16",
            "44",
            "45"
        ]
    },
    {
        id: "AMC10A_2025_P6",
        contest: "AMC 10A 2025",
        problemNumber: 6,
        difficulty: 28,
        answerIndex: 2,
        idealTime: { 
            beginner: 120, 
            intermediate: 60,
            experienced: 25
        },
        category: "Geometry",
        tags: ["Angle Chasing", "Equilateral Triangle", "Hexagon", "Isosceles Triangle"],
        coreIdeas: "Drawing an accurate diagram and looking at the right triangle.",
        nonObviousTransitions: "Recognizing that the hexagon is formed by the angles of an isosceles triangle.",
        techniques: "Focus on one triangle at a time; use angle sum and vertical angles.",
        errorProneSteps: "Assuming hexagon is equiangular (leads to 120°).",
        solution: "In an equilateral triangle each interior angle is trisected by a pair of rays. The intersection of the interiors of the middle 20°-angle at each vertex is the interior of a convex hexagon. What is the degree measure of the smallest angle of this hexagon?",
        options: [
            "80",
            "90",
            "100",
            "110",
            "120"
        ]
    },
    {
        id: "AMC10A_2025_P7",
        contest: "AMC 10A 2025",
        problemNumber: 7,
        difficulty: 18,
        answerIndex: 4,
        idealTime: { 
            beginner: 90, 
            intermediate: 40,
            experienced: 30
        },
        category: "Algebra",
        tags: ["Polynomials", "Remainder Theorem", "System of Equations"],
        coreIdeas: "Applying the remainder theorem.",
        nonObviousTransitions: "N/A",
        techniques: "Plugging and chugging once the theorem is directly applied.",
        errorProneSteps: "Mixing up linear expressions, arithmetic errors, extracting the incorrect result.",
        solution: "Suppose $a$ and $b$ are real numbers. When the polynomial $x^3+x^2+ax+b$ is divided by $x-1$, the remainder is $4$. When divided by $x-2$, the remainder is $6$. What is $b-a$?",
        options: [
            "14",
            "15",
            "16",
            "17",
            "18"
        ]
    },
    {
        id: "AMC10A_2025_P8",
        contest: "AMC 10A 2025",
        problemNumber: 8,
        difficulty: 13,
        answerIndex: 1,
        idealTime: { 
            beginner: 120, 
            intermediate: 60,
            experienced: 60
        },
        category: "Logic",
        tags: ["Logic Puzzle", "Truth Statements", "Casework"],
        coreIdeas: "Interpreting what it really means if a statement is true or false. Recognize that the statements can be implied off each other (i.e., statement 2 being true requires statement 1 to be true too.)",
        nonObviousTransitions: "Recognizing the implications between the statements (e.g., Statement 2 implies Statement 1).",
        techniques: "Test each scenario by number of true statements.",
        errorProneSteps: "Extracting the incorrect result, or failing to understand the problem.",
        solution: "Agnes writes the following four statements on a blank piece of paper.<ul><li>$\bullet$ At least one of these statements is true.</li><li>$\bullet$ At least two of these statements are true.</li><li>$\bullet$ At least two of these statements are false.</li><li>$\bullet$ At least one of these statements is false.</li></ul>Each statement is either true or false. How many false statements did Agnes write on the paper?",
        options: [
            "0",
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        id: "AMC10A_2025_P9",
        contest: "AMC 10A 2025",
        problemNumber: 9,
        difficulty: 45,
        answerIndex: 2,
        idealTime: { 
            beginner: 600, 
            intermediate: 240,
            experienced: 150
        },
        category: "Algebra",
        tags: ["Functions", "Cubic", "Roots", "Transformations", "Optimization"],
        coreIdeas: "Recognizing that the condition is equivalent to asking how many $x$ satisfy $f(x)=25$. Interpreting the graph of a cubic. Solving for number of roots without directly finding them.",
        nonObviousTransitions: "Transforming $y=f(x-a)$ passing through $(1, 25)$ into $f(1-a)=25$, which means finding the number of roots for $f(x)=25$ where $x = 1-a$.",
        techniques: "Calculate maxima and minima to count intersections.",
        errorProneSteps: "Attempting exact roots unnecessarily, applying calculus, lazily assuming there are three intersection points because it is a cubic.",
        solution: "Let $f(x)=100x^3-300x^2+200x$. For how many real numbers $a$ does the graph of $y=f(x-a)$ pass through the point $(1,25)$?",
        options: [
            "1",
            "2",
            "3",
            "4",
            "more than 4"
        ]
    }
    // Add P10-P25 data here when available
];

// --- STATE ---
let currentCategory = 'All';
let currentSort = 'difficulty-desc';

// --- DOM ELEMENTS ---
const gridEl = document.getElementById('problemGrid');
const overlayEl = document.getElementById('detailOverlay');
const contentEl = document.getElementById('detailContent');
const categoryBtns = document.querySelectorAll('.filter-tag');
const sortSelect = document.getElementById('sortSelect');
const closeBtn = document.getElementById('closeDetail');

// --- INIT ---
function init() {
    renderGrid();
    lucide.createIcons();
    
    // Event Listeners
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            e.target.classList.add('active');
            currentCategory = e.target.dataset.val;
            renderGrid();
        });
    });

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderGrid();
    });

    closeBtn.addEventListener('click', closeDetail);
}

// --- RENDER GRID ---
function renderGrid() {
    gridEl.innerHTML = '';
    
    // FIX 1: Change PROBLEMS to problems (lowercase)
    let filtered = problems.filter(p => currentCategory === 'All' || p.category === currentCategory);
    
    // Sort
    filtered.sort((a, b) => {
        if (currentSort === 'difficulty-desc') return b.difficulty - a.difficulty;
        if (currentSort === 'difficulty-asc') return a.difficulty - b.difficulty;
        if (currentSort === 'time') return a.idealTime.experienced - b.idealTime.experienced;
    });

    // Build HTML
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'problem-card';
        card.onclick = () => openDetail(p);
        
        // Difficulty Color Logic
        let diffColor = '#20C997'; // Green/Teal
        if(p.difficulty > 50) diffColor = '#facc15'; // Yellow
        if(p.difficulty > 75) diffColor = '#ef4444'; // Red
        
        // FIX 2 & 3: Use p.problemNumber and p.contest
        card.innerHTML = `
            <div class="card-header">
                <span class="p-number">#${p.problemNumber}</span>
                <span class="p-meta">${p.contest}</span>
            </div>
            <h3 class="p-title">Problem ${p.problemNumber}: ${p.category}</h3> <!-- Added a generic title since data doesn't have one -->
            <div class="card-footer">
                <span class="tag">${p.category}</span>
                <div class="diff-bar-container">
                    <div class="diff-bar-fill" style="width: ${p.difficulty}%; background: ${diffColor};"></div>
                    <span style="color:${diffColor}">${p.difficulty}</span>
                </div>
            </div>
        `;
        gridEl.appendChild(card);
    });
}

// --- OPEN DETAIL VIEW ---
// --- OPEN DETAIL VIEW ---
function openDetail(p) {
    // FIXED: Dynamic generation of options HTML
    let optionsHtml = '';
    if (p.options && Array.isArray(p.options) && p.options.length > 0) {
        // ADDED: data-index for tracking, and the correct class
        optionsHtml = p.options.map((opt, i) => 
            `<div class="opt-box" data-index="${i}" data-problem-id="${p.id}">
                <span class="opt-label">${String.fromCharCode(65+i)}</span> ${opt}
            </div>`
        ).join('');
    } else {
        optionsHtml = '<p class="text-gray-500 italic p-3">Multiple choice options are not available for this problem yet.</p>';
    }
    
    // Use p.tags for concepts
    const conceptsHtml = p.tags.map(c => `<span class="tag blue">${c}</span>`).join('');

    contentEl.innerHTML = `
        <div class="detail-header">
            <div>
                <h1>Problem ${p.problemNumber}: ${p.category}</h1> 
                <div class="meta-row">
                    <span>${p.contest} Problem ${p.problemNumber}</span>
                    <span class="bullet">•</span>
                    <span style="color: #20C997">${p.difficulty}/100 Difficulty</span>
                </div>
            </div>
            <div class="big-score">${p.difficulty}</div>
        </div>

        <div class="question-box">
            ${p.solution} 
        </div>

        <div id="optionsGrid" class="options-grid">
            ${optionsHtml}
        </div>

        <div class="analysis-grid">
            <div class="analysis-col">
                <div class="info-box">
                    <h4><i data-lucide="clock"></i> Ideal Time</h4>
                    <div class="time-row">
                        <span>Experienced</span>
                        <b>${p.idealTime.experienced} seconds</b>
                    </div>
                    <div class="progress-bg"><div class="progress-fill" style="width: 20%"></div></div>
                    
                    <div class="time-row" style="margin-top:10px">
                        <span>Intermediate</span>
                        <b>${p.idealTime.intermediate} seconds</b>
                    </div>
                    <div class="progress-bg"><div class="progress-fill blue" style="width: 50%"></div></div>
                    
                    <div class="time-row" style="margin-top:10px">
                        <span>Beginner</span>
                        <b>${p.idealTime.beginner} seconds</b>
                    </div>
                    <div class="progress-bg"><div class="progress-fill orange" style="width: 70%"></div></div>

                </div>

                <div class="info-box">
                    <h4><i data-lucide="book-open"></i> Concepts (Tags)</h4>
                    <div class="tags-wrap">${conceptsHtml}</div>
                </div>
            </div>

            <div class="analysis-col">
                <div class="info-box">
                    <h4><i data-lucide="lightbulb"></i> Core Ideas</h4>
                    <p>${p.coreIdeas || 'No core ideas provided.'}</p>
                </div>
                <div class="info-box trap-box">
                    <h4><i data-lucide="alert-triangle"></i> The Common Trap</h4>
                    <p>${p.errorProneSteps || 'No common traps documented.'}</p>
                </div>
                <div class="info-box">
                    <h4><i data-lucide="send"></i> Technique</h4>
                    <p>${p.techniques}</p>
                </div>
            </div>
        </div>

        <div class="commentary-section">
            <h3>Problem Statement (Full)</h3>
            <p>${p.solution}</p>
        </div>
    `;

    overlayEl.classList.remove('hidden');
    lucide.createIcons(); // Re-render icons for the new content
    // Check if MathJax is available before trying to render
    if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
        MathJax.typesetPromise(); // Render Math
    }

    // NEW: Attach the click listener to all options
    document.querySelectorAll('.opt-box').forEach(opt => {
        opt.addEventListener('click', handleAnswerClick);
    });
}

function closeDetail() {
    overlayEl.classList.add('hidden');
}

// Start
init();
