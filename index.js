let progress = document.getElementById("progress");
    let song = document.getElementById("song");
    let play = document.getElementById("play");
    let action = document.getElementById("action");

    song.addEventListener("loadedmetadata", () => {
      progress.max = song.duration;
      progress.value = song.currentTime;
    });
    play.addEventListener("click", () => {
      if (action.classList.contains("play")) {
        song.play().then(() => {
          console.log("Playing...");
        }).catch(err => console.error("Play error:", err));
        action.classList.remove("play");
        action.classList.add("pause");
        action.textContent = "⏸";
      } else {
        song.pause();
        action.classList.remove("pause");
        action.classList.add("play");
        action.textContent = "▶";
      }
    });

    song.addEventListener("timeupdate", () => {
      progress.value = song.currentTime;
    });

    progress.addEventListener("input", () => {
      song.currentTime = progress.value;
    });