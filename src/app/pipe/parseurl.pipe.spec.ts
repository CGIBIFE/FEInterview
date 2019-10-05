import { ParseurlPipe } from './parseurl.pipe';

describe('ParseurlPipe', () => {
  it('create an instance', () => {
    const pipe = new ParseurlPipe();
    expect(pipe).toBeTruthy();
  });

  it('should parse the url correcly', () => {
    const pipe = new ParseurlPipe();
    const text = 'improve your sleep 💤 https://t.co/9kGyxtmzWa https://t.co/ulnP9FkpLS';
    const conertedText = pipe.transform(text);
    expect(conertedText).not.toBeNull();
});
});
