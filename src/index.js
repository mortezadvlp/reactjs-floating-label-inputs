import React from 'react'
import styles from './styles.module.css'
import InputFloatingLabel from './components/InputFloatingLabel/InputFloatingLabel'
import DateFloatingLabel from './components/DateFloatingLabel/DateFloatingLabel'
import InputEmail from './components/InputFloatingLabel/InputEmail'
import InputPassword from './components/InputFloatingLabel/InputPassword'
import SelectFloatingLabel from './components/SelectFloatingLabel/SelectFloatingLabel'
import PhoneFloatingLabel from './components/PhoneFloatingLabel/PhoneFloatingLabel'
import OptionalQuestion from './components/OptionalQuestion/OptionalQuestion'
import CustomCheckBox from './components/CustomCheckBox/CustomCheckBox'
import { countries, inputComponentHeightPx } from './components/constants'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export const NormalInputFloatingLabel = ({label = 'Title', className = '', lineCount='1', type = 'text', disabled = false, icon = null, typingValidator = '', dir = 'ltr',
                value = '', onChangeValue, iconClickable = false, onIconClick = ()=>{}, onFocus = ()=>{}, onBlur = ()=>{}, labelType = 1, minHeight = inputComponentHeightPx,
                dark = false}) => {
  return (
    <InputFloatingLabel label={label} className={className} lineCount={lineCount} format='' disabled={disabled} icon={icon} typingValidator={typingValidator} dir={dir}
      type = {type} value={value} onChangeValue={onChangeValue} iconClickable={iconClickable} onIconClick={onIconClick} labelType={labelType} minHeight={minHeight}
      onFocus={onFocus} onBlur={onBlur} dark={dark} />
  )
}

export const DateInputFloatingLabel = ({label = 'Title', className = '', disabled = false, shamsiMode = false, persianLanguage = false, minHeight = inputComponentHeightPx,
                value = '', onChangeValue, onFocus = ()=>{}, onBlur = ()=>{}, hasIcon = false, icon = null, labelType = 1, dark = false}) => {
  return (
    <DateFloatingLabel label={label} className={className} disabled={disabled} shamsiMode={shamsiMode} persianLanguage={persianLanguage} labelType={labelType} minHeight={minHeight}
      value={value} onChangeValue={onChangeValue} onFocus={onFocus} onBlur={onBlur} hasIcon={hasIcon} icon={icon} dark={dark} />
  )
}

export const EmailInputFloatingLabel = ({className = '', label = 'Email Address', value = '', onChangeValue = () => {}, disabled = false, dark = false,
                hasIcon = false, icon = null, onFocus = ()=>{}, onBlur = ()=>{}, onValidate = ()=>{}, labelType = 1, minHeight = inputComponentHeightPx}) => {
  return (
    <InputEmail className={className} label={label} value={value} onChangeValue={onChangeValue} disabled={disabled} minHeight={minHeight}
        hasIcon={hasIcon} icon={icon} onFocus={onFocus} onBlur={onBlur} onValidate={onValidate} labelType={labelType} dark={dark} />
  )
}

export const PasswordInputFloatingLabel = ({className = '', label = 'Password', value = '', onChangeValue = () => {}, disabled = false,
                onFocus = ()=>{}, onBlur = ()=>{}, hasIcon = false, labelType = 1, minHeight = inputComponentHeightPx, dark = false}) => {
  return (
    <InputPassword className={className} label={label} value={value} onChangeValue={onChangeValue} disabled={disabled} minHeight={minHeight}
        onFocus={onFocus} onBlur={onBlur} hasIcon={hasIcon} labelType={labelType} dark={dark} />
  )
}

export const SelectInputFloatingLabel = ({label = 'Title', className = '', options = [], disabled = false, dark = false,
                value = '', onChangeValue, colorPrimary = primaryColor, labelType = 1, minHeight = inputComponentHeightPx}) => {
  return (
    <SelectFloatingLabel label={label} className={className} options={options} disabled={disabled} minHeight={minHeight}
        value={value} onChangeValue={onChangeValue} colorPrimary={colorPrimary} labelType={labelType} dark={dark} />
  )
}

export const PhoneInputFloatingLabel = ({label = 'Title', className = '', disabled = false, useDialCode = false,
                countryValue = defaultCountryCode, phoneValue = '', onChangeCountryValue = ()=>{}, onChangePhoneValue = ()=>{},
                onFocus = ()=>{}, onBlur = ()=>{}, onValidate = ()=>{}, labelType = 1, minHeight = inputComponentHeightPx,
                dark = false}) => {
  return (
    <PhoneFloatingLabel label={label} className={className} disabled={disabled} labelType={labelType} minHeight={minHeight} useDialCode={useDialCode}
        countryValue={countryValue} phoneValue={phoneValue} onChangeCountryValue={onChangeCountryValue} onChangePhoneValue={onChangePhoneValue}
        onFocus={onFocus} onBlur={onBlur} onValidate={onValidate} dark={dark} />
  )
}

export const QuestionInputFloatingLabel = ({className = '', title = 'Question Title', trueOption = 'Yes', falseOption = 'No', disabled = false,
                value = false, onChangeValue, labelType = 1, minHeight = inputComponentHeightPx, dark = false}) => {
  return (
    <OptionalQuestion className={className} title={title} trueOption={trueOption} falseOption={falseOption} disabled={disabled} minHeight={minHeight}
        value={value} onChangeValue={onChangeValue} labelType={labelType} dark={dark} />
  )
}

export const CheckBoxInputFloatingLabel = ({text = 'Select me!', className = '', isChecked = false, onChangeChecked, disabled = false, labelType = 1, 
                minHeight = inputComponentHeightPx, dark = false}) => {
  return (
    <CustomCheckBox text={text} className={className} isChecked={isChecked} onChangeChecked={onChangeChecked} disabled={disabled} labelType={labelType} minHeight={minHeight}
                dark={dark} />
  )
}

export const getCountriesList = () => {
  return countries();
}
