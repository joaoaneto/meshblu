const MeshbluSocketIO = require('meshblu');

let parentInstance = null;

class ParentConnection {
	constructor(config) {
		console.log(`Working with the ${config.type} instance.`);
		if(!parentInstance) {
			this.connection = new MeshbluSocketIO({
		    resolveSrv: false,
		    protocol: 'ws',
		    hostname: config.parentConnection.server || '',
		    port: config.parentConnection.port || 5000,
		    uuid: config.parentConnection.uuid || '',
		    token: config.parentConnection.token || ''
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
			return this.connection;
		}

		return null;
	}
	
}

exports.ParentConnection = ParentConnection;
