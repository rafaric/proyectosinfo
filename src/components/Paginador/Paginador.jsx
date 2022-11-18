import { Pagination } from "@mui/material"
import { Box, ThemeProvider, createTheme } from '@mui/system';

const Paginador = ({
    cantidadPaginas,
    onChange
}) => {
    return <Pagination count={cantidadPaginas} color="secondary" onClick={() => onChange(cantidadPaginas+1)}/>
}

export default Paginador;
