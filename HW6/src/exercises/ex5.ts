abstract class Media {
  abstract play(): void;
}

class Audios extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}

const mediaList: Media[] = [new Audios(), new Video()];

mediaList.forEach((media) => media.play());
