import { Grid, Slider } from '@mui/material';
import './footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
const Footer = () => {
    return (
        <>
            <div className="footer">
                <Grid container spacing={4}>
                    <Grid item sm={3}>
                        <div className="footerLeft">
                            <img src="https://img.discogs.com/GkwmGhLSzPg2iiM89LbicJuJy7M=/600x315/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-3210013-1503324969-8384.jpeg.jpg" alt="" className="footer__iconLogo" />
                            <div className="footer__songInfo">
                                <h4>We are One Rock</h4>
                                <p>One Rock</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6}>
                        <div className="footerCenter">
                            <ShuffleIcon className="footer__green" />
                            <SkipPreviousIcon className="footer__icon" />
                            <PlayCircleOutlineIcon className="large" />
                            <SkipNextIcon className="footer__icon" />
                            <RepeatIcon className="footer__green" />
                        </div>
                    </Grid>
                    <Grid item sm={3}>
                        <div className="footerRight">
                            <Grid container spacing={2}>
                                <Grid item>
                                    <PlaylistPlayIcon />
                                </Grid>
                                <Grid item>
                                    <VolumeDownIcon />
                                </Grid>
                                <Grid item xs>
                                    <Slider />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default Footer