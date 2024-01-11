import React, { useEffect, useRef, useState } from 'react'
import { inputComponentHeight, inputComponentHeightPx, lightOrDark } from '../constants';
import './OptionalQuestion.css';
import styles from '../../styles.module.css';


export default function OptionalQuestion({ 
    className = '', title = 'Question Title', trueOption = 'Yes', falseOption = 'No', disabled = false, minHeight = inputComponentHeightPx,
    value = false, onChangeValue, dark = false
}) {

    const [btnTextColor, setBtnTextColor] = useState('#333');
    const [btnTextColor2, setBtnTextColor2] = useState('#333');
    const refBtn = useRef(null);
    const refBtn2 = useRef(null);

    useEffect(() => {
        var bgColor, dl;
        if (value) {
            bgColor = window
                .getComputedStyle(refBtn.current, null)
                .getPropertyValue("background-color");
            dl = lightOrDark(bgColor);
            if (dl === 'dark') {
                setBtnTextColor('white');
            }
            else {
                setBtnTextColor('#333');
            }
            if (dark) {
                setBtnTextColor2('white');
            }
            else {
                setBtnTextColor2('#333');
            }
        }
        else {
            bgColor = window
                .getComputedStyle(refBtn2.current, null)
                .getPropertyValue("background-color");
            dl = lightOrDark(bgColor);
            if (dl === 'dark') {
                setBtnTextColor2('white');
            }
            else {
                setBtnTextColor2('#333');
            }
            if (dark) {
                setBtnTextColor('white');
            }
            else {
                setBtnTextColor('#333');
            }
        }
        
    }, [dark, disabled, value])
  


    return (
        <div className={`${styles.all} ${className}`} >
            <div className={` ${styles.border} ${styles.border1} ${disabled ? styles.borderDisable : styles.borderPrimary} ${styles.rounded1} ${styles.px1} ${styles.dFlex} ${styles.flexRow} ${styles.gap2} ${styles.justifyContentBetween} ${dark ? styles.dark : ''}`}
                style={{minHeight: `${Math.max(minHeight, inputComponentHeightPx)}px`, marginLeft: '1px', marginRight: '1px'}}>
                <span className={`${styles.textDark} ${styles.myAuto} ${styles.textWrap} ${dark ? styles.dark : ''}`} >{title}</span>
                <div className={`${styles.dFlex} ${styles.flexRow} ${styles.gap2} ${styles.myAuto}`} >
                    <button ref={refBtn} className={`${styles.cursorPointing} ${styles.optionButton} ${styles.px3} ${styles.py1} ${value ? (`${disabled ? styles.bgButtonDisable : `${styles.bgPrimary} bg-primary`}`) : `${styles.bgTransparent}`} ${dark ? styles.dark : ''}`} 
                        style={{color: btnTextColor}} onClick={() => onChangeValue(true)} disabled={disabled}>{trueOption}</button>
                    <button ref={refBtn2} className={`${styles.cursorPointing} ${styles.optionButton} ${styles.px3} ${styles.py1} ${!value ? (`${disabled ? styles.bgButtonDisable : `${styles.bgPrimary} bg-primary`}`) : `${styles.bgTransparent}`} ${dark ? styles.dark : ''}`} 
                        style={{color: btnTextColor2}} onClick={() => onChangeValue(false)} disabled={disabled} >{falseOption}</button>
                </div>
            </div>
        </div>
        
    );

}

