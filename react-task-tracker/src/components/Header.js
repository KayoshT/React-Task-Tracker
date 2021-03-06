import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'darkred' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker Default',

}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}

// CSS IN JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
