import { Text } from '@/modules/cv/components/Text'
import { SectionBlock, SectionBlockProps } from '@/modules/cv/components/Block/SectionBlock'
import { Bullet } from '@/modules/cv/components/Shapes'

type ProjectsDescription = {
  projectName: string
}

type DateItem = {
  months: number
  title: string
  positions?: string[]
  projects?: string[]
  description?: string
  href?: string
}
type EpochItem = {
  epoch: string
}

type Item = DateItem | EpochItem

export type YearDataBlockProps = {
  items?: Item[]
} & SectionBlockProps

function isItemDataItem(item: DateItem | EpochItem): item is DateItem {
  return !!item && typeof item === 'object' && 'title' in item && 'positions' in item
}
function isItemEpochItem(item: DateItem | EpochItem): item is EpochItem {
  return !!item && typeof item === 'object' && 'epoch' in item
}

type DataItemRendererProps = {
  item: Item
}

const DataItemRenderer: React.FC<DataItemRendererProps> = (props) => {
  if (isItemDataItem(props.item)) {
    return (
      <div className="mt-6 flex items-start hover:bg-gray-800/5 transition duration-300 py-4">
        <div className="flex items-center">
          <Bullet style={{ right: '0.45rem' }} className="relative" />
          <Text level="span" className="ml-8 font-bold uppercase">
            {String(props.item.months).padStart(2, '0')} months
          </Text>
        </div>
        <div className="ml-8 flex flex-col">
          <Text level="span">{props.item.title}</Text>
          <Text level="span" className="mt-1 italic text-gray-400">
            Positions {props.item.positions?.join(', ')}
          </Text>
        </div>
      </div>
    )
  }

  if (isItemEpochItem(props.item)) {
    return (
      <div className="flex items-center w-full mt-6">
        <span className="w-full h-0 border border-dashed border-gray-600" />
        <Text level="span" className="mx-4 font-bold whitespace-nowrap">
          {props.item.epoch}
        </Text>
        <span className="w-full h-0 border border-dashed border-gray-600" />
      </div>
    )
  }

  return <></>
}

export const YearDataBlock: React.FC<YearDataBlockProps> = ({ items, ...props }) => {
  return (
    <SectionBlock {...props}>
      {items?.map((i, index) => (
        <div key={`year-data-block-${index}`}>
          <DataItemRenderer item={i} />
        </div>
      ))}
    </SectionBlock>
  )
}
