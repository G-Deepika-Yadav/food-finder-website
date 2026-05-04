let map;
let visibleCount = 10;

function initMap() {

    // Default location (if GPS fails)
    const defaultLocation = { lat: 17.3850, lng: 78.4867 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultLocation,
        zoom: 14
    });

    // Try getting user location
    navigator.geolocation.getCurrentPosition((pos) => {

        const userLocation = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
        };

        map.setCenter(userLocation);

        new google.maps.Marker({
            position: userLocation,
            map: map,
            title: "You are here"
        });

        findRestaurants();

    }, () => {
        // If location denied → still show data
        findRestaurants();
    });
}


// 🔥 DUMMY RESTAURANTS (NO BILLING)
function findRestaurants() {

    const restaurants = [
        { name: "Paradise Biryani", rating: 4.5, location: "Hyderabad" },
        { name: "Domino's Pizza", rating: 4.3, location: "Nearby" },
        { name: "KFC", rating: 4.2, location: "City Center" }
    ];

    let html = "";

    restaurants.slice(0, visibleCount).forEach(place => {
        html += `
            <div class="card">
                <h3>${r.name}</h3>
                <p>⭐ ${r.rating}</p>
                <p>📍 ${r.location}</p>
            </div>
        `;
    });

    document.getElementById("list").innerHTML = html;
}
function findRestaurants() {
    const restaurants = [
    { name: "Paradise Biryani", rating: 4.6, location: "Hyderabad",
      image: "https://biriyanizone.com/images/763x848_img1.png",
      dishes: ["Chicken Biryani","Mutton Biryani","Kebab"] },

    { name: "Domino's Pizza", rating: 4.3, location: "Nearby",
      image: "https://www.shutterstock.com/image-photo/closeup-hand-pulling-hot-pizza-260nw-2627517817.jpg",
      dishes: ["Pizza","Garlic Bread","Pasta"] },

    { name: "KFC", rating: 4.2, location: "City Center",
      image: "https://b.zmtcdn.com/data/pictures/chains/5/67755/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|960:500&crop=960:500;*,*",
      dishes: ["Fried Chicken","Burger","Wings"] },

    { name: "South Indian Tiffins", rating: 4.5, location: "Near You",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=400",
      dishes: ["Dosa","Idli","Vada"] },

    { name: "Pizza Hut", rating: 4.1, location: "Downtown",
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400",
      dishes: ["Pizza","Pasta","Fries"] },

    { name: "Burger King", rating: 4.0, location: "Mall Road",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
      dishes: ["Burger","Fries","Shake"] },

    { name: "Subway", rating: 4.2, location: "Main Street",
      image: "https://mma.prnewswire.com/media/2769047/Subway_Fresh_Fit.jpg?w=2700",
      dishes: ["Sandwich","Wrap","Salad"] },

    { name: "Barbeque Nation", rating: 4.5, location: "City Mall",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/53/01/e6/photo0jpg.jpg?w=500&h=-1&s=1",
      dishes: ["BBQ","Grill","Buffet"] },

    { name: "Biryani House", rating: 4.4, location: "Old City",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2025/2/10/4572f57e-d3ab-4f9a-9414-a3495d983a24_c7b55021-0849-4a50-b137-7ec35f97c964.jpg",
      dishes: ["Biryani","Kebab","Rice"] },

    { name: "Chai Point", rating: 4.3, location: "Near College",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
      dishes: ["Tea","Snacks","Sandwich"] },

    { name: "Cafe Coffee Day", rating: 4.1, location: "Highway",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
      dishes: ["Coffee","Cake","Sandwich"] },

    { name: "Starbucks", rating: 4.6, location: "City Center",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
      dishes: ["Coffee","Latte","Dessert"] },

    { name: "McDonald's", rating: 4.3, location: "Main Road",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
      dishes: ["Burger","Fries","Coke"] },

    { name: "Haldiram's", rating: 4.4, location: "Market",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      dishes: ["Chaat","Snacks","Sweets"] },

    { name: "Punjabi Dhaba", rating: 4.5, location: "Highway",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
      dishes: ["Roti","Dal","Paneer"] },
        { name: "Andhra Spice", rating: 4.3, location: "Bus Stand",
      image: "https://nandhini.com/wp-content/uploads/2025/07/Zomato-Thumbnail-Image-e1756451871528.webp",
      dishes: ["Andhra Meals","Spicy Chicken","Rice"] },

    { name: "Udupi Cafe", rating: 4.4, location: "Temple Road",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvBlL03NVg7R3luyf9AW2Sbb33_jqQHwocA&s",
      dishes: ["Dosa","Idli","Meals"] },

    { name: "Ice Cream World", rating: 4.2, location: "Mall",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
      dishes: ["Ice Cream","Shake","Dessert"] },

    { name: "Juice Junction", rating: 4.1, location: "Park Area",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400",
      dishes: ["Juice","Smoothie","Fruit Bowl"] },

    { name: "Roll Express", rating: 4.3, location: "Street",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400",
      dishes: ["Roll","Wrap","Snacks"] },

    { name: "Chinese Corner", rating: 4.4, location: "Food Court",
      image: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_468/v1685091685/9042084443975a6aafe805320f85807c.webp",
      dishes: ["Noodles","Manchurian","Fried Rice"] },

    { name: "Arabian Grill", rating: 4.5, location: "Downtown",
      image: "https://i.pinimg.com/474x/2d/c9/1f/2dc91f7b2ecba3d6a287298b4e4ed26b.jpg",
      dishes: ["Shawarma","Grill","Kebab"] },

    { name: "Tandoori Hub", rating: 4.3, location: "Main Road",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
      dishes: ["Tandoori","Naan","Chicken"] },

    { name: "Veg Meals Center", rating: 4.2, location: "Temple Area",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      dishes: ["Veg Meals","Paneer","Rice"] },

    { name: "Fast Food Plaza", rating: 4.1, location: "Station Road",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
      dishes: ["Burger","Pizza","Fries"] },

    { name: "Spice Villa", rating: 4.4, location: "City Center",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
      dishes: ["Curry","Rice","Biryani"] },

    { name: "Royal Dine", rating: 4.5, location: "Downtown",
      image: "https://curlytales.com/wp-content/uploads/2023/02/Diner-JH.jpg",
      dishes: ["Buffet","Grill","Dessert"] },

    { name: "Snack Point", rating: 4.0, location: "Street",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400",
      dishes: ["Snacks","Tea","Coffee"] },

    { name: "Healthy Bowl", rating: 4.3, location: "Park",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      dishes: ["Salad","Healthy Food","Juice"] },

    { name: "Desi Kitchen", rating: 4.4, location: "Village Road",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
      dishes: ["Roti","Dal","Sabzi"] }

];
    let html = "";

    restaurants.forEach(place => {
        html += `
            <div class="card">
                <img loading="lazy" src="${place.image}" 
     onerror="this.src='https://via.placeholder.com/400x300?text=Food'">
                <div class="card-content">
                    <h3>${place.name}</h3>
                    <p>⭐ ${place.rating}</p>
                    <p>📍 ${place.location}</p>

                    <p><b>Popular:</b> ${place.dishes.join(", ")}</p>

                    <button class="zomato" onclick="openZomato('${place.name}')">
                        Order on Zomato
                    </button>

                    <button class="swiggy" onclick="openSwiggy('${place.name}')">
                        Order on Swiggy
                    </button>
                </div>
            </div>
        `;
    });

    document.getElementById("list").innerHTML = html + `
    <div style="text-align:center; margin:20px;">
        <button onclick="loadMore()">Load More</button>
    </div>
`;
}
function openZomato(name) {
    const query = encodeURIComponent(name);
    window.open(`https://www.zomato.com/search?q=${query}`, "_blank");
}

