const initState = {
    loadingStatus: false
}

export type initStateType = typeof initState

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-STATUS': {
            return {
                ...state, loadingStatus: action.status
            }
        }
        default:
            return state
    }
}

type ActionType = LoadingACType
type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (status: boolean) => {
    return {
        type: 'CHANGE-STATUS',
        status
    } as const
} // fix any
