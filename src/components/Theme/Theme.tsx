function Theme({ theme, setTheme }) {

  const toggleState = () => {
    if (theme == "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
    document.querySelector("body")?.setAttribute("data-theme", theme)
  }

  return (
    <>
      <input type="checkbox" id="id-tm-toggle" className="tm-toggle" onChange={toggleState} />
      <label htmlFor="id-tm-toggle" className="tm-toggle-label"></label>
    </>
  )
}

export default Theme
