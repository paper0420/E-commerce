import exp from 'constants';
import fs from 'fs'
import matter from 'gray-matter'


const Product = ({product: {data,content}}) => {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p>${data.price/100}</p>
            <p>{content}</p>

        </div>
    )

}

export const getStaticPaths =()=> {
    //product path
    const directory = `${process.cwd()}/contents`;
    const filenames = fs.readdirSync(directory);
    const paths = filenames.map(filename => {
        return {
            params: {
                product: filename.replace('.md','')
            }
        }
    })

    return{
        paths: paths,
        fallback: false

    }
}

export const getStaticProps = async (context) => {
    const productName = context.params.product;
    const filePath = `${process.cwd()}/contents/${productName}.md`;
    const fileContent = fs.readFileSync(filePath).toString();
    const {data, content} = matter(fileContent);

    return{
        props:{
            product: {
                data,
                content
            }
        }
    }
}

export default Product