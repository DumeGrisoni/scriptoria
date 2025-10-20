import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<RouterProvider router={router} />);

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message);
});
