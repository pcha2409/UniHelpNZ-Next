export default function Adjusting() {
  return (
    <>
              {/* <!-- NAVBAR --> */}
    <nav className="navbar">
        
        <ul className="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="budgeting.html">Budgeting</a></li>
    <li><a href="academic.html">Academic Help</a></li>
    <li><a href="adjusting.html">Adjusting to Uni Life</a></li>
    <li><a href="figuring.html">Figuring out your career path</a></li>
    <li><a href="which-uni.html">Which Uni should I go to?</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="student-loan.html">Applying for a student Loan</a></li>
</ul>
    </nav>

    {/* <!-- HEADER --> */}
    <header>
        <h1>Adjusting to Uni Life</h1>
        <p>
            Starting uni can feel overwhelming in different ways.
            Click what feels hardest right now for you or something you feel will be challenging for you when you start university.
            <strong>Also check the 'Uni terms' section below too as it gives you a better idea of the new terms you will
                encounter when you start university.
            </strong>
        </p>
    </header>

    {/* <!-- MAIN --> */}
    <main 
    className="adjusting-container">

        <h2>Which part of uni feels toughest for you?</h2>

        {/* <!-- BUTTONS --> */}
        <div className="challenge-buttons">
            <button onclick="showSolution('lonely')">Feeling lonely</button>
            <button onclick="showSolution('academic')">Academic pressure</button>
            <button onclick="showSolution('overwhelmed')">Feeling overwhelmed</button>
            <button onclick="showSolution('balance')">Balancing everything</button>
            <button onclick="showSolution('confidence')">Doubting myself</button>
        </div>

        {/* <!-- SOLUTIONS --> */}
        <div className="solutions">

            <div id="lonely" className="solution-box">
                <h3>Feeling lonely</h3>
                <p>
                    Feeling lonely at uni is far more common than people admit...especially at the start.
                    Making friends doesn’t happen instantly, and that’s okay.
                </p>
                <ul>
                    <li>Join clubs or societies that genuinely interest you (even quietly at first)</li>
                    <li>Reach out to student wellbeing or peer support if loneliness feels heavy</li>
                    <li>Here are some links that can give you information on different universities' clubs:</li>
                    <p>
                    <a href="https://www.auckland.ac.nz/en/on-campus/life-on-campus/clubs-societies.html"
                    target="_blank" rel="noopener noreferrer">
                    - UoA Clubs
                    </a>< br/>

                    <a href="https://www.aut.ac.nz/student-life/around-campus/clubs-and-activities"
                    target="_blank" rel="noopener noreferrer">
                    - AUT Clubs
                </a>< br/>

                    <a href="https://www.otago.ac.nz/studentservices/otherservices/clubs-and-societies"
                    target="_blank" rel="noopener noreferrer">
                        - Otago University Clubs
                    </a>
                    </p>

                </ul>
            </div>

            <div id="academic" className="solution-box">
                <h3>Academic pressure</h3>
                <p>
                    Uni learning is very different from school and struggling does not mean you’re not capable.
                    It usually means you’re adjusting.
                </p>
                <ul>
                    <li>Check out the <a href="academic.html">Academic Help</a> section for study tips, support, and sources</li>
                    <li>Use learning advisors and student hubs early, not only when things feel bad</li>
                    <li>Ask questions, even if they feel “basic”</li>
                </ul>
            </div>

            <div id="overwhelmed" className="solution-box">
                <h3>Feeling overwhelmed</h3>
                <p>
                    Uni throws a lot at you at once: systems, deadlines, emails, expectations.
                    Feeling overwhelmed doesn’t mean you’re failing.
                </p>
                <ul>
                    <li>Break tasks into smaller steps (week by week, not semester-wide)</li>
                    <li>Use planners or digital calendars to externalise your workload</li>
                    <li>Remember: doing less, consistently, is better than burning out</li>
                    <li>Here are some links to mental health services that universities provide for students:</li>
                    <a href="https://www.aut.ac.nz/student-life/student-health-and-wellbeing/counselling-and-mental-health-support" target="_blank" rel="noopener nonreferrer">- AUT Mental Health Support</a>< br/>
                    <a href="https://www.auckland.ac.nz/en/students/student-support/personal-support/student-health-counselling.html" target="_blank" rel="noopener nonreferrer"> - UoA Mental Health Support</a>< br/>
                    <a href="https://www.waikato.ac.nz/students/health-wellbeing/student-health/mental-health/" target="_blank" rel="noopener nonreferrer">- Waikato Mental Health Support</a>< br/>
                    <a href="https://www.otago.ac.nz/studenthealth/services-we-provide/mental-health-and-wellbeing" target="_blank" rel="noopener nonreferrer">- Otago University Mental Health Support</a>
                </ul>
            </div>

            <div id="balance" className="solution-box">
                <h3>Balancing everything</h3>
                <p>
                    Balancing study, work, family, and rest is one of the hardest parts of uni life.
                    There’s no perfect formula.
                </p>
                <ul>
                    <li>It’s okay to reduce work hours if possible during heavy study periods</li>
                    <li>Rest is productive and burnout is not</li>
                    <li>Check what flexibility your university offers</li>
                </ul>
            </div>

            <div id="confidence" className="solution-box">
                <h3>Doubting myself</h3>
                <p>
                    Many students experience imposter syndrome.... even high-achievers.
                    Feeling unsure doesn’t mean you don’t belong.
                </p>
                <ul>
                    <li>Progress at uni is rarely linear</li>
                    <li>Compare yourself to your past self, not others</li>
                    <li>Confidence grows through experience, not perfection</li>
                </ul>
            </div>

        </div>
        
        
<hr style="margin: 10px 0;">

<section className="uni-terms">
    <h2>Uni terms & systems explained</h2>
    <p>
        University uses a lot of new language that no one properly explains.
        Click anything below to understand how it actually works in real life.
    </p>

    <div className="challenge-buttons">
        <button onclick="showTerm('lecture')">Lecture vs Tutorial vs Lab</button>
        <button onclick="showTerm('selfdirected')">Self-directed learning</button>
        <button onclick="showTerm('gpa')">What is GPA?</button>
        <button onclick="showTerm('calculate-gpa')">How GPA is calculated</button>
        <button onclick="showTerm('timetable')">Timetables & schedules</button>
        <button onclick="showTerm('internships')">Internships</button>
    </div>

    <div className="solutions">

        <div id="lecture" className="solution-box">
            <h3>Lecture vs Tutorial vs Lab</h3>
            <p><strong>Lecture:</strong> Large className where content is introduced. You mostly listen and take notes.</p>
            <p><strong>Tutorial:</strong> Smaller group where you discuss, ask questions, and practise problems.</p>
            <p><strong>Lab:</strong> Hands-on sessions where you apply concepts (common in science, engineering, health).</p>
            <p>
                Missing a lecture is usually manageable if it’s recorded, but missing a lab or tutorial can matter much more, 
                as these sessions are often hands-on, interactive, and difficult to replicate on your own. That said, attending 
                lectures in person is still incredibly important. Being physically present helps you stay engaged, pick up 
                on emphasis from the lecturer, ask questions in real time, and better understand how concepts fit together. 
                Even when recordings are available, they should be a backup rather than a default. If you do miss a lecture, 
                it’s essential to go over everything thoroughly — rewatch the recording, review the slides, make proper 
                notes, and identify anything you don’t understand early. Treating lectures as a core part of your learning, 
                rather than something optional, builds consistency and prevents small gaps in understanding from turning into 
                bigger problems later on.
            </p>
        </div>

        <div id="selfdirected" className="solution-box">
            <h3>What self-directed learning actually looks like</h3>
            <p>
                Self-directed learning doesn’t mean teaching yourself everything.
                It means managing your time outside of className. This includes things like:
            </p>
            <ul>
                <li>Watching lectures before or after className</li>
                <li>Doing readings even when no one checks</li>
                <li>Starting assignments earlier than you think you need to</li>
            </ul>
            <p>
               University is an inherently independent environment, and one of 
               the most important shifts students must make is learning to stop
               relying on continual reminders or constant guidance. Unlike school, 
               where deadlines are often repeatedly reinforced and instructions are 
               broken down step-by-step, university expects students to take ownership
               of their learning. This means actively checking course outlines, learning
               management systems, and assessment briefs without being prompted, and recognising
               that it is your responsibility to know what is due and when. Equally important is 
               doing your own research into what an assignment is actually asking, rather than waiting
               for it to be explained again. Carefully reading the task description, identifying key 
               directive words (such as analyse, evaluate, or discuss), and clarifying expectations 
               through rubrics or exemplars allows you to approach the assignment with confidence and purpose. 
               Developing these habits not only improves academic performance but also builds self-discipline, 
               accountability, and critical thinking skills that are essential far beyond university.
                
            </p>
        </div>

        <div id="gpa" className="solution-box">
            <h3>What is GPA?</h3>
            <p>
                GPA (Grade Point Average) is a number that represents your overall academic performance.
                It’s often used for scholarships, postgrad entry, and transfers.
            </p>
            <p>
                Your GPA does not define your intelligence or your worth, and one bad semester does not 
                ruin everything. While grades can matter in some contexts, many companies do not place 
                heavy emphasis on GPA at all; instead, they focus on what you can actually do. Projects 
                you’ve worked on, internships you’ve completed, skills you’ve developed, and your willingness
                to learn often say far more about you than a number on a transcript. Employers value initiative, 
                curiosity, and real-world experience which are things that can’t always be captured by grades alone. Reaching 
                out to people, seeking opportunities, asking questions, and consistently doing your best matters 
                far more in the long run. Growth is rarely linear, and setbacks are part of the process; what counts 
                is how you respond, adapt, and keep moving forward.
            </p>
        </div>

        <div id="internships" className="solution-box">
            <h3>Internships</h3>
            <p>
                Internships are an important part of your degree, with lots of degrees (like engineering)
                which require you to do an X amount of hours of Internships/Work experience
            </p>
            <p>
                A common myth about internships is that you can’t get one in your first year, 
                or that “it just doesn’t happen”...but that simply isn’t true. Many students 
                secure opportunities early because they keep looking and actually begin, rather 
                than waiting until they feel “ready.” It’s important to approach a wide range of 
                companies: aim high with large firms like PwC, but if that doesn’t work out, look at 
                smaller companies, startups, or local organisations where you can gain hands-on experience 
                and real responsibility. What matters most is not the brand name, but the learning and 
                initiative you show. And if you can’t land an internship, that does not mean you’ve failed
                : use the summer to take small online courses, build personal or group projects, contribute 
                to open-source work, or explore areas of interest on your own. Employers care deeply about 
                initiative, curiosity, and effort. Showing that you took ownership of your growth, even without 
                a formal internship, is often exactly what sets candidates apart.

            </p>
        </div>

        <div id="calculate-gpa" className="solution-box">
            <h3>How GPA is calculated</h3>
            <p>
                Each grade corresponds to a number.
                Your GPA is the average of those numbers.
            </p>
            <p><strong>Example:</strong></p>
            <ul>
                <li>A = 8 or 9</li>
                <li>B = 6 or 7</li>
                <li>C = 4 or 5</li>
            </ul>
            <p>
                Different universities calculate GPA slightly differently,
                so always check your uni’s scale. Each university will have a GPA calculator
                which you can search and then add in your (confirmed) grades from Canvas.<br/>

                <strong>* What is Canvas?</strong><br/>
                Canvas is a learning management system that most universities use as the central 
                place for everything related to your courses. It is essentially the main hub for 
                uni and almost everything you need is found there. Each of your papers has its own 
                Canvas page where lecturers upload lecture slides, recordings, readings, announcements, 
                and assignment instructions. This is also where you submit assignments, check due dates, 
                view rubrics, receive feedback, and see your grades. Canvas is usually organised by weeks 
                or topics, which helps you keep track of what content you should be covering and when. 
                Announcements are especially important because lecturers often post updates, clarifications, 
                or changes there instead of sending emails. Canvas also links to quizzes, discussion boards, 
                lab materials, and external tools, which means students are expected to check it regularly 
                without being reminded. Learning how to use Canvas properly early on and checking it daily 
                is a key part of becoming independent at university and staying on top of your workload.
            </p>
        </div>

        <div id="timetable" className="solution-box">
            <h3>Timetables & schedules</h3>
            <p>
                Uni timetables often look messy and spread out.
                Gaps between classNamees are normal.
            </p>
            <ul>
                <li>You might not have classNamees every day</li>
                <li>Some weeks feel lighter, others heavier</li>
                <li>Deadlines cluster so planning helps a lot</li>
            </ul>
            <p>
                University timetables are often messy and spread out, which makes it especially 
                important to intentionally schedule your day and avoid overworking yourself. Planning 
                when you study, rest, commute, and socialise helps bring structure to what can otherwise 
                feel chaotic. At the University of Auckland, students have access to a timetable maker 
                that allows some choice over when lectures are scheduled, but this flexibility is still 
                limited because many core lectures are fixed at certain times. In contrast, at AUT, 
                first-year students are usually given a set timetable, which can be helpful in reducing 
                decision fatigue but still requires personal planning around it. Regardless of the system, 
                the key is learning how to manage your time sustainably and spreading workload across the week, 
                leaving buffer time between classNamees, and recognising that being busy all day does not equal being 
                productive. Learning to balance structure with rest is essential for long-term success at university.
            </p>
        </div>

    </div>
</section>
    </>
  );
}
