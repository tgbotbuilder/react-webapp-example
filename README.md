This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## How to configurate the bot
Web Apps can be launched from a customized menu button. This simply offers a quicker way to access the app.
By default, chats with bots always show a convenient menu button that provides quick access to all listed commands.
With Bot API 6.0, this button can be used to launch a Web App instead.

- Go to [BotFather](https://t.me/BotFather) in Telegram and write `/setmenubutton`.
- Select the bot you want to configure.
- Send the URL of the Web App you want to launch.
- Send the text that will be displayed on the button.

Done. Go to the chat with the bot and click the button to launch the Web App.

## Learn More

TO learn more about Web Apps, take a look at the following resources:

- [Web Apps Documentation](https://core.telegram.org/bots/webapps#designing-mini-apps) - learn about Web Apps features and API.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
