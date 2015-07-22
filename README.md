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
- Websockets

Questions
---
- Is there a way to enforce no unused CSS rules?
