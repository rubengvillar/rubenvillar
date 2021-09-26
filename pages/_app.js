import Image from 'next/image'
import Link from 'next/link'
import 'bulma/css/bulma.min.css'
import '../styles/globals.css'

import { Navbar, Button, Heading } from 'react-bulma-components'
import { NextSeo } from 'next-seo'
import Icon from '@mdi/react'
import { mdiGithub, mdiDiscord } from '@mdi/js'
import NavbarComponent from '../components/Navbar/NavbarComponent'

function MyApp({ Component, pageProps }) {
  return <>
    <NextSeo
      title={`Programación | ${process.env.NEXT_APP_TITLE}`}
      description='This example uses more of the available config options.'
    />
    <NavbarComponent />
    <Component {...pageProps} />  
  </>
}

export default MyApp
