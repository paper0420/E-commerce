const fs = require("fs");
const matter = require("gray-matter");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getProducts = () => {
    const directory = `${process.cwd()}/content`;
    const filenames = fs.readdirSync(directory);
    const products = filenames.map(()=>{
        //read the file from fs
        const fileContent = fs.readFileSync(`${directory}/${filename}`)
        //pull out
        const {data} = matter(fileContent);
        return data;
    })
    return products;

};



export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const {cart} = JSON.parse(event.body);
      const products = getProducts();
      const cartWithProducts = cart.map(({id,qty})=>{
          const product = products.find((product)=>product.id===id);
          return{
              ...product,
              qty,
          };
      });
      console.log(cartWithProducts);
      
      const lineItems = cartWithProducts.map(product => ({
          price_data:{
              currency:'aud',
              product_data:{
                  name: product.name
              },
              unit_amount:product.price,
          },
          quantity:product.qty,
      }));




      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}