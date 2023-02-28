import Projects from './Projects.js';
import projectsData from '../data/projects.js';

const ProjectsList = () => {

    const projects = projectsData;

    return (
        <div className='flex flex-col space-y-8 mt-8'>
            <div className="rounded-lg bg-white shadow-lg p-5">
                <h2 className="text-gray-500 text-lg">Projects ({projects.length})</h2>
            </div>
            <Projects projects={projects} />
        </div>
     );
}
 
export default ProjectsList;