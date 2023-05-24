import React , {useEffect, useState} from 'react'

const Main = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function get(){
            // const getData = await fetch("https://hub.dummyapis.com/vj/zFLW4TQ");
           // const getData = await fetch("https://hub.dummyapis.com/vj/BUlH2zK");
           // const getData = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-03-23&sortBy=publishedAt&apiKey=b663f2c13d4a48afa83ab6bd54b906d6");
            const getData = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b663f2c13d4a48afa83ab6bd54b906d6");
           // const getData = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1");
            const res = await getData.json();
            setData(res.articles);
            console.log(res)
        }
        get();
    },[])
            return (
                <>
                <div >
                <h1 className="text-center appcls1 text-primary mt-4">Latest News Headlines</h1>
                <div className="mx-auto gap-3 row row-cols-5 ms-2 mt-4">
                {data.map((e,i)=>{
                    return(
                    <div className="card shadow-lg appcls  border-primary p-3 " style={{width: "17rem"}}>
                        <img src={e.urlToImage} class="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title ">{e.title}</h5>
                        <p className="card-text opacity-75">{e.description}</p>
                        <a href={e.url} className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
                
                )})}
                </div>
                </div>
                </>
              )
        }
 

    

export default Main