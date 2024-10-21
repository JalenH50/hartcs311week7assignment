import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Our Restaurant</h1>
            <nav>
                <Link href='/menu/appetizers'>Appetizers</Link>
                <Link href='/menu/entrees'>Entrees</Link>
            </nav>
        </div>
    );
};

export default Home;