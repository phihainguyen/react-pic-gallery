import React from 'react';

function Image() {
	let id = Math.floor(Math.random() * Math.floor(100));
	let url = `https://i.picsum.photos/id/${id}/500/500.jpg`;
	return (
		<div>
			<img src={url} />
		</div>
	);
}
export default Image;
