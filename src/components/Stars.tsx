import React from 'react';
import Star from './Star';
import styles from './styles.module.css'

interface StarsProps {
    count?: number;
}

const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
    if (typeof count !== 'number' || count < 1 || count > 5) {
        return null;
    }

    const stars = Array.from({ length: count }, (_, index) => <Star key={index} />);

    return (
        <ul className={`${styles.cardBodyStars} ${styles.clearfix}`}>
            {stars}
        </ul>
    );
};

export default Stars;