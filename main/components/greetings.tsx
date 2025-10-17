'use client';
import { useEffect, useState } from 'react';


export default function Greetings() {
	const [greetings, setGreetings] = useState<string>('');

	useEffect(() => {
		let alive = true;
		fetch('/api/get-greetings')
			.then(response => response.json())
			.then(data => {
				if (alive) {
					setGreetings(data.message);
				}
			});

		return () => { alive = false; };
	}, []);

	return <p>{greetings}</p>;
}