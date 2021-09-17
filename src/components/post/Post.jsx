import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img 
      className="postImg"
      src="https://rakista-bucket.s3.amazonaws.com/public/user/8c/94/01/f675a0221c9f5fb3c2dd9467ae9f760d.jpeg"
       alt="" 
       />
       <div className="postInfo">
         <div className="postCats">
           <span className="postCat">Music</span>
           <span className="postCat">Life</span>
         </div>
         <span className="postTitle">AMMBK NEW SONG</span>
         <hr />
         <span className="postDate">1 hour ago</span>
       </div>
       <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}