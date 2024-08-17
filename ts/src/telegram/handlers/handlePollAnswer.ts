import { tg } from '../lib/methods';

export async function handlePollAnswer(pollAnswer: tgTypes.PollAnswer) {
    console.log(pollAnswer);
}
