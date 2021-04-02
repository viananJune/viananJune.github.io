(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{571:function(s,t,n){"use strict";n.r(t);var a=n(5),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"tcp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[s._v("#")]),s._v(" TCP")]),s._v(" "),n("p",[s._v("传输控制协议（TCP，Transmission Control Protocol）是一种面向连接的、可靠的、基于字节流的传输层通信协议，由IETF的"),n("a",{attrs:{href:"https://www.rfc-editor.org/rfc/rfc793.txt",target:"_blank",rel:"noopener noreferrer"}},[s._v("RFC 793"),n("OutboundLink")],1),s._v(" [1]  定义。")]),s._v(" "),n("h2",{attrs:{id:"tcp-header-format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tcp-header-format"}},[s._v("#")]),s._v(" TCP Header Format")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("0                   1                   2                   3   \n    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 \n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |          Source Port          |       Destination Port        |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                        Sequence Number                        |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                    Acknowledgment Number                      |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |  Data |           |U|A|P|R|S|F|                               |\n   | Offset| Reserved  |R|C|S|S|Y|I|            Window             |\n   |       |           |G|K|H|T|N|N|                               |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |           Checksum            |         Urgent Pointer        |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                    Options                    |    Padding    |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                             data                              |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n                            \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("我们从表头可以看出，有源端口、目标端口、序列码、确认码、状态位，检查码等。")]),s._v(" "),n("p",[s._v("我们常说的3次握手，4次回收里面的SYN、ACK、FIN就是状态位，1就是启用，0就是不涉及。")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("URG")]),s._v("标志，表示紧急指针是否有效")]),s._v(" "),n("li",[n("strong",[s._v("ACK")]),s._v("标志，表示确认号是否有效。称携带ACK标志的tcp报文段位确认报文段")]),s._v(" "),n("li",[n("strong",[s._v("PSH")]),s._v("标志，提示接收端应用程序应该立即从tcp接受缓冲区中读走数据，为接受后续数据腾出空间（如果应用程序不将接收的数据读走，它们就会一直停留在tcp缓冲区中）")]),s._v(" "),n("li",[n("strong",[s._v("RST")]),s._v("标志，表示要求对方重新建立连接。携带RST标志的tcp报文段为复位报文段。")]),s._v(" "),n("li",[n("strong",[s._v("SYN")]),s._v("标志，表示请求建立一个连接。携带SYN标志的tcp报文段为同步报文段。")]),s._v(" "),n("li",[n("strong",[s._v("FIN")]),s._v("标志，表示通知对方本端要关闭连接了。携带FIN标志的tcp报文段为结束报文段。")])]),s._v(" "),n("p",[s._v("然后生成的随机数传来传去的，就是序列码和确认码，一般 "),n("em",[s._v("确认码=序列码+1")])]),s._v(" "),n("h1",{attrs:{id:"udp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[s._v("#")]),s._v(" UDP")]),s._v(" "),n("h1",{attrs:{id:"比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[s._v("#")]),s._v(" 比较")])])}),[],!1,null,null,null);t.default=r.exports}}]);