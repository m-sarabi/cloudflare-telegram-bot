# Cloudflare Telegram Bot Template

This repository provides an easy-to-use, fully documented template for building Telegram bots using Cloudflare Workers written in TypeScript.
It is designed with a balance between staying as close as it can be to Telegram bot API, and ease of use and effortless deploying of a serverless Telegram bots on the Cloudflare platform.

## Step by step guide

### Create a new worker using this template

1. Install `wrangler` by running `npm install wrangler`
   
   *If you need to install **npm**, download and install **node.js** from [nodejs.org](https://nodejs.org/en)*<br><br>
2. Go to a directory that you want your worker files to be in and run `npm create cloudflare@latest MY_WORKER_NAME`

   Replace `MY_WORKER_NAME` with a name you like for your worker. If you are not logged in to Cloudflare, it will open the browser, follow its instructions.<br><br>
3. Choose `Template from a Github repo` and press enter.<br><br>
4. Enter `https://github.com/m-sarabi/cloudflare-telegram-bot/tree/main/ts` and press enter.
   - *Alternatively, you can enter `https://github.com/m-sarabi/cloudflare-telegram-bot` and then choose `Typescript`*<br><br>
5. Choose if you want to use git for your worker or not.<br><br>
6. Next Choose if you want to deploy your worker or not.

You should see the message:  ${\color{green}SUCCESS}$ *Application created successfully!*

### Write the logic for your bot

I will show you how to write a very simple bot that replies to an inline keyboard button.
