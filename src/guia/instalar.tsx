import Layout from "../Layout";

export default function InstalarPage (_props: any) {
    return (
        <Layout title='Instalar'>
            <h2>
                TypeScript Compiler
            </h2>
            <p>
                Para empezar a usar TypeScript usaremos la herramienta oficial hecha por Microsoft para compilar TypeScript a JavaScript.
            </p>
            <p>
                Necesitaremos compilar tu código TypeScript a JavaScript debido a que no hay manera de usar TypeScript de forma nativa en Node.
            </p>
            <p>
                Puedes instalar TSC (TypeScript Compiler) usando tu favorito gestor de paquetes, ya sea npm, pnpm o yarn.
            </p>
            <pre>
                <code>
                    pnpm install typescript -g
                </code>
            </pre>
        </Layout>
    )
}