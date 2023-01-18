import {
  PersonalProjectsBlock,
  ProjectType,
  SkillsBlock,
  SkillType,
  YearItem,
} from '@/modules/cv/components/Block'
import { Heading } from '@/modules/cv/components/Heading'
import { WorkExperienceBlock } from '@/modules/cv/components/Block/WorkExperienceBlock'

const experiences: YearItem[] = [
  { title: 'T-MAPY s.r.o.', months: 6, positions: ['Software Developer'], description: 'foo' },
  {
    title: 'DALTEN media s.r.o.',
    months: 14,
    positions: ['Software Developer'],
    description: 'foo',
  },
  {
    title: 'PrePay s.r.o.',
    months: 26,
    positions: ['Development Lead', 'DevOps', 'Product Owner'],
    description: 'foo',
  },
  { epoch: 'Freelance Epoch' },
  {
    title: 'Festival Praha září',
    months: 1,
    positions: ['Software Developer'],
    description: 'foo',
  },
  {
    title: 'iCOOL Energy s.r.o.',
    months: 3,
    positions: ['Software Developer'],
    description: 'foo',
  },
  {
    title: 'Destinio s.r.o.',
    months: 3,
    positions: ['Software Developer', 'DevOps'],
    description: 'foo',
  },
  {
    title: 'DIGIZA s.r.o.',
    months: 14,
    positions: ['Founder, CEO, CTO', 'Software Developer', 'DevOps'],
    description: 'foo',
  },
  {
    title: 'Kafe Nebo Drink',
    months: 1,
    positions: ['Software Developer', 'DevOps'],
    description: 'foo',
  },
  {
    title: 'Valdštejnovo Muzeum s.r.o.',
    months: 6,
    positions: ['Software Developer', 'DevOps'],
    description: 'foo',
  },
  {
    title: 'American Trade s.r.o.',
    months: 2,
    positions: ['Software Developer', 'DevOps'],
    description: 'foo',
  },
  { title: 'Mivert s.r.o.', months: 2, positions: ['Product Owner'], description: 'foo' },
  { title: 'Developmedia', months: 1, positions: ['Software developer'], description: 'foo' },
  {
    title: 'KOMÍNY CZ s.r.o.',
    months: 14,
    positions: ['Software Developer', 'DevOps'],
    description: 'foo',
  },
  {
    title: 'Česká asociace farmaceutických firem z.s.p.o.',
    months: 2,
    positions: ['Software Developer'],
    description: 'foo',
  },
  {
    title: 'PPM Financial Investment s.r.o.',
    months: 14,
    positions: ['Software Developer', 'Product Owner', 'Founder', 'CTO'],
    description: 'foo',
  },
  {
    title: 'Parysův rybářský ráj s.r.o.',
    months: 24,
    positions: ['Senior Software Developer'],
    description: 'foo',
  },
]

const personalProjects: ProjectType[] = [
  { title: 'A.I. Miniprojects' },
  { title: 'Maki Tutorials' },
  { title: 'E-commerce Boilerplate' },
  { title: 'Dokumentoid' },
  { title: 'Jira Notificator' },
  { title: 'Fortetto Framework' },
]

const skillsRight: SkillType[] = [
  { title: 'PHP', value: 80 },
  { title: 'Symfony framework', value: 77, subCategory: true },
  { title: 'JavaScript', value: 99 },
  { title: 'NodeJS', value: 99, subCategory: true },
  { title: 'Prisma', value: 90, subCategory: true },
  { title: 'NestJS', value: 78, subCategory: true },
  { title: 'React', value: 100, subCategory: true },
  { title: 'React-Admin', value: 80, subCategory: true },
  { title: 'NextJS', value: 100, subCategory: true },
  { title: 'Material UI', value: 100, subCategory: true },
  { title: 'BlitzJS', value: 100, subCategory: true },
  { title: 'Typescript', value: 80, subCategory: true },
  { title: 'Golang', value: 88 },
  { title: 'Rust', value: 30 },
  { title: 'Serverless', value: 50 },
  { title: 'HTML', value: 95 },
  { title: 'CSS', value: 60 },
  { title: 'SASS', value: 70 },
  { title: 'LESS', value: 70 },
  { title: 'Tailwind', value: 95 },
  { title: 'MySQL', value: 80 },
  { title: 'PostgreSQL', value: 75 },
  { title: 'C#', value: 65 },
  { title: 'ASP.NET', value: 60, subCategory: true },
]
const skillsLeft: SkillType[] = [
  { title: 'OOP', value: 99 },
  { title: 'Functional Programming', value: 80 },
  { title: 'Speech', value: 80 },
  { title: 'Management', value: 90 },
  { title: 'Software Engineering', value: 90 },
  { title: 'Educating', value: 96 },
  { title: 'REST API', value: 100 },
  { title: 'GraphQL', value: 80 },
  { title: 'Docker', value: 95 },
  { title: 'Linux', value: 100 },
  { title: 'Windows', value: 40 },
]
export const CVModule: React.FC = () => {
  return (
    <main>
      <div className="flex flex-col items-center mt-10 ml-8">
        <Heading level="H1" className="tracking-widest" disableLetterSpacing>
          Maki <span className="md:ml-0 ml-12">Vlach</span>
        </Heading>
        <Heading level="H2" className="tracking-widest mt-4" disableLetterSpacing disableBold>
          Software engineer
        </Heading>
      </div>

      <div className="mx-8">
        <div className="mt-16">
          <WorkExperienceBlock items={experiences} />
        </div>
        <div className="mt-14">
          <PersonalProjectsBlock projects={personalProjects} />
        </div>
        <div className="mt-14">
          <SkillsBlock skillsRight={skillsRight} skillsLeft={skillsLeft} />
        </div>
      </div>
    </main>
  )
}
