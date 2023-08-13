import TSLogo from "./icons/TSLogo";

export default function HomeHeader () {
    return (
        <header>
            <div className="wrap">
                <div className="content">
                    <h1>TSGuide</h1>
                    <p>
                        Guia para aprender TypeScript. Desde tipos primitivos hasta crear tus propias interfaces.
                    </p>
                    <a href="/guia/instalar">
                        Comenzar
                    </a>
                </div>
                <div className="logo">
                    <TSLogo />
                </div>
            </div>
        </header>
    )
}