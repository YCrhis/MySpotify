import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from '../../DataLayer';
const Header = () => {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="Search for artist or songs" />
            </div>
            <div className="header__right">
                <Avatar alt={user?.diplay_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>

            </div>
        </div>
    )
}
export default Header