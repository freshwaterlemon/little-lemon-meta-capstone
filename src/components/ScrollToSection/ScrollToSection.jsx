import React from 'react'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

const ScrollToSection = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [hash]);

    return null;

}

export default ScrollToSection