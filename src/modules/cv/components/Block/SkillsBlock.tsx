import {SectionBlock, SectionBlockProps} from "@/modules/cv/components/Block/SectionBlock";
import { GiSkills } from 'react-icons/gi'
import ProgressBar from "@/modules/cv/components/ProgressBar/ProgressBar";

type SkillsBlockProps = {
}

export const SkillsBlock: React.FC<SkillsBlockProps> = ({...props}) => {
    return <SectionBlock title='Skills' icon={GiSkills}>
        <ProgressBar value={80}/>
    </SectionBlock>
}