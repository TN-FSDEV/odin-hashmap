class HashSet {
    constructor(capacity, loadFactor) {
        this.map = new HashMap(capacity, loadFactor);
    }
    add(key) {
        this.map.set(key);
    }

    has(key) {
        return this.map.has(key);
    }

    remove(key) {
        return this.map.remove(key);
    }

    clear() {
        this.map.clear();
    }

    get size() {
        return this.map.length;
    }

    get keys() {
        return this.map.keys;
    }
}

export { HashSet };