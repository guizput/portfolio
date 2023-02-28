import Profile from "./components/Profile.js";
import Experience from "./components/Experience.js";
import Hobbies from './components/Hobbies.js';
import SkillsList from './components/SkillsList.js';

const App = () => {
  return (
    <div className="py-8 px-4 flex flex-col space-y-8">
      <Profile />
      <Experience />
      <Hobbies />
      <SkillsList />
    </div>
  );
};

export default App;
