import { useCharacters } from './hooks/useCharacters';
import CharacterCard from './components/CharacterCard';

function App() {
  const { characters, loading, error } = useCharacters();

  return (
    <div className="app-container">
      <h1 className="header-title">Dragon Ball API</h1>

      {loading && <p className="loading-text">Reuniendo Ki...</p>}
      {error && <p className="error-text">Error: {error}</p>}

      {!loading && !error && (
        <div className="characters-grid">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;