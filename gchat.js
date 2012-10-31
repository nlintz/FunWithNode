var argv = process.argv

var fs = require('fs');
var data = fs.readFileSync('./config.json'), myObj;
myObj = JSON.parse(data);
var username = myObj.username;
var password = myObj.password;

const xmpp = require('node-xmpp');
const sys = require('sys');
jid=username;
password=password;

var conn = new xmpp.Client({
    jid: jid,
    password: password,
    host: 'talk.google.com',
    port: 5222
});
conn.on('online',function(){
    sys.puts("ONLINE");
    conn.send(new xmpp.Element('presence'));
    conn.send(new xmpp.Element('message',
    {to: 'mlintz@gmail.com',
    type: 'chat'}).
    c('body').
    t('heeyyyy from node'));
    sys.puts("Status Set");
});
conn.on('error',function(e) {
    sys.puts(e);
});
