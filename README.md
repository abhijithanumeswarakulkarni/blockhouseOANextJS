## BlockhouseOA

This is a simple NextJS project that integrated with Apexcharts to produce charts from the data recieved from blockhouseOADjango project

# Steps to run the project
1) pnpm install
2) pnpm dev

This should boot up the project on [This Link](http://localhost:3000/)

NOTE: The blockhouseOADjango must be running before you try to run UI.

# Thoughtprocess
1) I have used Apexcharts for charting the graphs, its a pretty famous library which also had the support for candlestick graph in the free trial, and that's the reason I chose this library.
2) For state management, I chose React's default state manager, since the project was not too huge and this would have been enough for the same. Arguably we could have used Redux / Context API for the same.
3) I have modified the data recieved form API in such a way that it has minimal computation on UI to reduce load time.
4) I have added spinners with timeouts just to showcase the loading aspect.
5) I have added types utlizing the capability of typescript which further reduces run time errors in case of type mismatch.
6) Used bootstrap CSS to reduce dev time for simple css properties, cards and navbars.