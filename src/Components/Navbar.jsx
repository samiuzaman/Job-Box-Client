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

export const NavbarComponent = () => {
  return (
    <Navbar className="w-11/12 mx-auto border-none">
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
          <NavLink to="/register" className="underline">
            Register
          </NavLink>
          <NavLink to="/signin">
            <Button>Sign in</Button>
          </NavLink>
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
