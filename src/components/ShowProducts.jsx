import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    TableCell,
    TableBody,
    TableHead,
    TableContainer,
    TableRow,
    Table,
    Paper,
    Container,
    Typography,
    Grid,
    Button,
} from '@mui/material'
import axios from 'axios'
import { fontWeight } from '@mui/system'
import { ProductItem } from './ShowProducts/ProductItem'
import { HeaderShowProductsTable } from './ShowProducts/HeaderShowProductsTable'

export function ShowProducts() {
    const ENDPOINT = 'http://localhost:8000/api'

    const [products, setProducts] = useState([])
    const [count, setCount] = useState(null)

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        let { data } = await axios.get(`${ENDPOINT}/products`)

        if (data.length === 0) {
            return
        }

        setProducts(data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${ENDPOINT}/product/${id}`)
        getAllProducts()
    }

    return (
        <>
            <Container style={{ marginTop: '10px' }}>
                <Typography variant="h5" align="center" padding={'20px'}>
                    PRODUCTS
                </Typography>
                <Grid container spacing={0} direction="row" justifyContent="flex-end" alignItems="flex-end">
                    <Grid item md={1}>
                        <Button variant="contained" style={{ marginBottom: '10px' }}>
                            <Link to="/create" style={{ color: '#FFFFFF' }}>
                                Crear
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <HeaderShowProductsTable />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow hover key={product.id}>
                                    <ProductItem deleteProduct={deleteProduct} {...product} />
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}
