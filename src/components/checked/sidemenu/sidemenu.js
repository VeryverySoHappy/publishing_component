import './sidemenu.css'

export default function sidemenu() {
  return (
    <>
      <input type='checkbox' id='sidebar'/>
      {/* header start */}
      <header>
        <div>
          <label htmlFor='sidebar' className='menu'></label>
        </div>
      </header>
      {/* header end */}
      {/* container start */}
      <div className='container'>
      </div>
      {/* container end */}
      {/* sidebar start */}
      <div className='sidebar_content'>
        <ul>
          <li><a>메뉴01</a></li>
          <li><a>메뉴02</a></li>
          <li><a>메뉴03</a></li>
          <li><a>메뉴04</a></li>
          <li><a>메뉴05</a></li>
          <li><a>메뉴06</a></li>
        </ul>
        <label htmlFor='sidebar'></label>
      </div>
      {/* sidebar end */}
      {/* dark background start*/}
      <label htmlFor='sidebar' className='background'></label>
      {/* dark background end*/}
    </>
  )
}

