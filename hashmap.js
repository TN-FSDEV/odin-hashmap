class Node {
    constructor(key, value = null, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashMap {
    constructor(capacity, loadFactor) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.hashBuckets = new Array(capacity);
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode; // the modulo % inside loop guarantees it's within the capacity already
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.hashBuckets[index]) {
            this.hashBuckets[index] = new Node(key, value);
            return;
        }
        let currentEntry = this.hashBuckets[index];
        while (currentEntry) {
            if (currentEntry.key === key) {
                currentEntry.value = value;
                return;
            }
            if (!currentEntry.next) break;
            currentEntry = currentEntry.next;
        }
        currentEntry.next = new Node(key, value);


        //hashmap growth check
        if (this.length > (this.capacity * this.loadFactor)) {
            console.log("Hashmap overloaded. Expanding hashmap to length32.")
            this.capacity *= 2;
            const entries = this.entries;
            this.hashBuckets = new Array(this.capacity);
            for (let entry of entries) {
                this.set(entry[0], entry[1]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);

        let currentEntry = this.hashBuckets[index];
        while (currentEntry && currentEntry.key !== key) {
            currentEntry = currentEntry.nextNode;
        }
        if (currentEntry) return currentEntry.value;
        return null;
    }

    has(key) {
        const index = this.hash(key);

        let currentEntry = this.hashBuckets[index];
        while (currentEntry) {
            if (currentEntry.key === key) return true;
            currentEntry = currentEntry.next;
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        let current = this.hashBuckets[index];
        let prev = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.hashBuckets[index] = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    get length() {
        let length = 0;
        this.hashBuckets.forEach((bucket) => {
            if (bucket) {
                let currentEntry = bucket;
                length++;
                while (currentEntry.next) {
                    currentEntry = currentEntry.next;
                    length++;
                }
            }
        })
        return length;
    }

    clear() {
        this.hashBuckets = new Array(this.capacity);
    }

    get keys() {
        const totalKeys = [];
        this.hashBuckets.forEach((bucket) => {
            if (bucket) {
                let currentEntry = bucket;
                totalKeys.push(currentEntry.key);
                while (currentEntry.next) {
                    currentEntry = currentEntry.next;
                    totalKeys.push(currentEntry.key);
                }
            }
        })
        return totalKeys;
    }

    get values() {
        const totalVal = [];
        this.hashBuckets.forEach((bucket) => {
            if (bucket) {
                let currentEntry = bucket;
                totalVal.push(currentEntry.value);
                while (currentEntry.next) {
                    currentEntry = currentEntry.next;
                    totalVal.push(currentEntry.value);
                }
            }
        })
        return totalVal;
    }

    get entries() {
        const totalEntries = [];
        this.hashBuckets.forEach((bucket) => {
            if (bucket) {
                let currentEntry = bucket;
                totalEntries.push([currentEntry.key, currentEntry.value]);
                while (currentEntry.next) {
                    currentEntry = currentEntry.next;
                    totalEntries.push([currentEntry.key, currentEntry.value]);
                }
            }
        })
        return totalEntries;
    }
}

export { HashMap };