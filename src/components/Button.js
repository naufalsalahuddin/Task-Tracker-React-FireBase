const Button = ({text,onClick}) => {
  return (
    <button className="btn" onClick={onClick}>{text}</button>
  )
}
Button.defaultProps = {
    text: "Add"
}
export default Button