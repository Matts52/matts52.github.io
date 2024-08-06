
async function generateProjectTiles() {
  // Fetch project data from JSON file
  const response = await fetch('data/projects.json');
  const projects = await response.json();

  // Get the container element
  const container = document.getElementById("projects");

  // Create the projects section HTML
  const projectsHTML = `
      <div class="container">
        <h2 class="mb-4">Projects</h2>
        <div class="row">
          ${projects.map(project => `
            <div class="col-md-6 mb-4">
              <div class="card h-100">
                <div class="position-relative">
                  <a href="${project.githubLink}" class="position-absolute top-0 start-100 translate-middle p-3" style="z-index: 1;">
                    <img src="assets/icons/github.svg" class="github-icon" alt="GitHub icon" width="40">
                  </a>
                  <img class="card-img-top-large" src="${project.imageSrc}" alt="${project.title}">
                </div>
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${project.title}</h5>
                  <div class="flex-grow-1">
                    <p class="card-text">${project.description}</p>
                  </div>
                  <div class="mt-auto">
                    <a href="${project.demoLink}" class="btn btn-primary card-btn">Show Me</a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
  `;

  // Set the innerHTML of the container
  container.innerHTML = projectsHTML;
}



async function generatePaperTiles() {
  // Fetch paper data from JSON file
  const response = await fetch('data/papers.json');
  const papers = await response.json();

  // Get the container element
  const container = document.querySelector("#papers");

  // Create the papers section HTML
  const papersHTML = `
    <div class="container">
      <h2 class="mb-4">Papers</h2>
      <div class="row">
        ${papers.map(paper => `
          <div class="col-md-6 mb-4">
            <div class="card h-100">
              <div class="position-relative">
                <a href="${paper.githubLink}" class="position-absolute top-0 start-100 translate-middle p-3" style="z-index: 1;">
                  <img src="assets/icons/github.svg" class="github-icon" alt="GitHub icon" width="40">
                </a>
                <img class="card-img-top-large" src="${paper.imageSrc}" alt="${paper.title}">
              </div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${paper.title}</h5>
                <div class="flex-grow-1">
                  <p class="card-text">${paper.description}</p>
                </div>
                <div class="mt-auto">
                  <a href="${paper.pdfLink}" class="btn btn-primary card-btn">Read</a>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Set the innerHTML of the container
  container.innerHTML = papersHTML;
}



async function generateEducationTiles() {
  // Fetch paper data from JSON file
  const response = await fetch('data/education.json');
  const education = await response.json();


  // Get the container element
  const container = document.querySelector("#education");

  // Create the education section HTML
  const educationHTML = `
  <div class="container">
    <h2 class="mb-4">Education</h2>
    <div class="row align-items-stretch">
      ${education.map(edu => `
        <div class="col-md-6 mb-4">
        <div class="card h-100 education-card">
        <div class="card-body">
          <img class="card-img-top" src="${edu.logoSrc}" alt="${edu.institution}">
          <h4 class="card-title">${edu.degree}</h4>
          <p class="card-subtitle mb-2 text-muted">${edu.institution}</p>
          <p class="card-text">${edu.description}</p>
          <p class="card-text"><u>Course Highlights</u></p>
          <ul class="card-list">
            ${edu.courseHighlights ? edu.courseHighlights.map(highlight => `<li>${highlight}</li>`).join('') : ''}
          </ul>
          ${edu.courseHighlightsEconomics ? `
            <p class="card-text"><u>Course Highlights (Economics)</u></p>
            <ul class="card-list">
              ${edu.courseHighlightsEconomics.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
          ` : ''}
          ${edu.courseHighlightsComputerScience ? `
            <p class="card-text"><u>Course Highlights (Computer Science)</u></p>
            <ul class="card-list">
              ${edu.courseHighlightsComputerScience.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
          ` : ''}
          </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

  // Set the innerHTML of the container
  container.innerHTML = educationHTML;
}


async function generateExperienceTiles() {
  // Define an array of experience data
  const response = await fetch('data/experience.json');
  const experience = await response.json();

  // Get the container element
  const container = document.querySelector("#experience");

  // Create the experience section HTML
  const experienceHTML = `
    <div class="container">
      <h2 class="mb-4">Experience</h2>
      <div class="row">
        ${experience.map(exp => `
          <div class="col-md-6 mb-4">
            <div class="card h-100">
              <hr style="opacity:0.0">
              <div class="card-body">
                <img class="card-img-top-small" src="${exp.logoSrc}" alt="${exp.company}">
                <hr style="opacity:0.0"><hr style="opacity:0.0">
                <h4 class="card-title">${exp.position}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${exp.company}</h5>
                <p class="card-text">${exp.date}</p>
                <br>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Set the innerHTML of the container
  container.innerHTML = experienceHTML;
}



async function generateContactTiles() {
  // Define an array of contact data
  const response = await fetch('data/contact.json');
  const contacts = await response.json();

  const container = document.querySelector("#contact");

  // Create the contact section HTML
  const contactHTML = `
    <div class="container">
      <h2 class="mb-4">Get in Touch</h2>
      <div class="row">
        ${contacts.map(contact => `
          <div class="col-md-4 mb-4">
            <a href="${contact.link}" class="card-link">
              <div class="card card-button h-50">
                <img class="card-img-top" src="${contact.iconSrc}" alt="${contact.title}">
                <div class="card-body">
                  <h4 class="card-title">${contact.title}</h4>
                </div>
              </div>
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Set the innerHTML of the container
  container.innerHTML = contactHTML;
}











