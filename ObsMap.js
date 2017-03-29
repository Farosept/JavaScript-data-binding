"use strict";
class ObservableMap extends Map {
    constructor() {
        super();
        this.listeners = [];
    }
    subscribe(callback) {
        this.listeners.push(callback)
        return () => this.listeners = this.listeners.filter(c => c != callback);
    }
    set(key, value) {
        super.set(key, value)
        this.listeners.forEach(listener => listener(key, value))

    }
    get(key) {
        return super.get(key);
    }
}