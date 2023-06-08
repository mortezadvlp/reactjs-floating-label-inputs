import React from 'react'
import { SvgCheckEmpty, SvgCheckFill } from '../constantComponents';
import './CustomCheckBox.css';
import styles from '../../styles.module.css';

export default function CustomCheckBox({ text = 'Select me!', className = '', isChecked = false, onChangeChecked, disabled = false, dark = false }) {


    return (
        <div className={`${styles.dFlex} ${styles.flexRow} ${styles.py1} ${dark ? styles.dark : ''}`}>
            <div className={`${styles.cursorPointing}`} onClick={() => disabled ? {} : onChangeChecked(!isChecked)} 
                    style={{marginLeft: '1px', marginRight: '1px'}}>
                {isChecked
                ?
                <SvgCheckFill className={disabled ? styles.textDisable : `${styles.textPrimary} text-pimary`} />
                :
                <SvgCheckEmpty className={disabled ? styles.textDisable : `${styles.textPrimary} text-pimary`} />
                }
            </div>
            <span className={`${styles.cursorPointing} ${styles.textDark} ${styles.myAuto} ${styles.textWrap} ${styles.px1} ${dark ? styles.dark : ''}`} role='button' onClick={() => disabled ? {} : onChangeChecked(!isChecked)} >{text}</span>
        </div>
    );
}
