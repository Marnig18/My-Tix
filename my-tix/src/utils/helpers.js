import axios from 'axios';


const helper = {
  // Returns a promise object we can .then() off inside our Parent component
  getEvents: function() {
    return axios.get("/api/Events");
  },
  
  editEvent: function(formEditName, formEditStartDate, formEditEndDate, formEditPicture){
  	 axios({
  	 	method: "post",
  	 	url: "/api/Events/:id",
  	 	data: {
  	 		Name: formEditName,
  	 		StartDate: formEditStartDate,
  	 		EndDate: formEditEndDate,
  	 		picture: formEditPicture
  	 	}
  	 })
  }
}
  export default helper;