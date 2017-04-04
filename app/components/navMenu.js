import React from 'react';
import ReactDOM from 'react-dom';

const NavMenu = ({configData}) => (
  	<div>
    	<h1>Menu Bar</h1>
		<ul>
		    {
				(() => {
			    	if(configData.photoData) { 
						console.log(configData);
						return configData.photoData.map((photo, index) => (
							<li key={index}>
								{photo.imgCat}
								<img src={'app/'+ photo.catPic}/>
							</li>
						))    		
			    	}	        
			  	})()
		    }
    	</ul>
	</div>
);

export default NavMenu;
