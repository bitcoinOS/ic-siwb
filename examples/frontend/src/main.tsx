import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import AuthGuard from './AuthGuard.tsx';
import './index.css';
// import { SiwbIdentityProvider } from 'ic-use-siwb-identity';
import type { _SERVICE as siwbService } from './idls/ic_siwb_provider.d.ts';
import { idlFactory as siwbIdl } from './idls/ic_siwb_provider.idl.ts';
import { SiwbIdentityProvider } from 'ic-use-siwb-identity';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <SiwbIdentityProvider<siweService>
    canisterId="bkyz2-fmaaa-aaaaa-qaaaq-cai"
    idlFactory={siwbIdl}
    httpAgentOptions={{ host: 'http://127.0.0.1:4943' }}
  >
    <AuthGuard>
      <App />
    </AuthGuard>
  </SiwbIdentityProvider>,
  // </React.StrictMode>,
);
