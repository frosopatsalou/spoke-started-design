import assert from 'node:assert/strict'
import test from 'node:test'
import { validateName, validatePhone } from '../src/utils/validation.ts'

test('names reject blanks, digits and symbols', () => {
  for (const name of ['', '   ', '1234', 'Jane123', '!!!', '🙂🙂']) {
    assert.notEqual(validateName(name), '', JSON.stringify(name))
  }
})

test('names support accents, non-Latin scripts, single names and punctuation', () => {
  for (const name of ['Froso Patsalou', 'Élodie O’Connor', '李明', 'Jean-Luc', "D’Arcy", 'Nguyễn Văn An', 'Prince']) {
    assert.equal(validateName(name), '', name)
  }
})

test('phone numbers reject random digits and invalid numbering plans', () => {
  for (const phone of ['', 'abc', '12345', '123456789', '1111111111', '+32 000 00 00 00']) {
    assert.notEqual(validatePhone(phone), '', JSON.stringify(phone))
  }
})

test('phone numbers support Belgian local and international formats', () => {
  for (const phone of ['+32 470 12 34 56', '0470 12 34 56', '+44 20 7946 0018']) {
    assert.equal(validatePhone(phone), '', phone)
  }
})
