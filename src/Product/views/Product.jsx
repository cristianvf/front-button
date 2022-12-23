import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import trajeimg from '../images/traje.png';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const Product = (props) =>{

	return (
		<Grid container spacing={3} paddingLeft={5} paddingRight={5} columns={12} marginTop={1} sx={{}}>
		  <Grid container columns={12} sx={{}} marginTop={1} marginBottom={1} marginLeft={3}>
		  	<Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%' }}>
		      <InputBase sx={{ ml: 1, flex: 1 }}  placeholder="Search" inputProps={{ 'aria-label': 'search' }}/>
		      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
		        <SearchIcon />
		      </IconButton>
		    </Paper>
		  </Grid>
		  <Grid item xs={4} sx={{}}>
		  	<Card sx={{ maxWidth: 345}}>
		      <CardContent>
			      <CardMedia
			        component="img"
			        height="350"
			        sx={{objectFit:"contain"}}
			        image={trajeimg}
			        alt="traje"
			      />
		        <Box sx={{ typography: 'subtitle2' }}>Saco smoking con solapa de shawl gris</Box>
		        <Box sx={{ typography: 'subtitle2',  fontWeight: 'bold' }}>$ 1,400.00</Box>

		        <Grid container columns={12}>
					<Button variant="outlined" size="small" color="secondary" sx={{marginRight:0.5, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>Gris</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, fontSize:10}}>Negro</Button>
				</Grid>
				<Grid container columns={12} >
					<Button variant="outlined" size="small" color="secondary" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>34R</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>34C</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>36R</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>36C</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>38R</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>38C</Button>
				</Grid>

				<Grid container columns={12} >
					<Button variant="outlined" size="small" color="secondary" sx={{marginRight:1, marginTop:1}}>Agregar</Button>
				</Grid>

		      </CardContent>
		    </Card>
		  </Grid>


		  <Grid item xs={4}>
		  	<Card sx={{ maxWidth: 345}}>
		      <CardContent>
			      <CardMedia
			        component="img"
			        height="350"
			        sx={{objectFit:"contain"}}
			        image={trajeimg}
			        alt="traje"
			      />
		        <Box sx={{ typography: 'subtitle2' }}>Saco smoking con solapa de shawl gris</Box>
		        <Box sx={{ typography: 'subtitle2',  fontWeight: 'bold' }}>$ 1,400.00</Box>

		        <Grid container columns={12}>
					<Button variant="outlined" size="small" color="secondary" sx={{marginRight:0.5, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>Gris</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, fontSize:10}}>Negro</Button>
				</Grid>
				<Grid container columns={12} >
					<Button variant="outlined" size="small" color="secondary" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>34R</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>34C</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>36R</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>36C</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>38R</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>38C</Button>
				</Grid>

				<Grid container columns={12} >
					<Button variant="outlined" size="small" color="secondary" sx={{marginRight:1, marginTop:1}}>Agregar</Button>
				</Grid>

		      </CardContent>
		    </Card>
		  </Grid>
		  <Grid item xs={4}>
		  	<Card sx={{ maxWidth: 345}}>
		      <CardContent>
			      <CardMedia
			        component="img"
			        height="350"
			        sx={{objectFit:"contain"}}
			        image={trajeimg}
			        alt="traje"
			      />
		        <Box sx={{ typography: 'subtitle2' }}>Saco smoking con solapa de shawl gris</Box>
		        <Box sx={{ typography: 'subtitle2',  fontWeight: 'bold' }}>$ 1,400.00</Box>

		        <Grid container columns={12}>
					<Button variant="outlined" size="small" color="secondary" sx={{marginRight:0.5, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>Gris</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, fontSize:10}}>Negro</Button>
				</Grid>
				<Grid container columns={12} >
					<Button variant="outlined" size="small" color="secondary" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>34R</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>34C</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>36R</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>36C</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>38R</Button>
					<Button variant="outlined" size="small" color="inherit" sx={{marginRight:0.5, marginTop:1, fontSize:10,  minHeight: 0, minWidth: 0, padding:0,paddingLeft: 0.5, paddingRight: 0.5}}>38C</Button>
				</Grid>

				<Grid container columns={12} >
					<Button variant="outlined" size="small" color="secondary" sx={{marginRight:1, marginTop:1}}>Agregar</Button>
				</Grid>

		      </CardContent>
		    </Card>
		  </Grid>

		  <Grid container columns={12} sx={{}} marginTop={1} marginBottom={1}>
		  	<Pagination count={10} sx={{mx:'auto'}}/>
		  </Grid>

		</Grid>
    );
}

export default Product;

