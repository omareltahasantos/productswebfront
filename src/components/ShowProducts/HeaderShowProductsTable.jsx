import React from 'react'
import { TableCell, IconButton } from '@mui/material'

export function HeaderShowProductsTable() {
    return (
        <>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell>Actions</TableCell>
        </>
    )
}
