import React from 'react';
import styles_cloud from './cloud_style.module.css'

const CloudAnimation = () => {
    return (
        <div className={styles_cloud.container_cloud}>
            <div className={styles_cloud.cloud}></div>
            <div className={styles_cloud.cloud}></div>
            <div className={styles_cloud.cloud}></div>
            <div className={styles_cloud.cloud}></div>
            <div className={styles_cloud.cloud}></div>
            <div className={styles_cloud.cloud}></div>
        </div>
    );
};

export default CloudAnimation;