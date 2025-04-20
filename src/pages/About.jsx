import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>🍽️ About Recipe Finder</h2>
      <p>
        Recipe Finder is a simple and clean React application that helps you discover delicious recipes based on any ingredient or dish you search for.
      </p>
      <p>
        It uses <strong>TheMealDB API</strong> to fetch real recipes. This app is built using:
      </p>
      <ul>
        <li>⚛️ React + Vite</li>
        <li>📂 Context API for State Management</li>
        <li>🔍 API Integration</li>
        <li>🎨 Custom CSS (Responsive Design)</li>
      </ul>
      <p>
        This project is a part of my end-term submission to demonstrate my frontend development skills with modern React.
      </p>
    </div>
  );
}

export default About;
