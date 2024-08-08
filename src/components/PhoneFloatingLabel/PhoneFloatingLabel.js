

import React, { useEffect, useState } from 'react';
import { defaultCountryCode, inputComponentHeight, inputComponentHeightPx } from '../constants';
import CustomSelect from '../CustomSelect/CustomSelect';
import { validatePhone } from '../utilities';
import './PhoneFloatingLabel.css'
import styles from '../../styles.module.css';
//import "react-phone-number-input/style.css";

export default function PhoneFloatingLabel({
        label = 'Title', className = '', disabled = false, useDialCode = false,
        countryValue = defaultCountryCode, phoneValue = '', onChangeCountryValue = ()=>{}, onChangePhoneValue = ()=>{}, minHeight = inputComponentHeightPx,
        onFocus = ()=>{}, onBlur = ()=>{}, onValidate = ()=>{}, labelType = 1, dark = false, required = false }) {

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
            var validate = false;
            if (required) {
                validate = (phoneValue !== '' && validatePhone(phoneValue));
            }
            else {
                validate = validatePhone(phoneValue);
            }
            onBlur();
            onValidate(validate);
        }
    }

    useEffect(() => {
        setShowTextHolder(phoneValue === '' && !gotFocus);
    }, [phoneValue, gotFocus])

    return (
        <div className={`${styles.all} ${className}`} >
            <div className={`${styles.borderTransparent}`} >
                <div className={`${styles.inputWrapper} ${styles.w100} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsStretch} ${labelType == 1 ? styles.mt4 : styles.mt2}`}
                        style={{minHeight: `${Math.max(minHeight, inputComponentHeightPx)}px`}}>
                    <CustomSelect countryValue={countryValue} phoneValue={phoneValue} disabled={disabled} useDialCode={useDialCode}
                        setCountryValue={onChangeCountryValue} setPhoneValue={onChangePhoneValue} dark={dark}
                        forceFocus={forceInputFocus} minHeight={Math.max(minHeight, inputComponentHeightPx)}
                        onFocus={() => disabled ? {} : onInputFocus(true)} onBlur={() => onInputFocus(false)} required={required} />
                    <div className={`${styles.borderLabel} ${styles.border} ${styles.rounded1} ${showTextHolder ? '' : styles.border2} ${disabled ? `${styles.bgDisable} ${styles.borderDisable}` : `${styles.borderPrimary} border-primary`} ${dark ? styles.dark : ''}`} >
                        <label className={`${showTextHolder ? `${styles.selectLabelPhoneBlur} ${styles.textGray}` : `${styles.selectLabelPhoneFocus} ${styles.textPrimary} text-primary`} ${labelType == 1 ? '' : styles.type2} ${dark ? styles.dark : ''}`} >{label}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
