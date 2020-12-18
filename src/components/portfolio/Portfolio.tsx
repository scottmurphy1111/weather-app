import React, { useEffect, useState } from 'react';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export default function Portfolio() {
  const [homeOffset, setHomeOffset] = useState(0);
  const [aboutOffset, setAboutOffset] = useState(0);
  const [skillsOffset, setSkillsOffset] = useState(0);
  const [projectsOffset, setProjectsOffset] = useState(0);
  const [contactOffset, setContactOffset] = useState(0);

  const navElements = Array.from(document.querySelectorAll('[data-nav]'));
  // console.log('nav els', navElements);
  const keys = navElements.map(item => {
    return item.textContent ? item.textContent.toLowerCase() : 'home';
  });
  console.log('keys', keys);
  
  const navItems = navElements.reduce((acc: any, item: any, index) => {
    acc[keys[index]] = item;
    return acc;
  }, {})

  const setActive = ((active: any) => {
    navElements.forEach((item: any )=> {
      if (item.dataset.nav === active) {
        item.dataset.active = true;
      } else {
        item.dataset.active = false;
      }
    })
  })

  const getCurrentOffset = (pageOffset: any) => {
    // console.log('offset', pageOffset, 
    // 'top', homeOffset,
    // 'sec', aboutOffset,
    // 'thi', skillsOffset,
    // 'fou', projectsOffset,
    // 'fif', contactOffset);

    if (homeOffset < pageOffset && aboutOffset > pageOffset) {
      navItems.active = 'home';
      // bgOverlay$.value.style.backgroundColor = 'rgba(25, 128, 229, 1';
    } else if (aboutOffset < pageOffset && skillsOffset > pageOffset) {
      navItems.active = 'about';
      // bgOverlay$.value.style.backgroundColor = 'rgba(229, 128, 25, 1';
    } else if (skillsOffset < pageOffset && projectsOffset > pageOffset) {
      navItems.active = 'skills';
      // bgOverlay$.value.style.backgroundColor = 'rgba(128, 25, 229, 1';
    } else if (projectsOffset < pageOffset && contactOffset > pageOffset) {
      navItems.active = 'projects';
      // bgOverlay$.value.style.backgroundColor = 'rgba(25, 229, 128, 1';
    } else {
      navItems.active = 'contact';
      // bgOverlay$.value.style.backgroundColor = 'rgba(229, 25, 128, 1';
    }

    setActive(navItems.active);

  };

  const bgOverlay$ = new BehaviorSubject<any>(null);
  
  const monitorScrolling$ = () => fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset),
    tap(value => {
      console.log('value', value);
      bgOverlay$.next(document.querySelector('.bg-overlay'));
      getCurrentOffset(value);
      //value ? bgOverlay$.value.style.backgroundColor = 'rgba(5,159,134,0.05)' : bgOverlay$.value.style.backgroundColor = 'rgba(34,163,244,0.05)';
    })
  );

  useEffect(() => {
   const subscription = monitorScrolling$().subscribe(subVal => console.log('subVal', subVal));
   // const bgOverlay = document.querySelector('.bg-overlay');
   console.log('spo', aboutOffset);
   return () => subscription.unsubscribe();
  });

  return (
    <>
      <Home
        setHomeOffset={setHomeOffset}
      />
      <Projects
        setProjectsOffset={setProjectsOffset}
      />
       <About
        setAboutOffset={setAboutOffset}      
      />
      <Skills
        setSkillsOffset={setSkillsOffset}
      />      
      <Contact
        setContactOffset={setContactOffset}
      />
    </>
  );
}
// }

// export default Portfolio;
