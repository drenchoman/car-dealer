import React from 'react'
import styles from '@/styles/Nav.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const options = [
  {id: 1,
  name: 'Home',
},
{id: 2,
name:'Vehicles'},
{
  id: 3,
  name: 'Reviews'
},
{
  id: 4,
  name: 'About us'
},
{
  id: 5,
  name: 'Contact'
}
]

export default function Nav() {
  const [expanded, setExpanded] = useState(false)
  return (
    <nav className={styles.nav}>
      <Link href="/">
       <h2 className={styles.logo}>CHAMPION MOTORS</h2>
      </Link>
      <button className={styles.burger} onClick={() => { setExpanded(!expanded)}}>
        <Image 
        src='/icons/iconmonstr-menu-lined.svg'
        width={40}
        height={40}
        alt="Burger"/>
      </button>
      <div className={ expanded ? styles.navMenuExpanded : styles.navMenu }>
      <ul>
      {options.map((o) => 
        <li key={o.id}>{o.name}</li>
      )}
      </ul>
      </div>
      </nav>
  )
}
