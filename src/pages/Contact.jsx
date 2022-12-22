import React from "react";
import { BsHeadset, BsBugFill } from "react-icons/bs";
import { FaCommentsDollar, FaNewspaper } from "react-icons/fa";
import ContactCard from "../components/ContactCard";

const contactData = [
    { title: "Technical support", email: "support@epaq.com", number: "+1 234-567-89", icon: <BsHeadset /> },
    { title: "Sales questions", email: "sales@epaq.com", number: "+1 234-567-89", icon: <FaCommentsDollar /> },
    { title: "Press", email: "press@epaq.com", number: "+1 234-567-89", icon: <FaNewspaper /> },
    { title: "Bug report", email: "bug@epaq.com", number: "+1 234-567-89", icon: <BsBugFill /> },
];

const Contact = () => {
    return (
        <section className="my-container section-gap content-gap">
            <h1 className="heading-text text-center">
                Contact <span className="text-primary">Us</span>
            </h1>
            <p className="max-w-xl mx-auto text-center max-h-[72px] overflow-hidden">
                We use an agile approach to test assumptions and connect with the needs of your audience early and often.
            </p>
            <div className="space-y-8">
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {contactData.map((contact, index) => (
                        <ContactCard key={index} contact={contact} />
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <form className="flex flex-col gap-3">
                        <div className="flex flex-col xs:flex-row gap-5 mb-2">
                            <input type="text" name="fastName" placeholder="Fast Name" className="input-field" />
                            <input type="text" name="lastName" placeholder="Last Name" className="input-field" />
                        </div>
                        <input type="email" name="email" placeholder="Email" className="mb-2 input-field" required />
                        <input type="text" name="subject" placeholder="Subject" className="mb-2 input-field" required />
                        <textarea name="message" className="textarea textarea-primary h-40" placeholder="Message"></textarea>
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                    <div
                        className="bg-cover bg-center rounded-lg"
                        style={{
                            background:
                                "url(https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
