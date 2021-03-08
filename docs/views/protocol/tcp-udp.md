---
title: TCP/UDP
date: 2021-03-06 11:00:00
tags:
 - tcp
 - udp
categories:
 - protocol
---

# TCP
传输控制协议（TCP，Transmission Control Protocol）是一种面向连接的、可靠的、基于字节流的传输层通信协议，由IETF的[RFC 793](https://www.rfc-editor.org/rfc/rfc793.txt) [1]  定义。


## TCP Header Format
``` 
0                   1                   2                   3   
    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |          Source Port          |       Destination Port        |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                        Sequence Number                        |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                    Acknowledgment Number                      |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |  Data |           |U|A|P|R|S|F|                               |
   | Offset| Reserved  |R|C|S|S|Y|I|            Window             |
   |       |           |G|K|H|T|N|N|                               |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |           Checksum            |         Urgent Pointer        |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                    Options                    |    Padding    |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                             data                              |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

                            
```
我们从表头可以看出，有源端口、目标端口、序列码、确认码、状态位，检查码等。

我们常说的3次握手，4次回收里面的SYN、ACK、FIN就是状态位，1就是启用，0就是不涉及。
* **URG**标志，表示紧急指针是否有效
* **ACK**标志，表示确认号是否有效。称携带ACK标志的tcp报文段位确认报文段
* **PSH**标志，提示接收端应用程序应该立即从tcp接受缓冲区中读走数据，为接受后续数据腾出空间（如果应用程序不将接收的数据读走，它们就会一直停留在tcp缓冲区中）
* **RST**标志，表示要求对方重新建立连接。携带RST标志的tcp报文段为复位报文段。
* **SYN**标志，表示请求建立一个连接。携带SYN标志的tcp报文段为同步报文段。
* **FIN**标志，表示通知对方本端要关闭连接了。携带FIN标志的tcp报文段为结束报文段。

然后生成的随机数传来传去的，就是序列码和确认码，一般 *确认码=序列码+1*


# UDP
 
# 比较