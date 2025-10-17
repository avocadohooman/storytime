type User = {id: number, name: string};

async function getUsers(): Promise<User[]> {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users', {
			next: {
				revalidate: 60,
			},
		});
		if (!response.ok) throw new Error('Failed to fetch users');
		return response.json();
	} catch (error) {
		console.error(error);
		return [];
	}
}

export default async function UsersPage() {
	const users = await getUsers();
	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	);
}