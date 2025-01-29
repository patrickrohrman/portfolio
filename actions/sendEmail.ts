"use server";

import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }
    return true;
}

export const sendEmail = async (formData: FormData) => {
    console.log("server side email...");
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));

    const message = formData.get("message");
    const senderEmail = formData.get("senderEmail");

    if (!message || typeof message !== "string") {
        return { error: "Bad message"};
    }

    if (!validateString(message, 6000) || !validateString(senderEmail, 200)) {
        return { error: "Invalid input" };
    }

    try{
        await resend.emails.send({ from: 'Contact Form <onboarding@resend.dev>', to: 'prohrman@gmail.com', subject: 'Hello from Resend', text: message, replyTo: senderEmail as string, });
    } catch (error: unknown) {
        console.log(error);       
    }    
};