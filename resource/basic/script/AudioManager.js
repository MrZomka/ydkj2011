const AudioManager = class {
    constructor() {

    }

    Play(options) {
        console.log(options);
        const audio = new Howl({
            src: [options.audio],
            volume: options.volume === null ? 1 : options.volume,
            loop: !!options.loop
        });
        return audio;
    }
};