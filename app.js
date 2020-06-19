const {
  WebClient
} = require('@slack/web-api');

const ChannelId = process.env.CHANNEL_ID;
const SlackToken = process.env.SLACK_TOKEN;

const web = new WebClient(SlackToken);

const MessageBlock = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "Hi Rod :wave:"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "It's nice to see you here learning how to build bots like me. These are things you are currently using here:"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "• Slack Web API \n • Slack App and bot token \n • Slack SDK for node.js \n • Slack Blocks"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "But before you can do all these amazing things, we need you to connect your calendar to App. Simply click the button below:"
    }
  }
];

(async () => {
  await web.chat.postMessage({
    channel: ChannelId,
    text: 'CDI',
    blocks: MessageBlock
  }).catch(function(res){
    console.error('Error code: ',res.code);
    console.error('Error message: ', res.data.error);
  });
})();
