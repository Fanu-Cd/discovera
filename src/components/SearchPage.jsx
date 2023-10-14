import { Input, Spin } from 'antd';
import { useState } from 'react';
const {Search}=Input

const SearchPage=()=>{
    const [input,setInput]=useState({keyword:""})
    const [searchResult,setSearchResult]=useState([])
    const [status,setStatus]=useState({searching:false,errorSearching:false,noInput:false,noResult:false})

    const searchQuery=()=>{
        setStatus({...status,noInput:false})
        if(input.keyword===""){
          setStatus({...status,noInput:true})
        }else{
            setStatus({searching:true})
            const q={keyword:input.keyword}
            fetch(`http://localhost:3001/search-query/?search_query=${JSON.stringify(q)}`) //Node Server Running On Port 3001
            .then(res=>res.json())
            .then((res)=>{
                if(res.error){
                    setStatus({searching:false,errorSearching:true})
                    console.log("Error",res.error)
                }else{
                    setSearchResult(res.res.data.items)
                    setStatus({searching:false})
                    console.log("Search Result : ",res.res.data.items) //You Can Console The Full Response By Using console.log("Full Response",res.res)
                }
            })
            .catch(err=>{
                setStatus({searching:false,errorSearching:true})
                console.log("Error",err)
            })
        }
    }
    
    return(<>
        <div className="mx-auto" style={{width:"80%"}}>
             <Search  required value={input.keyword} 
               onSearch={()=>{searchQuery()}} onChange={(e)=>{setInput({...input,keyword:e.target.value})}} 
               placeholder="Search" enterButton style={{height:"2.5rem"}} />
             <small className='text-danger'>{status.noInput&&"Please Enter Keyword To Search"}</small>
             {status.searching?
               <Spin style={{width:"5rem"}} className='d-block mx-auto' />:(
                status.errorSearching?
                <div className='w-100 d-flex justify-content-center align-items-center p-3'>
                  <small className='text-danger text-center'>Error Searching!</small>
                </div>:(
                 status.noResult?
                 <small>No Results Found For <b>{input.keyword}</b></small>:(
                <>
                  <ul className='list-unstyled mt-2'>
                  {searchResult.map((result) => ( 
                    <li key={result.cacheId}>
                      <a href={result.link} target='blank'>{result.title}</a>
                    </li>
                  ))}
                  {
                  //The Response has many fields in addition to 'link' and 'title' , so you can use them and render here.
                  }
                  </ul>
                </>
                )))
             }
        </div>
        </>
    )
}

export default SearchPage