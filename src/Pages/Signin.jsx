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

const Signin = () => {
  return (
    <div>
      <Card className="max-w-sm mx-auto">
        <CardContent className="space-y-3">
          <CardHeader>
            <CardTitle className="text-center">Sign In Now</CardTitle>
          </CardHeader>
          <div className="flex items-center justify-between gap-3">
            <Button variant="outline" color="secondary" className="w-full">
              <GoogleLogo size={20} className="mr-1.5" />
              Signin with Google
            </Button>
          </div>
          <Divider>Or countinue with</Divider>
          <form className="space-y-2">
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
