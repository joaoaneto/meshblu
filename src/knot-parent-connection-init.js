import ParentConnection from './knot-parent-connection';
const config = require('./../config');

const kParentConnection = new ParentConnection(config);

kParentConnection.startConnection();
