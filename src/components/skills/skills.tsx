import { useState } from "react";
import { SkillsProps } from "./skills.types";

const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(true);
  }
  return (
    <>
      <ul>
        {
          skills.map((skill) => {
            return <li key={skill}>{ skill}</li>
          })
        }
        {
          isLoggedIn ? <button>User is logged In</button> : <button onClick={handleClick}>Log In</button>
        }
      </ul>
    </>
  )
}
export default Skills;