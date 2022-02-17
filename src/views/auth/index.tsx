import React from 'react'
import axios from 'axios'

import { Button, Form, Input } from 'antd'
import { APIuri } from '../..'
import { setAuth  } from '../../store/auth'
import { store } from '../../store';

import './auth.css'

export function Auth() {

    interface IAuth {
        username: string,
        password: string
    }

    interface IResponse {
        status: string,
        token?: string,
        error?: string
    }

    const doAuthFetch = async(fieldsValue:IAuth) => {
        let token = null
        try {
            const fetch = await axios.post(`${APIuri}/auth`,fieldsValue)
            const data:IResponse = fetch.data;            
            if (data.status === 'success') {
                token = data.token
                store.dispatch(setAuth(token))
                localStorage.setItem('token', `${token}`)
            }             
            if (data.status === 'error') {
                alert(data.error)
            }


        } catch(error) {
            throw(error)
        }
    }

    const [form] = Form.useForm()

    const doSubmit = () =>  form.submit()
    
    return (
    <div className="view-center">
        <div className="authPanel">
                <div className="authForm">
                    <h3>Авторизация</h3>
                    <Form name='AuthUser' onFinish={doAuthFetch} form={form}>
                        <div className="formBody column">
                            <Form.Item name="username" label="Введите логин">
                                <Input />
                            </Form.Item>

                            <Form.Item name="password" label="Введите пароль">
                                <Input.Password />
                            </Form.Item>
                            <Button type="primary" onClick={doSubmit}>Войти</Button>
                        </div>      
                    </Form>
                </div>
        </div>
      </div>
    )
}

export default Auth