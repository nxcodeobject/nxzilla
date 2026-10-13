// Nxzilla - landing page: i18n ID/EN + interaksi ringan

const I18N = {
  id: {
    "meta.title": "Nxzilla - Jembatan Terminal ke Server Remote untuk Windows & Linux",
    "meta.desc": "Nxzilla - jalankan nxzilla di folder proyek, berkas proyek remote (SSH/SFTP atau FTP/FTPS) ditarik masuk ke folder kerja Anda. Push/pull perubahan dari terminal, TUI keyboard-driven. Tanpa dependensi.",
    "nav.features": "Fitur",
    "nav.tui": "TUI",
    "nav.cli": "CLI",
    "nav.install": "Pasang",
    "hero.badge": "nxzilla v0.1.0 · Windows & Linux · MIT",
    "hero.title": "Folder kerja Anda, <span class=\"accent\">proyek remote</span> Anda",
    "hero.desc": "Buka terminal di folder proyek, jalankan <strong>nxzilla</strong> - berkas proyek remote (SSH/SFTP atau FTP/FTPS) ditarik masuk ke folder kerja itu. Edit di editor favorit, lalu <strong>push</strong> / <strong>pull</strong> perubahan lewat satu perintah.",
    "hero.cta1": "Mulai Pasang",
    "hero.cta2": "Lihat Fitur",
    "feat.title": "Fitur",
    "feat.sub": "Satu alur dari terminal - tanpa dua panel, tanpa drag-and-drop.",
    "feat.1t": "Run di Folder Kerja (run-in-cwd)",
    "feat.1d": "Jalankan nxzilla di folder proyek - berkas remote ditarik masuk ke folder itu. Editor, IDE, dan build tool lokal langsung bekerja tanpa setup tambahan.",
    "feat.2t": "Push / Pull Satu Perintah",
    "feat.2d": "nxzilla push mengirim perubahan lokal ke server; nxzilla pull menarik perubahan server. mtime lokal disamakan dengan remote agar perbandingan berikutnya akurat.",
    "feat.3t": "SSH/SFTP & FTP/FTPS",
    "feat.3d": "SSH lewat OpenSSH bawaan (sftp batch) di Windows 10+ dan Linux; FTP/FTPS lewat curl. Dua backend di balik satu mesin sinkron - tanpa dependensi yang di-build sendiri.",
    "feat.4t": "Ruang Global: Daftar Proyek",
    "feat.4d": "Jalankan nxzilla di luar proyek - beranda daftar semua proyek Nxzilla. Buka, push, pull, dan kelola profil koneksi dari satu layar - tanpa cd dulu.",
    "feat.5t": "Conflict Detection & Baseline",
    "feat.5d": "Baseline sinkron (.nxzilla-state.json) merekam kondisi terakhir - bila lokal dan remote sama-sama berubah, berkas ditandai konflik (C) dan dilewati sampai --force. Dry-run melihat dulu tanpa mengubah.",
    "feat.6t": "TUI Flicker-Free",
    "feat.6d": "Tampilan TUI keyboard-driven bergaya NxPort: header oranye, synchronized output, tanpa kedip, dengan progress transfer per berkas. Fallback teks non-interaktif untuk script dan pipe.",
    "key.title": "Kontrol TUI",
    "key.sub": "Keyboard-driven: satu tombol untuk setiap aksi.",
    "key.move": "Pilih proyek / perubahan",
    "key.open": "Buka proyek terpilih",
    "key.push": "Push (dengan konfirmasi)",
    "key.pull": "Pull",
    "key.status": "Segarkan status sinkronisasi",
    "key.add": "Tambah proyek",
    "key.edit": "Edit / hapus proyek dari registry",
    "key.config": "Kelola profil koneksi",
    "key.refresh": "Refresh daftar",
    "key.global": "Buka ruang global",
    "key.quit": "Keluar",
    "two.title": "Dua Lingkungan, Satu Perintah",
    "two.1t": "Lingkungan Proyek",
    "two.1d": "nxzilla dijalankan di folder yang punya .nxzilla.json - sinkronisasi proyek itu: pull, push, dan status langsung di dashboard.",
    "two.2t": "Lingkungan Global",
    "two.2d": "nxzilla di luar proyek - beranda Nxzilla: daftar semua proyek terdaftar dengan status synced / dirty / error, siap dibuka atau disinkron.",
    "two.3t": "Profil Koneksi",
    "two.3d": "connections.json menyimpan profil ssh/ftp/ftps (host, port, user, remote path). .nxzilla.json di tiap proyek cukup merujuk nama profilnya.",
    "two.status": "<strong>Status proyek:</strong> <code>synced</code> lokal & remote sama · <code>dirty</code> ada perubahan belum di-push · <code>error</code> gagal terhubung · <code>unknown</code> belum pernah disinkron",
    "cli.title": "Baris Perintah",
    "cli.sub": "Semua alur sinkronisasi bisa dijalankan dari perintah - siap untuk script.",
    "cli.compare": "<strong>Bukan FileZilla:</strong> tidak ada dua panel lokal vs remote, tidak ada drag-and-drop. Yang ada satu alur: folder kerja Anda <em>adalah</em> proyek remote - menggantikan cara manual menyusun folder <code>&lt;user&gt;@&lt;host&gt;\\&lt;protokol&gt;</code>.",
    "ins.title": "Cara Pasang",
    "ins.sub": "Build dari source - satu berkas C++, tanpa dependensi pihak ketiga.",
    "ins.note": "Butuh Visual Studio (workload Desktop development with C++) di Windows, atau g++ di Linux. Untuk SSH, OpenSSH client bawaan Windows 10+/distro Linux sudah dipakai - tidak perlu install apa pun lagi.",
    "foot.tag": "Jembatan terminal ke server remote - bagian dari ekosistem NXDOM.",
    "foot.company": "PT Tatiye Digital Solusindo",
    "foot.copy": "MIT License · © 2026 NXDOM"
  },
  en: {
    "meta.title": "Nxzilla - Terminal Bridge to Remote Servers for Windows & Linux",
    "meta.desc": "Nxzilla - run nxzilla in your project folder and remote files (SSH/SFTP or FTP/FTPS) are pulled into your working directory. Push/pull changes from the terminal, keyboard-driven TUI. Zero dependencies.",
    "nav.features": "Features",
    "nav.tui": "TUI",
    "nav.cli": "CLI",
    "nav.install": "Install",
    "hero.badge": "nxzilla v0.1.0 · Windows & Linux · MIT",
    "hero.title": "Your working folder, <span class=\"accent\">your remote project</span>",
    "hero.desc": "Open a terminal in your project folder and run <strong>nxzilla</strong> - remote project files (SSH/SFTP or FTP/FTPS) are pulled into that working directory. Edit in your favorite editor, then <strong>push</strong> / <strong>pull</strong> changes with a single command.",
    "hero.cta1": "Get Started",
    "hero.cta2": "See Features",
    "feat.title": "Features",
    "feat.sub": "One flow from the terminal - no dual panels, no drag-and-drop.",
    "feat.1t": "Runs in Your Working Folder (run-in-cwd)",
    "feat.1d": "Run nxzilla in a project folder - remote files are pulled right into it. Your local editors, IDEs, and build tools work immediately with no extra setup.",
    "feat.2t": "One-Command Push / Pull",
    "feat.2d": "nxzilla push sends local changes to the server; nxzilla pull brings server changes down. Local mtimes are matched to remote so the next comparison stays accurate.",
    "feat.3t": "SSH/SFTP & FTP/FTPS",
    "feat.3d": "SSH via the built-in OpenSSH client (sftp batch) on Windows 10+ and Linux; FTP/FTPS via curl. Two backends behind one sync engine - no dependencies to build yourself.",
    "feat.4t": "Global Space: Project List",
    "feat.4d": "Run nxzilla outside a project - the home listing every Nxzilla project. Open, push, pull, and manage connection profiles from one screen - no cd needed.",
    "feat.5t": "Conflict Detection & Baseline",
    "feat.5d": "A sync baseline (.nxzilla-state.json) records the last synced state - when both local and remote changed, the file is marked as a conflict (C) and skipped until --force. Dry-run previews without touching anything.",
    "feat.6t": "Flicker-Free TUI",
    "feat.6d": "A keyboard-driven TUI in the NxPort style: orange header, synchronized output, no flicker, with per-file transfer progress. Non-interactive text fallback for scripts and pipes.",
    "key.title": "TUI Controls",
    "key.sub": "Keyboard-driven: one key per action.",
    "key.move": "Select project / change",
    "key.open": "Open the selected project",
    "key.push": "Push (with confirmation)",
    "key.pull": "Pull",
    "key.status": "Refresh sync status",
    "key.add": "Add a project",
    "key.edit": "Edit / remove a project from the registry",
    "key.config": "Manage connection profiles",
    "key.refresh": "Refresh the list",
    "key.global": "Open the global space",
    "key.quit": "Quit",
    "two.title": "Two Environments, One Command",
    "two.1t": "Project Environment",
    "two.1d": "Running nxzilla in a folder with .nxzilla.json syncs that project: pull, push, and status right on the dashboard.",
    "two.2t": "Global Environment",
    "two.2d": "Running nxzilla outside a project opens the Nxzilla home: every registered project with its synced / dirty / error status, ready to open or sync.",
    "two.3t": "Connection Profiles",
    "two.3d": "connections.json stores ssh/ftp/ftps profiles (host, port, user, remote path). Each project's .nxzilla.json just references a profile by name.",
    "two.status": "<strong>Project status:</strong> <code>synced</code> local & remote match · <code>dirty</code> unpushed local changes · <code>error</code> connection failed · <code>unknown</code> never synced",
    "cli.title": "Command Line",
    "cli.sub": "Every sync flow can be run as a command - ready for scripting.",
    "cli.compare": "<strong>Not FileZilla:</strong> no local-vs-remote dual panels, no drag-and-drop. Just one flow: your working folder <em>is</em> the remote project - replacing the manual habit of arranging <code>&lt;user&gt;@&lt;host&gt;\\&lt;protocol&gt;</code> folders.",
    "ins.title": "Installation",
    "ins.sub": "Build from source - a single C++ file, no third-party dependencies.",
    "ins.note": "Requires Visual Studio (Desktop development with C++ workload) on Windows, or g++ on Linux. For SSH, the OpenSSH client bundled with Windows 10+/Linux distros is used - nothing more to install.",
    "foot.tag": "Terminal bridge to remote servers - part of the NXDOM ecosystem.",
    "foot.company": "PT Tatiye Digital Solusindo",
    "foot.copy": "MIT License · © 2026 NXDOM"
  }
};

function setLang(lang) {
  if (!I18N[lang]) lang = "id";
  document.documentElement.lang = lang;
  try { localStorage.setItem("nxzilla-lang", lang); } catch {}

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === lang);
  });

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-html")];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(",").forEach((rule) => {
      const [attr, key] = rule.split("|");
      if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });
  if (dict["meta.title"]) document.title = dict["meta.title"];
}

function handleScroll() {
  const navbar = document.getElementById("navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  const navLinks = document.getElementById("navLinks");
  const navToggle = document.getElementById("navToggle");

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langBtn));
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  let saved = null;
  try { saved = localStorage.getItem("nxzilla-lang"); } catch {}
  if (saved) {
    setLang(saved);
  } else {
    const browserLang = (navigator.language || "id").slice(0, 2).toLowerCase();
    setLang(browserLang === "id" ? "id" : "en");
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
