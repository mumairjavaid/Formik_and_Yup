import { object, string } from "yup";

let userSchema = object({
  email: string().required().email(),
  password: string().required("Password is a required field").min(6),
});

export default userSchema;
