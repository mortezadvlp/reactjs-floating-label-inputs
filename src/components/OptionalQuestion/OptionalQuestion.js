import React from 'react'
import { inputComponentHeight } from '../constants';
import './OptionalQuestion.css';
import styles from '../../styles.module.css';


export default function OptionalQuestion({ 
    className = '', title = 'Question Title', trueOption = 'Yes', falseOption = 'No', disabled = false,
    value = false, onChangeValue
}) {




    return (
        <div className={`${className}`} >
            <div className={` ${styles.border} ${styles.border1} ${disabled ? styles.borderDisable : `${styles.borderPrimary} border-primary`} ${styles.rounded1} ${styles.px1} ${styles.dFlex} ${styles.flexRow} ${styles.gap2} ${styles.justifyContentBetween}`}
                style={{minHeight: inputComponentHeight}}>
                <span className={`${styles.textDark} ${styles.myAuto} ${styles.textWrap}`} >{title}</span>
                <div className={`${styles.dFlex} ${styles.flexRow} ${styles.gap2} ${styles.myAuto}`} >
                    <button className={`${styles.cursorPointing} ${styles.optionButton} ${styles.px3} ${styles.py1} ${value ? (`${disabled ? styles.bgButtonDisable : `${styles.bgPrimary} bg-primary`} ${styles.textWhite}`) : `${styles.bgTransparent} ${styles.textDark} ${styles.optionButtonWhite}`}`} 
                        onClick={() => onChangeValue(true)} disabled={disabled}>{trueOption}</button>
                    <button className={`${styles.cursorPointing} ${styles.optionButton} ${styles.px3} ${styles.py1} ${!value ? (`${disabled ? styles.bgButtonDisable : `${styles.bgPrimary} bg-primary`} ${styles.textWhite}`) : `${styles.bgTransparent} ${styles.textDark} ${styles.optionButtonWhite}`}`} 
                        onClick={() => onChangeValue(false)} disabled={disabled} >{falseOption}</button>
                </div>
            </div>
        </div>
        
    );

}

