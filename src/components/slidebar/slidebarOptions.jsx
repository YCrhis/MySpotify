import './slidebarOption.css'
const SlidebarOptions = ({ title, Icon }) => {
    return (
        <>
            <div className="slidebarOptions">
                {Icon && <Icon className="slidebarOption__icon" />}
                {Icon ? <h4>{title}</h4> : <p>{title}</p>}
            </div>
        </>
    )
}
export default SlidebarOptions