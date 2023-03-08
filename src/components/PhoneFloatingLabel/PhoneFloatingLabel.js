

import React, { useEffect, useState } from 'react';
import { defaultCountryCode, inputComponentHeight } from '../constants';
import CustomSelect from '../CustomSelect/CustomSelect';
import { validatePhone } from '../utilities';
import './PhoneFloatingLabel.css'
import styles from '../../styles.module.css';
//import "react-phone-number-input/style.css";

export default function PhoneFloatingLabel({
        label = 'Title', className = '', disabled = false,
        countryValue = defaultCountryCode, phoneValue = '', onChangeCountryValue = ()=>{}, onChangePhoneValue = ()=>{},
        onFocus = ()=>{}, onBlur = ()=>{}, onValidate = ()=>{} }) {

    const [gotFocus, setGotFocus] = useState(false);
    const [showTextHolder, setShowTextHolder] = useState(phoneValue === '');
    const [forceInputFocus, setForceInputFocus] = useState(false);

    useEffect(() => {
        if(forceInputFocus) {
            setForceInputFocus(false);
        }
    }, [forceInputFocus])

    const onInputFocus = (status) => {
        setGotFocus(status);

        if(status) {
            onFocus();
        }
        else {
            const validate = validatePhone(phoneValue);
            onBlur();
            onValidate(validate);
        }
    }

    useEffect(() => {
        setShowTextHolder(phoneValue === '' && !gotFocus);
    }, [phoneValue, gotFocus])

    return (
        <div className={className} >
            <div className={`${styles.positionRelative} ${styles.borderTransparent}`} >
                <div className={`${styles.w100} ${styles.border} ${disabled ? `${styles.bgDisable} ${styles.borderDisable}` : `${styles.bgWhite} ${styles.borderPrimary} border-primary`} ${styles.rounded1} ${styles.mt4} ${styles.p0} ${showTextHolder || (!gotFocus && phoneValue !== '') ? '' : styles.border2}`}
                    style={{minHeight: inputComponentHeight}} >
                    <CustomSelect countryValue={countryValue} phoneValue={phoneValue} disabled={disabled}
                        setCountryValue={onChangeCountryValue} setPhoneValue={onChangePhoneValue}
                        forceFocus={forceInputFocus}
                        onFocus={() => disabled ? {} : onInputFocus(true)} onBlur={() => onInputFocus(false)} />
                </div>
                <span className={`${styles.positionAbsolute} ${styles.start0} ${styles.top0} ${showTextHolder ? `${styles.selectLabelPhoneBlur} ${styles.textGray} ${styles.pt2}` : `${styles.selectLabelPhoneFocus} ${styles.textPrimary}`}`} 
                    onClick={() => disabled ? {} : setForceInputFocus(true)} >{label}</span>
            </div>
        </div>
    )
}
