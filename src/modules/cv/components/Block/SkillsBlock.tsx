import {SectionBlock, SectionBlockProps} from "@/modules/cv/components/Block/SectionBlock";
import { GiSkills } from 'react-icons/gi'
import ProgressBar from "@/modules/cv/components/ProgressBar/ProgressBar";
import {Text} from "@/modules/cv/components/Text";
import {useMemo} from "react";


type SkillType = {
    value?: number
    title: string
}

type SkillRowProps = {
    skills?: SkillType[]
}

const SkillsColumn: React.FC<SkillRowProps> = (props) => {
    return <div className='flex flex-col gap-4 w-full'>
        { props.skills?.map( skill => <div>
            <Text level='span' className='w-14'>{skill.title}</Text>
            <ProgressBar value={skill.value}/>
        </div> )}
    </div>
}

type SkillsBlockProps = {
}

const Skills: SkillType[] = [
    {title: 'PHP', value: 80},
    {title: 'Symfony framework', value: 77},
    {title: 'NodeJS', value: 80},
    {title: 'React', value: 100},
    {title: 'NextJS', value: 100},
    {title: 'BlitzJS', value: 100},
    {title: 'Typescript', value: 80},
    {title: 'Golang', value: 88},
    {title: 'Rust', value: 30},
    {title: 'Serverless', value: 50},
    {title: 'CSS', value: 60},
    {title: 'MySQL', value: 80},
    {title: 'PostgreSQL', value: 75},
    {title: 'C#', value: 65},
    {title: 'ASP.NET', value: 60},
]

export const SkillsBlock: React.FC<SkillsBlockProps> = ({...props}) => {
    return <SectionBlock title='Skills' icon={GiSkills}>
        <div className='ml-12 flex flex-col md:flex-row gap-4'>
        <div className='md:1/2 w-full'>
                <SkillsColumn skills={Skills} />
            </div>
            <div className='md:1/2 w-full'>
                <SkillsColumn skills={Skills} />
            </div>
        </div>
    </SectionBlock>
}