import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreview } from "./dev";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreview}>
            <App />
        </DevSupport>
    </React.StrictMode>
);
