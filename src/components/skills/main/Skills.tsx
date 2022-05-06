import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import { ParallaxProps } from 'react-scroll-parallax/dist/components/Parallax/types';
import CardCategory from '../cardCategory/CardCategory';
import { categories } from '../models';

import './skills.css';


const animations: ParallaxProps = {
  easing: 'ease',
  translateX: [-20, 0],
  opacity: [0, 2],
  shouldAlwaysCompleteAnimation: true,
  shouldDisableScalingTranslations: true
}

const Skills = () => {
  
  const parallaxMessage = useParallax<HTMLDivElement>({...animations});
  const parallaxCategories = useParallax<HTMLDivElement>({...animations, translateX: [20, 0]})

  return (
    <div id="habilidades">
      <div className="skills__message" ref={parallaxMessage.ref} >
        <h3 className="skills__title">Habilidades</h3>
        <p className="skills__description">
          Tengo conocimientos solidos en tecnologías web como HTML, CSS, JAVASCRIPT y REACT JS; lo que permite crear interfaces graficas y componentes modernas, adaptables y de alta usabilidad.
          <br/>
          Además cuento con conocimientos en el lado backend creando aplicaciones empresariales con una arquitectura monolitica o basada en REST utilizando JAVA como lenguaje principal en conjunto con base de datos SQL (como MYSQL y POSTGRESQL).
        </p>
      </div>
      <div className="skills__categories" ref={parallaxCategories.ref}>
        {
          categories.map(category => (
            <CardCategory key={category.title} category={category} />
          ))
        }
      </div>
    </div>
  )
}

export default Skills