import React from "react"
import Header from "../components/Header.js"
import Edgeimg from "../images/edge-building-product.webp"
import Footer from "./Footer.js"

export default function Edge() {
  return (
    <div>
      <Header />
      <h1 id="eh1">We love building digital products.</h1>
      <div id="eg1">
        <p id="ep1">
          We are small yet creative team that thrives to make stuff that people
          would love to use. Our love for the technologies both proven and
          emerging that drives us to learn, evaluate and use them in an
          effiecient way. Keeping a tab on the latest Open Source technologies
          that helps us provide better and cost effective solutions to our
          clients.
        </p>

        <img src={Edgeimg} id="eimg1"></img>
      </div>
      <div id="ep2">
        {" "}
        <p>
          Our focus is our clients and we start with building relationship,
          establishing better communication and staying disciplined and devoted
          to the success of the project. We belive if we will be equally
          passionate and excited about your idea or project then the outcome
          wouldn’t be any less than perfect.
        </p>
        <p>
          {" "}
          Internalizing these ideas helps us providing our clients with the best
          solutions and remote engineers.
        </p>
      </div>
      <div>
        <h2 id="eh21">Functional Values</h2>
        <p id='ep3'>
          Whether you come to us for Product or Engineering Talent, we abdie by
          the values which helps us deliver quality and a perfect customer
          experience. Internalizing these ideas helps us providing our clients
          with the best solutions and remote engineers.
        </p>
        <h2 id="eh22">Clear communication</h2>
        <p id="ep4">
          Clear communication Communication is the key element of any successful
          project. Keeping the stakeholders on the same page as the engineer on
          the team is vital for us, as this helps us navigate roadblocks during
          the project course. This also provides an opportunity to our
          stakeholders and us to work around any unforseen changes resulting in
          better outcome.
        </p>
        <h2 id="eh23">Defined Goal</h2>
        <p id="ep5">
          For a timely and desired outcome we formulate our goal so as to attain
          them in planned time frame and budget. This gives us a clear direction
          and helps us move forward at speed, yet stay focuses on the purpose of
          the project. Well defined goal helps us align ourselves with our
          clients and help deliver a great client experience.
        </p>
        <h2 id="eh24">Adaptive Team</h2>
        <p id="ep6">
          At times changing conditions or goals risks performance and outcomes
          and any oversight of such changes can risk the entire project. Our
          ability to prepare for and adapt to changing conditions and at times
          evolving goals keeps us agile. We keep our foresight and learning
          throughout the project and keep aware of any changes or risks which
          helps us keep our team prepared and adaptive in moving forward towards
          successful completion.
        </p>
        <h2 id="eh25">Performance</h2>
        <p id="ep7">
          Measuring performance at both the project and engineering level
          ensures strategic success. Staying focused on project outcomes and
          evaluating performance based on established data points, helps us
          target better performance at both project and individual levels.
          Transforming goals to tangible action and evaluating it ensures better
          project success for everyone.
        </p>
        <h2 id="eh26">Quality</h2>
        <p id="ep8">
          Ensuring all the the deliverables are on mark with the project
          expectations is highly important to us. Monoitoring outupt at every
          stage, be it product under development or the engineering resource
          working , helps ensure standards. Tracking all the aspects, ensuring
          expectations are met and avoiding mistake by mapping quality metrics
          enables quality deliverables.
        </p>
        <h2 id="eh27">Flexibility</h2>
        <p id="ep9">
          Goals and requirements can vary since no two projects are alike.
          Scaling up engineering resources fast or at times just scaling down to
          shift focus on greater prioritoes. We understand business cycles that
          demand greater flexibility. We work to be as elastic as possible with
          our clients in providing engineering resources or product development
          in terms of time and budget for greater success.
        </p>
      </div>
      <Footer />
    </div>
  )
}
