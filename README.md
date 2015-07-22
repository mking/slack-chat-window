[Demo](https://mking.github.io/slack-chat-window) / [Original](https://reactiflux.slack.com)

Features
---
- Displays messages from a Slack channel
- Consecutive messages from one user are collapsed into a single message. Hover over one of these messages to see the exact timestamp.
- Consecutive "channel" joined messages are collapsed into a single message.

Setup
---
```
bower install
```

Run
---
```
python -mSimpleHTTPServer 8888
# Visit http://localhost:8888
```

Example API Calls
---
```
https://slack.com/api/channels.history?channel=C038FCTRW&latest=1437531827&oldest=1437099810&count=1000
https://slack.com/api/users.list
```

TODO
---
- Day breakout
- Infinite scrolling
- Add local messages

Questions
---
- Is there a way to enforce no unused CSS rules?

Infinite Scrolling
---
- Display "And more..." at the top of the window.
- When the user hits the top, change the text to "Retrieving history...".
- Fade the new page in.
- Preserve the scroll position from the user's perspective. To simulate a stable scroll position, add the size of the new page to the scroll position.
