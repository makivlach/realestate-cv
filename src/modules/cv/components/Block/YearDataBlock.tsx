import {Text} from "@/modules/cv/components/Text";
import {SectionBlock, SectionBlockProps} from "@/modules/cv/components/Block/SectionBlock";

type ProjectsDescription = {
    projectName: string

}

type DateItem = {
    months: number
    title: string
    positions?: string[]
    projects?: string[]
    description?: string
}
type EpochItem = {
    epoch: string
}

export type YearDataBlockProps = {
    items?: (DateItem | EpochItem)[]
} & SectionBlockProps

function isItemDataItem(item: DateItem | EpochItem): item is DateItem {
    return !!item && typeof item === 'object' && 'title' in item && 'positions' in item
}
function isItemEpochItem(item: DateItem | EpochItem): item is EpochItem {
    return !!item && typeof item === 'object' && 'epoch' in item
}

const Bullet: React.FC<{style?: React.CSSProperties, className?: string}> = ({className, style, ...props}) => <div {...props} style={{...style, }} className={'rounded-full bg-gray-600 w-5 h-4 md:w-4 ' + className} />

export const YearDataBlock: React.FC<YearDataBlockProps> = ({items, ...props}) => {
    return <SectionBlock {...props}>
                    {items?.map(i => {
                        if (isItemDataItem(i)) {
                            return <div className='mt-6 flex items-start'>
                            <div className='flex items-center'>
                                <Bullet style={{right: '0.45rem'}} className='relative' />
                                <Text level='span' className='ml-8 font-bold uppercase'>{String(i.months).padStart(2, '0')} months</Text>
                            </div>
                            <div className='ml-8 flex flex-col'>
                                <Text level='span'>{i.title}</Text>
                                <Text level='span' className='mt-1 italic text-gray-400'>Positions {i.positions?.join(', ')}</Text>
                                <Text level='p' className='mt-1'>
                                    {i.description}
                                </Text>
                            </div>
                        </div>}

                        if (isItemEpochItem(i)) {
                            return <div className='flex items-center w-full mt-6'>
                                <span className='w-full h-0 border border-dashed border-gray-600' />
                                <Text level='span' className='mx-4 font-bold whitespace-nowrap'>{i.epoch}</Text>
                                <span  className='w-full h-0 border border-dashed border-gray-600' />
                            </div>
                        }
                    })}
    </SectionBlock>
}

