import { Profile } from "./components/Profile";
import user from "./data/user";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      
        <Profile user={user} />
       
    </div>
  );
}
