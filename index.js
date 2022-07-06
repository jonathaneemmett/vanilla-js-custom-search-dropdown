const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 3000;
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(connectLiveReload());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static('index.html'));

app.listen(PORT, () => {
    console.log(`Server listening on port: ${ PORT }`)
});
