import { useQuery } from 'react-query';
import Person from '../Person';
const People = () => {
	const fetchPeople = async () => {
		const res = await fetch('https://swapi.dev/api/people');
		return res.json();
	};
	const { data, status } = useQuery('people', fetchPeople, {});
	return (
		<div>
			<h1>People</h1>
			{status === 'error' && <h2>Error on data fetching</h2>}
			{status === 'loading' && <h2>Loading data</h2>}
			{status === 'success' &&
				data?.results.map((person: IPerson) => {
					return (
						<Person
							key={person.name}
							name={person.name}
							birth_year={person.birth_year}
							gender={person.gender}
						/>
					);
				})}
		</div>
	);
};

export default People;
