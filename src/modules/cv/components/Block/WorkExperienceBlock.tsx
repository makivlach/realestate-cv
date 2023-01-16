import {YearDataBlock, YearDataBlockProps} from "@/modules/cv/components/Block/YearDataBlock";
import {MdBusinessCenter} from "react-icons/md";
import React from "react";

type WorkExperienceBlockProps = {
} & Pick<YearDataBlockProps, 'items'>


export const WorkExperienceBlock: React.FC<WorkExperienceBlockProps> = ({...props}) => {
    return <YearDataBlock {...props}
                          icon={MdBusinessCenter}
                          title='WORK EXPERIENCE'
                          />
}

