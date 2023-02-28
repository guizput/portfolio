const Projects = ({projects}) => {
    return (
        <div className="flex flex-col space-y-8">
            {
                projects.map(project =>
                    <div className="rounded-xl bg-white shadow-lg p-5 pb-8 md:flex md:space-x-4 md:pb-5" key={project.id}>
                        <div className="md:w-1/3">
                            <img src={project.img} alt="{project.title}" className="rounded-xl md:h-full md:w-full md:object-cover md:object-center"/>
                        </div>
                        <div className="md:w-2/3">
                            <p className="mt-4 text-gray-500">{project.tags}</p>
                            <h3 className=" text-gray-900 font-medium text-2xl mt-4">{project.title}</h3>
                            <p className='mt-4 text-gray-500'>{project.desc}</p>
                            <div className="mt-8 flex space-x-4">
                                <a target="_blank" className="text-lg px-8 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition" href={project.demoLink}>Demo</a>
                                <a target="_blank" className="text-lg px-8 py-2 bg-transparent border-solid border-2 text-gray-500 border-gray-500 rounded-lg hover:bg-gray-500 hover:text-white transition" href={project.codeLink}>Code</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
     );
}
 
export default Projects;