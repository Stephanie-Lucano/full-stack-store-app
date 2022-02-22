import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";
export default function Home() {
    const mystyle = {
        height:"100%",
        width: "100%",
        position: "center",
        repeat: "no-repeat",
        size: "cover"
    };
    const textStyle = {
        "font-family": 'Montserrat'
    };
    return (
        <>
            <img alt="timeless furniture pieces" src="https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=" style={mystyle} />
            <h2 style={textStyle}>welcome to `timeless furniture pieces`</h2>
            <h4 style={textStyle}>beinvendidos mi gente a `la muebleria que no se va de moda`</h4>
            <Navbar color="light" expand="md" fixed="bottom" light >
                <NavbarBrand ><h6>Created and designed by Stephanie Lucano</h6></NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href="https://github.com/Stephanie-Lucano/full-stack-store-app"><img alt="github icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX///8bHyMAAAD6+voAAAgXGyASFxwAAAsAAAUABw8YHSHg4OBsbW4GDhR4eXrR0dHv7++enp+EhYZFR0kgIyakpKWNjo9MTU+1trYrLjLKyspiY2SsrK2YmJk8PkDDxMRZW1wzNTj8SMKAAAACvUlEQVRIiZWW2aKCIBBAZRQQDE0zl8qW///JCyIIhtKdpzAOMzBrkoSkGLpTPyI09qduKIJbAnIrATJBMJKCicgAylucSmsBgiNPuPxUp8dcDRSjgHAK9QFWtXmI0miOqj2ugaA2Ixia8O0u++oWyS+Bm56RiHEIifb8xQkS5xAiYkOm7U+cJFvf2ou2U7BdnrBly8V7T/0uoqnvEHpanMG97tj8O3fetgL9P6jFMAKfY41RynTkZeihDBz1kbD6E+kv5K2XDwBo7810vdbN6SMXS9A02liMDFcvDhSdeeKX8wLpzaTHI9P78uWgdDEUsaNwlPIyG0GfW1MDTsfgYECqNdgsEuUxWLNlIxdqeTPnIMyPwd46GVRmlzZGWUTjZFXMtoGxFI/HnKOSS48X9hh4xUBnb5EMmVHYxrgkeRuV2ZB05orW/QdiQkBtPpGfLXVsJaekN8kAPxTeswFxn4zoH6CNTv5J0H9AqxEhB9wtm2FwNP6HIQ5W1tRxfZxYbigZTOmVj2PdQfo4aONausMGgEnPIyE2A7s15BC9xjhbAlTIrYHLSQx8rgkpfbe+cCwf61UHuBeW5xwaO6wq5kReSgdW997pgLNcV06XDl2s2ChUKcg+O3NC1Tvc8hqTLI9MGvniRLXdz/QVtMX1CW43WsqjCnkuZDamc3PADOjTKc3DU37wmhg3Hq8ztejWPMXCjYVx2/pyeyxXmlQFeGjSD9vHZjZwitMc9HN5nkAQIvwMc3JJP6nz79xYc+XFoun7clN9/Ekr91ymWvlufURuj/ZbuR4e9kLOBbfDgx5Xsnew7jjg17giyVZaSwCfyvKO/FO5vWNgQDIjGSdCELoDZqGRLHGGQOb/jzW4NwQm89jJd8EMH9VPOeiqHPFBWWkwhUgRVKM1A/8bpSCmeCVLbt0mJ6vmh0b2s/wBcjkeJwpqfhsAAAAASUVORK5CYII=" height="20" /> GitHub</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )
}