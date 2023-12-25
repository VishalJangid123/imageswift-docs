
const Alert = ({children}) => {
  const style = {
    border: '1px',
    backgroundColor: '#f1f5f9',
    borderRadius: '10px',
    padding: "1.25rem",
    marginTop: '1rem',
    color: 'black'
  }
  return (
    <div style={style} >{children}</div>
  )
}

export default Alert