import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import NotesList from '../pages/NotesList/NotesList';
import NoteEditor from '../pages/NoteEditor/NoteEditor';
import Admin from '../pages/Admin/Admin';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notes" element={<NotesList />} />
      <Route path="/notes/new" element={<NoteEditor />} />
      <Route path="/notes/:id" element={<NoteEditor />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default AppRoutes;