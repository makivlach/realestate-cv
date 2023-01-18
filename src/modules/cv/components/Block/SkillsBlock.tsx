import { SectionBlock, SectionBlockProps } from '@/modules/cv/components/Block/SectionBlock'
import { GiSkills } from 'react-icons/gi'
import ProgressBar from '@/modules/cv/components/ProgressBar/ProgressBar'
import { Text } from '@/modules/cv/components/Text'
import { useMemo } from 'react'
import { Bullet, LineHorizontal } from '@/modules/cv/components/Shapes'

export type SkillType = {
  value?: number
  title: string
  subCategory?: boolean
}

type SkillRowProps = {
  skills?: SkillType[]
}

const SkillsColumn: React.FC<SkillRowProps> = (props) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {props.skills?.map((skill, index) => (
        <div
          key={`skills-${props.skills ? props.skills[0]?.title : ''}-${index}`}
          className={`flex items-end gap-2 ${skill.subCategory ? 'ml-8' : ''}`}
        >
          <div>{skill.subCategory ? <LineHorizontal className="mb-3 w-2" /> : null}</div>
          <div className="w-full">
            <Text level="span" className="w-14">
              {skill.title}
            </Text>
            <ProgressBar value={skill.value} />
          </div>
        </div>
      ))}
    </div>
  )
}

type SkillsBlockProps = {
  skillsRight?: SkillType[],
  skillsLeft?: SkillType[],
}


export const SkillsBlock: React.FC<SkillsBlockProps> = ({ ...props }) => {
  return (
    <SectionBlock title="Skills" icon={GiSkills}>
      <div className="ml-12 flex flex-col md:flex-row gap-4">
        <div className="md:1/2 w-full">
          <SkillsColumn skills={props.skillsRight} />
        </div>
        <div className="md:1/2 w-full">
          <SkillsColumn skills={props.skillsLeft} />
        </div>
      </div>
    </SectionBlock>
  )
}
