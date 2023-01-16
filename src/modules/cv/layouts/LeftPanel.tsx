import {PRIMARY_COLOR} from "@/modules/cv/const/colors";

type LeftPanelProps = React.PropsWithChildren<{

}>

export const LeftPanel: React.FC<LeftPanelProps> = (props) => {
    return (
        <div style={{backgroundColor: PRIMARY_COLOR}}>
             <div className='md:h-screen h-full flex flex-col px-14 sticky top-0'>
                {props.children}
            </div>
        </div>
    )
}
