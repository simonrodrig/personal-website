---
title: Image Hosting Website
subtitle: An image hoster built using React, TypeScript, and Framer Motion
banner_href: "/projects/image_hosting_banner.png"
---

## Problem
This project was taken for a course in my undergraduate studies titled 
Modern Web Development. The goal for this course was to gain experience in web
development purely through practical learning, and would start with the basic
concepts using HTML, CSS, and "vanilla" JavaScript, and eventually move to
React and create a complete full-stack application. 

For our team's project, we decided to create a minimalist image hosting website.
There are a variety of such sites available, such as
[Imgur](https://imgur.com/), but many of them are often locked behind creating
an account, or they might perform compression or other post-processing on the
image to save storage space. Our main goals for this project were to allow the
uploading of images without an account and to serve the original files back to
the user for use in chat platforms like Discord or IRC.

## Approach
Because the scope of the course was limited to frontend development, the backend
for this website was to be a hosted solution. Specifically we utilized
[Back4App](https://www.back4app.com/), a service hosted on the
[Parse](https://docs.parseplatform.org/) framework, which is an open-source
Node.js backend. It provides a number of SDKs for various platforms to interact
with the server, similarly to how one might use 
[Firebase](https://firebase.google.com/). The benefits of using
Parse included the ability to act with a realtime database, which has a number
of useful abstractions built-in. It also included a very useful web interface
to view and edit records. Because of this, creating the database was
seamless: no need to write schemas or relations.

On the front-end, we utilized a React interface using TypeScript and SCSS. In
the initial phase of the project, we utilized [Preact](https://preactjs.com/)
in order to learn the basics of React's API, but eventually we included a
re-write of the application in React, along with migrating the front-end code
to TypeScript and SCSS.

## Solution
The final deliverable fit neatly within our goal of shipping a minimal product.
The home page included a simple box that could be used to upload an image,
along with a button that would route to a separate page containing a gallery
of images they uploaded, with the ability to click on an image and view its
corresponding metadata.

Part of the final phase of the project was to implement three features using
the typical Agile-style point allotment system. For this, we developed user
stories for various features that could be added to our web application, and
selected a number of them to do over a two week sprint. A TypeScript migration
was one of those user stories, but we also included two others:

The first was an authentication system. This would allow users to sign up with
our service to upload images, and allow their gallery to display their previous
images without the need for cookies or local storage. This would prove to be
seamless since Parse includes authentication as part of its backend. 

We also included a complete revamp of the UI in the application, making use of a
library named [Framer Motion](https://www.framer.com/motion/) to add animations
to the application to give a more app-like experience. This also included the
addition of "notification" pop-ups for events like success uploading an image,
errors logging in, and more.

Overall, this project was a wonderful introduction to React and tested many
aspects of the web development experienece. If I were to work on something like
this again, I would most-certainly pay the most attention to creating a
scalable backend, particularly with regards to storage. Since this project was
mainly concerned with the process of building front-end applications generally,
there was not a strong focus on backend scalability, but this would certainly be
a consideration for a real-world project.

We also did not anticipate the amount of technical debt we would accrue from a
migration to React, and then a second migration to TypeScript. The project used
[Webpack](https://webpack.js.org/) as its build tool, but I would have preferred
to use [Vite](https://vitejs.dev/) for its wide set of plugins and fast
builds. Of course, there are a number of exciting frontend frameworks
available these days, the standout being [Next.js](https://nextjs.org/). There
is also an alternative offering called [Fresh](https://fresh.deno.dev/) that
utilizes [Deno](https://deno.land/) as its JavaScript engine rather than Node.js.

## Note
This project was completed for the purposes of a course in Web Development,
therefore the source code cannot be distributed publicly.