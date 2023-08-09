const Paragraph: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return <p className="text-gray-600 text-justify text-xl">{props.children}</p>
}

export const AboutMeBlock = () => {
  return (
    <div>
      <Paragraph>lolololo</Paragraph>
    </div>
  )
}
