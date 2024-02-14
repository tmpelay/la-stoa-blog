function InfoCard({ virtue }) {

  const info = {
    Prudence: "Prudence (Latin: prudentia; also Wisdom, Sophia, sapentia): the ability to judge between actions with regard to appropiate actions at given time",
    Temperance: "Temperance (Latin: temperantia): also know as restraint, the practice os self-control, obstention, discretion, and moderation temperign the appetition, hence the meaning chastity.",
    Justice: "Justice (Latin: iustitia): also considered as fairness, the most extensive and most important virtue, the Greek world also having the meaning righteousness",
    Courage: "Courage (Latin: fortitudo): also termed fortitude, forbearance, strength, endurance, and the ability to confront fear, uncertainty, and intimidation"
  }

  return (
    <div className="if-container">
      <h3 className="if-category">FOUR VIRTUES</h3>
      <h2 className="if-title">{virtue}</h2>
      <p>
        <i>
          {info[virtue]}
        </i>
      </p>
    </div>
  )
}

export default InfoCard
