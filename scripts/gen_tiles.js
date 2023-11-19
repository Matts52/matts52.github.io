
function generateProjectTiles(){

  // Define an array of project data
  const projects = [
    {
      title: "Q-Learning Auction Agent",
      githubLink: "https://github.com/Matts52/Q_Learn_Single_Sealed_Bid_Auction",
      imageSrc: "assets/projects/Q_Learn.PNG",
      description: "The goal of this project was to take an initial step to exploring reinforcement learning and agent-based machine learning. Essentially, this JavaScript application uses a single state Q-Learning algorithm to teach an artificial agent how to optimally bid in a two-player sealed bid auction setting.",
      demoLink: "https://matthewsenick.com/Q_Learn_Single_Sealed_Bid_Auction/",
    },
    {
      title: "Helper Website for Students",
      githubLink: "https://github.com/Matts52/ECO304",
      imageSrc: "assets/projects/ECO304_HOME.PNG",
      description: "I built a website for my students that generated practice questions, visualizations, and a glossary of terminology to help them learn the material. With this interactive tool, my students were able to test their knowledge and reinforce key concepts, making the learning experience more engaging and effective.",
      demoLink: "http://www.matthewsenick.com/ECO304/",
    },
    {
        title: "Command Line Chess",
        githubLink: "https://github.com/Matts52/CLChess",
        imageSrc: "assets/projects/CLChess.jpg",
        description: "A minimalist command line chess application built with python. In this game, you can choose to play against another user, a random-moving AI player, or a simple cost-minimizing AI player.",
        demoLink: "https://github.com/Matts52/CLChess",
    },
    {
        title: "Olympic Medal Data Visualization",
        githubLink: "https://github.com/Matts52/olympic-data-visualization",
        imageSrc: "assets/projects/Olympic_DataVis.jpg",
        description: "A tool that lets you explore and compare historical medal counts in the Olympics. A completely interactive map is available to the user and a variety of settings can be explored. Medal counts are shown in stacked bar charts along with a time series trend",
        demoLink: "https://www.matthewsenick.com/olympic-data-visualization/",
    },
    
  ];

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












