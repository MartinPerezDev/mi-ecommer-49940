const CondicionalProps = ({condicion}) => {

  const props = condicion ? {
    className : "verdeClass",
    title : "Titulo de props"
  } : {}

  return (
    <div>
      <h2 {...props} >Hola Mundo!!</h2>
    </div>
  )
}
export default CondicionalProps