import React from 'react'
import { getList } from 'country-list-with-dial-code-and-flag'

export const primaryColor = '#0d6efd';
export const disabledColor = '#A9A9A9';
export const disabledBgColor = '#F0F0F044';
export const inputComponentHeight = '35px';
export const inputComponentHeightPx = 35;
export const defaultCountryCode = 'IR';
export const defaultCountryDialCode = "+98";

export const countries0 = [
    {value: 0, label: 'Afghanistan'},
    {value: 1, label: 'Albania'},
    {value: 2, label: 'Algeria'},
    {value: 3, label: 'Andorra'},
    {value: 4, label: 'Angola'},
    {value: 5, label: 'Antigua & Deps'},
    {value: 6, label: 'Argentina'},
    {value: 7, label: 'Armenia'},
    {value: 8, label: 'Australia'},
    {value: 9, label: 'Austria'},
    {value: 10, label: 'Azerbaijan'},
    {value: 11, label: 'Bahamas'},
    {value: 12, label: 'Bahrain'},
    {value: 13, label: 'Bangladesh'},
    {value: 14, label: 'Barbados'},
    {value: 15, label: 'Belarus'},
    {value: 16, label: 'Belgium'},
    {value: 17, label: 'Belize'},
    {value: 18, label: 'Benin'},
    {value: 19, label: 'Bhutan'},
    {value: 20, label: 'Bolivia'},
    {value: 21, label: 'Bosnia Herzegovina'},
    {value: 22, label: 'Botswana'},
    {value: 23, label: 'Brazil'},
    {value: 24, label: 'Brunei'},
    {value: 25, label: 'Bulgaria'},
    {value: 26, label: 'Burkina'},
    {value: 27, label: 'Burundi'},
    {value: 28, label: 'Cambodia'},
    {value: 29, label: 'Cameroon'},
    {value: 30, label: 'Canada'},
    {value: 31, label: 'Cape Verde'},
    {value: 32, label: 'Central African Rep'},
    {value: 33, label: 'Chad'},
    {value: 34, label: 'Chile'},
    {value: 35, label: 'China'},
    {value: 36, label: 'Colombia'},
    {value: 37, label: 'Comoros'},
    {value: 38, label: 'Congo'},
    {value: 39, label: 'Congo {Democratic Rep}'},
    {value: 40, label: 'Costa Rica'},
    {value: 41, label: 'Croatia'},
    {value: 42, label: 'Cuba'},
    {value: 43, label: 'Cyprus'},
    {value: 44, label: 'Czech Republic'},
    {value: 45, label: 'Denmark'},
    {value: 46, label: 'Djibouti'},
    {value: 47, label: 'Dominica'},
    {value: 48, label: 'Dominican Republic'},
    {value: 49, label: 'East Timor'},
    {value: 50, label: 'Ecuador'},
    {value: 51, label: 'Egypt'},
    {value: 52, label: 'El Salvador'},
    {value: 53, label: 'Equatorial Guinea'},
    {value: 54, label: 'Eritrea'},
    {value: 55, label: 'Estonia'},
    {value: 56, label: 'Ethiopia'},
    {value: 57, label: 'Fiji'},
    {value: 58, label: 'Finland'},
    {value: 59, label: 'France'},
    {value: 60, label: 'Gabon'},
    {value: 61, label: 'Gambia'},
    {value: 62, label: 'Georgia'},
    {value: 63, label: 'Germany'},
    {value: 64, label: 'Ghana'},
    {value: 65, label: 'Greece'},
    {value: 66, label: 'Grenada'},
    {value: 67, label: 'Guatemala'},
    {value: 68, label: 'Guinea'},
    {value: 69, label: 'Guinea-Bissau'},
    {value: 70, label: 'Guyana'},
    {value: 71, label: 'Haiti'},
    {value: 72, label: 'Honduras'},
    {value: 73, label: 'Hungary'},
    {value: 74, label: 'Iceland'},
    {value: 75, label: 'India'},
    {value: 76, label: 'Indonesia'},
    {value: 77, label: 'Iran'},
    {value: 78, label: 'Iraq'},
    {value: 79, label: 'Ireland {Republic}'},
    {value: 80, label: 'Israel'},
    {value: 81, label: 'Italy'},
    {value: 82, label: 'Ivory Coast'},
    {value: 83, label: 'Jamaica'},
    {value: 84, label: 'Japan'},
    {value: 85, label: 'Jordan'},
    {value: 86, label: 'Kazakhstan'},
    {value: 87, label: 'Kenya'},
    {value: 88, label: 'Kiribati'},
    {value: 89, label: 'Korea North'},
    {value: 90, label: 'Korea South'},
    {value: 91, label: 'Kosovo'},
    {value: 92, label: 'Kuwait'},
    {value: 93, label: 'Kyrgyzstan'},
    {value: 94, label: 'Laos'},
    {value: 95, label: 'Latvia'},
    {value: 96, label: 'Lebanon'},
    {value: 97, label: 'Lesotho'},
    {value: 98, label: 'Liberia'},
    {value: 99, label: 'Libya'},
    {value: 100, label: 'Liechtenstein'},
    {value: 101, label: 'Lithuania'},
    {value: 102, label: 'Luxembourg'},
    {value: 103, label: 'Macedonia'},
    {value: 104, label: 'Madagascar'},
    {value: 105, label: 'Malawi'},
    {value: 106, label: 'Malaysia'},
    {value: 107, label: 'Maldives'},
    {value: 108, label: 'Mali'},
    {value: 109, label: 'Malta'},
    {value: 110, label: 'Marshall Islands'},
    {value: 111, label: 'Mauritania'},
    {value: 112, label: 'Mauritius'},
    {value: 113, label: 'Mexico'},
    {value: 114, label: 'Micronesia'},
    {value: 115, label: 'Moldova'},
    {value: 116, label: 'Monaco'},
    {value: 117, label: 'Mongolia'},
    {value: 118, label: 'Montenegro'},
    {value: 119, label: 'Morocco'},
    {value: 120, label: 'Mozambique'},
    {value: 121, label: 'Myanmar, {Burma}'},
    {value: 122, label: 'Namibia'},
    {value: 123, label: 'Nauru'},
    {value: 124, label: 'Nepal'},
    {value: 125, label: 'Netherlands'},
    {value: 126, label: 'New Zealand'},
    {value: 127, label: 'Nicaragua'},
    {value: 128, label: 'Niger'},
    {value: 129, label: 'Nigeria'},
    {value: 130, label: 'Norway'},
    {value: 131, label: 'Oman'},
    {value: 132, label: 'Pakistan'},
    {value: 133, label: 'Palau'},
    {value: 134, label: 'Panama'},
    {value: 135, label: 'Papua New Guinea'},
    {value: 136, label: 'Paraguay'},
    {value: 137, label: 'Peru'},
    {value: 138, label: 'Philippines'},
    {value: 139, label: 'Poland'},
    {value: 140, label: 'Portugal'},
    {value: 141, label: 'Qatar'},
    {value: 142, label: 'Romania'},
    {value: 143, label: 'Russian Federation'},
    {value: 144, label: 'Rwanda'},
    {value: 145, label: 'St Kitts & Nevis'},
    {value: 146, label: 'St Lucia'},
    {value: 147, label: 'Saint Vincent & the Grenadines'},
    {value: 148, label: 'Samoa'},
    {value: 149, label: 'San Marino'},
    {value: 150, label: 'Sao Tome & Principe'},
    {value: 151, label: 'Saudi Arabia'},
    {value: 152, label: 'Senegal'},
    {value: 153, label: 'Serbia'},
    {value: 154, label: 'Seychelles'},
    {value: 155, label: 'Sierra Leone'},
    {value: 156, label: 'Singapore'},
    {value: 157, label: 'Slovakia'},
    {value: 158, label: 'Slovenia'},
    {value: 159, label: 'Solomon Islands'},
    {value: 160, label: 'Somalia'},
    {value: 161, label: 'South Africa'},
    {value: 162, label: 'South Sudan'},
    {value: 163, label: 'Spain'},
    {value: 164, label: 'Sri Lanka'},
    {value: 165, label: 'Sudan'},
    {value: 166, label: 'Suriname'},
    {value: 167, label: 'Swaziland'},
    {value: 168, label: 'Sweden'},
    {value: 169, label: 'Switzerland'},
    {value: 170, label: 'Syria'},
    {value: 171, label: 'Taiwan'},
    {value: 172, label: 'Tajikistan'},
    {value: 173, label: 'Tanzania'},
    {value: 174, label: 'Thailand'},
    {value: 175, label: 'Togo'},
    {value: 176, label: 'Tonga'},
    {value: 177, label: 'Trinidad & Tobago'},
    {value: 178, label: 'Tunisia'},
    {value: 179, label: 'Turkey'},
    {value: 180, label: 'Turkmenistan'},
    {value: 181, label: 'Tuvalu'},
    {value: 182, label: 'Uganda'},
    {value: 183, label: 'Ukraine'},
    {value: 184, label: 'United Arab Emirates'},
    {value: 185, label: 'United Kingdom'},
    {value: 186, label: 'United States'},
    {value: 187, label: 'Uruguay'},
    {value: 188, label: 'Uzbekistan'},
    {value: 189, label: 'Vanuatu'},
    {value: 190, label: 'Vatican City'},
    {value: 191, label: 'Venezuela'},
    {value: 192, label: 'Vietnam'},
    {value: 193, label: 'Yemen'},
    {value: 194, label: 'Zambia'},
    {value: 195, label: 'Zimbabwe'},
]

