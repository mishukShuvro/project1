import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:5173",
    },
});

io.listen(3079);

io.on("connection", (socket) => {
    console.log("user connected");

    socket.emit("hello");

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});
