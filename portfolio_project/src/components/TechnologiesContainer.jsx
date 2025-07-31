import '../styles/components/technologiescontainer.sass';
import { DiPython, DiHtml5, DiCss3, DiReact, DiMysql, DiPostgresql } from 'react-icons/di';
import { SiDatabricks, SiOpenai, SiDocker, SiTerraform, SiJavascript, SiMongodb } from 'react-icons/si';

const technologies = [
    {
        id: 'python',
        name: 'Python',
        icon: <DiPython />,
        description: 'Core language for data science, machine learning, and AI solutions, used extensively in industrial analytics and hybrid modeling.'
    },
    {
        id: 'react',
        name: 'React',
        icon: <DiReact />,
        description: 'Framework for building interactive web applications and dashboards to visualize and deliver data-driven insights.'
    },
    {
        id: 'mysql',
        name: 'MySQL',
        icon: <DiMysql />,
        description: 'Relational database for managing structured industrial and business data in analytics projects.'
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        icon: <DiPostgresql />,
        description: 'Advanced database solution for scalable, reliable storage and querying of complex datasets in machine learning workflows.'
    },
    {
        id: 'databricks',
        name: 'Databricks',
        icon: <SiDatabricks />,
        description: 'Unified analytics platform for big data processing, collaborative machine learning, and industrial AI deployments.'
    },
    {
        id: 'openai',
        name: 'OpenAI',
        icon: <SiOpenai />,
        description: 'GenAI technologies for developing intelligent solutions, including LLMs and generative models for industrial and B2B applications.'
    },
    {
        id: 'html5',
        name: 'HTML5',
        icon: <DiHtml5 />,
        description: 'Markup language for structuring web-based interfaces and dashboards for data visualization and reporting.'
    },
    {
        id: 'css3',
        name: 'CSS3',
        icon: <DiCss3 />,
        description: 'Styling technology for creating professional, user-friendly interfaces for analytics and AI solutions.'
    },
    {
        id: 'docker',
        name: 'Docker',
        icon: <SiDocker />,
        description: 'Containerization platform for deploying scalable, portable, and consistent environments for applications and data solutions.'
    },
    {
        id: 'terraform',
        name: 'Terraform',
        icon: <SiTerraform />,
        description: 'Infrastructure as code tool for automating cloud resource provisioning and management in modern DevOps workflows.'
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        icon: <SiJavascript />,
        description: 'Core scripting language for interactive web applications, dashboards, and client-side data processing.'
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        icon: <SiMongodb />,
        description: 'NoSQL database for flexible, scalable storage and querying of unstructured and semi-structured data.'
    }
];

const TechnologiesContainer = () => {
    return (
        <section id="technologies-container">
            <h2>Technologies</h2>
            <div className="technologies-list">
                {technologies.map(tech => (
                    <div key={tech.id} className="technology-item" id={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description || 'No description available.'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default TechnologiesContainer;