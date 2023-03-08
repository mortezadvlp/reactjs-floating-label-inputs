import React, { useState } from "react";
import { SvgHidePassword, SvgShowPassword } from "../constantComponents";
import InputFloatingLabel from "./InputFloatingLabel";
import styles from '../../styles.module.css';


export default function InputPassword(
    { className = '', label = 'Password', value = '', onChangeValue = () => {}, disabled = false,
        onFocus = ()=>{}, onBlur = ()=>{}, hasIcon = false }) {

    const [showPassword, setShowPassword] = useState(false);

    const onIconClickHandle = () => {
        setShowPassword(!showPassword)
    }

    const onBlurHandler = () => {
        onBlur();
    }

    return (
        <InputFloatingLabel className={className} lineCount='1' label={label} type={showPassword ? 'text' : 'password'} disabled={disabled}
            value={value} onChangeValue={(val) => onChangeValue(val)}
            icon={!hasIcon ? null : showPassword ? <SvgHidePassword width="24px" height="24px" className={disabled ? styles.textDisable : `${styles.textPrimary} text-primary`} />
                                                    : <SvgShowPassword width="24px" height="24px" className={disabled ? styles.textDisable : `${styles.textPrimary} text-primary`} />}
            iconClickable={true} onIconClick={() => onIconClickHandle()} onFocus={onFocus} onBlur={onBlurHandler} />
    );
}
