[Demo](https://mking.github.io/slack-chat-window) / [Original](https://reactiflux.slack.com)

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
- Channel mentions
- Current channel (needed for joined message)
- Joined message
- Infinite scrolling
- Add local messages
- Day breakout

Questions
---
- Is there a way to enforce no unused CSS rules?

Infinite Scrolling
---
- Display "And more..." at the top of the window.
- When the user hits the top, change the text to "Retrieving history...".
- Fade the new page in.
- Preserve the scroll position from the user's perspective. To simulate a stable scroll position, add the size of the new page to the scroll position.
