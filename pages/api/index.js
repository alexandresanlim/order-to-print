
export default (req, res) => {

  const text = req.query.text;


  var textHtml = "<html><head><meta charset='utf-8'><meta name='description' content='Uma nova descrição'><title>"+text+"</title></head> <body>"+text+"</body> </html>";

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html')
  res.send(textHtml)
}