import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const sendEmailForm = async (formElement, t) => {
  return emailjs
    .sendForm(
      "service_38ayfvj",     // ← EmailJS SERVICE ID
      "template_o216bik",    // ← EmailJS TEMPLATE ID
      formElement,
      "25-NLK5hj1vJMF4tO"   // ← EmailJS PUBLIC KEY
    )
    .then(
      () => {
        Swal.fire({
          title: t("contact-message"),
          icon: "success",
          draggable: true,
        });
      },
      () => {
        Swal.fire({
          title: t("contact-error"),
          icon: "error",
          draggable: true,
        });
      }
    );
};
