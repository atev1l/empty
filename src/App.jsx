import React, { useEffect } from 'react';
import './style.css';
import axios from 'axios';
const App = () => {
    const click = async () => {
		await axios.get('https://empty-dusky.vercel.app/a')
			.then(response => {
				console.log('Ответ от сервера:', response.data);
			})
			.catch(error => {
				console.error('Произошла ошибка:', error);
			});
    }
  //
	// useEffect(() => {
  //   const uploadFileOnLoad = async () => {
  //     try {
	//
  //       // await axios.get('/upload', {
	// 			// 	data: JSON.stringify(client.getBrowserData()),
	// 			// 	finger: client.getFingerprint()
	// 			// },
  //   		// );
	// 			const result = await (await fetch("/a")).json()
  //   		console.log("Message:", result.message)
  //     } catch (error) {
  //       console.error('Ошибка при загрузке файла:', error);
  //     }
  //   };
  //
  //   uploadFileOnLoad();
  // }, []);


	

	return (
		<div>
			<p>сука</p>
            <button onClick={click}>click</button>
		</div>
	);
};

export default App;