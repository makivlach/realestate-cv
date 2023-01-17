import {SectionBlock, SectionBlockProps} from "@/modules/cv/components/Block/SectionBlock";
import { GiSkills } from 'react-icons/gi'
import ProgressBar from "@/modules/cv/components/ProgressBar/ProgressBar";
import {Text} from "@/modules/cv/components/Text";
import {useMemo} from "react";
import {Bullet, LineHorizontal} from "@/modules/cv/components/Shapes";


type SkillType = {
    value?: number
    title: string
    subCategory?: boolean
}

type SkillRowProps = {
    skills?: SkillType[]
}

const SkillsColumn: React.FC<SkillRowProps> = (props) => {
    return <div className='flex flex-col gap-4 w-full'>
        { props.skills?.map( skill => <div className={`flex items-end gap-2 ${skill.subCategory ? 'ml-8' : ''}`}>
            <div >
                {skill.subCategory ? <LineHorizontal className='mb-3 w-2' /> : null}
            </div>
            <div className='w-full'>
                <Text level='span' className='w-14'>{skill.title}</Text>
                <ProgressBar value={skill.value}/>
            </div>
        </div> )}
    </div>
}

type SkillsBlockProps = {
}

const SkillsRight: SkillType[] = [
    {title: 'PHP', value: 80},
    {title: 'Symfony framework', value: 77, subCategory: true},
    {title: 'JavaScript', value: 99},
    {title: 'NodeJS', value: 99, subCategory: true},
    {title: 'Prisma', value: 90, subCategory: true},
    {title: 'NestJS', value: 78, subCategory: true},
    {title: 'React', value: 100, subCategory: true},
    {title: 'React-Admin', value: 80, subCategory: true},
    {title: 'NextJS', value: 100, subCategory: true},
    {title: 'NextJS', value: 100, subCategory: true},
    {title: 'Material UI', value: 100, subCategory: true},
    {title: 'BlitzJS', value: 100, subCategory: true},
    {title: 'Typescript', value: 80, subCategory: true},
    {title: 'Golang', value: 88},
    {title: 'Rust', value: 30},
    {title: 'Serverless', value: 50},
    {title: 'HTML', value: 95},
    {title: 'CSS', value: 60},
    {title: 'SASS', value: 70},
    {title: 'LESS', value: 70},
    {title: 'Tailwind', value: 95},
    {title: 'MySQL', value: 80},
    {title: 'PostgreSQL', value: 75},
    {title: 'C#', value: 65},
    {title: 'ASP.NET', value: 60, subCategory: true},
]
const Skills: SkillType[] = [
    {title: 'OOP', value: 99},
    {title: 'Functional Programming', value: 80},
    {title: 'Speech', value: 80},
    {title: 'Management', value: 90},
    {title: 'Educating', value: 96},
    {title: 'REST API', value: 100},
    {title: 'GraphQL', value: 80},
]

export const SkillsBlock: React.FC<SkillsBlockProps> = ({...props}) => {
    return <SectionBlock title='Skills' icon={GiSkills}>
        <div className='ml-12 flex flex-col md:flex-row gap-4'>
        <div className='md:1/2 w-full'>
                <SkillsColumn skills={SkillsRight} />
            </div>
            <div className='md:1/2 w-full'>
                <SkillsColumn skills={Skills} />
            </div>
        </div>
    </SectionBlock>
}