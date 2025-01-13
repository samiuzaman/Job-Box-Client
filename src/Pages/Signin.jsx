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
import useAuth from "../Hook/useAuth";

const Signin = () => {
  const { signInUser, signinWithGoogle } = useAuth();
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Sign in With Google
  const handlesignInWithGoogle = () => {
    signinWithGoogle()
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
            <CardTitle className="text-center">Sign In Now</CardTitle>
          </CardHeader>
          <div className="flex items-center justify-between gap-3">
            <Button
              onClick={handlesignInWithGoogle}
              variant="outline"
              color="secondary"
              className="w-full"
            >
              <GoogleLogo size={20} className="mr-1.5" />
              Signin with Google
            </Button>
          </div>
          <Divider>Or countinue with</Divider>
          <form onSubmit={handleSignIn} className="space-y-2">
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

            <Button type="submit" className="!mt-3 block w-full">
              Sign In
            </Button>
          </form>
          <div className="text-center">
            <NavLink to="/register">Don't have an Account? Sign up</NavLink>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signin;
