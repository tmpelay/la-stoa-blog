import ArticleCard from "../ArticleCard/ArticleCard"
import Posts from "../../Posts"

function Blog({ theme }) {
  return (
    <section className='bl-section'>
      <h2 className='la-title'>
        ARTICLES
      </h2>
      <hr className='la-line' />
      <div className='la-container'>
        {
          Posts.map((post, index) => {
            return (
              <ArticleCard category={post["category"].toUpperCase()} title={post["title"]} imgName={post["trimTitle"]} theme={theme}>
                {post["description"]}
              </ArticleCard>
            )
          })
        }
      </div>
    </section >
  )
}

export default Blog
