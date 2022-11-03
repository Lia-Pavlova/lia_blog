import React from 'react'
import cl from 'classnames'

import styles from './postGrid.module.scss'

const PostGrid = ({ className, children }) => {
  return <div className={cl(className, styles.postGrid)}>{children}</div>
}

export default PostGrid
