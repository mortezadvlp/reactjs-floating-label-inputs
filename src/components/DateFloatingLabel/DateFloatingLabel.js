
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import { SvgCalendar, SvgClose } from '../constantComponents';
import { inputComponentHeight, inputComponentHeightPx } from '../constants';
import './DateFloatingLabel.css'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import persian_en from "react-date-object/locales/persian_en"
import gregorian_en from "react-date-object/locales/gregorian_en"
import styles from '../../styles.module.css';

export default function DateFloatingLabel({ label = 'Title', className = '', disabled = false, shamsiMode = false, persianLanguage = false, minHeight = inputComponentHeightPx,
    value = '', onChangeValue, onFocus = ()=>{}, onBlur = ()=>{}, hasIcon = false, icon = null, labelType = 1 }) {

    const [hasFocus, setHasFocus] = useState(false);
    const [showTextHolder, setShowTextHolder] = useState(value === '' && !hasFocus);

    const mainRef = useRef(null);

    const onInputFocus = (status) => {
        setHasFocus(status);

        if(status) {
            onFocus();
        }
        else {
            onBlur();
        }
    }

    useEffect(() => {
        setShowTextHolder(value === '' && !hasFocus);
    }, [value, hasFocus])

    const format = "yyyy/mm/dd";

    return (
        <div className={`${className}`} >
            <div className={`${styles.borderTransparent}`} >
                <div className={`${styles.inputWrapper} ${styles.w100} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsStretch} ${labelType == 1 ? styles.mt4 : styles.mt2} ${icon ? styles.gap1 : ''} `}
                        style={{minHeight: `${Math.max(minHeight, inputComponentHeightPx)}px`}}>
                    <DatePicker
                        ref={mainRef}
                        calendar={shamsiMode ? persian : ''}
                        locale={shamsiMode ? (persianLanguage ? persian_fa : persian_en) : gregorian_en}
                        calendarPosition="bottom-center"
                        format='YYYY/MM/DD'
                        containerClassName={`${styles.w100} ${styles.hAuto} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsStretch}`}
                        inputClass={`${styles.bgTransparent} ${styles.noOutline} ${styles.border0} ${styles.w100} ${styles.p1}`}
                        value={value}
                        onChange={(e) => onChangeValue(e ? e.toString() : '')}
                        onOpen={() => onInputFocus(true)}
                        onClose={() => onInputFocus(false)}
                        editable={false}
                        disabled={disabled}
                    />
                    {(value !== '')&&
                        <div className={`${!disabled ? styles.cursorPointing : ''} ${styles.myAuto} ${styles.p0} ${styles.mx1} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsCenter}`} onClick={() => disabled ? {} : onChangeValue('')} >
                            <SvgClose width='24px' height='24px' className={disabled ? styles.textDisable : `${styles.textPrimary} text-primary`} />
                        </div>
                    }
                    {hasIcon&&
                        <div className={`${!disabled ? styles.cursorPointing : ''} ${styles.myAuto} ${styles.p0} ${styles.mx1} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsCcenter}`} onClick={() => mainRef.current.openCalendar()} >
                            {icon
                            ?
                                icon
                            :
                                <SvgCalendar width='22px' height='22px' className={disabled ? styles.textDisable : `${styles.textPrimary} text-primary}`}  />
                            }
                            
                        </div>
                    }
                    <div className={`${styles.borderLabel} ${styles.border} ${styles.rounded1} ${showTextHolder || (!hasFocus && value !== '') ? '' : styles.border2} ${disabled ? `${styles.bgDisable} ${styles.borderDisable}` : `${styles.borderPrimary} border-primary`}`} >
                        <label className={`${showTextHolder ? `${styles.inputLabelBlur} ${styles.textGray}` : `${styles.inputLabelFocus} ${styles.textPrimary} text-primary`} ${labelType == 1 ? '' : styles.type2}`} >{`${label}${showTextHolder && format !== '' ? ` (${format})` : ''}`}</label>
                    </div>
                </div>
            </div>




            {/*<div className={`${styles.positionRelative} ${styles.borderTransparent}`} >
                <div className={`${styles.w100} ${styles.clip} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsStretch} ${styles.gap1} ${styles.mt4} ${styles.border} ${styles.rounded1} ${showTextHolder || (!hasFocus && value !== '') ? '' : styles.border2} ${disabled ? `${styles.bgDisable} ${styles.borderDisable}` : `${styles.bgWhite} ${styles.borderPrimary} border-primary`}`}
                    style={{minHeight: inputComponentHeight}} >
                    <DatePicker
                        ref={mainRef}
                        calendar={persianMode ? persian : ''}
                        locale={persianMode ? persian_en : gregorian_en}
                        calendarPosition="bottom-center"
                        format='YYYY/MM/DD'
                        containerClassName={`${styles.w100} ${styles.hAuto} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsStretch}`}
                        inputClass={`${styles.bgTransparent} ${styles.noOutline} ${styles.border0} ${styles.w100} ${styles.p1}`}
                        value={value}
                        onChange={(e) => onChangeValue(e ? e.toString() : '')}
                        onOpen={() => onInputFocus(true)}
                        onClose={() => onInputFocus(false)}
                        editable={false}
                        disabled={disabled}
                    />
                    {(value !== '')&&
                        <div className={`${!disabled ? styles.cursorPointing : ''} ${styles.myAuto} ${styles.p0} ${styles.me1} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsCenter}`} onClick={() => disabled ? {} : onChangeValue('')} >
                            <SvgClose width='24px' height='24px' className={disabled ? styles.textDisable : `${styles.textPrimary} text-primary`} />
                        </div>
                    }
                    {hasIcon&&
                        <div className={`${!disabled ? styles.cursorPointing : ''} ${styles.myAuto} ${styles.p0} ${styles.me1} ${styles.dFlex} ${styles.flexRow} ${styles.alignItemsCcenter}`} onClick={() => mainRef.current.openCalendar()} >
                            {icon
                            ?
                                icon
                            :
                                <SvgCalendar width='22px' height='22px' className={disabled ? styles.textDisable : `${styles.textPrimary} text-primary}`}  />
                            }
                            
                        </div>
                    }
                </div>
                <span className={`${styles.positionAbsolute} ${styles.start0} ${styles.top0} ${styles.ms1} ${showTextHolder ? `${styles.inputLabelBlur} ${styles.textGray}` : `${styles.inputLabelFocus} ${styles.textPrimary} text-primary`}`}
                    onClick={() => mainRef.current.openCalendar()} >{`${label}${showTextHolder && format !== '' ? ` (${format})` : ''}`}</span>
                </div>*/}
        </div>
    );
}
