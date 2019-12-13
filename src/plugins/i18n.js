import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en.json'
import no from '@/lang/no.json'

Vue.use(VueI18n)
export const i18n = new VueI18n({
    locale: 'no',
    fallbackLocale: 'no',
    messages: { no, en}
})