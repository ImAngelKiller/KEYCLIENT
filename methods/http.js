const autocannon = require('autocannon')

async function run(target, payload, threads, duration) {
  autocannon({
    url: target + "/?" + payload,
    connections: 10000,
    pipelining: 20,
    duration: duration,
    workers: threads
  })
}

module.exports = run