const nt = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => nt('ready')(client));
  client.on('message', nt('message'));
};
