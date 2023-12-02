import React from 'react';
import styles from './BaseComponent.module.scss'

function BaseComponent({children}) {
    return (
        <div className={styles.component}>
            {children}
        </div>
    );
}

export default BaseComponent;