export const countries = () => {
    let temp = [];
    //{ "name": "string", "dial_code": "string", "code": "string", "flag": "string" }
    getList().forEach(element => {
        temp.push({ value: element.code, label: element.name })
    });
    return temp;
}

const countryCodesFunction = () => {
    let temp = [...getList()];
    //{ "name": "string", "dial_code": "string", "code": "string", "flag": "string" }
    temp.forEach(element => {
        element.value = element.code;
        element.filterText = `${element.name} ${element.dial_code}`;
        element.label = <div className='d-flex flex-row gap-1' >
            <span className='flag-emoji' >{element.flag}</span>
            <span >{element.name}</span>
            <span >{`(${element.dial_code})`}</span>
        </div>
        element.label2 = <div className='d-flex flex-row gap-1' >
            <span className='flag-emoji' >{element.flag}</span>
            <span >{element.dial_code}</span>
        </div>
    });
    return temp;
}

export const countryCodes = countryCodesFunction();

export const DegreeList = [
    {value: "Diploma", label: "Diploma"},
    {value: "Associate", label: "Associate's Degree"},
    {value: "Bachelor", label: "Bachelor's Degree"},
    {value: "Master", label: "Master's Degree"},
    {value: "Doctoral", label: "Doctoral"},
    {value: "PhD", label: "Doctor of Philosophy"},
    {value: "PostDoc", label: "Postdoctoral"},
]

export function lightOrDark(color) {
    // Check the format of the color, HEX or RGB?
    var r, g, b, hsp, cl;
    if (color.match(/^rgb/)) {

        // If HEX --> store the red, green, blue values in separate variables
        cl = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = cl[1];
        g = cl[2];
        b = cl[3];
    } 
    else {

        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        cl = +("0x" + color.slice(1).replace( 
            cl.length < 5 && /./g, '$&$&'
        )
                );

        r = cl >> 16;
        g = cl >> 8 & 255;
        b = cl & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {

        return 'light';
    } 
    else {

        return 'dark';
    }
}
