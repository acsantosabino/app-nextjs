function Tempo(props) {
  const dynamicDate = new Date()
  const dynamicString = dynamicDate.toGMTString()

  return(
    <div>
      <p>{dynamicString} (dinâmico)</p>
      <p>{props.staticDateString} (estático)</p>
    </div>
  )
}

export function getStaticProps(){
  const dynamicDate = new Date()
  const dynamicString = dynamicDate.toGMTString()

  return {
    props:{
      staticDateString: dynamicString
    },
    revalidate: 1
  }

}

export default Tempo