import {IoIosPin, IoIosCall, IoIosMail}  from 'react-icons/io'
import React from "react";
import {Heading} from "@/modules/cv/components/Heading";
import {Text} from "@/modules/cv/components/Text";
type ContactBlockProps = {
    address?: string | React.ReactNode
    phone?: string | React.ReactNode
    email?: string | React.ReactNode
}

export const ContactBlock: React.FC<ContactBlockProps> = (props) => {

    return (
        <div>
            <Heading level='H2'>Contact</Heading>
            <div className='mt-2 flex flex-col gap-1'>
                {props.address ? <Text level='span' className='flex gap-2'><IoIosPin size={24} className='mt-1' /> {props.address}</Text> : null}
                {props.phone ? <Text level='span' className='flex items-center gap-2'><IoIosCall size={24} /> <a href='mob:+420604537549'>{props.phone}</a></Text> : null}
                {props.email ? <Text level='span' className='flex items-center gap-2'><IoIosMail size={24} /> <a href='mailto:marketa@vlach.io'>{props.email}</a></Text> : null}
            </div>
        </div>
    )
}
