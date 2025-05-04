// app/api/chat/route.js
export async function POST(req) {
  try {
    const { messages } = await req.json();
    console.log('Received messages:', messages);

    if (!process.env.NEXT_PUBLIC_KEY) {
      console.error('OpenAI API key is missing');
      return Response.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    console.log('Making request to OpenAI API...');
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat-v3-0324:free',
        // model: 'deepseek/deepseek-r1:free',
        messages,
        stream: false,
        // max_tokens: 20,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      return Response.json(
        { error: error.message || 'Failed to fetch from OpenAI' },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('OpenAI API response:', data);
    return Response.json(data);
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
