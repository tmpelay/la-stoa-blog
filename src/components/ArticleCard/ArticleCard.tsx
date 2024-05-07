function ArticleCard({ category, title, imgName, children, theme }) {
  const imgSrc = `images/articles/${imgName}-${theme}.png`
  const href = `/articles/${imgName}`

  return (
    <a href={href} className="ac-link" >
      <div className="ac-container">
        <img src={imgSrc} />
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </a >
  )
}

export default ArticleCard
