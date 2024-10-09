import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 假設你運行了本地的 Vue 頁面，URL 是 `http://localhost:8080/page`
  await page.goto("http://localhost:5173/#en", { waitUntil: "networkidle0" });

  await page.addStyleTag({ path: "./pdf/style.css" });

  // 將該頁面轉換為 PDF
  await page.pdf({
    path: "./pdf/resume.pdf", // PDF 文件的路徑和名稱
    width: "8.5in", // Letter 寬度
    height: "11in", // Letter 高度
    printBackground: true, // 保留背景樣式
    margin: {
      top: "8px", // 上邊距
      right: "8px", // 右邊距
      bottom: "8px", // 下邊距
      left: "8px", // 左邊距
    },
  });

  await browser.close();
})();
