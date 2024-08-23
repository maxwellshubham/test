const express = require('express');
const app = express();
const products = {
  'product-id': {
    description: 'Product description here.',
    imageUrl: 'https://example.com/image.jpg',
    
  },
  // ... other products
};

// Endpoint to serve OG meta tags
app.get('/share', (req, res) => {
    console.log("We are here")
  const imageUrl = req.query.imgUrl;
  const description=req.query.text;

  if (imageUrl) {
    // Serve HTML with OG meta tags
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta property="og:title" content="Facebook Share" />
        <meta property="og:description" content="${description}" />
        <meta property="og:image" content="${imageUrl}" />
      </head>
      <body>
       <p>${description}</p>
        <img src="${imageUrl}" alt="Shared image" />
      </body>
      </html>
    `);
  } else {
    res.status(404).send('Product not found');
  }
});

// Start server
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});