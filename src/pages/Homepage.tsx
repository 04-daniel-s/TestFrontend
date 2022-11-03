import { CreateProfile } from "./components/CreateProfile";
import { Result } from "./components/Result";
import { SearchBar } from "./components/SearchBar";
import "./Homepage.css";
import { Navigation } from "./components/Navigation";
import { useState } from "react";
import { UserResponse } from "../util/UserResponse";
import { SearchButton } from "./components/SearchButton";

export const Homepage = () => {
  const [user, setUser] = useState<UserResponse[]>([]);

  return (
    <div style={{ width: "100%" }}>
      <div className="navigation-container">
        <Navigation />
      </div>
      <div className="search-container">
        <SearchBar setUser={setUser} />
        <SearchButton setUser={setUser} />
      </div>
      <div className="result-container">
        <Result user={user} />
      </div>
      <div className="createprofile-container">
        <CreateProfile />
      </div>
    </div>
  );
};
