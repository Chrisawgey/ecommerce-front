import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

export default function CategoryPage({category,products}) {
    return(
        <>
            <Header />
            <Center>
                <Title>{category.name}</Title>
                <ProductsGrid products={products}/>
            </Center>
        </>
    );
}

export async function getServerSideProps(context) {
    const category = await Category.findById(context.query.id);
    const subCategories = await Category.find({parent:category._id});
    const catIds = [category._id, ...subCategories.map(c => c._id)];
    const products = await Product.find({category:catIds})
    return{
        props:{
            category: JSON.parse(JSON.stringify(category)),
            products: JSON.parse(JSON.stringify(products)),
        }
    }
}