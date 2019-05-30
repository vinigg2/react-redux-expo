const app = {
    URL_API: 'http://189.85.76.68:3005',
};

if (__DEV__) {
    app.HOST_IP = 'localhost';
    app.URL_API = `http://${app.HOST_IP}:3005`;
}

export default app;
