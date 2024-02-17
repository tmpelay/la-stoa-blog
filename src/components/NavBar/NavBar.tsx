function NavBar() {
  return (
    <nav className="nv-container">
      <div className="nv-linksContainer">
        <ul className="nv-links">
          <li><a className="nv-link" href="/">HOME</a><div className="nv-borderBottom" /></li>
          <li><a className="nv-link" href="/blog">BLOG</a><div className="nv-borderBottom" /></li>
          <li><a className="nv-link" href="/account">ACCOUNT</a><div className="nv-borderBottom" /></li>
          <li><a className="nv-link" href="/community">COMMUNITY</a><div className="nv-borderBottom" /></li>
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
