import Skills from './Skills.js';
import {frontEnd, design} from '../data/skills.js';

const SkillsList = () => {

    return ( 
        <div className='flex flex-col space-y-8'>
            <Skills title="Front End" skills={frontEnd} />

            <Skills title="Design" skills={design} />
        </div>
     );
}
 
export default SkillsList;