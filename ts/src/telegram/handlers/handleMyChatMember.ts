import { tg } from '../lib/methods';

export async function handleMyChatMember(myChatMember: tgTypes.ChatMemberUpdated) {
    console.log(myChatMember);
}
