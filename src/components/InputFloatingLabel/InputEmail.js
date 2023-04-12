import React from 'react'
import { SvgEmailSign } from "../constantComponents";
import { validateEmail } from "../utilities";
import InputFloatingLabel from "./InputFloatingLabel";
import styles from '../../styles.module.css';
import { inputComponentHeightPx } from '../constants';


export default function InputEmail(
    { className = '', label = 'Email Address', value = '', onChangeValue = () => {}, disabled = false, hasIcon = false, icon = null,  minHeight = inputComponentHeightPx,
        onFocus = ()=>{}, onBlur = ()=>{}, onValidate = ()=>{}, labelType = 1 }) {

    const onBlurHandler = () => {
        const validate = validateEmail(value);
        onBlur();
        onValidate(validate);
    }

    return (
        <InputFloatingLabel className={className} lineCount='1' label={label} type='email' disabled={disabled} minHeight={minHeight}
            value={value} onChangeValue={(val) => onChangeValue(val)} labelType={labelType}
            icon={hasIcon ? (icon ? icon : <SvgEmailSign width="24px" height="24px" className={disabled ? styles.textDisable : `${styles.textPrimary} text-primary`} />) : null}
            onFocus={onFocus} onBlur={onBlurHandler} />
    );
}
