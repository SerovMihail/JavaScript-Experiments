import React from "react";
import { useAsync } from "react-async";
import ReactJkMusicPlayer from "react-jinke-music-player";
import Parser from "rss-parser";
import "./App.css";
import logo from "./logo.svg";
import "react-jinke-music-player/assets/index.css";

const loadItCoolerRssFeed = async () => {
  let parser = new Parser();
  return await parser.parseURL("https://anchor.fm/s/132605f8/podcast/rss");
};

function App() {
  const { data, error, isLoading } = useAsync({
    promiseFn: loadItCoolerRssFeed,
  });

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        
        
        <ul>
          {data.items.map((podcastItem) => (
            <div key={podcastItem.guid} className="row">
              <div>
                <p>{podcastItem.title}</p>
              </div>
            </div>
          ))}
        </ul>

        <ReactJkMusicPlayer
          audioLists={[
            ...data.items.map((podcastItem) => podcastItem.enclosure.url),
          ]}
          autoPlay={false}
        />
      </header>
    </div>
  );
}

export default App;
