import React from 'react'

const MovieCard = (props) => {
   let {mId,mName,mActor,mActress,mImg,mRating,mDesc} = props
   
  return (
    <>
      {
       <>
        <div className="container">
            <img src={mImg} alt="" />
            <div className="title">{mId} . {mName}</div>
            <table border={1} rules='all' width={400}>
               
                 <tr>
                    <th>Actor  </th>
                    <td> { mActor}</td>
                </tr>
                <tr>
                    <th>Actress  </th>
                     <td>{ mActress}</td>
                </tr>
                <tr>
                    <th>Rating  </th>
                    <td>{mRating}</td>
                </tr>
                <tr>
                    <th>Description  </th>
                    <td>{mDesc}</td>
                </tr>
            </table>
            <button>See more...</button>
        </div>
       </>
      }
    </>
  )
}

export default MovieCard
