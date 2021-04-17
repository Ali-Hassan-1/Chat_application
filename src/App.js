import { ChatEngine } from "react-chat-engine"; // ChatEngine is a Component

// import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="190b2710-626b-461c-8d49-ed9cd5be394e" // I also save it environement variable
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      // renderChatFeed={(chatAppProps) => console.log(chatAppProps.messages)}
    />
  );
};

export default App;
