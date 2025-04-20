import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>🍽️ About Recipe Finder</h2>
      <p>
        Recipe Finder is a clean and simple React application that helps users find delicious recipes based on any ingredient or dish name.
      </p>
      <p>
        This is a <strong>frontend-only</strong> project built using <strong>React.js</strong>. It does not include any backend or server-side processing.
      </p>
      <p>
        The <strong>Contact page</strong> is a simulated form that uses validation and form state management, but <strong>does not actually send any messages</strong> as there's no backend integration.
      </p>
      <p>
        Features of this project:
      </p>
      <ul>
        <li>⚛️ Built with React + Vite</li>
        <li>📂 React Context API for State Management</li>
        <li>🔍 Integrated with TheMealDB API to fetch real recipes</li>
        <li>🎨 Responsive and custom CSS styling</li>
        <li>📄 Multi-page navigation using React Router</li>
        <li>📝 Form validation (Contact page)</li>
      </ul>
      <p>
        This project was created as an end-term submission to demonstrate practical skills in modern frontend development using React.
      </p>
    </div>
  );
}

export default About;
