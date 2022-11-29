import PropTypes from 'prop-types'
import Button from './Button'
const Header = (props) => {

  const onbuttonclick = ()=>{
    console.log('click');
  }

  return (
    <header className="header">
        <h1>{props.title}</h1>
        <Button text="Add" onClick={onbuttonclick} />
    </header>
  )
}
Header.defaultProps = {
    title: "Task Tracker",
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header