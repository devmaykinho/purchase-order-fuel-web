const execAsync = require('child_process').execSync;

const tagName = process.argv[2] || 'latest';
execAsync(`docker tag b2b-frontend:latest ${tagName}`);
