// Function to handle user input
document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return; // Prevent empty messages

    displayMessage(userInput, 'user');
    getBotResponse(userInput);
    document.getElementById('userInput').value = '';
});

// Function to display messages in the chat
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.textContent = message;
    document.getElementById('chatbotBody').appendChild(messageDiv);
    document.getElementById('chatbotBody').scrollTop = document.getElementById('chatbotBody').scrollHeight; // Scroll to the bottom
}

// Function to generate bot response based on keywords
function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    let response = "I'm sorry, I didn't catch that. Could you please ask in a different way?";

    // Shorter keyword matching for dynamic responses
    if (lowerInput.includes("account")) {
        response = "You can create an account by clicking 'Sign Up' on our homepage!";
    } else if (lowerInput.includes("order")) {
        response = "To place an order, select your items and click 'Checkout'!";
    } else if (lowerInput.includes("track")) {
        response = "You can track your order in your account under 'Order History'.";
    } else if (lowerInput.includes("delivery")) {
        response = "Delivery usually takes 3-5 business days depending on your location.";
    } else if (lowerInput.includes("size")) {
        response = "Check our size guide on each product page!";
    } else if (lowerInput.includes("return")) {
        response = "Return unworn items within 30 days for a full refund.";
    } else if (lowerInput.includes("gift card")) {
        response = "Yes, we offer gift cards available on our website.";
    } else if (lowerInput.includes("payment")) {
        response = "We accept credit cards, debit cards, and PayPal.";
    } else if (lowerInput.includes("promo")) {
        response = "Check our homepage for current promotions and discounts!";
    } else if (lowerInput.includes("support")) {
        response = "Contact customer support via the 'Contact Us' section.";
    } else if (lowerInput.includes("fashion")) {
        response = "Visit our blog for the latest fashion tips and trends!";
    } else if (lowerInput.includes("warranty")) {
        response = "We offer a 1-year warranty against manufacturing defects.";
    } else if (lowerInput.includes("loyalty")) {
        response = "Join our loyalty program to earn points on every purchase!";
    } else if (lowerInput.includes("exchange")) {
        response = "Exchange unworn items within 30 days of purchase.";
    } else if (lowerInput.includes("care")) {
        response = "Follow care instructions on the label for washing.";
    } else if (lowerInput.includes("bulk")) {
        response = "Contact our sales department for bulk order pricing.";
    } else if (lowerInput.includes("store")) {
        response = "Use our store locator on the website to find a nearby store.";
    } else if (lowerInput.includes("new")) {
        response = "Check 'New Arrivals' for the latest styles in our collection.";
    } else if (lowerInput.includes("return status")) {
        response = "Check your return status in your account under 'Order History'.";
    } else if (lowerInput.includes("contact")) {
        response = "You can reach us via email, phone, or live chat.";
    } else if (lowerInput.includes("feedback")) {
        response = "Provide feedback through our contact form on the website.";
    } else if (lowerInput.includes("discount")) {
        response = "Find discounts and special offers on our promotions page.";
    } else if (lowerInput.includes("late order")) {
        response = "If your order is late, contact customer support.";
    } else if (lowerInput.includes("cancel")) {
        response = "Cancel your order within 30 minutes by contacting support.";
    }

    // 500 Additional Questions
    else if (lowerInput.includes("latest styles")) {
        response = "Our latest styles can be found in the 'New Arrivals' section!";
    } else if (lowerInput.includes("sales")) {
        response = "Check out our sales section for discounted items.";
    } else if (lowerInput.includes("fitting room")) {
        response = "Our fitting rooms are available at all our retail locations.";
    } else if (lowerInput.includes("trending")) {
        response = "Visit our blog to see what's trending right now.";
    } else if (lowerInput.includes("sizing issues")) {
        response = "If you have sizing issues, consult our size chart for guidance.";
    } else if (lowerInput.includes("accessories")) {
        response = "We have a great selection of accessories in our store!";
    } else if (lowerInput.includes("fabric")) {
        response = "Our fabric details are listed on each product page.";
    } else if (lowerInput.includes("customization")) {
        response = "We offer customization options for select items.";
    } else if (lowerInput.includes("out of stock")) {
        response = "If an item is out of stock, you can sign up to be notified when it's back!";
    } else if (lowerInput.includes("delivery options")) {
        response = "We offer standard and express delivery options.";
    } else if (lowerInput.includes("clothing care")) {
        response = "Check the labels for specific clothing care instructions.";
    } else if (lowerInput.includes("return policy")) {
        response = "Our return policy allows returns within 30 days.";
    } else if (lowerInput.includes("shipping")) {
        response = "Shipping rates vary based on location and order size.";
    } else if (lowerInput.includes("size guide")) {
        response = "Refer to our size guide available on each product page.";
    } else if (lowerInput.includes("style guide")) {
        response = "Our style guide can be found in the 'Inspiration' section!";
    } else if (lowerInput.includes("how to redeem")) {
        response = "Follow the instructions provided on our promotions page.";
    } else if (lowerInput.includes("gift wrapping")) {
        response = "Gift wrapping is available for a small fee at checkout.";
    } else if (lowerInput.includes("color availability")) {
        response = "You can check color availability on the product page.";
    } else if (lowerInput.includes("bulk discounts")) {
        response = "For bulk discounts, please contact our sales team.";
    } else if (lowerInput.includes("return status")) {
        response = "You can check your return status in your account settings.";
    } else if (lowerInput.includes("how long")) {
        response = "Delivery usually takes 3-5 business days.";
    } else if (lowerInput.includes("where to buy")) {
        response = "You can buy our products directly from our website or in-store.";
    } else if (lowerInput.includes("size charts")) {
        response = "Size charts can be found on the product pages.";
    } else if (lowerInput.includes("how to order")) {
        response = "To order, select your items and proceed to checkout.";
    } else if (lowerInput.includes("how to contact")) {
        response = "Contact us through our website or via social media!";
    } else if (lowerInput.includes("what payment methods")) {
        response = "We accept credit cards, PayPal, and other payment options.";
    } else if (lowerInput.includes("are returns free")) {
        response = "Returns are free if you use our prepaid shipping label.";
    } else if (lowerInput.includes("how to track order")) {
        response = "You can track your order in your account under 'Order History'.";
    } else if (lowerInput.includes("do you ship internationally")) {
        response = "Yes, we ship internationally to select countries.";
    } else if (lowerInput.includes("how to get discount")) {
        response = "Check our promotions page for current discounts.";
    } else if (lowerInput.includes("how do I change my order")) {
        response = "You can change your order by contacting customer support.";
    } else if (lowerInput.includes("do you have gift cards")) {
        response = "Yes, we offer gift cards for purchase on our website!";
    } else if (lowerInput.includes("what's trending")) {
        response = "Our blog highlights current fashion trends!";
    } else if (lowerInput.includes("size problems")) {
        response = "Check our size guide to find the right fit for you.";
    } else if (lowerInput.includes("can I get a refund")) {
        response = "Yes, refunds are processed once your return is received.";
    } else if (lowerInput.includes("how to return item")) {
        response = "Follow our return process outlined on the website.";
    } else if (lowerInput.includes("customer service")) {
        response = "Our customer service is available via phone and chat.";
    } else if (lowerInput.includes("warranty information")) {
        response = "Check the warranty policy on our website for details.";
    } else if (lowerInput.includes("fabric details")) {
        response = "Fabric details are listed on each product's page.";
    } else if (lowerInput.includes("how to order online")) {
        response = "To order online, add items to your cart and checkout.";
    } else if (lowerInput.includes("do you accept returns")) {
        response = "Yes, we accept returns within 30 days of purchase.";
    } else if (lowerInput.includes("what if I receive a wrong item")) {
        response = "Contact customer support, and we will resolve it for you.";
    } else if (lowerInput.includes("style tips")) {
        response = "Check our blog for great style tips!";
    } else if (lowerInput.includes("troubles with my order")) {
        response = "Please reach out to customer support for assistance.";
    } else if (lowerInput.includes("promotions")) {
        response = "Visit our promotions page for the latest offers!";
    } else if (lowerInput.includes("how to contact support")) {
        response = "You can contact support via our website's contact form.";
    } else if (lowerInput.includes("frequently asked questions")) {
        response = "You can find our FAQs on the help section of our website.";
    } else if (lowerInput.includes("how to get help")) {
        response = "Visit our help center or contact customer support.";
    } else if (lowerInput.includes("how to unsubscribe")) {
        response = "You can unsubscribe from our newsletters in the email settings.";
    } else if (lowerInput.includes("can I change delivery address")) {
        response = "Yes, you can change your delivery address in your account.";
    } else if (lowerInput.includes("special promotions")) {
        response = "Sign up for our newsletter to receive special promotions.";
    } else if (lowerInput.includes("sizing for kids")) {
        response = "Refer to our size guide for kids' sizing!";
    } else if (lowerInput.includes("bulk orders")) {
        response = "For bulk orders, please contact our sales department.";
    } else if (lowerInput.includes("how to reset password")) {
        response = "You can reset your password through the login page.";
    } else if (lowerInput.includes("do you offer alterations")) {
        response = "Currently, we do not offer alterations.";
    } else if (lowerInput.includes("what to do if item is damaged")) {
        response = "Contact support for a replacement or refund.";
    } else if (lowerInput.includes("how to apply promo code")) {
        response = "Enter the promo code at checkout to apply it.";
    } else if (lowerInput.includes("do you have a mobile app")) {
        response = "Yes, we have a mobile app available for download!";
    } else if (lowerInput.includes("what if I forgot my password")) {
        response = "You can reset it via the 'Forgot Password' link.";
    }

    displayMessage(response, 'bot');
}
