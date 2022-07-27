import React from 'react';



class ListItem extends React.Component {



    handleEdit(){

    }

    handleDelete(){

    }


    render() {

        const userProjectList = this.props.users.projectList;
        
        if (this.props.dashboardView)
        return(
            <>
    {userProjectList.map(item => (
        <div key={item.id}>
        <ul className="list-group">
        <a href="#/" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    
            <div className="d-flex justify-content-start align-items-center">
                <span className="fa-2x"> <i className="fal fa-star"></i></span>
                <h5 className="ml-3" style={{marginBottom: "0px"}}> {item.name}</h5>
            </div>
                         
        <div className="d-flex justify-content-end align-items-center">
        <button type="button"  value={item.name} onClick={(e) => this.props.onDashviewChange(e)} className="btn btn-primary waves-effect waves-themed position-relative mr-2 d-none d-sm-block">Add Modules</button>
        <div className="dropdown">   
            <button type="button" className="btn btn-outline-primary border-0 p-2 dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="svg-container h-100">
            <svg className="h-100 m-auto d-block" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
            </svg>
            </div>
            </button>
            <div className="dropdown-menu dropdown-menu-right p-2" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item rounded p-1 mb-1 d-block d-sm-none" value={item.name} onClick={(e) => this.props.onDashviewChange(e)} href="/app#">Add Modules</a>
            <a className="dropdown-item rounded p-1 mb-1" onClick={this.handleEdit} href="/#">Edit</a>
            <a className="dropdown-item bg-danger text-white rounded p-1" onClick={this.handleDelete} href="/#">Delete</a>
            </div>
        </div>
        </div>
            
    </a>
    </ul>
    </div>
            ))}
            </>
        )

        return(<></>)
    }
}

export default ListItem;