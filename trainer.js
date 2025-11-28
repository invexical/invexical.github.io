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
    },

    {
        id: "AMC10A_2025_P10",
        contest: "AMC 10A 2025",
        problemNumber: 10,
        difficulty: 32,
        answerIndex: 2, // Corresponds to (B) 24\pi
        idealTime: { 
            beginner: 150, // 2-3 min
            intermediate: 90, // 1-2 min
            experienced: 40
        },
        category: "Geometry",
        tags: ["Area", "Circles", "Semicircle", "Chord", "Pythagorean Theorem"],
        coreIdeas: "Using the Pythagorean theorem to relate the radius of the larger semicircle ($R$) and the height of the chord ($r$, which is the radius of the smaller semicircle).",
        nonObviousTransitions: "Recognize that the radius of the smaller semicircle, $r$, is the distance from the center to the chord $\\overline{CD}$.",
        techniques: "Set up the area as $A_{large} - A_{small}$ and simplify the resulting expression using the geometric relationship $R^2 - r^2 = 8^2$.",
        errorProneSteps: "Failing to divide the area by two (semicircle vs. circle). Adding the areas of the semicircles instead of subtracting.",
        solution: "A semicircle has diameter $\\overline{AB}$ and chord $\\overline{CD}$ of length $16$ parallel to $\\overline{AB}$. A smaller semicircle with diameter on $\\overline{AB}$ and tangent to $\\overline{CD}$ is cut from the larger semicircle, as shown below. What is the area of the resulting figure, shown shaded?",
        options: [
            "$16\\pi$",
            "$24\\pi$",
            "$32\\pi$",
            "$48\\pi$",
            "$64\\pi$"
        ]
    },
    {
        id: "AMC10A_2025_P11",
        contest: "AMC 10A 2025",
        problemNumber: 11,
        difficulty: 23,
        answerIndex: 4, // Corresponds to (C) 103
        idealTime: { 
            beginner: 210, // 3-4 min
            intermediate: 90, // 1.5 min
            experienced: 45
        },
        category: "Algebra",
        tags: ["Arithmetic Sequence", "Geometric Sequence", "Number Theory", "Trial and Error"],
        coreIdeas: "Expressing the terms in both sequences using common difference $d$ and common ratio $r$, and solving the resulting equations for the smallest integer $z$.",
        nonObviousTransitions: "The key is realizing the terms must be $1, 1+d, 1+2d, 1+3d$ and $1, r, r^2, r^3$. Since all are integers, $r$ must be an integer, and $r^3 = 1+3d$.",
        techniques: "Systematic trial and error with integer values for the common ratio $r$, checking the condition $r^3-1 = 3d$ where $d$ must be a positive integer.",
        errorProneSteps: "Finding an incorrect value of $z$ (e.g., the next possible $z$) or incorrectly summing the final values.",
        solution: "The sequence $1, x, y, z$ is arithmetic. The sequence $1, p, q, z$ is geometric. Both sequences are strictly increasing and contain only integers, and $z$ is as small as possible. What is the value of $x+y+z+p+q$?",
        options: [
            "66",
            "91",
            "103",
            "132",
            "149"
        ]
    },
    {
        id: "AMC10A_2025_P12",
        contest: "AMC 10A 2025",
        problemNumber: 12,
        difficulty: 35,
        answerIndex: 3, // Corresponds to (B) 192
        idealTime: { 
            beginner: 300, // 5 min
            intermediate: 150, // 2.5 min
            experienced: 90 // 1.5 min
        },
        category: "Combinatorics",
        tags: ["Casework", "Constructive Counting", "Parity", "Prime Numbers"],
        coreIdeas: "The only digit that is both even and prime (from $1$ to $9$) is $2$. This splits the problem into two distinct cases: the passcode contains $2$, or it does not.",
        nonObviousTransitions: "Correctly defining the three sets of digits: **Set E** (Even & Not Prime: {4, 6, 8}), **Set P** (Odd & Prime: {3, 5, 7}), and **Set N** (Odd & Not Prime: {1, 9}). The digit **2** must be handled separately.",
        techniques: "Constructive counting using casework (Case 1: $2$ is a digit; Case 2: $2$ is not a digit). Use the multiplication principle for each case.",
        errorProneSteps: "Failing to account for the position of the special digits. Incorrectly computing the number of options for each case.",
        solution: "Carlos uses a $4$-digit passcode to unlock his computer. In his passcode, exactly one digit is even, exactly one (possibly different) digit is prime, and no digit is $0$. How many $4$-digit passcodes satisfy these conditions?",
        options: [
            "176",
            "192",
            "432",
            "464",
            "608"
        ]
    },
    {
        id: "AMC10A_2025_P13",
        contest: "AMC 10A 2025",
        problemNumber: 13,
        difficulty: 36,
        answerIndex: 3, // Corresponds to (D) 3/4
        idealTime: { 
            beginner: 240, // 4 min
            intermediate: 120, // 2 min
            experienced: 90 // 1-2 min
        },
        category: "Geometry",
        tags: ["Geometric Series", "Area", "Similarity", "Infinite Sums", "Ratio"],
        coreIdeas: "The areas of the successively smaller squares form an **infinite geometric series** with a common ratio related to $k$. The shaded area is the sum of the areas of the odd-numbered annuli (differences of square areas).",
        nonObviousTransitions: "The ratio of the areas of successive squares is $k^2$, not $k$. Expressing the shaded area as a geometric series.",
        techniques: "Use the formula for the sum of an infinite geometric series: $S = \\frac{a}{1-r}$. Set up the equation for the shaded area being $0.64$ of the total area.",
        errorProneSteps: "Incorrectly finding the value of the common ratio in the area series (using $k$ instead of $k^2$). Incorrectly summing the shaded/unshaded portions.",
        solution: "In the figure below, the outside square contains infinitely many squares, each of them with the same center and sides parallel to the outside square. The ratio of the side length of a square to the side length of the next inner square is $k$, where $0 < k < 1$. The spaces between squares are alternately shaded as shown in the figure. The area of the shaded portion of the figure is $64\\%$ of the area of the original square. What is $k$?",
        options: [
            "\\frac{3}{5}",
            "\\frac{16}{25}",
            "\\frac{2}{3}",
            "\\frac{3}{4}",
            "\\frac{4}{5}"
        ]
    },
        {
        "id": "AMC10A_2025_P14",
        "contest": "AMC 10A 2025",
        "problemNumber": 14,
        "difficulty": 34,
        "answerIndex": 1,
        "idealTime": {
            "beginner": 300,
            "intermediate": 180,
            "experienced": 60
        },
        "category": "Combinatorics",
        "tags": ["Probability", "Circular Permutations", "Casework", "Arrangements"],
        "coreIdeas": "The solution relies on principles of casework and constructive counting within the context of circular arrangements to find the probability.",
        "nonObviousTransitions": "N/A",
        "techniques": "Multiplying the probability of independent events, simulating the seating of the students and teachers.",
        "errorProneSteps": "Improperly applying combinations and permutations, incorrectly dealing with circular seatings and symmetry.",
        "solution": "Six chairs are arranged around a round table. Two students and two teachers randomly select four of the chairs to sit in. What is the probability that the two students will sit in two adjacent chairs and the two teachers will also sit in two adjacent chairs?",
        "options": [
            "1/6",
            "1/5",
            "2/9",
            "3/13",
            "1/4"
        ]
    },
    {
        "id": "AMC10A_2025_P15",
        "contest": "AMC 10A 2025",
        "problemNumber": 15,
        "difficulty": 40,
        "answerIndex": 0,
        "idealTime": {
            "beginner": 300,
            "intermediate": 120,
            "experienced": 120
        },
        "category": "Geometry",
        "tags": ["Area", "Rectangle", "Right Triangle", "Similarity", "Pythagorean Theorem"],
        "coreIdeas": "The area is determined by utilizing similarity between triangles and properties derived from a right triangle formed in the figure.",
        "nonObviousTransitions": "Identifying the similar triangles (e.g., $\\triangle ABC$ and $\\triangle EDB$).",
        "techniques": "Utilize properties of similar triangles for an algebraic context (Pythagorean theorem.)",
        "errorProneSteps": "Incorrectly simplifying the equation received from similar triangles.",
        "solution": "In the figure below, $ABEF$ is a rectangle, $\\overline{AD} \\perp \\overline{DE}$, $AF=7$, $AB=1$, and $AD=5$.  What is the area of $\\triangle ABC$?",
        "options": [
            "3/8",
            "4/9",
            "1/8*sqrt(13)",
            "7/15",
            "1/8*sqrt(15)"
        ]
    },
    {
        "id": "AMC10A_2025_P16",
        "contest": "AMC 10A 2025",
        "problemNumber": 16,
        "difficulty": 40,
        "answerIndex": 3,
        "idealTime": {
            "beginner": 300,
            "intermediate": 180,
            "experienced": 60
        },
        "category": "Combinatorics",
        "tags": ["Probability", "Expected Value", "Casework", "Partitioning"],
        "coreIdeas": "The expected value is calculated by systematically using casework to identify every possible distribution of the three coins into three jars and then applying the formula for expected value to the maximum count in a jar.",
        "nonObviousTransitions": "Correctly identifying all partitions of the three coins into three jars (e.g., 3-0-0, 2-1-0, 1-1-1).",
        "techniques": "Using casework to find an expected value.",
        "errorProneSteps": "Incorrectly determining the number of possibilities for a case. Incorrectly defining the random variable (maximum number of coins in a jar).",
        "solution": "There are three jars. Each of three coins is placed in one of the three jars, chosen at random and independently of the placements of the other coins. What is the expected number of coins in a jar with the most coins?",
        "options": [
            "4/3",
            "13/9",
            "5/3",
            "17/9",
            "2"
        ]
    },
    {
        "id": "AMC10A_2025_P17",
        "contest": "AMC 10A 2025",
        "problemNumber": 17,
        "difficulty": 36,
        "answerIndex": 4,
        "idealTime": {
            "beginner": 360,
            "intermediate": 180,
            "experienced": 60
        },
        "category": "Number Theory",
        "tags": ["Modular Arithmetic", "Divisibility", "GCD", "Euclidean Algorithm"],
        "coreIdeas": "The strategy involves applying modular arithmetic to reformulate the remainder conditions as statements of divisibility, leading to the use of the Euclidean algorithm to find the necessary greatest common divisor $N$.",
        "nonObviousTransitions": "Reinterpreting the remainder condition as divisibility conditions: $N | (273436 - 16)$ and $N | (272760 - 15)$.",
        "techniques": "When the problem reduces to a greatest common divisor of big numbers, apply the Euclidean algorithm. Identifying the remainder to divisibility conversion.",
        "errorProneSteps": "Simplifying the greatest common divisor incorrectly. Forgetting the condition that $N$ must be greater than the remainder ($\min(15, 16) = 16$).",
        "solution": "Let $N$ be the unique positive integer such that dividing $273436$ by $N$ leaves a remainder of $16$ and dividing $272760$ by $N$ leaves a remainder of $15$. What is the tens digit of $N$?",
        "options": [
            "0",
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        "id": "AMC10A_2025_P18",
        "contest": "AMC 10A 2025",
        "problemNumber": 18,
        "difficulty": 61,
        "answerIndex": 1,
        "idealTime": {
            "beginner": 300,
            "intermediate": 120,
            "experienced": 60
        },
        "category": "Algebra",
        "tags": ["Polynomials", "Roots", "Vieta's Formulas", "Harmonic Mean", "Series"],
        "coreIdeas": "Employing Vieta's formulas to find the sum of the reciprocals of the roots for each quadratic factor.",
        "nonObviousTransitions": "The sum of the reciprocals of the roots of $ax^2+bx+c=0$ is $-b/c$.",
        "techniques": "Treat each factor separately, computing the desired sum in parts.",
        "errorProneSteps": "Attempting to expand the polynomial and directly use Vieta's formulas on the entire polynomial. Arithmetic error in summing the series.",
        "solution": "The $\\textit{harmonic mean}$ of a collection of numbers is the reciprocal of the arithmetic mean of the reciprocals of the numbers in the collection. For example, the harmonic mean of 4, 4, and 5 is $$\\frac{1}{\\frac{1}{3}(\\frac{1}{4}+\\frac{1}{4}+\\frac{1}{5})}=\\frac{30}{7}$$. What is the harmonic mean of all the real roots of the 4050th degree polynomial $$\\prod_{k=1}^{2025} (kx^2-4x-3) = (x^2-4x-3)(2x^2-4x-3)(3x^2-4x-3)\\dots (2025x^2-4x-3) ?$$",
        "options": [
            "-5/3",
            "-3/2",
            "-6/5",
            "-5/6",
            "-2/3"
        ]
    },
    {
        "id": "AMC10A_2025_P19",
        "contest": "AMC 10A 2025",
        "problemNumber": 19,
        "difficulty": 48,
        "answerIndex": 0,
        "idealTime": {
            "beginner": 480,
            "intermediate": 240,
            "experienced": 120
        },
        "category": "Algebra",
        "tags": ["Sequences and Series", "Pattern Recognition", "Pascal's Triangle", "Binomial Coefficients"],
        "coreIdeas": "The solution requires pattern recognition of the array's construction, recognizing that the row sums follow a geometric sequence.",
        "nonObviousTransitions": "Recognizing that the numbers in the $n$-th row are generated by the coefficients of a polynomial, which leads to the row sum being a geometric progression.",
        "techniques": "Pattern recognition of the geometrically increasing row sums; inductive reasoning.",
        "errorProneSteps": "Off-by-one error when finding the desired row. Improperly computing the $k$-th term of the sequence as a linear combination of the top row's elements using binomial coefficients.",
        "solution": "An array of numbers is constructed beginning with the numbers $-1\\quad3\\quad1$ in the top row. Each adjacent pair of numbers is summed to produce a number in the next row. Each row begins and ends with $-1$ and $1$, respectively. $$\\large{-1}\\qquad\\large{3}\\qquad\\large{1}$$ $$\\large{-1}\\qquad\\large{2}\\qquad\\large{4}\\qquad\\large{1}$$ $$\\large{-1}\\qquad\\large{1}\\qquad\\large{6}\\qquad\\large{5}\\qquad\\large{1}$$ If the process continues, one of the rows will sum to $12,288$. In that row, what is the third number from the left?",
        "options": [
            "-29",
            "-21",
            "-14",
            "-8",
            "-3"
        ]
    },
    {
        "id": "AMC10A_2025_P20",
        "contest": "AMC 10A 2025",
        "problemNumber": 20,
        "difficulty": 84,
        "answerIndex": 0,
        "idealTime": {
            "beginner": 2700,
            "intermediate": 1200,
            "experienced": 600
        },
        "category": "Geometry",
        "tags": ["Analytic Geometry", "Circles", "Tangents", "System of Equations", "Radical Simplification"],
        "coreIdeas": "Use the properties of circles and tangents in a coordinate system, typically by setting up similar triangles to create a system of equations and solving the resulting quadratic expression for the variable $g$.",
        "nonObviousTransitions": "Using similar triangles formed by the center of the silo, the points MacDonald and McGregor, and the points of tangency to establish an equation relating the coordinates.",
        "techniques": "Converting the hidden similar triangles setup to algebra; knowing how to effectively solve a complicated system of equations. Using distance from a point to a line formula.",
        "errorProneSteps": "Incorrectly simplifying the final rationalization; incorrectly solving the system; switching the legs up in the similarity condition. Missing the radius of the silo when setting up the tangent equation.",
        "solution": "A silo (right circular cylinder) with diameter 20 meters stands in a field. MacDonald is located 20 meters west and 15 meters south of the center of the silo. McGregor is located 20 meters east and $g > 0$ meters south of the center of the silo. The line of sight between MacDonald and McGregor is tangent to the silo. The value of $g$ can be written as $\\frac{a\\sqrt{b}-c}{d}$, where $a,b,c,$ and $d$ are positive integers, $b$ is not divisible by the square of any prime, and $d$ is relatively prime to the greatest common divisor of $a$ and $c$. What is $a+b+c+d$?",
        "options": [
            "119",
            "120",
            "121",
            "122",
            "123"
        ]
    },
    
    {
        "id": "AMC10A_2025_P21",
        "contest": "AMC 10A 2025",
        "problemNumber": 21,
        "difficulty": 43,
        "answerIndex": 2,
        "idealTime": {
            "beginner": 600,
            "intermediate": 360,
            "experienced": 240
        },
        "category": "Combinatorics & Number Theory",
        "tags": ["Set Theory", "Sum-Free Set", "Construction", "Maximization"],
        "coreIdeas": "Maximizing the size of a sum-free set by constructing the set strategically and proving the optimality of that construction.",
        "nonObviousTransitions": "N/A",
        "techniques": "Construct a set that you know works, and convince yourself that you cannot go higher.",
        "errorProneSteps": "Forgetting that the condition holds when the numbers are equal.",
        "solution": "A set of numbers is called $sum$-$free$ if whenever $x$ and $y$ are (not necessarily distinct) elements of the set, $x+y$ is not an element of the set. For example, $\{1,4,6\}$ and the empty set are sum-free, but $\{2,4,5\}$ is not. What is the greatest possible number of elements in a sum-free subset of $\{1,2,3,...,20\}$?",
        "options": [
            "8",
            "9",
            "10",
            "11",
            "12"
        ]
    },
    {
        "id": "AMC10A_2025_P22",
        "contest": "AMC 10A 2025",
        "problemNumber": 22,
        "difficulty": 68,
        "answerIndex": 4,
        "idealTime": {
            "beginner": "N/A",
            "intermediate": "N/A",
            "experienced": 480
        },
        "category": "Geometry",
        "tags": ["Circles", "Tangent Circles", "Descartes' Theorem"],
        "coreIdeas": "The solution is a direct application of the Descartes' Kissing Circles Theorem, which relates the curvatures of four mutually externally tangent circles.",
        "nonObviousTransitions": "The difficulty is often the lack of knowledge of Descartes' Theorem.",
        "techniques": "Whenever you have tangent circles, always connect their centers.",
        "errorProneSteps": "Forgetting to take the reciprocal in Descartes Kissing Circle Theorem or falling into a trigonometric dead end.",
        "solution": "A circle of radius $r$ is surrounded by three circles, whose radii are 1, 2, and 3, all externally tangent to the inner circle and externally tangent to each other.  What is $r$?",
        "options": [
            "1/4",
            "6/23",
            "3/11",
            "5/17",
            "3/10"
        ]
    },
    {
        "id": "AMC10A_2025_P23",
        "contest": "AMC 10A 2025",
        "problemNumber": 23,
        "difficulty": 72,
        "answerIndex": 2,
        "idealTime": {
            "beginner": "would not solve",
            "intermediate": 600,
            "experienced": 300
        },
        "category": "Geometry",
        "tags": ["Triangle", "Cevians", "Angle Bisector", "Altitude", "Length Chasing", "Coordinate Geometry"],
        "coreIdeas": "The problem requires length chasing to find the distance $BP$, where $P$ is the intersection of two different types of cevians, an angle bisector and an altitude.",
        "nonObviousTransitions": "N/A",
        "techniques": "Employ a coordinate system when dealing with unusual cevians or apply another concept such as mass points.",
        "errorProneSteps": "N/A",
        "solution": "Triangle $\\triangle ABC$ has side lengths $AB = 80$, $BC = 45$, and $AC = 75$. The bisector of $\\angle B$ and the altitude to side $\\overline{AB}$ intersect at point $P.$ What is $BP$?",
        "options": [
            "18",
            "19",
            "20",
            "21",
            "22"
        ]
    },
    {
        "id": "AMC10A_2025_P24",
        "contest": "AMC 10A 2025",
        "problemNumber": 24,
        "difficulty": 91,
        "answerIndex": 4,
        "idealTime": {
            "beginner": "would not solve",
            "intermediate": 600,
            "experienced": 240
        },
        "category": "Combinatorics",
        "tags": ["Counting", "Permutations", "Digit Restrictions", "Bijective Mapping"],
        "coreIdeas": "Interpreting the adjacency condition as a structural constraint (mountain shape), which simplifies the counting of valid permutations of the digits, and finishing with the binomial theorem.",
        "nonObviousTransitions": "The crucial non-obvious step is realizing that the condition implies a single-peaked structure, allowing for a combinatorial approach (e.g., using $\\sum_{k=1}^9 k \\cdot 2^{k-1}$).",
        "techniques": "Interpret the condition as a \"mountain,\" with the largest number at the peak and the smallest numbers on the edges. Once you achieve the desired sum, the binomial theorem can be applied to finish the problem.",
        "errorProneSteps": "Forgetting to divide the sum by $2$ when the binomial theorem is applied.",
        "solution": "Call a positive integer $\\textit{fair}$ if no digit is used more than once, it has no 0s, and no digit is adjacent to two greater digits. For example, $196$, $23$, and $12463$ are fair, but $1546$, $320$, and $34321$ are not fair. How many fair positive integers are there?",
        "options": [
            "511",
            "2584",
            "9841",
            "17711",
            "19682"
        ]
    },
    {
        "id": "AMC10A_2025_P25",
        "contest": "AMC 10A 2025",
        "problemNumber": 25,
        "difficulty": 66,
        "answerIndex": 0,
        "idealTime": {
            "beginner": "would not solve",
            "intermediate": 360,
            "experienced": 180
        },
        "category": "Geometry",
        "tags": ["Geometric Probability", "Square", "Inequalities", "Area Calculation"],
        "coreIdeas": "Solving a geometric probability problem by determining the areas of the regions in the square where the length $\\overline{AP}$ is neither the shortest nor the longest side of $\\triangle APB$.",
        "nonObviousTransitions": "The condition of one side not being the shortest or longest corresponds to a set of inequalities that define boundaries in the square, which are typically arcs or line segments.",
        "techniques": "Splitting the problem into two cases of when $BP$ or $AB$ are the shortest side lengths, and adding the areas of each region together.",
        "errorProneSteps": "Forgetting to subtract an extra constant when calculating the probability.",
        "solution": "A point $P$ is chosen at random inside square $ABCD$. The probability that $\\overline{AP}$ is neither the shortest nor the longest side of $\\triangle APB$ can be written as $\\frac{a + b \\pi - c \\sqrt{d}}{e}$, where $a, b, c, d,$ and $e$ are positive integers, $\\text{gcd}(a, b, c, e) = 1$, and $d$ is not divisible by the square of a prime. What is $a+b+c+d+e$?",
        "options": [
            "25",
            "26",
            "27",
            "28",
            "29"
        ]
    }
]
    // Add P10-P25 data here when available
];

