# Google Docs List to Plain Text Converter

## 💡 Use Case: Clean Copy-Paste from Docs

Ever tried to copy a beautifully formatted list from Google Docs and paste it into a simple text app like **Telegram**, WhatsApp, a basic email client, or a code editor? Often, the formatting gets messy, turns into strange characters, or loses its structure entirely, making it hard to read.

This Google Apps Script is designed to solve that problem! It automatically transforms all formatted lists (numbered or bulleted) in your Google Doc into simple, plain text paragraphs, ready for a clean copy-paste into any application that doesn't handle rich text well.

## 🚀 Features

- Converts all **numbered lists** (e.g., `1. Item One` becomes `1. Item One`)
- Converts all **bulleted lists** (e.g., `• Item Two` becomes `- Item Two`)
- Processes the entire document with a single click
- Adds a **custom menu item** to Google Docs for easy access

## 🚀 How to Use (Installation Instructions)

Follow these steps to add and run this script in your Google Docs:

1. **Open your Google Doc:**  
   Go to the Google Document where you want to transform the lists.

2. **Access Apps Script:**  
   In the Google Docs menu, click on **Extensions** > **Apps Script**. This will open a new browser tab with the Apps Script editor.

3. **Paste the Code:**
   - In the Apps Script editor, you'll see a default file named `Code.gs`.
   - **Delete all the content** in `Code.gs`.
   - Copy the entire script (from the original `README.md`) and **paste it** into the `Code.gs` file.

4. **Save the Project:**  
   Click the **Save project** icon (looks like a floppy disk) in the toolbar. You can also give your script project a meaningful name (e.g., `Docs List Transformer`) when prompted.

5. **Authorize the Script (One-Time Setup):**
   - Back in the Apps Script editor, from the dropdown menu next to the "Run" button (it might say `replaceListsWithPlainText` or `onOpen`), select the `onOpen` function.
   - Click the **Run** button (looks like a play icon).
   - A popup will appear asking for authorization. Click **Review permissions**.
   - Select your Google Account.
   - You will see a warning that "Google hasn't verified this app." This is normal because you just created it.
   - Click **Advanced** (bottom left) and then **Go to [project name]**.
   - Finally, click **Allow** to grant the script permission to modify your Google Docs.

6. **Go back to your Google Doc:**  
   Return to your Google Document tab.

7. **Run the Script:**
   - If you don't see a new menu item immediately, **refresh your Google Docs page**.
   - You should now see a new menu item in your Google Docs menu bar called **My Functions**.
   - Click on **My Functions** > **Lists to Plain Text**.

The script will now process your document, replacing all formatted lists with their plain text equivalents!

