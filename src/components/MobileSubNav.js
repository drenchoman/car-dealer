import React from 'react'
import styles from '@/styles/Nav.module.css'

const options = [
  {id: 1,
  name: 'Home',
},
{id: 2,
name:'Vehicles'},
{
  id: 3,
  name: 'Contact'
},

]

export default function MobileSubNav() {
  return (
    <div className={styles.subNav}>
      {options.map((o) => 
      <div className={styles.cat} key={o.id}>
        {o.name}
        </div>)}
    </div>
  )
}
