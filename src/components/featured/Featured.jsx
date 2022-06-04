import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
   <div className="featured">
       {type && ( <div className="category">
           <span>{ type === "movie"  ? "Movies" : "Series"}</span>
           <select name="genre" id="genre">
               <option>Genre</option>
               <option value="adventure">Adventure</option>
               <option value="comedy">comedy</option>
               <option value="crime">crime</option>
               <option value="fantasy">fantasy</option>
               <option value="documentary">documentary</option>
               <option value="historical">historical</option>
               <option value="horror">horror</option>
               <option value="romance">romance</option>
               <option value="sci-fi">sci-fi</option>
               <option value="drama  ">drama</option>
           </select>
       </div>
        )}
       <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" alt="" />
       <div className="info">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIy3w_CPmd5XzyarHXU2Id13OqWZAVJAeab5n4HvqLeyhYjevKC62Rb2-SDTvkLARnyg&usqp=CAU" alt="" />

           <span className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu</span>
           <div className="buttons">
               <button className="play">
                   <PlayArrow/>
                   <span>Play</span>
               </button>
               <button className="more">
               <InfoOutlined/>
               <span>Info</span>
               </button>
           </div>
       </div>
   </div>
  )
}
