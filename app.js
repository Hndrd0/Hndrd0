/**
 * hardik.is-a.dev - Main Interactive & Motion Engine
 * Powered by Anime.js (v3.2.2) & Hallmark Midnight Architecture
 */

// Project Data Registry for Deep-Dive Modals
const PROJECTS_DATA = {
  andromote: {
    title: "Andromote",
    badge: "Hardware & Systems",
    tagline: "Android to PC Motion-Tracked Wii Remote & Dolphin Bridge",
    architecture: `
      <div class="modal-spec-block">
        <h4>System Architecture & Protocol</h4>
        <p>Andromote establishes a dual-tier motion pipeline bridging mobile hardware sensors to desktop emulation:</p>
        <ul class="modal-list">
          <li><strong>Android Sensor Engine:</strong> Kotlin-based service collecting raw IMU telemetry (accelerometer, gyroscope, gravity vectors) at 100Hz with Kalman sensor fusion.</li>
          <li><strong>DSU / Cemuhook UDP Protocol:</strong> Encapsulates pitch, roll, yaw, and button states into standardized low-latency UDP packets (RFC 0x100001).</li>
          <li><strong>Windows Python Bridge:</strong> Async UDP socket server parsing incoming sensor stream and feeding motion coordinates directly into Dolphin Emulator memory.</li>
          <li><strong>Dedicated Showcase Portal:</strong> Vite + React + TypeScript web app with Anime.js animations.</li>
        </ul>
      </div>
    `,
    stack: ["Android (Kotlin)", "Python (PySide/Qt)", "UDP / DSU Protocol", "Cemuhook", "React 18", "TypeScript", "Vite", "GitHub Actions"],
    highlights: [
      "Sub-10ms wireless motion tracking latency over 5GHz Wi-Fi",
      "Full Dolphin Emulator compatibility without physical Wii sensor bars",
      "Custom controller profiles with rumble & button mapping",
      "Automated multi-platform CI/CD builds for APK and Windows EXE"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Hndrd0/Andromote", icon: "ri-github-fill" },
      { label: "Download Latest APK", url: "https://github.com/Hndrd0/Andromote/releases", icon: "ri-download-2-line" }
    ]
  },
  greenjournal: {
    title: "Green Journal",
    badge: "Fintech & Web Systems",
    tagline: "High-Performance Indian Market Trading Engine & 1-Click Syncer",
    architecture: `
      <div class="modal-spec-block">
        <h4>Fintech Engine Architecture</h4>
        <p>Engineered to eliminate manual trade logging friction for Indian options & equity traders:</p>
        <ul class="modal-list">
          <li><strong>1-Click Trade Syncer (Chrome Extension):</strong> Manifest V3 browser extension injecting lightweight scrapers into Zerodha Kite, Groww, Dhan, Angel One, and Upstox DOMs without requiring paid API tokens.</li>
          <li><strong>Cloud Backend:</strong> Firebase Firestore + Appwrite serverless functions for order reconciliation and tax/brokerage calculations (STT, GST, Stamp Duty).</li>
          <li><strong>Canvas Charting Engine:</strong> Lightweight Charts integration rendering 10,000+ historical ticks at 60 FPS without DOM thrashing.</li>
          <li><strong>Lighthouse 100/100:</strong> Audited across 7 iterations for instantaneous sub-second cold starts.</li>
        </ul>
      </div>
    `,
    stack: ["React", "TypeScript", "Vite", "Chrome Extension (MV3)", "Firebase", "Appwrite Functions", "Canvas Charts", "TailwindCSS"],
    highlights: [
      "Zero-API-key sync across top 5 Indian brokerage platforms",
      "Lighthouse 100/100 performance certification",
      "Automated P&L, Sharpe Ratio, Maximum Drawdown, and Risk-Reward analytics",
      "Local-first encryption ensuring trader financial privacy"
    ],
    links: [
      { label: "Local Production Stack", url: "#projects", icon: "ri-code-box-line" }
    ]
  },
  thuddington: {
    title: "Thuddington (Thump-Shortcut)",
    badge: "Audio DSP & Windows",
    tagline: "Hands-Free Microphone Acoustic Desk-Thump Energy Detector",
    architecture: `
      <div class="modal-spec-block">
        <h4>Acoustic DSP Pipeline</h4>
        <p>Transforms raw ambient desk knocks into deterministic OS keyboard shortcuts:</p>
        <ul class="modal-list">
          <li><strong>Audio Ingestion:</strong> <code>sounddevice</code> stream listening at 44.1kHz with circular ring buffer memory pooling.</li>
          <li><strong>Real-Time Spectral Analysis:</strong> <code>numpy</code> computing spectral flux and onset energy thresholding to isolate physical surface vibrations from vocal speech.</li>
          <li><strong>Debounce & Pattern Matching:</strong> Temporal windowing to distinguish single thumps, double taps, and knuckle patterns.</li>
          <li><strong>OS Macro Dispatch:</strong> Windows API keyboard simulation triggering configurable hotkeys (e.g. mute mic, capture screenshot, switch virtual desktop).</li>
        </ul>
      </div>
    `,
    stack: ["Python 3.12", "PySide6 (Qt)", "sounddevice", "numpy DSP", "PyInstaller"],
    highlights: [
      "Zero-latency physical desk thump detection using microphone input",
      "Adaptive background noise floor calibration",
      "Sleek Qt GUI with real-time waveform visualizer and sensitivity slider",
      "Low RAM footprint (<28MB) running silently in Windows system tray"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Hndrd0/thuddington", icon: "ri-github-fill" },
      { label: "Release Binaries", url: "https://github.com/Hndrd0/thuddington/releases", icon: "ri-download-line" }
    ]
  },
  defender: {
    title: "Interlude Defender",
    badge: "Security & Systems",
    tagline: "Lightweight, Local, Non-Intrusive Threat Detection Engine",
    architecture: `
      <div class="modal-spec-block">
        <h4>Threat Detection Architecture</h4>
        <p>Built on the principle that the best antivirus is one you don't notice running:</p>
        <ul class="modal-list">
          <li><strong>Core Engine:</strong> Asynchronous process watcher inspecting running process trees, parent-child hierarchies, and suspicious execution arguments.</li>
          <li><strong>Heuristic File Monitor:</strong> Real-time filesystem hook watching startup directories, shell extensions, and registry run keys.</li>
          <li><strong>Modular Extensibility:</strong> Decoupled into <code>core</code>, <code>monitor</code>, <code>ui</code>, and <code>utils</code> packages.</li>
          <li><strong>Zero Telemetry:</strong> 100% offline analysis ensuring zero background outbound network calls.</li>
        </ul>
      </div>
    `,
    stack: ["Python 3", "Windows API (ctypes)", "psutil", "Modular Heuristics"],
    highlights: [
      "Instant startup with sub-40MB memory footprint",
      "Real-time monitoring of Windows startup paths & execution hooks",
      "Modular rule definitions allowing custom threat signatures",
      "Pure local execution with zero cloud telemetry"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Hndrd0/Interlude-Defender", icon: "ri-github-fill" }
    ]
  },
  violet: {
    title: "Redmi Note 7 Pro (Violet)",
    badge: "Android Firmware & OS",
    tagline: "Comprehensive Bootloader Unlock & Custom ROM Guide",
    architecture: `
      <div class="modal-spec-block">
        <h4>Firmware Engineering & Recovery</h4>
        <p>Curated technical handbook for the Snapdragon 675 (violet) platform:</p>
        <ul class="modal-list">
          <li><strong>Fastboot & EDL Protocols:</strong> Step-by-step procedures for bypassing Xiaomi auth wait times safely.</li>
          <li><strong>Partition Table Maintenance:</strong> Recovery flashing (TWRP, OrangeFox), dynamic partition management, and vendor image compatibility.</li>
          <li><strong>Kernel & ROM Deployments:</strong> AOSP, LineageOS, Pixel Experience flashing guides with Magisk/KernelSU root setups.</li>
          <li><strong>Anti-Rollback (ARB) Protection:</strong> Safe downgrading protocols to prevent hard bricks.</li>
        </ul>
      </div>
    `,
    stack: ["Android Fastboot", "ADB", "TWRP / OrangeFox", "Qualcomm EDL", "AOSP Kernel"],
    highlights: [
      "Step-by-step verified instructions for bootloader unlocking",
      "Tested recovery procedures against bootloops and brick states",
      "Comprehensive firmware partition map reference",
      "Curated resources for modern Android versions on legacy hardware"
    ],
    links: [
      { label: "GitHub Guide", url: "https://github.com/Hndrd0/Redmi-Note-7-Pro-Violet", icon: "ri-book-open-line" }
    ]
  }
};

