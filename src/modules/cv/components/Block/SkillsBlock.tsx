import {SectionBlock, SectionBlockProps} from "@/modules/cv/components/Block/SectionBlock";
import { GiSkills } from 'react-icons/gi'

type SkillsBlockProps = {
}

export const SkillsBlock: React.FC<SkillsBlockProps> = ({...props}) => {
    return <SectionBlock title='Skills' icon={GiSkills} />
}