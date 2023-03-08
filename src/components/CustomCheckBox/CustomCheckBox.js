import React from 'react'
import { SvgCheckEmpty, SvgCheckFill } from '../constantComponents';
import './CustomCheckBox.css';
import styles from '../../styles.module.css';

export default function CustomCheckBox({ text = 'Select me!', className = '', isChecked = false, onChangeChecked, disabled = false }) {


    return (
        <div className={`${styles.dFlex} ${styles.flexRow} ${styles.py1} ${className}`}>
            <div className={`${styles.cursorPointing}`} onClick={() => disabled ? {} : onChangeChecked(!isChecked)} >
                {isChecked
                ?
                <SvgCheckFill className={disabled ? styles.textDisable : `${styles.textPrimary} text-pimary`} />
                :
                <SvgCheckEmpty className={disabled ? styles.textDisable : `${styles.textPrimary} text-pimary`} />
                }
            </div>
            <span className={`${styles.cursorPointing} ${styles.textDark} ${styles.myAuto} ${styles.textWrap} ${styles.ps1}`} role='button' onClick={() => disabled ? {} : onChangeChecked(!isChecked)} >{text}</span>
        </div>
    );
}
