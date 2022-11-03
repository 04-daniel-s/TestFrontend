import { getUsers } from "../../util/userApiService";
import { UserResponse } from "../../util/UserResponse";

export const SearchButton = (props: { setUser: (u: UserResponse[]) => void }) => {
  return (
    <button className="searchbar-button" onClick={() => getUsers().then((r) => props.setUser(r))}>
      Alle Daten auslesen!
    </button>
  );
};
