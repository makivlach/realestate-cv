import { SectionBlock } from '@/modules/cv/components/Block/SectionBlock'
import { AiOutlineHeart } from 'react-icons/ai'
import { Text } from '@/modules/cv/components/Text'
import { Bullet } from '@/modules/cv/components/Shapes'

export type PersonalityType = {
  title?: string
  description?: string
}

type PersonalityTypeProps = {
  personalities?: PersonalityType[]
}

export const PersonalityBlock: React.FC<PersonalityTypeProps> = ({ ...props }) => {
  return (
    <SectionBlock title="Osobnost" icon={AiOutlineHeart} encircle>
      {props.personalities?.map((i, index) => (
        <div key={`personal-projects-${index}`} className="mt-6 flex items-start">
          <div className="flex  items-center">
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
