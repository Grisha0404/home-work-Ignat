import {UserType} from "../HW8";

type ActionType =
    { type: 'sortUp', payload: 'up' }
    | { type: 'sortDown', payload: 'down' }
    | { type: 'check', payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            return [...state].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
        }
        case 'sortDown': {
            return [...state].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}

