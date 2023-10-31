import { Link } from "react-router-dom"


export function List({ results }){

    return (
        <>
           <section className='row m-5'>
            {results.map((item)=> 
            <div className="card m-3 border border-warning bg-dark" style={{width:"18rem"}}>
            <img src={item.show.image?.medium} className="card-img-top" alt={item.show.name}/>
            <div className="card-body text-warning">
              <h3 className="card-title">{item.show.name}</h3>
              <div className="d-flex justify-content-evenly">
              {item.show.genres.map((genre) =>
              <button className="btn btn-dark text-warning"> {genre} </button>
              )}
              </div>
              <Link to={'show/'+item.show.id} class="btn btn-warning mt-3">Voir le détail</Link>
            </div> 
            </div>      
            )}
            </section>
        </>
     
        
    )
}