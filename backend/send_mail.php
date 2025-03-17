<?php
require_once 'config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    $message = $_POST["message"] ?? "";

    if (!$name || !$email || !$message) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    // Kiểm tra xem biến có được đọc từ config.php hay không
    if (!defined('SMTP_HOST')) {
        echo json_encode(["status" => "error", "message" => "SMTP config not loaded."]);
        exit;
    }

    try {
        
        $mailcontact = new PHPMailer(true);
        $mailcontact->isSMTP();
        $mailcontact->Host = SMTP_HOST;
        $mailcontact->SMTPAuth = true;
        $mailcontact->Username = SMTP_USER;
        $mailcontact->Password = SMTP_PASS;
        $mailcontact->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mailcontact->Port = SMTP_PORT;

        $mailcontact->setFrom(SMTP_USER, "BrianCode Hello");
        $mailcontact->addAddress(SMTP_USER); // Email nhận liên hệ
        $mailcontact->addAddress("nguyennc1303@gmail.com");
        $mailcontact->Subject = "Customer Form Submission";
        $mailcontact->Body = "Name: $name\nEmail: $email\nMessage:\n$message";

        $mailcontact->send();

        $mailuser = new PHPMailer(true);
        $mailuser->isSMTP();
        $mailuser->Host = SMTP_HOST;
        $mailuser->SMTPAuth = true;
        $mailuser->Username = SMTP_USER;
        $mailuser->Password = SMTP_PASS;
        $mailuser->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mailuser->Port = SMTP_PORT;

        $mailuser->setFrom(SMTP_USER, "BrianCode Hello");
        $mailuser->addAddress($email); // Email nhận liên hệ
        $mailuser->Subject = "Thank you for reaching out to BrianCode.dev!";
        $mailuser->Body = "Hi $name,\n\nThank you for reaching out! I have received your message and will get back to you within 12 hours.\n\nIf this is an urgent request, please mention \"Urgent\" in the subject line, and I'll prioritize your email.\n\nIn the meantime, feel free to check out my work at https://briancode.dev. \n\nLooking forward to connecting with you!\n\nBest regards,\nBrian Nguyen\nFreelance Web Developer\nbriancode.dev";

        $mailuser->send();
        
        echo "Email sent successfully!";
    } catch (Exception $e) {
        echo "Mailer Error";
    }
}
?>