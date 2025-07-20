
console.log("Hello, Node.js!");
console.log("Node.js version:", process.version);
console.log("Current directory:", process.cwd());
//acrescentado mais alguma linhas de código

// Mostra o sistema operacional
console.log("Platform:", process.platform);

// Mostra a arquitetura do processador
console.log("Architecture:", process.arch);

// Mostra a hora atual
console.log("Current time:", new Date().toLocaleString());

// Mostra informações do ambiente
console.log("Environment variables:", process.env);

// Mostra o tempo que o script levou pra rodar (uptime)
console.log("Uptime:", process.uptime(), "segundos");