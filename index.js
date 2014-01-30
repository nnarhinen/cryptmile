var simplesmtp = require('simplesmtp'),
    MailParser = require("mailparser").MailParser,
    mailparser = new MailParser({debug: false});

mailparser.on('end', function(mail) {
  console.log('inbound mail', mail);
});

simplesmtp.createSimpleServer({SMTPBanner:"My Server", debug: false}, function(req){
  req.pipe(mailparser);
  req.accept();
}).listen(2525);
