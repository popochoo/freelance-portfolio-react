import Project from '../components/project/Project';
import { projects } from '../helpers/projectList';

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                {projects.map((project, index) => (
                    <Project title={project.title} img={project.img} key={index} index={index} />
                ))}
                </ul>
            </div>
        </main>
    );
}
 
export default Projects;