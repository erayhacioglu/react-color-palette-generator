import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const App = () => {
	const [colors, setColors] = useState([]);

	useEffect(() => {
		generatePalette();
	}, []);

	const generateColor = () => {
		let str = 'abcdef0123456789';
		let color = ' #';
		for (let i = 0; i <= 5; i++) {
			color += str[Math.floor(Math.random() * str.length)];
		}
		return color;
	};

	const generatePalette = () => {
		let color = '';
		for (let i = 1; i <= 5; i++) {
			color += generateColor();
		}
		setColors(color.split(' '));
	};

	return (
		<div className='wrapper'>
			<h1 className='title'>Color Palette Generator</h1>
			<div className='cards'>
				{colors?.map(
					(color, key) =>
						color && (
							<div
								className='card'
								key={key}
								onClick={() => {
									navigator.clipboard.writeText(color);
									toast.success(`Color ${color} copied to your clipboard`);
								}}
							>
								<div className='color' style={{ '--card-color': color }}></div>
								<h2 className='code'>{color}</h2>
							</div>
						)
				)}
			</div>
			<button className='generate-btn' onClick={generatePalette}>
				Generate Palette
			</button>
		</div>
	);
};

export default App;
