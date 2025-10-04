import { useState, useEffect } from 'react'
import './BloodReportForm.css'

function BloodReportForm({ onSubmit, onBack, initialData, customerName }) {
  const [formData, setFormData] = useState({
    reportNumber: '',
    testDate: new Date().toISOString().split('T')[0],
    hemoglobin: '',
    wbcCount: '',
    rbcCount: '',
    plateletCount: '',
    bloodSugarFasting: '',
    bloodSugarPP: '',
    cholesterolTotal: '',
    notes: ''
  })

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="blood-report-form">
      <h2>Blood Test Results</h2>
      <p className="form-description">Enter test results for {customerName}</p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="reportNumber">Report Number *</label>
            <input
              type="text"
              id="reportNumber"
              name="reportNumber"
              value={formData.reportNumber}
              onChange={handleChange}
              placeholder="e.g., RPT-001"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="testDate">Test Date *</label>
            <input
              type="date"
              id="testDate"
              name="testDate"
              value={formData.testDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="test-section">
          <h3>Complete Blood Count (CBC)</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="hemoglobin">Hemoglobin (g/dL) *</label>
              <input
                type="number"
                id="hemoglobin"
                name="hemoglobin"
                value={formData.hemoglobin}
                onChange={handleChange}
                placeholder="Normal: 12-16"
                step="0.1"
                min="0"
                required
              />
              <span className="helper-text">Normal range: 12.0 - 16.0 g/dL</span>
            </div>

            <div className="form-group">
              <label htmlFor="wbcCount">WBC Count (cells/μL) *</label>
              <input
                type="number"
                id="wbcCount"
                name="wbcCount"
                value={formData.wbcCount}
                onChange={handleChange}
                placeholder="Normal: 4000-11000"
                step="1"
                min="0"
                required
              />
              <span className="helper-text">Normal range: 4,000 - 11,000 cells/μL</span>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="rbcCount">RBC Count (million cells/μL) *</label>
              <input
                type="number"
                id="rbcCount"
                name="rbcCount"
                value={formData.rbcCount}
                onChange={handleChange}
                placeholder="Normal: 4.5-5.5"
                step="0.1"
                min="0"
                required
              />
              <span className="helper-text">Normal range: 4.5 - 5.5 million cells/μL</span>
            </div>

            <div className="form-group">
              <label htmlFor="plateletCount">Platelet Count (cells/μL) *</label>
              <input
                type="number"
                id="plateletCount"
                name="plateletCount"
                value={formData.plateletCount}
                onChange={handleChange}
                placeholder="Normal: 150000-450000"
                step="1000"
                min="0"
                required
              />
              <span className="helper-text">Normal range: 150,000 - 450,000 cells/μL</span>
            </div>
          </div>
        </div>

        <div className="test-section">
          <h3>Blood Sugar Tests</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bloodSugarFasting">Fasting Blood Sugar (mg/dL)</label>
              <input
                type="number"
                id="bloodSugarFasting"
                name="bloodSugarFasting"
                value={formData.bloodSugarFasting}
                onChange={handleChange}
                placeholder="Normal: 70-100"
                step="1"
                min="0"
              />
              <span className="helper-text">Normal range: 70 - 100 mg/dL</span>
            </div>

            <div className="form-group">
              <label htmlFor="bloodSugarPP">Post-Prandial Blood Sugar (mg/dL)</label>
              <input
                type="number"
                id="bloodSugarPP"
                name="bloodSugarPP"
                value={formData.bloodSugarPP}
                onChange={handleChange}
                placeholder="Normal: 100-140"
                step="1"
                min="0"
              />
              <span className="helper-text">Normal range: 100 - 140 mg/dL</span>
            </div>
          </div>
        </div>

        <div className="test-section">
          <h3>Lipid Profile</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cholesterolTotal">Total Cholesterol (mg/dL)</label>
              <input
                type="number"
                id="cholesterolTotal"
                name="cholesterolTotal"
                value={formData.cholesterolTotal}
                onChange={handleChange}
                placeholder="Normal: <200"
                step="1"
                min="0"
              />
              <span className="helper-text">Desirable: Less than 200 mg/dL</span>
            </div>
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Enter any additional observations or remarks"
            rows="3"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onBack}>
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Generate Report
          </button>
        </div>
      </form>
    </div>
  )
}

export default BloodReportForm
