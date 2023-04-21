const io = require("socket.io")(3003, { //socket.io를 가져온다
    cors: {
      origin: "*",  //특성사용자에게만 데이터를 주고받겠다 (*) -> 모든사용자
      methods: ["GET", "POST"], //  get,post 메소드만 허용해준다.
    },
  });

  // 열린 소켓에서 특정사용자가 접근을 한다면
  io.on("connection", (socket) => { 
    // 1. 해당 메세지 출력
    console.log("새로운 소켓이 연결됐어요!");
    // customEventName라는 이름의 이벤트이름으로 "this ~ data"라는 데이터를 브라우저에게 전달하겠다.
    socket.emit("customEventName", "this is custom event data");
    
    // 2. 사용자가 서버에 message를 보낸다 했을때 그 message data를  콘솔에 출력
    socket.on("message", (data) => {
      console.log(data);
    });
  });