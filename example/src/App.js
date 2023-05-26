import React, { useState } from 'react'
import './main.min.css';

import { 
  NormalInputFloatingLabel, DateInputFloatingLabel, 
  CheckBoxInputFloatingLabel, EmailInputFloatingLabel, 
  PasswordInputFloatingLabel, SelectInputFloatingLabel, 
  PhoneInputFloatingLabel, QuestionInputFloatingLabel,
  getCountriesList } from 'reactjs-floating-label-inputs'
import 'reactjs-floating-label-inputs/dist/index.css'

const App = () => {
  const [minHeight, setMinHeight] = useState(40)
  const [rtl, setRtl] = useState(false)
  const [labelType, setLabelType] = useState(true)
  const [disableAll, setDisableAll] = useState(false)
  const [simpleData, setSimpleData] = useState('')
  const [simpleDataInt, setSimpleDataInt] = useState('')
  const [simpleDataFloat, setSimpleDataFloat] = useState('')
  const [simpleDataIcon, setSimpleDataIcon] = useState('')
  const [dateDataShamsi, setDateDataShamsi] = useState('')
  const [dateDataPersian, setDateDataPersian] = useState('')
  const [dateDataEnglish, setDateDataEnglish] = useState('')
  const [dateDataIcon, setDateDataIcon] = useState('')
  const [dateDataCustomIcon, setDateDataCustomIcon] = useState('')
  const [emailData, setEmailData] = useState('')
  const [emailDataValiate, setEmailDataValiate] = useState('')
  const [emailDataIcon, setEmailDataIcon] = useState('')
  const [emailDataCustomIcon, setEmailDataCustomIcon] = useState('')
  const [passwordData, setPasswordData] = useState('')
  const [passwordDataIcon, setPasswordDataIcon] = useState('')
  const [multiLineData, setMultiLineData] = useState('')
  const [selectData, setSelectData] = useState('')
  const [phoneData, setPhoneData] = useState({mobileCountryCode: 'IR', mobileValue: ''})
  const [phoneDataDC, setPhoneDataDC] = useState({mobileCountryCode: '+98', mobileValue: ''})
  const [phoneDataValidate, setPhoneDataValidate] = useState({mobileCountryCode: 'IR', mobileValue: ''})
  const [questionData, setQuestionData] = useState(false)
  const [checkData, setCheckData] = useState(false)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} style={{maxWidth: '400px', display: 'flex', flexDirection: 'column',  marginLeft: 'auto', marginRight: 'auto', alignItems: 'stretch', padding: '1rem'}}>
      <div style={{maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '0.25rem', padding: '1rem', border: '1px solid blue'}} >
        <span style={{marginLeft: 'auto', marginRight: 'auto', fontWeight: 'bold'}} >Settings</span>
        <QuestionInputFloatingLabel className='' title='Label Type Selection'
            trueOption='Type1' falseOption='Type2' minHeight={minHeight}
            value={labelType} onChangeValue={(val) => setLabelType(val)} />
        <QuestionInputFloatingLabel className='' title='Layout Direction'
            trueOption='RTL' falseOption='LTR' minHeight={minHeight}
            value={rtl} onChangeValue={(val) => setRtl(val)} />
        <NormalInputFloatingLabel className='' label='Minimum Height' type='IntNumber' minHeight={minHeight}
            value={minHeight} onChangeValue={(val) => setMinHeight(val)} labelType={labelType ? '1' : '2'} />
        <CheckBoxInputFloatingLabel className = '' text='Disable All' minHeight={minHeight}
            isChecked={disableAll} onChangeChecked={(val) => setDisableAll(val)} />
      </div>
      

      <NormalInputFloatingLabel className='' label='Simple Input' type='text' disabled={disableAll} minHeight={minHeight}
          value={simpleData} onChangeValue={(val) => setSimpleData(val)} labelType={labelType ? '1' : '2'} />
      <NormalInputFloatingLabel className='' label='Simple Input (integer)' type='IntNumber' disabled={disableAll} minHeight={minHeight}
          value={simpleDataInt} onChangeValue={(val) => setSimpleDataInt(val)} labelType={labelType ? '1' : '2'} />
      <NormalInputFloatingLabel className='' label='Simple Input (float)' type='FloatNumber' disabled={disableAll} minHeight={minHeight}
          value={simpleDataFloat} onChangeValue={(val) => setSimpleDataFloat(val)} labelType={labelType ? '1' : '2'} />
      <NormalInputFloatingLabel className='' label='Simple Input (Custom icon)' type='text' disabled={disableAll} minHeight={minHeight}
          value={simpleDataIcon} onChangeValue={(val) => setSimpleDataIcon(val)} labelType={labelType ? '1' : '2'}
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="purple" viewBox="0 0 16 16">
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
              </svg>} />

      <DateInputFloatingLabel className='' label='Date Input (Shamsi)' disabled={disableAll} shamsiMode={true} minHeight={minHeight}
          value={dateDataShamsi} onChangeValue={(val) => setDateDataShamsi(val)} labelType={labelType ? '1' : '2'} />
      <DateInputFloatingLabel className='' label='Date Input (Persian)' disabled={disableAll} shamsiMode={true} persianLanguage={true} minHeight={minHeight}
          value={dateDataPersian} onChangeValue={(val) => setDateDataPersian(val)} labelType={labelType ? '1' : '2'} />
      <DateInputFloatingLabel className='' label='Date Input (Gregorian)' disabled={disableAll} minHeight={minHeight}
          value={dateDataEnglish} onChangeValue={(val) => setDateDataEnglish(val)} labelType={labelType ? '1' : '2'} />
      <DateInputFloatingLabel className='' label='Date Input (With icon)' disabled={disableAll} minHeight={minHeight}
          value={dateDataIcon} onChangeValue={(val) => setDateDataIcon(val)} hasIcon={true} labelType={labelType ? '1' : '2'} />
      <DateInputFloatingLabel className='' label='Date Input (Custom icon)' disabled={disableAll} minHeight={minHeight}
          value={dateDataCustomIcon} onChangeValue={(val) => setDateDataCustomIcon(val)} hasIcon={true} labelType={labelType ? '1' : '2'}
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="red" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm2 .5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3Zm5 4.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
              </svg>} />

      <EmailInputFloatingLabel className='' label='Email Input' disabled={disableAll} labelType={labelType ? '1' : '2'} minHeight={minHeight}
          value={emailData} onChangeValue={(val) => setEmailData(val)} />
      <EmailInputFloatingLabel className='' label='Email Input (Validate)' disabled={disableAll} labelType={labelType ? '1' : '2'} minHeight={minHeight}
          value={emailDataValiate} onChangeValue={(val) => setEmailDataValiate(val)} onValidate={(e) => console.log(e)} />
      <EmailInputFloatingLabel className='' label='Email Input (With icon)' disabled={disableAll} labelType={labelType ? '1' : '2'} minHeight={minHeight}
        value={emailDataIcon} onChangeValue={(val) => setEmailDataIcon(val)} hasIcon={true} />
      <EmailInputFloatingLabel className='' label='Email Input (Custom icon)' disabled={disableAll} labelType={labelType ? '1' : '2'} minHeight={minHeight}
          value={emailDataCustomIcon} onChangeValue={(val) => setEmailDataCustomIcon(val)} hasIcon={true}
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
              </svg>} />

      <PasswordInputFloatingLabel className='' label='Password Input' disabled={disableAll} labelType={labelType ? '1' : '2'} minHeight={minHeight}
          value={passwordData} onChangeValue={(val) => setPasswordData(val)} />
      <PasswordInputFloatingLabel className='' label='Password Input (With icon)' disabled={disableAll} hasIcon={true} minHeight={minHeight}
          value={passwordDataIcon} onChangeValue={(val) => setPasswordDataIcon(val)} labelType={labelType ? '1' : '2'} />

      <NormalInputFloatingLabel className='' lineCount='7' label='Multi-Line Input' type='text' disabled={disableAll} minHeight={minHeight}
          value={multiLineData} onChangeValue={(val) => setMultiLineData(val)} labelType={labelType ? '1' : '2'} />

      <SelectInputFloatingLabel className='' label='Select Input' disabled={disableAll} colorPrimary='#0d6efd' minHeight={minHeight}
          value={selectData} onChangeValue={(val) => setSelectData(val)} labelType={labelType ? '1' : '2'}
          options={[{value: 0, label: 'Item1'}, {value: 1, label: 'Item2'}, {value: 2, label: 'Item3'},
                    {value: 3, label: 'Item4'}, {value: 4, label: 'Item5'}, {value: 5, label: 'Item6'}]} />

      <PhoneInputFloatingLabel className='' label='Phone Input (Country value code)' disabled={disableAll} labelType={labelType ? '1' : '2'} minHeight={minHeight}
          countryValue={phoneData.mobileCountryCode} phoneValue={phoneData.mobileValue}
          onChangeCountryValue={(val) => setPhoneData({...phoneData, mobileCountryCode: val})}
          onChangePhoneValue={(val) => setPhoneData({...phoneData, mobileValue: val})} />
      <PhoneInputFloatingLabel className='' label='Phone Input (Country dial code)' disabled={disableAll} labelType={labelType ? '1' : '2'} minHeight={minHeight} useDialCode={true}
          countryValue={phoneDataDC.mobileCountryCode} phoneValue={phoneDataDC.mobileValue}
          onChangeCountryValue={(val) => setPhoneDataDC({...phoneDataDC, mobileCountryCode: val})}
          onChangePhoneValue={(val) => setPhoneDataDC({...phoneData, mobileValue: val})} />
      <PhoneInputFloatingLabel className='' label='Phone Input (Validate)' disabled={disableAll} labelType={labelType ? '1' : '2'} minHeight={minHeight}
          countryValue={phoneDataValidate.mobileCountryCode} phoneValue={phoneDataValidate.mobileValue}
          onChangeCountryValue={(val) => setPhoneDataValidate({...phoneDataValidate, mobileCountryCode: val})}
          onChangePhoneValue={(val) => setPhoneDataValidate({...phoneDataValidate, mobileValue: val})} onValidate={(e) => console.log(e)} />

      <button style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', padding: '5px'}} onClick={() => console.log(getCountriesList())} >Log countries list in console</button>

      <QuestionInputFloatingLabel className='' title='Question Input' disabled={disableAll} minHeight={minHeight}
          trueOption='Yes' falseOption='No'
          value={questionData} onChangeValue={(val) => setQuestionData(val)} />

      <CheckBoxInputFloatingLabel className = '' text='Check Box Input' disabled={disableAll} minHeight={minHeight}
          isChecked={checkData} onChangeChecked={(val) => setCheckData(val)} />
    </section>
  );
}

export default App
