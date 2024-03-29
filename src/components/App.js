import { useEffect, useState } from "react";
import { Heading } from "./Heading";
import { SongListItem } from "./SongListItem";
import { SongPlayer } from "./SongPlayer";
import { Songs } from "./Songs";
import "./App.css";

export function App() {
  const URL = "https://examples.devmastery.pl/songs-api/songs";
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSongs);
      }
    });
  }, []);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  function handleSelectSong(selectedSong) {
    const songIndex = songs.findIndex(
      (song) => selectedSong.audioUrl === song.audioUrl
    );
    if (songIndex >= 0) {
      setCurrentSongIndex(songIndex);
    }
  }
  return (
    <div className="App">
      {songs.length === 0 ? (
        "loading..."
      ) : (
        <>
          <SongPlayer title="Musick Player" song={currentSong} />
          <Songs>
            <Heading title="Song List" />
            <ul>
              {songs.map((song) => (
                <SongListItem
                  key={song.audioUrl}
                  song={song}
                  isCurrent={currentSong.audioUrl === song.audioUrl}
                  onSelect={handleSelectSong}
                />
              ))}
            </ul>
          </Songs>
        </>
      )}
    </div>
  );
}
