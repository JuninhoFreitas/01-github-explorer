import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'


//

const repository = {
    full_name:'unform',
    description: 'Forms in React',
    link:'https://github.com/unform/unform'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])
    
    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data=>setRepositories(data))
    },[repositories])

    return (
        <section className="repository-list" >
            <h1>Lista de repositórios</h1>
            <ul>
               {
                   repositories.map(data =>{
                       return(
                           <RepositoryItem key={data.id} nome={data.full_name}/>
                       )
                   })
               }
            </ul>

        </section>
    )
}