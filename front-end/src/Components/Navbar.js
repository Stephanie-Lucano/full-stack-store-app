import {Nav, Navbar, NavItem, NavLink, NavbarBrand} from 'reactstrap';
export default function Header() {
    return (
        <div>
        <Navbar color="light" light expand="md" pills>
            <NavbarBrand href="/">Home</NavbarBrand>
            <Nav>
            <NavItem>
                <NavLink href="/products">All items</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/products/new">Create New Item</NavLink>
            </NavItem>
            </Nav>
        </Navbar>
        </div>
    )
}