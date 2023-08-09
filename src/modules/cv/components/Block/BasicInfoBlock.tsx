import { SectionBlock } from '@/modules/cv/components/Block/SectionBlock'
import { AiOutlineUser } from 'react-icons/ai'
import { Text } from '@/modules/cv/components/Text'
import { Bullet } from '@/modules/cv/components/Shapes'

export type BasicInfoType = {
  title?: string
  description?: string
}

type PersonalProjectsBlockProps = {
  infos?: BasicInfoType[]
}

export const BasicInfoBlock: React.FC<PersonalProjectsBlockProps> = ({ ...props }) => {
  return (
    <SectionBlock title="Základní informace" icon={AiOutlineUser} encircle>
      {props.infos?.map((i, index) => (
        <div key={`personal-projects-${index}`} className="mt-6 flex items-start">
          <div className="flex items-center">
            <Bullet style={{ right: '0.45rem' }} className="relative" />
            <Text level="span" className="ml-8 font-bold">
              {i.title}
            </Text>
          </div>
        </div>
      ))}
    </SectionBlock>
  )
}
