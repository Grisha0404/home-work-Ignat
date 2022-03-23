import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: any): any => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            return [...state].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
        }
        case 'sortDown': {
            return [...state].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
        }
        case 'check': {
            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}

