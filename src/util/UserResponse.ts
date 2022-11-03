export interface UserResponse {
  id: number;
  name: string;
  age: number;
  friends: UserResponse[];
}
