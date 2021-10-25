import './slidebar.css'
import SlidebarOptions from './slidebarOptions'

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../DataLayer';

const SlideBar = () => {
    const [{ playlist }, dispatch] = useDataLayerValue()
    return (
        <>
            <div className="slidebar">
                <img src="https://cdn2.downdetector.com/static/uploads/logo/Spotify_Logo_RGB_Green.png" alt="" className="logo" />
                <SlidebarOptions title="Home" Icon={HomeIcon} />
                <SlidebarOptions title="Search" Icon={SearchIcon} />
                <SlidebarOptions title="Your Library" Icon={LibraryMusicIcon} />
                <br />
                <strong className="slidebarTitle">PLAYLIST</strong>
                <hr />
                {playlist?.items?.map(i => (
                    <SlidebarOptions title={i.name} />
                ))}
            </div>

        </>
    )
}
export default SlideBar