import React from 'react';
import { act, render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import Login from './Login'
import { Provider } from 'react-redux';
import store from '../../redux/store'
import {
    BrowserRouter as Router,
} from 'react-router-dom'

let component
let button
let email
let password

beforeEach(() => {
    component = render(
        <Router>
            <Provider store={store}>
                <Login />
            </Provider>
        </Router>
    )
    button = component.getByText("Acceder").parentNode
    email = component.getAllByText("Correo")[0].parentNode
    password = component.getByText("Contraseña").parentNode
})

describe('Pruebas de validacion de campos', () => {
    
    test("acceder con correo y contraseña vacios", () => {
        act(() => {
            fireEvent.click(button)
        })
        expect(email).toHaveTextContent("Campo requerido")
        expect(password).toHaveTextContent("Campo requerido")
    })

    test("acceder con correo vacio", () => {
        userEvent.type(password.querySelector("input"), 'Hello')
        act(() => {
            fireEvent.click(button)
        })
        expect(password).not.toHaveTextContent("Campo requerido")
        expect(email).toHaveTextContent("Campo requerido")
    })

    test("acceder con contraseña vacia", () => {
        userEvent.type(email.querySelector("input"), 'Hello@gmail.com')
        act(() => {
            fireEvent.click(button)
        })
        expect(email).not.toHaveTextContent("Campo requerido")
        expect(password).toHaveTextContent("Campo requerido")
    })
})

describe("Pruebas con credenciales incorrectas", () => {

    test("acceder con contraseña incorrecta", () => {
        userEvent.type(email.querySelector("input"), 'guitarrista1999@gmail.com')
        userEvent.type(password.querySelector("input"), 'guitarrista1999@gmail.com')
        act(() => {
            fireEvent.click(button)
        })
        waitFor(() => {
            expect(email).toHaveTextContent("Contraseña incorrecta")
        })
    })
})

