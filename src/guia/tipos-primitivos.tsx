import Layout from "../Layout";

export default function TiposPrimitivos (_props: any) {
    return (
        <Layout title='Tipos primitivos'>
            <p>
                En TypeScript, por defecto, hay tipos como <strong>string</strong> o <strong>number</strong> que ya existen en otros lenguajes de programación como C# o Java.
            </p>
            <h2>
                String
            </h2>
            <p>
                Un string es una cadena de texto como puede ser 'Hola Mundo'
            </p>
            <pre>
                <code>
                    let message: string = 'Hola Mundo'
                </code>
            </pre>
        </Layout>
    )
}