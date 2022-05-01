import axios from "axios";

export type BodyType = {
    errorText: string
    info: string
    yourBody:{
        success: true
    }
    yourQuery: {}
}
type CommonTodoType<T = {}> = {
    error: string
    method: string,
    url:string
}
const instance = axios.create(
    {
        baseURL: 'https://neko-cafe-back.herokuapp.com/',
    }
)

export const RequestsAPI = {
    postRequests: (checked:boolean) => {
        return instance.post<CommonTodoType<{
            body: BodyType
        }>>
        ('auth/test', {success: checked})
    }
}