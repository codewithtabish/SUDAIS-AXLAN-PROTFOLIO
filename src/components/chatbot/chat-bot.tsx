'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizonal, BotIcon, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { askBot } from '@/actions/chat-bot';
import Markdown from 'react-markdown';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([
    { from: 'bot', text: 'How can I assist you today?' },
  ]);
  const [isPending, startTransition] = useTransition();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { from: 'user', text: userMessage }]);
    setInput('');

    startTransition(async () => {
      const res = await askBot({ message: userMessage });

      if (res.success) {
        setMessages((prev) => [...prev, { from: 'bot', text: res.reply }]);
      } else if ('validationErrors' in res) {
        toast.error(res.validationErrors.join(', '));
      } else {
        toast.error((res as any).error);
        setMessages((prev) => [
          ...prev,
          { from: 'bot', text: 'Sorry, I couldn’t process that. Try again.' },
        ]);
      }
    });
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isPending]);

  return (
    <>
      {/* Floating Chat Icon */}
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 p-4 rounded-full shadow-xl bg-green-600 hover:bg-green-700 text-white"
      >
        <BotIcon className="h-6 w-6" />
      </Button>

      {/* Modal/Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[85vw] sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Chat with SudaisBot 🤖</DialogTitle>
          </DialogHeader>

          {/* Message history */}
          <div className="h-64 overflow-y-auto flex flex-col gap-3 border p-3 rounded-md bg-muted text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-md max-w-xs ${
                  msg.from === 'user'
                    ? 'bg-primary text-primary-foreground self-end'
                    : 'bg-accent text-accent-foreground self-start'
                }`}
              >
                <Markdown>{msg.text}</Markdown>
              </div>
            ))}

            {isPending && (
              <div className="self-start bg-accent text-accent-foreground px-3 py-2 rounded-md max-w-xs flex items-center gap-2">
                <Loader2 className="animate-spin h-4 w-4" /> Typing…
              </div>
            )}

            {/* Scroll anchor */}
            <div ref={bottomRef} />
          </div>

          {/* Input box */}
          <div className="flex items-center space-x-2 pt-2">
            <Input
              placeholder="Ask something about AI, ML, or projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isPending}
            />
            <Button onClick={handleSend} disabled={isPending || !input.trim()}>
              <SendHorizonal className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
