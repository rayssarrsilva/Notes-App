export function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromStorage(key) {
    const raw = localStorage.getItem(key);

    if (!raw) return [];

    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}