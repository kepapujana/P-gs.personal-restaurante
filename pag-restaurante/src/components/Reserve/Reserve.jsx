import React, { useState } from 'react'

const Reserve = () => {
    const name = document.getElementById('nombre')
    const fecha = document.getElementById('fecha')
    const hora = document.getElementById('hora')
    const userInfo = document.getElementById('content')


    const [data, setData] = 
    useState({
        name: '',
        fecha: '',
        hora: '',
    })

    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    //ESTADO INICIAL, CASILLAS
    const initialState = {
        name: '',
        fecha: '',
        hora: '',
    }
       
    const clearState = () => {
    setData({ ...initialState })
    }
       
    //AL EJECUTAR SUBMIT BTN
    const handleSubmit = (event) => {
        event.preventDefault()
        clearState()
        console.log(`sending data… ${data.name} ${data.fecha} ${data.hora}`)

        saveDataStorage()
        const userFromStorage = JSON.parse(localStorage.getItem('userName'))
        userInfo.innerHTML = `<p>Hola ${userFromStorage.name} tu reserva es el ${userFromStorage.fecha} a las ${userFromStorage.hora}</p>`
        console.log(userFromStorage);
    } 

    //LOCAL STORAGE
    function saveDataStorage() {
        localStorage.setItem('userName', JSON.stringify({
            name: name.value,
            fecha: fecha.value,
            hora: hora.value,
        }))
    }

    //CAMBIOS EN EL INPUT
    const handleInputChange = (event) => {
        console.log('nombre input', event.target.name)
        console.log('valor input', event.target.value)

        if (data.name.length + 1 < 3) {
            setMessage('Name must be at least 3 characters')
            setBtnDisabled(true)
          } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }
       
    
    return (
        <>
            <h2>Reserva</h2>
            <div id="content"></div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={data.name}
                    onChange={handleInputChange}
                    name="name"
                    id="nombre"
                />
                <input
                    type="date"
                    placeholder="data"
                    value={data.fecha}
                    onChange={handleInputChange}
                    name="fecha"
                    id="fecha"
                />
                <input
                    type="time"
                    placeholder="time"
                    value={data.time}
                    onChange={handleInputChange}
                    name="hora"
                    id="hora"
                />
                <button type="submit" disabled={btnDisabled}>Enviar</button>
                <p>{message}</p>
            </form>
        </>
    )
}

export default Reserve