const initialFilterState = {
    theme: 'ALL'
}

const ACTIVE = 'ACTIVE';
const All = 'ALL';
const DONE = 'DONE';

export const filterAll = () => ({
    type: All,
})

export const filterActive = () => ({
    type: ACTIVE,
})

export const filterDone = () => ({
    type: DONE,
})

const filterReducer = (state = initialFilterState, action) => {
    switch(action.type) {
        case All: {
            return {
                ...state,
                theme: All,
            }
        }
        case ACTIVE: {
            return {
                ...state,
                theme: ACTIVE,
            }
        }
        case DONE: {
            return {
                ...state,
                theme: DONE,
            }
        }
        default: {
            return state
        }
    }
}

export default filterReducer;