import express from 'express';

const app = express();


app.get('/api/products', (req, res) => {
    const products = [
      {
        id: 1,
        name: 'table wooden',
        price: 200,
        image: 'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg'
      },
      {
        id: 2,
        name: 'table glass',
        price: 250,
        image: 'https://images.pexels.com/photos/32969460/pexels-photo-32969460.jpeg'
      },
      {
        id: 3,
        name: 'table plastic',
        price: 150,
        image: 'https://images.pexels.com/photos/2046807/pexels-photo-2046807.jpeg'
      },
      {
        id: 4,
        name: 'table metal',
        price: 300,
        image: 'https://images.pexels.com/photos/2642842/pexels-photo-2642842.jpeg'
      },
      {
        id: 5,
        name: 'table polyester',
        price: 150,
        image: 'https://images.pexels.com/photos/32958947/pexels-photo-32958947.jpeg'
      }
    ]

     if (req.query.search) {
       const filterProducts =  products.filter(product =>
         product.name.includes(req.query.search))
         res.send(filterProducts);
         return;
     }

    setTimeout(() => {
        res.send(products);
    }, 3000);

})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  
});