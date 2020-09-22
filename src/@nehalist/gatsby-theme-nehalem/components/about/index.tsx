import React, {CSSProperties, FunctionComponent, ReactNode} from "react";
import {Main, Header, MainDescription, Grid, GridImg, GridImgImage, Map} from "./style";
import "../../styles/about-style.css"
import IntellRobotsLabTeam from "../../../../../content/assets/images/intellrobotslab_team.jpg"
import Paco from "../../../../../content/assets/images/paco.jpg"
import Jonatan from "../../../../../content/assets/images/jonatan.jpg"
import JoseMiguel from "../../../../../content/assets/images/josemiguel.jpg"
import Lorena from "../../../../../content/assets/images/lorena.jpg"
import Fernando from "../../../../../content/assets/images/fernando.jpg"

function mouseOverEvent(e) {
  e.target.style.width = '55%';
}
function mouseOutEvent(e) {
  e.target.style.width = '50%';
}

export const About = () => (
  <Main>
    <script src="./script.js" type="text/javascript" />
    <MainDescription>
      <br />
      <Header>TEAM</Header>
      <img src={IntellRobotsLabTeam} width="80%" alt=""/>
      <div class="description">
        <p>
          <br></br>
          We are <strong>Intelligent Robotics Lab</strong>, a team of researchers in Robotics
          from Rey Juan Carlos University and University of León experienced in
          participating in several Robotics Competitions.
        </p>
      </div>
      <div class="subcomment">
        <p>
          <strong><i>Know the people who make this possible.</i></strong>
        </p>
      </div>
    </MainDescription>

    <Grid>
      <GridImg>
        <GridImgImage>
          <img class="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} width="50%" src={Paco} />
        </GridImgImage>
        <div class="name">
          <p>
            <strong>Francisco Martín</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>Associate Professor</strong>
          </p>
        </div>
      </GridImg>
      <GridImg>
        <img class="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={JoseMiguel} width="50%" />
        <div class="name">
          <p>
            <strong>José Miguel Guerrero</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>Assistant Professor</strong>
          </p>
        </div>
      </GridImg>
      <GridImg>
        <img class="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={Jonatan} width="50%" />
        <div class="name">
          <p>
            <strong>Jonatan Ginés</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>PhD Candidate</strong>
          </p>
        </div>
      </GridImg>
      <GridImg>
        <img class="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={Fernando} width="50%" />
        <div class="name">
          <p>
            <strong>Fernando González</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>Intern</strong>
          </p>
        </div>
      </GridImg>
      <GridImg>
        <img class="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={Lorena} width="50%" />
        <div class="name">
          <p>
            <strong>Lorena Bajo</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>Project Engineer</strong>
          </p>
        </div>
      </GridImg>
    </Grid>
    <Map>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.7073176428366!2d-3.8216746487588584!3d40.28225137162937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418b7f310d2417%3A0x8bb94231c370b55!2sUniversidad%20Rey%20Juan%20Carlos%20Campus%20de%20Fuenlabrada!5e0!3m2!1ses!2ses!4v1599824570268!5m2!1ses!2ses" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </Map>
  </Main>
);
