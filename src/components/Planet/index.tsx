interface IPlanetProps {
	name: string;
	population: string;
	terrain: string;
}
const Planet = ({ name, population, terrain }: IPlanetProps) => {
	return (
		<div>
			<div className='card'>
				<h3>{name}</h3>
				<p>Population - {population}</p>
				<p>Terrain - {terrain}</p>
			</div>
		</div>
	);
};

export default Planet;
