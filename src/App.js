import './App.css';
import React, {useEffect, useState } from 'react';
import { Amplify , API, graphqlOperation} from 'aws-amplify';
import awsmobile from './aws-exports';
import * as subscriptions from './graphql/subscriptions';
import * as mutations from './graphql/mutations';

Amplify.configure(awsmobile);

function App() {
    const [channel, setChannel] = useState("channel2");
    const [message, setMessage] = useState("");
    const [received, setReceived] = useState([]);
    let messages = [];

    const sendMessage = async() => {
        let jsonData="{\"msg\": \"" + message + "\"}"
        const publish = await API.graphql(
            graphqlOperation(mutations.publish, { name: channel , data : jsonData })
        );
        setMessage("");
    }

    useEffect(()=>{
        //Subscribe channel
        const subscription = API.graphql(
            graphqlOperation(subscriptions.subscribe, { name : channel}))
        .subscribe({
            next: ({provider, value})=>{
                setReceived((prevArray)=> [
                    ...prevArray,
                    {
                        name: value.data.subscribe.name,
                        data: value.data.subscribe.data
                    }
                ]);
            },
            error: (error) => console.warm(error),
        });
        return ()=> subscription.unsubscribe();
    },[channel]);
   

    if (received) {
        messages.push(received);
        messages = [].concat(received).map((msg, i) => (
            <div>
               <div >
                <span>{msg.name}</span>
              </div>
              <div>
                <span>{msg.data}</span>
              </div>
            </div>
        ));
    }

    return (
        <div className="App">
            <header className="App-header">
                <form >
                    <p>Send/Push JSON to channel "{channel}"</p>
                    <div>
                        <textarea 
                            defaultValue={message}
                            onChange={(e)=>{setMessage(e.target.value) }}>
                        </textarea>
                        <br />
                        <input type="button" value="Submit"  onClick={()=>{sendMessage()}}/>
                    </div>
                    <div>
                    <p>Messages received in "{channel}"</p>
                        {messages}
                    </div>
                </form>
            </header>
        </div>
    )
}

export default App