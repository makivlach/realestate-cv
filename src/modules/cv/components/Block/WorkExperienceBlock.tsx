import { YearDataBlock, YearDataBlockProps } from '@/modules/cv/components/Block/YearDataBlock'
import { BiHappyHeartEyes } from 'react-icons/bi'
import React from 'react'

type BasicInfoBlockProps = {} & Pick<YearDataBlockProps, 'items'>

export const BasicInfoBlock: React.FC<BasicInfoBlockProps> = ({ ...props }) => {
  return <YearDataBlock {...props} icon={BiHappyHeartEyes} title="Základní informace" />
}
