import {initStateType, loadingReducer} from "../loadingReducer";

let initialState: initStateType
beforeEach(() => {
    initialState = {
        loadingStatus: false
    }
})

test('change status on true', () => {
    const newState = loadingReducer(initialState, {type: 'CHANGE-STATUS', status: true})
    expect(newState.loadingStatus).toBe(true)
})
test('change status on false', () => {
    const newState = loadingReducer(initialState, {type: 'CHANGE-STATUS', status: false})
    expect(newState.loadingStatus).toBe(false)
})