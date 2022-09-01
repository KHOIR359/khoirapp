export class TabunganDB {
  constructor() {
    const request = indexedDB.open("Khoirapp");
    request.onupgradeneeded = () => {
      // The database did not previously exist, so create object stores and indexes.
      console.log('The database is opened successfully');
      this.db = request.result;

      this.savingsStore = this.db.createObjectStore("savings", { keyPath: "v" });
      const typeIndex = this.savingsStore.createIndex("by_type", "type");
      const dateIndex = this.savingsStore.createIndex("by_date", "date");
      const noIndex = this.savingsStore.createIndex("by_no", "no");
      const descIndex = this.savingsStore.createIndex("by_desc", "desc");


      this.Store = this.db.createObjectStore("savings", { keyPath: "v" });

      // Populate with initial data.
    };

    request.onsuccess = (event) => {
      console.log(event);
      console.log(request.result);
      this.db = request.result;
      console.log('onsuccess db: ', this.db);
      this.tx = this.db.transaction("savings", "readwrite");
      console.log('onsuccess tx: ', this.tx);
      this.store = this.tx.objectStore("savings")
      console.log('onsuccess store: ', this.store);
    }
  }

  addData(table, data) {
    console.log("this.db: ", this.db)
    const tx = this.db.transaction(table, "readwrite");
    const store = tx.objectStore(table);
    store.put(data)
  }

  getData(table,filter, cb) {
    const tx = this.db.transaction(table, "readonly");
    const store = tx.objectStore(table);
    let index = store.index(filter.key);
    const request = index.get(filter.value);
    return cb(request);
  }
}