// Main Initialization on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initParticleMesh();
  initHeroAnimations();
  initCard3DTilt();
  initDemoWidgets();
  initModalDrawer();
  initCommandPalette();
  initScrollSpy();
});

/* ==========================================================================
   1. ANIME.JS INTERACTIVE BACKGROUND PARTICLE CONSTELLATION
   ========================================================================== */
function initParticleMesh() {
  const canvas = document.getElementById("canvas-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(width > 768 ? 65 : 30, 80);
  const mouse = { x: width / 2, y: height / 2, radius: 150 };

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1,
      baseRadius: Math.random() * 2 + 1,
      color: i % 3 === 0 ? "#818cf8" : i % 3 === 1 ? "#22d3ee" : "#6366f1"
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse Proximity Attraction / Spring
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        p.x -= (dx / dist) * 1.5;
        p.y -= (dy / dist) * 1.5;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.55;
      ctx.fill();

      // Connecting Constellation Lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const d = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = (1 - d / 110) * 0.22;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(renderParticles);
  }

  renderParticles();
}

/* ==========================================================================
   2. ANIME.JS HERO STAGGER & KINETIC TYPOGRAPHY
   ========================================================================== */
function initHeroAnimations() {
  if (typeof anime === "undefined") return;

  // Split title name letters for staggered kinetic entrance
  const nameHighlight = document.querySelector(".name-highlight");
  if (nameHighlight) {
    const text = nameHighlight.textContent.trim();
    nameHighlight.innerHTML = text
      .split("")
      .map((char) => `<span class="char-span">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");
  }

  const tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 1000
  });

  tl.add({
    targets: ".nav-pill",
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 800,
    easing: "easeOutElastic(1, 0.75)"
  })
  .add({
    targets: ".status-pill",
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 600
  }, "-=500")
  .add({
    targets: ".char-span",
    translateY: [40, 0],
    scale: [0.8, 1],
    opacity: [0, 1],
    delay: anime.stagger(35),
    duration: 800,
    easing: "easeOutBack"
  }, "-=400")
  .add({
    targets: ".hero-subtitle",
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 700
  }, "-=500")
  .add({
    targets: ".hero-cta-group .btn-primary, .hero-cta-group .btn-secondary",
    translateY: [20, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 700
  }, "-=500")
  .add({
    targets: ".hero-stats-strip .stat-item",
    translateY: [20, 0],
    opacity: [0, 1],
    delay: anime.stagger(80),
    duration: 600
  }, "-=400");
}

/* ==========================================================================
   3. 3D CARD TILT & MAGNETIC CURSOR GLOW
   ========================================================================== */
function initCard3DTilt() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    const glow = card.querySelector(".card-mouse-glow");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (glow) {
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
      }

      // 3D Tilt calculation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });
}

/* ==========================================================================
   4. INTERACTIVE PROJECT DEMO WIDGETS
   ========================================================================== */
function initDemoWidgets() {
  // Widget 1: Andromote 3D Phone Gyro Tilt
  const phone = document.getElementById("andromote-phone");
  const stage = document.getElementById("andromote-stage");
  const yawEl = document.getElementById("tel-yaw");
  const pitchEl = document.getElementById("tel-pitch");
  const rollEl = document.getElementById("tel-roll");

  if (phone && stage) {
    let gyroAnime;
    stage.addEventListener("mousemove", (e) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const pitch = (y * 50).toFixed(1);
      const roll = (x * 60).toFixed(1);
      const yaw = ((x + y) * 35).toFixed(1);

      phone.style.transform = `rotateX(${-pitch}deg) rotateY(${roll}deg) rotateZ(${-yaw * 0.4}deg)`;
      if (pitchEl) pitchEl.textContent = `${pitch}°`;
      if (rollEl) rollEl.textContent = `${roll}°`;
      if (yawEl) yawEl.textContent = `${yaw}°`;
    });

    stage.addEventListener("mouseleave", () => {
      if (typeof anime !== "undefined") {
        anime({
          targets: phone,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          duration: 600,
          easing: "easeOutElastic(1, 0.75)"
        });
      }
      if (pitchEl) pitchEl.textContent = "0.0°";
      if (rollEl) rollEl.textContent = "0.0°";
      if (yawEl) yawEl.textContent = "0.0°";
    });
  }

  // Widget 2: Green Journal Streaming Ticker & Candlestick Canvas
  const candleCanvas = document.getElementById("candle-canvas");
  if (candleCanvas) {
    const cctx = candleCanvas.getContext("2d");
    let cwidth = (candleCanvas.width = candleCanvas.offsetWidth || 300);
    let cheight = (candleCanvas.height = 100);

    const candles = [];
    const candleCount = 18;
    let basePrice = 24500;

    for (let i = 0; i < candleCount; i++) {
      const change = (Math.random() - 0.48) * 60;
      const open = basePrice;
      const close = basePrice + change;
      const high = Math.max(open, close) + Math.random() * 20;
      const low = Math.min(open, close) - Math.random() * 20;
      candles.push({ open, close, high, low, green: close >= open });
      basePrice = close;
    }

    function drawCandles() {
      cctx.clearRect(0, 0, cwidth, cheight);
      const step = cwidth / candleCount;

      candles.forEach((c, i) => {
        const x = i * step + step / 2;
        const scaleY = (val) => cheight - ((val - 24350) / 300) * cheight;

        const yOpen = scaleY(c.open);
        const yClose = scaleY(c.close);
        const yHigh = scaleY(c.high);
        const yLow = scaleY(c.low);

        cctx.strokeStyle = c.green ? "#10b981" : "#f43f5e";
        cctx.fillStyle = c.green ? "#10b981" : "#f43f5e";
        cctx.lineWidth = 1.2;

        // Wick
        cctx.beginPath();
        cctx.moveTo(x, yHigh);
        cctx.lineTo(x, yLow);
        cctx.stroke();

        // Body
        const top = Math.min(yOpen, yClose);
        const height = Math.max(Math.abs(yClose - yOpen), 2);
        cctx.fillRect(x - 4, top, 8, height);
      });
    }

    drawCandles();
    setInterval(() => {
      candles.shift();
      const last = candles[candles.length - 1];
      const change = (Math.random() - 0.46) * 50;
      const open = last.close;
      const close = open + change;
      candles.push({
        open,
        close,
        high: Math.max(open, close) + Math.random() * 15,
        low: Math.min(open, close) - Math.random() * 15,
        green: close >= open
      });
      drawCandles();
    }, 1800);
  }

  // Widget 3: Thuddington Audio DSP Waveform
  const waveCanvas = document.getElementById("thuddington-canvas");
  const knockBtn = document.getElementById("knock-btn");
  const knockAlert = document.getElementById("knock-alert");

  if (waveCanvas) {
    const wctx = waveCanvas.getContext("2d");
    let wwidth = (waveCanvas.width = waveCanvas.offsetWidth || 300);
    let wheight = (waveCanvas.height = 80);
    let spike = 0;

    function renderWave() {
      wctx.clearRect(0, 0, wwidth, wheight);
      wctx.beginPath();
      wctx.moveTo(0, wheight / 2);

      const time = Date.now() * 0.005;
      for (let x = 0; x < wwidth; x += 3) {
        const baseNoise = Math.sin(x * 0.05 + time) * 4;
        const shock = spike > 0 ? Math.sin(x * 0.2) * spike * Math.exp(-Math.abs(x - wwidth / 2) / 40) : 0;
        const y = wheight / 2 + baseNoise + shock;
        wctx.lineTo(x, y);
      }

      wctx.strokeStyle = spike > 10 ? "#f59e0b" : "rgba(245, 158, 11, 0.4)";
      wctx.lineWidth = spike > 10 ? 2 : 1;
      wctx.stroke();

      if (spike > 0) spike *= 0.92;
      requestAnimationFrame(renderWave);
    }
    renderWave();

    if (knockBtn) {
      knockBtn.addEventListener("click", () => {
        spike = 36;
        if (knockAlert) {
          knockAlert.textContent = "⚡ THUMP DETECTED: 88.4 dB → [TRIGGER: Win+Shift+S]";
          knockAlert.style.color = "#f59e0b";
          if (typeof anime !== "undefined") {
            anime({
              targets: knockAlert,
              scale: [1.2, 1],
              opacity: [0, 1],
              duration: 400
            });
          }
        }
        showToast("Thuddington: Desk Thump Triggered Shortcut!");
      });
    }
  }

  // Widget 4: Interlude Defender Radar Sweep
  const beam = document.querySelector(".scanner-beam");
  if (beam && typeof anime !== "undefined") {
    anime({
      targets: beam,
      left: ["0%", "100%"],
      duration: 1600,
      loop: true,
      easing: "easeInOutQuad",
      direction: "alternate"
    });
  }
}

/* ==========================================================================
   5. DEEP DIVE MODAL / DRAWER
   ========================================================================== */
function initModalDrawer() {
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalTagline = document.getElementById("modal-tagline");
  const modalBadge = document.getElementById("modal-badge");
  const modalPaneArch = document.getElementById("pane-arch");
  const modalPaneStack = document.getElementById("pane-stack");
  const modalPaneHighlights = document.getElementById("pane-highlights");
  const modalLinksContainer = document.getElementById("modal-links");
  const closeBtn = document.getElementById("modal-close");

  document.querySelectorAll("[data-project-key]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const key = btn.getAttribute("data-project-key");
      const data = PROJECTS_DATA[key];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalTagline.textContent = data.tagline;
      modalBadge.textContent = data.badge;

      modalPaneArch.innerHTML = data.architecture;

      modalPaneStack.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
          ${data.stack.map((s) => `<span class="tech-tag" style="color: var(--accent-cyan); border-color: rgba(34,211,238,0.3); font-size: 0.85rem; padding: 0.4rem 0.8rem;">${s}</span>`).join("")}
        </div>
      `;

      modalPaneHighlights.innerHTML = `
        <ul class="modal-list" style="margin-top: 1rem;">
          ${data.highlights.map((h) => `<li><i class="ri-checkbox-circle-line" style="color: var(--accent-emerald);"></i> ${h}</li>`).join("")}
        </ul>
      `;

      modalLinksContainer.innerHTML = data.links
        .map(
          (l) =>
            `<a href="${l.url}" target="_blank" rel="noopener" class="btn-card-primary" style="font-size: 0.85rem;"><i class="${l.icon}"></i> ${l.label}</a>`
        )
        .join("");

      // Open Modal with Anime.js
      modal.classList.add("active");
      if (typeof anime !== "undefined") {
        anime({
          targets: ".modal-dialog",
          scale: [0.88, 1],
          translateY: [25, 0],
          duration: 350,
          easing: "easeOutElastic(1, 0.8)"
        });
      }
    });
  });

  // Modal Tab Buttons
  document.querySelectorAll(".modal-tab-btn").forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      document.querySelectorAll(".modal-tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".modal-tab-pane").forEach((p) => p.classList.remove("active"));

      tabBtn.classList.add("active");
      const targetPane = document.getElementById(tabBtn.getAttribute("data-tab-target"));
      if (targetPane) {
        targetPane.classList.add("active");
        if (typeof anime !== "undefined") {
          anime({
            targets: targetPane,
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 300,
            easing: "easeOutQuad"
          });
        }
      }
    });
  });

  function closeModal() {
    modal.classList.remove("active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* ==========================================================================
   6. COMMAND PALETTE (⌘K / Ctrl+K)
   ========================================================================== */
function initCommandPalette() {
  const cmdModal = document.getElementById("cmd-modal");
  const cmdInput = document.getElementById("cmd-input");
  const triggerBtn = document.querySelector(".cmd-badge");

  function openCmd() {
    if (!cmdModal) return;
    cmdModal.classList.add("active");
    if (cmdInput) {
      cmdInput.value = "";
      cmdInput.focus();
    }
    if (typeof anime !== "undefined") {
      anime({
        targets: ".cmd-dialog",
        scale: [0.92, 1],
        opacity: [0, 1],
        duration: 250,
        easing: "easeOutQuad"
      });
    }
  }

  function closeCmd() {
    if (cmdModal) cmdModal.classList.remove("active");
  }

  if (triggerBtn) triggerBtn.addEventListener("click", openCmd);

  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (cmdModal && cmdModal.classList.contains("active")) closeCmd();
      else openCmd();
    }
  });

  document.querySelectorAll(".cmd-item").forEach((item) => {
    item.addEventListener("click", () => {
      const action = item.getAttribute("data-action");
      if (action === "copy-email") {
        copyEmail();
      } else if (action && action.startsWith("#")) {
        const el = document.querySelector(action);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (action && action.startsWith("http")) {
        window.open(action, "_blank");
      }
      closeCmd();
    });
  });

  if (cmdModal) {
    cmdModal.addEventListener("click", (e) => {
      if (e.target === cmdModal) closeCmd();
    });
  }
}

/* ==========================================================================
   7. TOAST NOTIFICATIONS & UTILITY ACTIONS
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color: var(--accent-emerald);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  if (typeof anime !== "undefined") {
    anime({
      targets: toast,
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 350,
      easing: "easeOutBack",
      complete: () => {
        setTimeout(() => {
          anime({
            targets: toast,
            translateY: [0, 20],
            opacity: [1, 0],
            duration: 300,
            easing: "easeInQuad",
            complete: () => toast.remove()
          });
        }, 3000);
      }
    });
  } else {
    toast.style.opacity = "1";
    toast.style.transform = "none";
    setTimeout(() => toast.remove(), 3000);
  }
}

window.copyEmail = function () {
  navigator.clipboard.writeText("hndrd2681@gmail.com").then(() => {
    showToast("Copied hndrd2681@gmail.com to clipboard!");
  }).catch(() => {
    showToast("Email: hndrd2681@gmail.com");
  });
};

/* ==========================================================================
   8. ACTIVE NAV SCROLL SPY
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}
