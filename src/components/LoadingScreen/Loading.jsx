import './Loading.css';

const Loading = () => {
  return (
      <div className='d-flex flex-column align-items-center mt-3'>
          <div className="lds-roller">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <h1 className='mt-1'>Cargando...</h1> </div>
  )
}

export default Loading;