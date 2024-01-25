
const CondicionalClass = ({condicion}) => {
  return (
    <div>
      <h2 className={ condicion ? "verdeClass" : "rojoClass" } >Hola Mundo!!</h2>
    </div>
  )
}
export default CondicionalClass