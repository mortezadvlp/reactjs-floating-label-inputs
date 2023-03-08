

import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { disabledBgColor, disabledColor, inputComponentHeight, primaryColor } from '../constants';
import './SelectFloatingLabel.css'
import styles from '../../styles.module.css';

export default function SelectFloatingLabel({
        label = 'Title', className = '', options = [], disabled = false,
        value = '', onChangeValue, colorPrimary = primaryColor }) {

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
            <div className={`${styles.w100} ${styles.positionRelative} ${styles.borderTransparent}`} >
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
            </div>
        </div>
        
    );
}
