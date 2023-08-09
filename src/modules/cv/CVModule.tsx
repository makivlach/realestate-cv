import {
  BasicInfoBlock,
  BasicInfoType,
  SkillsBlock,
  SkillType,
} from '@/modules/cv/components/Block'
import { Heading } from '@/modules/cv/components/Heading'
import { PersonalityBlock, PersonalityType } from '@/modules/cv/components/Block/PersonalityBlock'

const basicInfos: BasicInfoType[] = [
  { title: '27 let' },
  { title: '7 let kariéry v IT' },
  { title: 'Práce na plný úvazek' },
  { title: 'Stabilní příjem' },
  { title: 'Žádná zvířátka' },
  { title: 'Žádná insolvence' },
]

const personalities: PersonalityType[] = [
  { title: 'Ambiciozní - vztyčuji si vysoké cíle.' },
  { title: 'Vytrvalá - umím zatnout zuby a jít si za svými sny.' },
  { title: 'Empatická - nebojím se prokázat emoce.' },
  { title: 'Zásadová - nemám ráda někoho zklamat.' },
  { title: 'Učenlivá - každý den pracuji na sobě.' },
  { title: 'Open-minded - snažím se o pochopení druhých.' },
]

const skillsRight: SkillType[] = [
  { title: 'PHP', value: 80 },
  { title: 'Symfony framework', value: 77, subCategory: true },
  { title: 'Doctrine', value: 77, subCategory: true },
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
        <div className="flex flex-col lg:flex-row  gap-5 mt-16">
          <div className="w-full">
            <BasicInfoBlock infos={basicInfos} />
          </div>
          <div className="w-full">
            <PersonalityBlock personalities={personalities} />
          </div>
        </div>
        <div className="mt-14">
          <SkillsBlock skillsRight={skillsRight} skillsLeft={skillsLeft} />
        </div>
      </div>
    </main>
  )
}
