// io.use((socket, next) => {
//     if (socket.handshake.query && socket.handshake.query.token) {
//       jwt.verify(socket.handshake.query.token, 'secretcode', (err, decoded) => {
//         if (err) return next(new Error('Authentication error'));
//         socket.decoded = decoded;
//         next();
//       });
//     } else {
//       next(new Error('Authentication error'));
//     }
//   });