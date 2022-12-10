const fs = require("fs");
const matter = require("gray-matter");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getProducts = () => {
  const directory = `${process.cwd()}/contents`;
  const filenames = fs.readdirSync(directory);

  return filenames.map((filename) => {
    //read the file from fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`);

    const { data } = matter(fileContent);
    return data;
  });
};

export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      const cartItems = JSON.parse(request.body);

      const products = getProducts();

      const lineItems = cartItems.map(({ id, qty }) => {
        const product = products.find((product) => product.id === id);

        return {
          price_data: {
            currency: "aud",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: qty,
        };
      });

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: `${request.headers.origin}/?success=true`,
        cancel_url: `${request.headers.origin}/?canceled=true`,
      });

      response.status(200).json(session.url);
    } catch (err) {
      response.status(err.statusCode || 500).json(err.message);
    }
  } else {
    response.setHeader("Allow", "POST");
    response.status(405).end("Method Not Allowed");
  }
}
