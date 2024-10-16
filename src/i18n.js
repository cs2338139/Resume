import { createI18n } from 'vue-i18n';

import zh_tw_field from "/public/locales/zh-tw/field.json";
import zh_tw_info from "/public/locales/zh-tw/info.json";
import zh_tw_sideData from "/public/locales/zh-tw/side-data.json";
import zh_tw_bsData from "/public/locales/zh-tw/bs-data.json";
import zh_tw_axis3dData from "/public/locales/zh-tw/axis3d-data.json";
import zh_tw_pdlData from "/public/locales/zh-tw/pdl-data.json";
import zh_tw_otherData from "/public/locales/zh-tw/other-data.json";

import en_field from "/public/locales/en/field.json";
import en_info from "/public/locales/en/info.json";
import en_sideData from "/public/locales/en/side-data.json";
import en_bsData from "/public/locales/en/bs-data.json";
import en_axis3dData from "/public/locales/en/axis3d-data.json";
import en_pdlData from "/public/locales/en/pdl-data.json";
import en_otherData from "/public/locales/en/other-data.json";

class data {
    constructor(name,info,portfolio,field) {
        this.name=name;
        this.info = info;
        this.portfolio = portfolio;
        this.field = field;
    }
}

const zh_tw = new data('中文',zh_tw_info,[...zh_tw_sideData, ...zh_tw_bsData, ...zh_tw_axis3dData, ...zh_tw_pdlData, ...zh_tw_otherData],zh_tw_field);
const en = new data('EN',en_info,[...en_sideData, ...en_bsData, ...en_axis3dData, ...en_pdlData, ...en_otherData],en_field);


export const i18n = createI18n({
    locale: 'zh-tw',
    fallbackLocale: 'en',
    messages: {
        'zh-TW': zh_tw,
        'en': en,
    }
  });