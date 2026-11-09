import { parsePhoneNumberFromString } from 'libphonenumber-js/max'

export function validateName(value: string): string {
  const name = value.trim()
  if (!name) return 'Enter your name.'
  // Accept single names, accents, non-Latin scripts, apostrophes and hyphens.
  const letters = name.match(/\p{L}/gu) ?? []
  if (name.length > 120 || letters.length < 2 || !/^[\p{L}\p{M}]+(?:[\s'’ʼ.-][\p{L}\p{M}]+)*\.?$/u.test(name)) {
    return 'Use letters, spaces, apostrophes or hyphens.'
  }
  return ''
}

export function validatePhone(value: string): string {
  if (!value.trim()) return 'Enter your phone number.'
  // Belgium is the local default shown in the design; +country codes also work.
  const phone = parsePhoneNumberFromString(value, { defaultCountry: 'BE', extract: false })
  if (!phone?.isValid() || /^([0-9])\1+$/.test(phone.nationalNumber)) {
    return 'Enter a valid phone number, e.g. +32 470 12 34 56.'
  }
  return ''
}
