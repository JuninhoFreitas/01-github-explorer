interface RepositoryItemProps {
    repository: {
        name: String;
        description: String;
        html_url: String;
    }
}
export function RepositoryItem(props:RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>Forms in React</p>

            <a href=''>
                Acessar repositorio
            </a>
        </li> 
    )
}