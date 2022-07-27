import React from 'react';

class Sidebar extends React.Component {

    constructor(){
        super()

        this.state = {
            mainLinks:[
                {
                    id:2,
                    navName: "Dashboard",
                    iconClass: "fal fa-tasks"
                }
            ],
            moduleLinks: [
                {
                    id:3,
                    navName: "Announcement",
                    iconClass: "fal fa-bullhorn"
                },
                {
                    id:4,
                    navName: "Alerts",
                    iconClass: "fal fa-bell"
                },
                {
                    id:5,
                    navName: "Games",
                    iconClass: "fal fa-gamepad-alt"
                },
                {
                    id:6,
                    navName: "Moderation",
                    iconClass: "fal fa-shield-alt"
                },
                {
                    id:7,
                    navName: "Music",
                    iconClass: "fal fa-music"
                },
                {
                    id:8,
                    navName: "Trivia",
                    iconClass: "fal fa-atlas"
                },
                {
                    id:9,
                    navName: "Weather",
                    iconClass: "fal fa-cloud-sun-rain"
                }
            ],
            activeLink: 2,
        }
    }

    handleClick = (id, e) => {
        this.props.breadcrumbNav(id, e)

        if(id === 1)
        this.setState({ activeLink: 2});
        else
        this.setState({ activeLink: id });
    }

    render() {


    const {activeLink, mainLinks, moduleLinks} = this.state;
    console.log(activeLink);

    if(!this.props.dashboardView){
    return(
        <>
        <aside class="page-sidebar">
            <div class="page-logo">
                <a href="/#" class="page-logo-link press-scale-down d-flex align-items-center position-relative">
                    <img src="/img/logo.png" alt="Botixity" aria-roledescription="logo" />
                    <span class="page-logo-text mr-1">Botixity</span>
                    <span class="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
                </a>
            </div>
            {/* <!-- BEGIN PRIMARY NAVIGATION --> */}
            <nav id="js-primary-nav" class="primary-nav" role="navigation">
                {/* <!-- 
                TIP: The menu items are not auto translated. You must have a residing lang file associated with the menu saved inside dist/media/data with reference to each 'data-i18n' attribute.
                --> */}
                <ul id="js-nav-menu" class="nav-menu">

                <li key="1" onClick={(e) => this.handleClick(1,e)} >
                        <a href="#/" title="Category" data-filter-tags="category">
                            <i class="fal fa-folder-plus"></i>
                            <span class="nav-link-text" data-i18n="nav.category">My Projects</span>
                        </a>
                </li>

                {mainLinks.map(link=>(   
                <li key={link.id} onClick={(e) => this.handleClick(link.id,e)}  className={(link.id === activeLink ? " active" : "")}>
                        <a href="#/" title="Category" data-filter-tags="category">
                            <i class={link.iconClass}></i>
                            <span class="nav-link-text" data-i18n="nav.category">{link.navName}</span>
                        </a>
                </li>))}

                <li class="nav-title">Modules</li>

                {moduleLinks.map(link=>(
                    <li key={link.id} onClick={(e) => this.handleClick(link.id,e)} className={(link.id === activeLink ? " active" : "")}>
                    <a href="#/" title="Category" data-filter-tags="category">
                        <i class={link.iconClass}></i>
                        <span class="nav-link-text" data-i18n="nav.category">{link.navName}</span>
                    </a>
                    </li>
                ))}
                   
                </ul>
            </nav>
        </aside>
        </>
    )} else {
        return(
        <>
        <aside className="page-sidebar">
                    <div className="page-logo">
                        <a href="#/" className="page-logo-link press-scale-down d-flex align-items-center position-relative">
                            <img src="/img/logo.png" alt="Botixity" aria-roledescription="logo" />
                            <span className="page-logo-text mr-1">Botixity</span>
                            <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
                        </a>
                    </div>
                    {/* <!-- BEGIN PRIMARY NAVIGATION --> */}
                    <nav id="js-primary-nav" className="primary-nav" role="navigation">
                        {/* <!-- 
						TIP: The menu items are not auto translated. You must have a residing lang file associated with the menu saved inside dist/media/data with reference to each 'data-i18n' attribute.
						--> */}
                        <ul id="js-nav-menu" className="nav-menu">
                            <div className="d-flex align-items-center mr-2 ml-2">
                                <button type="button" className="btn btn-primary btn-block waves-effect waves-themed position-relative" data-toggle="modal" data-target="#addProject"> <i className="fal fa-plus-square d-inline-block mr-1"></i> New Project</button>
                            </div>
                        </ul>
                    </nav>
                    {/* <!-- END PRIMARY NAVIGATION -->
                    <!-- NAV FOOTER -->
                    <!-- END NAV FOOTER --> */}
                </aside>
        </>
        )
    }
  }
}


  export default Sidebar;