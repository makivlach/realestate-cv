import {
  AboutMeBlock,
  BasicInfoBlock,
  BasicInfoType,
  PersonalityBlock,
  PersonalityType,
} from '@/modules/cv/components/Block'
import { Heading } from '@/modules/cv/components/Heading'

const basicInfos: BasicInfoType[] = [
  { title: '27 let' },
  { title: '7 let kariéry v IT' },
  { title: 'Práce na plný úvazek' },
  { title: 'Stabilní příjem' },
  { title: 'Žádná zvířátka' },
  { title: 'Žádná insolvence' },
]

const personalities: PersonalityType[] = [
  { title: 'Ambiciozní - vztyčuji si vysoké cíle.' },
  { title: 'Vytrvalá - umím zatnout zuby a jít si za svými sny.' },
  { title: 'Empatická - nebojím se prokázat emoce.' },
  { title: 'Zásadová - nemám ráda někoho zklamat.' },
  { title: 'Učenlivá - každý den pracuji na sobě.' },
  { title: 'Open-minded - snažím se o pochopení druhých.' },
]

export const CVModule: React.FC = () => {
  return (
    <main>
      <div className="flex flex-col items-center mt-10 ml-8">
        <Heading level="H1" className="tracking-widest" disableLetterSpacing>
          Maki <span className="md:ml-0 ml-12">Vlach</span>
        </Heading>
        <Heading level="H2" className="tracking-widest mt-4" disableLetterSpacing disableBold>
          Software engineer
        </Heading>
      </div>

      <div className="mx-8">
        <div className="flex flex-col lg:flex-row  gap-5 mt-16">
          <div className="w-full">
            <BasicInfoBlock infos={basicInfos} />
          </div>
          <div className="w-full">
            <PersonalityBlock personalities={personalities} />
          </div>
        </div>
        <div className="mt-14 md:ml-6">
          <AboutMeBlock />
        </div>
      </div>
    </main>
  )
}
