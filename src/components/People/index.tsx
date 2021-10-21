import { useQuery, UseQueryResult } from 'react-query';
import Person from '../Person';
import { useState } from 'react';
import PaginationNav from '../PaginationNav';
const People = () => {
	const [page, setPage] = useState<number | string>(1);
	const fetchPeople = async (key: string, page: number | string) => {
		const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
		const res_json = await res.json();
		return res_json.results;
	};
	const { data, status }: UseQueryResult<IPerson[], Error> = useQuery(
		['people', page],
		() => {
			return fetchPeople('people', page);
		},
		{}
	);
	return (
		<div>
			<h1>People</h1>
			<PaginationNav setPage={setPage} />
			{status === 'error' && <h2>Error on data fetching</h2>}
			{status === 'loading' && <h2>Loading data</h2>}
			{status === 'success' &&
				data?.map((person: IPerson) => {
					return (
						<Person
							key={person.name}
							name={person.name}
							birth_year={person.birth_year}
							gender={person.gender}
						/>
					);
				})}
			{status !== 'idle' && status !== 'success' && status !== 'loading' && (
				<h2>Any data available</h2>
			)}
		</div>
	);
};

export default People;
