const pendingObjectStoreName = `pending`;

const request = indexedDB.open(`budget`, 2);

request.onsuccess = event => {
    console.log(`Success! ${event.type}`);
    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onupgradeneeded = event => {
    const db = request.result;
    console.log(event);

    if (!db.objectStoreNames.contains(pendingObjectStoreName)) {
        db.createObjectStore(pendingObjectStoreName, { autoIncrement: true });
    }
};

