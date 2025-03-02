import '../css/chat.css';

function NewMessage(){
    return(
        <div className="newMessage">
                <h1>Select a message</h1>
                <div>
                    <p>Choose from your existing chats.</p>
                    <p>Or create a new chat.</p>
                </div>
                <button>New message</button>
            </div>
    )
}
export default NewMessage