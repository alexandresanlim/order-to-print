
export default (req, res) => {

  const text = req.query.text;


  var textHtml = 
  "<html><title>Novo Pedido!</title> <body>"+text+"</body> </html>"

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html')
  res.send(textHtml)
}