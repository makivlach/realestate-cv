import {SectionBlock, SectionBlockProps} from "@/modules/cv/components/Block/SectionBlock";
import { IoLogoGameControllerB } from 'react-icons/io'

type PersonalProjectsBlockProps = {
}

export const PersonalProjectsBlock: React.FC<PersonalProjectsBlockProps> = ({...props}) => {
    return <SectionBlock title='Personal Projects' icon={IoLogoGameControllerB} />
}