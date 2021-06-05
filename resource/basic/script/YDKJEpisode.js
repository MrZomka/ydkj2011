const YDKJEpisode = class extends TalkshowContent {
    constructor(id) {
        super(id, "episode");
    }

    LoadResources() {
        super.LoadResources();
        this.sponsorLogo = $("<img/>").attr("src", `${this.GetContentPath()}/${this.GetField("gLogo").id}.svg`);
        //this.LoadPrize();
    }

    LoadPrize() {
        this.prizeImage = $("<div/>").addClass("prize-image").css({
            backgroundImage: `url(${this.GetContentPath()}/prize.png)`,
            backgroundSize: `100% ${this.data.prizeFrameCount * 100}%`
        });
        Game.wrapper.append(this.prizeImage);
        //this.PlayPrize();
    }

    PlayPrize() {
        this.prizeAnimation = anime({
            targets: this.prizeImage[0],
            backgroundPosition: ["0% 0%", `0% ${(this.data.prizeFrameCount - 1) * 100}%`],
            duration: 1500,
            easing: `steps(${this.data.prizeFrameCount - 1})`,
            loop: true
        });
    }

    StopPrize() {
        this.prizeAnimation.pause();
        this.prizeImage.remove();
    }

    GetQuestionForIndex(index) {
        const id = this.GetField("tQuestions").split(",")[index];
        switch (this.GetField("tTypes").split(",")[index]) {
            case "S":
                return new YDKJShortie(id);
        }
    }
};