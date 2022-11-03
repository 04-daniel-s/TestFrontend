import { addUser } from "../../util/userApiService";

export const AddButton = (props: { add: () => void }) => {
  return (
    <button onClick={props.add} className="searchbar-button">
      Hinzufügen
    </button>
  );
};
