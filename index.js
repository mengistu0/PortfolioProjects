function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function showDetails(projectName) {
    const projectDetails = document.getElementById('project-details');
    let details;

    switch (projectName) {
        case 'Web App Project':
            details = `<h3>${projectName}</h3>
                       <p>This is a full-stack web application built using React for the frontend and Node.js for the backend. It features user authentication, data storage, and real-time updates.</p>`;
            break;
        case 'E-Commerce Project':
            details = `<h3>${projectName}</h3>
                       <p>An e-commerce platform developed using Django and React. It includes features like product listings, a shopping cart, payment gateway integration, and user management.</p>`;
            break;
        case 'Online Learning Project':
            details = `<h3>${projectName}</h3>
                       <p>This is an online learning platform where users can register, browse courses, and complete interactive lessons. Built with Python and Flask, with a focus on a smooth user experience.</p>`;
            break;
        default:
            details = '<p>Select a project to see more details.</p>';
            break;
    }

    projectDetails.innerHTML = details;
}
