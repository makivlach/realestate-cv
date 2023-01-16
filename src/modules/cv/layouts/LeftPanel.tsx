type LeftPanelProps = React.PropsWithChildren<{

}>

export const LeftPanel: React.FC<LeftPanelProps> = (props) => {
    return (
        <div style={{backgroundColor: '#e3dbd1'}}>
        <div className='h-full flex flex-col px-14'>
            {props.children}
            </div>
        </div>
    )
}
