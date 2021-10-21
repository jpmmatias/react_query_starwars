import React from 'react';

interface NavbarProps {
	setPage: (page: string) => void;
}

const Navbar = ({ setPage }: NavbarProps) => {
	return (
		<nav>
			<button
				onClick={() => {
					setPage('planets');
				}}>
				Planets
			</button>
			<button
				onClick={() => {
					setPage('people');
				}}>
				People
			</button>
		</nav>
	);
};

export default Navbar;
