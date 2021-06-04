const TalkshowContent = class {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.logger = new Logger(this);
        this.LoadData();
    }

    GetContentPath() {
        return `resource/content/${this.type}/${this.id}`;
    }

    LoadData() {
        fetch(`${this.GetContentPath()}/data.json`)
            .then(r => r.json())
            .then(data => {
                this.logger.log(`Loaded data for ${this.type} ${this.id}`);
                this.data = data;
                this.logger.log(this.data.fields);
                this.LoadResources();
            });
    }

    GetField(name) {
        return this.data.fields.find(f => f.n == name) || {};
    }

    GetAudioPath(id) {
        return `${this.GetContentPath()}/${id}.mp3`;
    }

    LoadResources() {
        this.data.fields
            .filter(f => f.t == "A" && f.id > -1)
            .forEach(f => {
                f.audio = Game.audioManager.Play({
                    audio: this.GetAudioPath(f.id)
                });
                f.audio.on("load", () => this.logger.log(`Loaded audio ${f.id}`));
            });
    }
};