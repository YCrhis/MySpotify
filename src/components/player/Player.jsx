
import Body from '../Body/Body'
import NewDrawer from '../drawer/Drawer'
import Footer from '../footer/footer'
import './player.css'


const Player = ({ spotify }) => {
    return (
        <>
            <div className="player">
                <div className="playerBody">
                    <Body spotify={spotify} />
                    <NewDrawer />
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default Player