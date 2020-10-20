import React, {FunctionComponent} from "react";
import {LangIcon, Nav, NavContainer, NavLink, NavMenu, NavMenuItem, NavWrapper, SearchContainer} from "./style";
import {MenuItem} from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import {Search} from "@nehalist/gatsby-theme-nehalem/src/components/search";
import SpainFlag from "../../../../../content/assets/images/spain_flag.png";
import EnglandFlag from "../../../../../content/assets/images/england_flag.png";

interface NavigationProps {
  title: string;
  menu: MenuItem[];
  showSearch: boolean;
  dark?: boolean;
}

const Navigation: FunctionComponent<NavigationProps> = ({title, menu, dark = false, showSearch = true}) => (
  <NavContainer dark={dark}>
    <Nav>
      <NavWrapper>
        <NavMenu mobile={true}>
          {menu.map((item, index) => (
            <NavMenuItem key={index}>
              <NavLink to={item.path} key={index}>{item.name}</NavLink>
            </NavMenuItem>
          ))}
        </NavMenu>
        <SearchContainer>
          {showSearch &&
          <NavMenu>
              <Search/>
          </NavMenu>
          }
        </SearchContainer>
      </NavWrapper>
    </Nav>
  </NavContainer>
);

export default Navigation;
