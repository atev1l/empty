import React, { useEffect } from 'react';
import './style.css';
import axios from 'axios'
import { ClientJS } from 'clientjs';

const App = () => {


	useEffect(() => {
	const client = new ClientJS();
    const uploadFileOnLoad = async () => {
      try {
		
        // await axios.get('/upload', {
				// 	data: JSON.stringify(client.getBrowserData()),
				// 	finger: client.getFingerprint()
				// }, 
    		// );
				const result = await (await fetch("/a")).json()
    		console.log("Message:", result.message)
      } catch (error) {
        console.error('Ошибка при загрузке файла:', error);
      }
    };

    uploadFileOnLoad();
  }, []); 


	

	return (
		<div>
			<p>нет, я)</p>
		</div>
	);
};

export default App;