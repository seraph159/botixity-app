import { Link } from 'react-router-dom'

const Breadcrumb = function Breadcrumb(props){
    if(props.breadcrumbSize === 2){
    return(
        <ol className="breadcrumb bg-transparent pl-0 pr-0">
        <li className="breadcrumb-item">
            <a href="app">(My Projects)</a>
        </li>
        <li className="breadcrumb-item"><a href="/app">{props.breadcrumbItems[0]}</a></li>
        <li className="breadcrumb-item active">{props.breadcrumbItems[1]}</li>
        </ol>
    )
} else {
        return(
            <ol className="breadcrumb bg-transparent pl-0 pr-0">
            <li className="breadcrumb-item">
                <a href="app">(My Projects)</a>
            </li>
            </ol>
        )
    }
}

export default Breadcrumb;