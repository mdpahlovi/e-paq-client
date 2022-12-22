import React from "react";

const ContactCard = ({ contact }) => {
    const { title, email, number, icon } = contact;
    return (
        <div className="p-6 flex items-start gap-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-black text-xl">{icon}</div>
            <div>
                <p className="font-bold">{title}</p>
                <p className="text-gray-500">{email}</p>
                <p className="text-gray-500">{number}</p>
            </div>
        </div>
    );
};

export default ContactCard;
