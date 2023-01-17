import { BACKGROUND_COLOR } from '@/modules/cv/const/colors'

type RightContentProps = React.PropsWithChildren<{}>

export const RightContent: React.FC<RightContentProps> = (props) => {
  return (
    <div className="w-full pb-20" style={{ backgroundColor: BACKGROUND_COLOR }}>
      {props.children}
    </div>
  )
}
