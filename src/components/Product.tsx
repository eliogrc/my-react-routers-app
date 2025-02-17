import { useParams } from "react-router-dom";

const Product: React.FC = () => {
    const { id } = useParams<{id: string}>();

    return (
        <div>
            <h2>Product { id }</h2>
        </div>
    )
}

export default Product;