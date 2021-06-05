const OpeningState = class {
    constructor() {
        this.CreateEgg();
    }

    CreateEgg() {
        this.egg = $("<div/>").addClass("opening-egg").appendTo(Game.wrapper);
        this.eggBack1 = $("<img/>").addClass("opening-egg-back-1").appendTo(this.egg);
        this.eggBack2 = $("<img/>").addClass("opening-egg-back-2").appendTo(this.egg);
        this.EggEnter();
    }

    EggEnter() {

    }

    /* NextEggFrame() {
        if (this.eggFrame < this.eggFrames.length) {
            let xTranslation = -520;
            switch (this.eggFrame) {
                case 14:
                    this.egg.addClass("opening-egg-2");
                    break;
                case 40:
                    this.egg.removeClass("opening-egg-2");
                    $(Game.episode.sponsorLogo).addClass("opening-egg-sponsor").appendTo(this.egg);
                    this.eggBack1.css("opacity", 0);
                    this.eggBack2.css("opacity", 1);
                    break;
                case 36:
                    xTranslation -= 10;
                    break;
                case 37:
                    xTranslation -= 38;
                    break;
                case 38:
                    xTranslation -= 85;
                    break;
                case 39:
                    xTranslation -= 150;
                    break;
            }
            this.egg.css("transform", `translate(${xTranslation}px, 490px) matrix(${this.eggFrames[this.eggFrame].join(", ")})`);
            this.eggFrame++;
            if (this.eggFrame != 36 && this.eggFrame != 44) setTimeout(() => this.NextEggFrame(), 35);
        }
        //14
        //40

        //at 36 it starts turning
    } */
};