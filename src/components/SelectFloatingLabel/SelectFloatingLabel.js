

import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { disabledBgColor, disabledColor, inputComponentHeight, inputComponentHeightPx, primaryColor } from '../constants';
import './SelectFloatingLabel.css'
import styles from '../../styles.module.css';

export default function SelectFloatingLabel({
        label = 'Title', className = '', options = [], disabled = false, minHeight = inputComponentHeightPx,
        value = '', onChangeValue, colorPrimary = primaryColor, labelType = 1 }) {

    const [gotFocus, setGotFocus] = useState(false);
    const [showTextHolder, setShowTextHolder] = useState(value === '');
    const [objValue, setObjValue] = useState(null);

    const mainRef = useRef(null);

    useEffect(() => {
        let obj = null;
        obj = options.find(o => o.value === value);
        if(obj === null || obj === undefined) {
            obj = '';
        }
        setObjValue(obj);
    }, [value])
    useEffect(() => {
        setShowTextHolder(value === '' && !gotFocus);
    }, [value, gotFocus])

    const onSelectValueChanged = (e) => {
        if(e) {
            onChangeValue(e.value);
        }
        else {
            onChangeValue('');
        }
    }

    const onSelectFocus = (focus) => {
        setGotFocus(focus);
    }

    return (
        <div className={className} >
            <div className={`${styles.borderTransparent}`} >
                <div className={`${styles.inputWrapper} ${styles.w100} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsStretch} ${labelType == 1 ? styles.mt4 : styles.mt2}`}
                        style={{minHeight: `${Math.max(minHeight, inputComponentHeightPx)}px`}}>
                    <Select ref={mainRef} isClearable={true} options={options} placeholder='' isDisabled={disabled}
                        value={objValue} onChange={onSelectValueChanged} openMenuOnFocus
                        onFocus={() => onSelectFocus(true)}
                        onBlur={() => onSelectFocus(false)}
                        styles={{
                            input: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                            }),
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                border: 'none',
                                boxShadow: 'none',
                                backgroundColor: disabled ? disabledBgColor : 'white',
                                minHeight: `${minHeight}px`,
                            }),
                            dropdownIndicator: (baseStyles, state) => ({
                                ...baseStyles,
                                color: disabled ? disabledColor : colorPrimary,
                            }),
                            clearIndicator: (baseStyles, state) => ({
                                ...baseStyles,
                                color: disabled ? disabledColor : colorPrimary,
                            }),
                            indicatorSeparator: (baseStyles, state) => ({
                                ...baseStyles,
                                backgroundColor: disabled ? disabledColor : colorPrimary,
                            }),
                        }}
                        className={`${styles.bgTransparent} ${styles.w100} ${styles.p0}`} />
                    <div className={`${styles.borderLabel} ${styles.border} ${styles.rounded1} ${showTextHolder ? '' : styles.border2} ${disabled ? `${styles.bgDisable} ${styles.borderDisable}` : `${styles.borderPrimary} border-primary`}`} >
                        <label className={`${showTextHolder ? `${styles.selectLabelBlur} ${styles.textGray}` : `${styles.selectLabelFocus} ${styles.textPrimary} text-primary`} ${labelType == 1 ? '' : styles.type2}`} >{label}</label>
                    </div>
                </div>
            </div>




            {/*<div className={`${styles.w100} ${styles.positionRelative} ${styles.borderTransparent}`} >
                <Select ref={mainRef} isClearable={true} options={options} placeholder='' isDisabled={disabled}
                    value={objValue} onChange={onSelectValueChanged} openMenuOnFocus
                    onFocus={() => onSelectFocus(true)}
                    onBlur={() => onSelectFocus(false)}
                    styles={{
                        input: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'transparent',
                        }),
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: disabled ? disabledColor : colorPrimary,
                            backgroundColor: disabled ? disabledBgColor : 'white',
                        }),
                        dropdownIndicator: (baseStyles, state) => ({
                            ...baseStyles,
                            color: disabled ? disabledColor : colorPrimary,
                        }),
                        clearIndicator: (baseStyles, state) => ({
                            ...baseStyles,
                            color: disabled ? disabledColor : colorPrimary,
                        }),
                        indicatorSeparator: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: disabled ? disabledColor : colorPrimary,
                        }),
                    }}
                    className={`${styles.bgTransparent} ${styles.noOutline} ${styles.noBorderOnfocus} ${styles.border0} ${styles.w100} ${styles.p0} ${styles.mt4}`} />
                <span className={`${styles.positionAbsolute} ${styles.start0} ${styles.top0} ${styles.ms1} ${showTextHolder ? `${styles.selectLabelBlur} ${styles.textGray}` : `${styles.selectLabelFocus} ${styles.textPrimary} text-primary`}`} 
                    onClick={() => mainRef.current.focus()} >{label}</span>
                </div>*/}
        </div>
        
    );
}
