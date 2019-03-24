# Progressive Web Apps (PWAs)

## Definition

Progressively enhance web apps to look and feel like native apps;

### Features

- Be **reliable**: load fast and provide offline functionality;
- **Fast**: response quickly to user actions;
- **Engaging**: feel like a native app on mobile apps;

## Traditional Web Apps vs Native Apps

### Usage

87% - Native Apps:
13% - Traditional Web Apps

The preference for native goes for:

- Push notifications bring users back;
- Home screen icons make access easy;
- Access native device features like Camera;
- Possibly work offline;

_.. and that's all covered by PWAs nowadays.._

Source: _2015, comScore Mobile_

### But. Do you really want to build a native app?

- Learn two different languages?
- 80% of time spent happens in User's Top 3 apps on device;
- How many apps the average user installs per month? Answer: 0.

### Reach of Users at: Native Apps vs Traditional Web Apps

- Native Apps: 3.3M users
- Traditional Web Apps: 8.9M users

#### Pros of Traditional Web Apps

- Web pages does't require time spent for installing stuff.
- Google it, find it, use it.
- Bookmark and you're back.

#### PWAs vs Native Apps vs "Traditional" Web Apps

||Capability|Reach|
|---:|:----:|:----:|
|Native Apps|Access Device Features, Leverage OS|Top 3 Apps Win, Rest Loses|
|Traditional Web Apps|Highly Limited Device Feature Access|High Reach, No Borders|
|Progressive Web Apps|**Access Device Features, Leverage OS**|**High Reach, No Borders**|

## Service Workers

- Loaded JS runs on one single thread, attached to individual HTML pages
- Service workers run on additional thread, decoupled from HTML pages
  - Listen to specific events;
  - Can manage ALL pages of given scope (e.g. all pages of a domain);
  - Lives on even after pages have been closed, even after close the browser;

### Can be used for

- Caching/Offline support;
- Enable other PWA features;
- Web Push: mobile-like push notifications;
- Background Synchronization: sync user data in background;
- Application manifest: allow addition to homescreen;
- Responsive design: app/layout should work and look good across devices;
- Geolocation API: access user location;
- Media API: access device camera and microphone;

### "Listenable" Events (in Service Worker)

- `Fetch` Browser or Page-related JavaScript initiates a Fetch (http-request);
- `Push Notifications` Service Worker receives Web Push Notification (from browsers notifications Server);
- `Notification Interaction` User interacts with displayed Notification;
- `Background Sync` Service Worker receives Background Sync Event (e.g. Internet Connection was restored);
- `Service Worker Lifecycle` Service Worker Phase changes

## References

- [Progressive Web App - The Complete Guide](https://www.udemy.com/progressive-web-app-pwa-the-complete-guide)
- [`manifest.json @ Mozilla Developer`](https://developer.mozilla.org/pt-BR/docs/Web/Manifest)
- [Is Service Worker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [More about the "Web App Install Banner" (including Requirements)](https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/)
- [A detailed Web App Manifest Explanation by Google](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/)
- [MDN Article on the Web App Manifest (includes List of all Properties)](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Web App Manifest - Browser Support](http://caniuse.com/#feat=web-app-manifest)
