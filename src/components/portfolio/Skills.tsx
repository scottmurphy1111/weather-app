import { AppContext } from '../../App';
import React, { useContext, useEffect, useState } from 'react';
import { getPanelOffset } from './getPanelOffset';
// import Coding from './Coding';

const Skills = (params: any) => {
  const { skills } = useContext<any>(AppContext);
  const { title, skillset, testimonials } = skills;
  const [displayedSkillset, setDisplayedSkillset] = useState([skillset]);

  const getRandomColor = () => {
    const colors = ['#004080', '#0080ff', '#0007fff', '#80bfff']
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const shuffleSkills = () => {
    
    randomizeSkills(skillset);
  
    setTimeout(() => {
      applyColors();
    }, 10)
    
  };

  const randomizeSkills = (allSkills: any) => {
    // applyColors();
    let newArray = [];
    while (allSkills.length !== 0) {
      let randomIndex = Math.floor(Math.random() * allSkills.length);
      newArray.push(allSkills[randomIndex]);
      allSkills.splice(randomIndex, 1);
    }

    setDisplayedSkillset(newArray);
    
  }

  // const getColors = () => {
  //   const red = getRandomColor();
  //   const green = getRandomColor();
  //   const blue = getRandomColor();

  //   return `rgb(${red}, ${green}, ${blue})`;
  // }

  const applyColors = () => {
    const skillsBlocks = Array.from(document.querySelectorAll('.skillset li'));
    console.log('blocks', skillsBlocks);
    skillsBlocks.forEach(skill => {
      (skill as HTMLElement).style.color = getRandomColor();
      // (skill as HTMLElement).style.borderColor = getRandomColor()
    })
  }

  useEffect(() => {
    params.setSkillsOffset(getPanelOffset('.skills'));
    shuffleSkills();
  }, [])

  return (
    <section
      className='skills sliding-panel wrap container-fluid'
      data-section='skills'
    >
      <div className='row'>
        <div className='col-xs-12'>
          <div className='panel-wrapper'>
            <h2 className='category-title'>{title}</h2>
            <ul className='skillset'>
              {displayedSkillset.map((skill: any, id: number) => <li key={id + 1}>{skill}</li>)}
            </ul>
            <ul className='testimonials'>
              {testimonials.map((testimonial: any, id: number) => (
                <li key={id + 1}>
                  <p className="testimonial">"{testimonial.testimonial}"<span className="reporter">~ {testimonial.reporter}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

