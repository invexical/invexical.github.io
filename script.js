const problems = [
    { title: "AMC 10 2020 #21", difficulty: 65, tags: ["geometry"] },
    { title: "USACO Silver - Stuck in a Rut", difficulty: 54, tags: ["simulation"] },
    { title: "AIME 2022 #13", difficulty: 78, tags: ["algebra"] }
];

// Display them
const container = document.getElementById("problem-list");

problems.forEach(p => {
    const item = document.createElement("div");
    item.className = "problem";
    item.innerHTML = `<strong>${p.title}</strong> — Difficulty: ${p.difficulty} <br> Tags: ${p.tags.join(", ")}`;
    container.appendChild(item);
});
