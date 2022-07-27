const Dashboard = function Dashboard(){
    return(
    <>
    <div className="card border mb-4 mb-xl-0">
        {/* <!-- notice the additions of utility paddings and display properties on .card-header --> */}
        <div className="card-header bg-trans-gradient py-2 pr-2 d-flex align-items-center flex-wrap">
            {/* <!-- we wrap header title inside a span tag with utility padding --> */}
            <div className="card-title text-white">Modules</div>
            <div className="d-flex position-relative ml-auto" style={{maxWidth: "10rem"}}>
                <i className="fal fa-search position-absolute pos-left fs-lg px-3 py-2 mt-1"></i>
                <input type="text" className="form-control bg-subtlelight pl-6" placeholder="Search" />
            </div>
        </div>
        <div className="card-body">

 <div class="container">
  <div class="row">
    <div class="col">

    <div className="card border mb-0">
        <div className="card-header bg-500 d-flex pr-2 align-items-center flex-wrap">
         <div className="card-title">Checkbox</div>
            <div className="custom-control d-flex custom-switch ml-auto">
                <input id="demo-switchmmk" type="checkbox" className="custom-control-input" checked="unchecked" />
                <label className="custom-control-label fw-500" for="demo-switch"></label>
            </div>
        </div>

        <div className="card-body">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
    </div>
    </div>

    <div class="col">
    <div className="card border mb-0">
        <div className="card-header bg-500 d-flex pr-2 align-items-center flex-wrap">
         <div className="card-title">Checkbox</div>
            <div className="custom-control d-flex custom-switch ml-auto">
                <input id="demo-switmch" type="checkbox" className="custom-control-input" checked="checked" />
                <label className="custom-control-label fw-500" for="demo-switch1"></label>
            </div>
        </div>

        <div className="card-body">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
    </div>
    </div>

    <div class="col">
   <div className="card border mb-0">
        <div className="card-header bg-success-500 d-flex pr-2 align-items-center flex-wrap">
         <div className="card-title">Checkbox</div>
            <div className="custom-control d-flex custom-switch ml-auto">
                <input id="demo-switmkch" type="checkbox" className="custom-control-input" checked="checked" />
                <label className="custom-control-label fw-500" for="demo-switch2"></label>
            </div>
        </div>

        <div className="card-body">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
    </div>
    </div>
        </div>
        </div>
        
        </div>
    </div>
    </>    
    )
}

export default Dashboard;