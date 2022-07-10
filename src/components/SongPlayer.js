import { useRef } from "react";
import { Heading } from "./Heading";
import "./SongPlayer.css";

export function SongPlayer({ showControls = false, title, song }) {
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;
  return (
    <section className="SongPlayer">
      <Heading title={title} />
      <img src={coverUrl} alt="cover" width="250" height="250" />
      <audio ref={audioRef} key={audioUrl} controls={showControls}>
        <source src={audioUrl} />
      </audio>
      <div>
        <button onClick={() => audioRef.current.play()}>Play</button>
        <button onClick={() => audioRef.current.pause()}>Pause</button>
      </div>
    </section>
  );
}
