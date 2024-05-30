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

export default function NewsletterInput() {
  return (
    <Card className='w-full'>
      <CardHeader className='pb-4'>
        <CardTitle>Tech Blog</CardTitle>
        <CardDescription>
          Get inspiring and useful insights direct in your mail
        </CardDescription>
      </CardHeader>
      <CardContent className='flex justify-between gap-4 mt-'>
        <Input
          type='email'
          placeholder='Email address'
          className='md:h-10 outline-none focus:border-red'
          required
        />
        <Button
          type='submit'
          variant='outline'
          className='h-9 rounded-md px-3 md:h-10 md:px-6 md:py-2'
        >
          Subscribe
          <MailPlus strokeWidth={1} className='ml-2 w-4 opacity-90' />
        </Button>
      </CardContent>
    </Card>
  );
}
