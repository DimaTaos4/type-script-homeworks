"use strict";
class Media {
}
class Audios extends Media {
    play() {
        console.log("Playing audio");
    }
}
class Video extends Media {
    play() {
        console.log("Playing video");
    }
}
const mediaList = [new Audios(), new Video()];
mediaList.forEach((media) => media.play());
