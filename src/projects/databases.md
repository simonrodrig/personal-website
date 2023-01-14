---
title: Notre Dame Event Tracker
subtitle: A database concepts project for finding events on campus
banner_href: "/projects/database_banner.png"
---

## Problem
This project was conducted for a course titled Database Concepts. As the name
implies, it was dedicated to learning about the fundamentals of databases, both
the theory and the practical application, and to apply those skills in
one final semester-long project.

Our group's project focused on the topic of event tracking on our college's
campus. There is an official directory of events ocurring on campus, but the
display of this information is often not convenient for students, and there's
no way to view events on a map, or simply look at your phone and see what's
happening nearby. We were inpsired by many maps applications like Google Maps
or the map feature within Snapchat, which displays locations, people, or events
on a map for you to discover. Our goal was to transform the information within
the Notre Dame events directory and make it something fun and easily accessible
for anyone.

The project requirements were very open ended. The requirements were that we
were to develop an application with both a frontend and backend, which utilized
a database, and allowed features like adding records, deleting records, editing
them, and so forth. The frontend was to be publicly accessible or easily
downloadable.

## Approach
In our research, we discovered that the events directory for our college
actually uses a publicly available API provided by the university. However, we
wanted to maintain our own listing of events, meaning we had to download the
listing of events from the API, transform them into data that fit our database
schema, then ingest them into our own database. In particular, we needed to
sanitize much of the data because things like event descriptions contained
embedded HTML, and images used relative URLs rather than absolute.

Of course, this project contained the classic backend/frontend structure, so we
also needed to decide on a stack to build this project. We selected MySQL as the
database since it was a project requirement to run on a provided machine with
that database installed. The backend we decided would be Python, since it was
the most familiar to those delegated to making the backend. We had decided on 
the [CherryPy](https://github.com/cherrypy/cherrypy) server framework in order
to create API endpoints that could be accessed by our frontend. In order to
interact with our database, we used the officially provied driver by Oracle.
In particular though, we needed to be careful about querying our database in 
order to avoid SQL-injection attacks.

The frontend, we decided, would be a pure web interface. I mostly led on
creating that frontend. I had some experience writing websites in the past and
interacting with API endpoints, but not at the scale that would be required for
this project. However, this would be a wonderful opportunity to learn.

## Solution
Though we had delegated frontend and backend work to separate teams, we still
had to work together not only to decide things like the schema, but also to
standardize API endpoints. We ran into many issues with data-ingestion that
we did not foresee, such as the embedded HTML, which required using the
BeautifulSoup library to strip HTML tags out of the ingested data. We also
dealt with memory leaks on the server's end, causing crashes that were very
difficult to diagnose.

However, easily the most complicated aspect of this project was the frontend,
and doubly complicated by the fact none of our project members had prior web
development experience. The frontend was written in JavaScript without any
frameworks, and we utilized the official Google Maps library in order to display
a map with markers. The website was quite difficult to maintain. Much of our
code was littered with event listeners everywhere, and there was quite a bit of
mixing UI logic, business logic, styling, and more. I think more than anything,
this project opened my eyes as to why the world of frameworks exists today and
why they are used. Given that this application was a single-page, it felt
extremely cumbersome to manage so much state in this way by creating nodes,
updating their innerHTML atrributes, and adding them to the DOM.

I think I would have done quite a bit differently if I could do this project
again with the skills I have now. This type of application is exactly suited to
something like React or Next.js by offering a SPA experience. Having components
would have suited this project perfectly. In particular, Next.js would have
worked wonderfully because it also allows you to create API
endpoints that can be acessed by your web application. It would have meant we
were all working with a single codebase and in a single language, meaning our
productivity would have been much greater.

For our database, I believe a better fit for this project was to use an 
[ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) in order
to avoid writing raw SQL queries within our backend code. In particular
something like [Prisma](https://www.prisma.io/) would have been a fantastic fit
for this project, since it includes a MySQL database connector, and it generates
a client according to your schema that is fully typed using TypeScript, offering
very powerful autocomplete in supported code editors. The worry of SQL-injection
of vulnerabilities would be completely eliminated.

However, I am extremely proud of what we were able to accomplish knowing so
little about web development. The final project was quite sophisticated,
displaying events in a horizontal list with animations as you scrolled through
each event. There was much attention paid to the UI interface, with wireframes
being made in Figma complete with animations and gestures. The website was also
optimized for mobile as well. This project in particular is what really
sparked my passion for web developement and got me started on this career path.

## Note
This project was completed for the purposes of a course in Database Concepts,
therefore the source code cannot be distributed publicly.