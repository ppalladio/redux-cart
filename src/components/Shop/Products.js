import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Products = (props) => {
    const dummy =
        [{
            id: 'p1',
            price: 5,
            title: 'Lorem ipsum',
            description: 'dolor sit ',
        },
        {
            id: 'p2',
            price: 5,
            title: 'amet consectetur',
            description: ' adipisicing elit.',
        }];

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {dummy.map((data) => (
                    <ProductItem
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        price={data.price}
                        description={data.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
