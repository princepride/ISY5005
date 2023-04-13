import React, { useState,useRef,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { send_message } from '../utils/connectSQLite.js';

const ChatButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

const ChatBox = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(10),
  right: theme.spacing(2),
  width: 300,
  height: 'calc(100% - 240px)', // 设置聊天框高度为屏幕高度的2/3
  maxHeight: 'calc(100% - 240px)', // 设置聊天框最大高度为屏幕高度的2/3
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  zIndex: 9999,
}));

const ChatHistory = styled('div')(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  padding: theme.spacing(1),
}));

const ChatInput = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  height: 60, // 设置输入框和发送按钮的高度
}));

const ChatInputField = styled(TextField)({
  flex: 1,
});

const ChatSendButton = styled(Button)({
  marginLeft: 8,
});

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatHistoryRef = useRef(null);

  const handleToggleChat = () => {
    setOpen(!open);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, sender: 'user' },
      ]);
      setNewMessage('');
      send_message(newMessage)
        .then((response) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: response.message, sender: 'server' },
          ]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <ChatButton
        variant="contained"
        color="primary"
        onClick={handleToggleChat}
      >
        Chat
      </ChatButton>
      {open && (
        <ChatBox elevation={3}>
          <ChatHistory ref={chatHistoryRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent:
                    message.sender === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: 8,
                }}
              >
                <Paper
                  style={{
                    padding: 8,
                    borderRadius: 16,
                    maxWidth: '70%',
                    fontSize: '16px',
                    wordWrap: 'break-word',
                    lineHeight: '1em',
                    backgroundColor:
                      message.sender === 'user' ? '#7fbfff' : '#f0f0f0',
                  }}
                >
                  {message.text}
                </Paper>
              </div>
            ))}
          </ChatHistory>
          <ChatInput>
            <ChatInputField
              label="Type your message"
              variant="outlined"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <ChatSendButton
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
            >
              <SendIcon />
            </ChatSendButton>
          </ChatInput>
        </ChatBox>
      )}

    </>
  );
                }
  export default Chat;