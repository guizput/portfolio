import { useState } from "react";
import gamingImage from '../../assets/gaming.jpg';
import cookingImage from '../../assets/cooking.jpg';
import bikingImage from '../../assets/biking.jpg';

const Hobbies = () => {

    const [hobbies, setHobbies] = useState([
        {
            id: 1,
            img: gamingImage,
            title: 'Gaming',
            desc: 'Quisque feugiat malesuada molestie.'
        },
        {
            id: 2,
            img: cookingImage,
            title: 'Cooking',
            desc: 'Quisque feugiat malesuada molestie.'
        },
        {
            id: 3,
            img: bikingImage,
            title: 'Biking',
            desc: 'Quisque feugiat malesuada molestie.'
        }
    ]);

    return ( 
        <div className="rounded-lg bg-white shadow-lg px-5 py-8 mt-8">
            <h2 className="text-gray-900 text-2xl font-medium">Hobbies</h2>
            <ul>
                {
                    hobbies.map(hobby => 
                        <li className="mt-8" key={hobby.id}>
                            <img className="w-full h-32 object-cover rounded-lg" src={hobby.img} alt={hobby.title} />
                            <div>
                                <h5 className="text-gray-900 font-semibold mt-4">{hobby.title}</h5>
                                <p className="text-gray-500 mt-2">{hobby.desc}</p>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
     );
}
 
export default Hobbies;