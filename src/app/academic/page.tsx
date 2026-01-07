export default function Academic() {
  return (
    <>
<main className="academic-container">

    <h1>Academic Help</h1>
    <p className="academic-intro">
        Uni study is less about working harder and more about working smarter.
        These tools and habits can make a real difference to how manageable study feels.
    </p>

    {/* <!-- STUDY TOOLS --> */}
    <section className="study-tools">

        <h2>Study tools that actually help</h2>

        {/* <!-- NOTION --> */}
        <div className="tool-card">
            <div className="tool-text">
                <h3>Notion</h3>
                <p>
                    Notion is a powerful note-taking and organisation tool that lets you keep
                    lecture notes, deadlines, task lists, and schedules all in one place.
                </p>
                <ul>
                    <li>Create separate pages for each paper or subject</li>
                    <li>Organise notes by week or topic</li>
                    <li>Track assignments and deadlines visually</li>
                    <li>Great if you like structure and customisation</li>
                </ul>
            </div>

            <div className="tool-image">
                <img src="/notion-example.png" alt="Example of organised Notion notes"/>
            </div>
        </div>

        {/* <!-- ONENOTE --> */}
        <div className="tool-card">
            <div className="tool-text">
                <h3>OneNote</h3>
                <p>
                    OneNote works well if you prefer a more traditional notebook style.
                    It’s especially useful for handwritten notes, diagrams, and annotating slides.
                </p>
                <ul>
                    <li>Good for pen + tablet users</li>
                    <li>Easy to organise by notebooks and sections</li>
                    <li>Syncs across devices</li>
                    <li>Less setup, more writing</li>
                </ul>
            </div>

            <div className="tool-image">
                <img src="/onenote-example.png" alt="Example of OneNote notes"/>
            </div>
        </div>

    </section>

    {/* <!-- ACADEMIC HABITS --> */}
    <section className="academic-habits">

        <h2>Academic habits that really matter</h2>

        <ul>
            <li>
                <strong>Look at past papers early.</strong>  
                If your course provides past exams, use them to understand how questions are asked,
                not just what content is covered. Exams in university tend to be nicer than high school
                in some ways, as the past paper content can often be the same structure and type as the 
                real exam (which means you are not often in an exam surprised with a question you've never done before).
                It's really important to look at any old content as well, that often comes up in exams and talk to lecturers
                if you can, so they can give you advice on what you should focus on the most. This is why listening/going 
                to lectures is really important, because sometimes certain topics are briefly covered, which end up becoming
                a really big mark question in the real exam.
            </li>

            <li>
                <strong>Don’t rewrite notes endlessly.</strong>  
                Focus on understanding concepts and practising questions instead. It's important,
                however, to write down things by hand as you will remember them better, and in degrees
                like engineering, you have most exams on paper.
            </li>

            <li>
                <strong>Use support early.</strong>  
                Learning advisors, student hubs, and tutors are there to help...
                not just when you’re failing.
                However, university is independent so it is up to you to understand the content
                by yourself at times and use tools like Youtube, or past lecture videos.
                Although showing up at lectures is important, you need to figure out how you learn best
                and what study style is most productive for you. The first semester will be the hardest,
                where you are trying to understand by yourself at times, without constantly being able 
                to talk to teachers about it. But there are lots of great study techniques like scheduling
                certain study sessions, or even studying with your peers which can be an immense help.
            </li>

            <li>
                <strong>Studying looks different at uni.</strong>  
                Feeling lost at first does not mean you’re behind.. it means you’re adjusting.
                Study at university becomes quite independent when compared to high school. This takes a lot
                of time to get used to, and concepts at university are covered really fast. Some students even 
                say that a lecture sometimes is comparible to a whole term of learning in high school! So the most
                important thing is to not leave things to the last minute as you will not get a good grasp of the content
                that way. 
            </li>

            <li>
                <strong>Study with your peers</strong>  
                Studying with peers can be something that becomes really helpful, especially when you get closer to tests 
                and exams. Helping each other look at questions a different way, or having discussions can really help 
                you better grasp the content and get an understanding of what the question is really asking. It can 
                also be really helpful studying with your peers because you will have individual strengths and weaknesses
                that you can help each other on, as well as being able to test each other on certain questions using 
                flashcards etc. University can be a really isolating space, and being able to not rely on student services 
                for help all the time will help you in the future, as you will learn to get more independent in solving 
                questions and understanding different problems.  
            </li>
        </ul>

    </section>

</main>
    </>
  );
}
