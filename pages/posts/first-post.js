import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <section className={utilStyles.headingMd}>
                <p>
                    Do you like coffee?
                </p>
            </section>

        </Layout>
    )
}