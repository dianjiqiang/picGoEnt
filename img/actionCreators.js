import { change_name, add_counter, reduce_counter } from './constants'

export function changeName(name) {
  return {
    type: change_name,
    name
  }
}

export function addCounter(counter) {
  return {
    type: add_counter,
    counter
  }
}

export function reduceCounter(counter) {
  return {
    type: reduce_counter,
    counter
  }
}
