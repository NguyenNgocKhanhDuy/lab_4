var greetings = ["Xin chào", "Chào bạn", "Rất vui được gặp bạn", "Chào, hôm nay bạn khoẻ không", "Xin chào, rất vui được gặp bạn"]

function showGreetings(array) {
    return array[Math.floor(Math.random()*array.length)];
}

alert(showGreetings(greetings));