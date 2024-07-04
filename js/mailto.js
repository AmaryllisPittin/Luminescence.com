function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const message = document.getElementById('msg').value;

    const subject = encodeURIComponent('Formulaire de Contact');
    const body = encodeURIComponent(`Nom: ${name}\nE-mail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:amapaddle@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
}