function NavBar() {
  return (
    <nav className="nv-container">
      <div className="nv-linksContainer">
        <ul className="nv-links">
          <li><a href="/">HOME</a><div className="nv-borderBottom light" /></li>
          <li><a href="/blog">BLOG</a><div className="nv-borderBottom" /></li>
          <li><a href="/account">ACCOUNT</a><div className="nv-borderBottom" /></li>
          <li><a href="/community">COMMUNITY</a><div className="nv-borderBottom" /></li>
        </ul>
      </div>
      <div className="nv-inputBox">
        <a href="#"><i className='bx bx-search-alt-2' ></i></a>
        <input type="text" placeholder="Search..." />
      </div>
    </nav >
  )
}

export default NavBar
