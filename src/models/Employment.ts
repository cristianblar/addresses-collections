import { employmentTypes } from 'constant'

type Employment = {
  employed: boolean
  employmentType: typeof employmentTypes[number]
}

export default Employment
