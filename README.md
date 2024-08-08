# reactjs-floating-label-inputs

> ReactJs Component: Inputs with floating labels

[![NPM](https://img.shields.io/npm/v/reactjs-floating-label-inputs.svg)](https://www.npmjs.com/package/reactjs-floating-label-inputs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-floating-label-inputs
```

## Online Demo

Visit this link:
[https://simacoders.ir/features/#ReactJsFloatingLabelInputs](https://simacoders.ir/features/#ReactJsFloatingLabelInputs)

## What is new?
In new version, **required** property is added to components.

## Usage

### Import
```jsx
import { MyComponent1, MyComponent2 } from 'reactjs-floating-label-inputs'
import 'reactjs-floating-label-inputs/dist/index.css'
```

### General properties
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>className</td>
      <td>String</td>
      <td>Apply your desire class globally</td>
    </tr>
    <tr>
      <td>label</td>
      <td>String</td>
      <td>Label of the component</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>boolean</td>
      <td>Disable component</td>
    </tr>
    <tr>
      <td>labelType</td>
      <td>string/number</td>
      <td>Switch label type between normal type and mui type</td>
    </tr>
    <tr>
      <td>dark</td>
      <td>boolean</td>
      <td>Switch visual mode to dark/light</td>
    </tr>
    <tr>
      <td>minHeight</td>
      <td>number</td>
      <td>minimum height of component (should be greater than 35)</td>
    </tr>
    <tr>
      <td>required</td>
      <td>boolean</td>
      <td>Checking required in for validation</td>
    </tr>
    <tr>
      <td>onChangeValue</td>
      <td>function</td>
      <td>Emit when value is changed in the component</td>
    </tr>
    <tr>
      <td>onFocus</td>
      <td>function</td>
      <td>Emit when component got focus</td>
    </tr>
    <tr>
      <td>onBlur</td>
      <td>function</td>
      <td>Emit when component lost focus</td>
    </tr>
  </tbody>
</table>

### <i style='color: green; font-weight: bold'>NormalInputFloatingLabel</i> Component
```jsx
const [simpleData, setSimpleData] = useState('')
<NormalInputFloatingLabel className='' label='Simple Input' type='text'
          value={simpleData} onChangeValue={(val) => setSimpleData(val)} />
```
Additional properties:
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>lineCount</td>
      <td>Number</td>
      <td>Convert simple input to multiline textarea if lineCount > 1</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td><b>text</b> for normal text<br/>
          <b>IntNumber</b> for just integer numbers<br/>
          <b>FloatNumber</b> for just decimal numbers</td>
    </tr>
    <tr>
      <td>value</td>
      <td>any</td>
      <td>Value of the component</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>component</td>
      <td>Svg is recomended. It show your specified icon beside the component.</td>
    </tr>
    <tr>
      <td>iconClickable</td>
      <td>boolean</td>
      <td>Determin that icon could be clicked or not</td>
    </tr>
    <tr>
      <td>onIconClick</td>
      <td>function</td>
      <td>Emit when icon is clicked</td>
    </tr>
  </tbody>
</table>


### <i style='color: green; font-weight: bold'>DateInputFloatingLabel</i> Component
```jsx
const [dateData, setDateData] = useState('')
<DateInputFloatingLabel className='' label='Date Input'
          value={dateData} onChangeValue={(val) => setDateDat(val)} />
```
Additional properties:
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>String</td>
      <td>Date in 'YYYY/MM/DD' format (Empty string means today)</td>
    </tr>
    <tr>
      <td>shamsiMode</td>
      <td>boolean</td>
      <td>Switch between Gregorian and Shamsi modes</td>
    </tr>
    <tr>
      <td>persianLanguage</td>
      <td>boolean</td>
      <td>If true, it translate and convert texts to Persian</td>
    </tr>
    <tr>
      <td>hasIcon</td>
      <td>boolean</td>
      <td>Show or Hide icon for the component</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>component</td>
      <td>Svg is recomended. It show your specified icon beside the component.<br/>
          To show default icon, remove this property or let it null.</td>
    </tr>
  </tbody>
</table>

### <i style='color: green; font-weight: bold'>EmailInputFloatingLabel</i> Component
```jsx
const [emailData, setEmailData] = useState('')
<EmailInputFloatingLabel className='' label='Email Input'
          value={emailData} onChangeValue={(val) => setEmailData(val)} />
```
Additional properties:
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>String</td>
      <td>Email address</td>
    </tr>
    <tr>
      <td>hasIcon</td>
      <td>boolean</td>
      <td>Show or Hide icon for the component</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>component</td>
      <td>Svg is recomended. It show your specified icon beside the component.<br/>
          To show default icon, remove this property or let it null.</td>
    </tr>
    <tr>
      <td>onValidate</td>
      <td>function</td>
      <td>Validate entered email address after that it lost focus and return result as a boolean value.</td>
    </tr>
  </tbody>
</table>

### <i style='color: green; font-weight: bold'>PasswordInputFloatingLabel</i> Component
```jsx
const [passwordData, setPasswordData] = useState('')
<PasswordInputFloatingLabel className='' label='Password Input'
          value={passwordData} onChangeValue={(val) => setPasswordData(val)} />
```
Additional properties:
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>String</td>
      <td>Password</td>
    </tr>
    <tr>
      <td>hasIcon</td>
      <td>boolean</td>
      <td>Show or Hide 'Eye' icon for the component</td>
    </tr>
  </tbody>
</table>

### <i style='color: green; font-weight: bold'>SelectInputFloatingLabel</i> Component
```jsx
const [selectData, setSelectData] = useState('')
<SelectInputFloatingLabel className='' label='Select Input' colorPrimary='#0d6efd'
          value={selectData} onChangeValue={(val) => setSelectData(val)}
          options={[{value: 0, label: 'Item1'}, {value: 1, label: 'Item2'}, {value: 2, label: 'Item3'},
                    {value: 3, label: 'Item4'}, {value: 4, label: 'Item5'}, {value: 5, label: 'Item6'}]} />
```
Additional properties:
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>options</td>
      <td>array of {value, label} object</td>
      <td>Options of the component</td>
    </tr>
    <tr>
      <td>colorPrimary</td>
      <td>color</td>
      <td>Put the component in harmony with your theme</td>
    </tr>
  </tbody>
</table>

### <i style='color: green; font-weight: bold'>PhoneInputFloatingLabel</i> Component
```jsx
const [phoneData, setPhoneData] = useState({countryCode: 'IR', value: ''})
<PhoneInputFloatingLabel className='' label='Phone Input'
          countryValue={phoneData.countryCode} phoneValue={phoneData.value}
          onChangeCountryValue={(val) => setPhoneData({...phoneData, countryCode: val})}
          onChangePhoneValue={(val) => setPhoneData({...phoneData, value: val})} />
```
Phone data should be destructured to two section: countryCode (countryValue) and phone number (phoneValue).

You can have list of countries by calling ```getCountriesList()``` function.

Additional properties:
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>countryValue</td>
      <td>String</td>
      <td>Country code like 'IR' or 'US'</td>
    </tr>
    <tr>
      <td>phoneValue</td>
      <td>String</td>
      <td>Phone number value (Without country code)</td>
    </tr>
    <tr>
      <td>useDialCode</td>
      <td>boolean</td>
      <td>If this property is `true`, PhoneInput works with country dial code (e.g. +98), otherwise it works with country value (e.g. IR)</td>
    </tr>
    <tr>
      <td>onChangeCountryValue</td>
      <td>function</td>
      <td>Emit when countryValue is changed in the component.</td>
    </tr>
    <tr>
      <td>onChangePhoneValue</td>
      <td>function</td>
      <td>Emit when phoneValue is changed in the component.</td>
    </tr>
    <tr>
      <td>onValidate</td>
      <td>function</td>
      <td>Validate entered phone number after that it lost focus and return result as a boolean value.</td>
    </tr>
  </tbody>
</table>

### <i style='color: green; font-weight: bold'>QuestionInputFloatingLabel</i> Component
```jsx
const [questionData, setQuestionData] = useState(false)
<QuestionInputFloatingLabel className='' title='Question Input'
          trueOption='Yes' falseOption='No'
          value={questionData} onChangeValue={(val) => setQuestionData(val)} />
```
It creates a question with two option to answer.

Additional properties:
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>trueOption</td>
      <td>String</td>
      <td>One of the possible answers</td>
    </tr>
    <tr>
      <td>falseOption</td>
      <td>String</td>
      <td>Another possible answer</td>
    </tr>
  </tbody>
</table>

### <i style='color: green; font-weight: bold'>CheckBoxInputFloatingLabel</i> Component
```jsx
const [checkData, setCheckData] = useState(false)
<CheckBoxInputFloatingLabel className = '' text='Check Box Input' disabled={disableAll}
          isChecked={checkData} onChangeChecked={(val) => setCheckData(val)} />
```
Additional properties:
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>isChecked</td>
      <td>boolean</td>
      <td>Checked status</td>
    </tr>
    <tr>
      <td>onChangeChecked</td>
      <td>function</td>
      <td>Emit when isChecked value is changed in the component.</td>
    </tr>
  </tbody>
</table>


## License

MIT © [mortezadvlp](https://github.com/mortezadvlp)
