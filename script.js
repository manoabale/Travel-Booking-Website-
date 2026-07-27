const destinations = [
  { id: 1, name: "Paris", country: "France", price: "$1200", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Dubai", country: "UAE", price: "$900", img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Tokyo", country: "Japan", price: "$1500", img: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80" }
];

function displayDestinations(list) {
  const container = document.getElementById("destinations");
  container.innerHTML = "";
  list.forEach(d => {
    const div = document.createElement("div");
    div.className = "destination";
    div.innerHTML = `
      <img src="${d.img}" alt="${d.name}">
      <h3>${d.name}, ${d.country}</h3>
      <p>Price: ${d.price}</p>
    `;
    container.appendChild(div);
  });
}

function filterDestinations() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = destinations.filter(d => d.name.toLowerCase().includes(query) || d.country.toLowerCase().includes(query));
  displayDestinations(filtered);
}

function submitBooking(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const departure = document.getElementById("departure").value;
  const returnDate = document.getElementById("return").value;

  alert(`Booking confirmed!\nName: ${name}\nEmail: ${email}\nDeparture: ${departure}\nReturn: ${returnDate}`);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("departure").value = "";
  document.getElementById("return").value = "";
}

displayDestinations(destinations);
