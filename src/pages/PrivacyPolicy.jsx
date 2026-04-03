import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-2xl border border-gray-100 p-8 sm:p-12 text-gray-700 leading-relaxed">
          
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8 border-b pb-4">
            Privacy Policy
          </h1>

          {/* Information Gathering */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Gathering</h2>
            <p className="mb-4">Kaarwaa.N collects information from the users in a number of ways, for example when the user:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Makes a donation</li>
              <li>Signs up for a member and volunteer login</li>
              <li>Submits creative ideas and feedbacks</li>
            </ul>
            <p className="mb-4">
              While forwarding a donation for Kaarwaa.N the well-wishers have to submit some personal information as it would help us ensuring genuine contributions:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Your name</li>
              <li>Your email and mailing address</li>
              <li>Your contact number</li>
              <li>Your payment processing details</li>
              <li>Any other data as required</li>
            </ul>
            <p>Kaarwaa.N does not collect or record the user’s personal information unless he/she chooses to provide it.</p>
          </div>

          {/* Use of Personal Information */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Personal Information</h2>
            <p className="mb-4">
              General browsing of Kaarwaa.N website is anonymous and it does not register the user's personal information except the time, date and place of visits and the name of internet service provider. This data is used only for statistics and diagnosis.
            </p>
            <p className="mb-4">
              By signing up for various services offered by Kaarwaa.N the user explicitly authorizes us to collect information based on the user’s usage. The information is used to help provide a better experience to the user and is used as per the user’s specified instructions.
            </p>
            <p className="mb-4">
              Kaarwaa.N keeps the user information strictly confidential and this information is secured safely. All relevant information collected through the website is handled and used by internal and authorized officials only. It is never shared with any external agencies or third party individuals.
            </p>
            <p className="mb-4">Kaarwaa.N uses the information given to it in the following ways:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>To keep an accurate record of all the donations received</li>
              <li>To update users about its happenings and developments through bulletins and newsletters, with an option of not to subscribe for the same</li>
              <li>To make sure the user is receiving the most appropriate and relevant information</li>
              <li>To find out more about the people who are visiting the Kaarwaa.N website, donating, or joining its program.</li>
            </ul>
            <p>
              Usually, Kaarwaa.N does not store user data. In case of specific sign-ups, the data is stored as per user request. The user can opt to delete all the information he/she has provided by simply requesting such by mail. All information, without exception, will be deleted in two working days.
            </p>
          </div>

          {/* Privacy of e-mail lists */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy of e-mail lists</h2>
            <p>
              Individuals who join Kaarwaa.N’s mailing lists via its website or through its campaigning engagements are added to its email database. Kaarwaa.N does not sell, rent, loan, trade, or lease the addresses on our lists to anyone.
            </p>
          </div>

          {/* Payment Gateway */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Gateway</h2>
            <p className="mb-4">
              Kaarwaa.N uses well-recognised and proven technology for payments. Payment information is transferred by the use of an SSL connection which offers the highest degree of security that the donor’s browser is able to support.
            </p>
            <p>
              Several layers of built-in security, including an advanced firewall system, encryption of credit card numbers, and use of passwords, protect the collected information.
            </p>
          </div>

          {/* External Web Services */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">External Web Services</h2>
            <p className="mb-4">
              Kaarwaa.N uses a number of external web services on its site to display content within its web pages. For example, to display video it uses YouTube. As with the social media buttons, Kaarwaa.N cannot prevent these sites, or external domains, from collecting information on the user’s consumption of the content embedded on its site.
            </p>
            <p className="mb-4">
              The Kaarwaa.N website contains links to other websites for the benefit of its visitors. This Privacy Policy does not apply to such other websites.
            </p>
            <p>
              Kaarwaa.N is not expressly or impliedly responsible for, or liable to any loss or damage caused to a user by the collection, use and retention of Personal Information by such website in any manner whatsoever. It is important that the users review the privacy policies of all websites they visit before disclosing any information to such websites.
            </p>
          </div>

          {/* Refund and Cancellation Policy */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund and Cancellation Policy</h2>
            <p className="mb-4">
              We make public our policy on refund and cancellation of donations received for the social cause on payment gateway as under:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No refund/cancellation for the donated amount by any donor will be entertained for the online donations through the online payment gateway.</li>
              <li>No cash or refund of money will be allowed.</li>
              <li>Once received, the donation for a cause will not be refunded to the donor. No cancellation to be made. The donation will be used for children's education and other social welfare activities.</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p className="font-semibold text-gray-800">Kaarwaa.N</p>
              <p>Jabalpur Engineering College, Gokulpur</p>
              <p>Jabalpur (M.P.) - 482011</p>
              <p className="mt-2">
                <span className="font-medium text-gray-900">Phone:</span> +91 91497 20731
              </p>
            </address>
          </div>

        </div>
      </div>
    </section>
  );
}