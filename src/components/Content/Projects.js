import React from 'react'

import { StaticImage } from "gatsby-plugin-image"


const About = () => {
    return (
        <div id="career-overview" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">

                    <div>
                        <div className="about-content about-content--techforgood">
                            <div id="ttt" className="section-title three">

                                <span className="sub-title">Projects</span>

                                <h2>Tic-Tac-Toe with <span>#RebelXO</span></h2>
                                
                                <p>Canada Day 2017 was kind of a big deal in the nation’s capital. It was Canada’s 150th birthday celebration, and the Byward Market – right in the heart of Ottawa’s downtown core – was even busier than usual.</p>

                                <p>Guess who has their offices in the Byward Market? (Spoiler alert: it’s us). And we weren’t going to let our huge windows that face out onto a beautiful courtyard go to waste. So we did what anyone would do: we transformed them into a giant Tic Tac Toe board.</p>

                                <p>Our digital game was played by hundreds of people passing through on their way to grab coffee (or other beverages). Although the rain tried to dampen our parade, the games were still heated.</p>

                                <p>And to make this feat even cooler? We decided to submit it to the Guinness Book of World Records. There isn’t a record for the world’s largest Tic Tac Toe board. So, obviously, we had to submit ours.</p>

                                <p>While we wait to hear back from Guinness, enjoy these photos from #RebelXO round one. Round two is coming soon, so keep your eyes to the skies if you’re in the Byward Market!</p>

                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="gallery-item">
                                            <StaticImage alt={`People playing giant tic tac toe in 1`} src={`./images/projects/tictactoe1.jpg`} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="gallery-item">
                                            <StaticImage alt={`People playing giant tic tac toe in 3`} src={`./images/projects/tictactoe3.jpg`} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="gallery-item">
                                            <StaticImage alt={`People playing giant tic tac toe in 2`} src={`./images/projects/tictactoe5.jpg`} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="gallery-item">
                                            <StaticImage alt={`People playing giant tic tac toe in 4`} src={`./images/projects/tictactoe4.jpg`} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="gallery-item">
                                            <StaticImage alt={`People playing giant tic tac toe in 5`} src={`./images/projects/tictactoe2.jpg`} />
                                        </div>
                                    </div>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="about-content about-content--techforgood">
                            <div id="estimote" className="section-title three">                                

                                <h2>Estimote beacons at the <span>Museum of Nature</span></h2>

                                <p>Technology ebbs and flows between leading the market and being in-demand. For years we have looked to realize technology’s promise of contextual information. We have looked for ways to answer how technology can align in mobile, social and content. Beacon technology will prove to be an important step in the evolution of a connection between digital and physical space.  We work in the digital space and we work with a lot of cultural and educational institutions such as museums and universities and we look forward to the doors this will open.</p>

                                <p>The ability to provide a compelling digital experience based on a physical / location interaction, has not been viable until recently. With advances in smart phone and sensor technology we are now able to accomplish this level of interaction and engagement. This was the goal when bv02 partnered with the Canadian Museum of Nature to develop a proof of concept that realized location-based interaction by developing a trial application to interact with <a href="http://www.estimote.com/">Estimote beacons</a>.</p>

                                <p>In mid-December 2014, bv02 and the <a href="https://nature.ca/">Canadian Museum of Nature</a> launched the pilot project in the Mammal Gallery using five (5) Estimote beacons. As patrons visited the museum, they were prompted to download the app onto their iPhones and interact with a game based on Evolution as they explored the gallery and came into range of a beacon. The pilot enabled us to test the suitability and garner an understanding of beacon technology in a museum environment.</p>

                                <p style={{textAlign:"center"}}><StaticImage alt={`Signage for the game`} src={`./images/projects/nature1.jpg`} /></p>

                                <p>We worked very closely with our good friends at TwelveDot who were an integral part of this project. TwelveDot Inc. is a security consulting practice with over 20 years experience in security engineering, corporate security policies, international standards, network and application vulnerability assessments, and just about everything in between.</p>

                                <p>We set out to design and build a proof-of-concept that:</p>
                                
                                <ol>
                                <li>Could be delivered in a controlled environment.</li>
                                <li> Was quick to produce with a low barrier for participation.</li>
                                <li>Tracked the interaction in an exciting and engaging way.</li>
                                <li>Most importantly: used the beacon technology to test its effectiveness in a populated environment</li>
                                </ol>

                                <p>Evolution @ Nature is an iOS app that:</p>

                                <ol>
                                <li>Allows us to demonstrate the location-based technology in an environment where we can expect willing and eager participants.</li>
                                <li>Is simple in design, easy to follow and requires very little from the participant to interact.</li>
                                <li> the ability to track and record data that is relevant to the future use of beacons in the museum.</li>
                                </ol>

                                <p>And then, at the end of the pilot, we will have:</p>

                                <ol>
                                <li>Reference points around future software development.</li>
                                <li>Experience with the set-up and implementation of Beacon hardware.</li>
                                <li>Data around the effectiveness of iBeacon detection, user identification and user journey in a live environment.</li>
                                <li>Experience around Context Management and live server communications and transactions.
                                Caveats of the above.</li>
                                </ol>

                                <h3>About Beacon Technology</h3>
                                <p>After a quick physics refresher, we dove right into the market. We obtained a variety of the competing beacon brands and get to play with a number of them. From our point of view, all beacons are essentially the same. The differentiations are: Software SDK and ease of adoption; Price, availability, shipping, etc; Content/context management system; and, API. The underlying technology is all the same, the value add is in the extras. These will be commoditized almost immediately.  We set out to use the Estimote beacons for this experiment.</p>

                                <p>Quick hits about the technology:</p>
                                <ul>
                                    <li>Battery life: Can last up to 2 years but varies with signal strength and frequency</li>
                                    <li>Distance: Can be detected up to 200 ft</li>
                                    <li>Accuracy: Can be as accurate as 10 inches</li>
                                    <li>Users need bluetooth, wifi (for contextual information) and an app</li>
                                    <li>App can be either iPhone and/or Android</li>
                                    <li>Android later to the game</li>
                                    <li>Windows not possible (until now)</li>
                                    <li>Phones equipped with this technology include iPhone 4S+, SG3+ . Phones also look like iBeacons to other phones</li>
                                </ul>

                                <p>The Underlying technology is Bluetooth Low-Energy (BLE), part of Bluetooth 4.0 which was released in 2010. All Bluetooth Devices advertise and connect. The advertising aspect is a one-way communication. There are two key components to Beacon radio signals: interval and power.  The interval is the frequency a device advertises and the power is the strength of the signal – like the volume of a sound. Advertising intervals range from 20ms to 10s intervals. A shorter interval will result in higher accuracy but will mean a shorter battery life. The coverage distance is determined by the signal power and while a high power signal will cover more distance, it will have less distance accuracy – higher power also means less battery life. A lower power signal is better for close-up accuracy which can mean accuracy within 10 inches. The application on the device will then calculate the distance to the beacon by the Relative signal strength (RSSI).</p>

                                <p>Advertising signal includes a small amount of identifying data. The main piece of information advertised is an ID. More specifically: UUID (same for all beacons for an organization), a major number (floors, wings, rooms), and minor number (individual). The combination of IDs is used to fetch micro-location and context/content. e.g. depending on distance, location &amp; context display information on a user’s phone. Geofencing is achieved by an app subscribed in the OS to constantly listen for a particular identifier even if phone is locked and app not running.</p>

                                <h3>In-Game Design using Estimotes</h3>

                                <p>When designing an interactive experience in a public place like a museum, locational context is key. Having Estimotes as low maintenance facilitators of points of interest makes designing with them a dream. We are given carte blanche technology that we can work into any number of design ideas. On the surface, Estimotes can be used simply to trigger location specific information for patrons related to the exhibit they are currently in range of; but the technology allows for so much more.</p> 

                                <p>A game could be designed to show how a disease spreads. Placing one Estimote somewhere in the building, which will “infect” any users within a small range. Infected users can pass on the infection to anyone they get too close too. Additional Estimotes can be placed as surveillance and data can be tracked through the day as to who is infected, where they have been, and how the spread happened. Patrons can watch a real-time spread of the virus with a visualization program. This idea could be made more interesting by introducing viral mutations, vaccines, continued vaccine development (newer mutations won’t respond to vaccines made from older mutations) and viral mutation tracking. Games like this are a great way to engage the public in learning about how certain natural concepts work without subjecting them to long lengthy explanations. To re-appropriate an old writing adage: “Show, don’t tell”</p>

                                <h3>Evolution @ Nature – Game Concept</h3>

                                <p>Identifying the goals of the pilot was the first step. The second step was to create a game concept that would be compelling enough to draw in participants and keep them engaged as they naturally moved throughout the gallery and encountered the beacons.</p>

                                <p>Evolution @ Nature is a game based on the concept of evolution, with a twist. Participants given one of five arbitrary creatures – a fish, reptile, insect, goat or bird. As people came within range of a beacon in the gallery, their creature would “evolve” and develop a number of randomly selected attributes, including colour, diet (herbivore or carnivore), luminescence, blinking eyes, and random sounds. After interactions with all 5 beacons, the output was an odd creature with a combination of unique characteristics, which users were encouraged to share with their friends through Twitter.</p>

                                <p>The randomness of the game enabled people to have a unique experience and allowed them to compare their results with friends and family who were also playing. Below are sample screens from Evolution @ Nature to illustrate the experience.</p>

                                <p>Upon downloading the app, users are greeted with a simple menu that also provided a tutorial to familiarize users with the concept.</p>

                                <p>All users start as a amorphous blob representing a carte blanche creature without attributes. Instructions prompt the user to wander around the gallery and add attributes to their creature. The health bar is introduced with a green to red gradient to convey the feeling of safety to danger as it drops.</p>

                                <p>After a couple evolutions, a creature will look more like this. As they travel through the gallery, their creature will adapt new characteristics and evolve. This will result in a creature with a grab bag of characteristics after they have come within range of all the beacons.</p>

                                <p>If a user spends too much time out of range of a beacon, the creature will grow hungry and their health will drop and prompt the user to keep moving to come within range of a beacon to increase health and complete the evolution.</p>

                                <p>At any time throughout the game, users were able to share their partially or fully evolved creature with their friends on Twitter. Once the fifth and final beacon was signalled, they were given the choice to start again with a new creature or keep playing.</p>

                                <StaticImage alt={`Screenshot of nature evolution game`} src={`./images/projects/nature2.png`} />

                                <h3>Evolution @ Nature – what we found</h3>

                                <p>The pilot ran in the Mammal Gallery of the museum from December 23rd, 2014 to January 23rd, 2015. During that time, we saw:</p>

                                <ul>
                                    <li>150 app downloads</li>
                                    <li>285 Sessions (see time distribution below)</li>
                                    <li>1,500 Beacon interactions (5.25 beacon interactions per session, see distribution below)</li>
                                    <li>330 Evolutions</li>
                                    <li>1,000 mins in app (3.5 mins average per session, see distribution below)</li>
                                </ul>

                                <p>Sessions over the course of the experiment</p>

                                <p style={{textAlign:"center"}}>
                                <StaticImage alt={`Chart of sessions over time of experiment`} src={`./images/projects/nature3.png`} />
                                </p>

                                
                                <p>Distribution of amount of time spent in the app </p> 

                                <p style={{textAlign:"center"}}>
                                <StaticImage alt={`Chart of time spent over time of experiment`} src={`./images/projects/nature4.png`} />
                                </p>
                                
                                <p>Distribution of number of beacon interactions per session</p>
                                                                
                                <p style={{textAlign:"center"}}>
                                <StaticImage alt={`Chart of number of beacons over time of experiment`} src={`./images/projects/nature5.png`} />
                                </p>
                                
                                <p>With over five (5) weeks of data from the pilot, the best way to communicate and highlight all of the relevant information was to bring the experience to life visually. You can see the journey of each active user throughout the Mammal Gallery including points in which they encountered beacons, or evolutions (flashing different colours). Start by selecting a session from the drop down.
                                </p>

                               <p> Besides a poster at the entrance of the gallery that prompted people to participate and download the app, and the ability to share your evolved creature on Twitter at the end of the game, there was no outside-the-museum promotion or advertising pushing trial.</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="about-content about-content--techforgood">
                            <div id="rw"  className="section-title three">

                               <h2>RentingWell.com</h2>

                                <p>Launched in early 2021, and running until present day, <a href="https://www.RentingWell.com">RentingWell.com</a>, a simple and elegant approach to managing rental properties. I, along with some past co-workers and friends, we started Sliced Bread Inc. and built and launched this product. It has had steady revenue, and we're currently pursuing selling the product. </p>

                                <p style={{textAlign:"center"}}>
                                <StaticImage alt={`Screenshot of rentingwell.com`} src={`./images/projects/rw1.png`} />
                                </p>

                                <p style={{textAlign:"center"}}>
                                <StaticImage alt={`Screenshot of rentingwell.com`} src={`./images/projects/rw2.png`} />
                                </p>
                                </div>
                        </div>
                    </div>
                    <div>
                        <div className="about-content about-content--techforgood">
                            <div id="aski" className="section-title three">


                                <h2>Help Me Tell My Story</h2>
                                
                                <p>At bv02, in multi-year partnership with Saskatchewan Board of Education we designed, built and launched this one-of-a-kind educational app and ecosystem. The Help Me Tell My Story early-learning literacy assessment uses a new, holistic approach to assessment that measures oral language development for pre-kindergarten and kindergarten children. In order to provide a holistic view of each child’s learning, the assessment includes surveys that collect data from the children, their caregivers, their teachers and Elders in the community.</p>

                                <p>This new approach to assessment also includes an online portal that provides important information to caregivers, educators and administrators. Caregivers can access important information to support their child’s learning, while educators can easily access information to help inform their learning practices in the classroom. This information is helping to create real, measurable change in the oral language development of children across Saskatchewan.</p>

                                <p>In 2016, the project transitioned into a company called <a href="https://www.spriglearning.com/">Sprig Learning</a>.  The learning platform has continued to grow and expand while building on the original core concepts.</p>
                                
                                <StaticImage alt={`Sprig Learning and a moose puppet`} width="20em" src={`./images/projects/aski1.jpg`} />


                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About