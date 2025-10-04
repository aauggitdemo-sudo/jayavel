import './ReportPreview.css'

function ReportPreview({ customerData, reportData, onBack, onReset }) {
  const handlePrint = () => {
    window.print()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  const getStatusClass = (value, min, max) => {
    const numValue = parseFloat(value)
    if (numValue < min) return 'low'
    if (numValue > max) return 'high'
    return 'normal'
  }

  const getStatusText = (value, min, max) => {
    const numValue = parseFloat(value)
    if (numValue < min) return 'Low'
    if (numValue > max) return 'High'
    return 'Normal'
  }

  return (
    <div className="report-preview">
      <div className="report-actions no-print">
        <button className="btn btn-secondary" onClick={onBack}>
          Edit Report
        </button>
        <div className="action-group">
          <button className="btn btn-primary" onClick={handlePrint}>
            Print Report
          </button>
          <button className="btn btn-outline" onClick={onReset}>
            New Report
          </button>
        </div>
      </div>

      <div className="report-content">
        <div className="report-header">
          <div className="lab-info">
            <h1>Jayavel Clinical Laboratory</h1>
            <p>123 Medical Street, Healthcare City</p>
            <p>Phone: +91 98765 43210 | Email: info@jayavellab.com</p>
            <p>NABL Accredited | ISO 9001:2015 Certified</p>
          </div>
          <div className="report-badge">
            <div className="badge-content">
              <span className="badge-label">Report No.</span>
              <span className="badge-number">{reportData.reportNumber}</span>
            </div>
          </div>
        </div>

        <div className="report-title">
          <h2>Blood Test Report</h2>
          <div className="report-date">Report Date: {formatDate(reportData.testDate)}</div>
        </div>

        <div className="patient-info">
          <h3>Patient Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Patient ID:</span>
              <span className="info-value">{customerData.customerId}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">{customerData.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Age:</span>
              <span className="info-value">{customerData.age} years</span>
            </div>
            <div className="info-item">
              <span className="info-label">Gender:</span>
              <span className="info-value">{customerData.gender}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">{customerData.phone}</span>
            </div>
            {customerData.email && (
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{customerData.email}</span>
              </div>
            )}
          </div>
        </div>

        <div className="test-results">
          <h3>Test Results</h3>

          <table className="results-table">
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Result</th>
                <th>Unit</th>
                <th>Normal Range</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="section-header">Complete Blood Count (CBC)</td>
              </tr>
              <tr>
                <td>Hemoglobin</td>
                <td className="result-value">{reportData.hemoglobin}</td>
                <td>g/dL</td>
                <td>12.0 - 16.0</td>
                <td>
                  <span className={`status-badge ${getStatusClass(reportData.hemoglobin, 12, 16)}`}>
                    {getStatusText(reportData.hemoglobin, 12, 16)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>WBC Count</td>
                <td className="result-value">{reportData.wbcCount}</td>
                <td>cells/μL</td>
                <td>4,000 - 11,000</td>
                <td>
                  <span className={`status-badge ${getStatusClass(reportData.wbcCount, 4000, 11000)}`}>
                    {getStatusText(reportData.wbcCount, 4000, 11000)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>RBC Count</td>
                <td className="result-value">{reportData.rbcCount}</td>
                <td>million cells/μL</td>
                <td>4.5 - 5.5</td>
                <td>
                  <span className={`status-badge ${getStatusClass(reportData.rbcCount, 4.5, 5.5)}`}>
                    {getStatusText(reportData.rbcCount, 4.5, 5.5)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Platelet Count</td>
                <td className="result-value">{reportData.plateletCount}</td>
                <td>cells/μL</td>
                <td>150,000 - 450,000</td>
                <td>
                  <span className={`status-badge ${getStatusClass(reportData.plateletCount, 150000, 450000)}`}>
                    {getStatusText(reportData.plateletCount, 150000, 450000)}
                  </span>
                </td>
              </tr>

              {(reportData.bloodSugarFasting || reportData.bloodSugarPP) && (
                <>
                  <tr>
                    <td colSpan="5" className="section-header">Blood Sugar Tests</td>
                  </tr>
                  {reportData.bloodSugarFasting && (
                    <tr>
                      <td>Fasting Blood Sugar</td>
                      <td className="result-value">{reportData.bloodSugarFasting}</td>
                      <td>mg/dL</td>
                      <td>70 - 100</td>
                      <td>
                        <span className={`status-badge ${getStatusClass(reportData.bloodSugarFasting, 70, 100)}`}>
                          {getStatusText(reportData.bloodSugarFasting, 70, 100)}
                        </span>
                      </td>
                    </tr>
                  )}
                  {reportData.bloodSugarPP && (
                    <tr>
                      <td>Post-Prandial Blood Sugar</td>
                      <td className="result-value">{reportData.bloodSugarPP}</td>
                      <td>mg/dL</td>
                      <td>100 - 140</td>
                      <td>
                        <span className={`status-badge ${getStatusClass(reportData.bloodSugarPP, 100, 140)}`}>
                          {getStatusText(reportData.bloodSugarPP, 100, 140)}
                        </span>
                      </td>
                    </tr>
                  )}
                </>
              )}

              {reportData.cholesterolTotal && (
                <>
                  <tr>
                    <td colSpan="5" className="section-header">Lipid Profile</td>
                  </tr>
                  <tr>
                    <td>Total Cholesterol</td>
                    <td className="result-value">{reportData.cholesterolTotal}</td>
                    <td>mg/dL</td>
                    <td>&lt; 200</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(reportData.cholesterolTotal, 0, 200)}`}>
                        {getStatusText(reportData.cholesterolTotal, 0, 200)}
                      </span>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        {reportData.notes && (
          <div className="notes-section">
            <h3>Additional Notes</h3>
            <p>{reportData.notes}</p>
          </div>
        )}

        <div className="report-footer">
          <div className="signature-section">
            <div className="signature-line">
              <div className="signature-placeholder"></div>
              <p className="signature-label">Lab Technician</p>
            </div>
            <div className="signature-line">
              <div className="signature-placeholder"></div>
              <p className="signature-label">Authorized Signatory</p>
            </div>
          </div>
          <div className="footer-note">
            <p><strong>Note:</strong> This report is generated electronically and valid without signature. For any queries, please contact the laboratory.</p>
            <p className="disclaimer">These results should be correlated clinically. Please consult your physician for proper interpretation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportPreview
