// --- MOCK DATA (Expand this list later) ---
const PROBLEMS = [
    {
      id: '2025-10A-12',
      year: 2025, contest: 'AMC 10A', number: 12,
      category: 'Geometry', difficulty: 68,
      title: 'Tangent Circles & Radius',
      questionSnippet: 'Three circles with radii 1, 2, and 3 are mutually externally tangent. What is the radius r of the circle internally tangent to all three?',
      options: ['1/4', '6/23', '3/11', '5/17', '3/10'],
      correctOption: 1, 
      idealTime: { experienced: 1.5, intermediate: 8 },
      concepts: ['Descartes Circle Thm', 'Tangent Circles'],
      trap: 'Forgetting the reciprocal in Descartes Theorem results in option E.',
      historicalNote: 'Direct application of Descartes Kissing Circles. Similar to 2014 AMC 10B #23.',
      challenges: 'Unclear what to do after connecting centers if looking for a clean synthetic solution.',
      techniques: 'Whenever you have tangent circles, always connect their centers immediately.',
      commentary: 'The difficulty here is purely knowledge-based. If you know the theorem, it is a Q5. If you do not, it is a Q20 coordinate bash.',
      status: 'unattempted' 
    },
    {
      id: '2025-10A-08',
      year: 2025, contest: 'AMC 10A', number: 8,
      category: 'Number Theory', difficulty: 45,
      title: 'Modular Arithmetic Basics',
      questionSnippet: 'For how many integers n is n/(20-n) the square of an integer?',
      options: ['1', '2', '3', '4', '5'],
      correctOption: 2,
      idealTime: { experienced: 2, intermediate: 5 },
      concepts: ['Factors', 'Squares'],
      trap: 'Missing negative integer solutions for n.',
      historicalNote: 'Classic algebraic manipulation appearing in early AIME problems circa 2005.',
      challenges: 'Ensuring all integer cases (positive and negative) are checked.',
      techniques: 'Set expression = k^2 and solve for n to restrict bounds.',
      commentary: 'A standard "bounded search" problem. Key is to isolate n quickly.',
      status: 'solved'
    },
    {
        id: '2025-10A-21',
        year: 2025, contest: 'AMC 10A', number: 21,
        category: 'Combinatorics', difficulty: 88,
        title: 'Pathfinding with Constraints',
        questionSnippet: 'A bug moves on a hexagonal grid starting at origin...',
        options: ['120', '132', '144', '156', '168'],
        correctOption: 3, 
        idealTime: { experienced: 5, intermediate: 15 },
        concepts: ['Recursion', 'Symmetry'],
        trap: 'Double counting overlapping paths at the center junction.',
        historicalNote: 'Hexagonal pathfinding is rare; usually grid walks are square (2018-2020).',
        challenges: 'Visualizing the 3D implication of the 2D hex grid moves.',
        techniques: 'Map to 3 coordinates (x,y,z) with x+y+z=0 constraint.',
        commentary: 'Highly visual. Hard to brute force without a coordinate system.',
        status: 'failed' 
    }
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
    
    // Filter
    let filtered = PROBLEMS.filter(p => currentCategory === 'All' || p.category === currentCategory);
    
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

        card.innerHTML = `
            <div class="card-header">
                <span class="p-number">#${p.number}</span>
                <span class="p-meta">${p.year} ${p.contest}</span>
            </div>
            <h3 class="p-title">${p.title}</h3>
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
function openDetail(p) {
    // Generate Options HTML
    const optionsHtml = p.options.map((opt, i) => 
        `<div class="opt-box"><span class="opt-label">${String.fromCharCode(65+i)}</span> ${opt}</div>`
    ).join('');

    // Generate Concepts HTML
    const conceptsHtml = p.concepts.map(c => `<span class="tag blue">${c}</span>`).join('');

    contentEl.innerHTML = `
        <div class="detail-header">
            <div>
                <h1>${p.title}</h1>
                <div class="meta-row">
                    <span>${p.year} ${p.contest} Problem ${p.number}</span>
                    <span class="bullet">•</span>
                    <span style="color: #20C997">${p.difficulty}/100 Difficulty</span>
                </div>
            </div>
            <div class="big-score">${p.difficulty}</div>
        </div>

        <div class="question-box">
            ${p.questionSnippet}
        </div>

        <div class="options-grid">
            ${optionsHtml}
        </div>

        <div class="analysis-grid">
            <div class="analysis-col">
                <div class="info-box">
                    <h4><i data-lucide="clock"></i> Ideal Time</h4>
                    <div class="time-row">
                        <span>Experienced</span>
                        <b>${p.idealTime.experienced} min</b>
                    </div>
                    <div class="progress-bg"><div class="progress-fill" style="width: 20%"></div></div>
                    
                    <div class="time-row" style="margin-top:10px">
                        <span>Intermediate</span>
                        <b>${p.idealTime.intermediate} min</b>
                    </div>
                    <div class="progress-bg"><div class="progress-fill blue" style="width: 50%"></div></div>
                </div>

                <div class="info-box">
                    <h4><i data-lucide="book-open"></i> Concepts</h4>
                    <div class="tags-wrap">${conceptsHtml}</div>
                </div>
            </div>

            <div class="analysis-col">
                <div class="info-box">
                     <h4><i data-lucide="history"></i> Historical Context</h4>
                     <p>${p.historicalNote}</p>
                </div>
                <div class="info-box trap-box">
                     <h4><i data-lucide="alert-triangle"></i> The Trap</h4>
                     <p>${p.trap}</p>
                </div>
                <div class="info-box">
                     <h4><i data-lucide="lightbulb"></i> Technique</h4>
                     <p>${p.techniques}</p>
                </div>
            </div>
        </div>

        <div class="commentary-section">
            <h3>Author's Commentary</h3>
            <p>${p.commentary}</p>
        </div>
    `;

    overlayEl.classList.remove('hidden');
    lucide.createIcons(); // Re-render icons for the new content
    MathJax.typesetPromise(); // Render Math
}

function closeDetail() {
    overlayEl.classList.add('hidden');
}

// Start
init();
