import { MailPlus } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';

export default function NewsletterInput() {
  return (
    <Card className='border p-4  w-[324px] sm:w-m-[580px] md:w-[610px] flex items-center justify-between gap-2'>
      <Input
        type='email'
        // simplify and creative the placeholder text
        placeholder="Email address"
        // placeholder='Get latest blog posts in your inbox'
        className='h-10 outline-none focus:border-red'
      />
      <Button
        type='submit'
        variant='outline'
      >
        Subscribe
        <MailPlus strokeWidth={1} className='ml-2 w-4 opacity-90' />
      </Button>
    </Card>
  );
}
