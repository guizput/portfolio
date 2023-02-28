import Skills from './Skills.js';

const SkillsList = () => {

    const frontEnd = [
        {
            id: 1,
            name: 'React',
            rank :'w-3/5'
        },
        {
            id: 2,
            name: 'Javascript',
            rank :'w-4/5'
        },
        {
            id: 3,
            name: 'CSS',
            rank :'w-4/5'
        },
        {
            id: 4,
            name: 'Vue',
            rank :'w-3/5'
        },
        {
            id: 5,
            name: 'Redux',
            rank :'w-4/5'
        },
        {
            id: 6,
            name: 'React Native',
            rank :'w-full'
        }
    ];
    
    const design = [
        {
            id: 1,
            name: 'Figma',
            rank :'w-3/5'
        },
        {
            id: 2,
            name: 'Photoshop',
            rank :'w-4/5'
        }
    ];

    return ( 
        <div className='flex flex-col space-y-8'>
            <Skills title="Front End" skills={frontEnd} />

            <Skills title="Design" skills={design} />
        </div>
     );
}
 
export default SkillsList;