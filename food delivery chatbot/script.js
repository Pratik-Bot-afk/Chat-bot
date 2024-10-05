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
    messageDiv.className = sender === 'user' ? 'user' : 'bot';
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
        response = "To place an order, select your items from the menu and click 'Checkout'!";
    } else if (lowerInput.includes("track")) {
        response = "You can track your order in your account under 'Order History'.";
    } else if (lowerInput.includes("delivery")) {
        response = "Delivery usually takes 30-60 minutes depending on your location and the restaurant.";
    } else if (lowerInput.includes("cancel")) {
        response = "You can cancel your order within 10 minutes of placing it from your account.";
    } else if (lowerInput.includes("modify order")) {
        response = "To modify your order, please contact customer support as soon as possible.";
    } else if (lowerInput.includes("favorite restaurants")) {
        response = "You can save your favorite restaurants in your account profile!";
    } else if (lowerInput.includes("payment methods")) {
        response = "We accept credit cards, debit cards, and PayPal.";
    } else if (lowerInput.includes("promotions")) {
        response = "Check our homepage for current promotions and discounts!";
    } else if (lowerInput.includes("menu")) {
        response = "You can view the menu of each restaurant directly on their page.";
    } else if (lowerInput.includes("feedback")) {
        response = "You can provide feedback through our contact form on the website.";
    } else if (lowerInput.includes("how to contact")) {
        response = "You can reach us via email, phone, or live chat.";
    } else if (lowerInput.includes("food safety")) {
        response = "We follow strict food safety guidelines to ensure your meals are safe.";
    } else if (lowerInput.includes("allergies")) {
        response = "Please inform the restaurant of any allergies while placing your order.";
    } else if (lowerInput.includes("restaurants near me")) {
        response = "Use our app to find restaurants near your location!";
    } else if (lowerInput.includes("hours")) {
        response = "Restaurant hours vary, but most are open from 11 AM to 11 PM.";
    } else if (lowerInput.includes("cuisine types")) {
        response = "We offer a variety of cuisines including Italian, Chinese, Indian, and more!";
    } else if (lowerInput.includes("how to redeem promo code")) {
        response = "Enter your promo code at checkout to apply the discount.";
    } else if (lowerInput.includes("what happens if my order is delayed")) {
        response = "If your order is delayed, please contact customer support for assistance.";
    } else if (lowerInput.includes("how to save favorites")) {
        response = "You can save your favorite dishes by clicking the heart icon next to them.";
    } else if (lowerInput.includes("restaurant ratings")) {
        response = "You can view ratings and reviews for each restaurant on their profile.";
    } else if (lowerInput.includes("delivery fee")) {
        response = "The delivery fee varies based on your location and the restaurant.";
    } else if (lowerInput.includes("special instructions")) {
        response = "You can add special instructions during the checkout process.";
    } else if (lowerInput.includes("how long does delivery take")) {
        response = "Delivery typically takes 30-60 minutes depending on the restaurant's distance.";
    } else if (lowerInput.includes("cash on delivery")) {
        response = "Yes, we offer cash on delivery as a payment option.";
    } else if (lowerInput.includes("how do I track my order")) {
        response = "You can track your order in the 'Order History' section of your account.";
    } else if (lowerInput.includes("customer support")) {
        response = "Our customer support team is available 24/7 to assist you!";
    } else if (lowerInput.includes("delivery area")) {
        response = "We deliver to various areas, please enter your address to check availability.";
    } else if (lowerInput.includes("restaurant recommendations")) {
        response = "Check out our recommended restaurants based on your order history!";
    } else if (lowerInput.includes("what to do if my food is cold")) {
        response = "Please contact customer support if your food arrives cold or unsatisfactory.";
    } else if (lowerInput.includes("gift cards")) {
        response = "Yes, we offer gift cards that you can purchase on our website.";
    } else if (lowerInput.includes("discounts")) {
        response = "Visit our promotions page to see all available discounts!";
    } else if (lowerInput.includes("how to report an issue")) {
        response = "You can report an issue with your order via our support form.";
    } else if (lowerInput.includes("menu items")) {
        response = "You can view all available menu items on each restaurant's page.";
    } else if (lowerInput.includes("how to add a tip")) {
        response = "You can add a tip during the checkout process before finalizing your order.";
    } else if (lowerInput.includes("do you offer vegetarian options")) {
        response = "Yes, many of our restaurants offer vegetarian and vegan options.";
    } else if (lowerInput.includes("are drinks included")) {
        response = "Drinks are typically sold separately from meals.";
    } else if (lowerInput.includes("how to change delivery time")) {
        response = "You can change the delivery time by contacting customer support.";
    } else if (lowerInput.includes("do you deliver on weekends")) {
        response = "Yes, we deliver on weekends as well!";
    } else if (lowerInput.includes("how do I create an account")) {
        response = "You can create an account by clicking 'Sign Up' on our homepage!";
    } else if (lowerInput.includes("what if my food is wrong")) {
        response = "Please reach out to customer support if you received the wrong order.";
    } else if (lowerInput.includes("where is my order")) {
        response = "You can track your order status in your account.";
    } else if (lowerInput.includes("how to leave a review")) {
        response = "You can leave a review on the restaurant's page after your order is complete.";
    } else if (lowerInput.includes("dietary restrictions")) {
        response = "Please let the restaurant know about any dietary restrictions during ordering.";
    }

    // Additional Questions - You can keep adding more relevant questions here
    else if (lowerInput.includes("order history")) {
        response = "You can view your order history in your account settings.";
    } else if (lowerInput.includes("loyalty program")) {
        response = "Join our loyalty program to earn points on every order!";
    } else if (lowerInput.includes("how to apply for refunds")) {
        response = "Refund requests can be made through our customer support team.";
    } else if (lowerInput.includes("new restaurants")) {
        response = "Check our 'New Restaurants' section for the latest additions!";
    } else if (lowerInput.includes("can I split my order")) {
        response = "Currently, we do not support splitting orders across multiple payment methods.";
    } else if (lowerInput.includes("safety measures")) {
        response = "We follow health guidelines to ensure food safety and hygiene.";
    } else if (lowerInput.includes("do you have a mobile app")) {
        response = "Yes, our mobile app is available for download on iOS and Android.";
    } else if (lowerInput.includes("do you offer curbside pickup")) {
        response = "Yes, some restaurants offer curbside pickup options!";
    } else if (lowerInput.includes("are there delivery restrictions")) {
        response = "Delivery is available in certain areas, check your address for eligibility.";
    } else if (lowerInput.includes("what should I do if my order is late")) {
        response = "Contact customer support for assistance if your order is late.";
    } else if (lowerInput.includes("how to report missing items")) {
        response = "You can report missing items through our support page.";
    } else if (lowerInput.includes("how to find deals")) {
        response = "Check our promotions page for daily deals and discounts!";
    } else if (lowerInput.includes("can I schedule a delivery")) {
        response = "Yes, you can schedule a delivery for a later time during checkout.";
    } else if (lowerInput.includes("what if I need to cancel my order")) {
        response = "You can cancel your order within a short time after placing it.";
    }

    displayMessage(response, 'bot');
}