// --- STATE ---
let currentCategory = 'All';
let currentSort = 'difficulty-desc';
let minDifficulty = 0; // NEW
let maxDifficulty = 100; // NEW
let solvedProblems = JSON.parse(localStorage.getItem('invexic_solved')) || [];
const minRangeInput = document.getElementById('minRange');
const maxRangeInput = document.getElementById('maxRange');
const minValDisplay = document.getElementById('minValDisplay');
const maxValDisplay = document.getElementById('maxValDisplay');
const sliderTrack = document.getElementById('sliderTrack');

// --- DIFFICULTY COLOR MAPPING ---
const difficultyColors = [
    { max: 10, color: '#00BFFF' }, 
    { max: 20, color: '#00FFFF' }, 
    { max: 35, color: '#7CFC00' }, 
    { max: 50, color: '#FFD700' }, 
    { max: 65, color: '#FF8C00' }, 
    { max: 80, color: '#FF6347' }, 
    { max: 90, color: '#FF0000' }, 
    { max: 100, color: '#FF00FF' } 
];

function getDifficultyColor(difficulty) {
    for (const range of difficultyColors) {
        if (difficulty <= range.max) return range.color;
    }
    return '#333';
}

// --- DOM ELEMENTS ---
const gridEl = document.getElementById('problemGrid');
const overlayEl = document.getElementById('detailOverlay');
const contentEl = document.getElementById('detailContent');
const categoryBtns = document.querySelectorAll('.filter-tag');
// Note: You have two elements with ID 'sortSelect' in HTML. 
// This grabs the first one (sidebar). See HTML fix below.
const sortSelect = document.getElementById('sortSelect'); 
const closeBtn = document.getElementById('closeDetail');

