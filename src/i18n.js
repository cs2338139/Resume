import { createI18n } from 'vue-i18n';

import zh_tw_field from "/public/locales/zh-tw/field.json";
import zh_tw_info from "/public/locales/zh-tw/info.json";
import zh_tw_sideData from "/public/locales/zh-tw/side-data.json";
import zh_tw_bsData from "/public/locales/zh-tw/bs-data.json";
import zh_tw_axis3dData from "/public/locales/zh-tw/axis3d-data.json";
import zh_tw_pdlData from "/public/locales/zh-tw/pdl-data.json";
import zh_tw_otherData from "/public/locales/zh-tw/other-data.json";

import en_us_field from "/public/locales/en-us/field.json";
import en_us_info from "/public/locales/en-us/info.json";
import en_us_sideData from "/public/locales/en-us/side-data.json";
import en_us_bsData from "/public/locales/en-us/bs-data.json";
import en_us_axis3dData from "/public/locales/en-us/axis3d-data.json";
import en_us_pdlData from "/public/locales/en-us/pdl-data.json";
import en_us_otherData from "/public/locales/en-us/other-data.json";

class data {
    constructor(name,info,portfolio,field) {
        this.name=name;
        this.info = info;
        this.portfolio = portfolio;
        this.field = field;
    }
}

const zh_tw = new data('中文',zh_tw_info,[...zh_tw_sideData, ...zh_tw_bsData, ...zh_tw_axis3dData, ...zh_tw_pdlData, ...zh_tw_otherData],zh_tw_field);
const en_US = new data('English',en_us_info,[...en_us_sideData, ...en_us_bsData, ...en_us_axis3dData, ...en_us_pdlData, ...en_us_otherData],en_us_field);


export const i18n = createI18n({
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
        'zh-TW': zh_tw,
        'en-US': en_US,
    }
  });