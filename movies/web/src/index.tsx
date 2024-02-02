import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'assets/styles/tailwind.css';

import Auth from 'modules/auth/container/auth';
import Routes from './routes/routes';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <Auth>
      <Routes />
    </Auth>
  </BrowserRouter>
);
