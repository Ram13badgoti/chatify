import {createContext,useContext,useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
const  ChatContext = createContext();


const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    if (!userInfo) navigate("/", {replace: true});
  }, [navigate]);

  return (
    <h1>hello</h1>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;