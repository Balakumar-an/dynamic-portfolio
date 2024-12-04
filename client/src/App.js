import { data } from "./data";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <PersonalDetails
        userImg={data.userImg}
        name={data.name}
        socialLinks={data.socialLinks}
        dob={data.dob}
        address={data.address}
        phone={data.phone}
        email={data.email}
        role={data.role}
      />
    </div>
  );
}

export default App;
