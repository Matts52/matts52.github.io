
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

