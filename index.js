const express = require('express');
const cors = require('cors');
const { getJobPosts } = require('./api');
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

app.get('/status', (req, res) => {
  res.send('hello world');
});

app.post('/get/jobPosts', async (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'Body not specified' });
    return;
  }
  const result = await getJobPosts(req.body);
  if (!result.suceeded) {
    return res.send(result.error).status(500);
  }
  res.json(JSON.parse(result.body));
});