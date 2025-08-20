#!/bin/bash
# Simple script to serve index.html locally

PORT=8000
URL="http://localhost:$PORT"

# Start the server in the background
python3 -m http.server $PORT &

# Save the PID so we can stop it later if needed
SERVER_PID=$!

# Open browser
if command -v xdg-open &> /dev/null
then
    xdg-open "$URL"
elif command -v open &> /dev/null
then
    open "$URL"
else
    echo "Please open $URL manually"
fi

# Wait for Ctrl+C
trap "kill $SERVER_PID" INT
wait $SERVER_PID