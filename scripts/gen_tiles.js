
async function generateProjectTiles(){
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



function generatePaperTiles() {
  // Define an array of paper data
  const papers = [
    {
      title: "Bearish or Bullish",
      githubLink: "https://github.com/Matts52/Bearish-or-Bullish",
      imageSrc: "assets/projects/Bearish_or_Bullish.jpg",
      description: "An exploratory analysis of the predictive capacity of Wall Street Journal language attention and sentiment on key market fluctuation indicators. This paper first scraped a vast database of WSJ articles, then built an LDA model for the language used, while using the RoBERTa sentiment transformer to weigh directional attention of topics. Finally a Lasso regression was applied to optimize the bias-variance tradeoff with respect to how many topics to include when predicting movement of market fluctuation indicators.",
      pdfLink: "assets/papers/Bearish_or_Bullish.pdf",
    },
    {
      title: "Money is Motivation",
      githubLink: "https://github.com/Matts52/Money-is-Motivation",
      imageSrc: "assets/projects/Money_is_Motivation.jpg",
      description: "An investigation of the game-level predictive capacity of intrateam salary dispersion. I utilize NBA salary metrics and scrape NBA game minute logs to create measures of per-minute salary dispersion which is then used to predict game-level outcomes using Random Forests. This is all done as a proxy for the future-looking short-term performance of a firm with respect to within company pay distribution.",
      pdfLink: "assets/papers/Money_is_Motivation.pdf",
    },
  ];

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



function generateEducationTiles() {
  // Define an array of education data
  const education = [
    {
      institution: "University of Toronto",
      logoSrc: "assets/companies/utoronto-logo.png",
      degree: "Master of Economics",
      description: "During my time at the University of Toronto pursuing my Master's in Economics, I was fortunate to have the opportunity to learn and grow at a world-class institution. Not only was I able to expand the breadth of my knowledge in economics and related fields, but I was also able to dive more deeply into my research niche of econometric machine learning. One of the highlights of my education was being surrounded by so many other motivated individuals who shared my passion for learning and discovery. Overall, my experience at the University of Toronto was an incredibly rewarding one that has shaped my academic and professional pursuits.",
      courseHighlights: [
        "Economic Machine Learning (A+)",
        "Statistical Methods for Machine Learning and Data Mining: (A)",
        "Computational Statistics: (A-)",
        "Econometrics: (A-)",
      ],
    },
    {
      institution: "University of Saskatchewan",
      logoSrc: "assets/companies/usask-logo.png",
      degree: "Bachelor of Computer Science and Economics",
      description: "During my undergraduate studies, I gained foundational skills in both computer science and economics. The diverse faculty I learned from allowed me to approach concepts from multiple perspectives, shaping and forming my interests in both academia and industry. This experience provided me with a well-rounded education that allowed me to expand my knowledge beyond just the classroom. It was a great opportunity to learn from multiple fields, and this experience provided me with the tools to further my education and career.",
      courseHighlightsEconomics: [
        "Introduction to Empirical Economics (100%)",
        "Intermediate Microeconomics (96%)",
        "Monetary Theory (94%)",
        "Mathematical Introduction to Micro Theory (93%)",
      ],
      courseHighlightsComputerScience: [
        "Information Visualization (95%)",
        "Machines and Algorithms (93%)",
        "Simulation Principles (91%)",
        "Deep Learning (87%)",
      ],
    },
  ];

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


function generateExperienceTiles() {
  // Define an array of experience data
  const experience = [
    {
      company: "7shifts",
      logoSrc: "assets/companies/7shifts_full.svg",
      position: "Product Growth Data Analyst",
      date: "June 2023 - Present",
      description: "During my experience as an analyst focused on product growth, I have had the opportunity to develop a number of interesting skills. Firstly, this role has enabled me to foster my skills in growth experimentation, whether it be through formal or informal studies. Secondly, this position provided my first taste of analytics engineering, and the purpose it serves in a modern data team. Thirdly, I've had the opportunity to apply my skills in advanced modelling to develop deeper appreciation of the issues faced by a scale-up stage tech firm. Lastly, I have been able to drive business value with stakeholders from a variety of domains, including monetization, marketing, sales, engineering, etc."
    },
    {
      company: "University of Saskatchewan",
      logoSrc: "assets/companies/usask-logo.png",
      position: "Sessional Lecturer",
      date: "September 2022 - Present",
      description: "As a sessional lecturer, I have had the privilege to teach and lead diverse groups of students, each with their unique background and learning styles. This experience has taught me the importance of effective communication, leadership, and teaching strategies. In addition, I have learned how to motivate students to strive for a common goal of knowledge, whether through creative teaching methods, interactive class discussions, or individual attention. Through this work, I have developed my skills as a teacher, mentor, and leader, and have found great satisfaction in helping others achieve their academic goals."
    },
    {
      company: "StandardAero",
      logoSrc: "assets/companies/standardaero-logo.png",
      position: "Business Process Data Scientist",
      date: "July 2022 - June 2023",
      description: "Throughout my work as an industrial data scientist, I have had the opportunity to gain valuable insights into the world of industrial and engineering simulation, applied statistics, and project management. This job has allowed me to apply my statistical knowledge to real-world business cases and effectively communicate the value of statistics in a risk-oriented industry. Additionally, this job has taught me the importance of effective deployment and communication of statistical results. My experiences in these areas have broadened my skill set and provided me with invaluable knowledge to carry forward."
    },
    {
      company: "University of Toronto",
      logoSrc: "assets/companies/utoronto-logo.png",
      position: "Research Assistant",
      date: "December 2021 - May 2022",
      description: "As an economic research assistant, I had the opportunity to see behind the scenes of how innovation is sought in the field. While the role was fairly limited, I was able to apply my knowledge from natural language processing to assist in the analysis of large datasets. Through this experience, I gained a deeper appreciation for the rigor and attention to detail required in economic research and was able to further develop my skills in data analysis and research methodology. Overall, it was a valuable experience that provided me with a deeper understanding of the research process and the importance of interdisciplinary collaboration."
    },
    {
      company: "University of Toronto",
      logoSrc: "assets/companies/utoronto-logo.png",
      position: "Teaching Assistant",
      date: "September 2021 - April 2022",
      description: "During my time as a teaching assistant, I gained valuable experience in public speaking and transferring knowledge. I was responsible for making statistics and machine learning concepts accessible and digestible for students who were new to the subject matter. This role allowed me to develop my communication skills and helped me to become a more effective teacher. I learned how to tailor my explanations to different learning styles and found creative ways to engage students with the material. This experience taught me the importance of clear and direct communication."
    },
    {
      company: "Affinity Credit Union",
      logoSrc: "assets/companies/affinity-logo.svg",
      position: "Development and Database Manager",
      date: "May 2021 - August 2021",
      description: "As I progressed into my second summer internship with the same company, I was entrusted with more responsibilities, which helped me gain valuable insights into the industry. As a project lead, I had to work with different teams to ensure that the projects were executed successfully. This involved collaborating with external teams, which taught me the importance of effective communication and the ability to tailor technical language to non-technical stakeholders. The experience also provided me with a first taste of project management principles and methodologies."
    },
    {
      company: "Affinity Credit Union",
      logoSrc: "assets/companies/affinity-logo.svg",
      position: "Development and Database Manager",
      date: "May 2020 - September 2020",
      description: "During my first summer internship with Affinity, I had the opportunity to work with the Business Intelligence and Automation team, where I gained valuable insights into the crucial aspects of data engineering, data architecture, and data server management. This experience has been instrumental in shaping my understanding of the maintenance side of data work, providing me with a solid foundation to build upon in my career. I learned how to streamline data processing pipelines, improve data quality and integrity, and design and implement data models that can support scalable analytics. This internship has helped me realize the importance of data infrastructure and the role it plays in the effective functioning of data-driven organizations."
    },
    {
      company: "Affinity Credit Union",
      logoSrc: "assets/companies/affinity-logo.svg",
      position: "Market Analyst",
      date: "January 2020 - April 2020",
      description: "As an intern Market Analyst, I honed my skills in writing research findings for an industry audience, applying machine learning to real-world business problems, and performing qualitative economic analysis. The experience provided me with a valuable opportunity to immerse myself in the fast-paced world of business and engage with stakeholders at various levels. I truly gained a deeper understanding of the importance of market research and analysis in driving business success."
    },
    {
      company: "University of Saskatchewan",
      logoSrc: "assets/companies/usask-logo.png",
      position: "Research Assistant",
      date: "May 2019 - August 2019",
      description: "My first research assistantship was in computer science, I gained an appreciation for the level of hard work and dedication required for successful research. I was responsible for generating background materials and literature reviews that formed the foundation for a research paper. This experience taught me the importance of attention to detail, as well as how to conduct thorough research and analysis to support a larger project."
    },
  ];

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
                <p class="card-text">${exp.description}</p>
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



function generateContactTiles(){
  // Define an array of contact data
  const contactData = [
    {
      link: "https://www.linkedin.com/in/matthew-senick/",
      iconSrc: "assets/icons/linkedin-white.svg",
      altText: "LinkedIn",
      title: "LinkedIn",
    },
    {
      link: "https://github.com/Matts52",
      iconSrc: "assets/icons/github.svg",
      altText: "GitHub",
      title: "GitHub",
    },
    {
      link: "mailto:senick.matthew@gmail.com",
      iconSrc: "assets/icons/Mail-Icon-White-on-Black.png",
      altText: "Email",
      title: "Email",
    },
  ];

  const container = document.querySelector("#contact");

  // Create the contact section HTML
  const contactHTML = `
    <div class="container">
      <h2 class="mb-4">Get in Touch</h2>
      <div class="row">
        ${contactData.map(contact => `
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











