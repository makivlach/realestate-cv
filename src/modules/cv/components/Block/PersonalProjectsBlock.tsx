import { SectionBlock, SectionBlockProps } from '@/modules/cv/components/Block/SectionBlock'
import { IoLogoGameControllerB } from 'react-icons/io'
import { Text } from '@/modules/cv/components/Text'
import { Bullet } from '@/modules/cv/components/Shapes'

export type ProjectType = {
  title?: string
  description?: string
}

type PersonalProjectsBlockProps = {
  projects?: ProjectType[]
}

export const PersonalProjectsBlock: React.FC<PersonalProjectsBlockProps> = ({ ...props }) => {
  return (
    <SectionBlock title="Personal Projects" icon={IoLogoGameControllerB}>
      {props.projects?.map((i, index) => (
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
