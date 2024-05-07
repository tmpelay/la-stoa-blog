import ArticleCard from "../ArticleCard/ArticleCard"
import HomeBanner from "../HomeBanner/HomeBanner"
import Posts from "../../Posts"

function Home({ theme }) {
  return (
    <div>
      <header>
        <HomeBanner />
      </header>
      <section className='la-section'>
        <h2 className='la-title'>
          LATEST ARTICLES
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
      <section className='sb-section'>
        <h3 className='sb-title'>SUSBCRIBE</h3>
        <hr className='sb-line' />
        <p className='sb-text'>Subscribe to our newsletter</p>
        <form className='sb-form'>
          <input type='email' placeholder='Email' required />
          <button type='submit'>Submit</button>
        </form>
      </section>
    </div >
  )
}

export default Home
