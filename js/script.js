function showSection(id) {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  if (id === "askName") {
    document.getElementById("navBar").classList.add("hidden");
    document.getElementById("footer").classList.add("hidden");
  } else {
    document.getElementById("navBar").classList.remove("hidden");
    document.getElementById("footer").classList.remove("hidden");
  }
}

document.getElementById("burger").onclick = () => {
  document.getElementById("mobileMenu").classList.toggle("hidden");
};

document.querySelectorAll("[data-nav]").forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    const target = link.getAttribute("data-nav");
    if (target === "home") showSection("home");
    if (target === "profile") showSection("profile");
    if (target === "message") showSection("message");
    document.getElementById("mobileMenu").classList.add("hidden");
  };
});

document.getElementById("setNameBtn").onclick = () => {
  let name = document.getElementById("txtName").value.trim();
  if (!name) name = "Guest";
  document.getElementById("greetingName").textContent = name;
  showSection("home");
};

document.getElementById("submitBtn").onclick = e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg").value.trim();
  if (!name || !email || !msg) {
    alert("Please fill all fields.");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email.");
    return;
  }
  document.getElementById("outName").textContent = name;
  document.getElementById("outEmail").textContent = email;
  document.getElementById("outMsg").textContent = msg;
  document.getElementById("outputBox").classList.remove("hidden");
};

showSection("askName");
