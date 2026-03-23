
async function generateProjectTiles() {
  const response = await fetch('data/projects.json');
  const projects = await response.json();
  const container = document.getElementById("projects");
  const visibleProjects = projects.filter(project => project.display === "true");

  container.innerHTML = `
    <div class="container">
      <h2>Projects</h2>
      <div class="grid">
        ${visibleProjects.map(project => `
          <div class="card">
            <div class="card__img-wrapper">
              <a href="${project.githubLink}" target="_blank">
                <img src="assets/icons/github.svg" class="github-icon" alt="GitHub">
              </a>
              <img class="card__img--large" src="${project.imageSrc}" alt="${project.title}">
            </div>
            <div class="card__body">
              <h4 class="card__title">${project.title}</h4>
              <p class="card__text">${project.description}</p>
              <div class="card__actions">
                <a href="${project.demoLink}" class="btn-accent" target="_blank">Show Me</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}


async function generatePaperTiles() {
  const response = await fetch('data/papers.json');
  const papers = await response.json();
  const container = document.querySelector("#papers");

  container.innerHTML = `
    <div class="container">
      <h2>Papers</h2>
      <div class="grid">
        ${papers.map(paper => `
          <div class="card">
            <div class="card__img-wrapper">
              <a href="${paper.githubLink}" target="_blank">
                <img src="assets/icons/github.svg" class="github-icon" alt="GitHub">
              </a>
              <img class="card__img--large" src="${paper.imageSrc}" alt="${paper.title}">
            </div>
            <div class="card__body">
              <h4 class="card__title">${paper.title}</h4>
              <p class="card__text">${paper.description}</p>
              <div class="card__actions">
                <a href="${paper.pdfLink}" class="btn-accent" target="_blank">Read</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}


async function generateEducationTiles() {
  const response = await fetch('data/education.json');
  const education = await response.json();
  const container = document.querySelector("#education");

  container.innerHTML = `
    <div class="container">
      <h2>Education</h2>
      <div class="grid">
        ${education.map(edu => `
          <div class="card">
            <div class="card__body">
              <img class="card__img" src="${edu.logoSrc}" alt="${edu.institution}">
              <h4 class="card__title">${edu.degree}</h4>
              <p class="card__subtitle">${edu.institution}</p>
              <p class="card__text">${edu.description}</p>
              <p class="card__text" style="font-weight:600; margin-bottom: 0.5rem;"><u>Course Highlights</u></p>
              <ul class="card__list">
                ${edu.courseHighlights ? edu.courseHighlights.map(h => `<li>${h}</li>`).join('') : ''}
              </ul>
              ${edu.courseHighlightsEconomics ? `
                <p class="card__text" style="font-weight:600; margin-bottom: 0.5rem; margin-top: 0.5rem;"><u>Course Highlights (Economics)</u></p>
                <ul class="card__list">
                  ${edu.courseHighlightsEconomics.map(h => `<li>${h}</li>`).join('')}
                </ul>
              ` : ''}
              ${edu.courseHighlightsComputerScience ? `
                <p class="card__text" style="font-weight:600; margin-bottom: 0.5rem; margin-top: 0.5rem;"><u>Course Highlights (Computer Science)</u></p>
                <ul class="card__list">
                  ${edu.courseHighlightsComputerScience.map(h => `<li>${h}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}


async function generateExperienceTiles() {
  const response = await fetch('data/experience.json');
  const experience = await response.json();
  const container = document.querySelector("#experience");

  container.innerHTML = `
    <div class="container">
      <h2>Experience</h2>
      <div class="timeline">
        ${experience.map((exp, i) => {
          const side = i % 2 === 0 ? 'left' : 'right';
          const card = `
            <div class="timeline-card">
              <img class="timeline-logo" src="${exp.logoSrc}" alt="${exp.company}">
              <h4 class="card__title">${exp.position}</h4>
              <p class="card__subtitle">${exp.company}</p>
              <p class="timeline-date">${exp.date}</p>
              ${Array.isArray(exp.description)
                ? `<ul class="card__list timeline-description">
                     ${exp.description.map(pt => `<li>${pt}</li>`).join('')}
                   </ul>`
                : `<p class="card__text timeline-description">${exp.description}</p>`
              }
            </div>
          `;
          return `
            <div class="timeline-entry timeline-entry--${side}">
              <div class="timeline-left">${side === 'left' ? card : ''}</div>
              <div class="timeline-dot-wrapper"><div class="timeline-dot"></div></div>
              <div class="timeline-right">${side === 'right' ? card : ''}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}


async function generateContactTiles() {
  const response = await fetch('data/contact.json');
  const contacts = await response.json();
  const container = document.querySelector("#contact");

  container.innerHTML = `
    <div class="container">
      <h2>Get in Touch</h2>
      <div class="grid-4">
        ${contacts.map(contact => `
          <a href="${contact.link}" class="card-link" target="_blank">
            <div class="card card--clickable contact-card">
              <img class="card__img" src="${contact.iconSrc}" alt="${contact.title}">
              <div class="card__body">
                <h4 class="card__title">${contact.title}</h4>
              </div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}


async function generateArticleTiles() {
  const response = await fetch('data/articles.json');
  const articles = await response.json();
  const visibleMedium = articles.medium.filter(article => article.show);
  const visibleSubstack = articles.substack.filter(article => article.show);
  const container = document.querySelector("#articles");

  container.innerHTML = `
    <div class="container">
      <h2>Articles</h2>
      <div class="articles-grid">
        <div class="card article-card--medium">
          <div class="card__header">
            <img src="assets/icons/new_medium_logo.svg" alt="Medium" class="platform-logo">
            <h4 class="card__title">Medium</h4>
          </div>
          <div class="card__body">
            ${visibleMedium.map(article => `
              <div class="article-item">
                <a href="${article.link}" target="_blank" class="article-link">
                  ${article.title}
                </a>
                <p class="article-desc">${article.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="card article-card--substack">
          <div class="card__header">
            <img src="assets/icons/substack.svg" alt="Substack" class="platform-logo">
            <h4 class="card__title">Substack</h4>
          </div>
          <div class="card__body">
            ${visibleSubstack.map(article => `
              <div class="article-item">
                <a href="${article.link}" target="_blank" class="article-link">
                  ${article.title}
                </a>
                <p class="article-desc">${article.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}
