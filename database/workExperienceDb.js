const db = new PouchDB("experience_db");

// Insert experience entries once (run only once or add a check)
async function seedExperience() {
  const existing = await db.allDocs();
  if (existing.total_rows > 0) return; // prevent duplicates

  const experiences = [
    {
      _id: "antino",
      company: "Antino",
      link: "https://www.antino.com/",
      duration: "Jun 2024 - Current",
      description: `
      
    `,
    },
    {
      _id: "celebal",
      company: "Celebal Technologies",
      link: "https://celebaltech.com/",
      duration: "Aug 2022 - Present",
      description: `A service based startup reaching great heights, I am handling
        complete bot development, Azure and deployment for our apps like merchant based
        customer support, apis as service, central monitor and logs across azure application
        insight, node servers and internal product of company. On tech stack we are using
        Typescript, Nodejs, Azure devops, socket-io, rabbitMQ, Redis and dockers.`,
    },
  ];

  for (let exp of experiences) {
    await db.put(exp);
  }
}

// Render experience from DB
async function renderExperience() {
  const container = document.getElementById("experienceList");
  container.innerHTML = "";

  const result = await db.allDocs({ include_docs: true });
  result.rows.forEach((row) => {
    const doc = row.doc;

    const div = document.createElement("div");
    div.className = "experience-container";
    div.innerHTML = `
      <div class="ball-line">
        <div class="ball"></div>
        <div class="line"></div>
      </div>
      <div class="experience">
        <div class="experience-head" onclick="launch_url('${doc.link}')">${doc.company}</div>
        <div class="experience-time">${doc.duration}</div>
        <p class="experience-description">${doc.description}</p>
      </div>
    `;

    container.appendChild(div);
  });
}

// External link opener
function launch_url(url) {
  window.open(url, "_blank");
}

// Run on page load
seedExperience().then(renderExperience);
