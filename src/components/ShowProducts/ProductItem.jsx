import React from 'react'
import { TableCell, Typography, IconButton, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
export function ProductItem({ deleteProduct, ...product }) {
    return (
        <>
            <TableCell style={{ fontWeight: 'bold' }}>
                <Typography>{product.description}</Typography>
            </TableCell>
            <TableCell align="center">
                <Typography
                    style={{
                        border: '2px solid white',
                        borderRadius: '25px',
                        backgroundColor: '#DCDCDC',
                        width: '100px',
                        margin: 'auto',
                    }}
                >
                    {product.price}
                </Typography>
            </TableCell>
            <TableCell align="center" style={{ color: '#649e4a' }}>
                <Typography>{product.stock}</Typography>
            </TableCell>
            <TableCell>
                <IconButton>
                    <Tooltip title="Editar">
                        <Link to={`/edit/${product.id}`}>
                            <EditIcon style={{ color: 'green' }} />
                        </Link>
                    </Tooltip>
                </IconButton>
                <IconButton onClick={() => deleteProduct(product.id)}>
                    <Tooltip title="Eliminar">
                        <DeleteIcon style={{ color: 'red' }} />
                    </Tooltip>
                </IconButton>
            </TableCell>
        </>
    )
}
