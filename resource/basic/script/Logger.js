const Logger = class {
    constructor(tag) {
        if (typeof tag == "object") this.tag = tag.constructor.name;
        else this.tag = tag;
    }

    log(...e) {
        console.log(`[${this.tag}]`, ...e);
    }

    warn(...e) {
        console.warn(`[${this.tag}]`, ...e);
    }

    error(...e) {
        console.error(`[${this.tag}]`, ...e);
    }
};