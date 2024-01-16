import styles from './Navbar.module.scss';

export function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>Wipe
                    <ul>
                        <li>Wipe 1</li>
                        <li>Wipe 2</li>
                        <li>Wipe 3</li>
                    </ul>
                </li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};