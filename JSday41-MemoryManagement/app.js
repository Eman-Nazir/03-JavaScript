
    const logDiv = document.getElementById("log");
    const memoryStore = { activeObjects: [] };
    let leakyArray = [];

    function log(message) {
      const time = new Date().toLocaleTimeString();
      logDiv.innerHTML += `[${time}] ${message}<br>`;
      logDiv.scrollTop = logDiv.scrollHeight;
    }

    function createObjects(count = 1000) {
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push({ id: i, name: "Object " + i, data: new Array(100).fill(i) });
      }
      memoryStore.activeObjects.push(...arr);
      log(` Created ${count} objects. Total stored: ${memoryStore.activeObjects.length}`);
    }


    function createMemoryLeak() {
      const temp = new Array(10000).fill("leak");
      leakyArray.push(temp);
      log(` Memory leak created! leakyArray length: ${leakyArray.length}`);
    }

   
    function cleanMemory() {
      memoryStore.activeObjects = [];
      leakyArray = [];
      log(" Memory cleaned. References removed.");
    }


    async function simulateWorkload() {
      log(" Simulation started...");
      for (let i = 0; i < 10; i++) {
        createObjects(500);
        await wait(500); 
        if (i % 2 === 0) createMemoryLeak(); 
        if (i % 3 === 0) cleanMemory(); 

      }
      log(" Simulation finished. Some memory may remain leaked.");
    }

    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }




   
    document.getElementById("create").addEventListener("click", () => createObjects());
    document.getElementById("leak").addEventListener("click", createMemoryLeak);
    document.getElementById("clean").addEventListener("click", cleanMemory);
    document.getElementById("simulate").addEventListener("click", simulateWorkload);
