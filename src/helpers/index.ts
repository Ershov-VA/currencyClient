import axios from "axios";

export const getCurrentDate = (propDate = null):string => {
    let date = new Date()    
    if (propDate) {
        date = new Date(propDate)
    }   
    return `${date.getFullYear()}-${valideValue(date.getMonth() + 1)}-${valideValue(date.getDate())}`;
}

export const getYesterdayDate = (propDate = null):string => {
    let date = new Date()
    if (propDate) date = new Date(propDate)
    date.setDate(date.getDate() - 1)
    return `${date.getFullYear()}-${valideValue(date.getMonth() + 1)}-${valideValue(date.getDate())}`;
}

export const valideValue = (item:number):string|number => {
    if (item < 10) return `0${item}`
    return item
}



export const axiosAuth = () => {
    const axiosInstance = axios.create()
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                localStorage.removeItem('token')
                window.location.href='/'
                console.log('not auth')
            }
            return Promise.reject(error.response.status)
        }
    )
    return axiosInstance
}



