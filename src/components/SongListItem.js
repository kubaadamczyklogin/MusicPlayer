import "./SongListItem.css";

export function SongListItem({ song, isCurrent, onSelect }) {
  const { title, artist } = song;
  function handleClick() {
    onSelect(song);
  }
  return (
    <li
      className={`SongListItem ${isCurrent ? "selected" : ""}`}
      onClick={handleClick}
    >
      {title} by {artist}
    </li>
  );
}
