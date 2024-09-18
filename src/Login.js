import "./App.css";

function App() {
    return (
        <form action="/" method="GET" style={{margin: 20}}>
        <div style={{width: '100%'}}>
            <div style={{display: 'flex', width: '100%', margin: 4}}>
            <label style={{width: '30%'}} for="username">아이디: </label>
            <input style={{width: '70%'}} type="text" name="username" required></input>
            </div>
            <div style={{display: 'flex', width: '100%', margin: 4}}>
            <label style={{width: '30%'}} for="password">비밀번호: </label>
            <input style={{width: '70%'}} type="password" name="password" required></input>
            </div>
            <div style={{display: 'flex', width: '100%', gap: 4, margin: 4}}>
                <button type="submit" style={{width: '50%'}}>제출</button>
                <button type="reset" style={{width: '50%'}}>초기화</button>
            </div>
        </div>
        </form>
  );
}

export default App;
