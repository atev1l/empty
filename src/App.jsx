import React, { useEffect } from 'react';
import './style.css';

const App = () => {


	useEffect(() => {
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
			<p>сука</p>
		</div>
	);
};

export default App;