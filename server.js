import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

const apiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjAwM2QwZTY3LTg1YzEtNGFmZC05ZWJmLTE3NjA0ZTI5ZTcwYyIsImlhdCI6MTcyNjk0NTc4NCwic3ViIjoiZGV2ZWxvcGVyLzI0MTliN2U0LTNjMzItYzA3Zi02OTc4LWM0YjhiODBkOTI0NyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzMS4xODIuMjA1LjU0IiwiMy4yMzUuMTQ1LjE5MSIsIjM0LjExNi4xMzcuMjI2Il0sInR5cGUiOiJjbGllbnQifV19.oC1P1WXJz09f1DNLPSpQ4fASCUTHhsIsXd1hQl6DOae_bDv_vk3YfgFh6XNeWfSTJdbCjduGnJIBOxgsDy0D3Q'; // Zamień na swój token API Supercell

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
