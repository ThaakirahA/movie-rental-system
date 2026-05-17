class Report {
  constructor(reportId, reportType) {
    this.reportId = reportId;
    this.reportDate = new Date();
    this.reportType = reportType;
  }

  generateReport() {
    return `${this.reportType} report generated`;
  }

  exportReport() {
    return `${this.reportType} report exported`;
  }
}

module.exports = Report;