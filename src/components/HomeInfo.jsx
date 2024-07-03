import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Salut, je m'appelle <span className='font-semibold'>Marvin</span> 👋
            <br/>
            Et je suis Développeur en quête d'une alternance
        </h1>
    ),
    2: (
        <InfoBox 
            text="Passionné par le développement web, j'ai choisi de suivre la formation Concepteur Développeur d'Applications à la Wild Code School en alternance pour mettre en pratique ce que j'ai appris en autodidacte et en formation au sein d'une entreprise innovante."
            link="/about"
            btnText="Plus encore"
        />
    ),
    3: (
        <InfoBox 
            text="J'ai réalisé divers projets pour améliorer mes compétences en développement web"
            link="/projects"
            btnText="Mon Portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Besoin d'un alternant en tant que développeur? Je serais ravi de répondre à vos besoins !"
            link="/contact"
            btnText="Contactez-moi"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo