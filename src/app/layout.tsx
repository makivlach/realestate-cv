import './globals.css'
import { LeftPanel, RightContent } from '@/modules/cv/layouts'
import { PhotoAvatar } from '@/modules/cv/components/Avatar'
import { ContactBlock } from '@/modules/cv/components/Block'
import { Text } from '@/modules/cv/components/Text'
import { Heading } from '@/modules/cv/components/Heading'
import { GithubIcon } from '@/components/Icons'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="min-h-full">
        <div className="min-h-full w-full flex md:flex-row flex-col-reverse">
          <LeftPanel>
            <div className="flex flex-col justify-between h-full ">
              <div className="flex flex-col items-center">
                <div className="mt-4">
                  <PhotoAvatar src="/photos/avatar.jpg" size={170} />
                </div>

                <div className="mt-12">
                  <ContactBlock
                    address={
                      <div className="flex flex-col">
                        <Text level="p">Zahradní 1290,</Text>
                        <Text level="p">Jičín 506 01</Text>
                      </div>
                    }
                    phone="+420 604 537 549"
                    email="marketa@vlach.io"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 pb-4 mt-10 md:mt-0">
                <Heading level="H2" className="text-center w-52">
                  Source Code
                </Heading>
                <Text level="p" className="text-center">
                  This project is publicly available on Github!
                </Text>
                <a href="https://github.com/makivlach/cv" rel="noreferrer" target="_blank">
                  <GithubIcon />
                </a>
              </div>
            </div>
          </LeftPanel>
          <RightContent>{children}</RightContent>
        </div>
      </body>
    </html>
  )
}
