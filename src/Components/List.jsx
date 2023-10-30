export function List({ results }){

    return (
        <>
           <section className='row m-5'>
            {results.map((item)=> 
            <div className="card m-3" style={{width:"18rem"}}>
            <img src={item.show.image?.medium} className="card-img-top" alt={item.show.name}/>
            <div className="card-body">
              <h5 className="card-title">{item.show.name}</h5>
              <div>
              {item.show.genres.map((genre) =>
              <button className="btn btn-dark"> {genre} </button>
              )}
              </div>
              <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
            </div> 
            </div>      
            )}
            </section>
        </>
     
        
    )
}