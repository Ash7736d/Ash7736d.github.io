document.getElementById('spinButton').addEventListener('click', async () => {
  // Make a POST request to the backend server to spin the slots
  const response = await fetch('https://your-backend-server/spin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: 'DISCORD_USER_ID' }),
  });

  const result = await response.json();
  if (result.success) {
    alert('Congratulations! You won a prize!');
  } else {
    alert('Sorry, you did not win this time.');
  }
});
