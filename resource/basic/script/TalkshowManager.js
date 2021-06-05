const TalkshowManager = class {
    constructor(audioManager) {
        this.audioManager = audioManager;
        this.ReadTalkshowData();
    }

    ReadTalkshowData() {
        $.getJSON("resource/talkshow/talkshow.json").then(data => {
            this.data = data;
            let num = Math.floor(Math.random() * 6);
            let ask = this.Play(this.data.music.shortie.ask[num], true);
            let countdown = this.Play(this.data.music.shortie.countdown[num], true);
            ask.play();
            $(window).one("click", () => {
                ask.stop();
                countdown.play();
            });
        });
    }

    Play(id, loop) {
        if (!id) return;
        switch (typeof id) {
            case "string":
            case "number":
                return this.audioManager.Play({
                    audio: `resource/talkshow/audio/${id}.mp3`,
                    loop
                });
                break;
            case "object":
                if (id.length) return this.Play(id[Math.floor(Math.random() * id.length)], loop);
                break;
        }
    }
};