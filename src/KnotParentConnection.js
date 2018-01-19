const MeshbluSocketIO = require('meshblu');
//const MeshbluFirehoseSocketIO = require('meshblu-firehose-socket.io');

module.exports.knotParentConnection = (config) => {

  /*let firehose = new MeshbluFirehoseSocketIO({
    meshbluConfig: {
      hostname: '127.0.0.1',
      port: '3080',
      protocol: 'ws',
      uuid: '158c2eaf-425e-4c40-ae81-5602b8d3b0f8',
      token: '44ddb73c2dba7112bfdf1bbb39483c121c2bb42a'
    }
  });

  firehose.on('connect', () => {
    console.log('connection established...');
  });

  firehose.on('disconnect', () => {
    console.log('connection closed...');
  });

  firehose.connect(); */

  const meshblu = new MeshbluSocketIO({
    resolveSrv: false,
    protocol: 'ws',
    hostname: 'localhost',
    port: 5000,
    uuid: '158c2eaf-425e-4c40-ae81-5602b8d3b0f8',
    token: '44ddb73c2dba7112bfdf1bbb39483c121c2bb42a'
  });

  meshblu.on('ready', () => {
    console.log('Connection Established...');
  });

  meshblu.connect();

}