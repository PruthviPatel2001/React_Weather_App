{!city ? (
    <p className="error">No Data Found</p>
) : (
    <div className="info">
        <h2 className="location">
            <i className="fas fa-street-view"></i>
             {/* {search}  */}Vodara
  
         </h2>
            <h1 className="temp">{ city.temp} °Cel</h1>
            <h3 className="temp_max">Min :{city.temp_min} °Cel | Max : { city.temp_max} °Cel</h3>
    </div>
)}