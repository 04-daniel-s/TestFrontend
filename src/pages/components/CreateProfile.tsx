import { useState } from "react";
import { addUser } from "../../util/userApiService";
import { AddButton } from "./AddButton";

export const CreateProfile = () => {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const handleAdd = () => {
    addUser(name, parseInt(age)).then((r) => {
      setName("");
      setAge("");
    });
  };

  return (
    <div className="createprofile-menu">
      <img src="https://i1.wp.com/skilloutlook.com/wp-content/uploads/2019/11/Lovely-Professional-University-14-Nov-2019.jpg?fit=960%2C639&ssl=1" />
      <div style={{ zIndex: "1", fontSize: "40px", textAlign: "center", width: "100%", marginTop: "30px" }}>Nutzer hinzufügen</div>
      <div style={{ zIndex: "1", display: "flex", flexDirection: "row", height: "100%" }}>
        <div className="createprofile-menu-container">
          <div className="createprofile-attribute">Name</div>
          <div className="createprofile-attribute">Alter</div>
        </div>
        <div className="createprofile-menu-container">
          <div className="createprofile-attribute">
            <input value={name} onChange={(r) => setName(r.target.value)} placeholder="Hier Wert eingeben" />
          </div>
          <div className="createprofile-attribute">
            <input value={age} onChange={(r) => setAge(r.target.value)} placeholder="Hier Wert eingeben" />
          </div>
        </div>
      </div>
      <div className="createprofile-button-container">
        <AddButton add={handleAdd} />
      </div>
    </div>
  );
};
