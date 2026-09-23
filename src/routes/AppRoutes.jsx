import { Navigate, Route, Routes } from 'react-router-dom';
import { useApp } from '../state/useApp';
import Login from '../pages/Login/Login';
import NotesList from '../pages/NotesList/NotesList';
import NoteEditor from '../pages/NoteEditor/NoteEditor';
import Admin from '../pages/Admin/Admin';

function Home() {
  const { user } = useApp();
  return <Navigate to={user?.role === 'admin' ? '/admin' : user ? '/notes' : '/login'} replace />;
}

function ClientRoute({ children }) {
  const { user } = useApp();
  if (!user) return <Navigate to="/login" replace />;
  if (user.role === 'admin') return <Navigate to="/admin" replace />;
  return children;
}

function AdminRoute({ children }) {
  const { user } = useApp();
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== 'admin') return <Navigate to="/notes" replace />;
  return children;
}

function GuestRoute({ children }) {
  const { user } = useApp();
  return user ? <Home /> : children;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<GuestRoute><Login mode="login" /></GuestRoute>} />
      <Route path="/register" element={<GuestRoute><Login mode="register" /></GuestRoute>} />
      <Route path="/notes" element={<ClientRoute><NotesList /></ClientRoute>} />
      <Route path="/notes/new" element={<ClientRoute><NoteEditor /></ClientRoute>} />
      <Route path="/notes/:id" element={<ClientRoute><NoteEditor /></ClientRoute>} />
      <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
