# t2ss-hp

T2サミットソリューションズ合同会社 (T2SS) コーポレートサイト。

- `docs/` — GitHub Pages で公開する静的サイト本体（`index.html` / `news.html` / `company.html` / `recruit.html`）
- `T2TSSホームページリニューアル/` — Claude Design で作成したデザイン原本（`T2SS Website v3.dc.html` をベースに実装）

## ローカルで確認

```sh
python3 -m http.server 8000 --directory docs
# http://localhost:8000
```
