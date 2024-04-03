# Project Highlights

## Decoupling manufacturing data from marketing data

To address our marketing team's challenges in making website changes due to our CMS setup, I proposed moving our 50,000 documents to a new, [more flexible CMS](https://www.sanity.io/). This would decouple the backend from the frontend, giving the marketing team more autonomy.

I utilized the Shape Up process to manage the project's scope, breaking it down into multiple phases. In the first phase, I needed to migrate the data to the new CMS and deliver a 1:1 copy of our current CMS. To do this, I used [Bun](https://bun.sh/) as the runtime and wrote all the scripts in TypeScript. I had to optimize the script over the weeks as the first go would have taken near 20 hours to import all the data. I ended up getting it to just under an hour.

Another part of this that I'm particularly proud of is using [JSDOM](https://github.com/jsdom/jsdom) to parse the richtext in a way that let me inject link references that the new CMS supported.

All in all, the project is going really well and as of writing this, I just starting the second phase, which will integrate the new CMS into our React Website.

## Silly SVG Solar System React Component

While exploring the [SpaceTraders](https://spacetraders.io/) game, which provides only an API for gameplay, I took the opportunity to learn [InertiaJS](https://inertiajs.com/). As I built out the UI, I created a React component that dynamically renders an SVG of the solar system based on waypoint coordinates, categorized as asteroids, planets, or space stations, along with their orbital relationships.

I wasn't planning on making this public yet and it's a WIP but here is the [component in question](https://github.com/JeffBeltran/space-trader/blob/main/resources/js/Components/SystemMap.tsx)

## Open Source Contributions

I contribute to open source projects by submitting bug reports and pull requests as I run into issues. I strive to be a good OSS citizen, drawing from my experience maintaining my own Laravel Nova package, [Sanctum Tokens](https://github.com/JeffBeltran/sanctum-tokens).

I'm also looking forward to this being a feature of the job, I want to contribute more but just haven't found the bandwidth to make it a priority.

## Working with physical hardware

At my previous job, I built a UI to help the manufacturing team test smart boxes for accepting grocery deliveries. I used Chrome's Bluetooth API and modified an MQTT package to connect to our Azure IoT Hub to manage events. This was fun, i'd love to do more hardware stuff but alas only so much time in the day.

## Getting this published to NPM and working via NPX command

What I thought would be the easy part of this whole application turned out to be trickier than I expected.

First, I ran into an issue where scoped packages don't support the object notation if you want to run a command from NPX. The second is that I needed to create a [custom loader](https://bun.sh/docs/bundler/loaders) so that [Bun](https://bun.sh/) would include the markdown files in the bundle. The third, and probably the thing that makes my eye twitch the most, is that not all terminals are the same, so depending how you run view this, the UI might not be what I wanted...

Anyways, found this [whole project](https://github.com/JeffBeltran/tailwind-example) fun, thanks for giving me the opportunity to learn something new!
