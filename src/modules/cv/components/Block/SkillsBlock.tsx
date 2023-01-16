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
    {title: 'Symfony framework'},
    {title: 'NodeJS'},
    {title: 'React'},
    {title: 'NextJS'},
    {title: 'BlitzJS'},
    {title: 'Typescript'},
    {title: 'Golang'},
    {title: 'Rust'},
    {title: 'Serverless'},
    {title: 'CSS'},
    {title: 'MySQL'},
    {title: 'PostgreSQL'},
    {title: 'C#'},
    {title: 'ASP.NET'},
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