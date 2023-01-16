type PhotoAvatarProps = {
    src?: string
    className?: string
    size?: string | number
}

export const PhotoAvatar: React.FC<PhotoAvatarProps> = ({className = '', ...props}) => {
    return (
        <div className={'rounded-full border-4 border-black overflow-hidden h-fit ' + className} style={{ width: props.size, height: props.size}}>
            <img src={props.src} width={props.size} height={props.size} />
        </div>
    )
}