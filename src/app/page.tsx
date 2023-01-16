import  '@/app/tailwind.css'
import {NextPage} from "next";
import { LeftPanel, RightContent } from "@/modules/cv/layouts";
import {PhotoAvatar} from "@/modules/cv/components/Avatar";
import {ContactBlock} from "@/modules/cv/components/Block/ContactBlock";
import {Heading} from "@/modules/cv/components/Heading";
import {Text} from "@/modules/cv/components/Text";
import {GithubIcon} from "@/components/Icons";
import {PersonalProjectsBlock, SkillsBlock} from "@/modules/cv/components/Block";
import {WorkExperienceBlock} from "@/modules/cv/components/Block/WorkExperienceBlock";

const HomePage: NextPage = () => {
  return (
    <main className='min-h-full'>
        <div className='min-h-full h-full w-full flex md:flex-row flex-col'>
            <LeftPanel>
                <div className='flex flex-col justify-between h-full '>
                    <div className='flex flex-col items-center'>
                        <div className='mt-4'>
                            <PhotoAvatar src='/photos/avatar.jpg' size={180 } />
                        </div>

                        <div className='mt-12'>
                            <ContactBlock address={<div className='flex flex-col'>
                                                    <Text level='p'>Zahradní 1290,</Text>
                                                    <Text level='p'>Jičín 506 01</Text>
                                                </div>}
                                          phone='+420 604 537 549'
                                          email='marketa@vlach.io' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 pb-4 mt-10 md:mt-0'>
                        <Heading level='H2' className='text-center w-52'>Source Code</Heading>
                        <Text level='p' className='text-center'>This project is publicly available on Github!</Text>
                        <a href='https://github.com/makivlach/cv' target='_blank'><GithubIcon /></a>
                    </div>
                </div>
            </LeftPanel>
            <RightContent>
                <div className='flex flex-col items-center mt-10 ml-8'>
                    <Heading level='H1'
                             className='tracking-widest'
                             disableLetterSpacing>
                        Maki <span className='md:ml-0 ml-12'>Vlach</span>
                    </Heading>
                    <Heading level='H2'
                             className='tracking-widest mt-4'
                             disableLetterSpacing
                             disableBold>
                        Software engineer
                    </Heading>
                </div>

                <div className='mx-8'>
                <div className='mt-16'>
                    <WorkExperienceBlock items={[
                                       {title: 'T-MAPY s.r.o.', months: 6, positions: ['Software Developer'], description: 'foo'},
                                       {title: 'DALTEN media s.r.o.', months: 14, positions: ['Software Developer'], description: 'foo'},
                                       {title: 'PrePay s.r.o.', months: 26, positions: ['Development Lead', 'DevOps', 'Product Owner'], description: 'foo'},
                                       {epoch: 'Freelance Epoch'},
                                       {title: 'iCOOL Energy s.r.o.', months: 3, positions: ['Software Developer'], description: 'foo'},
                                       {title: 'Destinio s.r.o.', months: 14, positions: ['Software Developer', 'DevOps'], description: 'foo'},
                                       {title: 'DIGIZA s.r.o.', months: 14, positions: ['Founder, CEO, CTO', 'Software Developer', 'DevOps'], description: 'foo'},
                                       {title: 'Kafe Nebo Drink', months: 14, positions: ['Software Developer', 'DevOps'], description: 'foo'},
                                       {title: 'Valdštejnovo Muzeum s.r.o.', months: 14, positions: ['Software Developer', 'DevOps'], description: 'foo'},
                                       {title: 'American Trade s.r.o.', months: 14, positions: ['Software Developer', 'DevOps'], description: 'foo'},
                                       {title: 'Mivert s.r.o.', months: 14, positions: ['Product Owner'], description: 'foo'},
                                       {title: 'Developmedia', months: 1, positions: ['Software developer'], description: 'foo'},
                                       {title: 'KOMÍNY CZ s.r.o.', months: 14, positions: ['Software Developer', 'DevOps'], description: 'foo'},
                                       {title: 'Česká asociace farmaceutických firem z.s.p.o.', months: 2, positions: ['Software Developer'], description: 'foo'},
                                       {title: 'PPM Financial Investment s.r.o.', months: 14, positions: ['Software Developer', 'Product Owner', 'Founder', 'CTO'], description: 'foo'},
                                       {title: 'Parysův rybářský ráj s.r.o.', months: 14, positions: ['Senior Software Developer'], description: 'foo'},
                                   ]} />
                </div>
                    <div className='mt-14'>
                        <PersonalProjectsBlock projects={[
                            {title: 'A.I. Miniprojects'},
                            {title: 'Maki Tutorials'},
                            {title: 'E-commerce Boilerplate'},
                            {title: 'Dokumentoid'},
                            {title: 'Jira Notificator'},
                            {title: 'Fortetto Framework'},
                        ]} />
                    </div>
                    <div className='mt-14'>
                        <SkillsBlock />
                    </div>
                </div>
            </RightContent>
        </div>
    </main>
  )
}

export default HomePage
