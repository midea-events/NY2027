function doGet(e) {
    
  try {

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    const name = e.parameter.name || 'Не указано';
    const attendance = e.parameter.attendance || 'Не указано';
    const language = e.parameter.language || 'ru';
    
    const rowData = [
      new Date(),
      name,
      attendance,
      language
    ];
    
    sheet.appendRow(rowData);
    
    return HtmlService.createHtmlOutput('<html><body>Success</body></html>');
    
  } catch (error) {

    return HtmlService.createHtmlOutput('<html><body>Error: ' + error.toString() + '</body></html>');

  }

}