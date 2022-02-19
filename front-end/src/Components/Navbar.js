import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <Link to="/"><button>Curated Items by Stephanie</button></Link>
            <Link to="/products"><button>All Items</button></Link>
            <Link to="/products/new"><button>Create New Item</button></Link>
        </>
    )
}