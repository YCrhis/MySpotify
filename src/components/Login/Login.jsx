import Grid from '@mui/material/Grid';
import { loginUrl } from '../../spotify';
import './login.css'

const Login = () => {
    return (
        <>
            {/* left sectoin */}
            <Grid container className="container__login">
                <Grid item xs={12} xl={6} className="leftSection">
                    <h1>Listen your favourite music in my App</h1>
                    <a href={loginUrl}>Let's go with Spotify</a>
                </Grid>
                <Grid item xs={12} xl={6} className="rightSection">
                </Grid>

            </Grid>
            {/* Login with spotify */}
        </>
    )
}
export default Login