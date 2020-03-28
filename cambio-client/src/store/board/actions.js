import { action } from 'typesafe-actions'
import {
    SET_BEEF
} from './types'

export const setBeef = (data) => action(SET_BEEF, data)