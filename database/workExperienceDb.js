const db = new PouchDB('experience_db');

// Insert experience entries once (run only once or add a check)
async function seedExperience() {
  const existing = await db.allDocs();
  if (existing.total_rows > 0) return; // prevent duplicates

  const experiences = [
    {
      _id: 'i2pify',
      company: 'I2pify',
      link: 'https://www.anakin.company/',
      duration: 'Jan 2024 - April 2024',
      description: `I contributed to two client-side projects. In the first project,
        I established a Razorpay payment gateway for Restaurant and Events payments,
        along with setting up a payments dashboard for restaurant payments and settlements.
        In the second project, a fintech initiative, I initiated payments using UPI and
        implemented webhooks for payments via multiple banks. Additionally, I set up
        microservices for various payment services, including UPI, cards, net banking, and banks.`
    },
    {
      _id: 'celebal',
      company: 'Celebal Technologies',
      link: 'https://celebaltech.com/',
      duration: 'Aug 2022 - Present',
      description: `A service based startup reaching great heights, I am handling
        complete bot development, Azure and deployment for our apps like merchant based
        customer support, apis as service, central monitor and logs across azure application
        insight, node servers and internal product of company. On tech stack we are using
        Typescript, Nodejs, Azure devops, socket-io, rabbitMQ, Redis and dockers.`
    }
  ];

  for (let exp of experiences) {
    await db.put(exp);
  }
}

// Render experience from DB
async function renderExperience() {
  const container = document.getElementById('experienceList');
  container.innerHTML = '';

  const result = await db.allDocs({ include_docs: true });
  result.rows.forEach(row => {
    const doc = row.doc;

    const div = document.createElement('div');
    div.className = 'experience-container';
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
  window.open(url, '_blank');
}

// Run on page load
seedExperience().then(renderExperience);
