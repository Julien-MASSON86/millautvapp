import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import DOMPurify from 'dompurify'

export function Show(){
    const params = useParams()
    const [indexShow, setIndexShow] = useState()

    useEffect(()=>{
        fetch( 'https://api.tvmaze.com/shows/'+params.id+"?embed=cast")
        .then((res) => res.json())
        .then(data => setIndexShow(data))
    },[params.id])
    
    
  
  
    return ( 
        <>
        <article className="mt-5">
        <a href='/'className="btn btn-warning">Retour</a>
        <h1 className="mt-5 text-warning">{indexShow ? <h1>{indexShow.name}</h1> : <p>Loading...</p>}</h1>
        <p className="text-warning">{indexShow?.premiered}</p>
        <div className="row">
        <div className="col-5">
            <img src={indexShow?.image?.original} className="card-img-top border border-warning" alt={indexShow?.name} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(indexShow?.summary) }} className="col-5 border-end border-warning p-5 text-secondary"></div>
        <div className="col-2 d-flex flex-column">
            {indexShow?.genres.map((genre) => 
        <button key={genre} className="btn btn-warning mb-2">
        {genre}
        </button>
         )}
        </div>
        </div>
        <article className="row">
        {indexShow?._embedded.cast.map((actor, index)=>
        <div className="card m-3 border border-warning bg-dark" style={{width:"15rem"}}>
            <img src={actor.person.image?.medium}className="card-img-top" alt={actor.person.name}/>
        <div className="card-body">
            <h5 className="text-warning"key={index}>{actor.person.name}</h5>
            <p className="text-warning"key={index}>"{actor.character.name}"</p>
            <a href="#" className="btn btn-warning">Voir</a>
        </div>
        </div> 
         )}
        </article>       
        </article>
        </>
    )
}