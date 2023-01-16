type H1Props = React.PropsWithChildren<{
    level?: 'H1' | 'H2' | 'H3'
    className?: string
    disableBold?: boolean
    disableLetterSpacing?: boolean
}>

export const Heading: React.FC<H1Props> = ({disableBold = false, disableLetterSpacing = false, ...props}) => {
    const classNames = `${!disableBold ? 'font-bold' : ''} ${!disableLetterSpacing ? 'tracking-widest' : ''} text-gray-600`
    switch (props.level) {
        case 'H1':
            return <h1 className={classNames + ' text-7xl ' + props.className}>{props.children}</h1>
        case 'H2':
            return <h1 className={classNames + ' text-2xl '  + props.className}>{props.children}</h1>
        case 'H3':
            return <h3 className={classNames + ' '  + props.className}>{props.children}</h3>
        default:
            return <div>No such option exists!</div>
    }
}