type RightContentProps = React.PropsWithChildren<{

}>

export const RightContent: React.FC<RightContentProps> = (props) => {
    return (
        <div className='w-full'>
            {props.children}
        </div>
    )
}
