function Post({ post }) {
  return (
    <article className="pt-container">
      <h1 className="pt-title">{post["title"].toUpperCase()}</h1 >
      <hr className="pt-line" />
      <p className="pt-text">{post["content"]["introduction"]}</p>
      {
        post["content"]["body"].map((element, index) => {
          return (
            <div key={index}>
              <h3 className="pt-subtitle">{element["title"].toUpperCase()}</h3>
              {
                element["paragraphs"].map((paragraph, index) => {
                  return(
                    <p key={index} className="pt-text">{paragraph}</p>
                  )
                })
              }
              {
                element["subcontent"].map((subelement, index) => {
                  return (
                    <div key={index}>
                      <h3 className="pt-subtitle">{subelement["title"].toUpperCase()}</h3>
                      {
                        subelement["paragraphs"].map((subparagraph, index) => {
                          return(
                            <p key={index} className="pt-text">{subparagraph}</p>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
      <p className="pt-text">{post["conclusion"]}</p>
    </article>
  )
}

export default Post
