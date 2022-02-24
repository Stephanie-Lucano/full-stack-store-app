import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";
import {useState} from "react"
import {Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl} from "reactstrap"

export default function Home() {
    const textStyle = {
        "fontFamily": 'Montserrat',
        "text-align": "center"
    };

    const center = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "60%"
    }

    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    const next = () => {
        if(animating) {
            return
        }
        const nextIndex = activeIndex === items.length-1 
        ? 0
        : activeIndex + 1 
        setActiveIndex(nextIndex)
    }

    const previous = () => {
        if(animating) {
            return
        }
        const nextIndex = activeIndex === 0
        ? items.length-1
        : activeIndex-1
        setActiveIndex(nextIndex)
    }

    const items = [
        {
            altText: 'Aspirational living room idea',
            caption: 'Living room',
            key: 1,
            src: 'https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4='
        },
        {
            altText: 'Aspirational office',
            caption: 'Office',
            key: 2,
            src: 'https://www.ikea.com/us/en/images/products/trotten-cabinet-combination-anthracite__1038437_pe839676_s5.jpg?f=xl'
        },
        {
            altText: 'Aspirational bedroom',
            caption: 'Bedroom',
            key: 3,
            src: 'https://www.ikea.com/ext/ingkadam/m/f95b5fd1e2b3b4/original/PH157405-crop002.jpg?f=xs'
        }
    ]

    const slides = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
                >
                <img src={item.src} alt={item.altText} style={center} />
                <CarouselCaption
                    captionText={item.caption}
                    // captionHeader={item.caption}
                />
            </CarouselItem>
        )
    })
    
    return (
        <>
            <h2 style={textStyle}>welcome to `timeless furniture pieces`</h2>
            <h4 style={textStyle}>beinvendidos mi gente a `la tienda de muebleria`</h4>
            
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
            <CarouselIndicators
                activeIndex={0}
                items={items}
                onClickHandler={(activeIndex) => {setActiveIndex(next)}}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
            </Carousel>

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