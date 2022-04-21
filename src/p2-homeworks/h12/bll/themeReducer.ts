export type initStateType = typeof initState

const initState = {
    theme: 'dark'
};

export const themeReducer = (state: initStateType = initState, action: changeThemeType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-COLOR-THEME": {

            return {...state, theme: action.options};
        }
        default:
            return state;
    }
};

type changeThemeType = ReturnType<typeof changeThemeC>

export const changeThemeC = (options:string) => {
    return {
        type: "CHANGE-COLOR-THEME",
        options
    }
}; // fix any