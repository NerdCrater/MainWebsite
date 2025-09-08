export default function TermsAndConditions() {
  return (
    <div className="bg-[#d6d7dc] min-h-screen py-12 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#F49F1C]">
          Terms and Conditions
        </h1>
        <p className="text-[#30396d] mb-6">
          Welcome to <span className="text-[#F49F1C] font-semibold">NerdCrater</span>. 
          These Terms and Conditions govern your use of our website, products, and services. 
          By accessing or engaging our services, you agree to comply with these Terms. 
          If you do not agree, please do not use our services.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#F49F1C]">
          1. Scope of Services
        </h2>
        <p className="text-[#30396d] mb-4">
          NerdCrater provides technology solutions including but not limited to:
        </p>
        <ul className="list-disc pl-6 text-[#30396d] mb-4">
          <li>Website design and development</li>
          <li>Mobile application development</li>
          <li>UI/UX design and prototyping</li>
          <li>Custom software solutions</li>
          <li>Technology consultation and support</li>
        </ul>
        <p className="text-[#30396d]">
          The exact scope, deliverables, and timelines will be specified in
          project agreements, proposals, or contracts signed between NerdCrater
          and the client.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#F49F1C]">
          2. Client Responsibilities
        </h2>
        <ul className="list-disc pl-6 text-[#30396d] mb-4">
          <li>Provide accurate project requirements, feedback, and approvals within agreed timelines.</li>
          <li>Supply necessary content, images, branding materials, or third-party licenses required for project completion.</li>
          <li>Ensure that all materials provided do not infringe on the intellectual property rights of third parties.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#F49F1C]">
          3. Payments & Invoicing
        </h2>
        <ul className="list-disc pl-6 text-[#30396d] mb-4">
          <li>Fees and payment schedules will be communicated in writing before the start of any project.</li>
          <li>A non-refundable advance payment may be required before work begins.</li>
          <li>All invoices must be paid within the agreed time frame. Late payments may attract interest charges or suspension of services.</li>
          <li>Payments are non-refundable unless otherwise specified in writing.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#F49F1C]">
          4. Revisions & Support
        </h2>
        <p className="text-[#30396d] mb-4">
          NerdCrater provides a fixed number of revisions as agreed in the project contract. 
          Additional revisions or support beyond the agreed scope will be chargeable. 
          Post-launch support and maintenance can be availed through separate service agreements.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#F49F1C]">
          5. Intellectual Property Rights
        </h2>
        <ul className="list-disc pl-6 text-[#30396d] mb-4">
          <li>Clients will own the final deliverables upon full payment unless otherwise stated in the contract.</li>
          <li>NerdCrater reserves the right to showcase completed projects in its portfolio, website, and marketing materials.</li>
          <li>All pre-existing code, frameworks, and tools developed by NerdCrater remain the property of NerdCrater.</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#F49F1C]">
          6. Confidentiality
        </h2>
        <p className="text-[#30396d] mb-4">
          Both parties agree to keep confidential information secure and not disclose it to third parties without prior consent. 
          Confidential information includes business strategies, project details, client data, and proprietary information.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#F49F1C]">
          7. Limitation of Liability
        </h2>
        <p className="text-[#30396d] mb-4">
          NerdCrater strives to provide high-quality services but does not guarantee that deliverables will be free from errors or bugs. 
          We are not liable for indirect, incidental, or consequential damages resulting from the use or inability to use our services.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#F49F1C]">
          8. Termination
        </h2>
        <p className="text-[#30396d] mb-4">
          Either party may terminate the contract with written notice if the other party breaches these Terms. 
          In case of termination, the client must pay for all completed work and resources used until the termination date.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#F49F1C]">
          9. Third-Party Services
        </h2>
        <p className="text-[#30396d] mb-4">
          NerdCrater may integrate or recommend third-party tools, APIs, or hosting providers. 
          We are not responsible for the availability, performance, or terms of third-party services.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#F49F1C]">
          10. Governing Law & Jurisdiction
        </h2>
        <p className="text-[#30396d] mb-4">
          These Terms and Conditions shall be governed by the laws of India. 
          Any disputes will fall under the exclusive jurisdiction of the courts in [Your City, India].
        </p>

        <p className="mt-10 text-sm text-[#30396d]">
          Last updated: September 2025
        </p>
      </div>
    </div>
  );
}
