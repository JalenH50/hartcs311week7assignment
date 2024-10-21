import Link from 'next/link';

const Appetizers = () => {
    return (
        <div>
            <h1>Appetizers</h1>
            <ul>
                <li>Bruschetta</li>
                <li>Stuffed Mushrooms</li>
                <li>Garlic Bread</li>
            </ul>
            <Link href="/">Back to Home</Link>
        </div>
    );
};

export default Appetizers;
