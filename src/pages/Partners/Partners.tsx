import React, {Suspense} from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {CenterSection} from '../../components/CenterSection/CenterSection';
import {Section} from '../../components/Section/Section';
import {ImageSection} from '../../components/ImageSection/ImageSection';
import {InlineLink} from '../../components/InlineLink/InlineLink';
import VideoSource from '../../components/Jumbotron/VideoSource';
import {useCanPlayVideoType} from '../../core/hooks/UseCanPlayVideoType';
import {Figure} from "../../components/Figure/Figure";
import {TicketPrice} from "../../components/TicketPrice/TicketPrice";
import {PartnerPrice, PartnerPriceList} from "../../components/PartnerPrices/PartnerPrices";

export function PartnersPage() {
    const canPlayWebm = useCanPlayVideoType('webm');
    return (
        <>
            <VikingBanner header="Partner love" subHeader="December 7th - 8th 2022"/>
            <CenterSection color="blue" header={<h1>JavaZone 2022: Bigger and better than ever</h1>}>
                <p>
                    JavaZone started out in 2001 as a small conference for Java developers but has since then evolved to become one of the largest developer conferences in the world. Each year thousands of people gather in Oslo Spektrum for three full days of learning, mingling, and fun!
                </p>
            </CenterSection>
            <Section color="blue" header={<h1>Last four years: Completely. Sold. Out.</h1>}>
                <p>
                    In 2019, a record breaking 3200 people attended JavaZone. We were completely sold out of tickets AND partner stands. The same happened last year, and the year before, and the year before. So you might want to join in early if you want to be part of the conference!
                </p>
            </Section>
            <Section color="blue" header={<h1>Registration</h1>}>
                <p>
                    Despite the difficulties with JavaZone 2021, we hope that we can arrange a JavaZone with no limitations this year, and that we can meet up in Oslo Spektrum in September for the best JavaZone ever! If you signed up for a JavaZone partnership in 2021, you should reveive an email regarding the next steps for confirming your partnership for this year. You can also sign up for partnership on this <InlineLink color="blue" url="https://forms.gle/Nkpeghsaec1gyMLs5">Google form</InlineLink> (If you weren't a partner in 2020, please sign up using this form as well)
                </p>
            </Section>
            <Section color="blue" header={<h1>Our philosophy: Partners, not sponsors</h1>}>
                <p>
                    We want JavaZone‘s Expo Area to be an attractive space where our partners and participants can hang out and spend time together. In previous years, our partners have done a great job helping us achieve this goal, and we look forward to seeing what they bring to JavaZone 2022! JavaZone’s Expo Area is a vibrant, busy space full of life and activity. As a partner you are not just supporting our conference economically – you participate in the event and help creating a unique atmosphere. We work closely with our partners to help them realize their ideas and make the most out of their stands. Have you got a great concept for your JavaZone stand and need help to realize it? Don’t be shy - just ask us. Almost anything is possible!
                </p>
            </Section>
            <CenterSection color="blue" header={<h1>The Expo Area</h1>}>
                <p>
                    All our partner stands are traditionally located in the Expo Area, which is located in the center of the venue. During each break, the Expo is full of attendees. This is partly because we continuously serve food from the restaurant stands – throughout the day, and partly because of you – our partners – make this area one of the liveliest Expo Areas of any conference.
                </p>
                <p>
                    Don‘t you believe us? Have a look for yourself! Our new partners are always surprised by the huge attention their stands receive in the Expo Area. We have put together a short 15-second timelapse from 2 hours of Expo time, showing both the flow of people during talks and in the breaks between talks. Yes, you get exposure to that many people, for a total of 20 hours!
                </p>
                <p>
                    <i>The video below shows a time-lapse of the JavaZone 2018 event.</i>
                </p>
            </CenterSection>
            <CenterSection>
                <Suspense fallback={<img src="splash.jpg" alt="splash loading screen" />}>
                    <video style={{width: '100%'}} muted controls id="backgroundLapse">
                        <VideoSource canPlayWebm={canPlayWebm} oldTimelapse={true} />
                        Your browser does not support HTML5 video.
                    </video>
                </Suspense>
            </CenterSection>
            <Section color="blue" header={<h1>Partner Options</h1>}>
                <p>
                    Even though all partners are considered equal, there are a few options to choose from. There is a base package that everyone gets, and then there are a few available expansions. Note that these expansions have limited availability.
                </p>
                <h2>Included in all partnerships</h2>
                <ul>
                    <li>A 6-square meter stand space in the central arena at Oslo Spektrum with two side walls.</li>
                    <li>4 tickets to the conference for manning the stand.</li>
                    <li>Discounted participant tickets for your employees.</li>
                    <li>Branding on <InlineLink color="blue" external url="https://www.javazone.no">javazone.no</InlineLink>, at the venue, the program and in other promotional material that JavaZone produces.</li>
                </ul>
                <h2>Possible expansions</h2>
                <h4>Extended Stand Space</h4>
                <ul>
                    <li>Double the stand area to 12 square meters.</li>
                    <li>One long back wall. It is also possible to divide the area in two if you would prefer.</li>
                </ul>
                <h4>Restaurant Stand</h4>
                <ul>
                    <li>A dedicated food stand serving food throughout the conference. The menu will be decided in collaboration between yourselves and our event partners.</li>
                    <li>Approx. 108 square meters (12 x 9).</li>
                    <li>4-meter high back wall.</li>
                </ul>
                <h4>Concept Stand</h4>
                <ul>
                    <li>A large space for presenting your own 'concept'. This could be, for example, a gaming area, a coffee bar, or a chillout area.</li>
                    <li>Approx. 70 square meters (10 x 7).</li>
                    <li>4-meter high back wall.</li>
                </ul>
                <h4>Lounge Stand</h4>
                <ul>
                    <li>A package at the same price as the "Standard package". The space given is bigger, but located in one of two areas outside the main hall.</li>
                    <li>Option 1: the west wing lounge, located just to the side of the main hall.</li>
                    <li>Option 2: in the outer ring of the Spektrum arena, located on the route between the presentation rooms and the main hall.</li>
                    <li>Optional backing wall to the area, or some freedom to design your own use of the space.</li>
                </ul>
            </Section>
            <Figure name="ragnar"/>
            <CenterSection color="blue" header={<h1>Partnership prices</h1>}>
                <TicketPrice>82.000</TicketPrice>
                <p>
                    <i>Note that all 50+ partnerships for JavaZone 2019 were sold out long before the conference.</i>
                </p>
                <p>
                    All partnerships have a base price for entry which gives you everything described above.
                    We also have some add-ons, as well as tickets for your employees, priced below.
                </p>
            </CenterSection>
            <Section color="blue" header={<h1>Partnership stand</h1>}>
                <PartnerPriceList>
                    <PartnerPrice item="Extra Stand Space">45.000</PartnerPrice>
                    <PartnerPrice item="Restaurant Stand">73.000</PartnerPrice>
                    <PartnerPrice item="Concept Stand">68.000</PartnerPrice>
                </PartnerPriceList>
            </Section>
            <Section color="blue" header={<h1>Partnership ticket</h1>}>
                <PartnerPriceList>
                    <PartnerPrice item="Tickets for employees (1 - 30)">7.190</PartnerPrice>
                    <PartnerPrice item="Tickets for employees (31 - 50)">6.990</PartnerPrice>
                    <PartnerPrice item="Tickets for employees (51 - ∞)">6.790</PartnerPrice>
                    <PartnerPrice
                        item="Tickets for employees (Partner Late-Bird - After June 30th, 2022)">7.890</PartnerPrice>
                </PartnerPriceList>
            </Section>
            <ImageSection imageName="2018/180912_JavaZone_0158"/>
            <CenterSection color="blue" header={<h1>Contact us</h1>}>
                <p>You can contact us about partnership details at <InlineLink color="blue" external url="mailto:partner@java.no">partner@java.no</InlineLink></p>
            </CenterSection>

        </>
    )
}
