import { IconAvatar, IconAvatarProps } from '@/modules/cv/components/Avatar'
import { BACKGROUND_COLOR, SECONDARY_COLOR } from '@/modules/cv/const/colors'
import { Heading, HeadingLevels } from '@/modules/cv/components/Heading'

export type SectionBlockProps = React.PropsWithChildren<
  {
    heading?: HeadingLevels
    title: string
    rtl?: boolean
    encircle?: boolean
  } & Pick<IconAvatarProps, 'icon' | 'iconClassName'>
>

export const SectionBlock: React.FC<SectionBlockProps> = (props) => {
  return (
    <div className="h-full">
      <div className={`flex ${props.rtl ? 'flex-row-reverse' : ''} h-full items-center h-7`}>
        <div
          className={`relative flex flex items-center ${
            props.rtl ? 'flex-row-reverse pl-4' : 'pr-4'
          } w-full`}
        >
          <div className="absolute z-[2]">
            <IconAvatar
              icon={props.icon}
              iconClassName="h-8 w-auto text-gray-600"
              style={{ backgroundColor: BACKGROUND_COLOR }}
            />
          </div>
          <div
            style={{ backgroundColor: SECONDARY_COLOR }}
            className={`z-[1] relative ${props.rtl ? 'right-4' : 'left-4'} h-full w-full`}
          >
            <div className="py-1 ml-8">
              <Heading level="H3" className="ml-4 text-lg">
                {props.title}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex h-full ${props.rtl ? 'mr-5' : 'ml-5'} relative`}>
        <div className="mt-4 w-full pb-4">{props.children}</div>

        <div
          className={`absolute ${
            props.rtl ? 'top-0 bottom-0 right-0' : 'top-0 bottom-0 left-0'
          } w-0.5 h-full bg-gray-600`}
        />
        <div
          className={`absolute ${
            props.rtl ? 'bottom-0 left-0 left-0' : 'bottom-0 left-0 right-0'
          } h-0.5 w-full bg-gray-600`}
        />
        {props.encircle ? (
          <div
            className={`absolute top-0 bottom-0 ${
              props.rtl ? 'left-0' : 'right-0'
            } w-0.5 h-full bg-gray-600`}
          />
        ) : null}
      </div>
    </div>
  )
}
