import {   IncrementButton, Greetings, Conversation } from '../components';

export default function Page() {
	return (<div className="flex h-screen flex-col items-center justify-center">
		<Greetings />
		<IncrementButton />
		<Conversation />
	</div>
	)
  }
  