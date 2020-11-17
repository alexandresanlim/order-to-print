
export default (req, res) => {

  const body = req.query.body;
  const title = req.query.title;
  const number = req.query.number;
  const total = req.query.total;


  var textHtml = "<html>"+
  "<head><meta charset='utf-8'><meta name='"+body+"' content='"+body+"'><title>"+title+"</title></head> "+
  "<body>"+
    " <b>"+title+"</b> <br/>"+
    "............................................. <br/>"+
    "Number: "+number+" <br/>"+
    "............................................. <br/>"+
    " "+body+" <br/>"+
    "............................................. <br/>"+
    "TOTAL: "+total+" "+
  "</body>"+
  "</html>";

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html')
  res.send(textHtml)
}