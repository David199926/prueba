import React from 'react';
import { act, render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import Signin from './Signin'
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
                <Signin />
            </Provider>
        </Router>
    )
    button = component.getByText("Crear cuenta").parentNode
    email = component.getAllByText("Correo")[0].parentNode
    password = component.getByText("Contraseña").parentNode
})

describe("Pruebas de validacion de campos", () => {

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

describe("Pruebas de validacion de registro", () => {

    test("constraseña con menos de 6 caracteres", () => {
        userEvent.type(email.querySelector("input"), 'Hello@gmail.com')
        userEvent.type(password.querySelector("input"), '12345')
        act(() => {
            fireEvent.click(button)
        })
        act(() => {
            fireEvent.click(button)
        })
        waitFor(() => {
            expect(component).toHaveTextContent("La contraseña debe poseer al menos 6 caracteres")
        })
    })

    test("registrarse con correo en uso", () => {
        userEvent.type(email.querySelector("input"), 'guitarrista1999@gmail.com')
        userEvent.type(password.querySelector("input"), '1234567890')
        act(() => {
            fireEvent.click(button)
        })
        act(() => {
            fireEvent.click(button)
        })
        waitFor(() => {
            expect(component).toHaveTextContent("Este correo ya se encuentra registrado")
        })
    })

})
