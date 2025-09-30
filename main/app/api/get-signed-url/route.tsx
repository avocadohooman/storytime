import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const response = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${process.env.ELEVEN_LABS_AGENT_ID}`, {
			headers: {
				'xi-api-key': process.env.ELEVEN_LABS_API_KEY!,
			},
		});
		if (!response.ok) {
			return NextResponse.json({ error: 'Failed to get signed url' }, { status: response.status });
		}
		const data = await response.json();
		return NextResponse.json({ signedUrl: data.signed_url });
	} catch (error) {
		return NextResponse.json({ error: 'Failed to get signed url' }, { status: 500 });
	}
}