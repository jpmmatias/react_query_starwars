interface IPersonProps {
	name: string;
	gender: string;
	birth_year: string;
}
const Person = ({ name, gender, birth_year }: IPersonProps) => {
	return (
		<div className='card'>
			<h3>{name}</h3>
			<p>Gender - {gender}</p>
			<p>Birth year - {birth_year}</p>
		</div>
	);
};

export default Person;
