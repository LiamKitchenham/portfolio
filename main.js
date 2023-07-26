const contactForm = document.querySelector(".contactform");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#firstname");
const LnameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#useremail");
const MessageInput = document.querySelector("#message");
const phoneNum = document.querySelector("#usernumber");

const publicKey = "h11b8d2L7TVysO5Z32";
const serviceID = "service_gdqsqda";
const templateID = "service_gdqsqda";

emailjs.init(publicKey);

contactForm.addEventListener("submut", e => {
    e.preventDefault();
    submitBtn.innerText = "Just A Moment...";
    const inputFields = {
        firstname: nameInput.value,
        lastname: LnameInput.value,
        email: emailInput.value,
        phone: phoneNum.value,
        message: MessageInput.value,
    }
emailjs.send(serviceID,templateID,inputFields)
.then(() => {

submitBtn.innerText = "Message Sent Successfully";
nameInput.value = "";
emailInput.value = "";
MessageInput.value = "";

}, (error) => {
    console.log(error);
    submitBtn.innerText = "Something went wrong";
});
});
