const MeshbluSocketIO = require('meshblu');

let parentInstance = null;

class ParentConnection {
	constructor(config) {
		if(!parentInstance) {
			this.connection = new MeshbluSocketIO({
		    resolveSrv: false,
		    protocol: 'ws',
		    hostname: 'localhost' || config.parentConnection.hostname,
		    port: 5000 || config.parentConnection.port,
		    uuid: '158c2eaf-425e-4c40-ae81-5602b8d3b0f8' || config.parentConnection.uuid,
		    token: '44ddb73c2dba7112bfdf1bbb39483c121c2bb42a' || config.parentConnection.token
		  });

			parentInstance = this;
		}

		return parentInstance;
	}

	startConnection() {
		console.log('Starting parent connection...');

		this.connection.on('ready', () => {
			console.log('Connection established!');
		})

		this.connection.on('notReady', () => {
			console.log('Connection failed!');
		});

		this.connection.connect();
	}

	getConnection() {
		if(this.connection) {
			return connection;
		}

		return null;
	}

	forwardMessageToCloud() {
		//this method will forward all the messages that arrives fog to the cloud
		// this.connection.message({

		// });
	}

	receiveMessageFromCloud() {
		//
	}
}

export default ParentConnection;