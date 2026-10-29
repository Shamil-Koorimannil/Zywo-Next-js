/**
 * ZYWO CAREERS APPLICATION ENGINE
 * Genuine confirmation handling without mock success or falsified catches.
 */

async function submitCareersForm(event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const feedback = document.querySelector('#careersFormFeedback');
  const originalText = submitBtn.innerText;

  if (feedback) {
    feedback.className = 'form-feedback-msg';
    feedback.textContent = '';
    feedback.style.display = 'none';
  }

  submitBtn.innerText = 'Submitting Application...';
  submitBtn.disabled = true;

  // Google Apps Script URL for careers submissions
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzNtZnM7GhywTc9T6lC__-XstfMYo1nrY042laKKx7_Q5_QHLntHV6qnC2C5M98j0RF/exec';

  const formData = new FormData(form);
  formData.append('Date', new Date().toLocaleString());

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData,
      mode: 'cors'
    });

    const data = await response.text();

    // Genuine verification: only declare success when response confirms it or HTTP OK
    if (data && (data.includes("Success") || data.includes("success") || response.ok)) {
      if (feedback) {
        feedback.className = 'form-feedback-msg success';
        feedback.textContent = "Application submitted successfully! Our team will review your portfolio and reach out.";
      } else {
        alert("Application submitted successfully! We'll review your profile and get back to you.");
      }
      form.reset();
    } else {
      throw new Error(data || "Invalid response from careers server");
    }
  } catch (error) {
    console.error('Careers Submission Error:', error.message);
    if (feedback) {
      feedback.className = 'form-feedback-msg error';
      feedback.textContent = "Submission could not be verified over the network. Please email your CV directly to hello@zywo.com or message us on WhatsApp (+91 6282881159).";
    } else {
      alert("Submission could not be completed. Please email your CV directly to hello@zywo.com.");
    }
  } finally {
    submitBtn.innerText = originalText;
    submitBtn.disabled = false;
  }
}

// Make globally accessible
window.submitCareersForm = submitCareersForm;
