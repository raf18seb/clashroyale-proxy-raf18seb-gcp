import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const apiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNmYTg4NDJmLTA2Y2EtNGYzNy1hMDU2LWE3YWM0OWI5MTJkNSIsImlhdCI6MTcyNjk0Nzk0MSwic3ViIjoiZGV2ZWxvcGVyLzI0MTliN2U0LTNjMzItYzA3Zi02OTc4LWM0YjhiODBkOTI0NyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzMS4xODIuMjA1LjU0IiwiMy4yMzUuMTQ1LjE5MSIsIjM0LjExNi4xMzcuMjI2IiwiMzQuMTE2LjE1My44MSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.qC1EW91E3pLUe1PpnXIEJ--prBlInJJjgzzhBgAzVeZ-7XHGh4jXKkqcwkJuNnXbROXpmMfR7KwcEwL5XcRt0w';

app.get('/clan/:tag', async (req, res) => {
    const clanTag = req.params.tag;

    try {
        const response = await fetch(`https://api.clashroyale.com/v1/clans/%23${clanTag}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiToken}`
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
