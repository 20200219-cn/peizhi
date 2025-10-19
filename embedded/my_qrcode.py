import qrcode

url = "https://20200219-cn.github.io/peizhi/index.html"
img = qrcode.make(url)
img.save("website_qr.png")
