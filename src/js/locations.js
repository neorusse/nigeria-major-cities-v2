import React from "react";

// Data Required for Components to fuunction
export const locations = [
    {
        id: '1',
        city: "Lagos",
        image: require("../img/lagos.jpg"),
        desc: "Lagos is a city in the Nigerian state of Lagos. The city, with its adjoining conurbation, is the most populous in Nigeria, and the most populous on the African continent. It is one of the fastest growing cities in the world, and also one of the most populous urban agglomerations. Lagos is a major financial centre in Africa; the megacity has the highest GDP, and also houses one of the largest and busiest ports on the continent. Lagos State is a major economic centre of Nigeria. It would be the fifth largest economy in Africa if it were a country. Its total generated revenue in 2017 was around US$920 million, growing by 10.43% compared to 2016.",
        moreInfo: "Lagos"
    },
    {
        id: '2',
        city: "Abuja",
        image: require("../img/abuja.jpg"),
        desc: "Abuja is the capital city of Nigeria located in the centre of the country within the Federal Capital Territory (FCT). It is a planned city and was built mainly in the 1980s, replacing the country's most populous city of Lagos as the capital on 12 December 1991. Abuja's geography is defined by Aso Rock, a 400-metre (1,300 ft) monolith left by water erosion. The Presidential Complex, National Assembly, Supreme Court and much of the city extend to the south of the rock. Zuma Rock, a 792-metre (2,598 ft) monolith, lies just north of the city on the expressway to Kaduna. At the 2006 census, the city of Abuja had a population of 776,298, making it one of the ten most populous cities in Nigeria.",
        moreInfo: "Abuja"
    },
    {
        id: '3',
        city: "Port Harcourt",
        image: require("../img/port-harcourt.jpg"),
        desc: "Port Harcourt is the capital and largest city of Rivers State, Nigeria. It lies along the Bonny River and is located in the Niger Delta. In 1956 crude oil was discovered in commercial quantities at Oloibiri, and Port Harcourt's economy turned to petroleum when the first shipment of Nigerian crude oil was exported through the city in 1958. Through the benefits of the Nigerian petroleum industry, Port Harcourt was further developed, with aspects of modernization such as overpasses, city blocks, taller and more substantial buildings. Oil firms that currently have offices in the city include Royal Dutch Shell and Chevron.",
        moreInfo: "Port_Harcourt"
    },
    {
        id: '4',
        city: "Kano",
        image: require("../img/kano.jpg"),
        desc: "Kano is a state located in Northern Nigeria. Created on May 27, 1967 from part of the Northern Region. Commercial activities in Kano first developed with the establishment of the Kurmi market by the Emir of Kano Muhammadu Rumfa in the 16th Century CE. Subsequent leaders made contributions to the emergence of Kano as a leading commercial center in Sudanic Africa. Kano State is the second largest industrial center after Lagos State in Nigeria and the largest in Northern Nigeria with textile, tanning, footwear, cosmetics, plastics, enamelware, pharmaceuticals, ceramics, furniture and other industries. Others include agricultural implements, soft drinks, food and beverages, dairy products, vegetable oil, animal feeds etc.",
        moreInfo: "Kano_State"
    }
];
// Create a 'Data' component that renders a Each City
export const Data = (props) => {
    return (<div className="col">
        <h2>{props.city}</h2>
        <img className="feat-img" src={props.image} alt={props.city} />
        <p>{props.desc}</p>
        <a className="button" href={`https://en.wikipedia.org/wiki/${props.moreInfo}`} target="_blank">Learn More</a>
    </div>);
};