function openSwiggy(name) {
    const query = encodeURIComponent(name);
    window.open(`https://www.swiggy.com/search?query=${query}`, "_blank");
}
function loadMore() {
    visibleCount += 10;
    findRestaurants();
}
function getStars(rating) {
    let stars = "";
    let full = Math.floor(rating);

    for (let i = 0; i < full; i++) {
        stars += "⭐";
    }

    return stars;
}
function searchRestaurants() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        const text = cards[i].innerText.toLowerCase();

        if (text.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
function toggleDark() {
    document.body.classList.toggle("dark");
}
const text = ["Find best food near you 🍕", "Order instantly 🚀", "Hot deals today 🔥"];
let index = 0;
let charIndex = 0;

function typeEffect() {

    if (charIndex < text[index].length) {
        document.getElementById("typing").innerHTML += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 50);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {
        document.getElementById("typing").innerHTML =
            text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 30);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typeEffect, 500);
    }
}
window.addEventListener("load", () => {

    const note = document.getElementById("thankNote");

    if (!note) {
        console.log("Thank note not found");
        return;
    }

    // show
    setTimeout(() => {
        note.classList.add("show");
    }, 1000);

    // hide
    setTimeout(() => {
        note.classList.remove("show");
    }, 6000);
});
function showRecommendations(restaurants) {

    // pick top rated
    const recommended = restaurants
        .filter(r => r.rating >= 4.4)
        .slice(0, 4);

    let html = "";

    recommended.forEach(r => {
        html += `
            <div class="card">
                <img src="${r.image}">
                <div class="card-content">
                    <h3>${r.name}</h3>
                    <p>⭐ ${r.rating}</p>
                    <p>🔥 Popular choice</p>
                </div>
            </div>
        `;
    });

    document.getElementById("recommendations").innerHTML = html;
}
// open/close
function toggleChat() {
    const box = document.getElementById("chatBox");
    box.style.display = box.style.display === "flex" ? "none" : "flex";
}

