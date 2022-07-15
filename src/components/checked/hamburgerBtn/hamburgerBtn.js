import './hamburgerBtn.css'

export default function HamBtn() {
  return (
    <>
    <div className='container'>
      <input type='checkbox' id='trigger' />
        <label htmlFor='trigger'>
          <span></span>
          <span></span>
          <span></span>
        </label>
    </div>
    </>
  )
}