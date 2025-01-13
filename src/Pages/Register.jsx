import { Envelope, GoogleLogo, Image, Lock, Person } from "phosphor-react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  InputIcon,
  Label,
} from "keep-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../Hook/useAuth";

const Register = () => {
  const { messages, setMessages } = useState(null);
  const { createUser } = useAuth();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const repassword = form.repassword.value;
    console.log(email, password);

    // check password validation
    if (password.length < 6) {
      return alert("Password Must be used 6 characters");
    }
    const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!checkPassword.test(password)) {
      return alert("Must be used one capital, one small letter & one number");
    }
    if (password !== repassword) {
      return alert("Password not Match");
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Card className="max-w-sm mx-auto">
        <CardContent className="space-y-3">
          <CardHeader>
            <CardTitle className="text-center">Register Now</CardTitle>
          </CardHeader>

          <Divider></Divider>
          <form onSubmit={handleRegister} className="space-y-2">
            <fieldset className="space-y-1">
              <Label htmlFor="name">Full Name*</Label>
              <div className="relative">
                <Input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="ps-11"
                />
                <InputIcon>
                  <Person size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <fieldset className="space-y-1">
              <Label htmlFor="photo">Photo URL*</Label>
              <div className="relative">
                <Input
                  name="photo"
                  type="url"
                  placeholder="Photo URL"
                  className="ps-11"
                />
                <InputIcon>
                  <Image size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <fieldset className="space-y-1">
              <Label htmlFor="email">Email*</Label>
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="ps-11"
                />
                <InputIcon>
                  <Envelope size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <fieldset className="space-y-1">
              <Label htmlFor="password">Password*</Label>
              <div className="relative">
                <Input
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  className="ps-11"
                />
                <InputIcon>
                  <Lock size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <fieldset className="space-y-1">
              <Label htmlFor="password">Re-Password*</Label>
              <div className="relative">
                <Input
                  name="repassword"
                  placeholder="Enter Re-password"
                  type="password"
                  className="ps-11"
                />
                <InputIcon>
                  <Lock size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <Button type="submit" className="!mt-3 block w-full">
              Register
            </Button>
          </form>
          <div className="text-center">
            <NavLink to="/signin">Already Registered! Please Login</NavLink>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