// --- ANSWER CHECKING LOGIC ---
function handleAnswerClick(event) {
    const clickedOption = event.currentTarget;
    
    // Prevent clicking if already answered
    if (document.getElementById('optionsGrid').classList.contains('answered')) return;

    const problemId = clickedOption.dataset.problemId;
    const selectedIndex = parseInt(clickedOption.dataset.index);
    const problem = problems.find(p => p.id === problemId);

    if (!problem) return;

    const isCorrect = selectedIndex === problem.answerIndex;

    // Update UI
    document.querySelectorAll('.opt-box').forEach((opt, i) => {
        opt.classList.add('disabled');
        
        // Correct Answer Styling
        if (i === problem.answerIndex) {
            opt.classList.add('correct');
            // FIX: Removed the duplicate lines here
            opt.innerHTML += `<span class="feedback-icon"><i data-lucide="check-circle"></i></span>`;
            
            // --- SAVING LOGIC ---
            // Only save if the user actually clicked the CORRECT answer
            if (isCorrect) { 
                if (!solvedProblems.includes(problemId)) {
                    solvedProblems.push(problemId);
                    localStorage.setItem('invexic_solved', JSON.stringify(solvedProblems));
                    renderGrid(); 
                }
            }
        } 
        // User's Wrong Choice Styling
        else if (i === selectedIndex && !isCorrect) {
            opt.classList.add('incorrect');
            opt.innerHTML += `<span class="feedback-icon"><i data-lucide="x-circle"></i></span>`;
        }
    });

    document.getElementById('optionsGrid').classList.add('answered');
    lucide.createIcons();
}
// --- INIT ---
function init() {
    // Initialize slider visual
    fillSlider(); 
    renderGrid();
    
    // Existing Listeners...
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 1. Remove 'active' class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // 2. Add 'active' class to the clicked button
            // Use currentTarget to ensure we get the button, not the text inside
            const btn = e.currentTarget; 
            btn.classList.add('active');
            
            // 3. Update State
            currentCategory = btn.dataset.val;
            
            // 4. Re-render
            renderGrid();
        });
    });
    
    if(sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderGrid();
        });
    }

    closeBtn.addEventListener('click', closeDetail);

    // --- NEW: Slider Listeners ---
    minRangeInput.addEventListener('input', () => {
        handleSliderLogic();
        renderGrid();
    });
    maxRangeInput.addEventListener('input', () => {
        handleSliderLogic();
        renderGrid();
    });
}
function handleSliderLogic() {
    let minVal = parseInt(minRangeInput.value);
    let maxVal = parseInt(maxRangeInput.value);

    // Prevent crossing (Min cannot be greater than Max)
    // We create a gap of 5 to prevent them from sticking perfectly together
    if (maxVal - minVal < 5) {
        if (event.target === minRangeInput) {
            minRangeInput.value = maxVal - 5;
        } else {
            maxRangeInput.value = minVal + 5;
        }
    }

    // Update State
    minDifficulty = parseInt(minRangeInput.value);
    maxDifficulty = parseInt(maxRangeInput.value);

    // Update Text Display
    minValDisplay.textContent = minDifficulty;
    maxValDisplay.textContent = maxDifficulty;

    // Update visual track color
    fillSlider();
}

