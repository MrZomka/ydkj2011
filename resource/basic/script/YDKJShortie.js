const YDKJShortie = class extends YDKJQuestion {
    constructor(id) {
        super(id);
        this.hasPrize = this.GetField("nPrize").v > 0;
        if (this.hasPrize) Game.episode.LoadPrize();
    }
};