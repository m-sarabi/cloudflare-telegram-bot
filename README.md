# Cloudflare Telegram Bot Template

![GitHub repo size](https://img.shields.io/github/repo-size/m-sarabi/cloudflare-telegram-bot)

This repository provides an easy-to-use, fully documented template for building Telegram bots using Cloudflare Workers, written in TypeScript.
It is designed to balance staying as close as possible to the Telegram Bot API while providing ease of use and effortless deployment of serverless Telegram bots on the Cloudflare platform.

## Step by step guide

### Create a new worker using this template

1. Install `wrangler` by running `npm install wrangler`
   
> [!NOTE]
> If you need to install **npm**, download and install **node.js** from [nodejs.org](https://nodejs.org/en)
2. Go to a directory that you want your worker files to be in and run `npm create cloudflare@latest MY_WORKER_NAME` Replace `MY_WORKER_NAME` with a name you like for your worker.
> [!NOTE]
> If you are running it for the first time, it will open the browser to connect to your Cloudflare account, follow its instructions.
3. For *"What would you like to start with?"* Choose `Template from a Github repo`
4. For *"What's the url of git repo containing the template you'd like to use?"* Enter `https://github.com/m-sarabi/cloudflare-telegram-bot/tree/main/ts` and press enter.
> [!TIP]
> Alternatively, you can enter `https://github.com/m-sarabi/cloudflare-telegram-bot` and then choose `Typescript`
5. For *"Do you want to use git for version control?"* Choose if you want to use git for your worker or not.<br><br>
6. For *"Do you want to deploy your application?"* Choose if you want to deploy your worker right now or not.
> [!NOTE]
> I suggest not to deploy it right now. You can deploy it later using `wrangler deploy`

You should see the message:  ${\color{green}SUCCESS}$ *Application created successfully!*

### Create your bot in @BotFather and set the Environment variables

1. go to [@BotFather](https://t.me/BotFather), and use the `/newbot` command to create a new bot. Follow the instructions until you get your API token.
2. Go to the `wrangler.toml` file in your project directory and add these lines:
   ```toml
   [vars]
   SECRET = "<SECRET>"
   TOKEN = "<API_TOKEN>"
   ```
   - Replace `<SECRET>` with a secret token of random characters of your choice. It is useful to ensure that the request comes from a webhook set by you. 1-256 characters, only characters `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.
   - Replace `<API_TOKEN>` with the API token you got from @BotFather.
3. Run `npm run cf-typegen` in the root directory of your project to regenerate the `worker-configuration.d.ts` file with the variables you just set.

### Create your bot logic.

Let’s write a simple bot that replies to an inline keyboard button.

**Scenario:** When a user sends the /start command, the bot displays a message with a button. Upon pressing the button, the bot removes it and sends a follow-up message.

> [!Note]
> All update handler functions are in the `src/Telegram/handlers` directory

1. Handle `/start` Command: Modify `src/Telegram/handlers/handleMessage.ts` as follows:
   ```ts
   import { tg } from '../lib/methods';

   export async function handleMessage(message: tgTypes.Message) {
       const messageText = message.text;
       const chatId = message.chat.id;
       if (messageText === '/start') {
           await tg.sendMessage({
               text: 'Welcome to my bot! Press the button to accept my rules!',
               chat_id: chatId,
               reply_markup: {
                   inline_keyboard: [[{ text: 'I Accept', callback_data: 'accept_rules' }]]
               }
           });
       }
   }
   ```
   > Explanation: This code sends a message with an inline keyboard button using the [tg.sendMessage](https://core.telegram.org/bots/api#sendmessage) method.
   <br>
2. **Handle Inline Keyboard Press:** Modify `src/Telegram/handlers/handleCallbackQuery.ts` as follows:
   ```ts
   import { tg } from '../lib/methods';

   export async function handleCallbackQuery(callbackQuery: tgTypes.CallbackQuery) {
       const data = callbackQuery.data;
       const messageId = callbackQuery.message?.message_id;
       const chatId = callbackQuery.message?.chat.id;
       if (messageId && chatId) {
           if (data === 'accept_rules') {
               await tg.editMessageReplyMarkup({
                   chat_id: chatId,
                   message_id: messageId,
                   reply_markup: undefined
               });
               await tg.sendMessage({
                   chat_id: chatId,
                   text: 'Thanks for accepting my rules.'
               });
           }
       }
   }
   ```
   > Explanation: This code removes the inline button and sends a follow-up message using the [tg.editMessageReplyMarkup](https://core.telegram.org/bots/api#editmessagereplymarkup) method.
   <br>
### Deploy your worker and Register the webhook
Run `wrangler deploy` to deploy your worker.

To register your bot's webhook:
1. Go to your Cloudflare dashboard and go to `workers-and-pages`
2. Next to our project name click `Visit`
3. In the URL append `/registerWebhook`, so it will be like `https://my-project.my-username.workers.dev/registerWebhook`, then press enter.
   - If you see the message "Webhook registered." it means you have set it correctly.

You can then go to the bot you created on Telegram, click Start (or send /start command), and you should see the message with the button.
