import {
  Avatar,
  AvatarFallback,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import { NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";

export const NavbarComponent = () => {
  const { user, signOutUser } = useAuth();
  return (
    <Navbar className="px-6 lg:px-20 mx-auto border-none rounded-none shadow-xl">
      <NavbarContainer>
        <NavbarBrand>
          <h4 className="text-xl lg:text-3xl text-error-400 font-bold">
            JobBox
          </h4>
          {/* <img src={KeepLogo} alt="keep" /> */}
        </NavbarBrand>
        <NavbarList>
          <NavLink to="/">
            <NavbarItem>Home</NavbarItem>
          </NavLink>
        </NavbarList>
        <NavbarList>
          {user && user.email ? (
            <Button onClick={signOutUser}>Log Out</Button>
          ) : (
            <>
              <NavLink to="/register" className="underline">
                Register
              </NavLink>
              <NavLink to="/signin">
                <Button>Sign in</Button>
              </NavLink>
            </>
          )}
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarItem>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
