import { createActions } from 'redux-actions'

export const { showMsg, hideAll } = createActions({
    SHOW_MSG: (id) => ({id}),
    HIDE_ALL: null
})
