import React from 'react';
import handleViewport from 'react-in-viewport';

import Gallery from './Images/Images';

const Block = (props: { inViewport: boolean }) => {
	const { inViewport, forwardedRef } = props;
	const color = inViewport ? '#217ac0' : '#ff9800';
	const text = inViewport ? 'In viewport' : 'Not in viewport';
	return (
		<div className="viewport-block" ref={forwardedRef}>
			<h3>{text}</h3>
			<div style={{ width: '400px', height: '300px', background: color }} />
		</div>
	);
};

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

function App(props) {
	let ImgNum = 10;

	return (
		<div className="App">
			<div style={{ height: '100vh' }}>
				<Gallery />
			</div>
			<ViewportBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave1')} />
			<div style={{ height: '100vh' }}>
				<Gallery />
			</div>
			<ViewportBlock
				onEnterViewport={() => console.log('enter2')}
				onLeaveViewport={() => console.log('leave2')}
			/>
			<div style={{ height: '100vh' }}>
				<Gallery />
			</div>
			<ViewportBlock
				onEnterViewport={() => console.log('enter3')}
				onLeaveViewport={() => console.log('leave3')}
			/>
		</div>
	);
}
export default App;
