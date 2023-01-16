type TextProps = React.PropsWithChildren<{
    level?: 'span' | 'p'
    className?: string
}>

export const Text: React.FC<TextProps> = (props) => {
    const classes = 'text-gray-600'
    switch (props.level) {
        case 'p':
            return <p className={classes + ' ' + props.className}>{props.children}</p>
        case 'span':
            return <span className={classes + ' ' + props.className}>{props.children}</span>
        default:
            return <div>No such level exists!</div>
    }
}