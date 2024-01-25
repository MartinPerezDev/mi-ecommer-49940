const InlineFragment = ({ condicion }) => {
  return (
    <>
      { condicion && <h2>Condicion es true</h2> }
      
      { !condicion && <h2>Condicion es false</h2> }
    </>
  )
}
export default InlineFragment