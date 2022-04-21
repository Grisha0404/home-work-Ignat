import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, initStateType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const theme = useSelector<AppStoreType, string>((state)=>state.themeColor.theme);
    const dispatch = useDispatch() // useSelector

    const onChangeCallback = (option:string) =>{
        dispatch(changeThemeC(option))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
                {/*<SuperRadio options={themes} onChangeOption={onChangeCallback}/>*/}
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
