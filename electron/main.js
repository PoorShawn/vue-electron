import {
  isSingleInstance,
} from './helpers/utils.js'
import initialize from './actions/app/initialize.js'
import quit from './actions/app/quit.js'

if (isSingleInstance) {
  initialize()
} else {
  quit()
}
