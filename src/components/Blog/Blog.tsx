import ArticleCard from "../ArticleCard/ArticleCard"

function Blog({ theme }) {
  return (
    <section className='bl-section'>
      <h2 className='la-title'>
        ARTICLES
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
      <div className='la-container'>
        <ArticleCard category="STOIC CONCEPTS" title="Memento Mori" imgName="mementomori" theme={theme}>
          Memento mori (Latin for 'remember that you [have to] die') is an artistic or symbolic trope acting as a reminder of the inevitability of death. The concept has its roots in the philosophers of classical antiquity and Christianity.
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
  )
}

export default Blog
