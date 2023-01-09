import console from "console";

const fs = require("fs");
const matter = require("gray-matter");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getProducts = () => {
  const directory = `${process.cwd()}/contents`;
  const categoryNames = fs.readdirSync(directory);
  let products = [];
  categoryNames.forEach((category) => {
    const categoryPath = `${process.cwd()}/contents/${category}`;
    const filenames = fs.readdirSync(categoryPath);

    let subProduct = filenames.map((filename) => {
      const fileContent = fs
        .readFileSync(`${directory}/${category}/${filename}`)
        .toString();
      //pull out frontmatter => name
      const { data } = matter(fileContent);
      var y = {
        ...data,
      };
      return y;
    });

    products = [...products, ...subProduct];
  });
  return products;
};

export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      const cartItems = JSON.parse(request.body);
      console.log(request.body);

      const products = getProducts();

      const lineItems = cartItems.map(({ id, qty }) => {
        const product = products.find((product) => product.id === id);

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: qty,
        };
      });

      console.log(stripe);

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: `${request.headers.origin}/success?id=`,
        cancel_url: `${request.headers.origin}/cancelled`,
      });

      console.log("ss" + session.id);

      response.status(200).json(session);
    } catch (err) {
      response.status(err.statusCode || 500).json(err.message);
    }
  } else {
    response.setHeader("Allow", "POST");
    response.status(405).end("Method Not Allowed");
  }
}
