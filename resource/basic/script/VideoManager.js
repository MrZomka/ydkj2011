const VideoManager = class {
    constructor() {
        this.videoWrapper = $("<div/>").addClass("video-wrapper").appendTo(Game.wrapper);
    }

    CreateVideo(options) {
        const attributes = {};
        if (options.loop) attributes.loop = true;
        const video = $("<video/>").attr(attributes).css({ zIndex: options.layer || 1 }).append($("<source/>").attr({ src: `resource/basic/video/${options.video}.webm`, type: "video/webm" })).appendTo(this.videoWrapper);
        if (options.play) video[0].play();
        return video;
    }

    CreateVideoBackgroundTransition(videoName, backgroundName, layerAddition) {
        const video = this.CreateVideo({
            video: videoName,
            layer: 2 + (layerAddition || 0)
        });

        video.on("play", () => {
            this.currentVideo = video;

            if (this.currentBackground) this.currentBackground.remove();
            this.currentBackground = this.CreateVideo({
                video: backgroundName,
                layer: 1 + (layerAddition || 0),
                loop: true
            });
            video.on("ended", () => {
                video.remove();
                this.currentBackground[0].play();
                this.currentBackground.css({ zIndex: 6 });

                this.currentVideo = this.currentBackground;
            });
        });

        return video[0];
    }

    CreateSegue(segueId, backgroundId) {
        return this.CreateVideoBackgroundTransition(`Q${segueId}_1`, `Q${backgroundId || segueId}_2`, 2);
    }

    pause(doPause) {
        if (this.currentVideo) this.currentVideo[0][doPause ? "pause" : "play"]();
    }
};