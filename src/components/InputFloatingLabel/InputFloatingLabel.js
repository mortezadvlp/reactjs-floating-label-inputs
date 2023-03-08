

import React, { useEffect, useRef, useState } from 'react';
import { inputComponentHeight } from '../constants';
import { validateFloatNumber0, validateGeneral, validateIntNumber0 } from '../utilities';
import './InputFloatingLabel.css'
import styles from '../../styles.module.css';

export default function InputFloatingLabel({
        label = 'Title', className = '', lineCount = '1', format = '', disabled = false, icon = null, typingValidator = '',
        type = 'text', value = '', onChangeValue, iconClickable = false, onIconClick, onFocus = ()=>{}, onBlur = ()=>{} }) {

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
            <div className={`${styles.positionRelative} ${styles.borderTransparent}`} >
                <div className={`${styles.w100} ${styles.clip} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsStretch} ${icon ? styles.gap1 : ''} ${styles.mt4} ${styles.border} ${styles.rounded1} ${showTextHolder || (!hasFocus && value !== '') ? '' : styles.border2} ${disabled ? `${styles.bgDisable} ${styles.borderDisable}` : `${styles.bgWhite} ${styles.borderPrimary} border-primary`}`}
                    style={{minHeight: inputComponentHeight}} >
                    {Number(lineCount) <= 1
                    ?
                    <input ref={mainRef} type={realType} value={value} onChange={(e) => handleChangeValue(e.target.value)}
                        className={`${styles.bgTransparent} ${styles.noOutline} ${styles.border0} ${styles.w100} ${styles.p1}`} disabled={disabled}
                        onFocus={() => onInputFocus(true)} onBlur={() => onInputFocus(false)} />
                    :
                    <textarea ref={mainRef} rows={String(lineCount)} value={value} onChange={(e) => onChangeValue(e.target.value)}
                        className={`${styles.bgTransparent} ${styles.noOutline} ${styles.border0} ${styles.w100} ${styles.p1}`} disabled={disabled}
                        onFocus={() => onInputFocus(true)} onBlur={() => onInputFocus(false)} />
                    }
                    <div className={`${iconClickable && !disabled ? styles.cursorPointing : ''} ${styles.m0} ${styles.p0} ${icon ? styles.me1 : ''} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsCenter}`} onClick={iconClickable && !disabled ? onIconClick : () => {}}>
                        {icon}
                    </div>
                </div>
                <span className={`${styles.positionAbsolute} ${styles.start0} ${styles.top0} ${styles.ms1} ${showTextHolder ? `${styles.inputLabelBlur} ${styles.textGray}` : `${styles.inputLabelFocus} ${styles.textPrimary}`}`}
                    onClick={() => mainRef.current.focus()} >{`${label}${showTextHolder && format !== '' ? ` (${format})` : ''}`}</span>
            </div>
        </div>
        
    );
}
