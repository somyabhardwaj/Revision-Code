// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const popUp = document.querySelector(".popUp");
    const popUpText = document.querySelector(".popUp-text");
    const bodyScroll = document.querySelector("body");
    
  
    // Function to open the popup with specific text and card content
    function openPopup(text, cardContent) {
      popUpText.textContent = text;
      // Set the card content in the popup
      popUpText.insertAdjacentHTML("beforeend", cardContent);
      popUp.style.display = "block";
      bodyScroll.style.overflow = "hidden";
    }
   
    // Add click event listeners to each card
    cards.forEach((card, index) => {
      const cardText = document.getElementById(`card${index + 1}-text`);
  
      card.addEventListener("click", () => {
        // Customize this text and card content as needed for each card
        let text = "";
        let cardContent = "";
        switch (index) {
          case 0:
            // text = "Popup text for card 1";
            cardContent = cardText.innerHTML; // Get the card content
            break;
          case 1:
            // text = "Popup text for card 2";
            cardContent = cardText.innerHTML; // Get the card content
            break;
            case 2:
                // text = "Popup text for card 2";
                cardContent = cardText.innerHTML; // Get the card content
                break;
                
            case 3:
            text = "Popup text for card 2";
            cardContent = cardText.innerHTML; // Get the card content
            break;
        }
        openPopup(text, cardContent)
      });
    });