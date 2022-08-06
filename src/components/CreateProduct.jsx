import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { TextField, Grid, Typography, Container, Button } from '@mui/material'
import axios from 'axios'

export function CreateProduct() {
    const navigate = useNavigate()
    const endpoint = 'http://localhost:8000/api/product/'

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(null)
    const [stock, setStock] = useState(null)

    const store = async (e) => {
        e.preventDefault()
        let { data } = await axios.post(`${endpoint}`, {
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

                <Button type="submit" variant="contained" style={{ margin: 20 }} onClick={store}>
                    Guardar cambios
                </Button>
            </Container>
        </>
    )
}
