'use client';
import { useState } from 'react';
import { MailPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BorderBeam } from './ui/border-beam';
import { EvervaultCard } from './ui/evervault-card';

export default function NewsletterInput() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/newsletter-welcome', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Subscribed successfully');
        setSuccess(true);
        setEmail(''); // Reset the email input
      } else {
        const error = await response.json();
        setError(
          error.contactError.message ||
            'Something went wrong. Please try again.'
        );
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className='w-full relative'>
      <CardHeader className='pb-4'>
        <CardTitle>Tech Blog</CardTitle>
        <CardDescription>
          Get useful insights direct in your mail
        </CardDescription>
      </CardHeader>
      <CardContent className='flex justify-between gap-4 z-50'>
        <form onSubmit={handleSubmit} className='flex gap-4 w-full z-50'>
          <Input
            type='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='md:h-10 outline-none focus:border-red'
            required
            disabled={loading}
          />
          <Button
            type='submit'
            disabled={loading || !email}
            className='h-9 rounded-md border-ring px-3 md:h-10 md:px-6 md:py-2'
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
            <MailPlus strokeWidth={1} className='ml-2 w-4 opacity-90' />
          </Button>
        </form>
      </CardContent>
      {error && <p className='text-red-500 mx-4 mb-2'>{error}</p>}
      {success && (
        <p className='text-green-500 mx-4 mb-2'>Subscription successful!</p>
      )}
      <BorderBeam />
    </Card>
  );
}
