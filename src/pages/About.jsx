import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {skills, experiences, socialLinks} from '../constants';
import CTA from '../components/CTA';
import CTAA from '../components/CTAA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Salut, c'est <span className='blue-gradient_text font-semibold drop-shadow'>Marvin</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Depuis peu, j'ai pris la décison de suivre la formation de Développeur Concepteur d'Applications au sein de chez Le Réacteur
           en alternance puisque j’avais déjà une quelques notions pour le développement web, 
           je me suis lancé dedans car c’est le domaine où je me sens le plus à l’aise. </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Mes Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Expériences professionnelles</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>J'ai acquis une expérience polyvalente en travaillant dans divers secteurs. 
            Chez KFC et Paul, j'ai occupé le poste d'employé polyvalent, 
            où j'ai développé mes compétences en travail d'équipe et en adaptabilité. 
            Mon travail de jardinage dans un parc m'a permis de cultiver ma créativité et mon sens de l'initiative. 
            En tant que magasinier à la BNF, j'ai affiné mon sens de l'organisation et mon attention aux détails. 
            Enfin, mon rôle de préparateur de commandes chez Amazon a renforcé ma capacité à travailler efficacement sous pression. 
            Toutes ces expériences m'ont permis d'acquérir des compétences transférables précieuses pour mon avenir professionnel.
            <br></br>
            Voici un aperçu de mes missions:</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;