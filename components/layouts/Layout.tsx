import { FC, PropsWithChildren } from 'react'
import { CustomHead } from '../globals'
import { InfoHeader } from '../molecules'
import { Footer, Header } from '../ui'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <CustomHead />
      {/* <InfoHeader /> */}
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  )
}
