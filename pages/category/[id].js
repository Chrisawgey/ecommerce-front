import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { Category } from "@/models/Category";

export default function CategoryPage({category}) {
    return(
        <>
            <Header />
            <Center>
                <Title>{category.name}</Title>
            </Center>
        </>
    );
}

export async function getServerSideProps(context) {
    const category = await Category.findById(context.query.id);
    return{
        props:{
            category: JSON.parse(JSON.stringify(category)),
        }
    }
}