import React, {ElementType, useMemo} from "react";


export type IconAvatarProps = {
    icon?: React.ElementType<React.PropsWithChildren<{className?: string, height?: string, width?: string}>>
    iconClassName?: string
    className?: string
    style?: React.CSSProperties
}

export const IconAvatar: React.FC<IconAvatarProps> = ({className = '', iconClassName = '', ...props}) => {
    const _IconElement = useMemo(() => props.icon , [props.icon])
    return (
        <div className={'rounded-full border-2 border-black overflow-hidden w-auto h-full p-1 ' + className} style={props.style}>
            {_IconElement ? <_IconElement height='auto' width='auto' className={' ' + iconClassName}  /> : null }
        </div>
    )
}