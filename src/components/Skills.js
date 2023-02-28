const Skills = ({title, skills}) => {
    return ( 
        <div className="rounded-lg bg-white shadow-lg px-5 py-8">
            <h2 className="text-lg text-gray-900 font-bold uppercase mb-6">{title}</h2>
            <ul>
                {
                    skills.map(skill =>
                        <li className="flex space-x-10 justify-between items-center mt-4" key={skill.id}>
                            <h5 className="text-gray-500 font-medium w-1/3">{skill.name}</h5>
                            <div className="relative rounded-md bg-gray-300 h-2 w-2/3">
                                <div className={`absolute bg-blue-500 top-0 left-0 rounded-md h-2 ${skill.rank}`}></div>
                            </div>
                        </li>    
                    )
                }
            </ul>
        </div>
     );
}
 
export default Skills;