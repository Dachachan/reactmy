import React from 'react';


const Img = props =>
<center>
	
	<div className="card" >
		<div className="card-body">
			<br></br>
			
		<a href={props.link}>
			<img src={props.url} alt="Unsplash Image here" />
		</a>
		<h2 textaling="left">Photo By</h2>
		<h3 className="card-title"><a href={props.user}>{props.name}</a></h3>
		<p className="card-text">
		{props.description}
		<p>{props.likes} Likes  </p>
			<a href={props.link}> See on Unsplash</a>
		</p>
		</div>
		
		
</div>;
</center>

export default Img;
