import React, { useState } from 'react';
import { MessageSquare, Send, Paperclip, Search, UserCheck, Plus, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const SecureMessagesSection = () => {
  const [selectedChat, setSelectedChat] = useState('1');
  const [newMessage, setNewMessage] = useState('');
  const [isNewMessageOpen, setIsNewMessageOpen] = useState(false);
  const [newMessageRecipient, setNewMessageRecipient] = useState('');
  const [newMessageSubject, setNewMessageSubject] = useState('');
  const [newMessageContent, setNewMessageContent] = useState('');

  const handleSendNewMessage = () => {
    console.log('Sending new message:', {
      recipient: newMessageRecipient,
      subject: newMessageSubject,
      content: newMessageContent
    });
    
    // Reset form and close modal
    setNewMessageRecipient('');
    setNewMessageSubject('');
    setNewMessageContent('');
    setIsNewMessageOpen(false);
    
    // Here you would typically send the message to your backend
    alert('Message sent successfully!');
  };

  const conversations = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      role: 'Healthcare Provider',
      lastMessage: 'Your test results are ready for review',
      timestamp: '2 hours ago',
      unread: 2,
      online: true
    },
    {
      id: '2',
      name: 'Estate Planning Team',
      role: 'Legal Advisors',
      lastMessage: 'Document revisions completed',
      timestamp: '1 day ago',
      unread: 0,
      online: false
    },
    {
      id: '3',
      name: 'Financial Advisor',
      role: 'Investment Consultant',
      lastMessage: 'Portfolio review scheduled',
      timestamp: '2 days ago',
      unread: 1,
      online: true
    }
  ];

  const messages = [
    {
      id: '1',
      sender: 'Dr. Sarah Johnson',
      content: 'Your test results are ready for review. Everything looks normal, but I\'d like to schedule a follow-up appointment.',
      timestamp: '2:30 PM',
      isOwn: false
    },
    {
      id: '2',
      sender: 'You',
      content: 'Thank you for the update. When would be a good time for the follow-up?',
      timestamp: '2:35 PM',
      isOwn: true
    },
    {
      id: '3',
      sender: 'Dr. Sarah Johnson',
      content: 'How about next Tuesday at 10 AM? I can share the detailed results then.',
      timestamp: '2:40 PM',
      isOwn: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Secure Messages</h1>
          <p className="text-gray-600 mt-2">Communicate securely with your trusted contacts</p>
        </div>
        <Dialog open={isNewMessageOpen} onOpenChange={setIsNewMessageOpen}>
          <DialogTrigger asChild>
            <Button>
              <MessageSquare className="h-4 w-4 mr-2" />
              New Message
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>New Secure Message</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Recipient
                </label>
                <Input
                  placeholder="Select recipient..."
                  value={newMessageRecipient}
                  onChange={(e) => setNewMessageRecipient(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Subject
                </label>
                <Input
                  placeholder="Enter subject..."
                  value={newMessageSubject}
                  onChange={(e) => setNewMessageSubject(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Type your secure message..."
                  value={newMessageContent}
                  onChange={(e) => setNewMessageContent(e.target.value)}
                  rows={4}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsNewMessageOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSendNewMessage}
                  disabled={!newMessageRecipient || !newMessageContent}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`w-full p-4 text-left border-b hover:bg-gray-50 ${
                    selectedChat === conv.id ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <UserCheck className="h-5 w-5 text-blue-600" />
                        </div>
                        {conv.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{conv.name}</h4>
                        <p className="text-sm text-gray-600">{conv.role}</p>
                      </div>
                    </div>
                    {conv.unread > 0 && (
                      <div className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                        {conv.unread}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-2 truncate">{conv.lastMessage}</p>
                  <p className="text-xs text-gray-500 mt-1">{conv.timestamp}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Dr. Sarah Johnson</h3>
                <p className="text-sm text-gray-600">Healthcare Provider • Online</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col h-full">
            <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isOwn
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.isOwn ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-end space-x-2">
              <Button variant="outline" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Textarea
                placeholder="Type your secure message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
                rows={2}
              />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
