import ArticleCard from "../ArticleCard/ArticleCard"
import HomeBanner from "../HomeBanner/HomeBanner"

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
          <ArticleCard category="FOUR VIRTUES" title="Prudence" imgName="prudence" theme={theme}>
            Prudence (Latin: prudentia; also Wisdom, Sophia, sapentia): the ability to judge between actions with regard to appropiate actions at given time.
          </ArticleCard>
          <ArticleCard category="FOUR VIRTUES" title="Temperance" imgName="temperance" theme={theme}>
            Temperance (Latin: temperantia): also know as restraint, the practice os self-control, obstention, discretion, and moderation temperign the appetition, hence the meaning chastity.
          </ArticleCard>
          <ArticleCard category="FOUR VIRTUES" title="Justice" imgName="justice" theme={theme}>
            Justice (Latin: iustitia): also considered as fairness, the most extensive and most important virtue, the Greek world also having the meaning righteousness.
          </ArticleCard>
          <ArticleCard category="FOUR VIRTUES" title="Courage" imgName="courage" theme={theme}>
            Courage (Latin: fortitudo): also termed
            fortitude, forbearance, strength, endurance, and
            the ability to confront fear, uncertainty, and
            intimidation.
          </ArticleCard>
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
