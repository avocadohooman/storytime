import {  Conversation } from '../components';

export default function Page() {
	return (<div className="flex h-screen flex-col items-center justify-center">
		<h1 className="text-2xl font-bold">Hello, Next.js!</h1>
			<Conversation />
	</div>
	)
  }
  