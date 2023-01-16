import  '@/app/tailwind.css'
import {NextPage} from "next";
import { LeftPanel, RightContent } from "@/modules/cv/layouts";
import {PhotoAvatar} from "@/modules/cv/components/Avatar";
import {ContactBlock} from "@/modules/cv/components/Block/ContactBlock";
import {Heading} from "@/modules/cv/components/Heading";
import {Text} from "@/modules/cv/components/Text";

const HomePage: NextPage = () => {
  return (
    <main className='h-full'>
        <div className='h-full w-full flex'>
            <LeftPanel>
                <div className='mt-4'>
                    <PhotoAvatar src='/photos/avatar.jpg' size={180 } />
                </div>

                <div className='mt-12'>
                    <ContactBlock address={<div className='flex flex-col'>
                                            <Text level='p'>Zahradní 1290</Text>
                                            <Text level='p'>Jičín 506 01</Text>
                                        </div>}
                                  phone='+420 604 537 549'
                                  email='marketa@vlach.io' />
                </div>
            </LeftPanel>
            <RightContent>
                <div className='flex flex-col items-center mt-10 ml-8'>
                    <Heading level='H1'
                             className='tracking-widest'
                             disableLetterSpacing>
                        Maki Vlach
                    </Heading>
                    <Heading level='H2'
                             className='tracking-widest mt-4'
                             disableLetterSpacing
                             disableBold>
                        Software engineer
                    </Heading>
                </div>
            </RightContent>
        </div>
    </main>
  )
}

export default HomePage
