import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import { ParallaxProps } from 'react-scroll-parallax/dist/components/Parallax/types'
import { ProjectItem } from '../models'

interface Props {
  projectItem: ProjectItem,
  number: number,
}

const animations: ParallaxProps = {
  easing: 'ease',
  translateX: [-10, 0],
  opacity: [0, 2],
  shouldAlwaysCompleteAnimation: true,
  shouldDisableScalingTranslations: true
}

const CardProject = ({projectItem, number}: Props) => {
  
  const parallaxLeft = useParallax<HTMLDivElement>({...animations});
  const parallaxRight = useParallax<HTMLDivElement>({...animations, translateX: [10, 0]});

  return (
    <div className="card-project"  ref={number%2 === 0 ? parallaxRight.ref : parallaxLeft.ref}>
      <div className="card-project__message" ref={number%2 === 0 ? parallaxLeft.ref : parallaxRight.ref}>
        <h4 className="card-project__title">{projectItem.title}</h4>
        <div className="card-project__description">
          <p className="card-project__text">{projectItem.description}</p>
          <a href={projectItem.link} target="_blank" className="card-project__link">
            Más info
          </a>
        </div>
        {/* <ul className="card-project__list">
          {
            projectItem.tools.map(tool => (
              <li className="card-project__item" key={tool}>{tool}</li>
            ))
          }
        </ul> */}
      </div>
      <img
        className="card-project__img"
        src={projectItem.img}
        alt={projectItem.title}
      />
    </div>
  )
}

export default CardProject