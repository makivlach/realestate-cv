import { PersonalProjectsBlock, SkillsBlock} from "@/modules/cv/components/Block";
import {Heading} from "@/modules/cv/components/Heading";
import {WorkExperienceBlock} from "@/modules/cv/components/Block/WorkExperienceBlock";

const experiences = [
    {title: 'T-MAPY s.r.o.', months: 6, positions: ['Software Developer'], description: 'foo'},
    {title: 'DALTEN media s.r.o.', months: 14, positions: ['Software Developer'], description: 'foo'},
    {title: 'PrePay s.r.o.', months: 26, positions: ['Development Lead', 'DevOps', 'Product Owner'], description: 'foo'},
    {epoch: 'Freelance Epoch'},
    {title: 'Festival Praha září', months: 1, positions: ['Software Developer'], description: 'foo'},
    {title: 'iCOOL Energy s.r.o.', months: 3, positions: ['Software Developer'], description: 'foo'},
    {title: 'Destinio s.r.o.', months: 3, positions: ['Software Developer', 'DevOps'], description: 'foo'},
    {title: 'DIGIZA s.r.o.', months: 14, positions: ['Founder, CEO, CTO', 'Software Developer', 'DevOps'], description: 'foo'},
    {title: 'Kafe Nebo Drink', months: 1, positions: ['Software Developer', 'DevOps'], description: 'foo'},
    {title: 'Valdštejnovo Muzeum s.r.o.', months: 6, positions: ['Software Developer', 'DevOps'], description: 'foo'},
    {title: 'American Trade s.r.o.', months: 2, positions: ['Software Developer', 'DevOps'], description: 'foo'},
    {title: 'Mivert s.r.o.', months: 2, positions: ['Product Owner'], description: 'foo'},
    {title: 'Developmedia', months: 1, positions: ['Software developer'], description: 'foo'},
    {title: 'KOMÍNY CZ s.r.o.', months: 14, positions: ['Software Developer', 'DevOps'], description: 'foo'},
    {title: 'Česká asociace farmaceutických firem z.s.p.o.', months: 2, positions: ['Software Developer'], description: 'foo'},
    {title: 'PPM Financial Investment s.r.o.', months: 14, positions: ['Software Developer', 'Product Owner', 'Founder', 'CTO'], description: 'foo'},
    {title: 'Parysův rybářský ráj s.r.o.', months: 24, positions: ['Senior Software Developer'], description: 'foo'},
]

const personalProjects = [
    {title: 'A.I. Miniprojects'},
    {title: 'Maki Tutorials'},
    {title: 'E-commerce Boilerplate'},
    {title: 'Dokumentoid'},
    {title: 'Jira Notificator'},
    {title: 'Fortetto Framework'},
]
export const CVModule: React.FC = () => {
    return <main>
            <div className='flex flex-col items-center mt-10 ml-8'>
                <Heading level='H1'
                         className='tracking-widest'
                         disableLetterSpacing>
                    Maki <span className='md:ml-0 ml-12'>Vlach</span>
                </Heading>
                <Heading level='H2'
                         className='tracking-widest mt-4'
                         disableLetterSpacing
                         disableBold>
                    Software engineer
                </Heading>
            </div>

            <div className='mx-8'>
                <div className='mt-16'>
                    <WorkExperienceBlock items={experiences} />
                </div>
                <div className='mt-14'>
                    <PersonalProjectsBlock projects={personalProjects} />
                </div>
                <div className='mt-14'>
                    <SkillsBlock />
                </div>
            </div>
    </main>
}