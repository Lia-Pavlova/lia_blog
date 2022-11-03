import React from 'react'
import cl from 'classnames'

import styles from './button.module.scss'

const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cl(className, styles.button)}
    >
      {children}
    </button>
  )
}

export default Button
