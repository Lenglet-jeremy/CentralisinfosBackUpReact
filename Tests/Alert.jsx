import { useState } from 'react';

/**
 * @param {"danger" | "info" | "warning"} type
 */

export function Alert ({ type = 'info', children }) {
    
    const [show, toggle] = useState(true);

    const setToggle = () => {
        toggle((show) => !show);
    };

    if (!show) {
        return null;
    }
    return (
        <div className={`alert alert-${type}`} role="alert">
            {children}
            <button onClick={setToggle}>Fermer</button>
        </div>
    );
}