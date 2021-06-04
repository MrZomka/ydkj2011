const YDKJGame = class {
    constructor() {
        window.Game = this;

        this.wrapper = $("<div/>").addClass("wrapper").appendTo(document.body);
        this.resize();
        $(window).on("resize", () => this.resize());

        this.videoManager = new VideoManager();
        this.audioManager = new AudioManager();
        this.talkshowManager = new TalkshowManager(this.audioManager);

        /* this.videoManager.CreateVideo({
            video: "Q2_2",
            play: true,
            loop: true
        }); */

        //new YDKJQuestion("2670");
        //new YDKJEpisode("606");
        //new YDKJEpisode("535");
        //new YDKJEpisode("534");
        new YDKJEpisode("605");
    }

    resize() {
        const width = $(window).innerWidth();
        const height = $(window).innerHeight();
        this.wrapper.css({
            transform: `scale(${Math.min(width / 1280, height / 720)})`,
            top: height / 2 - 720 / 2,
            left: width / 2 - 1280 / 2
        });
    }
};