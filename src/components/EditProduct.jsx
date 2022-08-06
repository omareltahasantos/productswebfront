import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { TextField, Grid, Typography, Container, Button } from '@mui/material'
import axios from 'axios'

export function EditProduct() {
    const { id } = useParams()
    const navigate = useNavigate()
    const endpoint = 'https://productsweb1front.herokuapp.com/api/product/'

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(null)
    const [stock, setStock] = useState(null)

    useEffect(() => {
        getProductById()
    }, [id])

    const getProductById = async () => {
        let { data } = await axios.get(`${endpoint}${id}`)

        setDescription(data.description)
        setPrice(data.price)
        setStock(data.stock)
    }

    const update = async (e) => {
        e.preventDefault()
        let { data } = await axios.put(`${endpoint}${id}`, {
            description: description,
            price: price,
            stock: stock,
        })

        setDescription(data.description)
        setPrice(parseInt(data.price))
        setStock(parseInt(data.stock))
        navigate('/')
    }

    return (
        <>
            <Container>
                <Typography align="center" variant="h5" padding="20px">
                    Editar
                </Typography>
                <Grid container spacing={5} direction="column" justifyContent="center">
                    <Grid item md={9}>
                        <TextField
                            helperText="Description"
                            FormHelperTextProps={{
                                style: {
                                    fontSize: 15,
                                },
                            }}
                            variant="outlined"
                            fullWidth
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item md={9}>
                        <TextField
                            helperText="Price"
                            FormHelperTextProps={{
                                style: {
                                    fontSize: 15,
                                },
                            }}
                            variant="outlined"
                            fullWidth
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Grid>
                    <Grid item md={9}>
                        <TextField
                            helperText="Stock"
                            FormHelperTextProps={{
                                style: {
                                    fontSize: 15,
                                },
                            }}
                            variant="outlined"
                            fullWidth
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </Grid>
                </Grid>

                <Button type="submit" variant="contained" style={{ margin: 20 }} onClick={update}>
                    Guardar cambios
                </Button>
            </Container>
        </>
    )
}
