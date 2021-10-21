import React from 'react';
interface PaginationNavProps {
	setPage: (num: number) => void;
}
const PaginationNav = ({ setPage }: PaginationNavProps) => {
	return (
		<div>
			<button onClick={() => setPage(1)}>1</button>
			<button onClick={() => setPage(2)}>2</button>
			<button onClick={() => setPage(3)}>3</button>
			<button onClick={() => setPage(4)}>4</button>
			<button onClick={() => setPage(5)}>5</button>
			<button onClick={() => setPage(6)}>6</button>
			<button onClick={() => setPage(7)}>7</button>
			<button onClick={() => setPage(8)}>8</button>
			<button onClick={() => setPage(9)}>9</button>
		</div>
	);
};

export default PaginationNav;
