type PhotoAvatarProps = {
  src?: string
  className?: string
  size?: string | number
}

export const PhotoAvatar: React.FC<PhotoAvatarProps> = ({ className = '', ...props }) => {
  return (
    <div
      className={
        'rounded-full border-4 border-black overflow-hidden bg-avatar w-full h-full bg-cover bg-no-repeat bg-center' +
        className
      }
      style={{ width: props.size, height: props.size }}
    />
  )
}
