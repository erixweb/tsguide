import Navigation from "./Navigation"

export default function Layout(props: any) {
    const { title, children } = props

	return (
		<>
			<Navigation />
			<main>
                <h1>
                    {title}
                </h1>
                <hr />
                {children}
            </main>
		</>
	)
}
