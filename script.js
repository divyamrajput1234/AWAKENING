// Builds the page from content.js. You shouldn't need to edit this file.

(function () {
  const c = CONTENT;
  const root = document.getElementById("letter");

  // Apply title and colors
  document.title = c.pageTitle;
  const r = document.documentElement.style;
  r.setProperty("--bg", c.theme.background);
  r.setProperty("--text", c.theme.text);
  r.setProperty("--accent", c.theme.accent);
  r.setProperty("--soft", c.theme.soft);

  // Small helper to create elements safely
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function block(...children) {
    const wrap = el("section", "fade");
    children.forEach((ch) => wrap.appendChild(ch));
    return wrap;
  }

  // "To: Name"
  const to = el("p", "to fade", "For " + c.herName);
  root.appendChild(to);

  // Animated scene: boy bows to girl
  if (c.scene && c.scene.enabled) {
    const scene = el("div", "scene fade");
    scene.innerHTML =
      '<svg viewBox="0 0 400 270" role="img" aria-label="A boy bowing his head respectfully to a girl">' +
      '<line x1="30" y1="230" x2="370" y2="230" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" opacity="0.5"/>' +
      // Boy: legs stay still, upper body bows
      '<g stroke-linecap="round" fill="none">' +
      '<line x1="120" y1="160" x2="110" y2="228" stroke="var(--text)" stroke-width="5"/>' +
      '<line x1="120" y1="160" x2="130" y2="228" stroke="var(--text)" stroke-width="5"/>' +
      '<g class="boy-upper">' +
      '<line x1="120" y1="160" x2="120" y2="106" stroke="var(--accent)" stroke-width="14"/>' +
      '<line x1="120" y1="114" x2="108" y2="152" stroke="var(--text)" stroke-width="4"/>' +
      '<line x1="120" y1="114" x2="132" y2="152" stroke="var(--text)" stroke-width="4"/>' +
      '<circle cx="120" cy="86" r="17" fill="var(--bg)" stroke="var(--text)" stroke-width="4"/>' +
      '<path d="M104 84 Q107 66 122 68 Q134 69 137 80" stroke="var(--text)" stroke-width="5"/>' +
      '</g></g>' +
      // Girl: stands still, facing him
      '<g stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="272" y1="202" x2="272" y2="228" stroke="var(--text)" stroke-width="5"/>' +
      '<line x1="288" y1="202" x2="288" y2="228" stroke="var(--text)" stroke-width="5"/>' +
      '<path d="M280 106 L258 204 L302 204 Z" fill="var(--soft)" stroke="var(--accent)" stroke-width="4"/>' +
      '<line x1="272" y1="114" x2="269" y2="160" stroke="var(--text)" stroke-width="4"/>' +
      '<line x1="288" y1="114" x2="291" y2="160" stroke="var(--text)" stroke-width="4"/>' +
      '<circle cx="280" cy="86" r="17" fill="var(--bg)" stroke="var(--text)" stroke-width="4"/>' +
      '<path d="M263 88 Q261 64 280 64 Q299 64 297 88 L300 132" fill="none" stroke="var(--text)" stroke-width="5"/>' +
      '<path d="M263 88 L260 128" fill="none" stroke="var(--text)" stroke-width="5"/>' +
      '</g>' +
      // Name spaces
      '<text class="nm boy-name" x="120" y="260" text-anchor="middle"></text>' +
      '<text class="nm girl-name" x="280" y="260" text-anchor="middle"></text>' +
      '</svg>';
    scene.querySelector(".boy-name").textContent = c.scene.boyName;
    scene.querySelector(".girl-name").textContent = c.scene.girlName;
    if (c.scene.caption) {
      scene.appendChild(el("p", "scene-caption", c.scene.caption));
    }
    // Tap or click the scene to replay the bow
    scene.addEventListener("click", function () {
      scene.classList.remove("play");
      void scene.offsetWidth;
      scene.classList.add("play");
    });
    root.appendChild(scene);
  }

  // Opening line
  root.appendChild(el("p", "opening fade", c.opening));

  // Optional photo
  if (c.photo) {
    const img = el("img", "photo fade");
    img.src = c.photo;
    img.alt = "";
    root.appendChild(img);
  }

  // Main sections
  c.sections.forEach((s) => {
    const parts = [el("h2", "", s.heading)];
    s.paragraphs.forEach((p) => parts.push(el("p", "", p)));
    root.appendChild(block(...parts));
  });

  // Commitments
  if (c.commitments && c.commitments.length) {
    const ul = el("ul", "commitments");
    c.commitments.forEach((item) => ul.appendChild(el("li", "", item)));
    root.appendChild(block(el("h2", "", c.commitmentsHeading), ul));
  }

  // Optional memory
  if (c.memory) {
    root.appendChild(block(el("h2", "", c.memoryHeading), el("p", "", c.memory)));
  }

  // Closing and signature
  const sig = el("div", "signature");
  sig.appendChild(el("p", "signoff", c.signoff));
  sig.appendChild(el("p", "name", c.myName));
  sig.appendChild(el("p", "date", c.date));

  root.appendChild(block(el("p", "closing", c.closing), sig));

  // Fade in as each part scrolls into view
  const items = document.querySelectorAll(".fade");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            if (e.target.classList.contains("scene")) {
              setTimeout(function () { e.target.classList.add("play"); }, 900);
            }
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((i) => obs.observe(i));
  } else {
    items.forEach((i) => i.classList.add("visible"));
    const s = document.querySelector(".scene");
    if (s) s.classList.add("play");
  }
})();
