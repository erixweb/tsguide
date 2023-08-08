import Navigation from "./Navigation"

export default function Layout(props: any) {
	const { title, children } = props

	return (
		<>
			<div className="wrapper">
				<aside>
					<div className="wrap">
						<a href="/guia/instalar">Instalar</a>
						<a href="/guia/tipos-primitivos">Tipos primitivos</a>
					</div>
				</aside>
				<div className="main">
			        <Navigation />
					<main>
						<h1>{title}</h1>
						<hr />
						{children}
					</main>
				</div>
			</div>
		</>
	)
}
