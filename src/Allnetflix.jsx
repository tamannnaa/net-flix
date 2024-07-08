import React from 'react'
import Card from './NetflixCard.jsx'
import series1 from './assets/series1.jpg';
import series2 from './assets/series2.jpg';
import series3 from './assets/series3.jpg';
import series4 from './assets/series4.jpg';
import series5 from './assets/series5.jpg';
import series6 from './assets/series6.jpg';

const cardData=[
  {
    imagesrc: series1,
    title: "Title 1",
    name: "Series Name 1",
    links: "https://www.netflix.com/in/title/80057281"
  },
  {
    imagesrc: series2,
    title: "Title 2",
    name: "Series Name 2",
    links: "https://www.netflix.com/in/title/80192098"
  },
  {
    imagesrc: series3,
    title: "Title 3",
    name: "Series Name 3",
    links: "https://www.netflix.com/in/title/80100172"
  },
  {
    imagesrc: series4,
    title: "Title 4",
    name: "Series Name 4",
    links: "https://www.netflix.com/in/title/70251894"
  },
  {
    imagesrc: series5,
    title: "Title 5",
    name: "Series Name 5",
    links: "https://www.netflix.com/jp-en/title/80013775"
  },
  {
    imagesrc: series6,
    title: "Title 6",
    name: "Series Name 6",
    links: "https://www.netflix.com/in/title/80241239"
  }
]

export default function All() {
    return (
        <div className='cards'>
            {cardData.map((data, index) => (
                <Card
                    key={index}
                    imagesrc={data.imagesrc}
                    title={data.title}
                    name={data.name}
                    links={data.links}
                />
            ))}
        </div>
    )
}
