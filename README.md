# Decision Design Rationale

Policing is a difficult job, but it’s also something that provides too much power into the hands of a few individuals, and it becomes difficult to hold people with authority accountable for their actions. According to the Washington Post, Police officers in the U.S. shoot and kill about 1,000 people each year.

Are all kinds of crimes worthy of a direct final judgment without a trial in the court of law? This is a difficult question to answer. But while people are thinking, we would like to provide them with an interactive way to explore the around 1,000 deaths by police each year. Based on the goal above, we use a dataset compiled by The Washington Post of every fatal shooting in the United States by police since 2015. 

The dataset contains the basic biodata and shooting-related information of fatal death by police. We believe that one death is not just a number, it's a life that once lived in this world. The importance of data for a killed citizen should not be diminished. So We designed a matrix chart where each dot represents one death by police and contains his/her basic information. The dots in the matrix are sorted by count of death in states. To show the overall situation, A Map chart with state location is further provided. There is a reciprocal interaction between the map and matrix chart. Once the mouse hovers over the dot of the matrix map, the shooting location on the map chart is highlighted; on the other hand, if we click the state in geomap, the corresponding dots in matrix map will also be highlighted to show how many person are killed by police on that year in the selected state. In terms of color, the higher the death number of a state is, the darker the color is.

We have made multiple design choices based on the data. The dark color palette we used in the background and charts conveys a sense of seriousness. To show the respect of life, we create an interaction on the left chart: You will see the color hue of redness indicating the number of person that are killed. If you hover over the dot, there will be non-private information about the person on the top. So the person who passed away is not only a dot anymore. Also, we find a great variance in the number of deaths by State when doing data analysis, so we create a map and use different shades of red colors to show how many deaths in each state as well. An interaction between the dot plot and the map is made as well so the viewer can see the fraction of each state on the left side. Indeed, California, Texas, and Florida together account for about 1/3 of the total police shootings.

On top of that, we created a sliding bar to let user navigate through different years, corresponding SVGs for matrix charts and geo map will be updated to reflect situations on that year. 

Furthermore, we discover some meaningful perspectives about the data through our EDA analysis. For example, we find that the majority of the people who were killed by the police are armed with a gun. The Small Arms Survey states that U.S. civilians alone account for 393 million (about 46 percent) of the worldwide total of civilian held firearms. The high rate of gun ownership in U.S. yields great potential problems like gun violence. This not only threatens our life but also makes policing be a really tough job. In addition, we see that the young age people constitute about half of the deaths.  It is disappointing to see so many teenagers were killed in fatal by the police. More actions and educations have to be made in order to avoid these tragedies. The most interesting thing is many people are not fleeing when they are killed. In this situation, do the police officers really need to kill them? We analyze the data and present this information in a scroll-telling way, so that the readers have a better understanding of the current situation of the police shootings.

The sliding bar is also then linked with the story telling in scrolling section to let audiences explore EDA together with the above matrix charts and geo map for a selected year. 

# Development Process Overview

The main responsibility is divided as following, but everyone is responsible for crossing checking and updating each other's section when there are cross-references and interactions between different sections.
* Jiahui Tang: Geomap and Interaction between Dots, Map, Sliding Bar
* Rui Wang: UI/UX Design, Matrix Chart, Sliding Bar, Navigation Dots, Cover Page, Footnote, Scroller
* Silin Zou: Scrolling Analysis, EDA charts, and Interaction between EDA and Sliding Bar

Roughly we spent around 60 hours in total developing our application.
In terms of implementation, the scrolling function and updating of all graphs with a sliding bar took the most of time. 
The interaction functionalities with event listeners and updating graphs with each mouse behavior event also take time. 
In terms of other aspects, interaction design is the most time-consuming part.

# Acknowledgement
Data Source:
* [Data Police shootings](https://www.kaggle.com/mrmorj/data-police-shootings) and [Police Violence & Racial Equity Dataset](https://www.kaggle.com/jpmiller/police-violence-in-the-us) retrieved from Kaggle, which is derived from database of every fatal shooting in the United States by a police officer. 

Analysis:
* [Understanding the Extent of Police Abuse in the United States of America](https://www.kaggle.com/thedatabeast/understanding-the-extent-of-police-abuse-in-the-us?select=deaths_arrests_race.csv)

JS: 
* [Scroller](https://vallandingham.me/scroller.html)
* [Scroller](https://medium.com/@bryony_17728/titanic-d3-scrolling-story-eaed1b6f5766)
* [AOS](https://github.com/michalsnik/aos)
* [Nav Bar](https://codyhouse.co/gem/vertical-fixed-navigation-2)
* [Choropleth Map: US States](https://d3-geomap.github.io/map/choropleth/us-states/)

A4 Video:
* [Youtube Link](https://www.youtube.com/watch?v=1ttZ7L2pWNo)
