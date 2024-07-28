const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json([{ lat : 53.143890 , lng : 8.213889 }]);
    }
);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
