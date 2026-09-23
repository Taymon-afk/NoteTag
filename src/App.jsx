import AppRoutes from './routes/AppRoutes';
import { AppProvider } from './state/AppContext';

export default function App() {
  return <AppProvider><AppRoutes /></AppProvider>;
}
