---
title: Raudio
subtitle: Website and blog for an open source radio and streaming platform
banner_href: "/projects/raudio_banner.png"
source_href: "https://github.com/raudio-project/raudio-project.github.io/"
demo_href: "https://raudio-project.github.io/"
---

## Problem
This project was conducted for a course on 
[Open Source Software Development](https://www3.nd.edu/~pbui/teaching/cse.40677.sp22/).
The goals of this course were to familiarize students with the process and
culture of software development in the open source field as well as introduce
many of the practical tools and language that is often not covered in college
courses. This includes the GitHub issue/pull-request workflow, as well as
choosing an open source license, the culture of FOSS, marketing an open source
project, and more.

For this project, our group selected the area of audio streaming for our project.
Within this space, there are a number of audio streaming programs such as
Spotify that offer on-demand playback of selected songs, but often it can be
challenging to listen along with friends to the same song over the internet.
Some services do offer a "listen-along" feature, but it often relies on all
users using the same streaming service and all individually paying for a
subscription.

In the open source space, notable software in this area that comes to mind are
projects such as [Icecast](https://icecast.org/) or 
[Shoutcast](https://www.shoutcast.com/). These programs are designed as personal
internet radio solutions, and as a result, are often designed for large-scale
distribution of audio streams, and it can often be difficult to configure an
audio server, and difficult for users to actually listen to that stream
on all of their devices.

## Approach
With the problem-space narrowed, we set out to design a software project that
resembled some of the Linux internet radio solutions, but with an interface that
could be easily accessed from a number of different clients. With that in mind,
the project needed to be accessible from a platform people were already using,
but ultimately be platform-agnostic in order to allow others to develop other
clients to listen along with music. In researching possible methods of streaming
the audio, we ultimately selected our primary client to take the form of a
[Discord](https://discord.com) bot. Discord is an already existing chat platform
with support for casual voice calling. In addition, there already existed a
number of clients with support for streaming [YouTube](https://youtube.com) 
content, but many of them were shutting down at the time due to copyright
concerns, which we felt provided a perfect opportunity to provide an alternative
service that addressed the desire for people to share music with each other
remotely, especially during the pandemic.

In order to stream the content, we also needed to create an audio streaming
server that could take audio files stored locally and stream them to a
theoretical unlimited number of clients. The structure of such a server resembles
traditional AM/FM radio more than it does a music streaming service. Users would
essentially input a url or other identifier into their client of choice, and
listen into a music server live as the music was playing along with other people.

Though the course was dedicated to software development, there was not a lot of
time to develop software simply because the course also covered many other
aspects of the field. There were sections dedicated to selecting a license for
the project, as well as sections dedicated to marketing the project in hopes of
receiving contributions from the community. Our focus was to build a "Minimum
Viable Product" (MVP) that addressed the basic needs of our problem.

## Solution
Because our project requirements included marketing the project and maitaining
a blog of our progress, I was tasked with developing the website that would
accompany our project. This would serve as a simple landing page that points
users to our various GitHub repositories, as well as our blog, about page, and
contribution guidelines. We decided early on in the project that we wouldn't
be able to create a web-based client within the time provided, so therefore our
website did not require any dynamic data to function. Because we also needed to
create blog posts, it seemed that the perfect stack was a 
[Static Site Generator](https://www.cloudflare.com/learning/performance/static-site-generator/)
(SSG). Using an SSG would allow us to quickly create blog posts with markdown
and then transform the markdown into HTML templates. All transformation would
be done at compile-time, and therefore the site would not ship any JavaScript to
the user, ensuring fast load times and good SEO.

We decided that our SSG of choice would be [11ty](https://www.11ty.dev/). This
project had recently hit their 1.0 release at the time and supported all of our
needs. We developed the site using [Nunjucks](https://mozilla.github.io/nunjucks/),
a templating language that would allow us to extend templates, separate headers
and footers into their own "components", and develop quickly. If I
were to work on this project again, I would have likely considered some of the
newer alternatives, such as [Astro](https://astro.build/). Astro resembles a lot
of the classic SSGs by transforming templates into static files that don't ship
JavaScript. However, though it does provide it's own templating language, it
supports many of the popular frontend frameworks such as React, which would have
avoided the need to learn a whole new templating language such as Nunjucks. In
addition, Astro's main appeal is in its theory of "islands of interactivity",
allowing an author to specify components on a page that do require JavaScript,
allowing you to ship some JavaScript if your site requires it. This would have
been perfect if we wanted to ship a web client for our service while still
keeping the landing page and blog completely static.

I also would probably consider using a popular "metaframework" such as 
[SvelteKit](https://kit.svelte.dev/). SvelteKit is what this website is built
with, and the main appeal of this approach would be the ease of adding
interactivity to the page. Svelte's syntax already resembles many of the popular
HTML templating languages, but allows you to specify scripts in your components
to make them interactive. SvelteKit prioritizes "Server Side Rendering", allowing
the server to build the HTML when it receives a request instead of shipping a
blank page on the initial load. You can also configure SvelteKit to export static
pages at compile-time, which mimics what an SSG would do. The power of this
approach though is that you can specify static prerendering on a per-route basis,
meaning that some of your routes can be completely static HTML, while others
could be totally dynamic. Something that I also appreciate about SvelteKit is
that though the initial page load is server-rendered, the server also ships a
client-side router that takes over navigation after it loads. This means that
once the page loads, any links you click on can be pre-rendered on hovered, and
the HTML can be swapped in-place, making the transition almost feel app-like.
I personally feel this gives you the best of both worlds with regards to
Client Side Rendering and Server Side Rendering.