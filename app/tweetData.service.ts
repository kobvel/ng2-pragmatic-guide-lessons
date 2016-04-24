export class TweetDataService {
    public getTweets(): ITweet[] {

        return [
            {
                src: 'http://lorempixel.com/100/100/people/?1',
                title: 'First Tweet',
                likes: 123,
                body: 'Body1'
            }, {
                src: 'http://lorempixel.com/100/100/people/?2',
                title: 'Second Tweet',
                likes: 2,
                body: 'Body 2'
            }, {
                src: 'http://lorempixel.com/100/100/people/?4',
                title: 'Third Tweet',
                likes: 123,
                body: 'asdksadkdsa'
            }
        ];
    }
}
export interface ITweet {
    src: string;
    title: string;
    likes: number;
    body: string;
}

