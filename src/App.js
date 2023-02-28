import Profile from "./components/Profile.js";
import Experience from "./components/Experience.js";

const App = () => {
  return (
    <div className="py-8 px-4 flex flex-col space-y-8">
      <Profile />
      <Experience />
    </div>
  );
};

export default App;
