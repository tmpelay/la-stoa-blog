function Post({ post }) {
  console.log(post)
  return (
    <article className="pt-container">
      <h1 className="la-title" >{post["title"]}</h1 >
      <p>{post["content"]["introduction"]}</p>
      {
        post["content"]["subtitles"].map((subtitle, index) => {
          console.log(subtitle)
          return (
            <div key={index}>
              <h3 className="la-title">{subtitle}</h3>
              <p>{post["content"]["paragraphs"][index]}</p>
            </div>
          )
        })
      }
    </article>
  )
}

export default Post
