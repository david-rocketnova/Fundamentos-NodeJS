const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.end('Página de inicio');
            break;
        case '/usuarios':
            res.statusCode = 200;
            res.end('Listado de usuarios');
            break;
        case '/productos':
            res.statusCode = 200;
            res.end('Catálogo de productos');
            break;  
        case '/contacto':
            res.statusCode = 200;
            res.end('Sección de contacto');
            break;
        default:
            res.statusCode = 404;
            res.end('Página no encontrada');
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Servidor con rutas ejecutándose en http://localhost:${PORT}`);
});