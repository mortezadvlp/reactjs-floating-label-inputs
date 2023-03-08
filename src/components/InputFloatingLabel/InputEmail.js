import React from 'react'
import { SvgEmailSign } from "../constantComponents";
import { validateEmail } from "../utilities";
import InputFloatingLabel from "./InputFloatingLabel";
import styles from '../../styles.module.css';


export default function InputEmail(
    { className = '', label = 'Email Address', value = '', onChangeValue = () => {}, disabled = false, hasIcon = false, icon = null, 
        onFocus = ()=>{}, onBlur = ()=>{}, onValidate = ()=>{} }) {

    const onBlurHandler = () => {
        const validate = validateEmail(value);
        onBlur();
        onValidate(validate);
    }

    return (
        <InputFloatingLabel className={className} lineCount='1' label={label} type='email' disabled={disabled}
            value={value} onChangeValue={(val) => onChangeValue(val)}
            icon={hasIcon ? (icon ? icon : <SvgEmailSign width="24px" height="24px" className={disabled ? styles.textDisable : `${styles.textPrimary} text-primary`} />) : null}
            onFocus={onFocus} onBlur={onBlurHandler} />
    );
}
