import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {API_KEY,imageUrl } from '../../Constants/Constants'


function RowPost(props) {
    const [movies,setMovies] = useState([]);
    const [urlId,setUrlId] = useState('');
    useEffect(() => {
     axios.get(props.url).then((response)=>{
        console.log(response.data);
        setMovies(response.data.results);
     }).catch(err=>{
        console.log(err);
     })
    }, [props.url])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
    const handleMovies =(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length !== 0 ){
                console.log(response.data.results);
                setUrlId(response.data.results[0]);
            }else{
                console.log("array is empty")
            }
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((movie,index)=>
                <img onClick={()=>handleMovies(movie.id)} key={index} className={props.isSmall ?'smallPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
            )}
            
        </div>
     {  urlId && <Youtube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default RowPost