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


export const NormalInputFloatingLabel = ({label = 'Title', className = '', lineCount='1', type = 'text', disabled = false, icon = null, typingValidator = '',
                value = '', onChangeValue, iconClickable = false, onIconClick = ()=>{}, onFocus = ()=>{}, onBlur = ()=>{}, labelType = 1, minHeight = inputComponentHeightPx}) => {
  return (
    <InputFloatingLabel label={label} className={className} lineCount={lineCount} format='' disabled={disabled} icon={icon} typingValidator={typingValidator}
      type = {type} value={value} onChangeValue={onChangeValue} iconClickable={iconClickable} onIconClick={onIconClick} labelType={labelType} minHeight={minHeight}
      onFocus={onFocus} onBlur={onBlur} />
  )
}

export const DateInputFloatingLabel = ({label = 'Title', className = '', disabled = false, persianMode = false, minHeight = inputComponentHeightPx,
                value = '', onChangeValue, onFocus = ()=>{}, onBlur = ()=>{}, hasIcon = false, icon = null, labelType = 1}) => {
  return (
    <DateFloatingLabel label={label} className={className} disabled={disabled} persianMode={persianMode} labelType={labelType} minHeight={minHeight}
      value={value} onChangeValue={onChangeValue} onFocus={onFocus} onBlur={onBlur} hasIcon={hasIcon} icon={icon} />
  )
}

export const EmailInputFloatingLabel = ({className = '', label = 'Email Address', value = '', onChangeValue = () => {}, disabled = false,
                hasIcon = false, icon = null, onFocus = ()=>{}, onBlur = ()=>{}, onValidate = ()=>{}, labelType = 1, minHeight = inputComponentHeightPx}) => {
  return (
    <InputEmail className={className} label={label} value={value} onChangeValue={onChangeValue} disabled={disabled} minHeight={minHeight}
        hasIcon={hasIcon} icon={icon} onFocus={onFocus} onBlur={onBlur} onValidate={onValidate} labelType={labelType} />
  )
}

export const PasswordInputFloatingLabel = ({className = '', label = 'Password', value = '', onChangeValue = () => {}, disabled = false,
                onFocus = ()=>{}, onBlur = ()=>{}, hasIcon = false, labelType = 1, minHeight = inputComponentHeightPx}) => {
  return (
    <InputPassword className={className} label={label} value={value} onChangeValue={onChangeValue} disabled={disabled} minHeight={minHeight}
        onFocus={onFocus} onBlur={onBlur} hasIcon={hasIcon} labelType={labelType} />
  )
}

export const SelectInputFloatingLabel = ({label = 'Title', className = '', options = [], disabled = false,
                value = '', onChangeValue, colorPrimary = primaryColor, labelType = 1, minHeight = inputComponentHeightPx}) => {
  return (
    <SelectFloatingLabel label={label} className={className} options={options} disabled={disabled} minHeight={minHeight}
        value={value} onChangeValue={onChangeValue} colorPrimary={colorPrimary} labelType={labelType} />
  )
}

export const PhoneInputFloatingLabel = ({label = 'Title', className = '', disabled = false,
                countryValue = defaultCountryCode, phoneValue = '', onChangeCountryValue = ()=>{}, onChangePhoneValue = ()=>{},
                onFocus = ()=>{}, onBlur = ()=>{}, onValidate = ()=>{}, labelType = 1, minHeight = inputComponentHeightPx}) => {
  return (
    <PhoneFloatingLabel label={label} className={className} disabled={disabled} labelType={labelType} minHeight={minHeight}
        countryValue={countryValue} phoneValue={phoneValue} onChangeCountryValue={onChangeCountryValue} onChangePhoneValue={onChangePhoneValue}
        onFocus={onFocus} onBlur={onBlur} onValidate={onValidate} />
  )
}

export const QuestionInputFloatingLabel = ({className = '', title = 'Question Title', trueOption = 'Yes', falseOption = 'No', disabled = false,
                value = false, onChangeValue, labelType = 1, minHeight = inputComponentHeightPx}) => {
  return (
    <OptionalQuestion className={className} title={title} trueOption={trueOption} falseOption={falseOption} disabled={disabled} minHeight={minHeight}
        value={value} onChangeValue={onChangeValue} labelType={labelType} />
  )
}

export const CheckBoxInputFloatingLabel = ({text = 'Select me!', className = '', isChecked = false, onChangeChecked, disabled = false, labelType = 1, minHeight = inputComponentHeightPx}) => {
  return (
    <CustomCheckBox text={text} className={className} isChecked={isChecked} onChangeChecked={onChangeChecked} disabled={disabled} labelType={labelType} minHeight={minHeight} />
  )
}

export const getCountriesList = () => {
  return countries();
}
