import React from "react";
import Linkedin from "./Links";
import user from "../data/user";

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {true ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Linkedin github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default About;

