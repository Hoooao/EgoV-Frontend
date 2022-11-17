import React from 'react'
import { Drawer } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    drawer: {
        width: '20%'
    },
    drawerPaper: {
        width: '20%'
    },
    root: {
        display: 'flex'
    }
})


export default function LeftDrawer() {
    const classes = useStyle();

    return (
        <div
            className={classes.root}
        >
            <Drawer
                className={classes.drawer}
                anchor='left'
                variant='permanent'
            >

            </Drawer>
        </div>
    )
}
