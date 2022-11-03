import React from 'react'
import cl from 'classnames'
import { BsGithub, BsFacebook, BsTelegram, BsLinkedin } from 'react-icons/bs'
import ScreenEgg from '../ScreenEgg'
import styles from './socialNet.module.scss'

const socialNetworks = [
  {
    id: 1,
    href: 'https://github.com/Lia-Pavlova',
    icon: BsGithub,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/natalia-pavlova',
    icon: BsLinkedin,
  },
  {
    id: 3,
    href: 'https://t.me/Lia_Pavlova',
    icon: BsTelegram,
  },
  {
    id: 4,
    href: 'https://www.facebook.com/pavlova.natalie/',
    icon: BsFacebook,
  },
]

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id} className={styles.listItem}>
            <a
              href={socialNetwork.href}
              target="_blank"
              className={styles.listLink}
              rel="noreferrer"
            >
              {React.createElement(socialNetwork.icon, {
                color: 'black',
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks
