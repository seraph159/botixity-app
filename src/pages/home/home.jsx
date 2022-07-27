import React from 'react';
import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'
import ListItem from '../../components/list-item/list-item.component'
import Sidebar from '../../components/sidebar/sidebar.component';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component';
import Dashboard from '../../components/dashboard/dashboard.component'

import {usersData} from '../../data/userData'
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

class Home extends React.Component {
    constructor(){
        super();

        this.state = {
            users: usersData,
            dashboardView: true,
            breadcrumbSize: null,
            breadcrumbItems: []
        }
    }

    handleBreadcrumb = (id, e) =>{
        let navName = e.target.innerText;

        let oldProjName = this.state.projectName;
        let projName = oldProjName.replace(/ /g, "");

        if (id === 1){
            this.setState({ 
                dashboardView: true,
                breadcrumbSize: null,
                breadcrumbItems: []
            })
            this.props.history.replace({ pathname: "/app"})

        }
        else {
            this.setState({ 
                breadcrumbItems: [this.state.projectName, navName]
            })
            this.props.history.replace({ pathname: "/app/" + projName + "/" + navName})
        }
    }

    handleAddModules = (e) => {

        let projectName = e.target.attributes.value.textContent; 
        let projName = projectName.replace(/ /g, "");

        this.setState({ 
            dashboardView: false,
            breadcrumbSize: 2,
            breadcrumbItems: [projectName, "Dashboard"],
            projectName: projectName
        })

        this.props.history.replace({ pathname: "/app/" + projName + "/Dashboard"})
    }


    render(){
        return(
            
        <React.Fragment>

        {/* <!-- BEGIN Page Wrapper --> */}
            <div className="page-wrapper">
            <div className="page-inner">
                {/* <!-- BEGIN Left Aside --> */}
                <Sidebar dashboardView={this.state.dashboardView} breadcrumbNav={this.handleBreadcrumb}/>
                {/* <!-- END Left Aside --> */}
                <div className="page-content-wrapper">
                    {/* <!-- BEGIN Page Header --> */}
                    
                    <Header users={this.state.users}/>

                    {/* <!-- END Page Header -->
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize --> */}
                    <main id="js-page-content" role="main" className="page-content">
                        <div className="subheader">
                            {/* <!-- Right content on content header, A nice area to add graphs or buttons --> */}
                        </div>
                        {/* <!-- Your main content goes below here: --> */}
                        {/* <div className="d-flex justify-content-center">
                            <h1><span className="fw-300"><i>No Projects Found</i></span></h1>
                        </div> */}

                        <Breadcrumb breadcrumbSize={this.state.breadcrumbSize} breadcrumbItems={this.state.breadcrumbItems}/>

                        <ListItem dashboardView={this.state.dashboardView} onDashviewChange={this.handleAddModules} users={this.state.users}/>

                        {/* <Dashboard></Dashboard> */}
                        <div className="modal fade" id="addProject" tabIndex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add a new project</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><i className="fal fa-times"></i></span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="simpleinput">Project name</label>
                                            <input type="text" id="projectname" className="form-control" placeholder="Enter project name here" />
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="simpleinput">Discord Bot Token</label>
                                            <input type="text" id="bottoken" className="form-control" placeholder="Enter your Discord Bot Token here" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="lAddModules" tabIndex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add a new project</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><i className="fal fa-times"></i></span>
                                        </button>
                                    </div>
                                        <div className="modal-content">
                                          <div className="containter">
                                              <div className="col-12 col-md-8 order-2 order-md-1 modal-left">long img here</div>
                                              <div className="col-12 col-md-4 order-1 order-md-2 modal-right">this one should stick to the top while scrolling</div>
                                            </div>
                                        </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="upgrade" tabIndex="-1" role="dialog" aria-hidden="true">
                         <div className="modal-dialog modal-lg modal-dialog-centered">
                          <div className="modal-content">
                              
                           <div className="modal-header card-header-title text-center">  
                            <h4 className="modal-title card-element-title w-100 pl-5">Pricing</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i className="fal fa-times"></i></span>
                                </button>
                           </div>   
                            <div className="modal-body container">
                                <div className="row d-flex justify-content-between">

                                    <div className="col-4 rounded text-center" style={{border:"2px solid #cecece"}}>
                                    <h1 className="text-center display-4">Basic</h1>
                                    <h4 className="text-center"><span className="fw-900">$8.99</span> / month</h4>
                                    <button type="button" className="btn btn-outline-primary waves-effect waves-themed m-2">Purchase</button>
                                    <div className="list-group border-2">
                                      <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Upto 2 Projects</div>
                                      <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Custom Status</div>
                                      <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Extra Modules</div>
                                      <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> No Advertisements</div>
                                      <div className="list-group-item border-primary border-bottom-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Superfast Server</div>
                                    </div>
                                    </div>

                                    <div className="col-4 rounded text-center" style={{border:"2px solid #cecece"}}>
                                        <h1 className="text-center display-4">Pro</h1>
                                        <h4 className="text-center"><span className="fw-900">$8.99</span> / month</h4>
                                        <button type="button" className="btn btn-outline-primary waves-effect waves-themed m-2">Purchase</button>
                                        <div className="list-group border-2">
                                          <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Upto 2 Projects</div>
                                          <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Custom Status</div>
                                          <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Extra Modules</div>
                                          <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> No Advertisements</div>
                                          <div className="list-group-item border-primary border-bottom-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Superfast Server</div>
                                        </div>
                                        </div>

                                        <div className="col-4 rounded text-center" style={{border:"2px solid #cecece"}}>
                                        <h1 className="text-center display-4">Ultra</h1>
                                        <h4 className="text-center"><span className="fw-900">$8.99</span> / month</h4>
                                        <button type="button" className="btn btn-outline-primary waves-effect waves-themed m-2">Purchase</button>
                                        <div className="list-group border-2">
                                              <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Upto 2 Projects</div>
                                              <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Custom Status</div>
                                              <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Extra Modules</div>
                                              <div className="list-group-item border-primary border-top-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> No Advertisements</div>
                                              <div className="list-group-item border-primary border-bottom-0 border-right-0 border-left-0 text-center"><i className="fal fa-check"></i> Superfast Server</div>
                                        </div>
                                        </div>

                                </div>
                            </div>

                          </div>
                         </div>
                        </div>

                    </main>
                    {/* <!-- this overlay is activated only when mobile menu is triggered --> */}

                    <div className="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div> 

                    {/* <!-- END Page Content -->

                    <!-- BEGIN Page Footer --> */}
                    
                    {/* <Footer/> */}
                    
                    {/* <!-- END Page Footer -->

                    
                    {/* <!-- END Shortcuts -->
                    <!-- BEGIN Color profile -->
                    <!-- this area is hidden and will not be seen on screens or screen readers -->
                    <!-- we use this only for CSS color refernce for JS stuff --> */}
                    <p id="js-color-profile" className="d-none">
                        <span className="color-primary-50"></span>
                        <span className="color-primary-100"></span>
                        <span className="color-primary-200"></span>
                        <span className="color-primary-300"></span>
                        <span className="color-primary-400"></span>
                        <span className="color-primary-500"></span>
                        <span className="color-primary-600"></span>
                        <span className="color-primary-700"></span>
                        <span className="color-primary-800"></span>
                        <span className="color-primary-900"></span>
                        <span className="color-info-50"></span>
                        <span className="color-info-100"></span>
                        <span className="color-info-200"></span>
                        <span className="color-info-300"></span>
                        <span className="color-info-400"></span>
                        <span className="color-info-500"></span>
                        <span className="color-info-600"></span>
                        <span className="color-info-700"></span>
                        <span className="color-info-800"></span>
                        <span className="color-info-900"></span>
                        <span className="color-danger-50"></span>
                        <span className="color-danger-100"></span>
                        <span className="color-danger-200"></span>
                        <span className="color-danger-300"></span>
                        <span className="color-danger-400"></span>
                        <span className="color-danger-500"></span>
                        <span className="color-danger-600"></span>
                        <span className="color-danger-700"></span>
                        <span className="color-danger-800"></span>
                        <span className="color-danger-900"></span>
                        <span className="color-warning-50"></span>
                        <span className="color-warning-100"></span>
                        <span className="color-warning-200"></span>
                        <span className="color-warning-300"></span>
                        <span className="color-warning-400"></span>
                        <span className="color-warning-500"></span>
                        <span className="color-warning-600"></span>
                        <span className="color-warning-700"></span>
                        <span className="color-warning-800"></span>
                        <span className="color-warning-900"></span>
                        <span className="color-success-50"></span>
                        <span className="color-success-100"></span>
                        <span className="color-success-200"></span>
                        <span className="color-success-300"></span>
                        <span className="color-success-400"></span>
                        <span className="color-success-500"></span>
                        <span className="color-success-600"></span>
                        <span className="color-success-700"></span>
                        <span className="color-success-800"></span>
                        <span className="color-success-900"></span>
                        <span className="color-fusion-50"></span>
                        <span className="color-fusion-100"></span>
                        <span className="color-fusion-200"></span>
                        <span className="color-fusion-300"></span>
                        <span className="color-fusion-400"></span>
                        <span className="color-fusion-500"></span>
                        <span className="color-fusion-600"></span>
                        <span className="color-fusion-700"></span>
                        <span className="color-fusion-800"></span>
                        <span className="color-fusion-900"></span>
                    </p>
                    {/* <!-- END Color profile --> */}
                </div>
            </div>
        </div>
        {/* <!-- END Page Wrapper -->
        <!-- BEGIN Quick Menu -->
        <!-- to add more items, please make sure to change the variable '$menu-items: number;' in your _page-components-shortcut.scss --> */}
        {/* <nav className="shortcut-menu d-none d-sm-block">
            <input type="checkbox" className="menu-open" name="menu-open" id="menu_open" />
            <label htmlFor="menu_open" className="menu-open-button ">
                <span className="app-shortcut-icon d-block"></span>
            </label>
            <a href="#/" className="menu-item btn" data-toggle="tooltip" data-placement="left" title="Scroll Top">
                <i className="fal fa-arrow-up"></i>
            </a>
            <a href="page_login.html" className="menu-item btn" data-toggle="tooltip" data-placement="left" title="Logout">
                <i className="fal fa-sign-out"></i>
            </a>
            <a href="#/" className="menu-item btn" data-action="app-fullscreen" data-toggle="tooltip" data-placement="left" title="Full Screen">
                <i className="fal fa-expand"></i>
            </a>
            <a href="#/" className="menu-item btn" data-action="app-print" data-toggle="tooltip" data-placement="left" title="Print page">
                <i className="fal fa-print"></i>
            </a>
            <a href="#/" className="menu-item btn" data-action="app-voice" data-toggle="tooltip" data-placement="left" title="Voice command">
                <i className="fal fa-microphone"></i>
            </a>
        </nav> */}
        {/* <!-- END Quick Menu -->
        <!-- BEGIN Messenger --> */}
        <div className="modal fade js-modal-messenger modal-backdrop-transparent" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-right">
                <div className="modal-content h-100">
                    <div className="dropdown-header bg-trans-gradient d-flex align-items-center w-100">
                        <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                            <span className="mr-2">
                                <span className="rounded-circle profile-image d-block" style={{backgroundImage:"url('img/demo/avatars/avatar-d.png')", backgroundSize: "cover"}}></span>
                            </span>
                            <div className="info-card-text">
                                <a href="#/" className="fs-lg text-truncate text-truncate-lg text-white" data-toggle="dropdown" aria-expanded="false">
                                    Tracey Chang
                                    <i className="fal fa-angle-down d-inline-block ml-1 text-white fs-md"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/#">Send Email</a>
                                    <a className="dropdown-item" href="/#">Create Appointment</a>
                                    <a className="dropdown-item" href="/#">Block User</a>
                                </div>
                                <span className="text-truncate text-truncate-md opacity-80">IT Director</span>
                            </div>
                        </div>
                        <button type="button" className="close text-white position-absolute pos-top pos-right p-2 m-1 mr-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div className="modal-body p-0 h-100 d-flex">
                        {/* <!-- BEGIN msgr-list --> */}
                        <div className="msgr-list d-flex flex-column bg-faded border-faded border-top-0 border-right-0 border-bottom-0 position-absolute pos-top pos-bottom">
                            <div>
                                <div className="height-4 width-3 h3 m-0 d-flex justify-content-center flex-column color-primary-500 pl-3 mt-2">
                                    <i className="fal fa-search"></i>
                                </div>
                                <input type="text" className="form-control bg-white" id="msgr_listfilter_input" placeholder="Filter contacts" aria-label="FriendSearch" data-listfilter="#js-msgr-listfilter" />
                            </div>
                            <div className="flex-1 h-100 custom-scroll">
                                <div className="w-100">
                                    <ul id="js-msgr-listfilter" className="list-unstyled m-0">
                                        <li>
                                            <a href="#/" className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="tracey chang online">
                                                <div className="d-table-cell align-middle status status-success status-sm ">
                                                    <span className="profile-image-md rounded-circle d-block" style={{backgroundImage:"url('img/demo/avatars/avatar-d.png')", backgroundSize: "cover"}}></span>
                                                </div>
                                                <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div className="text-truncate text-truncate-md">
                                                        Tracey Chang
                                                        <small className="d-block font-italic text-success fs-xs">
                                                            Online
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#/" className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="oliver kopyuv online">
                                                <div className="d-table-cell align-middle status status-success status-sm ">
                                                    <span className="profile-image-md rounded-circle d-block" style={{backgroundImage:"url('img/demo/avatars/avatar-b.png')", backgroundSize: "cover"}}></span>
                                                </div>
                                                <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div className="text-truncate text-truncate-md">
                                                        Oliver Kopyuv
                                                        <small className="d-block font-italic text-success fs-xs">
                                                            Online
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#/" className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="dr john cook phd away">
                                                <div className="d-table-cell align-middle status status-warning status-sm ">
                                                    <span className="profile-image-md rounded-circle d-block" style={{backgroundImage:"url('img/demo/avatars/avatar-e.png')", backgroundSize: "cover"}}></span>
                                                </div>
                                                <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div className="text-truncate text-truncate-md">
                                                        Dr. John Cook PhD
                                                        <small className="d-block font-italic fs-xs">
                                                            Away
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#/" className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney online">
                                                <div className="d-table-cell align-middle status status-success status-sm ">
                                                    <span className="profile-image-md rounded-circle d-block" style={{backgroundImage:"url('img/demo/avatars/avatar-g.png')", backgroundSize: "cover"}}></span>
                                                </div>
                                                <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div className="text-truncate text-truncate-md">
                                                        Ali Amdaney
                                                        <small className="d-block font-italic fs-xs text-success">
                                                            Online
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#/" className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="sarah mcbrook online">
                                                <div className="d-table-cell align-middle status status-success status-sm">
                                                    <span className="profile-image-md rounded-circle d-block" style={{backgroundImage:"url('img/demo/avatars/avatar-h.png')", backgroundSize: "cover"}}></span>
                                                </div>
                                                <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div className="text-truncate text-truncate-md">
                                                        Sarah McBrook
                                                        <small className="d-block font-italic fs-xs text-success">
                                                            Online
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#/" className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney offline">
                                                <div className="d-table-cell align-middle status status-sm">
                                                    <span className="profile-image-md rounded-circle d-block" style={{backgroundImage:"url('img/demo/avatars/avatar-a.png')", backgroundSize: "cover"}}></span>
                                                </div>
                                                <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div className="text-truncate text-truncate-md">
                                                        oliver.kopyuv@gotbootstrap.com
                                                        <small className="d-block font-italic fs-xs">
                                                            Offline
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#/" className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney busy">
                                                <div className="d-table-cell align-middle status status-danger status-sm">
                                                    <span className="profile-image-md rounded-circle d-block" style={{backgroundImage:"url('img/demo/avatars/avatar-j.png')", backgroundSize: "cover"}}></span>
                                                </div>
                                                <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div className="text-truncate text-truncate-md">
                                                        oliver.kopyuv@gotbootstrap.com
                                                        <small className="d-block font-italic fs-xs text-danger">
                                                            Busy
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#/" className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney offline">
                                                <div className="d-table-cell align-middle status status-sm">
                                                    <span className="profile-image-md rounded-circle d-block" style={{backgroundImage:"url('img/demo/avatars/avatar-c.png')", backgroundSize: "cover"}}></span>
                                                </div>
                                                <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div className="text-truncate text-truncate-md">
                                                        oliver.kopyuv@gotbootstrap.com
                                                        <small className="d-block font-italic fs-xs">
                                                            Offline
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#/" className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney inactive">
                                                <div className="d-table-cell align-middle">
                                                    <span className="profile-image-md rounded-circle d-block" style={{backgroundImage:"url('img/demo/avatars/avatar-m.png')", backgroundSize: "cover"}}></span>
                                                </div>
                                                <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div className="text-truncate text-truncate-md">
                                                        +714651347790
                                                        <small className="d-block font-italic fs-xs opacity-50">
                                                            Missed Call
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="filter-message js-filter-message"></div>
                                </div>
                            </div>
                            <div>
                                <a href="/#" className="fs-xl d-flex align-items-center p-3">
                                    <i className="fal fa-cogs"></i>
                                </a>
                            </div>
                        </div>
                        {/* <!-- END msgr-list -->
                        <!-- BEGIN msgr --> */}
                        <div className="msgr d-flex h-100 flex-column bg-white">
                            {/* <!-- BEGIN custom-scroll --> */}
                            <div className="custom-scroll flex-1 h-100">
                                <div id="chat_container" className="w-100 p-4">
                                    {/* <!-- start .chat-segment --> */}
                                    <div className="chat-segment">
                                        <div className="time-stamp text-center mb-2 fw-400">
                                            Jun 19
                                        </div>
                                    </div>
                                    {/* <!--  end .chat-segment -->

                                    <!-- start .chat-segment --> */}
                                    <div className="chat-segment chat-segment-sent">
                                        <div className="chat-message">
                                            <p>
                                                Hey Tracey, did you get my files?
                                            </p>
                                        </div>
                                        <div className="text-right fw-300 text-muted mt-1 fs-xs">
                                            3:00 pm
                                        </div>
                                    </div>
                                    {/* <!--  end .chat-segment -->

                                    <!-- start .chat-segment --> */}
                                    <div className="chat-segment chat-segment-get">
                                        <div className="chat-message">
                                            <p>
                                                Hi
                                            </p>
                                            <p>
                                                Sorry going through a busy time in office. Yes I analyzed the solution.
                                            </p>
                                            <p>
                                                It will require some resource, which I could not manage.
                                            </p>
                                        </div>
                                        <div className="fw-300 text-muted mt-1 fs-xs">
                                            3:24 pm
                                        </div>
                                    </div>
                                    {/* <!--  end .chat-segment -->

                                    <!-- start .chat-segment --> */}
                                    <div className="chat-segment chat-segment-sent chat-start">
                                        <div className="chat-message">
                                            <p>
                                                Okay
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!--  end .chat-segment -->

                                    <!-- start .chat-segment --> */}
                                    <div className="chat-segment chat-segment-sent chat-end">
                                        <div className="chat-message">
                                            <p>
                                                Sending you some dough today, you can allocate the resources to this project.
                                            </p>
                                        </div>
                                        <div className="text-right fw-300 text-muted mt-1 fs-xs">
                                            3:26 pm
                                        </div>
                                    </div>
                                    {/* <!--  end .chat-segment -->

                                    <!-- start .chat-segment --> */}
                                    <div className="chat-segment chat-segment-get chat-start">
                                        <div className="chat-message">
                                            <p>
                                                Perfect. Thanks a lot!
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!--  end .chat-segment -->

                                    <!-- start .chat-segment --> */}
                                    <div className="chat-segment chat-segment-get">
                                        <div className="chat-message">
                                            <p>
                                                I will have them ready by tonight.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!--  end .chat-segment -->

                                    <!-- start .chat-segment --> */}
                                    <div className="chat-segment chat-segment-get chat-end">
                                        <div className="chat-message">
                                            <p>
                                                Cheers
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!--  end .chat-segment -->

                                    <!-- start .chat-segment for timestamp --> */}
                                    <div className="chat-segment">
                                        <div className="time-stamp text-center mb-2 fw-400">
                                            Jun 20
                                        </div>
                                    </div>
                                    {/* <!--  end .chat-segment for timestamp --> */}
                                </div>
                            </div>
                            {/* <!-- END custom-scroll  -->

                            <!-- BEGIN msgr__chatinput --> */}
                            <div className="d-flex flex-column">
                                <div className="border-faded border-right-0 border-bottom-0 border-left-0 flex-1 mr-3 ml-3 position-relative shadow-top">
                                    <div className="pt-3 pb-1 pr-0 pl-0 rounded-0" tabIndex="-1">
                                        <div id="msgr_input" contentEditable="true" data-placeholder="Type your message here..." className="height-10 form-content-editable"></div>
                                    </div>
                                </div>
                                <div className="height-8 px-3 d-flex flex-row align-items-center flex-wrap flex-shrink-0">
                                    <a href="#/" className="btn btn-icon fs-xl width-1 mr-1" data-toggle="tooltip" data-original-title="More options" data-placement="top">
                                        <i className="fal fa-ellipsis-v-alt color-fusion-300"></i>
                                    </a>
                                    <a href="#/" className="btn btn-icon fs-xl mr-1" data-toggle="tooltip" data-original-title="Attach files" data-placement="top">
                                        <i className="fal fa-paperclip color-fusion-300"></i>
                                    </a>
                                    <a href="#/" className="btn btn-icon fs-xl mr-1" data-toggle="tooltip" data-original-title="Insert photo" data-placement="top">
                                        <i className="fal fa-camera color-fusion-300"></i>
                                    </a>
                                    <div className="ml-auto">
                                        <a href="#/" className="btn btn-info">Send</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END msgr__chatinput --> */}
                        </div>
                        {/* <!-- END msgr --> */}
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- END Messenger -->

        <!-- BEGIN Page Settings --> */}
        <div className="modal fade js-modal-settings modal-backdrop-transparent" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-right modal-md">
                <div className="modal-content">
                    <div className="dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center w-100">
                        <h4 className="m-0 text-center color-white">
                            Layout Settings
                            <small className="mb-0 opacity-80">User Interface Settings</small>
                        </h4>
                        <button type="button" className="close text-white position-absolute pos-top pos-right p-2 m-1 mr-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div className="modal-body p-0">
                        <div className="settings-panel">
                            <div className="mt-4 d-table w-100 px-5">
                                <div className="d-table-cell align-middle">
                                    <h5 className="p-0">
                                        App Layout
                                    </h5>
                                </div>
                            </div>
                            <div className="list" id="fh">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="header-function-fixed"> </a>
                                <span className="onoffswitch-title">Fixed Header</span>
                                <span className="onoffswitch-title-desc">header is in a fixed at all times</span>
                            </div>
                            <div className="list" id="nff">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="nav-function-fixed"> </a>
                                <span className="onoffswitch-title">Fixed Navigation</span>
                                <span className="onoffswitch-title-desc">left panel is fixed</span>
                            </div>
                            <div className="list" id="nfm">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="nav-function-minify"> </a>
                                <span className="onoffswitch-title">Minify Navigation</span>
                                <span className="onoffswitch-title-desc">Skew nav to maximize space</span>
                            </div>
                            <div className="list" id="nfh">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="nav-function-hidden"> </a>
                                <span className="onoffswitch-title">Hide Navigation</span>
                                <span className="onoffswitch-title-desc">roll mouse on edge to reveal</span>
                            </div>
                            <div className="list" id="nft">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="nav-function-top"> </a>
                                <span className="onoffswitch-title">Top Navigation</span>
                                <span className="onoffswitch-title-desc">Relocate left pane to top</span>
                            </div>
                            <div className="list" id="fff">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="footer-function-fixed"> </a>
                                <span className="onoffswitch-title">Fixed Footer</span>
                                <span className="onoffswitch-title-desc">page footer is fixed</span>
                            </div>
                            <div className="list" id="mmb">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-main-boxed"> </a>
                                <span className="onoffswitch-title">Boxed Layout</span>
                                <span className="onoffswitch-title-desc">Encapsulates to a container</span>
                            </div>
                            <div className="expanded">
                                <ul className="mb-3 mt-1">
                                    <li>
                                        <div className="bg-fusion-50" data-action="toggle" data-class="mod-bg-1"></div>
                                    </li>
                                    <li>
                                        <div className="bg-warning-200" data-action="toggle" data-class="mod-bg-2"></div>
                                    </li>
                                    <li>
                                        <div className="bg-primary-200" data-action="toggle" data-class="mod-bg-3"></div>
                                    </li>
                                    <li>
                                        <div className="bg-success-300" data-action="toggle" data-class="mod-bg-4"></div>
                                    </li>
                                    <li>
                                        <div className="bg-white border" data-action="toggle" data-class="mod-bg-none"></div>
                                    </li>
                                </ul>
                                <div className="list" id="mbgf">
                                    <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-fixed-bg"> </a>
                                    <span className="onoffswitch-title">Fixed Background</span>
                                </div>
                            </div>
                            <div className="mt-4 d-table w-100 px-5">
                                <div className="d-table-cell align-middle">
                                    <h5 className="p-0">
                                        Mobile Menu
                                    </h5>
                                </div>
                            </div>
                            <div className="list" id="nmp">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="nav-mobile-push"> </a>
                                <span className="onoffswitch-title">Push Content</span>
                                <span className="onoffswitch-title-desc">Content pushed on menu reveal</span>
                            </div>
                            <div className="list" id="nmno">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="nav-mobile-no-overlay"> </a>
                                <span className="onoffswitch-title">No Overlay</span>
                                <span className="onoffswitch-title-desc">Removes mesh on menu reveal</span>
                            </div>
                            <div className="list" id="sldo">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="nav-mobile-slide-out"> </a>
                                <span className="onoffswitch-title">Off-Canvas <sup>(beta)</sup></span>
                                <span className="onoffswitch-title-desc">Content overlaps menu</span>
                            </div>
                            <div className="mt-4 d-table w-100 px-5">
                                <div className="d-table-cell align-middle">
                                    <h5 className="p-0">
                                        Accessibility
                                    </h5>
                                </div>
                            </div>
                            <div className="list" id="mbf">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-bigger-font"> </a>
                                <span className="onoffswitch-title">Bigger Content Font</span>
                                <span className="onoffswitch-title-desc">content fonts are bigger for readability</span>
                            </div>
                            <div className="list" id="mhc">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-high-contrast"> </a>
                                <span className="onoffswitch-title">High Contrast Text (WCAG 2 AA)</span>
                                <span className="onoffswitch-title-desc">4.5:1 text contrast ratio</span>
                            </div>
                            <div className="list" id="mcb">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-color-blind"> </a>
                                <span className="onoffswitch-title">Daltonism <sup>(beta)</sup> </span>
                                <span className="onoffswitch-title-desc">color vision deficiency</span>
                            </div>
                            <div className="list" id="mpc">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-pace-custom"> </a>
                                <span className="onoffswitch-title">Preloader Inside</span>
                                <span className="onoffswitch-title-desc">preloader will be inside content</span>
                            </div>
                            <div className="list" id="mpi">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-panel-icon"> </a>
                                <span className="onoffswitch-title">SmartPanel Icons (not Panels)</span>
                                <span className="onoffswitch-title-desc">smartpanel buttons will appear as icons</span>
                            </div>
                            <div className="mt-4 d-table w-100 px-5">
                                <div className="d-table-cell align-middle">
                                    <h5 className="p-0">
                                        Global Modifications
                                    </h5>
                                </div>
                            </div>
                            <div className="list" id="mcbg">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-clean-page-bg"> </a>
                                <span className="onoffswitch-title">Clean Page Background</span>
                                <span className="onoffswitch-title-desc">adds more whitespace</span>
                            </div>
                            <div className="list" id="mhni">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-hide-nav-icons"> </a>
                                <span className="onoffswitch-title">Hide Navigation Icons</span>
                                <span className="onoffswitch-title-desc">invisible navigation icons</span>
                            </div>
                            <div className="list" id="dan">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-disable-animation"> </a>
                                <span className="onoffswitch-title">Disable CSS Animation</span>
                                <span className="onoffswitch-title-desc">Disables CSS based animations</span>
                            </div>
                            <div className="list" id="mhic">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-hide-info-card"> </a>
                                <span className="onoffswitch-title">Hide Info Card</span>
                                <span className="onoffswitch-title-desc">Hides info card from left panel</span>
                            </div>
                            <div className="list" id="mlph">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-lean-subheader"> </a>
                                <span className="onoffswitch-title">Lean Subheader</span>
                                <span className="onoffswitch-title-desc">distinguished page header</span>
                            </div>
                            <div className="list" id="mnl">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-nav-link"> </a>
                                <span className="onoffswitch-title">Hierarchical Navigation</span>
                                <span className="onoffswitch-title-desc">Clear breakdown of nav links</span>
                            </div>
                            <div className="list" id="mdn">
                                <a href="#/" onclick="return false;" className="btn btn-switch" data-action="toggle" data-class="mod-nav-dark"> </a>
                                <span className="onoffswitch-title">Dark Navigation</span>
                                <span className="onoffswitch-title-desc">Navigation background is darkend</span>
                            </div>
                            <hr className="mb-0 mt-4" />
                            <div className="mt-4 d-table w-100 pl-5 pr-3">
                                <div className="d-table-cell align-middle">
                                    <h5 className="p-0">
                                        Global Font Size
                                    </h5>
                                </div>
                            </div>
                            <div className="list mt-1">
                                <div className="btn-group btn-group-sm btn-group-toggle my-2" data-toggle="buttons">
                                    <label className="btn btn-default btn-sm" data-action="toggle-swap" data-class="root-text-sm" data-target="html">
                                        <input type="radio" name="changeFrontSize" /> SM
                                    </label>
                                    <label className="btn btn-default btn-sm" data-action="toggle-swap" data-class="root-text" data-target="html">
                                        <input type="radio" name="changeFrontSize" defaultChecked="" /> MD
                                    </label>
                                    <label className="btn btn-default btn-sm" data-action="toggle-swap" data-class="root-text-lg" data-target="html">
                                        <input type="radio" name="changeFrontSize" /> LG
                                    </label>
                                    <label className="btn btn-default btn-sm" data-action="toggle-swap" data-class="root-text-xl" data-target="html">
                                        <input type="radio" name="changeFrontSize" /> XL
                                    </label>
                                </div>
                                <span className="onoffswitch-title-desc d-block mb-0">Change <strong>root</strong> font size to effect rem
                                    values (resets on page refresh)</span>
                            </div>
                            <hr className="mb-0 mt-4" />
                            <div className="mt-4 d-table w-100 pl-5 pr-3">
                                <div className="d-table-cell align-middle">
                                    <h5 className="p-0 pr-2 d-flex">
                                        Theme colors
                                        <a href="#/" className="ml-auto fw-400 fs-xs" data-toggle="popover" data-trigger="focus" data-placement="top" title="" data-html="true" data-content="The settings below uses <code>localStorage</code> to load the external <strong>CSS</strong> file as an overlap to the base css. Due to network latency and <strong>CPU utilization</strong>, you may experience a brief flickering effect on page load which may show the intial applied theme for a split second. Setting the prefered style/theme in the header will prevent this from happening." data-original-title="<span class='text-primary'><i class='fal fa-exclamation-triangle mr-1'></i> Heads up!</span>" data-template="<div class=&quot;popover bg-white border-white&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><h3 class=&quot;popover-header bg-transparent&quot;></h3><div class=&quot;popover-body fs-xs&quot;></div></div>"><i className="fal fa-info-circle mr-1"></i> more info</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="expanded theme-colors pl-5 pr-3">
                                <ul className="m-0">
                                    <li>
                                        <a href="#/" id="myapp-0" data-action="theme-update" data-themesave data-theme="" data-toggle="tooltip" data-placement="top" title="Wisteria (base css)" data-original-title="Wisteria (base css)"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-1" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-1.css" data-toggle="tooltip" data-placement="top" title="Tapestry" data-original-title="Tapestry"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-2" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-2.css" data-toggle="tooltip" data-placement="top" title="Atlantis" data-original-title="Atlantis"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-3" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-3.css" data-toggle="tooltip" data-placement="top" title="Indigo" data-original-title="Indigo"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-4" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-4.css" data-toggle="tooltip" data-placement="top" title="Dodger Blue" data-original-title="Dodger Blue"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-5" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-5.css" data-toggle="tooltip" data-placement="top" title="Tradewind" data-original-title="Tradewind"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-6" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-6.css" data-toggle="tooltip" data-placement="top" title="Cranberry" data-original-title="Cranberry"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-7" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-7.css" data-toggle="tooltip" data-placement="top" title="Oslo Gray" data-original-title="Oslo Gray"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-8" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-8.css" data-toggle="tooltip" data-placement="top" title="Chetwode Blue" data-original-title="Chetwode Blue"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-9" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-9.css" data-toggle="tooltip" data-placement="top" title="Apricot" data-original-title="Apricot"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-10" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-10.css" data-toggle="tooltip" data-placement="top" title="Blue Smoke" data-original-title="Blue Smoke"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-11" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-11.css" data-toggle="tooltip" data-placement="top" title="Green Smoke" data-original-title="Green Smoke"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-12" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-12.css" data-toggle="tooltip" data-placement="top" title="Wild Blue Yonder" data-original-title="Wild Blue Yonder"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-13" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-13.css" data-toggle="tooltip" data-placement="top" title="Emerald" data-original-title="Emerald"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-14" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-14.css" data-toggle="tooltip" data-placement="top" title="Supernova" data-original-title="Supernova"> </a>
                                    </li>
                                    <li>
                                        <a href="#/" id="myapp-15" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-15.css" data-toggle="tooltip" data-placement="top" title="Hoki" data-original-title="Hoki"> </a>
                                    </li>
                                </ul>
                            </div>
                            <hr className="mb-0 mt-4" />
                            <div className="mt-4 d-table w-100 pl-5 pr-3">
                                <div className="d-table-cell align-middle">
                                    <h5 className="p-0 pr-2 d-flex">
                                        Theme Modes (beta)
                                        <a href="#/" className="ml-auto fw-400 fs-xs" data-toggle="popover" data-trigger="focus" data-placement="top" title="" data-html="true" data-content="This is a brand new technique we are introducing which uses CSS variables to infiltrate color options. While this has been working nicely on modern browsers without much issues, some users <strong>may still face issues on Internet Explorer </strong>. Until these issues are resolved or Internet Explorer improves, this feature will remain in Beta" data-original-title="<span class='text-primary'><i class='fal fa-question-circle mr-1'></i> Why beta?</span>" data-template="<div class=&quot;popover bg-white border-white&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><h3 class=&quot;popover-header bg-transparent&quot;></h3><div class=&quot;popover-body fs-xs&quot;></div></div>"><i className="fal fa-question-circle mr-1"></i> why beta?</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="pl-5 pr-3 py-3">
                                <div className="ie-only alert alert-warning d-none">
                                    <h6>Internet Explorer Issue</h6>
                                    This particular component may not work as expected in Internet Explorer. Please use with caution.
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-4 pr-2 text-center">
                                        <div id="skin-default" data-action="toggle-replace" data-replaceclass="mod-skin-light mod-skin-dark" data-class="" data-toggle="tooltip" data-placement="top" title="" className="d-flex bg-white border border-primary rounded overflow-hidden text-success js-waves-on" data-original-title="Default Mode" style={{height: "80px"}}>
                                            <div className="bg-primary-600 bg-primary-gradient px-2 pt-0 border-right border-primary"></div>
                                            <div className="d-flex flex-column flex-1">
                                                <div className="bg-white border-bottom border-primary py-1"></div>
                                                <div className="bg-faded flex-1 pt-3 pb-3 px-2">
                                                    <div className="py-3" style={{background:"url('img/demo/s-1.png') top left no-repeat", backgroundSize: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        Default
                                    </div>
                                    <div className="col-4 px-1 text-center">
                                        <div id="skin-light" data-action="toggle-replace" data-replaceclass="mod-skin-dark" data-class="mod-skin-light" data-toggle="tooltip" data-placement="top" title="" className="d-flex bg-white border border-secondary rounded overflow-hidden text-success js-waves-on" data-original-title="Light Mode" style={{height: "80px"}}>
                                            <div className="bg-white px-2 pt-0 border-right border-"></div>
                                            <div className="d-flex flex-column flex-1">
                                                <div className="bg-white border-bottom border- py-1"></div>
                                                <div className="bg-white flex-1 pt-3 pb-3 px-2">
                                                    <div className="py-3" style={{background:"url('img/demo/s-1.png') top left no-repeat", backgroundSize: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        Light
                                    </div>
                                    <div className="col-4 pl-2 text-center">
                                        <div id="skin-dark" data-action="toggle-replace" data-replaceclass="mod-skin-light" data-class="mod-skin-dark" data-toggle="tooltip" data-placement="top" title="" className="d-flex bg-white border border-dark rounded overflow-hidden text-success js-waves-on" data-original-title="Dark Mode" style={{height: "80px"}}>
                                            <div className="bg-fusion-500 px-2 pt-0 border-right"></div>
                                            <div className="d-flex flex-column flex-1">
                                                <div className="bg-fusion-600 border-bottom py-1"></div>
                                                <div className="bg-fusion-300 flex-1 pt-3 pb-3 px-2">
                                                    <div className="py-3 opacity-30" style={{background:"url('img/demo/s-1.png') top left no-repeat", backgroundSize: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        Dark
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-0 mt-4" />
                            <div className="pl-5 pr-3 py-3 bg-faded">
                                <div className="row no-gutters">
                                    <div className="col-6 pr-1">
                                        <a href="#/" className="btn btn-outline-danger fw-500 btn-block" data-action="app-reset">Reset Settings</a>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <a href="#/" className="btn btn-danger fw-500 btn-block" data-action="factory-reset">Factory Reset</a>
                                    </div>
                                </div>
                            </div>
                        </div> <span id="saving"></span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- END Page Settings --> */}

        </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state
})

export default withRouter(connect(mapStateToProps)(Home));