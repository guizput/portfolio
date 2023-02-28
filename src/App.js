import Profile from "./components/Profile.js";
import Experience from "./components/Experience.js";
import Hobbies from './components/Hobbies.js';
import SkillsList from './components/SkillsList.js';
import ProjectsList from "./components/ProjecstList.js";

const App = () => {
  return (
    <div className="flex flex-col space-y-8 pb-8 px-4 max-w-md mx-auto md:flex-row md:max-w-5xl md:items-start md:space-x-8">
      <div className="flex flex-col mt-8 md:w-1/3">
        <Profile />
        <Experience />
        <Hobbies />
      </div>
      <div className="flex flex-col mt-8 md:w-2/3">
        <SkillsList />
        <ProjectsList />
      </div>
    </div>
  );
};

export default App;
