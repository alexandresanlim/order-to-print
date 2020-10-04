
export default (req, res) => {

  const text = req.query.text;

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html')
  res.send('<h1>'+text+'</h1>')
}