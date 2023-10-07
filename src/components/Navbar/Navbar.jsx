import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h1>Wemí Cueros</h1>
            <section>
                <button>Carteras</button>
                <button>Billeteras</button>
                <button>Accesorios</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar