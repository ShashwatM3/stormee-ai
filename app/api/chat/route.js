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

    console.log('Making request to OpenRouter API...');
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://stormee.ai', // Required by OpenRouter
        'X-Title': 'Stormee AI' // Optional, but recommended
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat-v3-0324:free',
        messages,
        stream: false,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenRouter API error:', error);
      return Response.json(
        { error: error.message || 'Failed to fetch from OpenRouter' },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('OpenRouter API response:', data);

    // Check if the response has the expected format
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected response format:', data);
      return Response.json(
        { error: 'Unexpected response format from OpenRouter' },
        { status: 500 }
      );
    }

    // Return the response in the expected format
    return Response.json({
      choices: [{
        message: {
          role: 'assistant',
          content: data.choices[0].message.content
        }
      }]
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
