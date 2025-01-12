import {
  Avatar,
  AvatarFallback,
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

export const NavbarComponent = () => {
  return (
    <Navbar className="w-11/12 mx-auto">
      <NavbarContainer>
        <NavbarBrand>
          <h4 className="text-xl lg:text-3xl text-error-400 font-bold">
            React App
          </h4>
          {/* <img src={KeepLogo} alt="keep" /> */}
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarList>
        <NavbarList>
          <Dropdown placement="bottom-end">
            <DropdownAction asChild>
              <Avatar>
                {/* <AvatarImage src="/images/avatar/avatar-3.png" /> */}
                <AvatarFallback>KR</AvatarFallback>
              </Avatar>
            </DropdownAction>
            <DropdownContent
              align="end"
              className="border border-metal-100 dark:border-metal-800"
            >
              <DropdownItem>Statistics</DropdownItem>
              <DropdownItem>Duplicate</DropdownItem>
              <DropdownItem>Account</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownContent>
          </Dropdown>
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
