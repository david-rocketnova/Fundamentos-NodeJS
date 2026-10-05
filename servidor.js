const http = require('http');
const PORT = 3000;

const productos = [
    {id: 1, nombre: 'Mancuerna', precio: 12.99},
    {id: 2, nombre: 'Barra Zeta', precio: 22.99},
    {id: 3, nombre: 'Discos Barra', precio: 15.99},
    {id: 4, nombre: 'Soga 2 Metros', precio: 19.99},
    {id: 5, nombre: 'Creatina', precio: 12.99},
];

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;
    const searchParams = parsedUrl.searchParams;

    // --- RUTA: Búsqueda de productos por nombre (/buscar?nombre=...) ---
    if (req.method === 'GET' && pathname === '/buscar') {
        const nombreBusqueda = searchParams.get('nombre') || '';
        
        const resultados = productos.filter(p =>
            p.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase())
        );

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(resultados));
    } else {
        // Corregido: se eliminó el segundo bloque else duplicado
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('404 - Página no encontrada');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor en marcha en http://localhost:${PORT}`);
});