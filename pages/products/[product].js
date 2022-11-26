import exp from 'constants';
import fs from 'fs'
import matter from 'gray-matter'

export const getStaticPaths = () => {
    const directory = `${process.cwd()}/contents`;
    const filenames = fs.readdirSync(directory);
    const paths = filenames.map(filename => {
        return {
            params: {
                product: filename.replace('.md', '')
            }
        }
    });

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const productName = context.params.product;
    const filePath = `${process.cwd()}/contents/${productName}.md`;
    const fileContent = fs.readFileSync(filePath).toString();
    const { data, content } = matter(fileContent);

    return {
        props: {
            product: {
                data,
                content
            }
        }
    };
}

const Product = (props) => {
    return (
        <div>
            <h1>{props.product.data.name}</h1>
            <p>{props.product.data.description}</p>
            <p>${props.product.data.price/100}</p>
            <p>{props.product.content}</p>
        </div>
    )
};

export default Product;