import Header from './Header'

import './body.css'
import { useDataLayerValue } from '../../DataLayer'
import SongRow from './SongRow';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Body = ({ spotify }) => {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <>
            <div className="body">
                <Header spotify={spotify} />
                <div className="body__container">

                    <div className="body__info">
                        {<img src={discover_weekly?.images[0].url} alt="" />}
                        <div className="body__infoText">
                            <strong>PLAYLIST</strong>
                            <PlayCircleFilledIcon className="body__iconPlay" />
                            <h2>Discover Weekly</h2>
                            <p>{discover_weekly?.description}</p>
                        </div>
                    </div>


                    <div className="body__songs__new">
                        <div className="body__icons">

                            <FavoriteIcon fontSize="large" />
                            <MoreHorizIcon />
                        </div>
                        <div className="body__songs">
                            {discover_weekly?.tracks.items.map(item => (
                                <SongRow track={item.track} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body