// enter key
function handleChat(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {

    const input = document.getElementById("chatInput");
    const msg = input.value.trim();

    if (!msg) return;

    addMessage("You", msg);

    input.value = "";

    const reply = getBotReply(msg);
    addMessage("Bot", reply);
}
function startVoice() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.start();

    recognition.onresult = function(event) {
        const text = event.results[0][0].transcript;
        document.getElementById("chatInput").value = text;
        sendMessage();
    };
}
setTimeout(() => {
    addMessage("Bot", reply);
}, 500);

// add message
function addMessage(sender, text) {
    const box = document.getElementById("chatMessages");

    const div = document.createElement("div");
    div.innerHTML = `<b>${sender}:</b> ${text}`;

    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function getBotReply(msg) {

    msg = msg.toLowerCase();

    // greetings
    if (msg.includes("hello") || msg.includes("hi"))
        return "👋 Hello Foodiee! What are you craving today?";

    // food types
    if (msg.includes("biryani"))
        return "🔥 Try Paradise Biryani — top rated near you!";

    if (msg.includes("pizza"))
        return "🍕 Domino’s & Pizza Hut are great choices!";

    if (msg.includes("burger"))
        return "🍔 Try KFC or Burger King!";

    if (msg.includes("veg"))
        return "🥗 South Indian Tiffins is perfect for veg lovers!";

    if (msg.includes("cheap") || msg.includes("budget"))
        return "💰 Try local tiffin centers — tasty & affordable!";

    if (msg.includes("best"))
        return "⭐ Check the Recommended section above!";

    if (msg.includes("location"))
        return "📍 I use your map to find nearby restaurants!";

    if (msg.includes("dessert") || msg.includes("sweet"))
        return "🍰 Try cafes like Starbucks or CCD!";

    // fallback
    return "🤖 I suggest checking nearby restaurants above 👆";
}
let favorites = [];

function toggleFavorite(name) {
    if (favorites.includes(name)) {
        favorites = favorites.filter(f => f !== name);
    } else {
        favorites.push(name);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    showFavorites();
}
window.onload = () => {
    const saved = localStorage.getItem("favorites");
    if (saved) favorites = JSON.parse(saved);
    showFavorites();
};function showFavorites() {
    const favDiv = document.getElementById("favorites");

    if (!favDiv) return;

    favDiv.innerHTML = favorites.length
        ? "❤️ Favorites: " + favorites.join(", ")
        : "No favorites yet";
}
function showRecommendations(restaurants) {

    const sorted = restaurants.sort((a, b) => b.rating - a.rating);

    let recommended = sorted.slice(0, 4);

    if (clickedFoods.length > 0) {
        recommended = restaurants.filter(r =>
            clickedFoods.some(c => r.name.includes(c))
        );
    }

    renderRecommendations(recommended);
}