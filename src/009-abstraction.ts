// oop - abstraction

// idea
// implementation pore korbo

/*
    1. interface
    2. abstract class
*/

// // idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer {
//   play() {
//     console.log("Playing music..");
//   }

//   pause() {
//     console.log("Music pauesd..");
//   }

//   stop() {
//     console.log("Music stopped..");
//   }
// }

// const sonyWalkman = new MusicPlayer(); // instance
// sonyWalkman.play();

// idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// implementation
class SonyWalkman extends MediaPlayer {
  play(): void {
    console.log("Playing music..");
  }
  pause(): void {
    console.log("Music Paused..");
  }
  stop(): void {
    console.log("Playing stopped..");
  }
}

const walkman1 = new SonyWalkman();

walkman1.play();
