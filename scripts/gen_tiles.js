
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
      <div class="paper-list">
        ${papers.map((paper, i) => `
          <div class="paper-citation">
            <div class="paper-citation__body">
              <h4 class="paper-citation__title">${paper.title}</h4>
              <p class="paper-citation__tagline">${paper.tagline}</p>
              <div class="paper-citation__tags">
                ${paper.tags.map(t => `<span class="paper-tag">${t}</span>`).join('')}
              </div>
              <div class="paper-citation__links">
                <a href="${paper.pdfLink}" target="_blank">Read PDF</a>
                <span class="paper-citation__sep">·</span>
                <a href="${paper.githubLink}" target="_blank">GitHub</a>
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

  const courseRow = (course) =>
    `<div class="edu-course"><span class="edu-course__name">${course.name}</span><span class="edu-course__grade">${course.grade}</span></div>`;

  container.innerHTML = `
    <div class="container">
      <h2>Education</h2>
      <div class="edu-grid">
        ${education.map(edu => `
          <div class="card edu-card">
            <div class="edu-card__header">
              <img class="edu-card__logo" src="${edu.logoSrc}" alt="${edu.institution}">
              <div class="edu-card__meta">
                <h4 class="edu-card__degree">${edu.degree}</h4>
                <p class="edu-card__institution">${edu.institution}</p>
                <p class="edu-card__date">${edu.date}</p>
              </div>
            </div>
            <div class="edu-card__courses">
              <div class="edu-card__split">
                ${edu.courseGroups.map(group => `
                  <div>
                    <p class="edu-card__label">${group.label}</p>
                    <div class="edu-course-list">
                      ${group.courses.map(courseRow).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
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

  // Group roles by company, preserving first-appearance order
  const groups = [];
  const groupIndex = {};
  experience.forEach(exp => {
    if (groupIndex[exp.company] === undefined) {
      groupIndex[exp.company] = groups.length;
      groups.push({ company: exp.company, logoSrc: exp.logoSrc, roles: [] });
    }
    groups[groupIndex[exp.company]].roles.push(exp);
  });

  container.innerHTML = `
    <div class="container">
      <h2>Experience</h2>
      <div class="exp-list">
        ${groups.map((group, gi) => `
          <div class="exp-group">
            <div class="exp-group__header">
              <img class="exp-group__logo" src="${group.logoSrc}" alt="${group.company}">
              <span class="exp-group__company">${group.company}</span>
            </div>
            <div class="exp-group__roles">
              ${group.roles.map((role, ri) => {
                const bullets = Array.isArray(role.description)
                  ? role.description.map(b => `<li>${b}</li>`).join('')
                  : `<li>${role.description}</li>`;
                const isOpen = gi === 0 && ri === 0;
                return `
                  <div class="exp-role ${isOpen ? 'exp-role--open' : ''}">
                    <button class="exp-role__toggle" aria-expanded="${isOpen}">
                      <span class="exp-role__title">${role.position}</span>
                      <span class="exp-role__date">${role.date}</span>
                      <svg class="exp-role__chevron" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <ul class="exp-role__bullets">${bullets}</ul>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('.exp-role__toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.closest('.exp-role');
      const isOpen = role.classList.toggle('exp-role--open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });
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


async function generateSpeakingTiles() {
  const response = await fetch('data/speaking.json');
  const engagements = await response.json();
  const section = document.querySelector('#speaking');

  const ticketsHTML = engagements.map(e => {
    const links = [
      e.links.eventPage ? `<a href="${e.links.eventPage}" target="_blank" class="btn-ghost btn-sm">Event Page</a>` : '',
      e.links.slides    ? `<a href="${e.links.slides}"    target="_blank" class="btn-ghost btn-sm">Slides</a>`     : '',
      e.links.recording ? `<a href="${e.links.recording}" target="_blank" class="btn-ghost btn-sm">Recording</a>`  : '',
    ].filter(Boolean).join('');

    return `
      <div class="ticket">
        ${e.upcoming ? '<span class="ticket__badge">Coming Soon</span>' : ''}
        <div class="ticket__stub">
          <img src="${e.eventLogo}" alt="${e.event}" class="ticket__stub-logo">
          <div class="ticket__stub-event">${e.event}</div>
          <div class="ticket__stub-meta">${e.date}<br>${e.location}</div>
        </div>
        <div class="ticket__body">
          <div class="ticket__speaker-label">Speaker</div>
          <div class="ticket__title">${e.title}</div>
          <div class="ticket__abstract">${e.abstract}</div>
          <div class="ticket__links">${links}</div>
        </div>
      </div>`;
  }).join('');

  section.innerHTML = `
    <div class="container">
      <h2>Speaking</h2>
      <div class="speaking-list">${ticketsHTML}</div>
    </div>`;
}


async function generateArticleTiles() {
  const response = await fetch('data/articles.json');
  const articles = await response.json();
  const container = document.querySelector("#articles");

  const all = [
    ...articles.medium.filter(a => a.show).map(a => ({ ...a, platform: 'Medium' })),
    ...articles.substack.filter(a => a.show).map(a => ({ ...a, platform: 'Substack' }))
  ].sort((a, b) => {
    if (!a.published_date) return 1;
    if (!b.published_date) return -1;
    return new Date(b.published_date) - new Date(a.published_date);
  });

  const itemHTML = (a) => `
    <a class="ticker-item ticker-item--${a.platform.toLowerCase()}" href="${a.link}" target="_blank" data-desc="${a.description.replace(/"/g, '&quot;')}">
      <span class="ticker-item__badge">${a.platform}</span>
      <span class="ticker-item__title">${a.title}</span>
    </a>
  `;

  const track = all.map(itemHTML).join('');

  container.innerHTML = `
    <div class="container">
      <h2>Articles</h2>
    </div>
    <div class="ticker-wrapper">
      <div class="ticker-track">${track}${track}</div>
      <div class="ticker-tooltip" id="ticker-tooltip"></div>
    </div>
  `;

  const tickerTrack = container.querySelector('.ticker-track');
  const tooltip = container.querySelector('#ticker-tooltip');
  const wrapper = container.querySelector('.ticker-wrapper');

  tickerTrack.querySelectorAll('.ticker-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      tickerTrack.style.animationPlayState = 'paused';
      tooltip.textContent = item.dataset.desc;
      tooltip.classList.add('ticker-tooltip--visible');
    });

    item.addEventListener('mousemove', (e) => {
      const wRect = wrapper.getBoundingClientRect();
      const tipW = 280;
      let left = e.clientX - wRect.left + 16;
      if (left + tipW > wRect.width) left = e.clientX - wRect.left - tipW - 16;
      tooltip.style.left = left + 'px';
      tooltip.style.top = (e.clientY - wRect.top - 72) + 'px';
    });

    item.addEventListener('mouseleave', () => {
      tickerTrack.style.animationPlayState = 'running';
      tooltip.classList.remove('ticker-tooltip--visible');
    });
  });
}
