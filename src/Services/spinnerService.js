class SpinnerService {
    constructor() {
        this._isLoading = false;
        this.listeners = new Set();
    }

    get isLoading() {
        return this._isLoading;
    }

    show() {
        this._isLoading = true;
        this.notifyListeners();
    }

    hide() {
        this._isLoading = false;
        this.notifyListeners();
    }

    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this._isLoading));
    }
}

export const spinnerService = new SpinnerService();
