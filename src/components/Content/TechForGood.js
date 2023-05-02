import React from 'react'
import rhok from './images/rhok-logo.png'
import t4g from './images/t4g-logo.png'
import civictech from './images/ottawa-civic-tech-logo.png'
import goodfood from './images/good-food-map.png'


const About = () => {
    return (
        <div id="tech4good" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">

                    <div>
                        <div className="about-content about-content--techforgood">
                            <div className="section-title three">

                                <h2>Tech for Good &amp; <span>Community</span></h2>
                                
                                <p>I have always felt that being a contributing citizen has been an important part of my personal and professional development. I've contributed in lots of different ways and contributing my skills in my area of expertise has been the most effective. As I built on that, I found leading a company or representing a sector and building a community of advocates and participants is even that much more effective. As I grow I want to continue to find bigger and more effective ways to make the most impact.</p>

                                <h3>Random Hacks of Kindness</h3>

                                <img src={rhok} style={{backgroundColor:"#fff", padding:"20px", marginBottom:"20px", width:"20em", marginRight:"20px", float:"left"}} alt="Random Hacks of Kindness" />

                                <p><a href="https://rhok.ca/">Random Hacks of Kindness</a> is a hackathon for social good that brings together volunteer developers and tech-savvy do-gooders to work with charities, community groups and social enterprises. We ran over 10 events, sometimes twice per year. I was a part of it from the beginning and led the last ~6 events.</p>

                                <p>This <a href="https://twitter.com/i/events/1126167856587202560">twitter story from our April 2019 event</a> is a really good running narrative of the event. If you liked that check out <a href="https://twitter.com/i/events/1051648458371682304">October 2018</a> and <a href="https://twitter.com/i/events/919998663270678528">October 2017</a>.</p>

                                <p>The videos on our <a href="https://www.youtube.com/channel/UCx49ToWxWeGgAFok-jqkjQQ/videos">YouTube channel</a> really show the energy <a href="https://youtu.be/0hFfUELfGW0?t=2128">and fun</a> at <a href="https://youtu.be/wNuMyE6Pt1o?t=1533">kickoff</a> and at the <a href="https://youtu.be/Ln9xLQk4XJw?t=2479">finale</a>.</p>

                                <p>As you can see, after watching all the videos on the youtube channel, I took the opportunity to speak to my philosophies and why I felt these events are important.</p>

                                <h3>Tech4Good Ottawa </h3>

                                <img src={t4g} style={{backgroundColor:"#fff", padding:"20px", width:"10em", marginRight:"20px", float:"left"}} alt="Tech 4 Good Ottawa" />

                                <p>Tech4Good Ottawa was a chapter based initiative to bring together tech sector and social sector in Ottawa. It was based on the NTEN community groups and Techsoup netsquared models. We hosted events like evening networking events with speakers and panels or daytime lunch and learns. We livestreamed a few of the later events.</p>

                                <h3>Ottawa Civic Tech</h3>

                                <img src={civictech} style={{backgroundColor:"#fff", padding:"20px", marginBottom:"20px", width:"15em", marginRight:"20px", float:"left"}} alt="Ottawa CIvic Tech Logo" />

                                <p>Ottawa Civic Tech is a vibrant collection of folks across private sector, public sector, and academia. In Ottawa, being a federal government town, we had good mix of sectors - where in other cities you wouldn't have the same mix. I also felt it to be a smart nexus of folks and the right venue to collaborate with other engaged people that want to make their cities and communities a better place. I hosted many events in our space, brought in speakers, connected my other communities, and contributed to keeping it alive when interest waned.</p>

                                <p>We kept connected to the national movement via Code for Canada. I participate at national level by: hosting a panel at their national summit; volunteered as a technical interviewer in their fellowship program; and, consulted, during the pandemic, on how to get publicly contributed software to be open-source ready.</p>

                                <h3>Changemaker program at Rebel</h3>
                                <p>The Changemaker program at Rebel was an important program for me as I wanted to experiment with the concept of evolving CSR into Creating Shared Value. I wanted to see what happens when you integrate your company into the community around you via your service offering and staff. So we provide free services and education and integration for organizations that are doing important work in the world. We offered it without barriers or strings attached. We designed websites; we made connections; if orgs were local we brought them into talk; we brought them into hackathons or connected them to other partners; and so on.</p>

                                <h3>Providing leadership</h3>
                                <p>I find I can make time and have a meaningful, big impact in providing leadership to organizations, playing a technical advisory role. It's high-impact, low-time - I temper the commitment by not being on the board, not committing to big coding projects (maybe some integration or prototyping 💪), making connections and backing out - and being really clear with my relationship. I used this approach as an experiment in understanding how to have more and bigger impact.</p>

                                <p>I'm currently helping out with: The Investigative Journalism Foundation and Project In-Kind / Kindvillage.</p>

                                <h3>Good Food on the Move Delivery Dashboard</h3>
                                <p>Good Food on the Move is a not-for-profit social enterprise that provides community members facing barriers, with a safe, reliable and convenient way to access fresh and nutritious food.  I helped these good people take simple order details and create a dashboard showing city-wide impact.</p>

                                <p><img src={goodfood} style={{backgroundColor:"#fff", padding:"20px", width:"100%"}} alt="Random Hacks of Kindness" /></p>

                                <p><a href="https://github.com/tackaberry/marketmobile-delivery-data">https://github.com/tackaberry/marketmobile-delivery-data</a></p>


                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About