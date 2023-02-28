import { useState } from "react";
import adidas from '../../assets/adidas.png';
import HM from '../../assets/HM.png';
import nivea from '../../assets/nivea.png';

const Experience = () => {

    const [experiences, setExperience] = useState([
        {
            id: 1,
            logo: adidas,
            date: 'Feb 2017 - Current',
            title: 'Front-end developer',
            desc: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
        },
        {
            id: 2,
            logo: HM,
            date: 'Aug 2016 - Feb 2018',
            title: 'Full-stack developer',
            desc: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
        },
        {
            id: 3,
            logo: nivea,
            date: 'Jun 2015 - Aug 2016',
            title: 'Junior front-end developer',
            desc: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
        }
    ]);

    return ( 
        <div className="rounded-lg bg-white shadow-lg px-5 py-8">
            <h2 className="text-gray-900 text-2xl font-medium">Experiences</h2>
            <ul>
                {
                    experiences.map(exp => 
                        <li className="flex items-start space-x-4 mt-8" key={exp.id}>
                            <img className="w-20 object-contain p-4" src={exp.logo} alt={exp.title} />
                            <div>
                                <p className="text-sm text-gray-500 mb-1 font-medium">{exp.date}</p>
                                <h5 className="text-gray-900 font-semibold mb-6">{exp.title}</h5>
                                <p className="text-gray-500">{exp.desc}</p>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
     );
}
 
export default Experience;