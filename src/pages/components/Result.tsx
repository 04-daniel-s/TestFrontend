import { userInfo } from "os";
import { UserResponse } from "../../util/UserResponse";

export const Result = (props: { user: UserResponse[] | undefined }) => {
  if (props.user?.length == 0) {
    return <></>;
  }

  return (
    <>
      <table style={{ marginTop: "50px" }}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Alter</th>
        </tr>
        {props.user?.map((r) => (
          <tr>
            <td>{r.id}</td>
            <td>{r.name}</td>
            <td>{r.age}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
