import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './drawer.css'
import { IconButton } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import SlideBar from '../slidebar/SlideBar';
const NewDrawer = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <IconButton
                edge="start"
                color='inherit'
                aria-label="open drawer"
                onClick={() => setOpen(true)}
                className="icon__open"
            >
                <MenuIcon className="name__icon"></MenuIcon>
            </IconButton>

            <SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => { }}>
                <SlideBar />
            </SwipeableDrawer>
        </>
    )
}
export default NewDrawer