/*
* @Author: zoulin
* @Date:   2018-05-11 16:34:49
* @Last Modified by:   zoulin
* @Last Modified time: 2018-05-11 17:10:26
*/
import axios from 'axios'

module.exports = {
	basePath: 'http://localhost:10174',
	post: (url, param)=>{
		console.log(this.basePath + url);
		return axios.post(this.basePath + url, param)
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	},
	form: (formData)=>{

	}
}