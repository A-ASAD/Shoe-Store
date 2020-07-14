import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core';
import { context } from './Context';

const useStyles = makeStyles((theme) => ({
    cartBtn:{
        width:'100%',
        position:'absolute',
        left:0,
        bottom:10,
    },
    ppr:{
        position:'relative',
    }
  }));
export const Product = ()=>{
    const {item} = useParams()
    const classes = useStyles();
    let {shoes} = React.useContext(context);
    return(
        <div style={{marginTop:60, padding:20}}>
            <Grid container justify='center' spacing={2}>
                <Grid item sm={4} md={4} xs={10}>
                    <Paper>
                        <img src={shoes[item].image} width='100%'/>
                    </Paper>
                </Grid>
                <Grid item sm={4} md={3} xs={10} className={classes.ppr}>
                        <Typography variant='h5' color='secondary'>{item}</Typography>
                        <Typography variant='h6' color='secondary'>Price : ${shoes[item].price}</Typography>
                        <Typography variant='h6' color='secondary' style={{marginBottom:40}}>Remaining : {shoes[item].quantity}</Typography>
                        <Button className={classes.cartBtn} variant='contained' color='secondary'>Add to Cart</Button>
                </Grid>
                <Grid item sm={6} md={7} xs={10} className={classes.ppr}>
                    <Paper elevation={3}>
                        <Typography variant='h5'> Description</Typography>
                        <Typography variant='h7'> </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}