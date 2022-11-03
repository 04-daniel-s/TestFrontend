import { useState } from "react";
import { getUsersById, getUsersByName } from "../../util/userApiService";
import { UserResponse } from "../../util/UserResponse";

export const SearchBar = (props: { setUser: (u: UserResponse[]) => void }) => {
  const [value, setValue] = useState("");

  const handleEnter = (e: React.KeyboardEvent) => {
    const id = parseInt(value);

    if (e.key == "Enter") {
      if (isNaN(id)) {
        getUsersByName(value).then((user) => props.setUser([user]));
      } else {
        getUsersById(id).then((user) => props.setUser([user]));
      }

      setValue("");
    }
  };

  return <input onKeyDown={handleEnter} value={value} onChange={(e) => setValue(e.target.value)} className="searchbar" placeholder="Suche eingeben" />;
};
