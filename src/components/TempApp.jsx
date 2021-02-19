import React,{useEffect, useState} from 'react'

const TempApp = () => {

    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("");

   useEffect(() => {
       const fetchApi = async () => {
           const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=19ab4e6cebbc2b2d7ac576da57bd4562`;
           const response = await fetch(url);
        //    console.log(response);
           const resJson = await response.json();
        //    console.log(resJson);
           setcity(resJson);
       }
       fetchApi();

       
   },[search])

    const inputEvent = (event) => {
        const data = event.target.value;
        setsearch(data);
    }
    return (
        <>
        <div className="center box">
            <div className="inputdata">
                    <input
                        className="center"
                    type="search"
                    className="inputField"
                    placeholder="Search City.."
                    name=""
                    value={search}
                    onChange={inputEvent}
                    />
            </div>
            
            {!city ? (
                <p className="error">No Data Found!!</p>
              ) : (
                    <div className="info">
                      <h2 className="location">
                        <i className="fas fa-street-view"></i>
                        {city.name} 
                      </h2>
                      <h1 className="temp">{ city.main.temp} °Cel</h1>
                     <h3 className="temp_max">Min :{city.main.temp_min} °Cel | Max : { city.main.temp_max} °Cel</h3>
                   </div>
)}
            
            
        </div>
            
       </>
    )
}

export default TempApp;
