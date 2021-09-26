import React from 'react'
import { Navbar } from 'react-bulma-components'
import Icon from '@mdi/react'
import Link from 'next/link'
import Image from 'next/image'
import { mdiGithub, mdiDiscord } from '@mdi/js'

export default function NavbarComponent() {
  return (
    <Navbar className="px-4 py-2">
      <Navbar.Brand>
        <Link href="/" >
          <a>
            <Image src="/logo.png" alt="Logo Ruben Villar" width="36" height="48"/>
          </a>
        </Link>
        <Navbar.Burger/>
      </Navbar.Brand>
      <Navbar.Menu >
        <Navbar.Container className="m-auto">
          <Link href="/">
            <a className="navbar-item">
              Inicio
            </a>
          </Link>
          <Link href="/programacion">
            <a className="navbar-item">
              programación
            </a>
          </Link>
          <Link href="/diseno">
            <a className="navbar-item">
              Diseño
            </a>
          </Link>
          <Link href="/contacto">
            <a className="navbar-item">
              Contacto
            </a>
          </Link>
        </Navbar.Container>
        <Navbar.Container align="end">
          <Navbar.Container>
            <Navbar.Item>
              <a href="https://github.com/rubengvillar" className="navbar-item" target="_blank">
                <Icon path={mdiGithub}
                  title="Github"
                  size={1}
                  color="black"
                  />
              </a>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  )
}