function fillSlider() {
    const range = 100; // Max value of slider
    const percent1 = (minRangeInput.value / range) * 100;
    const percent2 = (maxRangeInput.value / range) * 100;
    
    // This creates a gradient: Grey -> Blue -> Grey
    // effectively highlighting only the selected area
    sliderTrack.style.background = `linear-gradient(to right, #444 ${percent1}%, #00BFFF ${percent1}%, #00BFFF ${percent2}%, #444 ${percent2}%)`;
}

// --- RENDER GRID (LIST VIEW) ---
// --- RENDER GRID (LIST VIEW) ---
function renderGrid() {
    gridEl.innerHTML = '';

    // 1. Filter
    let filtered = problems.filter(p => {
        const catMatch = currentCategory === 'All' || p.category.includes(currentCategory);
        const diffMatch = p.difficulty >= minDifficulty && p.difficulty <= maxDifficulty;
        return catMatch && diffMatch;
    });

    // 2. Sort
    filtered.sort((a, b) => {
        if (currentSort === 'difficulty-desc') return b.difficulty - a.difficulty;
        if (currentSort === 'difficulty-asc') return a.difficulty - b.difficulty;
        if (currentSort === 'time') return a.idealTime.experienced - b.idealTime.experienced;
        return 0;
    });

    // 3. Build HTML
    filtered.forEach(p => {
        const row = document.createElement('div');
        row.className = 'problem-row';
        row.onclick = () => openDetail(p);

        let diffColor = getDifficultyColor(p.difficulty);
        
        // CHECK IF SOLVED
        const isSolved = solvedProblems.includes(p.id);
        const statusClass = isSolved ? 'status-circle solved' : 'status-circle'; 

        // FIX: Removed stray backticks and fixed structure
        row.innerHTML = `
            <div class="col-status">
                <div class="${statusClass}"></div>
            </div>
            <div class="col-source">
                ${p.contest}
            </div>
            <div class="col-title">
                Problem ${p.problemNumber}: ${p.category}
            </div>
            <div class="col-difficulty">
                <span class="difficulty-badge" style="background-color: ${diffColor};">
                    ${p.difficulty}
                </span>
            </div>
        `;
        gridEl.appendChild(row);
    });
    
    lucide.createIcons();
}
// --- OPEN DETAIL VIEW ---
function openDetail(p) {
    // 1. Generate Options HTML
    let optionsHtml = '';
    if (p.options && Array.isArray(p.options) && p.options.length > 0) {
        optionsHtml = p.options.map((opt, i) => 
            `<div class="opt-box" data-index="${i}" data-problem-id="${p.id}">
                <span class="opt-label">${String.fromCharCode(65+i)}</span>
                <span>${opt}</span>
            </div>`
        ).join('');
    } else {
        optionsHtml = '<div class="opt-box disabled" style="grid-column: 1/-1;">No options available</div>';
    }
    
    // 2. Generate Concepts HTML
    const conceptsHtml = p.tags.map(c => `<span class="concept-tag">${c}</span>`).join('');
    const diffColor = getDifficultyColor(p.difficulty);

    // 3. Inject Content
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
            <div class="question-box">
                ${p.solution}
            </div>

            <div id="optionsGrid" class="options-grid">
                ${optionsHtml}
            </div>

            <div class="analysis-dashboard">
                <div class="analysis-col">
                    <div class="info-card">
                        <h4><i data-lucide="clock"></i> Ideal Time</h4>
                        
                        <div class="time-stat">
                            <div class="time-stat-row"><span>Experienced</span> <span>${p.idealTime.experienced}s</span></div>
                            <div class="progress-track"><div class="progress-bar" style="width: 20%; background: #20C997"></div></div>
                        </div>
                        <div class="time-stat">
                            <div class="time-stat-row"><span>Intermediate</span> <span>${p.idealTime.intermediate}s</span></div>
                            <div class="progress-track"><div class="progress-bar" style="width: 50%; background: #19A4FF"></div></div>
                        </div>
                        <div class="time-stat">
                            <div class="time-stat-row"><span>Beginner</span> <span>${p.idealTime.beginner}s</span></div>
                            <div class="progress-track"><div class="progress-bar" style="width: 80%; background: #FFD700"></div></div>
                        </div>
                    </div>

                    <div class="info-card">
                        <h4><i data-lucide="book-open"></i> Concepts</h4>
                        <div style="display:flex; flex-wrap:wrap; gap:5px;">${conceptsHtml}</div>
                    </div>
                </div>

                <div class="analysis-col">
                    <div class="info-card">
                        <h4><i data-lucide="lightbulb"></i> Core Idea</h4>
                        <div class="text-content">${p.coreIdeas}</div>
                    </div>
                    
                    <div class="info-card trap-card">
                        <h4><i data-lucide="alert-triangle"></i> Common Trap</h4>
                        <div class="text-content">${p.errorProneSteps}</div>
                    </div>

                    <div class="info-card">
                        <h4><i data-lucide="code"></i> Technique</h4>
                        <div class="text-content">${p.techniques}</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    overlayEl.classList.remove('hidden');
    lucide.createIcons();
    
    // Re-render MathJax
    if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }

    // Re-attach click listeners for options
    document.querySelectorAll('.opt-box').forEach(opt => {
        opt.addEventListener('click', handleAnswerClick);
    });
}

function closeDetail() {
    overlayEl.classList.add('hidden');
}

// Start
init();

