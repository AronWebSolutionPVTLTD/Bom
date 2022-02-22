import React from "react";

export default function TextCard(props){
	return(
		<>
			<div>
				<h2 className="text-38 font-bold font-sansation py-5">{props.heading}</h2>
				<img clasName="w-full" src={props.imageName} />
				<p className="text-16 py-5">{props.description}</p>
			</div>
		</>
	)

	
}