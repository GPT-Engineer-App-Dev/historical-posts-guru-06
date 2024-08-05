import { useState } from 'react';
import { Plus, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [historicalPosts, setHistoricalPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedPost, setGeneratedPost] = useState('');

  const addHistoricalPost = () => {
    if (newPost.trim()) {
      setHistoricalPosts([...historicalPosts, newPost]);
      setNewPost('');
    }
  };

  const generatePost = () => {
    // This is where you'd typically make an API call to your backend
    // For now, we'll just set a placeholder response
    setGeneratedPost(`Here's a generated post about "${prompt}" based on your historical posts...`);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Historical Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {historicalPosts.map((post, index) => (
                <div key={index} className="p-4 bg-white rounded shadow">{post}</div>
              ))}
            </div>
            <div className="mt-4 flex space-x-2">
              <Input
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Add a new historical post"
              />
              <Button onClick={addHistoricalPost}><Plus className="h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generate New Post</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Write a post about..."
              />
              <Button onClick={generatePost} className="w-full"><Send className="h-4 w-4 mr-2" /> Generate</Button>
              <Textarea
                value={generatedPost}
                readOnly
                placeholder="Generated post will appear here..."
                className="h-40"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
