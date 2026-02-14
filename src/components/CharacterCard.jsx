const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <div className="card-image-box">
        <img src={character.image} alt={character.name} />
      </div>
      
      <div className="card-info">
        <h2>{character.name}</h2>
        <span className="card-race">{character.race} - {character.gender}</span>
        
        <div className="card-stats">
          <p>Base KI: <span>{character.ki}</span></p>
          <p>Total KI: <span>{character.maxKi}</span></p>
          <p>Afilliation: <span>{character.affiliation}</span></p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;