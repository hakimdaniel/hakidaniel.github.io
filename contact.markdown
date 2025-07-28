---
layout: page
title: Contact
permalink: /contact/
---

<div class="container my-5">
  <form method="POST" action="https://hakimcodez.site/contact.php">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" name="name" placeholder="Your name" required>
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" name="email" placeholder="your@email.com" required>
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea class="form-control" id="message" name="message" rows="5" placeholder="Your message here..." required></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Send</button>
  </form>
</div>
