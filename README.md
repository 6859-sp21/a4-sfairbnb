# Decision Design Rationale

Policing is a difficult job, but it’s also something that provides too much power into the hands of a few individuals, and it becomes difficult to hold people with authority accountable for their actions. According to the Washington Post, Police officers in the U.S. shoot and kill about 1,000 people each year.

Are all kinds of crimes worthy of a direct final judgment without a trial in the court of law?
This is a difficult question to answer. But while people are thinking, we would like to provide them with an interactive way to explore the around 1,000 deaths by police each year. 

Based on the goal above, we use a dataset compiled by The Washington Post of every fatal shooting in the United States by police since 2015. 

The dataset contains the basic biodata and shooting-related information of fatal death by police. We believe that one death is not just a number, it's a life that once lived in this world. The importance of data for a killed citizen should not be diminished. So We designed a matrix chart where each dot represents one death by police and contains his/her basic information. The dots in the matrix are sorted by count of death in states. To show the overall situation, A Map chart is further provided. There is a mutual interaction between the map and matrix chart. Once the mouse hovers over the dot of the matrix map, the shooting location on the map chart is also highlighted. In terms of color, the higher the death number of a state is, the darker the color is.

We have made multiple design choices based on the data. The dark color palette we used in the background and charts conveys a sense of seriousness. To show the respect of life, we create an interaction on the left chart: if you hover over the dot, you will see the color changes to red and there will be non-private information about the person on the top. So the person who passed away is not only a dot anymore. Also, we find a great variance in the number of deaths by State when doing data analysis, so we create a map and use different shades of red colors to show how many deaths in each state. An interaction between the dot plot and the map is made as well so the viewer can see the fraction of each state on the left side. Indeed, California, Texas, and Florida together account for about 1/3 of the total police shootings.

Furthermore, we discover some meaningful perspectives about the data. For example, we find that the majority of the people who killed by police are armed with a gun, and young age people constitute about half of the deaths. The most interesting thing is many people are not fleeing when they are killed. In this situation, do the police officers really need to kill them? We want to present this information in a scroll-telling way that has not finished yet. The basic idea is to tell our story when scrolling pages, and the chart is changing in this fixed position.

# Development Process Overview

The main responsibility is divided as following, but everyone is responsible for crossing checking and updating each other's section when there are cross-references and interactions between different sections.
* Jiahui Tang: Geomap and Interaction between Dots, Map, Sliding Bar
* Rui Wang: UI/UX Design, Matrix Chart, Sliding Bar, Navigation Dots, Cover Page, Footnote
* Silin Zou: Scrolling Analysis and EDA charts

Roughly we spent around 60 hours in total developing our application.
In terms of implementation, the scrolling function and updating of all graphs with a sliding bar took the most of time. 
The interaction functionalities with event listeners and updating graphs with each mouse behavior event also take time. 
In terms of other aspects, interaction design is the most time-consuming part.
