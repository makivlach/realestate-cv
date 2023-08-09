import { Heading } from '@/modules/cv/components/Heading'

const Paragraph: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return <p className="mt-4 italic text-gray-600 text-justify text-xl">{props.children}</p>
}

export const AboutMeBlock = () => {
  return (
    <div>
      <Heading level="H3" className="text-2xl">
        Kdo je Maki?
      </Heading>
      <div className="mt-2">
        <Paragraph>
          Narodila jsem se 12.01.1996 v Jičíně. Vystudovala jsem střední školu průmyslovou v Praze,
          což byla jedna z nejlepších zkušeností mého života, protože mi mnohonásobně rozšířila svět
          - z malého města do metropole. Vždycky jsem chtěla dosahovat vysokých cílů a cítila, že mě
          život k tomu vede, jen jsem nevěděla proč.
        </Paragraph>
        <Paragraph>
          Po maturitě jsem se odhodlala přestěhovat do Ostravy a započala svou kariéru vě vývoji
          softwaru ve vědeckotechnologického centru v Ostravě. Zde jsem dostala první zkušenosti o
          tom, jaké to je pracovat ve středně větší společnosti. Náplní naší práce bylo vývoj
          mapových aplikací pro verřejnou správu. Naším největším zákazníkem byl, mimo jiné,
          magistrát města Brna.
        </Paragraph>
        <Paragraph>
          Dále jsem začala pracovat pro realitní oddělení centrum.cz. Cítila jsem se, že chci své
          schopnosti rozvíjet i mimo zkušenosti pro věřejnou správu a tedy nyní jsem měla zkušenosti
          i se zakázkovým vývojem pro zákazníky a údržbu větších aplikací.
        </Paragraph>
        <Paragraph>
          Naučila jsem se, že vývoj softwaru je něco, jako architektura domu. Obdobně jako u stavění
          domu, musíte položit základy, rozmyslet kudy povedou rozvody, rozmyslet si, jestli je
          architektura dostatečné stabilní a velmi flexibilní a rozšířitelná, protože do této
          "nemovitosti" budete muset zasahovat často a opravdu nechcete, aby se vám stavba rozpadla.
        </Paragraph>
        <Paragraph>
          Má kariéra pokračovala dál a já začala pracovat jako OSVČ, což dělám dodnes. Na své
          bilanci mám něco okolo 30+ projektů. Zjistila jsem za tu dobu, že můj dar není jen v
          technologiích, ale také v tom pomáhat lidem a naslouchat jim. Využívám své schopnosti a
          své znalosti také k tomu, abych lidem v jejich těžkostech pomohla.
        </Paragraph>
        <Paragraph>
          Abych zvládala svou velmi psychicky náročnou práci, tak si zakládám na pravidelném denním
          fyzickém tréninku. Ráda chodím běhat, dělám workout a motivuji ostatní díky fotografiím
          svého progressu, který sdílím na sociálních sítích.
        </Paragraph>
        <Paragraph>
          Myslím, že moje výhoda není v tom, že se schovávám za masku, ale ba naopak projevuji velmi
          viditelně své pocity a říkám, co si myslím. Dokážu to dělat ale v diplomatickém duchu s
          úctou k situaci ostatních lidí. Mou filosofií je to, že všichni žijeme naše životy tak
          nejlépe, jak si myslíme, avšak občas se na té cestě ztratíme.
        </Paragraph>
      </div>

      <Heading level="H3" className="mt-8 text-2xl">
        Předešlá zkušenost s bydlením
      </Heading>

      <Paragraph>
        Dosud jsem bydlela v 2+kk v Jičíně po 3 roky. Jakožto slečna jsem se musela naučit řešit
        spoustu věcí sama. Myslím si, že ty 3 roky mi daly spoustu. Ať už jde o instalatérskou
        údržbu, úklid, úctu k sousedům a hlavně k respektu majetku ostatním lidí. To poslední, co
        bych si přála je to, abych někomu způsobila škodu.
      </Paragraph>
      <Paragraph>
        Když jsem kdysi chodila na brigády, tak jsem se naučila důležitou lekci mezi tím, co to je
        "pracovat" a co to je "udržovat". Mým cílem je, aby pravidelné údržby byly co nejkvalitnější
        a nejrychlejší. Proto každý den uklízím po troškách, aby u mě neexistovaly žádné "vánoční
        úklidy".
      </Paragraph>
      <Paragraph>
        S platbou jsem se nikdy neopozdila. Nastavuji si na platby trvalý příkaz, abych nemusela na
        nic myslet. I když to přechodné období při COVIDu bylo náročné, tak jsem si zakládala na
        tom, abych nezpůsobovala problémy pro pana majitele současného bydlení.
      </Paragraph>

      <Heading level="H3" className="mt-8 text-2xl">
        Závěrečná slova
      </Heading>

      <Paragraph>
        Jsem člověk, co se snaží dělat svět lepším. Věřím, že za svou tvrdou práci mě život na
        oplátku směruje těmi správnými směry a já si zakládám na tom, abych vždycky sebe, nebo svět
        posunula zase o krok dál.
      </Paragraph>

      <Paragraph>
        Důvod, proč se chci stěhovat do Karlových varů je ten, že jsem se zamilovala do Německého
        jazyka a jiných kultur. Karlovy vary jsem navštívila v roce 2021 a myslím, že je jak
        nádherné, tak i plné kultury a zároveň i geograficky blízko německa, což mi udělá moc velkou
        radost.
      </Paragraph>
      <Paragraph>
        Jelikož jsem člověk, co žije v "epochách", tak nehledám nic na pár měsíců. U mě se bavíme
        řádově o letech, což si myslím, že je atraktivní pro majitele.
      </Paragraph>
      <Paragraph>
        Myslím si, že byt je nádherný a moderní a svěží, perfektní pro jednoho člověka a já využiji
        veškeré své dosavadní zkušenosti k tomu, abych ho udržovala a případně v budoucnu předala v
        lepším stavu, než ho dostanu.
      </Paragraph>

      <div className="mt-12 mr-12 flex flex-row-reverse">
        <img src={'/photos/signature.png'} width={300} alt="sign" />
      </div>
    </div>
  )
}
