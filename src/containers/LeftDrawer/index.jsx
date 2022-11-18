import React from 'react'
import { colors, Drawer } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyle = makeStyles({
    drawer: {
        width:'240px',
        backgroundColor:'primary'
    },
    drawerPaper: {
        width: '20%',
        backgroundColor:'primary'
    },
    root: {
        width:'240px',
        backgroundColor:'primary'
    }
})


export default function LeftDrawer() {
    const classes = useStyle();

    return (
            <Drawer
                className={classes.drawer}
                anchor='left'
                variant='permanent'
                open={true}
                classes={{paper:classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5'>
                        aaaa
                    </Typography>
                </div>
            </Drawer>
    )
}
