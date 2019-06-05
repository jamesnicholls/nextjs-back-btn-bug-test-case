import Link from 'next/link';

function A({ testObject, testString }) {
    return (
        <>
            <div>Page A</div>
            <p>Test string</p>
            <pre>{testString}</pre>
            <p>Test object</p>
            <pre>{JSON.stringify(testObject)}</pre>
            <Link
                href={{
                    pathname: '/b',
                }}
                as="/b"
            >
                <a>Page B</a>
            </Link>
        </>
    );
}

A.getInitialProps = async (context) => {
    return context.query;
}

export default A;