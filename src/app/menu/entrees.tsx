// src/app/menu/entrees.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Entrees = () => {
    const [entrees, setEntrees] = useState('');

    useEffect(() => {
        fetch('/entrees.txt')
            .then((response) => response.text())
            .then((data) => setEntrees(data));
    }, []);

    return (
        <div>
            <h1>Entrees</h1>
            <pre>{entrees}</pre>
            <Link href="/">Back to Home</Link>
        </div>
    );
};

export default Entrees;
