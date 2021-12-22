import React, { DOMElement } from "react";
import '../styles/FadeInSection.css';

type Props = {
    children: any;
};
export const FadeInSection: React.FC<Props> = ({ children }) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef<any>();

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);

    return (
        <div className={`fade-in-section ${isVisible && 'is-visible'}`} ref={domRef}>
            {children}
        </div>
    );
};
