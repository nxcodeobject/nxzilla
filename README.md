# Nxzilla — Website

Landing page untuk **Nxzilla** (`D:\CLI\Nxzilla`) — jembatan terminal ke server
remote: SSH/SFTP dan FTP/FTPS, TUI keyboard-driven, tanpa dependensi.

## Struktur

```
Nxzilla/
  index.html   halaman utama (ID default, EN via i18n)
  index.js     i18n ID/EN + interaksi ringan (navbar, bahasa)
  style.css    tema terminal gelap hangat (charcoal + oranye TUI)
  logo.png     logo
  README.md    dokumen ini
```

## Jalankan lokal

```sh
node website/serve.mjs   # atau server statis apa pun di folder ini
```

## Pratinjau deploy

- Repo website: `nxcodeobject/nxzilla` (GitHub Pages)
- Repo CLI: `github.com/iyanrsaleh/nxzilla`
- Pola & struktur mengikuti situs NxPort / NxfireDB (ekosistem NXDOM).
