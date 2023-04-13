

import React, { useEffect, useRef, useState } from 'react';
import { inputComponentHeightPx } from '../constants';
import { validateFloatNumber0, validateGeneral, validateIntNumber0 } from '../utilities';
import './InputFloatingLabel.css'
import styles from '../../styles.module.css';

export default function InputFloatingLabel({
        label = 'Title', className = '', lineCount = '1', format = '', disabled = false, icon = null, typingValidator = '', minHeight = inputComponentHeightPx,
        type = 'text', value = '', onChangeValue, iconClickable = false, onIconClick, onFocus = ()=>{}, onBlur = ()=>{}, labelType = 1 }) {

    const realType = (type === 'IntNumber' || type === 'FloatNumber') ? 'text' : type;
    const [hasFocus, setHasFocus] = useState(false);
    const [showTextHolder, setShowTextHolder] = useState(value === '' && !hasFocus);

    const mainRef = useRef(null);

    const onInputFocus = (status) => {
        setHasFocus(status);
        if(status) {
            onFocus();
        }
        else {
            if(value === '-') {
                onChangeValue('')
            }
            onBlur();
        }
    }

    useEffect(() => {
        setShowTextHolder(value === '' && !hasFocus);
    }, [value, hasFocus])

    const handleChangeValue = (val) => {
        if(type === 'IntNumber' && val !== '' && !validateIntNumber0(val)) {
            return;
        }
        if(type === 'FloatNumber' && val !== '' && !validateFloatNumber0(val)) {
            return;
        }
        if(typingValidator !== '' && val !== '' && !validateGeneral(val)) {
            return;
        }
        onChangeValue(val);
    }

    return (
        <div className={`${className}`} >
            <div className={`${styles.borderTransparent}`} >
                <div className={`${styles.inputWrapper} ${styles.w100} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsStretch} ${labelType == 1 ? styles.mt4 : styles.mt2} ${icon ? styles.gap1 : ''} `}
                        style={{minHeight: `${Math.max(minHeight, inputComponentHeightPx)}px`}}>
                    {Number(lineCount) <= 1
                    ?
                    <input ref={mainRef} type={realType} value={value} onChange={(e) => handleChangeValue(e.target.value)}
                        className={`${styles.input} ${styles.bgTransparent} ${styles.noOutline} ${styles.border0} ${styles.w100} ${styles.p1} ${styles.px2}`} disabled={disabled}
                        onFocus={() => onInputFocus(true)} onBlur={() => onInputFocus(false)} />
                    :
                    <textarea ref={mainRef} rows={String(lineCount)} value={value} onChange={(e) => onChangeValue(e.target.value)}
                        className={`${styles.input} ${styles.bgTransparent} ${styles.noOutline} ${styles.border0} ${styles.w100} ${styles.p2}`} disabled={disabled}
                        onFocus={() => onInputFocus(true)} onBlur={() => onInputFocus(false)} />
                    }
                    <div className={`${iconClickable && !disabled ? styles.cursorPointing : ''} ${styles.m0} ${styles.p0} ${icon ? styles.mx1 : ''} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsCenter}`} onClick={iconClickable && !disabled ? onIconClick : () => {}}>
                        {icon}
                    </div>
                    {Number(lineCount) <= 1
                    ?
                    <div className={`${styles.borderLabel} ${styles.border} ${styles.rounded1} ${showTextHolder || (!hasFocus && value !== '') ? '' : styles.border2} ${disabled ? `${styles.bgDisable} ${styles.borderDisable}` : `${styles.borderPrimary} border-primary`}`} >
                        <label className={`${showTextHolder ? `${styles.inputLabelBlur} ${styles.textGray}` : `${styles.inputLabelFocus} ${styles.textPrimary} text-primary`} ${labelType == 1 ? '' : styles.type2}`} >{`${label}${showTextHolder && format !== '' ? ` (${format})` : ''}`}</label>
                    </div>
                    :
                    <div className={`${styles.borderLabel} ${styles.border} ${styles.rounded1} ${showTextHolder || (!hasFocus && value !== '') ? '' : styles.border2} ${disabled ? `${styles.bgDisable} ${styles.borderDisable}` : `${styles.borderPrimary} border-primary`}`} >
                        <label className={`${showTextHolder ? `${styles.plainLabelBlur} ${styles.textGray}` : `${styles.plainLabelFocus} ${styles.textPrimary} text-primary`} ${labelType == 1 ? '' : styles.type2}`} >{`${label}${showTextHolder && format !== '' ? ` (${format})` : ''}`}</label>
                    </div>
                    }
                </div>
            </div>
        </div>
        
    );
}
