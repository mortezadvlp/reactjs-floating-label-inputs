import React, { useEffect, useRef, useState } from 'react';

import Select, { createFilter } from 'react-select';
import { defaultTheme } from 'react-select';
import { countryCodes, defaultCountryCode, inputComponentHeight } from '../constants';
import styles from '../../styles.module.css';
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

const { colors } = defaultTheme;

export default function CustomSelect ({
      countryValue = defaultCountryCode, phoneValue = '', setCountryValue = ()=>{}, setPhoneValue = ()=>{}, disabled = false,
      forceFocus = false, onFocus, onBlur }) {

  const [isOpen, setIsOpen] = useState(false);
  const [countryOption, setCountryOption] = useState('');
  const inputRef = useRef(null);


  polyfillCountryFlagEmojis();


  useEffect(() => {
    if(forceFocus) {
      inputRef.current.focus();
    }
  }, [forceFocus])

  useEffect(() => {
    if(countryValue === countryOption.code) {
      return;
    }

    if(countryValue === '') {
      let cc = countryCodes.find(c => c.code === defaultCountryCode);
      setCountryOption(cc ? cc : '')
      return;
    }
    let cc = countryCodes.find(c => c.code === countryValue);
    setCountryOption(cc ? cc : '')
  }, [countryValue])

  const phoneValueHandler = (val) => {
    const regex = /^[1-9]{1}[0-9]{0,9}$/;
    if(val === '' || regex.test(val)) {
      setPhoneValue(val);
    }
  }
  
  const filterCountries = (value) => countryCodes.find(c => c.value === value).filterText;

  const filterConfig = {
    ignoreCase: true,
    ignoreAccents: true,
    matchFrom: 'any',
    stringify: option => filterCountries(option.value),
    trim: true,
  }

  return (
    
    <div tabIndex='-1' className={`${styles.w100} ${styles.alignSelfStretch} ${styles.border0}`} /*onBlur={() => onBlur()} onFocus={onFocus}*/ >
      <Dropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        target={
          <div className={`${styles.dFlex} ${styles.flexRow} ${styles.alignItemsStretch}`} style={{minHeight: inputComponentHeight}} >
            <button style={{width: '90px'}} onClick={() => disabled ? {} : setIsOpen((prev) => !prev)}
              className={`${styles.noOutline} ${styles.border0} ${styles.borderEnd} ${styles.roundedStart}`}>
              {countryOption ? countryOption.label2 : 'Choose'}
            </button>
            <input ref={inputRef} type="number" value={phoneValue} onChange={(e) => phoneValueHandler(e.target.value)} disabled={disabled}
              className={`${styles.bgTransparent} ${styles.noOutline} ${styles.border0} ${styles.w100} ${styles.p1} ${styles.py2} ${styles.inputNumberNoArrows} ${styles.roundedEnd}`}
              onFocus={() => onFocus()} onBlur={() => onBlur()} />
          </div>
        }
      >
        <Select
          isDisabled={disabled}
          autoFocus
          backspaceRemovesValue={false}
          components={{ DropdownIndicator, IndicatorSeparator: null }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={(newValue) => {
            setCountryValue(newValue.code);
            setIsOpen(false);
          }}
          onBlur={() => setIsOpen(false)}
          options={countryCodes}
          placeholder="Search..."
          //styles={selectStyles}
          tabSelectsValue={false}
          value={countryOption}
          filterOption={createFilter(filterConfig)}
        />
      </Dropdown>
    </div>
  );
};

// styled components

const Menu = ({ children }) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 2,
      }}
    >
        {children}
    </div>
  );
};
const Blanket = ({ children }) => (
  <div
    css={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
  >
    {children}
  </div>
);
const Dropdown = ({
  children,
  isOpen,
  target,
  onClose,
}) => (
  <div css={{ position: 'relative' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);
const Svg = ({ children }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
  >
    {children}
  </svg>
);
const DropdownIndicator = () => (
  <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
    <Svg>
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  </div>
);
const ChevronDown = () => (
  <Svg style={{ marginRight: -6 }}>
    <path
      d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Svg>
);