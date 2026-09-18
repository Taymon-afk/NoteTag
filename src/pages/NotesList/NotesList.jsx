import mock from '../../mocks/mock.json';
import './NotesList.css';

function NotesList() {
  return (
    <div className="notes-page">
      <header className="notes-header">
        <h1>NoteTag</h1>
        <input className="notes-search" type="text" placeholder="Поиск по заметкам" />
        <button className="notes-new-btn">+ Новая заметка</button>
      </header>

      <div className="notes-filters">
        <span>Фильтр по тегам:</span>
        {mock.tags.map((tag) => (
          <span key={tag.id} className="tag">{tag.name}</span>
        ))}
      </div>

      <div className="notes-grid">
        {mock.notes.map((note) => (
          <div key={note.id} className="note-card">
            <h3 className="note-title">{note.title}</h3>
            <p className="note-preview">{note.content}</p>
            <div className="note-tags">
              {note.tags.map((tagId) => {
                const tag = mock.tags.find((t) => t.id === tagId);
                return (
                  <span key={tagId} className="tag tag-small">
                    {tag?.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;