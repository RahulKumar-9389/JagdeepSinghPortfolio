import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Layout from '../layout/Layout';
import TransactionEffect from '../components/TransactionEffect';

const Experience = () => {
    return <>
        <Layout title="Experience">
            <TransactionEffect />
            <section id="experience">
                <h1>Experience!</h1>

                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#139ae1', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #139ae1' }}
                        date="March 2020 - Aug 2021"
                        dateClassName='date'
                        iconStyle={{ background: '#139ae1', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title experience_title">Full Stack Developer</h3>
                        <p className='experience_text'>
                            As a team lead, I led MERN stack development, integrating PHP expertise seamlessly. Directed dynamic web app creation, achieved complex project deliveries, flawless API integrations, and fostered cohesive team synergy.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#139ae1', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #139ae1' }}
                        date="March 2020 - Aug 2021"
                        dateClassName='date'
                        iconStyle={{ background: '#139ae1', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title experience_title">Full Stack Developer</h3>
                        <p className='experience_text'>
                            As a team lead, I led MERN stack development, integrating PHP expertise seamlessly. Directed dynamic web app creation, achieved complex project deliveries, flawless API integrations, and fostered cohesive team synergy.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#139ae1', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #139ae1' }}
                        date="March 2020 - Aug 2021"
                        dateClassName='date'
                        iconStyle={{ background: '#139ae1', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title experience_title">Full Stack Developer</h3>
                        <p className='experience_text'>
                            As a team lead, I led MERN stack development, integrating PHP expertise seamlessly. Directed dynamic web app creation, achieved complex project deliveries, flawless API integrations, and fostered cohesive team synergy.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#139ae1', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #139ae1' }}
                        date="March 2020 - Aug 2021"
                        dateClassName='date'
                        iconStyle={{ background: '#139ae1', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title experience_title">Full Stack Developer</h3>
                        <p className='experience_text'>
                            As a team lead, I led MERN stack development, integrating PHP expertise seamlessly. Directed dynamic web app creation, achieved complex project deliveries, flawless API integrations, and fostered cohesive team synergy.
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline >
            </section>
        </Layout>
    </>
};

export default Experience;