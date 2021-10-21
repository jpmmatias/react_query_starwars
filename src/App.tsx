import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

function App() {
	const [page, setPage] = useState('planets');
	const reactQuery = new QueryClient();
	return (
		<QueryClientProvider client={reactQuery}>
			<div className='App'>
				<h1>Star Wars Info</h1>
				<Navbar setPage={setPage} />
				<div className='content'>
					{page === 'planets' ? <Planets /> : <People />}
				</div>
			</div>
		</QueryClientProvider>
	);
}

export default App;
