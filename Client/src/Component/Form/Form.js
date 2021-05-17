import React,{useState} from 'react'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link, useHistory } from "react-router-dom";

import './form.css'

function Form() {
  let history = useHistory();
  let [address,setAddress] =useState({value:""})
  let [pincode,setPincode] =useState({value:""})
  let [landmark,setLandmark] =useState({value:""})
  let [state,setState] =useState({value:""})
  let [soiltest,setSoiltest] =useState({value:"No"})
  let [information,setInformation] =useState({value:""})
  let [sizeofland,setSizeofland] =useState({value:"meter"})
  let [watersource,setwatersource] =useState({value:"other"})

const onSubmitted = (event) => {
  event.preventDefault();
  console.log(address)
  console.log(pincode)
  console.log(landmark)
  console.log(state)
  console.log(sizeofland)
  console.log(watersource)
  console.log(soiltest)
  console.log(information)
  let data={
  address:address.value,
  landmark:landmark.value,
  pincode:pincode.value,
  state:state.value,
  soiltest:soiltest.value,
  information:information.value,
  sizeofland:sizeofland.value,
  watersource:watersource.value

  }

  axios.post('http://localhost:3001/api/form',data)
          .then(function (response) {
            console.log(response.data);
            console.log(response.data.data);
           NotificationManager.success(' welcome to Home Page');
            console.log("end")
            history.push("/home");
           
          })
          .catch(function (error) {
            console.log(error);
            NotificationManager.error("Please try some time ")
          })


}

    return (
        <div className='container fcon'>
            
            <form class="box" onSubmit={ onSubmitted}/*  action="#" method="post" */>

<h1>Form</h1>

<input type="text" name="" placeholder="Address" onChange={ (e) => {setAddress(e.target.value)}} required />
<input type="text" name="" placeholder="Land mark" onChange={ (e) => {setLandmark(e.target.value)}} required />
<input type="phone" name="" placeholder="Pin Code" onChange={ (e) => {setPincode(e.target.value)}} required />
  
<input type="text" name="" placeholder="State" onChange={ (e) => {setState(e.target.value)}} required />
<input type="text" name="" placeholder="Information Regarding Crop" onChange={ (e) => {setInformation(e.target.value)}} required />
<select name="Agri" id="Agri" onChange={ (e) => {setSoiltest(e.target.value)}} required>
<option >Soil Test eailer</option>
  <option value='No' >No</option>
  <option value='Yes'>Yes</option>
</select>
<select name="Agri" id="Agri" onChange={ (e) => {setSizeofland(e.target.value)}} required>
<option >Size of Land</option>
  <option value="Acra">Acra</option>
  <option value="Bigha">Bigha</option>
  <option value="Kila">Kila</option>
  <option value="yard">yard</option>
  <option value="Meter">Meter</option>
</select>



<select name="Agri" id="Agri" onChange={ (e) => {setwatersource(e.target.value)}} required>
<option >Water Source</option>
  <option value="Tube Well ">Tube Well </option>
  <option value="Canal System">Canal System</option>
  <option value="Rain Water Harvesting">Rain Water Harvesting</option>
  <option value="Other(Specify)">Other(Specify)</option>

</select>


<input type="submit" name="" value="Process" />

</form>
        </div>
    )
}

export default Form
