import { useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import PaginationNav from '../PaginationNav';
import Planet from '../Planet';

const Planets = () => {
	const [page, setPage] = useState<number | string>(1);

	const fetchPlanets = async (key: string, page: number | string) => {
		const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
		const res_json = await res.json();
		return res_json.results;
	};

	const { data, status }: UseQueryResult<IPlanet[], Error> = useQuery(
		['planets', page],
		() => {
			return fetchPlanets('planets', page);
		}
	);
	return (
		<div>
			<h1>Planets</h1>
			<PaginationNav setPage={setPage} />
			{status === 'error' && <h2>Error on data fetching</h2>}
			{status === 'loading' && <h2>Loading data</h2>}
			{status === 'success' &&
				data?.map((planet: IPlanet) => {
					console.log(data, status);
					return (
						<Planet
							key={planet.name}
							name={planet.name}
							population={planet.population}
							terrain={planet.terrain}
						/>
					);
				})}
			{status !== 'idle' && status !== 'success' && status !== 'loading' && (
				<h2>Any data available</h2>
			)}
		</div>
	);
};

export default Planets;
