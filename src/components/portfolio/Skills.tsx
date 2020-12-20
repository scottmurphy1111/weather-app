import { AppContext } from '../../App';
import React, { useContext, useEffect, useState } from 'react';
import { getPanelOffset } from './getPanelOffset';
// import Coding from './Coding';

const Skills = (params: any) => {
  const { skills } = useContext<any>(AppContext);
  const { title, skillset } = skills;
  // const [displayedSkillset, setDisplayedSkillset] = useState([skillset]);

  // const getRandomColor = () => {
  //   const colors = ['#004080', '#0080ff', '#0007fff', '#80bfff']
  //   return colors[Math.floor(Math.random() * colors.length)];
  // }

  // const shuffleSkills = (skillsShuffle: any) => {
  //   randomizeSkills(skillsShuffle);

  //   setTimeout(() => {
  //     applyColors();
  //   }, 10)

  // };

  // const randomizeSkills = (allSkills: any) => {
  //   console.log('all skills', allSkills);
  //   let newArray = [];
  //   while (allSkills.length !== 0) {
  //     let randomIndex = Math.floor(Math.random() * allSkills.length);
  //     newArray.push(allSkills[randomIndex]);
  //     allSkills.splice(randomIndex, 1);
  //   }

  //   setDisplayedSkillset(newArray);

  // }

  // const applyColors = () => {
  //   const skillsBlocks = Array.from(document.querySelectorAll('.skillset li'));
  //   console.log('blocks', skillsBlocks);
  //   skillsBlocks.forEach(skill => {
  //     (skill as HTMLElement).style.color = getRandomColor();
  //     // (skill as HTMLElement).style.borderColor = getRandomColor()
  //   })
  // }

  useEffect(() => {
    console.log('skillset effect', skillset);
    params.setSkillsOffset(getPanelOffset('.skills'));
    // shuffleSkills(skillset);
  }, [])

  return (
      <section
        className='skills sliding-panel container-fluid'
        data-section='skills'
      >
        <div className="wrap">
          <div className='row'>
            <div className='col-xs-12'>
              <h2 className='category-title'>{title}</h2>
              <ul className='skillset'>
                {skillset.map((skill: any, id: number) => (
                  <li key={id + 1}>
                    <div className="image-container">
                      <img src={`${process.env.PUBLIC_URL}${skill.image}`} />
                    </div>
                    <ul className="skills-array">
                      {skill.skillsArray.map((item: any) => <li key={item}>{item}</li>)}
                    </ul>
                  </li>
                ))}
              </ul>
              {/* <button onClick={() => shuffleSkills(displayedSkillset)}>Shuffle Skills</button> */}
            </div>
          </div>
        </div>
      </section>
  );
}

export default Skills;

