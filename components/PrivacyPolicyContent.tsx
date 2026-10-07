import { site } from "@/data/site";

/**
 * Privacy Policy for Ziatan LLC, shared by both templates.
 * Plain-language rewrite of the live policy at https://kineticfiber.us/privacy-policy/
 * (version "Last Updated: January 21, 2026"). Every right, obligation and legal point is kept.
 * Only two content changes: "TV" removed from the services list (Kinetic does not sell a TV
 * product) and the line about the quality of our support now says "sales support" (we are a reseller).
 */
export function PrivacyPolicyContent() {
  const name = site.legalName;
  return (
    <div className="space-y-10 leading-relaxed [&_h2]:text-3xl [&_h3]:mt-5 [&_h3]:text-xl [&_li]:ml-5 [&_li]:list-disc [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:space-y-2">
      <p className="font-bold">Last updated: {site.policyLastUpdated}</p>

      <section>
        <h2>who we are</h2>
        <p>
          Hi! We&apos;re {name} (&quot;{name},&quot; &quot;we,&quot; &quot;us&quot; or &quot;our&quot;). This policy
          explains what information we collect through kineticfiber.us (the &quot;Site&quot;) and through the sales
          support we give by phone, how we use it and how we protect it.
        </p>
        <p>
          We&apos;re an independent Authorized Kinetic Agent. Our job is to help you learn about, compare and order
          Kinetic Internet and Kinetic Home Phone. We are not Kinetic, we are not a telecommunications carrier, and we
          don&apos;t own or run any telecommunications network.
        </p>
        <p>
          This policy only covers kineticfiber.us. It doesn&apos;t cover websites run by Kinetic or anyone else.
        </p>
      </section>

      <section>
        <h2>what information we collect</h2>
        <p>
          We keep this to a minimum: only what we need to answer your questions and help place your order with
          Kinetic as an authorized agent.
        </p>
        <h3>what you tell us</h3>
        <p>
          When you fill in a form on the Site or talk with our team by phone, you may share your name, service
          address, email address and phone number, plus details about the services you&apos;re interested in.
        </p>
        <h3>call recordings</h3>
        <p>
          We record calls you make to us, and the follow-up calls we make to you. We use these recordings for quality
          checks, training, compliance and resolving disputes. We let callers know that calls are recorded.
        </p>
        <h3>information collected automatically</h3>
        <p>
          When you visit the Site, we and our analytics providers may automatically collect technical details such as
          your IP address, browser and device type, the pages you look at, and the date and time of your visit. We do
          this using cookies and similar technologies.
        </p>
        <h3>what we don&apos;t want</h3>
        <p>
          We never ask for sensitive information like your Social Security number or payment card numbers, and we ask
          you not to share them with us. The Site doesn&apos;t process payments. If sensitive information is shared
          with us by accident, we take steps to remove it.
        </p>
      </section>

      <section>
        <h2>how we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>answer your questions and requests</li>
          <li>help you compare Kinetic plans and place your order with Kinetic</li>
          <li>get in touch about your inquiry, including a limited number of follow-up calls to numbers that contacted us</li>
          <li>run, maintain and improve the Site</li>
          <li>check and improve the quality of our sales support</li>
          <li>follow the law and protect our legal rights</li>
        </ul>
      </section>

      <section>
        <h2>cookies and analytics</h2>
        <p>
          The Site uses cookies and similar technologies so it works properly and so we can understand how people use
          it. You can control cookies in your browser settings, but turning them off may stop some parts of the Site
          from working.
        </p>
        <p>
          We may use third-party analytics services. They set their own cookies and handle data under their own
          privacy policies.
        </p>
      </section>

      <section>
        <h2>who we share your information with</h2>
        <p>We don&apos;t sell or rent your personal information. We only share it in these situations:</p>
        <ul>
          <li>
            <strong className="font-bold">With Kinetic.</strong> To process and complete your order, we share the
            information Kinetic needs. Once your order is with Kinetic, Kinetic&apos;s own privacy policy and terms
            cover any personal and payment information you give to Kinetic.
          </li>
          <li>
            <strong className="font-bold">With our service providers.</strong> We may share information with companies
            that work for us, such as hosting, phone and analytics providers. They may only use it to provide those
            services to us.
          </li>
          <li>
            <strong className="font-bold">For legal reasons.</strong> We may share information if the law requires it,
            or to protect the rights, safety or property of {name}, our customers or others.
          </li>
        </ul>
      </section>

      <section>
        <h2>call recording</h2>
        <p>
          Calls to and from {name} may be monitored or recorded. Where the law requires it, we&apos;ll tell you at the
          start of the call. We use recordings for quality checks, training, compliance and resolving disputes.
        </p>
      </section>

      <section>
        <h2>how long we keep information</h2>
        <p>
          We keep information only as long as we need it for the reasons in this policy, or as long as the law
          requires. Call recordings are kept for up to five (5) years. Contact details we use for follow-up are kept
          for a limited time and then deleted.
        </p>
      </section>

      <section>
        <h2>how we protect information</h2>
        <p>
          We use administrative, technical and physical safeguards to protect the information we hold from
          unauthorized access, use or disclosure. These include access controls, encryption of stored data where
          appropriate, network security measures and ongoing monitoring.
        </p>
        <p>
          That said, no way of sending or storing data is completely secure, so we can&apos;t guarantee absolute
          security.
        </p>
      </section>

      <section>
        <h2>your choices and rights</h2>
        <p>
          You can contact us at any time, using the details in &quot;contact us&quot; below, to ask what information
          we hold about you, to ask us to correct it, or to ask us to delete it. We&apos;ll respond as the law
          requires.
        </p>
        <h3>follow-up calls</h3>
        <p>
          Don&apos;t want follow-up calls from us? Just tell us during any call, or contact us using the details below,
          and we&apos;ll respect your request.
        </p>
        <h3>California residents</h3>
        <p>
          {name} is based in California. To the extent the California Consumer Privacy Act, as amended by the
          California Privacy Rights Act, applies to us, California residents have the right to:
        </p>
        <ul>
          <li>know what personal information we collect, use and disclose</li>
          <li>ask us to delete personal information</li>
          <li>ask us to correct inaccurate personal information</li>
          <li>not be discriminated against for using these rights</li>
        </ul>
        <p>
          We don&apos;t sell or share personal information for cross-context behavioral advertising. To use any of
          these rights, contact us using the details below.
        </p>
      </section>

      <section>
        <h2>children&apos;s privacy</h2>
        <p>
          The Site is meant for adults and isn&apos;t aimed at children under 13. We don&apos;t knowingly collect
          personal information from children under 13. If you think a child has given us information, please contact
          us and we&apos;ll delete it.
        </p>
      </section>

      <section>
        <h2>changes to this policy</h2>
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date at the top shows when it was
          last changed. We&apos;ll post any important changes on this page.
        </p>
      </section>

      <section>
        <h2>contact us</h2>
        <p>Questions about this policy, or want to use your privacy rights? Get in touch:</p>
        <p>
          {name}
          <br />
          {site.address}
          <br />
          Email:{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <br />
          Phone:{" "}
          <a className="underline" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <br />
          Hours: {site.salesHours}
        </p>
      </section>
    </div>
  );
}
