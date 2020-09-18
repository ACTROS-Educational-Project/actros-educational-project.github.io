import styled from "styled-components";
import {Link} from "gatsby";
import Theme from "../../styles/theme";

export const Main = styled.article`
  text-align: center;
  max-width: 100%;
  position: relative;
`;

export const Header = styled.h1`
  text-align: center;
  max-width: 100%;
  position: relative;
  font-size: 45px;
`;

export const MainDescription = styled.article`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const Grid = styled.article`
  background: #fff;
  margin-bottom: 10px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const GridImg = styled.article`
  width: 30%;
  margin: 10px;
  display: inline-block;
  position: relative;
`;

export const GridImgImage = styled.article`
  border-top-left-radius: 80%;
  border-top-right-radius: 80%;
  border-bottom-right-radius: 80%;
  border-bottom-left-radius: 80%;
`;

export const Map = styled.article`
background: #fff;
margin-bottom: 10px;
max-width: 80%;
margin-left: auto;
margin-right: auto;
`;
