import TSLogo from "./icons/TSLogo";

export default function Navigation () {
    return (
        <nav>
            <div className="wrap">
                <div className="logo">
                    <TSLogo />
                </div>
                <div className="links">
                    <a href="/">
                        Inicio
                    </a>
                    <a href="/guia/instalar">
                        Guía
                    </a>
                </div>
            </div>
        </nav>
    )
}